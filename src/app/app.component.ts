import { Component } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Songtify';
  private service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  user() {
    return this.service.currentUser
  }
}
