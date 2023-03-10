import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JobOffer } from 'src/app/interfaces/job-offer.interface';

@Component({
  selector: 'app-job-offert-card',
  templateUrl: './job-offert-card.component.html',
  styleUrls: ['./job-offert-card.component.scss']
})
export class JobOffertCardComponent {

  @Output() jobOffertCurrentEvent:EventEmitter<JobOffer> = new EventEmitter<JobOffer>();

  @Input() jobffert!: JobOffer;

  construct(){}
  
  sendJobOffertData(jobOffert: JobOffer) {
    
    this.jobOffertCurrentEvent.emit(jobOffert);
  }
}
