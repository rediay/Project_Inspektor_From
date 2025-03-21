/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserData} from '../../interfaces/common/users';
import {UsersService} from './services/users.service';
import {UsersApi} from './api/users.api';
import {HttpService} from './api/http.service';
import {CountryData} from '../../interfaces/common/countries';
import {CountriesService} from './services/countries.service';
import {CheckNameService} from './services/checkName.service';
import {CountriesApi} from './api/countries.api';
import {SettingsApi} from './api/settings.api';
import {NbAuthModule} from '@nebular/auth';
import {SettingsData} from '../../interfaces/common/settings';
import {CheckNameData} from '../../interfaces/common/checkName';
import {SettingsService} from './services/settings.service';
import {NotificationSettingsData} from "../../interfaces/common/notificationSettings";
import {NotificationSettingsService} from "./services/notificationSettings.service";
import {NotificationSettingsApi} from "./api/notificationSettings.api";
import {CheckNameApi} from "./api/checkName.api";
import {IndividualQueryApi} from "./api/individualQuery.api";
import {IndividualQueryData} from "../../interfaces/common/individualQuery";
import {IndividualQueryService} from "./services/individualQuery.service";

const API = [UsersApi, CountriesApi, SettingsApi, NotificationSettingsApi, CheckNameApi,IndividualQueryApi, HttpService];

const SERVICES = [
    {provide: UserData, useClass: UsersService},
    {provide: CountryData, useClass: CountriesService},
    {provide: SettingsData, useClass: SettingsService},
    {provide: NotificationSettingsData, useClass: NotificationSettingsService},
    {provide: CheckNameData, useClass: CheckNameService},
    {provide: IndividualQueryData, useClass: IndividualQueryService},
];

@NgModule({
    imports: [CommonModule, NbAuthModule],
})
export class CommonBackendModule {
    static forRoot(): ModuleWithProviders<CommonBackendModule> {
        return {
            ngModule: CommonBackendModule,
            providers: [
                ...API,
                ...SERVICES,
            ],
        };
    }
}
