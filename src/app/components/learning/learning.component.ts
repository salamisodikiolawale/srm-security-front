import { Component, OnInit, EventEmitter} from '@angular/core';
import { Learning } from 'src/app/interfaces/learning.interface';
import { LearningService } from 'src/app/services/learning.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  learning:Learning[]=[];

  learningSelected!:Learning;

  constructor(private LearningService: LearningService){}

  ngOnInit() {
    this.getLearning();
  }

  getLearning():Learning[]{
    this.learning = this.LearningService.getLearning();

    if(!this.learningSelected){
      this.learningSelected = this.learning[0];
    }
    return this.learning;
  }

  onSendLearningData(learningSelected: Learning): void {
    this.learningSelected = learningSelected;
  }
}
