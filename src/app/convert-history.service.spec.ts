import { TestBed } from '@angular/core/testing';

import { ConvertHistoryService } from './convert-history.service';

describe('ConvertHistoryService', () => {
  let service: ConvertHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
