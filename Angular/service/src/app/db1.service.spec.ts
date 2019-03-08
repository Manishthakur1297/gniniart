import { TestBed } from '@angular/core/testing';

import { Db1Service } from './db1.service';

describe('Db1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Db1Service = TestBed.get(Db1Service);
    expect(service).toBeTruthy();
  });
});
