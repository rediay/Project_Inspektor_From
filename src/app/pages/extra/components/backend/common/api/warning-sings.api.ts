import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import { CustomHttpService } from "../../../../../../utils/custom-http.service";
import { PaginationFilter } from "../../../../../../utils/pagination-filter";
import { CustomServerDataSource } from "../../../../../../utils/custom-server.data-source";
import { NewsPaginationFilter } from "../../../../../extras/interfaces/news-pagination-filter";

@Injectable()
export class WarningSignsService {

    private readonly apiController: string = 'extras/news';

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

    getServerDataSource(data: PaginationFilter): CustomServerDataSource {
        return this.api.getServerDataSource(`${this.apiController}`);
    }

    getSearchFilters() {
        return this.api.get(`${this.apiController}/filters`);
    }

    getNews(filter: NewsPaginationFilter) {
        const urlSearchParams = Object.entries(filter).map(([key, val]) => `${key}=${val}`).join('&');
        return this.api.get(`${this.apiController}?`+ urlSearchParams);
    }
}
