import {Injectable} from "@angular/core";
import {CustomHttpService} from "../../../../../utils/custom-http.service";
import {CustomServerDataSource} from "../../../../../utils/custom-server.data-source";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../../../utils/api-response";

@Injectable()
export class ConsultingHistoricalReportApi {

    private readonly apiController: string = 'report/consulting-historicals';

    constructor(private api: CustomHttpService) {
    }

    getQueries(): CustomServerDataSource {
        return this.api.getServerDataSource(`${this.apiController}`);
    }

    getQueryLists(id: number): Observable<ApiResponse<any>> {
        return this.api.get(`${this.apiController}/${id}`);
    }
}
