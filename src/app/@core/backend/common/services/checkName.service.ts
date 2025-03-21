/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {checkNameData, CheckNameData} from "../../../interfaces/common/checkName";
import {CheckNameApi} from "../api/checkName.api";

@Injectable()
export class CheckNameService extends CheckNameData {
    constructor(private api: CheckNameApi) {
        super();
    }

    getNameByDocument(document: string): Observable<checkNameData> {
        return this.api.getNameByDocument(document);
    }
}
