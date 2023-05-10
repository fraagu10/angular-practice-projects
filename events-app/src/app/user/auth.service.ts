import { Injectable } from '@angular/core';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser?: IUser;

  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      username: userName,
      firstName: "Franco",
      lastName: "Aguilar",
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
