import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import User from '../interfaces/user.interface';
import JwtTokenStorage from '../interfaces/jwt-token-storage.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  jwtToken: BehaviorSubject<JwtTokenStorage> = new BehaviorSubject<JwtTokenStorage>({
    isAuthenticated: null,
    token:null
  });
  
  constructor(private http: HttpClient ) { 
    this.initToken();
  }
  
  
  signup(userform: User): Observable<User>{
    return this.http.post<any>(`${environment.baseUrl}:${environment.apiPort}/api/auth/signup`, userform);
  }
  
  signupCenter(centerForm: any) {
    return this.http.post<any>(`${environment.baseUrl}:${environment.apiPort}/api/auth/center/signup`, centerForm);
  }
  
  signupTrainee(traineeForm: any) {
    return this.http.post<any>(`${environment.baseUrl}:${environment.apiPort}/api/auth/trainee/signup`, traineeForm);
  }

  signupTrainer(trainerForm: any) {
    return this.http.post<any>(`${environment.baseUrl}:${environment.apiPort}/api/auth/trainer/signup`, trainerForm);
  }

  signin(credentials: { email: string, password: string}): Observable<string> {

    return this.http.post<string>(`${environment.baseUrl}:${environment.apiPort}/api/auth/signin`, credentials).pipe(

      tap(( token:string) => {

        this.jwtToken.next({
          isAuthenticated: true,
          token: token
        });

        localStorage.setItem("linking-jwt", token);
      }),
    );
  }

  initToken():void {
    const token = localStorage.getItem('linking-jwt');
    if(token) {

      this.jwtToken.next({
        isAuthenticated: true,
        token: token,
      });
    } else {

      this.jwtToken.next({
        isAuthenticated: false,
        token: null,
      })
    }

  }

  logout() : void {

    this.jwtToken.next({
      isAuthenticated: false,
      token: null
    });
    localStorage.removeItem('linking-jwt');
  }
}
