import {Injectable} from '@angular/core';
import {PaginationFilter} from '../../../../../utils/pagination-filter';
import {CustomServerDataSource} from "../../../../../utils/custom-server.data-source";
import {ParameterizeVariableApi} from "../api/parameterize-variable.api";
import {Observable} from "rxjs";

@Injectable()
export class ParameterizeVariableService {

    constructor(private api: ParameterizeVariableApi) {
    }

    getRiskProfileVariableServerDataSource(): CustomServerDataSource {
        return this.api.getRiskProfileVariableServerDataSource();
    }

    getCategoryVariablesServerDataSource(riskProfileVariableId: number, personTypeId: number): CustomServerDataSource {
        return this.api.getCategoryVariablesServerDataSource(riskProfileVariableId, personTypeId);
    }

    updateRiskProfileVariable(id: number, data: any): Observable<any> {
        return this.api.updateRiskProfileVariable(id, data);
    }

    updateCategoryVariable(id: number, data: any): Observable<any> {
        return this.api.updateCategoryVariable(id, data);
    }
}
