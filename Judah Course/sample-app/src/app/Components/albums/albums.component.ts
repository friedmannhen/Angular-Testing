import { Component } from '@angular/core';
import { IAlbums } from 'src/app/models/albums.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent {
  constructor(private api: ApiService) {}
  public albums: Array<IAlbums> = [];
  public columns: Array<string> = ['id', 'userId', 'title'];
  ngOnInit(): void {
    this.api.getAlbums().subscribe((data) => {
      console.log(data);
      this.albums = data;
    });
  }
}
