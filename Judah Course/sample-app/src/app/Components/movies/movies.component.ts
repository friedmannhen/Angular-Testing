import { Component, SimpleChanges } from '@angular/core';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  public listOfMovies: Movie[] = [
    {
      name: 'Iron Man',
      mainCharacter: 'Tony Stark',
      rating: 7.1,
      release: new Date(),
      img: 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg',
    },
    {
      name: 'The lord Of The Rings',
      mainCharacter: 'Frudo',
      rating: 9.2,
      release: new Date(),
      img: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UY2936_.jpg',
    },
    {
      name: 'Avatar',
      mainCharacter: 'Jake',
      rating: 9.0,
      release: new Date(),
      img: 'https://lumiere-a.akamaihd.net/v1/images/p_20cs_avatarwayofwater_mayupdate_1710_260aa445.jpeg?region=0%2C0%2C540%2C810',
    },
  ];
  public deleteMovie(movieIndex: number): void {
    this.listOfMovies.splice(movieIndex,1);
  }
}
