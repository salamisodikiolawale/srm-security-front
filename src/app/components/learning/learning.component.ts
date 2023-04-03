import { Component, OnInit, EventEmitter} from '@angular/core';
import { Learning } from 'src/app/interfaces/learning.interface';
import { LearningService } from 'src/app/services/learning.service';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  learning:Learning[]=[];

  learningSelected!:Learning;

  constructor(private LearningService: LearningService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      if(params.has('formationName')) {
        const formationName = params.get('formationName');
        this.getLearnings(formationName);
      } else {
        this.getLearnings(null);
      }
    })
  }

  getLearnings(formationName: string | null): Learning[]{
    this.learning = this.LearningService.getLearningByName(formationName);
    console.log('Formations récupéré :', this.learning);

    if(!this.learningSelected){
      this.learningSelected = this.learning[0];
    }
    return this.learning;
  }

  onSendLearningData(learningSelected: Learning): void {
    this.learningSelected = learningSelected;
  }
}
