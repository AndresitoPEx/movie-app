import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../../../../core/services/movie.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf] 
})
export class MovieAddComponent {
  movieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) {
    console.log('MovieAddComponent inicializado'); 
    console.log('Inyectando MovieService:', this.movieService); 
    console.log('Inyectando Router:', this.router); 
    

    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      genre: ['', Validators.required],
      releaseYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }

  onSubmit(): void {
    console.log('Formulario enviado'); // Log para confirmar el envío
    console.log('Datos del formulario:', this.movieForm.value); // Verifica los datos del formulario

    if (this.movieForm.valid) {
      console.log('El formulario es válido');
      this.movieService.addMovie(this.movieForm.value).subscribe(
        (response) => {
          console.log('Respuesta del servicio:', response); // Respuesta exitosa
          alert('Película agregada con éxito');
          this.router.navigate(['/']); // Regresa a la lista de películas
        },
        (error) => {
          console.error('Error al agregar película:', error); // Log del error
          alert('Error al agregar película. Inténtalo de nuevo.');
        }
      );
    } else {
      console.warn('El formulario no es válido'); // Log cuando es inválido
    }
  }
}
