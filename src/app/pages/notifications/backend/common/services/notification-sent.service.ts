import {Injectable} from '@angular/core';
import {NotificationSentApi} from '../api/notification-sent.api';
import {Observable} from 'rxjs';
import {PaginationFilter} from '../../../../../utils/pagination-filter';
import {ApiPaginationResponse} from '../../../../../utils/api-pagination-response';
import {CustomServerDataSource} from "../../../../../utils/custom-server.data-source";

@Injectable()
export class NotificationSentService {

    constructor(private api: NotificationSentApi) {
    }

    list(paginationFilter: PaginationFilter): Observable<ApiPaginationResponse<any>> {
        return this.api.list(paginationFilter);
    }

    getServerDataSource(): CustomServerDataSource {
        return this.api.getServerDataSource();
    }

    getNotification(id: number): Observable<any> {
        return this.api.getNotification(id);
    }
    getExcel(filter: PaginationFilter): Observable<any> {
        return this.api.getExportExcel(filter);
    }
}
