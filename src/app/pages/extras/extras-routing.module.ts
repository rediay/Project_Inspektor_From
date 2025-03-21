import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExtrasComponent} from './extras.component';
import {NewsComponent} from './news/news.component';
import {RegisterRoiComponent} from './register-roi/register-roi.component';
import { WarningSignsComponent } from './warning-signs/warning-signs.component';
import {ManagementReportComponent} from "./management-report/management-report.component";

const routes: Routes = [
    {
        path: '',
        component: ExtrasComponent,
        children: [
            {
                path: 'warning-signs',
                component: WarningSignsComponent,
            },
            {
                path: 'news',
                component: NewsComponent,
            },
            {
                path: 'register-roi',
                component: RegisterRoiComponent,
            },
            {
                path: 'management-report',
                component: ManagementReportComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExtrasRoutingModule {
}

export const routedComponents = [
    ExtrasComponent,
    NewsComponent,
    WarningSignsComponent
];
