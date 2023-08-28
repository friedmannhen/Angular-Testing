import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movieSubject$: Subject<Movie> = new Subject();
  private _movies: Movie[] = [];
  private visable: Subject<boolean> = new Subject();
  private _visible: boolean = true;
  constructor() {}
  public getMovies(): Movie[] {
    return this._movies;
  }
  public setMovies(movies: Movie[]): void {
    this._movies = [...this._movies, ...movies];
  }
  public isVisble(): Observable<boolean> {
    return this.visable;
  }
  public toggleVisble() {
    this._visible = !this._visible;
    this.visable.next(this._visible);
  }
}
