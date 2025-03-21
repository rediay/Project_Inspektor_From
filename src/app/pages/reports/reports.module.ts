import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsRoutingModule, routedComponents} from './reports-routing.module';

import {
    NbButtonModule,
    NbCardModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbTreeGridModule,
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ThemeModule} from "../../@theme/theme.module";
import {TablesRoutingModule} from "../tables/tables-routing.module";
import {ComponentsModule} from "../../@components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConsultingHistoricalReportApi} from "./backend/common/api/consulting-historical-report.api";
import {ConsultingHistoricalReportService} from "./backend/common/services/consulting-historical-report.service";
import {CustomHttpService} from "../../utils/custom-http.service";
import {IndividualQueryService} from "../../@core/backend/common/services/individualQuery.service";
import {ExcelService} from "./backend/common/services/excel.service";

@NgModule({
    imports: [
        ReportsRoutingModule,
        CommonModule,
        NbCardModule,
        NbTreeGridModule,
        NbIconModule,
        NbInputModule,
        ThemeModule,
        TablesRoutingModule,
        Ng2SmartTableModule,
        ComponentsModule,
        NbDatepickerModule,
        NbSelectModule,
        NbButtonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        ...routedComponents,
    ],
    providers: [
        CustomHttpService,
        ConsultingHistoricalReportApi,
        ConsultingHistoricalReportService,
        IndividualQueryService,
        ExcelService,
    ]
})
export class ReportsModule {
}
