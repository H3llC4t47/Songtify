import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SongsService} from '../songs.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  name = '';
  artist = '';
  album = '';
  time = '';
  id = 0;
  service: SongsService;
  private router: Router;

  constructor(activatedRoute: ActivatedRoute, service: SongsService, router: Router) {
    this.service = service;
    this.router = router;

    activatedRoute.paramMap.subscribe((p) => {
      const id = +p.get('id');
      const song = this.service.getById(id);
      if (song !== null) {
        this.name = song.name;
        this.artist = song.artist;
        this.album = song.album;
        this.time = song.time;
        this.id = song.id;
      } else {
        router.navigateByUrl('/');
      }
    });
  }

  ngOnInit() {
  }

  edit() {
    this.service.edit(this.id, this.name, this.artist, this.album, this.time);

    this.router.navigateByUrl('/');
  }
}
