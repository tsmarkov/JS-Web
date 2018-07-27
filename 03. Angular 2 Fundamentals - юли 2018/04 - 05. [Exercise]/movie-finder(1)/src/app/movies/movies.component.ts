import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private popular;
  private theaters;
  private kids;
  private topRated;
  private bestDramas;

  constructor(private MoviesService: MoviesService) { }

  ngOnInit() {
    this.MoviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data;
        console.log(this.popular);
      })

    this.MoviesService
      .getTheater()
      .subscribe(data => {
        this.theaters = data;
        console.log(this.theaters);
      })

    this.MoviesService
      .getKids()
      .subscribe(data => {
        this.kids = data;
        console.log(this.kids);
      })

    this.MoviesService
      .getTopRated()
      .subscribe(data => {
        this.topRated = data;
        console.log(this.topRated);
      })

    this.MoviesService
      .getBestDramas()
      .subscribe(data => {
        this.bestDramas = data;
        console.log(this.bestDramas);
      })
  }
}
