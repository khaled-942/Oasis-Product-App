import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from '../services/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  status!: boolean;
  constructor(private userState: UserLoginService) {
    this.userState.userLoginObserv.subscribe((data) => { this.status = data })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.status) {
        return true;
      }
      else {
        alert('You Must Log In')
        return false
      }
  }
  
}
