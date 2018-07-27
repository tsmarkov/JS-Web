// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './service/movies.service';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieComponent } from './movie/movie.component'
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
