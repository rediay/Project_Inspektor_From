import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PaginationFilter} from '../../../../../utils/pagination-filter';
import {HttpParams} from '@angular/common/http';
import {User} from '../../../models/user';
import {CustomServerDataSource} from '../../../../../utils/custom-server.data-source';
import {CustomHttpService} from '../../../../../utils/custom-http.service';

@Injectable()
export class UserManagementApi {

    private readonly apiController: string = 'management/users';

    constructor(private api: CustomHttpService) {
    }

    get<T>(id: number): Observable<T> {
        return this.api.get(`${this.apiController}/${id}`);
    }

    create(data: User): Observable<User> {
        return this.api.post(`${this.apiController}`, data);
    }

    update(id: number, data: User): Observable<User> {
        return this.api.put(`${this.apiController}/${id}`, data);
    }

    ResetPassword(id:number, data: User) : Observable<User>{
        return this.api.put(`${this.apiController}/ResetPassword/${id}`, data);
    }

    delete(id: number): Observable<boolean> {
        return this.api.delete(`${this.apiController}/${id}`);
    }

    list(paginationFilter: PaginationFilter): Observable<any> {
        const params = new HttpParams({
            fromObject: {
                query: paginationFilter.query,
                perPage: paginationFilter.perPage.toString(),
                pageNumber: paginationFilter.pageNumber.toString(),
            },
        });

        const options = {
            params,
        };

        return this.api.get(`${this.apiController}`, options);
    }

    // getDataSource(data: PaginationFilter): Promise<LocalDataSource> {
    //     return this.api.getDataSource(`${this.apiController}`, data);
    // }

    getServerDataSource(data: PaginationFilter): CustomServerDataSource {
        return this.api.getServerDataSource(`${this.apiController}`);
    }

    
}
