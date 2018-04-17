import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<fromApp.AppState>, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (!this.authService.isAuthenticated()) {
    //   return this.router.navigate(['/signin']);
    // }
    return this.store.select('auth').take(1).map((authState: fromAuth.State) => {
      return authState.authenticated;
    });
  }

}
