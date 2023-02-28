import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindWorkComponent } from './find-work.component';

describe('FindWorkComponent', () => {
  let component: FindWorkComponent;
  let fixture: ComponentFixture<FindWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
