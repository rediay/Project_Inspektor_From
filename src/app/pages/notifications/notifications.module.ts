import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsComponent} from './notifications.component';
import {SettingsComponent} from './components/settings/settings.component';
import {NotificationsRoutingModule, routedComponents} from './notifications-routing.module';
import {SentComponent} from './components/sent/sent.component';
import {MonitoringComponent} from './components/monitoring/monitoring.component';
import {
    NbButtonModule,
    NbCardModule, NbDatepickerModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule, NbToggleModule,NbTagModule ,
    NbTreeGridModule, NbWindowService
} from "@nebular/theme";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ThemeModule} from "../../@theme/theme.module";
import {TablesRoutingModule} from "../tables/tables-routing.module";
import {ComponentsModule} from "../../@components/components.module";
import {NotificationSentApi} from "./backend/common/api/notification-sent.api";
import {NotificationSentService} from "./backend/common/services/notification-sent.service";
import {CustomHttpService} from "../../utils/custom-http.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NotificationDetailComponent } from './components/sent/components/notification-detail/notification-detail.component';
import { TranslateModule } from '@ngx-translate/core';

const components = [
    NotificationsComponent,
    SettingsComponent,
    SentComponent,
    MonitoringComponent,
];

@NgModule({
    imports: [
        NotificationsRoutingModule,
        CommonModule,
        NbCardModule,
        NbTreeGridModule,
        Ng2SmartTableModule,
        NbInputModule,
        NbFormFieldModule,
        NbButtonModule,
        NbIconModule,
        ThemeModule,
        TablesRoutingModule,
        ComponentsModule,
        NbIconModule,
        ReactiveFormsModule,
        FormsModule,
        NbToggleModule,
        NbDatepickerModule,
        NbTagModule,
        TranslateModule
    ],
    providers: [
        CustomHttpService,
        NotificationSentApi,
        NotificationSentService,
        NbWindowService,
    ],
    declarations: [...routedComponents, components, NotificationDetailComponent],
})
export class NotificationsModule {
}



