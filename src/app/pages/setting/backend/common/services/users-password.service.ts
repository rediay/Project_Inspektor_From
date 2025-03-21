import {Injectable} from '@angular/core';
import {UsersPasswordApi} from '../api/users-password.api';
import {Password} from '../../../models/password';
import {Observable} from 'rxjs';

@Injectable()
export class UsersPasswordService {

    constructor(private api: UsersPasswordApi) {

    }

    update(data: Password): Observable<boolean> {
        return this.api.update(data);
    }
}
