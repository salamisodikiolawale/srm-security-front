import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import ResearchFormDate from 'src/app/interfaces/research-form.interface';
import { Speciality } from 'src/app/interfaces/speciality.interface';
import { specialities } from 'src/app/utils/specialities';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  
  @Output() researchDateEvent:EventEmitter<ResearchFormDate> = new EventEmitter<ResearchFormDate>();

  offerResearchForm!:FormGroup;

  specialities:Speciality[] = [];
  
  contractType:string[] = [
    "CDI",
    "CDD",
    "Temporaire"
  ]
  
  workingHours:string[] = [
    "Temps plein",
    "Temps partiel"
  ]
  
  constructor(private formBuilder: FormBuilder){}


  ngOnInit(): void {

    this.offerResearchForm = this.formBuilder.group({

      speciality: [null],
      contractType: [null],
      workingHours: [null],
    });
  }
  
  getSpecialities(): Speciality[]{
    return this.specialities = specialities;
  }

  onSubmitForm() {
    
    this.researchDateEvent.emit(this.offerResearchForm.value);
    this.offerResearchForm.reset();
  }
}
