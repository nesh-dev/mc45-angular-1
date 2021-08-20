import { TestBed } from '@angular/core/testing';

import { GifyServiceService } from './gify-service.service';

describe('GifyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifyServiceService = TestBed.get(GifyServiceService);
    expect(service).toBeTruthy();
  });
});
