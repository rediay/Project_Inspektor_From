import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PaginationFilter} from '../../../../../utils/pagination-filter';
import {ApiPaginationResponse} from '../../../../../utils/api-pagination-response';
import {CustomServerDataSource} from "../../../../../utils/custom-server.data-source";
import {NewsApi} from "../api/news.api";
import {ApiResponse} from "../../../../../utils/api-response";
import {News} from "../../../interfaces/news";
import {NewsPaginationFilter} from "../../../interfaces/news-pagination-filter";
import {delay, map} from "rxjs/operators";

@Injectable()
export class NewsService {

    constructor(private api: NewsApi) {
    }

    list(paginationFilter: PaginationFilter): Observable<ApiPaginationResponse<any>> {
        return this.api.list(paginationFilter);
    }

    getServerDataSource(data: PaginationFilter): CustomServerDataSource {
        return this.api.getServerDataSource(data);
    }

    getNews(filter: NewsPaginationFilter) : Observable<ApiPaginationResponse<News[]>>{
        return this.api.getNews(filter).pipe(
            delay(1500),
        );
    }

    getSearchFilters(): Observable<ApiResponse<News>> {
        return this.api.getSearchFilters();
    }
    getExcel(filter: NewsPaginationFilter): Observable<any> {
        return this.api.getExportExcel(filter);
    }
}
