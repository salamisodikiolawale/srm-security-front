import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JobOffer } from 'src/app/interfaces/job-offer.interface';
import JwtTokenStorage from 'src/auth/interfaces/jwt-token-storage.interface';
import { AuthService } from 'src/auth/services/auth.service';

@Component({
  selector: 'app-job-offert-details',
  templateUrl: './job-offert-details.component.html',
  styleUrls: ['./job-offert-details.component.scss']
})
export class JobOffertDetailsComponent implements OnInit {
  
  @Input() jobOffer!:JobOffer;
  
  isInToFavorite!:boolean;
  jwtToken!: JwtTokenStorage;
  
  
  constructor(
    private authService: AuthService,
    private router: Router){}
  
  ngOnInit(): void {

    this.authService.jwtToken.subscribe( (jwtToken: JwtTokenStorage) => {

      this.jwtToken = jwtToken;
    });
  }
  
  addToFavorite(arg0: JobOffer) {
    throw new Error('Method not implemented.');
  }

  applyToJob(jobOffer: JobOffer) {

    //Vérifier si il est authentifier et en tant que trainer
    // console.log("TEST", this.jwtToken.isAuthenticated)
    if(this.jwtToken.isAuthenticated){
      // console.log("Is auth");
    } else {
      
      this.router.navigateByUrl('login')

    }

    //Si oui, appelle du service jobOffert pour post et afficharge de la notif success

    //Si non, redirection vers le formulaire d'authentification
  }
}
