import { TestBed } from '@angular/core/testing';

import { WindowWidthService } from './window-width.service';

describe('WindowWidthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindowWidthService = TestBed.get(WindowWidthService);
    expect(service).toBeTruthy();
  });
});
