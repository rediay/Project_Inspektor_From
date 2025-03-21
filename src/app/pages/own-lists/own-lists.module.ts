import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnListsComponent } from './own-lists.component';
import { TypeComponent } from './components/type/type.component';
import { LoadComponent } from './components/load/load.component';
import { ManageComponent } from './components/manage/manage.component';
import { OwnListsRoutingModule, routedComponents } from './own-lists-routing.module';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule, NbToggleModule, NbTreeGridModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbFileUploaderModule } from '../../@components/editors/file-uploader/file-uploader.module';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  OwnListsComponent,
  TypeComponent,
  LoadComponent,
  ManageComponent];
@NgModule({
  imports: [
    OwnListsRoutingModule,
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbDatepickerModule,
    ThemeModule,
    ReactiveFormsModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbSelectModule,    
    NbButtonModule,
    NbToggleModule,
    NbFileUploaderModule
  ],
  declarations: [...routedComponents,components]
})
export class OwnListsModule { }
