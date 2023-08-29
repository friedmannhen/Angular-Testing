import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbums } from '../models/albums.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }
public getAlbums(): Observable<Array<IAlbums>>{
   const url:string="https://jsonplaceholder.typicode.com/albums";
  return this.http.get(url,{}) as Observable<Array<IAlbums>>
  }
}
