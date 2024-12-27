import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id?: number; // Identificador de la película
  title: string;
  director: string;
  genre: string;
  releaseYear: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:5191/api/Movies'; 

  constructor(private http: HttpClient) {}

  // Obtener todas las películas
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  // Obtener una película específica
  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  // Agregar una película
   addMovie(movie: Movie): Observable<Movie> {
    console.log('Enviando datos al servicio addMovie:', movie);
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  // Actualizar una película
  updateMovie(id: number, movie: Movie): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, movie);
  }

  // Eliminar una película
  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
