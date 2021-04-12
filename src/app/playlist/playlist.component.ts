import {Component, OnInit} from '@angular/core';
import {Song} from '../song';
import {SongsService} from '../songs.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  songs: Song[];
  service: SongsService;

  constructor(service: SongsService) {
    service.getSongs().subscribe((songs) => this.songs = songs);
    this.service = service;
  }

  ngOnInit() {

  }

  delete(id: number) {

    this.service.delete(id).subscribe();
    this.service.getSongs().subscribe((songs) => this.songs = songs);
  }
}
