import { Component, Input, OnInit } from '@angular/core';
import { JobOffer } from 'src/app/interfaces/job-offer.interface';

@Component({
  selector: 'app-job-offert-details',
  templateUrl: './job-offert-details.component.html',
  styleUrls: ['./job-offert-details.component.scss']
})
export class JobOffertDetailsComponent implements OnInit {
  
  @Input() jobOffer!:JobOffer;

  constructor(){}

  ngOnInit(): void {
  }
}
