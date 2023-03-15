import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthFormService } from 'src/auth/services/auth-form.service';
import { AuthService } from 'src/auth/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  form!:FormGroup;
  error:string = "";

  constructor(
    private authFormService: AuthFormService,
    private authService: AuthService,
    private route:Router,
    private toastrService: ToastrService){}

  ngOnInit(): void {

      this.form = this.authFormService.buildSigninForm();
  }

  submitForm():void{
    
    this.authService.signin(this.form.value).subscribe({

      next: () => {

        this.route.navigate(['/home']);
        this.toastrService.success('Authentification', "Succès");
      },
      error: (error:any) => {
        this.error = error;
        this.toastrService.error('Authentification échouée', "Assurez-vous d'avoir le bon mdp et email");
      }
    })
  }
}
