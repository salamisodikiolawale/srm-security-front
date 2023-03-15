import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent {

  @Input() title:string = 'S\'inscrire';
  @Input() linkRouter:string = '';
  @Input() cardColor:string = '';
  @Input() borderRadius:string = '';
  @Input() border:string = '';
  @Input() color:string = '';
  @Input() padding:string = '';

}
