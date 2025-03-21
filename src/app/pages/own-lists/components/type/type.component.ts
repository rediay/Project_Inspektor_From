import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';
import { LocalDataSource } from 'ng2-smart-table';
import { ToggleComponent } from '../../../../@components/editors/toggle/toggle.component';
import { OwnListsDTO } from '../../models/OwnListDTO';
import { OwnListsTypesDTO } from '../../models/OwnListTypesDTO';
import { TypeownlistsService } from '../../services/typeownlists.service';

@Component({
  selector: 'ngx-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

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
    //#region Variables tabla
    source: LocalDataSource = new LocalDataSource();
    public data :OwnListsTypesDTO = new OwnListsTypesDTO();
    settings = {

      actions:{
        add:true,
        edit:true,
        delete:true,      
          
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
          title: 'Nombre Tipo Lista Propia',
          type: 'string',       
          filter:false, 
        }
       
        
                
      },
    };

    //#endregion
      
    constructor(
                private toastrService: NbToastrService,
                private _typeownlistsService:TypeownlistsService
      ) 
    { }

  
    ngOnInit() {
      this.initialize();
    }
  
    private initialize() {
  
      this.getOwnListsTypes();
    }

  public onUserRowSelect(event) {
    var selectedRows = event.selected;
  }

//#region Metodos SmartTableData
onSaveConfirm($event): void  {
  console.log($event);
  var datatemporal = $event.source.data;
  if(!this.isObjEmpty(datatemporal)){
    this.updateOwnLists($event.newData);
    $event.confirm.resolve($event.newData);
  }else{
    $event.confirm.reject();    
  }
}

onCreateConfirm(event): void{  
  console.log(event);
  var datatemporal = event.newData;
  if(!this.isObjEmpty(datatemporal)){
    this.createOwnList(event.newData);
    event.confirm.resolve(event.newData);
    setTimeout(()=> { window.location.reload(); }, 3000 );
  }else{
    //this.showToast("danger", "Error","Debe ingresar todos los valores");
    event.confirm.reject();
  }
}

onDeleteConfirm(event): void {
  if (window.confirm('Esta seguro de eliminar el registro')) {
    event.confirm.resolve();
    this.deleteOwnList(event.data.id.toString());
  } else {
    event.confirm.reject();
  }
  console.log(event.data.id);
  
}
onEdit(event){
  console.log(event);
} 

onRowSelect(event): void   {
  console.log(event);

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
    const hasIcon = this.hasIcon ? {  } : { icon: 'alert-circle-outline' };
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
      `Toast ${this.index}${titleContent}`,
      config);
  }
//#endregion

    //#region Servicios
      //#region Get
      public getOwnListsTypes(CompanyId?: string){
        this._typeownlistsService.getOwnListsTypes("1").subscribe((response:OwnListsTypesDTO) =>{
        this.data = response;
        this.source = new LocalDataSource(this.data as any);
        })
      }
      //endregion
      //#region Post
      public createOwnList(ownListsDTO:OwnListsTypesDTO){        
        this._typeownlistsService.createOwnList(ownListsDTO).subscribe(res => {
          this.showToast("success",null,"Guardado Exitoso")
        });
      }
      //endregion
      //#region Update
      public updateOwnLists(ownListsDTO:OwnListsTypesDTO){
        this._typeownlistsService.updateOwnLists(ownListsDTO).subscribe(res => {
          this.showToast("success",null,"Actualizacion Exitosa")
          console.log("Enviado");
        });
      }
      //endregion
      //#region Delete
      public deleteOwnList(id:string){
        this._typeownlistsService.deleteOwnList(id).subscribe(res => {
          this.showToast("success",null,"Eliminado Exitoso")
          console.log("Enviado");
        });
      }
      //endregion
    //#endregion
  

}