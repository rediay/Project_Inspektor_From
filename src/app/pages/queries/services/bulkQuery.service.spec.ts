/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BulkQueryService } from './bulkQuery.service';

describe('Service: BulkQuery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BulkQueryService]
    });
  });

  it('should ...', inject([BulkQueryService], (service: BulkQueryService) => {
    expect(service).toBeTruthy();
  }));
});
