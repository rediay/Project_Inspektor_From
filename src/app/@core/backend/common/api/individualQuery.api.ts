/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from './http.service';

@Injectable()
export class IndividualQueryApi {
    private readonly apiController: string = 'indivdualQuery';
    private readonly apiMasiveController: string = 'BulkQueryController';

    constructor(private api: HttpService) {
    }

    makeQuery(item: any): Observable<any> {
        return this.api.post(`${this.apiController}`, item);
    }

    previusQuery(item: any): Observable<any> {
        return this.api.post(`${this.apiController}/previusQuery`, item);
    }

    getQuery(queryId: number): Observable<any> {
        return this.api.get(`${this.apiController}/${queryId}`);
      }

      getIndividualQueryPdf(queryId: number):  Observable<any> {
        return this.api.get(`${this.apiController}/getReport/${queryId}`, { observe: 'response', responseType: 'blob' as 'json' });
      }
    // updateCurrent(item: any,companyId: number): Observable<any> {
    //   return this.api.put(`${this.apiController}/${companyId}`, item);
    // }

    getMasiveQueryPdf(queryId: number):  Observable<any> {
        return this.api.get(`${this.apiMasiveController}/getReport/${queryId}`, { observe: 'response', responseType: 'blob' as 'json' });
    }
}
