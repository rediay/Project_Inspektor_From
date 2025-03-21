import { Component, EventEmitter, OnInit, Output, ɵRender3ComponentRef } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DomSanitizer } from '@angular/platform-browser';
import { ToggleComponent } from '../../../../@components/editors/toggle/toggle.component';
import { CompanytypeListService } from '../../backend/common/services/companytypeList.service';
import { ToasterConfig } from 'angular2-toaster';
import { NbComponentStatus, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { CompanyTypeListDTO, CompanyTypeListsDTO } from '../../models/CompanyTypeListDTO';
@Component({
  selector: 'ngx-companytypelist',
  templateUrl: './companytypelist.component.html',
  styleUrls: ['./companytypelist.component.scss']
})
export class CompanytypelistComponent implements OnInit {

  //#region Variables Toast
  config: ToasterConfig;
  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  title = 'HI there!';
  content = `I'm cool toaster!`;

  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];
  positions: string[] = [
    NbGlobalPhysicalPosition.TOP_RIGHT,
    NbGlobalPhysicalPosition.TOP_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_LEFT,
    NbGlobalLogicalPosition.TOP_END,
    NbGlobalLogicalPosition.TOP_START,
    NbGlobalLogicalPosition.BOTTOM_END,
    NbGlobalLogicalPosition.BOTTOM_START,
  ];

  quotes = [
    { title: null, body: 'We rock at Angular' },
    { title: null, body: 'Titles are not always needed' },
    { title: null, body: 'Toastr rock!' },
  ];
  //#endregion
  public data: CompanyTypeListsDTO = new CompanyTypeListsDTO();  
  public source: LocalDataSource;  
  public change: boolean;  
  public settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },

    columns: {
      search: {
        title: 'Estado',
        type: 'custom',
        width:'5%',
        filter:false,
        renderComponent: ToggleComponent,  onComponentInitFunction: (instance) => {
          instance.save.subscribe(row => {
          row.search= row.search ? false : true
            this.updateStatus(row)
          });
        },      
      },
      listTypeId: {
        title: 'No.',
        type: 'number',
        filter: true,
        width: '3%'

      },
      name: {
        title: 'Nombre Tipo Lista',
        type: 'string',
        filter: true
      },
      listType: {
        title: 'Grupo lista',
        type: 'html',
        filter: true,
        valuePrepareFunction: (cell, row) => {
         return this._sanitizer.bypassSecurityTrustHtml(`<h6 class="text-black p-t-0 qlz-line-height text-center" style="background:${row.listType.listGroup.color}"><strong>${row.listType.listGroup.name} </strong> </h6>`);   
            
        },
        filterFunction: (cell?: any, search?: string) => {
          console.log("cell",cell.listGroup.name)
         return cell.listGroup.name.includes(search);
        }
      },   
      country: {
        title: 'Pais',
        type: 'html',
        filter: true,
        valuePrepareFunction: (cell, row) => {
         return this._sanitizer.bypassSecurityTrustHtml(`${row.listType.country.name}`); 
            
        },        
      },   
    }
  }

  constructor(
    private _companytypeService: CompanytypeListService,
    private _sanitizer: DomSanitizer,
    private toastrService: NbToastrService,

  ) {

  }


  ngOnInit() {
    this.initialize();
  }
  //#region Methods 
  private initialize() {

    this.getCompany();
  }

  //#endregion

  //#region Metodos SmartTableData
  onDeleteConfirm(event): void {
    if (window.confirm('Esta seguro de eliminar el registro')) {
      event.confirm.resolve();
      //this.deleteThirdPartyType(event.data.id.toString());
    } else {
      event.confirm.reject();
    }
    console.log(event.data.id);

  }
  onEdit(event) {
    console.log(event);
  }

  onSaveConfirm(event): void {
    console.log(event);
    var datatemporal = event.source.data
    if (!this.isObjEmpty(datatemporal)) {
      //this.updateThirdPartyType(event.newData);
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    console.log(event);
    var datatemporal = event.source.data
    if (!this.isObjEmpty(datatemporal)) {
      //this.createThirdPartyType(event.newData);
      event.confirm.resolve(event.newData);
    } else {
      //this.showToast("danger", "Error","Debe ingresar todos los valores");
      event.confirm.reject();
    }
  }
 //#endregion


  //#region Metodos Privados 
  //#endregion
  setCheckedStatus(checked) {
    var status =checked.target.checked;
     this._companytypeService.updateRangeStatus(status).subscribe(res => {
      this.showToast("success", 'Tipos de listas por consulta', "Actualizados con Exito");          
      this.getCompany()
         error => {
          this.showToast("danger", null, error)
        }
    });
  }

  //#region Services
  //#region Get
  public getCompany() {
   
      this._companytypeService.getTypeList().subscribe((res: CompanyTypeListsDTO) => {
        this.data = res;
        this.source = new LocalDataSource(this.data as any);        
      })
  }

  //#endregion
  //#region Update


  private updateStatus(CompanyTypeListDTO:CompanyTypeListDTO) {
    
    this._companytypeService.updateStatus(CompanyTypeListDTO).subscribe(res => {
      this.showToast("success", CompanyTypeListDTO.name, "Actualizada con Exito");                
        error => {
          this.showToast("danger", null, error)
        }
    });
  }
  //endregion
  //#endregion

  //#region Validacion

  //Todo: Valida si los registro de la tabla estan vacios
  private isObjEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }
  //Todo : Muestra toast segun mensaje
  private showToast(type: NbComponentStatus, title: string, body: string) {
    const hasIcon = this.hasIcon ? {} : { icon: 'alert-circle-outline' };
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
      ...hasIcon,
    };
    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      title,
      config);
  }
  //#endregion



}