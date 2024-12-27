import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../../../../core/services/movie.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  standalone: true,
  imports: [NgFor] 
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    console.log('Cargando lista de películas');
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe(
      (data) => {
        console.log('Películas obtenidas:', data);
        this.movies = data;
      },
      (error) => console.error('Error al cargar películas:', error)
    );
  }

  navigateToAdd(): void {
    console.log('Navegando a agregar película');
    this.router.navigate(['/add']);
  }

  navigateToEdit(movieId: number): void {
    console.log(`Navegando a editar película con ID: ${movieId}`);
    this.router.navigate([`/edit/${movieId}`]);
  }

  onDelete(movieId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta película?')) {
      this.movieService.deleteMovie(movieId).subscribe(
        () => {
          alert('Película eliminada con éxito');
          this.loadMovies(); // Recargar la lista de películas
        },
        (error) => {
          console.error('Error al eliminar la película:', error);
          alert('Error al eliminar la película. Inténtalo de nuevo.');
        }
      );
    }
  }

  viewDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }
  
}
