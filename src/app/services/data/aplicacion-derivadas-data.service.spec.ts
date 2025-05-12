import { TestBed } from '@angular/core/testing';

import { AplicacionDerivadasDataService } from './aplicacion-derivadas-data.service';

describe('AplicacionDerivadasDataService', () => {
  let service: AplicacionDerivadasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplicacionDerivadasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
