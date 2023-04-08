import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators'
import { environment } from 'src/environment/environment';
import User from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  currentUser: BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);

  constructor(private http: HttpClient){}

  getCurrentUser(): Observable<User|null> {

    if( this.currentUser.value ) {

      return this.currentUser;
    }

    return this.http.get<User>(`${environment.baseUrl}:${environment.apiPort}/api/user/current`).pipe(

      tap( (user: User) => {
        this.currentUser.next(user);
      }),
      switchMap( () => {

        return this.currentUser;
      })
    );

    
  }


}
