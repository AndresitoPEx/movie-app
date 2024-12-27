import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MovieService, Movie } from '../../../../core/services/movie.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf]
})
export class MovieEditComponent implements OnInit {
  movieForm: FormGroup;
  movieId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      genre: ['', Validators.required],
      releaseYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la película desde la ruta
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID de la película a editar:', this.movieId);

    // Cargar los datos de la película
    this.movieService.getMovie(this.movieId).subscribe((movie: Movie) => {
      this.movieForm.patchValue(movie); // Rellenar el formulario con los datos de la película
    });
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      console.log('Formulario de edición válido:', this.movieForm.value);

      this.movieService.updateMovie(this.movieId, this.movieForm.value).subscribe(
        () => {
          alert('Película actualizada con éxito');
          this.router.navigate(['/']); // Regresa a la lista de películas
        },
        (error) => {
          console.error('Error al actualizar la película:', error);
          alert('Error al actualizar la película. Inténtalo de nuevo.');
        }
      );
    } else {
      console.warn('El formulario de edición no es válido');
    }
  }
}
