import { Component, OnInit} from '@angular/core';
import { JobOffer } from 'src/app/interfaces/job-offer.interface';
import ResearchFormData from 'src/app/interfaces/research-form.interface';
import { JobOfferService } from 'src/app/services/job-offer.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit{
  
  jobOffers:JobOffer[]=[];

  jobOfferSelected!:JobOffer;

  jobOffersCurrent:JobOffer[] = [];

  constructor(private JobOfferService: JobOfferService){}

  ngOnInit(){
    this.getJobList();
  }

  getJobList():JobOffer[]{
    this.JobOfferService.getJobsList().subscribe({

      next: ((jobs:JobOffer[]) => {
        this.jobOffers = jobs
        if(!this.jobOfferSelected) {
          this.jobOfferSelected = jobs[0]; 
        }

        if(this.jobOffersCurrent.length > 0){
          console.log("HELLO", this.jobOffersCurrent)
          this.jobOffers = [];
          this.jobOffersCurrent ? this.jobOffers = this.jobOffersCurrent : null;
        }
      })
      
    });
    
    //Cette methode doit-être appellée dans le subscribe de la ligne au dessus une fois le back implementé
    
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

    console.log("form", researchData)
    //Pour récupérer la liste complète des offres
    this.getJobList();

    // let jobOffersCurrent:JobOffer[] = [];
    this.jobOffersCurrent = [];

    this.jobOffers.forEach(jobOffer => {
      if((researchData.contractType && researchData.workingHours) && (jobOffer.contractType.toUpperCase() === researchData.contractType.toUpperCase() &&
      // jobOffer.specialities.toUpperCase() === researchData.speciality.toUpperCase() &&
      jobOffer.workingHours.toUpperCase() === researchData.workingHours.toUpperCase()
      ) 
      ) {
        
        // console.log(researchData.contractType.toUpperCase(), jobOffer.contractType.toUpperCase())
        this.jobOffers = [];
        this.jobOffersCurrent.push(jobOffer);
      }
    });
    console.log("jobOffersCurrent", this.jobOffersCurrent)
    
    // this.jobOffersCurrent ? this.jobOffers = this.jobOffersCurrent : null;
  }

}
