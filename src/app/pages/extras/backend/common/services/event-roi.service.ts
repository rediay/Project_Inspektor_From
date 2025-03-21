import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EventRoiApi} from "../api/event-roi.api";
import {ApiResponse} from "../../../../../utils/api-response";
import {EventRoi} from "../../../interfaces/event-roi";

@Injectable()
export class EventRoiService {

    constructor(private api: EventRoiApi) {
    }

    getEventRoiTypes(): Observable<ApiResponse<any>> {
        return this.api.getEventRoiTypes();
    }

    getEventRoiStatuses(): Observable<ApiResponse<any>> {
        return this.api.getEventRoiStatuses();
    }

    create(data: EventRoi): Observable<any> {
        return this.api.create(data);
    }
}
