import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManagementComponent} from './management.component';
import {UserManagementComponent} from './components/user-management/user-management.component';
import {UserManagementFormComponent} from './components/user-management-form/user-management-form.component';
import {ThirdpartymanageComponent} from './components/thirdpartymanage/thirdpartymanage.component';
import {CompanytypelistComponent} from './components/companytypelist/companytypelist.component';
import {ManageprocuracyComponent} from './components/manageprocuracy/manageprocuracy.component';
import { AccessManagementComponent } from './components/access-management/access-management.component';
import { AccessManagementFormComponent } from './components/access-management-form/access-management-form.component';

const routes: Routes = [
    {
        path: '',
        component: ManagementComponent,
        children: [
            {
                path: 'users',
                component: UserManagementComponent,
            },
            {
                path: 'users/create',
                component: UserManagementFormComponent,
            },
            {
                path: 'users/edit/:id',
                component: UserManagementFormComponent,
            },
            {
                path: 'thirdpartymanage',
                component: ThirdpartymanageComponent,
            },
            {
                path: 'companytypelist',
                component: CompanytypelistComponent,
            },
            {
                path: 'manageprocuracy',
                component: ManageprocuracyComponent,
            },
            {
                path: 'access',
                component: AccessManagementComponent,
            },
            {
                path: 'access/create',
                component: AccessManagementFormComponent,
            },
            {
                path: 'access/edit/:id',
                component: AccessManagementFormComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManagementRoutingModule {
}

export const routedComponents = [
    ThirdpartymanageComponent,
    CompanytypelistComponent,
    UserManagementComponent,
    ManagementComponent,
    UserManagementFormComponent,
    AccessManagementComponent,
    AccessManagementFormComponent
];
