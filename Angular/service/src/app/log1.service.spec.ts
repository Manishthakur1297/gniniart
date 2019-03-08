import { TestBed } from '@angular/core/testing';

import { Log1Service } from './log1.service';

describe('Log1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Log1Service = TestBed.get(Log1Service);
    expect(service).toBeTruthy();
  });
});
