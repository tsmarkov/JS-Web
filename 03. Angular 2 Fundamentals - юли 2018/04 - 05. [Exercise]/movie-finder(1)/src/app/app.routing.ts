import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'movie/:id', component: MovieDetailsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}