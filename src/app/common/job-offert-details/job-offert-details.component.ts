import { Component, Input, OnInit } from '@angular/core';
import { JobOffer } from 'src/app/interfaces/job-offer.interface';

@Component({
  selector: 'app-job-offert-details',
  templateUrl: './job-offert-details.component.html',
  styleUrls: ['./job-offert-details.component.scss']
})
export class JobOffertDetailsComponent implements OnInit {
  
  @Input() jobOffer!:JobOffer;
  
  isInToFavorite!:boolean;
  
  constructor(){}
  
  ngOnInit() {
    const favorisString = localStorage.getItem('favoris-app-linking-education-security');
    const favoris = favorisString ? JSON.parse(favorisString) : [];
    this.isInToFavorite = favoris.includes(this.jobOffer.id);
  }
  
  addToFavorite(jobOffer: JobOffer) {
    this.isInToFavorite = !this.isInToFavorite;
    const favorisString = localStorage.getItem('favoris-app-linking-education-security');
    const favoris = favorisString ? JSON.parse(favorisString) : [];
  
    if (this.isInToFavorite) {
      favoris.push(jobOffer.id);
    } else {
      const index = favoris.indexOf(jobOffer.id);
      if (index > -1) {
        favoris.splice(index, 1);
      }
    }
  
    localStorage.setItem('favoris-app-linking-education-security', JSON.stringify(favoris));
  }
  
}
