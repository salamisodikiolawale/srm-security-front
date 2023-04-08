import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListsComponent } from './jobs-lists.component';

describe('JobsListsComponent', () => {
  let component: JobsListsComponent;
  let fixture: ComponentFixture<JobsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
