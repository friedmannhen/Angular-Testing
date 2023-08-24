import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss'],
})
export class TemplateDrivenFormsComponent {
  @ViewChild('f') form: any;
  constructor(private movieService: MovieService) {}
  public onSubmitForm(): void {
    var newMovie: Movie;

    if (this.form.valid) {
      newMovie = {
        name: this.form.value.Name,
        mainCharacter: this.form.value.MainChar,
        rating: this.form.value.Rating,
        release: new Date(),
        img: this.form.value.Image,
      };
      // 'https://c8.alamy.com/comp/RC04FA/old-fashioned-movie-film-camera-logo-design-template-black-and-white-vector-illustration-RC04FA.jpg',
      this.movieService.movieSubject$.next(newMovie);
    } else {
      console.log('Not Valid!');
    }
  }
  setStartingMovies() {
    const listOfMovies: Movie[] = [
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
    this.movieService.movieSubject$.next(listOfMovies[0]);
    this.movieService.movieSubject$.next(listOfMovies[1]);
    this.movieService.movieSubject$.next(listOfMovies[2]);
  }
  required = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.required.hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }
  // ngAfterViewInit(): void {
  //  console.log("Movies:" , this.movieService.getMovies())
  // }
}
