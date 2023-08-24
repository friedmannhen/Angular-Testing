import { Component } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  constructor(private movieService: MovieService) {}
  public movies: Movie[] = [];
  
  ngOnInit(): void {
    this.movieService.movieSubject$.subscribe(data =>{
      this.movies.push(data);
    });
  }
  public deleteMovie(movieIndex: number): void {
    this.movies.splice(movieIndex, 1);
  }
}
