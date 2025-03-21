import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingComponent} from './setting.component';
import {routedComponents, SettingRoutingModule} from './setting-routing.module';
// import { AdduserComponent } from './components/adduser/adduser.component';
// import { GetuserComponent } from './components/getuser/getuser.component';
// import { ThirdpartymanageComponent } from './components/thirdpartymanage/thirdpartymanage.component';
// import { CompanytypelistComponent } from './components/companytypelist/companytypelist.component';
// import { ManageprocuracyComponent } from './components/manageprocuracy/manageprocuracy.component';
import {CompanylogoComponent} from './components/companylogo/companylogo.component';
import {PasswordChangeComponent} from './components/password-change/password-change.component';
import {
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbDatepickerModule,
    NbUserModule,

    NbTreeGridModule, NbAlertModule
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {TablesRoutingModule} from '../tables/tables-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ComponentsModule} from '../../@components/components.module';
import {UsersPasswordService} from './backend/common/services/users-password.service';
import {UsersPasswordApi} from './backend/common/api/users-password.api';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NbFileUploaderModule} from "../../@components/editors/file-uploader/file-uploader.module";
import {ManageprocuracyComponent} from "../management/components/manageprocuracy/manageprocuracy.component";
import { NgxFileDropModule } from 'ngx-file-drop';
import { TranslateModule } from '@ngx-translate/core';

const components = [
    SettingComponent,
    // AdduserComponent,
    // GetuserComponent,   
    ManageprocuracyComponent,    
    CompanylogoComponent,
    PasswordChangeComponent,
    // ManageUserComponent,
    //   UserFormComponent,
];

@NgModule({
    imports: [
        SettingRoutingModule,
        CommonModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        NbAccordionModule,
        FormsModule,
        Ng2SmartTableModule,
        NbTreeGridModule,
        NbFormFieldModule,
        NbIconModule,
        NbDatepickerModule,
        ReactiveFormsModule,
        NbIconModule,
        ThemeModule,
        TablesRoutingModule,
        Ng2SmartTableModule,
        ComponentsModule,
        NbSelectModule,
        NbButtonModule,
        NbAccordionModule,
        NbFileUploaderModule,
        NbUserModule,
        NbUserModule,
        NgxFileDropModule,
        TranslateModule,
        NbAlertModule
    ],
    declarations: [...routedComponents,components],
    providers: [
        UsersPasswordApi,
        UsersPasswordService,
    ],
})
export class SettingModule {
}
