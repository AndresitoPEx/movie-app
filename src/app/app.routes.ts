import { Routes } from '@angular/router';
import { MovieListComponent } from './features/movies/components/movie-list/movie-list.component';
import { MovieAddComponent } from './features/movies/components/movie-add/movie-add.component';
import { MovieEditComponent } from './features/movies/components/movie-edit/movie-edit.component';
import { MovieDetailsComponent } from './features/movies/components/movie-details/movie-details.component';


export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'add', component: MovieAddComponent },
  { path: 'edit/:id', component: MovieEditComponent },
  { path: 'details/:id', component: MovieDetailsComponent }
];
