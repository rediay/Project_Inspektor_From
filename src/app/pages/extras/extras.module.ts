import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExtrasRoutingModule} from './extras-routing.module';
import {ExtrasComponent} from './extras.component';
import {NewsComponent} from './news/news.component';
import {
    NbButtonModule,
    NbCardModule,
    NbDatepickerModule,
    NbInputModule,
    NbListModule,
    NbSelectModule,
    NbIconModule, NbAccordionModule
} from '@nebular/theme';
import {NewsPostComponent} from './news/news-post/news-post.component';
import {NewsPostPlaceholderComponent} from './news/news-post-placeholder/news-post-placeholder.component';
//import {NewsService} from './news/news.service';
import { RegisterRoiComponent } from './register-roi/register-roi.component';
import {NewsService} from "./backend/common/services/news.service";
import {NewsApi} from "./backend/common/api/news.api";
import {CustomHttpService} from "../../utils/custom-http.service";
import {EventRoiService} from "./backend/common/services/event-roi.service";
import {EventRoiApi} from "./backend/common/api/event-roi.api";
import {ReactiveFormsModule} from "@angular/forms";
import { WarningSignsComponent } from './warning-signs/warning-signs.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ComponentsModule} from "../../@components/components.module";
import { ManagementReportComponent } from './management-report/management-report.component';

@NgModule({
    declarations: [
        ExtrasComponent,
        NewsComponent,
        NewsPostComponent,
        NewsPostPlaceholderComponent,
        RegisterRoiComponent,
        WarningSignsComponent,
        ManagementReportComponent
    ],
    imports: [
        CommonModule,
        ExtrasRoutingModule,
        NbCardModule,
        NbListModule,
        NbInputModule,
        NbButtonModule,
        NbSelectModule,
        NbDatepickerModule,
        ReactiveFormsModule,
        Ng2SmartTableModule,
        NbIconModule,
        ComponentsModule,
        NbAccordionModule
    ],
    providers: [
        CustomHttpService,
        NewsApi,
        NewsService,
        EventRoiApi,
        EventRoiService,
    ],
})
export class ExtrasModule {
}
