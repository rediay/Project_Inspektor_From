
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule, NbSelectModule,
    NbStepperModule,
    NbToggleModule,
    NbTreeGridModule
} from '@nebular/theme';
import { ComponentsModule } from '../../@components/components.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ManagementComponent } from './management.component';
import { UserManagementService } from './backend/common/services/user-management.service';
import { UserManagementFormComponent } from './components/user-management-form/user-management-form.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserManagementApi } from './backend/common/api/user-management.api';
import { CustomHttpService } from "../../utils/custom-http.service";
import { ThemeModule } from "../../@theme/theme.module";
import { ThirdpartymanageComponent } from './components/thirdpartymanage/thirdpartymanage.component';
import { CompanytypelistComponent } from './components/companytypelist/companytypelist.component';
import { TranslateModule } from '@ngx-translate/core';
import { AccessManagementComponent } from './components/access-management/access-management.component';
import { AccessManagementFormComponent } from './components/access-management-form/access-management-form.component';
import {thirdPartyManageService} from "./backend/common/services/thirdPartyManage.service";



const components = [
    ThirdpartymanageComponent,
    CompanytypelistComponent,
    UserManagementComponent,
    ManagementComponent,
    UserManagementFormComponent,   
    AccessManagementComponent,
    AccessManagementFormComponent

];

@NgModule({
    imports: [
        CommonModule,
        ManagementRoutingModule,
        ReactiveFormsModule,
        NbCardModule,
        ComponentsModule,
        NbInputModule,
        NbButtonModule,
        Ng2SmartTableModule,
        NbFormFieldModule,
        NbAccordionModule,
        NbIconModule,
        NbTreeGridModule,
        FormsModule,
        ThemeModule,
        NbSelectModule,
        NbToggleModule, 
        NbStepperModule,
        TranslateModule
    ],
    providers: [
        CustomHttpService,
        UserManagementApi,
        UserManagementService,
        thirdPartyManageService,
    ],
    declarations: [...components],
})
export class ManagementModule {
}
