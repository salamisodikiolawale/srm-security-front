import { Component, OnInit} from '@angular/core';
import ResearchFormData from 'src/app/interfaces/research-form.interface';
import { JobOfferService } from 'src/app/services/job-offer.service';
import { JobOffer } from 'src/app/interfaces/job-offer.interface';
@Component({
  selector: 'app-learning-center',
  templateUrl: './learning-center.component.html',
  styleUrls: ['./learning-center.component.scss']
})
export class LearningCenterComponent {
  jobOffers:JobOffer[]=[];

  jobOfferSelected!:JobOffer;

  constructor(private JobOfferService: JobOfferService){}

  ngOnInit(){
    this.getJobOffers();
  }

  getJobOffers():JobOffer[]{
    this.jobOffers = this.JobOfferService.getJobOffert();
    
    //Cette methode doit-être appellée dans le subscribe de la ligne au dessus une fois le back implementé
    if(!this.jobOfferSelected) {
      this.jobOfferSelected = this.jobOffers[0]; 
    }
    return this.jobOffers;
  }

  onSendJobOffertData(jobOfferSelected: JobOffer): void{
   
   this.jobOfferSelected = jobOfferSelected; 
  }

  offertReseachData(offerReseachData: ResearchFormData): void{
    this.filterJobOffers(offerReseachData);
  } 

  //Amélioration possible: Ajout d'un input pour une recherche include
  filterJobOffers(researchData: ResearchFormData): void{

    //Pour récupérer la liste complète des offres
    this.getJobOffers();

    let jobOffersCurrent:JobOffer[] = [];

    this.jobOffers.forEach(jobOffer => {

      if((jobOffer.contractType.toUpperCase() === researchData.contractType.toUpperCase() &&
      jobOffer.specialities.toUpperCase() === researchData.speciality.toUpperCase() &&
      jobOffer.workingHours.toUpperCase() === researchData.workingHours.toUpperCase()) ) {

        this.jobOffers = [];
        jobOffersCurrent.push(jobOffer);
      }
    });
    
    jobOffersCurrent ? this.jobOffers = jobOffersCurrent : null;
  }


}
