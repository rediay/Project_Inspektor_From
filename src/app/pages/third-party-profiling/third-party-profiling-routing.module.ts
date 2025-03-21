import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThirdPartyProfilingComponent} from './third-party-profiling.component';
import {RiskProfileVariablesComponent} from "./parameterize-variables/risk-profile-variables/risk-profile-variables.component";
import {CategoryVariablesComponent} from "./parameterize-variables/category-variables/category-variables.component";

const routes: Routes = [
    {
        path: '',
        component: ThirdPartyProfilingComponent,
        children: [
            {
                path: 'parameterize-variables/risk-profile-variables',
                component: RiskProfileVariablesComponent,
            },
            {
                path: 'parameterize-variables/category-variables/:id',
                component: CategoryVariablesComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ThirdPartyProfilingRoutingModule {
}

export const routedComponents = [
    ThirdPartyProfilingComponent,
];
