import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

var count: number = 0;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  public ratingBadge: number = 0;
  constructor(private movieService: MovieService) {}
  @Input() movie!: Movie;
  @Input() movieIndex!: number;
  @Output() onDeleteMovie: EventEmitter<number> = new EventEmitter();
  public deleteMovie() {
    this.onDeleteMovie.emit(this.movieIndex);
  }
  public incBadge() {
    this.ratingBadge++;
  }

  toggleForm(): void {
    this.movieService.toggleVisble();
  }
}
