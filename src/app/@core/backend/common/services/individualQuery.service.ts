/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IndividualQuery, Query,IndividualQueryData} from "../../../interfaces/common/individualQuery";
import {IndividualQueryApi} from "../api/individualQuery.api";

@Injectable()
export class IndividualQueryService extends IndividualQueryData {
    constructor(private api: IndividualQueryApi) {
        super();
    }

    makeQuery(individualQuery: IndividualQuery): Observable<IndividualQuery> {
        return this.api.makeQuery(individualQuery);
    }
   previusQuery(individualQuery: Query): Observable<Query> {
        return this.api.previusQuery(individualQuery);
    }

    getQuery(queryId:number): Observable<IndividualQuery> {
        return this.api.getQuery(queryId);
    }

    getIndividualQueryPdf(queryId:number):  Observable<any> {
        return this.api.getIndividualQueryPdf(queryId);
    }

    getMasiveQueryPdf(queryId:number):  Observable<any> {
        return this.api.getMasiveQueryPdf(queryId);
    }
}
