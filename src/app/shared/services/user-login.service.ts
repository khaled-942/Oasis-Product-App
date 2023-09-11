import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  userLogin = new BehaviorSubject(true);
  userLoginObserv = this.userLogin.asObservable()
  constructor() { }
  changeLoginState(state: boolean) {
    this.userLogin.next(state)
  }
}
