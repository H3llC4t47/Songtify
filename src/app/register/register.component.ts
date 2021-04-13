import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regUsername: string;
  regPassword: string;
  service: UserService;
  private router: Router;

  constructor(service: UserService, router: Router) {
    this.service = service;
    this.router = router;
  }

  ngOnInit() {

  }

  submit() {
    console.log(this.regUsername, this.regPassword);

    this.service.save(this.regUsername, this.regPassword);

    this.router.navigateByUrl('/login');
  }


}
