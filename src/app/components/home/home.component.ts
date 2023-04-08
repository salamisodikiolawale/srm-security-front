import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data:{title:string; description:string; image:string; btnTitle:string}[] = [{
    title:"Agent de sécurité privé",
    description:"Tous les articles autour du métier, des formations et de l’emploi pour les agents de sécurité privée.",
    image: "https://www.mgp.fr/files/live/sites/mgp/files/images/Site/home-slider-5-securite.jpg",
    btnTitle:"Former des agents de sécurité"
  },
  {
    title:"Agent de sûreté aéroportuaire",
    description:"Tous les articles autour du métier, des formations et de l’emploi pour les agents de sécurité aéroportuaire.",
    image: "https://osr-securite.com/wp-content/uploads/2022/03/surete-agents-683x1024.png",
    btnTitle:"Former des agents aéroportuaires"
  },
  {
    title:"Agent de sécurité cynophile",
    description:"Tous les articles autour du métier, des formations et de l’emploi pour les agents de cynophile.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Maitre_chien.jpg/1200px-Maitre_chien.jpg",
    btnTitle:"Former des agents cynophiles"
  }];
}
