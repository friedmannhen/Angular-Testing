import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movieSubject$: Subject<Movie> = new Subject();
  private _movies: Movie[] = [];
  private visable: boolean = true;
  constructor() {}
  public getMovies(): Movie[] {
    return this._movies;
  }
  public setMovies(movies: Movie[]): void {
    this._movies = [...this._movies, ...movies];
  }
  public isVisble(): boolean {
    return this.visable;
  }
  public toggleVisble(){
    this.visable = !this.visable;
  }
}
