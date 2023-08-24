import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movieSubject$: Subject<Movie> = new Subject;
  private _movies: Movie[] = [];
  constructor() {}
  public getMovies(): Movie[] {
    return this._movies;
  }
  public setMovies(movies: Movie[]): void {
    this._movies = [...this._movies,...movies];
  }
}
