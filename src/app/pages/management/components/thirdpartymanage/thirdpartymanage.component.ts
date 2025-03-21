import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource, Ng2SmartTableComponent } from 'ng2-smart-table';
import { ToggleComponent } from '../../../../@components/editors/toggle/toggle.component';

import { NbComponentStatus, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';
// import { thirdPartyManageService } from '../../backend/common/services/ThirdPartyManage.service';
import { ThirdPartyTypeListDTO } from '../../models/ThirdPartyTypeDTO';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../../../../@components/editors/smart-table-datepicker/smart-table-datepicker.component';
import { EditCellDefault } from 'ng2-smart-table/lib/components/cell/cell-edit-mode/edit-cell-default';
import { TranslateService } from '@ngx-translate/core';
import {thirdPartyManageService} from "../../backend/common/services/thirdPartyManage.service";

@Component({
  selector: 'ngx-thirdpartymanage',
  templateUrl: './thirdpartymanage.component.html',
  styleUrls: ['./thirdpartymanage.component.scss']
})
export class ThirdpartymanageComponent implements OnInit {  
  @ViewChild('table') table: Ng2SmartTableComponent;
  public selectedRows = [];
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
    NbGlobalPhysicalPosition.BOTTOM_RIGHT,
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
  settings = {

    actions:{
      add:true,
      edit:true,
      delete:false,      
        
    }
    ,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },   
    columns: {
      name: {
        title: 'Nombre Tercero',
        type: 'string',
      },      
      createdAt: {
        title: 'Fecha de registro',
        type: 'string',        
        addable: false,
        editable:false,         
        width: '250px',
        filter: false,
        sortDirection: 'desc',
        
        
      },
      status: {
        title: 'Estado',
        type:'custom',
        renderComponent: ToggleComponent,  onComponentInitFunction: (instance) => {          
          instance.save.subscribe(row => {
            row.status= row.status ? false : true
            this.updateThirdPartyType(row)
          });
        },            
        editor:{
          type: 'list',
          config:{
            list:[
              {title: 'Inactivo', value:false},
              {title: 'Activo', value:true}            
            ]
          },
          width:'5%',
          filter:false
        },
      },      
    },
  };
  source: LocalDataSource = new LocalDataSource();
  public data :ThirdPartyTypeListDTO = new ThirdPartyTypeListDTO();
  public lang:string;
    
  constructor(
    private toastrService: NbToastrService,
    private _thirdPartyManageService:thirdPartyManageService,
    private translate: TranslateService
    ) 
  { }
  ngOnInit() {
    this.initialize();
    this.traductorlocal();
  }

  private initialize() {

    this.getByCompanyID();
    
  }

  //#region Metodos SmartTableData
  onDeleteConfirm(event): void {
    if (window.confirm('Esta seguro de eliminar el registro')) {
      event.confirm.resolve();
      this.deleteThirdPartyType(event.data.id.toString());
    } else {
      event.confirm.reject();
    }
    
    
  }
  onEdit(event){

  } 

  onSaveConfirm(event): void  {
    var datatemporal = event.newData
    if(!this.isObjEmpty(datatemporal.name)){
      this.updateThirdPartyType(event.newData);
      event.confirm.resolve(event.newData);
    }else{
      this.showToast("danger", "Error","El campo Nombre Tercero es obligatorio");
      event.confirm.reject();
    }
    this.getByCompanyID();
  }

  onCreateConfirm(event): void{
    console.log(event);
    var datatemporal = event.newData
    if(!this.isObjEmpty(datatemporal.name)){
      this.createThirdPartyType(event.newData);
      event.confirm.resolve(event.newData);      
    }else{
      this.showToast("danger", "Error","El campo Nombre Tercero es obligatorio");
      event.confirm.reject();
    }
  }

  onRowSelect(event): void   {
    
  }
  //#endregion

  //#region Metodos Privados
  public ChangeStatus(event: any): void {
    const id = event

    
  }
  public traductorlocal(){
    this.lang = localStorage.getItem ('lang');
    let currentlang = this.translate.currentLang
    currentlang=this.lang
    this.translate.use(currentlang);
  }
  //#endregion

  //#region Validacion

 //Todo: Valida si los registro de la tabla estan vacios
  private  isObjEmpty(obj) {
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

//#region Servicios
  //#region Get
  public getByCompanyID(CompanyId?: string){
    this._thirdPartyManageService.getByCompanyID().subscribe((response:ThirdPartyTypeListDTO) =>{
    this.data = response;
    this.source = new LocalDataSource(this.data as any);
    // console.log(this.settings);
    
    })
  }
  //endregion
  //#region Post
  public createThirdPartyType(thirdPartyTypeListDTO:ThirdPartyTypeListDTO){
    this._thirdPartyManageService.createThirdPartyType(thirdPartyTypeListDTO).subscribe(res => {
      var tp= thirdPartyTypeListDTO;
      this.showToast("success",tp["name"],"Guardado Exitoso")
      this.getByCompanyID()
    });
  }
  //endregion
  //#region Update
  public updateThirdPartyType(thirdPartyTypeListDTO:ThirdPartyTypeListDTO){
    this._thirdPartyManageService.updateThirdPartyType(thirdPartyTypeListDTO).subscribe(res => {
      var tp= thirdPartyTypeListDTO
      this.showToast("success", tp["name"],"Actualización Exitosa")
      console.log("Enviado");
    });
  }
  //endregion
  //#region Delete
  public deleteThirdPartyType(id:string){
    this._thirdPartyManageService.deleteThirdPartyType(id).subscribe(res => {
      this.showToast("success",'Tipo tercero',"Eliminado Exitoso")      
    });
  }
  //endregion
//#endregion
  





}
