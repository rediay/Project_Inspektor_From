/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {NotificationSettings, NotificationSettingsData} from "../../../interfaces/common/notificationSettings";
import {NotificationSettingsApi} from "../api/notificationSettings.api";

@Injectable()
export class NotificationSettingsService extends NotificationSettingsData {
    constructor(private api: NotificationSettingsApi) {
        super();
    }

    updateCurrent(setting: any,companyId: number): Observable<NotificationSettings> {
        return this.api.updateCurrent(setting,companyId);
    }

    getCurrentNotificationSetting(companyId: number): Observable<NotificationSettings> {
        return this.api.getNotificationSettings(companyId);
    }
}
