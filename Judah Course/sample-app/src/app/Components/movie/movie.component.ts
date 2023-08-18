import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie.interface';

var count: number = 0;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  constructor() {}
  @Input() movie!: Movie;
  @Input() borderWidth!: Number;
  @Input() movieIndex!: number;
  @Output() onDeleteMovie: EventEmitter<number> = new EventEmitter;
  public deleteMovie() {
    this.onDeleteMovie.emit(this.movieIndex);
  }
}
