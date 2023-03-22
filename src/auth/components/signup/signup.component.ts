import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Identity } from 'src/auth/common/enum/identity';
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

  isTrainee:boolean = false;
  isTrainer:boolean = false;
  isCenter:boolean = false;

  constructor(
    private authFormservice: AuthFormService, 
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService){}

  ngOnInit(): void {

    // if(this.isCenter) {

    //   this.form = this.authFormservice.buildSignupCenterForm();
    //   console.log("this.form.value")
    // }

    // if(this.isTrainee) {

    //   this.form = this.authFormservice.buildSignupTraineeForm();
    //   console.log(this.form.value)
    // }

    // if(this.isTrainer) {

    //   this.form = this.authFormservice.buildSignupTrainerForm();
    //   console.log(this.form.value)
    // }
      
  }

  submitCenterForm():void{
    this.authService.signupCenter(this.form.value).subscribe({

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

  submitTraineeForm():void{
    this.authService.signupTrainee(this.form.value).subscribe({

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

  submitTrainerForm():void{
    console.log("TEST", this.form.value)
    this.authService.signupTrainer(this.form.value).subscribe({

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

  setIdentity(identity: String): void {
    
    if(Identity.CENTER === identity){

      this.isCenter = true;
      this.isTrainee = false;
      this.isTrainer = false;
      this.form = this.authFormservice.buildSignupCenterForm();
    } else if(Identity.TRAINEE === identity){
      
      this.isTrainee = true;
      this.isCenter = false;
      this.isTrainer = false;
      this.form = this.authFormservice.buildSignupTraineeForm();
    } else {
      
      this.isTrainer = true;
      this.isCenter = false;
      this.isTrainee = false;
      this.form = this.authFormservice.buildSignupTrainerForm();
    }
  }

  isChoosedIndentity(): boolean {

    return this.isCenter || this.isTrainer || this.isTrainee;
  }
  
} 
