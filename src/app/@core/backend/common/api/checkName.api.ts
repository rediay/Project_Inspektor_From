/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class CheckNameApi {
  // private readonly apiController: string = 'notificationSettings';

  constructor(private api: HttpService) {}

  getNameByDocument(document: string): Observable<any> {
    // let httpOptionsGet = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   })
    // };
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //return this.api.getNameByDocument(document,{ responseType: 'text' });
    return this.api.get("Document/GetName?document="+document);
  }


}
