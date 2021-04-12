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
    this.songs = service.getSongs();
    this.service = service;
  }

  ngOnInit() {

  }

  delete(id: number) {

    this.service.delete(id);
    this.songs = this.service.getSongs();
  }
}
