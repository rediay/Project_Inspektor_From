import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';
import { LocalDataSource } from 'ng2-smart-table';
import { OwnListsDTO } from '../../models/OwnListDTO';
import { OwnListsTypesDTO } from '../../models/OwnListTypesDTO';
import { ManageService } from '../../services/manage.service';
import { TypeownlistsService } from '../../services/typeownlists.service';

@Component({
  selector: 'ngx-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})



export class ManageComponent implements OnInit {
  [x: string]: any;
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
  public flags = false;
  //#region Variables tabla
  public source: LocalDataSource = new LocalDataSource();
  public data: OwnListsDTO = new OwnListsDTO();
  public typeslist: OwnListsTypesDTO = new OwnListsTypesDTO();

  public listCom: any = this.getOwnListTypes();
  public settings = {
    actions: {
      add: true,
      edit: true,
      delete: true,

    },
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

      ownListTypeId: {
        title: 'Tipo de Lista',
        type: 'html',
        // valuePrepareFunction: (cell, row) => { return row.ownListTypeName}
        valuePrepareFunction: (cell, row, ownListTypeId) => {
          var t;
          t = this.typeslist;
          var a = t.find(element => element.id == cell)
          if (a)
            return a.name
        },
        editor: {
          type: 'list',
          config: {
            list: this.listCom

          }
        }
      },
      documentType: {
        title: 'Tipo de documento',
        type: 'string',
      },
      identification: {
        title: 'Documento de Identidad',
        type: 'string',
        filter: true
      },
      name: {
        title: 'Nombre Completo',
        type: 'string',

      },
      source: {
        title: 'Fuente de la Consulta',
        type: 'string',
        filter: false,

      },
      typeIdentification: {
        title: 'Tipo Persona',
        type: 'string',
        filter: false,
        width: '3%'
      },
      alias: {
        title: 'Alias',
        type: 'string',
        filter: false,

      },
      crime: {
        title: 'Cargo o Delito',
        type: 'string',
        filter: false,

      },
      zone: {
        title: 'Zona',
        type: 'string',
        filter: false,

      },
      link: {
        title: 'Link',
        type: 'string',
        filter: false,

      },
      moreInformation: {
        title: 'Más información',
        type: 'string',
        filter: false,

      },
      

     

    }
  }
  //#endregion

  constructor(
    private toastrService: NbToastrService,
    private _manageService: ManageService,
    private _typeownlistsService: TypeownlistsService
  ) { }


  ngOnInit() {
    this.initialize();
  }

  private initialize() {
    this.getOwnLists();

  }
  //#region Metodos SmartTableData
  onSaveConfirm(event): void {
    console.log(event);    
    var datatemporal = event.source.data    
    if (!this.isObjEmpty(datatemporal)) {
      this.updateOwnLists(event.newData);
      event.confirm.resolve(event.newData);
      this.getOwnListTypes();
    } else {      
      event.confirm.reject();      
    }
  }

  onCreateConfirm(event): void {
    console.log(event);

    var datatemporal = event.newData
    if (!this.isObjEmpty(datatemporal)) {
      this.createOwnList(event.newData);
      event.confirm.resolve(event.newData);
      this.getOwnListTypes();      
      setTimeout(()=> { window.location.reload(); }, 3000 );
    } else {
      this.showToast("danger", "Error", "Debe ingresar todos los valores");
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
  onEdit(event) {
    this.getOwnListTypes();

    console.log(event);
  }

  onRowSelect(event): void {
    console.log(event);

  }
  //#endregion
  public onUserRowSelect(event) {
    var selectedRows = event.selected;
  }

  //#region Servicios
  //#region Get
  public getOwnLists(CompanyId?: string) {
    this._manageService.getOwnLists("1").subscribe((response: OwnListsDTO) => {
      this.data = response;
      this.source = new LocalDataSource(this.data as any);
    })
  }
  public getOwnListTypes() {
    var settingList: any = [];
    // Call API category
    this._typeownlistsService.getOwnListsTypes("1").subscribe((response: any) => {
      this.typeslist = response;
      response.forEach(obj => {
        settingList.push({ value: obj.id, title: obj.name })
      });
      let newSettings = this.settings;
      newSettings.columns.ownListTypeId.editor.config.list = settingList;
      this.settings = Object.assign({}, newSettings);
    });
  }

  //endregion
  //#region Post
  public createOwnList(ownListsDTO: OwnListsDTO) {

    this._manageService.createOwnList(ownListsDTO).subscribe(res => {
      this.showToast("success", null, "Guardado Exitoso")
    });
  }
  //endregion
  //#region Update
  public updateOwnLists(ownListsDTO: OwnListsDTO) {

    this._manageService.updateOwnLists(ownListsDTO).subscribe(res => {
      this.showToast("success", null, "Actualizacion Exitosa")


      this.source.refresh();
      console.log("Enviado");
    });
  }
  //endregion
  //#region Delete
  public deleteOwnList(id: string) {
    this._manageService.deleteOwnList(id).subscribe(res => {
      this.showToast("success", null, "Eliminado Exitoso")
      console.log("Enviado");
    });
  }

  public getOwnListsTypes(CompanyId?: string) {
    this._typeownlistsService.getOwnListsTypes("1").subscribe((response: OwnListsTypesDTO) => {
      this.typeslist = response;
    })
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
      `Listas Propias`,
      config);
  }
  //#endregion
  setCheckedStatus(checked) {    
    console.log('checked', checked.target.checked);
    this.flags = checked.target.checked; // your variable
  }


}