import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Learning } from 'src/app/interfaces/learning.interface';

@Component({
  selector: 'app-learning-card',
  templateUrl: './learning-card.component.html',
  styleUrls: ['./learning-card.component.scss']
})
export class LearningCardComponent {

  @Output() learningCurrentEvent:EventEmitter<Learning> = new EventEmitter<Learning>();

  @Input() learning!: Learning;

  construct(){}
  
  sendLearningData(learning: Learning) {
    
    this.learningCurrentEvent.emit(learning);
  }
}