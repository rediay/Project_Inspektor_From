import {Injectable} from '@angular/core';
import {AdditionalCompanyServiceApi} from '../api/additional-company-service.api';
import {Observable} from 'rxjs';

@Injectable()
export class AdditionalCompanyServiceService {

    constructor(private api: AdditionalCompanyServiceApi) {
    }

    getAdditionalCompanyServices(companyId: number): Observable<any> {
        return this.api.getAdditionalCompanyServices(companyId);
    }

    updateAdditionalCompanyServices(companyId: number, data: any): Observable<any> {
        return this.api.updateAdditionalCompanyServices(companyId, data);
    }
}
