import {Component, OnInit} from '@angular/core';
import {SongsService} from '../songs.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {
  name = 'Eminem';
  artist = '';
  album = '';
  time = '';
  service: SongsService;
  private router: Router;

  constructor(service: SongsService, router: Router) {
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
  }

  submit() {
    this.service.add(this.name, this.artist, this.album, this.time);
    this.router.navigateByUrl('/');
  }
}
