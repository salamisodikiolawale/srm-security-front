import { Component, Input, OnInit } from '@angular/core';
import { JobOffer } from 'src/app/interfaces/job-offer.interface';

@Component({
  selector: 'app-job-offert-details',
  templateUrl: './job-offert-details.component.html',
  styleUrls: ['./job-offert-details.component.scss']
})
export class JobOffertDetailsComponent implements OnInit {
  
  @Input() jobOffer!:JobOffer;
  
  favorite: number[] = [];
  
  constructor(){}
  
  ngOnInit() {
    const favoriteString = localStorage.getItem('favoris-app-linking-education-security');
    const favorite = favoriteString ? JSON.parse(favoriteString) : [];
  }
  
  addToFavorite(jobOffer: JobOffer) {
    this.favorite.push(jobOffer.id);
    localStorage.setItem('favoris-app-linking-education-security', JSON.stringify(this.favorite));
  }

  deleteToFavorite(jobOffer: JobOffer) {
    const index = this.favorite.indexOf(jobOffer.id);

    if(index!== -1) {
      this.favorite.splice(index, 1);
      localStorage.setItem('favoris-app-linking-education-security', JSON.stringify(this.favorite));

    }
  }  
}