import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../../../../../@core/backend/common/api/http.service';
import {Password} from '../../../models/password';

@Injectable()
export class UsersPasswordApi {
  private readonly apiController: string = 'password/update';

  constructor(private api: HttpService) { }

  update(data: Password): Observable<boolean> {
    return this.api.put(`${this.apiController}`, data);
  }
}
