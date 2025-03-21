import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanytypelistComponent} from '../management/components/companytypelist/companytypelist.component';
import {ThirdpartymanageComponent} from '../management/components/thirdpartymanage/thirdpartymanage.component';
import {ManageprocuracyComponent} from '../management/components/manageprocuracy/manageprocuracy.component';
import {SettingComponent} from './setting.component';
import {CompanylogoComponent} from './components/companylogo/companylogo.component';
import {PasswordChangeComponent} from './components/password-change/password-change.component';

const routes: Routes = [
    {
        path: '',
        component: SettingComponent,
        children: [
            {
                path: 'companylogo',
                component: CompanylogoComponent,
            },
            {
                path: 'companylogo',
                component: CompanylogoComponent,
            },
            {
                path: 'password-change',
                component: PasswordChangeComponent,
            },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule { }

export const routedComponents = [
    ManageprocuracyComponent,
    CompanylogoComponent,
    SettingComponent,
    PasswordChangeComponent,
];
