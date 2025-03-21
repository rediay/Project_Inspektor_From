import {Injectable} from '@angular/core';
import {CustomHttpService} from '../../../../../utils/custom-http.service';
import {CustomServerDataSource} from "../../../../../utils/custom-server.data-source";
import {Observable} from "rxjs";

@Injectable()
export class ParameterizeVariableApi {

    private readonly apiRiskProfileVariableController: string = 'third-party-profiling/parameterize-variables/risk-profile-variables';
    private readonly apiCategoryVariablesController: string = 'third-party-profiling/parameterize-variables/category-variables';
    private readonly apiCategoryVariablesDataSourceController: string = 'third-party-profiling/parameterize-variables/risk-profile-variables';

    constructor(private api: CustomHttpService) {
    }

    getRiskProfileVariableServerDataSource(): CustomServerDataSource {
        return this.api.getServerDataSource(`${this.apiRiskProfileVariableController}`);
    }

    getCategoryVariablesServerDataSource(riskProfileVariableId: number, personTypeId: number): CustomServerDataSource {
        const endpoint = `${this.apiCategoryVariablesDataSourceController}/${riskProfileVariableId}/category-variables/person-type/${personTypeId}`
        return this.api.getServerDataSource(`${endpoint}`);
    }

    updateRiskProfileVariable(id: number, data: any): Observable<any> {
        return this.api.put(`${this.apiRiskProfileVariableController}/${id}`, data);
    }

    updateCategoryVariable(id: number, data: any): Observable<any> {
        return this.api.put(`${this.apiCategoryVariablesController}/${id}`, data);
    }
}
