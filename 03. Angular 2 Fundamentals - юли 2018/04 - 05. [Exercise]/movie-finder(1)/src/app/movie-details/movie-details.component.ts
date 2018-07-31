import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie: Movie;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];

      this.moviesService
        .getMovieById(id)
        .subscribe((movie) => {
          console.log(movie);
          
          this.movie = movie;
        })
    })
  }

}
