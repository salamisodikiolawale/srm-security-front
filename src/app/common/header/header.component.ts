import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  learnings:string[] = ['Sécurité', "Synotechnie", "Aéroportuaire", "Sécourisme", "Incendie"];
  //learningCenters:string[] = ['Luxant Group', "MACC1", "Export formation"];
  
  constructor(private router: Router){}

  navigateToFormation(formationName: string, event: Event): void {
    event.preventDefault();
    this.router.navigate(['/formations', formationName]);
  }
}
