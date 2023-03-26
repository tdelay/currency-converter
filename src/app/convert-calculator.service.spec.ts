import { TestBed } from '@angular/core/testing';

import { ConvertCalculatorService } from './convert-calculator.service';

describe('ConvertCalculatorService', () => {
  let service: ConvertCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
