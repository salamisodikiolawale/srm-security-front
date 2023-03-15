import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import CreateUserError from 'src/auth/interfaces/errors/createUser.error.interface';
import { AuthFormService } from 'src/auth/services/auth-form.service';
import { AuthService } from 'src/auth/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form!:FormGroup;

  errors:any;

  constructor(
    private authFormservice: AuthFormService, 
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService){}

  ngOnInit(): void {

      this.form = this.authFormservice.buildSignupForm();
  }

  submitForm():void{
    console.log(this.form.value)
    this.authService.signup(this.form.value).subscribe({

      next:() => {
      
        this.toastr.success('La création de votre compte à été un succès! à présent, veuillez-vous connectez  :)');
        this.router.navigate(['/login']);
      }, 
      error: (error:any) => {
        
        this.errors = error.error;
        if( this.errors.errors ) {
            
          if( this.errors.errors.length === 4 ) {

            this.toastr.error(`Veuillez remplir tout les champs du formulaire`, 'Erreur');
          } else {

            this.errors.errors.forEach( (error:CreateUserError) => {
              
              this.toastr.error(`${error.msg}`, `${error.param}`);
            });
          }
        } else {

          this.toastr.error(`Votre email est associé à un compte existant`, 'Unique');
        }
      }
    });
  }

  
} 
