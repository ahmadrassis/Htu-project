import { TestBed } from '@angular/core/testing';

import { SidenaveService } from './sidenave.service';

describe('SidenaveService', () => {
  let service: SidenaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
