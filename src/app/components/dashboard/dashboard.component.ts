import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  isShowList: boolean = true;
  isShowForm: boolean = false;
  
  constructor(){}
  
  showList(): void {
    this.isShowForm = false;
    this.isShowList = !this.isShowList;
  }
  
  showCreateJobForm() {

    this.isShowList = false;
    this.isShowForm = !this.isShowForm;
  }
  createJob() {

  }

}
