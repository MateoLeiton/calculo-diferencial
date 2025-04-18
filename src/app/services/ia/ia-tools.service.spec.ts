import { TestBed } from '@angular/core/testing';

import { IaToolsService } from './ia-tools.service';

describe('IaToolsService', () => {
  let service: IaToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
