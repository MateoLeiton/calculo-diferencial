import { TestBed } from '@angular/core/testing';

import { DerivadasDataService } from './derivadas-data.service';

describe('DerivadasDataService', () => {
  let service: DerivadasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DerivadasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
