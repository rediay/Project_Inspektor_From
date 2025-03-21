/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class NotificationSettingsApi {
  private readonly apiController: string = 'notificationSettings';

  constructor(private api: HttpService) {}

  getNotificationSettings(companyId: number): Observable<any> {
    return this.api.get(`${this.apiController}/${companyId}`);
  }

  updateCurrent(item: any,companyId: number): Observable<any> {
    return this.api.put(`${this.apiController}/${companyId}`, item);
  }
}
