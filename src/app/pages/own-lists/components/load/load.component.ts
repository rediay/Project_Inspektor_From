import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbComponentStatus, NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';
import { NbFileUploaderOptions } from '../../../../@components/editors/file-uploader/file-uploader.model';
import {OwnListsTypesDTO, OwnListTypesDTO} from '../../models/OwnListTypesDTO';
import { TypeownlistsService } from '../../services/typeownlists.service';

@Component({
    selector: 'ngx-load',
    templateUrl: './load.component.html',
    styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

@Input() id:string;
  public namefile : string ='';
  //public typeslist :OwnListsTypesDTO = new OwnListsTypesDTO();
  public typeslist :OwnListsTypesDTO = new OwnListsTypesDTO();
  ownListTypes: OwnListTypesDTO[] = [];
  ownListTypeId: number = null;
  public selectedItemNgModel;
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
  selectedItemFormControl = new FormControl();
  //allowedMimeType: string[] = ['image/png', 'image/jpg'];  // Change to what file types you need
  allowedMimeType: string[] = ['xls', 'xlsx'];  // Change to what file types you need
  fileTypesAllowed: string[];
  maxFileSize = 25;  // Change to max file size in mb
  options: NbFileUploaderOptions;
  private templateFile: File = null;
  importButtonDisabled = true;
  deleteButtonDisabled = true;
    @Output()
    onSuccess = new EventEmitter();

    constructor(
        private _typeownlistsService: TypeownlistsService,
        private toastrService: NbToastrService,
    ) {
    }

    ngOnInit() {
        this.fileTypesAllowed = this.allowedMimeType.map((fileType: string) =>
            fileType.substring(fileType.lastIndexOf('/') + 1, fileType.length)
        );
        this.options = {
            url: 'https://localhost:5001',
            multiple: false,
            directory: true,
            showUploadQueue: true,
            allowedFileTypes: this.allowedMimeType,
        };
        this.initialize();
    }

  private initialize() {
    this.getOwnListsTypes();
    
  }

  //#region Metodos Privados
  public selectiontype(selected: any): void {
    console.log(selected);
    if(selected=="Betados"){
      window.open('./../../assets/PlantillaListaspropias.xlsx', 'Excel', 'width=20,height=10,toolbar=0,menubar=0,scrollbars=no');
    }
    else{
      this.showToast("danger",null,"No existe una plantilla para la lista seleccionada")
    }

  }


    private showToast(type: NbComponentStatus, title: string, body: string) {
        const hasIcon = this.hasIcon ? {} : {icon: 'alert-circle-outline'};
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
      public getOwnListsTypes2(CompanyId?: string){
        this._typeownlistsService.getOwnListsTypes("1").subscribe((response:OwnListsTypesDTO) =>{
        this.typeslist = response;
        console.log(this.types);
        
        })
      }
      //endregion
    //endregion

    getOwnListsTypes(CompanyId?: string) {
        this._typeownlistsService.getOwnListsTypes2("1").subscribe((response: OwnListTypesDTO[]) => {
            this.ownListTypes = response;
        })
    }

    onOwnListsTypeChange(selected: any) {
        this.ownListTypeId = selected;
        this.updateImportButtonStatus();
        this.updateDeleteButtonStatus();
    }

    onSave() {
        if (this.ownListTypeId != null && this.templateFile != null) {
            this.importButtonDisabled = true;
            const formData = new FormData()
            formData.append('ownListTypeId', this.ownListTypeId.toString())
            formData.append('templateFile', this.templateFile)

            this._typeownlistsService.importOwnLists(formData).subscribe(response => {
                this.showToast("success", null, "Guardado exitosamente");
                this.importButtonDisabled = false;
                this.onSuccess.emit();
            }, error => {
                this.showToast("danger", null, error.message);
                this.importButtonDisabled = false;
            });
        }
    }

    onDeleteImportedOwnListsByType() {
        if (this.ownListTypeId != null) {
            this.importButtonDisabled = true;
            this._typeownlistsService.deleteImportedOwnListsByType(this.ownListTypeId).subscribe(response => {
                this.showToast("success", null, "Borrado exitosamente");
                this.importButtonDisabled = false;
                this.onSuccess.emit();
            }, error => {
                this.showToast("danger", null, error.message);
                this.importButtonDisabled = false;
            });
        }
    }

    onFileSelected(files) {
        this.templateFile = files;
        this.updateImportButtonStatus();
    }

    updateImportButtonStatus() {
        this.importButtonDisabled = !(this.templateFile != null && this.ownListTypeId != null);
    }

    updateDeleteButtonStatus() {
        this.deleteButtonDisabled = !(this.ownListTypeId != null);
    }
}

