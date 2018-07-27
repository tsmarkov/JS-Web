import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private popular;
  // public theaters;

  constructor(private movies: MoviesService) { }

  ngOnInit() {
    this.movies
      .getPopular()
      .subscribe(data => {
        console.log(data);
        this.popular = data;
      })

    // this.movies
    //   .getPopular()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.theaters = data;
    //   })
    //   .unsubscribe()
  }

}
