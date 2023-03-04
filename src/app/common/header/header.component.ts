import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  learnings:string[] = ['Sécurité', "Synotechnie", "Aéroportuaire", "Sécourisme", "Incendie"];
  learningCenters:string[] = ['Luxant Group', "MACC1", "Export formation"];
  
  constructor(){}
}
