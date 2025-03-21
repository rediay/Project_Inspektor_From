import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ThirdPartyProfilingRoutingModule} from './third-party-profiling-routing.module';
import {ThirdPartyProfilingComponent} from './third-party-profiling.component';
import {
    NbButtonModule,
    NbCardModule,
    NbDialogService,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbTreeGridModule,
    NbWindowService,
} from "@nebular/theme";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ComponentsModule} from "../../@components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RiskProfileVariablesComponent} from './parameterize-variables/risk-profile-variables/risk-profile-variables.component';
import {RiskProfileVariablesFormComponent} from './parameterize-variables/risk-profile-variables/components/risk-profile-variables-form/risk-profile-variables-form.component';
import {CustomHttpService} from "../../utils/custom-http.service";
import {ParameterizeVariableApi} from "./backend/common/api/parameterize-variable.api";
import {ParameterizeVariableService} from "./backend/common/services/parameterize-variable.service";
import { CategoryVariablesComponent } from './parameterize-variables/category-variables/category-variables.component';
import { CategoryVariablesFormComponent } from './parameterize-variables/category-variables/components/category-variables-form/category-variables-form.component';


@NgModule({
    declarations: [
        ThirdPartyProfilingComponent,
        RiskProfileVariablesComponent,
        RiskProfileVariablesFormComponent,
        CategoryVariablesComponent,
        CategoryVariablesFormComponent,
    ],
    imports: [
        CommonModule,
        ThirdPartyProfilingRoutingModule,
        NbCardModule,
        NbTreeGridModule,
        Ng2SmartTableModule,
        NbInputModule,
        ComponentsModule,
        ReactiveFormsModule,
        NbSelectModule,
        NbIconModule,
        NbButtonModule,
        NbFormFieldModule,
        FormsModule,
    ],
    providers: [
        CustomHttpService,
        ParameterizeVariableApi,
        ParameterizeVariableService,
        NbDialogService,
        NbWindowService,
    ]
})
export class ThirdPartyProfilingModule {
}
