/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Observable } from 'rxjs';

/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

export interface NotificationSettings {
    id: number;
    sendMailPriority1: boolean;
    mailPriority1: string;
    sendMailPriority2: boolean;
    mailPriority2: string;
    sendMailPriority3: boolean;
    mailPriority3: string;
    sendMailPriority4: boolean;
    mailPriority4: string;
    sendMailCoincidences: boolean;
    mailCoincidences: string;
    sendMailAdditionalServices: boolean;
    sendMailAdministrative: boolean;
    mailAministrative: string;
    sendMailRoi: boolean;
    mailRoi: string;
    mailAdditionalServices: string;
    companyId: number;
}

export abstract class NotificationSettingsData {
    abstract getCurrentNotificationSetting(companyId:number): Observable<NotificationSettings>;
    abstract updateCurrent(notificationSettings: NotificationSettings,companyId:number): Observable<NotificationSettings>;
}
