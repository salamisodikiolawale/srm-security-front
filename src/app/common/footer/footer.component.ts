import { Component } from '@angular/core';
import { FaIconService } from 'src/app/services/fa-icon.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  faIconName = this.faIconList.getIconList().facebook;

  constructor(private faIconList: FaIconService){}

  getIcon(){
    return this.faIconList.getIconList();
  }

}
