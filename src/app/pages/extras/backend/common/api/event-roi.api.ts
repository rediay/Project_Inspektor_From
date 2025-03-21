import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpService} from "../../../../../@core/backend/common/api/http.service";
import {EventRoi} from "../../../interfaces/event-roi";

@Injectable()
export class EventRoiApi {

    private readonly apiController: string = 'extras/event-roi';
    private readonly eventRoiTypesEndpoint: string = 'operation/types';
    private readonly eventRoiStatusesEndpoint: string = 'operation/statuses';

    constructor(private api: HttpService) {
    }

    getEventRoiTypes(): Observable<any> {
        return this.api.get(`${this.apiController}/${this.eventRoiTypesEndpoint}`);
    }

    getEventRoiStatuses(): Observable<any> {
        return this.api.get(`${this.apiController}/${this.eventRoiStatusesEndpoint}`);
    }

    create(data: EventRoi): Observable<any> {
        return this.api.post(`${this.apiController}`, data);
    }
}
