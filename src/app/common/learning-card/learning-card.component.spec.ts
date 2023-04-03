import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCardComponent } from './learning-card.component';

describe('LearningCardComponent', () => {
  let component: LearningCardComponent;
  let fixture: ComponentFixture<LearningCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
