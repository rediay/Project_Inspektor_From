/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { thirdPartyManageService } from './thirdPartyManage.service';

describe('Service: ThirdPartyManage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [thirdPartyManageService]
    });
  });

  it('should ...', inject([thirdPartyManageService], (service: thirdPartyManageService) => {
    expect(service).toBeTruthy();
  }));
});
