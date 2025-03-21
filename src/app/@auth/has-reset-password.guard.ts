import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import {UserData} from "../@core/interfaces/common/users";

@Injectable({
  providedIn: 'root'
})
export class HasResetPasswordGuard implements CanActivate, CanActivateChild {
  constructor(private usersService: UserData, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.usersService.getCurrentUser().pipe(
        map(user => {
          if (user.hasResetPassword  && state.url !== '/pages/setting/password-change') {
            this.router.navigate(['/pages/setting/password-change']);
            return false;
          }
          return true;
        })
    );
  }
  
}
