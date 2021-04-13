import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() {
  }

  users: User[] = [];
  currentUser: string;

  save(regUsername: string, regPassword: string) {

    this.users.push({username: regUsername, password: regPassword});

  }


  login(LogUsername: string, LogPassword: string) {

    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (user.username === LogUsername && user.password === LogPassword) {
        this.currentUser = user.username;
        return user;
      }
    }
    return null;
  }
}
