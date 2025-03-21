import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulkComponent } from './components/bulk/bulk.component';
import { IndividualResultComponent } from './components/individual-result/individual-result.component';
import { IndividualComponent } from './components/individual/individual.component';
import { QueriesComponent } from './queries.component';
import { BulkAdditionalservicesComponent } from './components/bulk-additionalservices/bulk-additionalservices.component';
import { QueryDetailedviewComponent } from './components/query-detailedview/query-detailedview.component';


const routes: Routes = [{
    path: '',
    component: QueriesComponent,
    children: [{
            path: 'individual',
            component: IndividualComponent,
        },
        {
            path: 'bulk',
            component: BulkComponent,
        },
        {
            path: 'individual/result/:id',
            component: IndividualResultComponent,
        },
        {
            path: 'bulk-additionalservices',
            component: BulkAdditionalservicesComponent,
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class  QueriesRoutingModule { }

export const routedComponents = [
QueriesComponent,
IndividualComponent,
BulkComponent,
BulkAdditionalservicesComponent,
QueryDetailedviewComponent
];
