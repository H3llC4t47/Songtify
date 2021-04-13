import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LogUsername: string;
  LogPassword: string;
  private service: UserService;
  private router: Router;

  constructor(service: UserService, router: Router) {
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
  }

  login() {
    console.log(this.LogUsername, this.LogPassword);

    this.service.login(this.LogUsername, this.LogPassword);

    this.router.navigateByUrl('/');
  }

}
