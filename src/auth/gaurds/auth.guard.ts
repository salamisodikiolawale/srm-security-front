import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import JwtTokenStorage from '../interfaces/jwt-token-storage.interface'
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private toastr: ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    
    return this.authService.jwtToken.pipe(

      map( (jwtToken: JwtTokenStorage) => {

        if( !jwtToken.isAuthenticated ) {

          this.toastr.error("Veuillez vous authentifier !");
          return false;
        }
          return jwtToken.isAuthenticated;
      })
    );
  }
  
}
