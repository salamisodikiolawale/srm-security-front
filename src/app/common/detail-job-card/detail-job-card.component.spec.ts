import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJobCardComponent } from './detail-job-card.component';

describe('DetailJobCardComponent', () => {
  let component: DetailJobCardComponent;
  let fixture: ComponentFixture<DetailJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailJobCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
