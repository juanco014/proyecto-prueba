import { TestBed } from '@angular/core/testing';

import { SalaService } from './sala.service';

describe('ServiceService', () => {
  let service: SalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
