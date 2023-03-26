import { TestBed } from '@angular/core/testing';

import { LoadCurrenciesService } from './load-currencies.service';

describe('LoadCurrenciesService', () => {
  let service: LoadCurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadCurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
