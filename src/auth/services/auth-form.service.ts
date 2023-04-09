import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Signin from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {
  
  constructor(private fb:FormBuilder) { }
  
  buildSigninForm():FormGroup<any>{
    
    return this.fb.group({
      email: [''],
      password: ['']
    });
  }

  buildSignupForm(): FormGroup<any> {

    return this.fb.group({
      name: [''],
      lastName: [''],
      email: [''],
      password: [''],
      trainer: [false]
    })
  }
}
