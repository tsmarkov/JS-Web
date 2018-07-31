import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
// import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private popular: Object;
  private theaters: Object;
  private kids: Object;
  private topRated: Object;
  private bestDramas: Object;

  constructor(private MoviesService: MoviesService) { }

  ngOnInit() {
    this.MoviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data.results;
        console.log('POP');
        console.log(this.popular);
      })

    this.MoviesService
      .getTheater()
      .subscribe(data => {
        this.theaters = data.results;
        console.log(this.theaters);
      })

    this.MoviesService
      .getKids()
      .subscribe(data => {
        this.kids = data.results;
        console.log(this.kids);
      })

    this.MoviesService
      .getTopRated()
      .subscribe(data => {
        this.topRated = data.results;
        console.log(this.topRated);
      })

    this.MoviesService
      .getBestDramas()
      .subscribe(data => {
        this.bestDramas = data.results;
        console.log(this.bestDramas);
      })
  }
}
