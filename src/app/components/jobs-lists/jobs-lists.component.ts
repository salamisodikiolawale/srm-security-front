import { Component, OnInit } from '@angular/core';
import { JobOffer } from 'src/app/interfaces/job-offer.interface';
import { FaIconService } from 'src/app/services/fa-icon.service';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-jobs-lists',
  templateUrl: './jobs-lists.component.html',
  styleUrls: ['./jobs-lists.component.scss']
})
export class JobsListsComponent implements OnInit{
  
  jobsList:JobOffer[] = [];
  
  currentjob!:JobOffer;
  
  isShowShowJobDetailCard:boolean = false;
  
  constructor(private jobOffertService: JobOfferService, private faIconList: FaIconService){}
  
  
  ngOnInit(): void {
    
    this.getJobsList();
  }
  
  close() {
    throw new Error('Method not implemented.');
  }

  getJobsList(): void {

    this.jobsList = this.jobOffertService.getJobOffert();
  }

  showJobDetails(job: JobOffer):void {
    
    this.currentjob = job;
    this.isShowShowJobDetailCard = true;
  }
  
  onClodedetailCard(){

    this.isShowShowJobDetailCard = !this.isShowShowJobDetailCard;
  }
  
  getIcon(){
    return this.faIconList.getIconList();
  }

  updateJob(currentJob: JobOffer) {

    console.log('CREATE JOB', currentJob);
    
  }

  removeJob(currentJob: JobOffer) {

    console.log('CREATE JOB', currentJob);
    
  }
}
