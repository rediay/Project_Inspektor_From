import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraComponent } from '../extra/extra.component';
import { HelpComponent } from '../extra/components/help/help.component';
import { FaqsComponent } from '../extra/components/faqs/faqs.component';
import { WarningSignsComponent } from '../extras/warning-signs/warning-signs.component';

const routes: Routes = [{
    path: '',
    component: ExtraComponent,
    children: [{
        path: 'help',
        component: HelpComponent,
    },
    ],
}, {
    path: '',
    component: ExtraComponent,
    children: [{
        path: 'faqs',
        component: FaqsComponent,
    },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExtraRoutingModule {
}

export const routedComponents = [
    ExtraComponent,
    HelpComponent,
    FaqsComponent,    
];