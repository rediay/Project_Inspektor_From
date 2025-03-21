/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UsersApi} from '../api/users.api';
import {UserData, User} from '../../../interfaces/common/users';
import {DataSource} from 'ng2-smart-table/lib/lib/data-source/data-source';
import {map} from 'rxjs/operators';

@Injectable()
export class UsersService extends UserData {
    private user: User;
    private userObservable: Observable<any>;

    constructor(private api: UsersApi) {
        super();
    }

    get gridDataSource(): DataSource {
        return this.api.usersDataSource;
    }

    list(pageNumber: number = 1, pageSize: number = 10): Observable<User[]> {
        return this.api.list(pageNumber, pageSize);
    }

    getCurrentUser(): Observable<User> {
        if (this.user) {
            return of(this.user);
        } else if (this.userObservable) {
            return this.userObservable;
        } else {
            this.userObservable = this.api.getCurrent()
                .pipe(
                    map(u => {
                        if (u && !u.setting) {
                            u.setting = {};
                        }
                        this.user = u;
                        this.userObservable = null;
                        return u;
                    }));
            return this.userObservable;
        }
        // return this.api.getCurrent()
        //   .pipe(
        //     map(u => {
        //       if (u && !u.setting) {
        //         u.setting = {};
        //       }
        //     return u;
        //   }));
    }

    refreshInfoCurrentUser(): Observable<User> {
        return this.api.getCurrent()
            .pipe(
                map(u => {
                    if (u && !u.setting) {
                        u.setting = {};
                    }
                    this.user = u;
                    return u;
                }));
    }

    get(id: number): Observable<User> {
        return this.api.get(id);
    }

    create(user: any): Observable<User> {
        return this.api.add(user);
    }

    update(user: any): Observable<User> {
        return this.api.update(user);
    }

    updateCurrent(user: any): Observable<User> {
        return this.api.updateCurrent(user);
    }

    delete(id: number): Observable<boolean> {
        return this.api.delete(id);
    }
}
