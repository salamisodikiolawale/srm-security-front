import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {
  
  constructor(private fb:FormBuilder) { }
  
  buildSigninForm():FormGroup<any>{
    
    return this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  buildSignupCenterForm(): FormGroup<any> {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      address: ['', Validators.required],
      website: ['', Validators.required],
      description: ['', Validators.required],
      createdDate: ['', Validators.required],
      trainer: [false, Validators.required],
      trainee: [false, Validators.required],
      center: [true, Validators.required]
    })
  }

  buildSignupTrainerForm(): FormGroup<any> {
    return this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      address: ['', Validators.required],
      experience: ['', Validators.required],
      password: ['', Validators.required],
      trainer: [true, Validators.required],
      trainee: [false, Validators.required],
      center: [false, Validators.required]
    })
  }

  buildSignupTraineeForm(): FormGroup<any> {
    return this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      trainer: [false, Validators.required],
      trainee: [true, Validators.required],
      center: [false, Validators.required]
    })
  }
}
