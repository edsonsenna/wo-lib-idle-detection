import { TestBed } from '@angular/core/testing';

import { IdleDetectService } from './idle-detect.service';

describe('IdleDetectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdleDetectService = TestBed.get(IdleDetectService);
    expect(service).toBeTruthy();
  });
});
