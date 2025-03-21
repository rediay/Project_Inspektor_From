import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QueriesComponent} from './queries.component';
import {IndividualComponent} from './components/individual/individual.component';
import {BulkComponent} from './components/bulk/bulk.component';
import {QueriesRoutingModule, routedComponents} from './queries-routing.module';
import {
    NbAccordionModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbRadioModule,
    NbSelectModule, NbSpinnerModule,
    NbToggleModule,
    NbUserModule
} from '@nebular/theme';
import {FormsRoutingModule} from '../forms/forms-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemeModule} from '../../@theme/theme.module';
import {NbFileUploaderModule} from '../../@components/editors/file-uploader/file-uploader.module';
import {IndividualResultComponent} from './components/individual-result/individual-result.component';

import {Ng2SmartTableModule} from "ng2-smart-table";
import {NgxFileDropModule} from 'ngx-file-drop';
import {AdditionalCompanyServiceApi} from './api/additional-company-service.api';
import {AdditionalCompanyServiceService} from './services/additional-company-service.service';
import {BulkAdditionalservicesComponent} from './components/bulk-additionalservices/bulk-additionalservices.component';
import {QueryDetailedviewComponent} from './components/query-detailedview/query-detailedview.component';

const components = [
    QueriesComponent,
    IndividualComponent,
    BulkComponent,
    IndividualResultComponent,
    BulkAdditionalservicesComponent,
    QueryDetailedviewComponent
]

@NgModule({
    imports: [
        Ng2SmartTableModule,
        NbAccordionModule,
        QueriesRoutingModule,
        CommonModule,
        ThemeModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbActionsModule,
        NbUserModule,
        NbCheckboxModule,
        NbRadioModule,
        NbDatepickerModule,
        FormsRoutingModule,
        NbSelectModule,
        NbIconModule,
        NbFileUploaderModule,
        NbToggleModule,
        ReactiveFormsModule,
        FormsModule,
        NbSpinnerModule,
        NbLayoutModule,
        NgxFileDropModule,
    ],
    providers: [
        AdditionalCompanyServiceApi,
        AdditionalCompanyServiceService,
    ],
    declarations: [...routedComponents, components]
})
export class QueriesModule {
}



