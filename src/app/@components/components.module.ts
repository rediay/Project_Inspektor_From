
import {NgModule} from '@angular/core';
import {FormsModule,FormControl, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgxValidationMessageComponent} from './validation-message/validation-message.component';
import {
    NgxFilterByNumberComponent,
} from './custom-smart-table-components/filter-by-number/filter-by-number.component';
import {
    NbAccordionModule, NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconComponent,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbToggleModule,
    NbTooltipModule,
    NbTreeGridModule
} from '@nebular/theme';

import {CheckboxComponent} from './editors/checkbox/checkbox.component';
import {ToggleComponent} from './editors/toggle/toggle.component';
import {ThemeModule} from '../@theme/theme.module';
import {TablesRoutingModule} from '../pages/tables/tables-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {InputComponent} from './editors/input/input.component';
import {NbFileUploaderModule} from './editors/file-uploader/file-uploader.module';
import { SelecttableComponent } from './editors/selecttable/selecttable.component';
import { LinkSmartTableCellComponent } from './editors/link-smart-table-cell/link-smart-table-cell.component';
import { CustomIconSmartTableCellComponent } from './editors/custom-icon-smart-table-cell/custom-icon-smart-table-cell.component';

import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from './editors/smart-table-datepicker/smart-table-datepicker.component';
import { ButtonComponent } from './editors/button/button.component';
import { IconComponent } from './editors/icon/icon.component';

const COMPONENTS = [
    NgxValidationMessageComponent,
    NgxFilterByNumberComponent,
    CheckboxComponent,
    ToggleComponent,
    ButtonComponent,
    InputComponent,
    IconComponent,
    SelecttableComponent,
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent,
    LinkSmartTableCellComponent,
];

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        NbCheckboxModule,
        NbSelectModule, 
        NbToggleModule,
        NbDatepickerModule,
        NbIconModule,
        NbActionsModule,
        NbTooltipModule

    ],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS, CustomIconSmartTableCellComponent, ButtonComponent, IconComponent],
    entryComponents: [
        NgxFilterByNumberComponent,
        SmartTableDatepickerComponent,
        SmartTableDatepickerRenderComponent
    ],
})
export class ComponentsModule {
}
