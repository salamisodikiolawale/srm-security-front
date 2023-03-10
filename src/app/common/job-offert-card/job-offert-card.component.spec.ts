import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffertCardComponent } from './job-offert-card.component';

describe('JobOffertCardComponent', () => {
  let component: JobOffertCardComponent;
  let fixture: ComponentFixture<JobOffertCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOffertCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOffertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
