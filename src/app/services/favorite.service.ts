import { Injectable } from '@angular/core';
import { JobOffer } from '../interfaces/job-offer.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  jobOffersFavoriteList:JobOffer[] = [];

  constructor() { }

  getFavoriteList(): JobOffer[]{

    const jobOffersFavoriteList = localStorage.getItem('jobOffersFavoriteList');
    if (jobOffersFavoriteList) {
      this.jobOffersFavoriteList = JSON.parse(jobOffersFavoriteList);
    }
    return this.jobOffersFavoriteList;
  }

  removeToFavorite(job: JobOffer): void{
    
    let jobOffersFavoriteList = JSON.parse(localStorage.getItem('jobOffersFavoriteList')!) || [];

    let index = jobOffersFavoriteList.findIndex((item:JobOffer) => item.id === job.id);
    if (index !== -1) {
      jobOffersFavoriteList.splice(index, 1);
      localStorage.setItem('jobOffersFavoriteList', JSON.stringify(jobOffersFavoriteList));
    }
    this.getFavoriteList();
  }
  
  addToFavorite(jobOffer: JobOffer): void{

    let jobOffersFavoriteList = JSON.parse(localStorage.getItem('jobOffersFavoriteList')!) || [];
    let index = jobOffersFavoriteList.findIndex((item:JobOffer) => item.id === jobOffer.id);

    if(index!= -1){

      this.jobOffersFavoriteList.push(jobOffer);
      localStorage.setItem('jobOffersFavoriteList', JSON.stringify(this.jobOffersFavoriteList));
    } else {
      console.log("Il existe !");
      
    }
  }
}
