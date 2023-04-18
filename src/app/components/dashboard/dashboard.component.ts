import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  
  isShowList: boolean = true;
  isShowForm: boolean = false;
  
  constructor(private _Activatedroute:ActivatedRoute){}
  
  ngOnInit(): void {
      
    if(this._Activatedroute.snapshot.params["isShowList"]){

    this._Activatedroute.paramMap.subscribe(paramMap => { 
      console.log("ParamMap", paramMap)
      paramMap.get('isShowList')!==null? this.isShowList = !paramMap.get('isShowList'): '';
      
    });
    }

  }
  
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
