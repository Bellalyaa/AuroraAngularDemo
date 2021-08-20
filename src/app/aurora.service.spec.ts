import { TestBed } from '@angular/core/testing';

import { AuroraService } from './aurora.service';

describe('AuroraService', () => {
  let service: AuroraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuroraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
