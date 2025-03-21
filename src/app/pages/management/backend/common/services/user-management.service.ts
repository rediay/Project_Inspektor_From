import {Injectable} from '@angular/core';
import {UserManagementApi} from '../api/user-management.api';
import {Observable} from 'rxjs';
import {PaginationFilter} from '../../../../../utils/pagination-filter';
import {ApiPaginationResponse} from '../../../../../utils/api-pagination-response';
import {ApiResponse} from '../../../../../utils/api-response';
import {User} from '../../../models/user';
import {CustomServerDataSource} from '../../../../../utils/custom-server.data-source';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RoleUserDTO } from '../../../models/RoleUserDTO';
import { environment } from '../../../../../../environments/environment';

@Injectable()
export class UserManagementService {

    constructor(
        private api: UserManagementApi,
        private http: HttpClient
    ) {

    }

    get(id: number): Observable<ApiResponse<User>> {
        return this.api.get<ApiResponse<User>>(id);
    }

    create(data: User): Observable<User> {
        return this.api.create(data);
    }

    ResetPassword(id: number, data: User) : Observable<User>{
        return this.api.ResetPassword(id, data);
    }

    update(id: number, data: User): Observable<User> {
        return this.api.update(id, data);
    }

    delete(id: number): Observable<boolean> {
        return this.api.delete(id);
    }

    getServerDataSource(data: PaginationFilter): CustomServerDataSource {
        return this.api.getServerDataSource(data);
    }

    list(paginationFilter: PaginationFilter): Observable<ApiPaginationResponse<any>> {
        return this.api.list(paginationFilter);
    }

    public createRolesUser(roleUserDTO:RoleUserDTO){
        return this.http.post<RoleUserDTO>(`${environment.apiUrl}/management/Permissions/Update`,roleUserDTO)
    }

    public getPermissionsByUser(iduser:string){
        let params = new HttpParams().set('UserId', iduser);
        return this.http.get<RoleUserDTO>(`${environment.apiUrl}/management/Permissions/GetPermissionsByUser`,{ params } )
    }

    

    /*getDataSource(data: PaginationFilter): DataSource {
        return this.api.getDataSource(data);
    }*/
}
