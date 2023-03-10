import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffertDetailsComponent } from './job-offert-details.component';

describe('JobOffertDetailsComponent', () => {
  let component: JobOffertDetailsComponent;
  let fixture: ComponentFixture<JobOffertDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOffertDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOffertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
