import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobOffer } from 'src/app/interfaces/job-offer.interface';
import { FaIconService } from 'src/app/services/fa-icon.service';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-jobs-lists',
  templateUrl: './jobs-lists.component.html',
  styleUrls: ['./jobs-lists.component.scss']
})
export class JobsListsComponent implements OnInit{
  
  jobsList: JobOffer[] = [];
  
  currentjob!:JobOffer;
  
  isShowShowJobDetailCard:boolean = false;
  
  constructor(
    private jobOffertService: JobOfferService, 
    private faIconList: FaIconService,
    private router:Router,
    private toastr: ToastrService
    ){}
  
  
  ngOnInit(): void {
    
    this.getJobsByCenter();
  }
  
  close() {
    throw new Error('Method not implemented.');
  }

  getJobsByCenter(): void {

    this.jobOffertService.getJobByCenter().subscribe( jobs => {

      this.jobsList  = jobs;
    });
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

    this.jobOffertService.updateJob(currentJob);
    
  }

  removeJob(currentJob: JobOffer) {

    this.jobOffertService.removeJob(currentJob._id).subscribe( v => {

      this.toastr.success(`Succès`, 'Supprimé');
      this.router.navigate(['dashbord']);
    });
    
  }
}
