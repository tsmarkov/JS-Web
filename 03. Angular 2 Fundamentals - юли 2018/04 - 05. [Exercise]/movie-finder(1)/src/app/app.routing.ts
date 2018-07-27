import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Components
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';


const routes: Routes = [
    { path: '/', component: MoviesComponent },
    { path: 'movie/:id', component: MovieComponent }
]

export class AppRoutingModule {
}