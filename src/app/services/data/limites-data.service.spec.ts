import { TestBed } from '@angular/core/testing';

import { LimitesDataService } from './limites-data.service';

describe('LimitesDataService', () => {
  let service: LimitesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LimitesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
