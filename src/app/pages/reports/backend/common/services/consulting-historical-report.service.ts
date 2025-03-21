import {Injectable} from "@angular/core";
import {ConsultingHistoricalReportApi} from "../api/consulting-historical-report.api";
import {CustomServerDataSource} from "../../../../../utils/custom-server.data-source";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../../../utils/api-response";

@Injectable()
export class ConsultingHistoricalReportService {

    constructor(private api: ConsultingHistoricalReportApi) {
    }

    getQueries(): CustomServerDataSource {
        return this.api.getQueries();
    }

    getQueryLists(id: number): Observable<ApiResponse<any>> {
        return this.api.getQueryLists(id);
    }
}
