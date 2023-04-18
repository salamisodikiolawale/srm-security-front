import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import JwtTokenStorage from 'src/auth/interfaces/jwt-token-storage.interface';
import { AuthService } from 'src/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{


  learnings:string[] = ['Sécurité', "Synotechnie", "Aéroportuaire", "Sécourisme", "Incendie"];

  learningCenters:string[] = ['Luxant Group', "MACC1", "Export formation"];

  jwtToken!: JwtTokenStorage;

  subscription!: Subscription;

  btnLoginTitle:string = "test";
  
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router){}

  ngOnInit(){

    this.authService.jwtToken.subscribe( (jwtToken: JwtTokenStorage) => {

      this.jwtToken = jwtToken;
    });
  }

  logout():void {
    
    this.toastr.success(`Succès`, 'Déconnexion');
    this.authService.logout();
  }

  ngOnDestroy(){

    if( this.subscription ) {
      
      this.subscription.unsubscribe();
    }
  }

  navigateToFormation(formationName: string, event: Event): void {
    event.preventDefault();
    this.router.navigate(['/formations', formationName]);
  }
}
