import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PaginationFilter} from '../../../../../utils/pagination-filter';
import {LocalDataSource} from 'ng2-smart-table';
import {HttpParams} from '@angular/common/http';
import {CustomHttpService} from '../../../../../utils/custom-http.service';
import {CustomServerDataSource} from "../../../../../utils/custom-server.data-source";
import { environment } from '../../../../../../environments/environment';

@Injectable()
export class NotificationSentApi {

    private readonly apiController: string = 'notifications/sent';

    constructor(private api: CustomHttpService) {
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

    getServerDataSource(): CustomServerDataSource {
        return this.api.getServerDataSource(`${this.apiController}`);
    }

    getNotification(id: number): Observable<any> {
        return this.api.get(`${this.apiController}/${id}`);
    }
     getExportExcel(filter: PaginationFilter): Observable<any> {

        const urlSearchParams = Object.entries(filter).map(([key, val]) => `${key}=${val}`).join('&');  
        return this.api.get(`${this.apiController}${'/ExportExcel'}?${urlSearchParams}`, { observe: 'response', responseType: 'blob' })
      }
}
