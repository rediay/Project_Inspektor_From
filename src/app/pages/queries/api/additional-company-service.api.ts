import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpService } from '../../../@core/backend/common/api/http.service';

@Injectable()
export class AdditionalCompanyServiceApi {

    private readonly apiAdditionalCompanyServicesController: string = 'additional-services/companies';

    constructor(private api: HttpService) {
    }

    getAdditionalCompanyServices(companyId: number): Observable<any> {
        const endpoint = `${this.apiAdditionalCompanyServicesController}/${companyId}`;
        return this.api.get(endpoint);
    }

    updateAdditionalCompanyServices(companyId: number, data: any): Observable<any> {
        const endpoint = `${this.apiAdditionalCompanyServicesController}/${companyId}`;
        return this.api.put(endpoint, data);
    }
}
