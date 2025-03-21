/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WarningSignsService } from './warning-signs.service';

describe('Service: WarningSigns', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarningSignsService]
    });
  });

  it('should ...', inject([WarningSignsService], (service: WarningSignsService) => {
    expect(service).toBeTruthy();
  }));
});
