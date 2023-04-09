import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JobOffer } from 'src/app/interfaces/job-offer.interface';

@Component({
  selector: 'app-detail-job-card',
  templateUrl: './detail-job-card.component.html',
  styleUrls: ['./detail-job-card.component.scss']
})
export class DetailJobCardComponent {

  @Input() job!:JobOffer;
  @Output() closeEvent:EventEmitter<boolean> = new EventEmitter<boolean>(false);


  constructor(){}

  closeDetailCard(jobOffert: JobOffer) {
    
    this.closeEvent.emit(true);
  }
}
