import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExtraRoutingModule, routedComponents} from './extra-routing.module';
import {ExtraComponent} from './extra.component';
import {HelpComponent} from './components/help/help.component';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbAccordionModule,
    NbListModule, NbTreeGridModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TablesRoutingModule} from "../tables/tables-routing.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {FaqsComponent} from './components/faqs/faqs.component';

const components = [
    ExtraComponent,
    HelpComponent,    
    FaqsComponent
];

@NgModule({
    declarations: [
        ...routedComponents, components,
    ],
    imports: [
        CommonModule,
        ExtraRoutingModule,
        ThemeModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbActionsModule,
        NbUserModule,
        NbCheckboxModule,
        NbRadioModule,
        NbDatepickerModule,
        NbSelectModule,
        NbIconModule,
        NbAccordionModule,
        ReactiveFormsModule,
        FormsModule,
        NbListModule,
        NbTreeGridModule,
        TablesRoutingModule,
        Ng2SmartTableModule,
    ],
})
export class ExtraModule {
}
