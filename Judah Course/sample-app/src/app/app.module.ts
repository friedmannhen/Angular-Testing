import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from '../app/Components/movies/movies.component';
import { MovieComponent } from './Components/movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MoviesComponent, MovieComponent, TemplateDrivenFormsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule, MatButtonModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
