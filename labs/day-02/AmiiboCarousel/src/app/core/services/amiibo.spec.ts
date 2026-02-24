import { TestBed } from '@angular/core/testing';

import { Amiibo } from './amiibo';

describe('Amiibo', () => {
  let service: Amiibo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Amiibo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
