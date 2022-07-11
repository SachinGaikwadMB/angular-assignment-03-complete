import { TestBed } from '@angular/core/testing';

import { JwelleryService } from './jwellery.service';

describe('JwelleryService', () => {
  let service: JwelleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwelleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
