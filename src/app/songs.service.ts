import {Injectable} from '@angular/core';
import {Song} from './song';
import {from, Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs: Song[] = [
    {name: 'Godzilla', artist: 'Eminem', album: 'Music To Be Murdered By', time: '3:31', id: 1},
    {name: 'Godzilla', artist: 'Eminem', album: 'Music To Be Murdered By', time: '3:31', id: 2},
    {name: 'Godzilla', artist: 'Eminem', album: 'Music To Be Murdered By', time: '3:31', id: 3},
    {name: 'Godzilla', artist: 'Eminem', album: 'Music To Be Murdered By', time: '3:31', id: 4}
  ];

  lastid = 4;

  constructor() {
  }

  edit(id: number, name: string, artist: string, album: string, time: string): Observable<Song> {
    for (let i = 0; i < this.songs.length; i++) {
      const song = this.songs[i];
      if (song.id === id) {
        song.name = name;
        song.artist = artist;
        song.album = album;
        song.time = time;

        return of (song);
      }
    }
    return throwError(new Error());
  }

  add(name: string, artist: string, album: string, time: string): Observable<Song> {

    const song = {name, artist, album, time, id: this.lastid + 1};

    this.songs.push(song);

    this.lastid = this.lastid + 1;

    return of (song);
  }

  delete(id: number): Observable<void> {

    for (let i = 0; i < this.songs.length; i++) {
      const song = this.songs[i];
      if (song.id === id) {
        this.songs.splice(i, 1);
        return of ();
      }
    }
    return throwError(new Error());
  }

  getById(id: number): Observable<Song> {
    for (let x = 0; x < this.songs.length; x++) {
      const song = this.songs[x];
      if (song.id === id) {
        return of(song);
      }
    }
    return throwError(new Error());
  }

  getSongs(): Observable<Song[]> {
    return of([...this.songs]);
  }
}
