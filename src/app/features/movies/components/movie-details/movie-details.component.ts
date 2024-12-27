import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService, Movie } from '../../../../core/services/movie.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  standalone: true,
  imports: [NgIf] 
})
export class MovieDetailsComponent implements OnInit {
  movieId!: number;
  movie!: Movie | null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchMovieDetails();
  }

  fetchMovieDetails(): void {
    this.movieService.getMovie(this.movieId).subscribe(
      (data) => {
        console.log('Detalles de la película:', data);
        this.movie = data;
      },
      (error) => {
        console.error('Error al obtener los detalles:', error);
        this.movie = null;
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/']); // Redirige a la lista de películas
  }
}
