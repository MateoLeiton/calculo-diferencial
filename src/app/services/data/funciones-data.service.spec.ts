import { TestBed } from '@angular/core/testing';

import { FuncionesDataService } from './funciones-data.service';

describe('FuncionesDataService', () => {
  let service: FuncionesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
