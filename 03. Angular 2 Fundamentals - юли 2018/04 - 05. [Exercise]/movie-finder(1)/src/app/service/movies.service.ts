import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = 'c27f65528b029d7ce91683721ef6b744';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private path: string;
  private popular: string;
  private theaters: string;
  private kids: string;
  private topRated: string;
  private bestDramas: string;
  private authentication: string;

  constructor(private http: HttpClient) {
    this.path = 'https://api.themoviedb.org/3/';
    this.popular = 'discover/movie?sort_by=popularity.desc';
    this.theaters = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
    this.kids = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc?';
    this.topRated = 'movie/top_rated?'
    this.bestDramas = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'
    this.authentication = '&api_key=';
  }


  getPopular() {
    return this.http.get(this.path + this.popular + this.authentication + API_KEY)
  }

  getTheater() {
    return this.http.get(this.path + this.theaters + this.authentication + API_KEY)
  }

  getKids() {
    return this.http.get(this.path + this.kids + this.authentication + API_KEY)
  }

  getTopRated() {
    return this.http.get(this.path + this.topRated + this.authentication + API_KEY)
  }

  getBestDramas() {
    return this.http.get(this.path + this.bestDramas + this.authentication + API_KEY)
  }
}
