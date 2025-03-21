/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotificationmonitoringService } from './notificationmonitoring.service';

describe('Service: Notificationmonitoring', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationmonitoringService]
    });
  });

  it('should ...', inject([NotificationmonitoringService], (service: NotificationmonitoringService) => {
    expect(service).toBeTruthy();
  }));
});
