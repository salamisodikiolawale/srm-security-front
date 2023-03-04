import { TestBed } from '@angular/core/testing';

import { FaIconService } from './fa-icon.service';

describe('FaIconService', () => {
  let service: FaIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
