import {Component, OnInit} from '@angular/core';
import {
    NbComponentStatus,
    NbGlobalLogicalPosition,
    NbGlobalPhysicalPosition,
    NbGlobalPosition,
    NbToastrService
} from '@nebular/theme';
import {ToasterConfig} from 'angular2-toaster';
import {NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import {CompanyService} from '../../backend/common/services/company.service';
import {CompanyDTO} from '../../models/companyDTO';

@Component({
    selector: 'ngx-companylogo',
    templateUrl: './companylogo.component.html',
    styleUrls: ['./companylogo.component.scss']
})
export class CompanylogoComponent implements OnInit {
    public isvisible: boolean = true;
    public files: NgxFileDropEntry[] = [];
    public imageSrc: any;
    public idempresa: string = "";
    public companyDTO: CompanyDTO = new CompanyDTO();
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
        {title: null, body: 'We rock at Angular'},
        {title: null, body: 'Titles are not always needed'},
        {title: null, body: 'Toastr rock!'},
    ];

    //#endregion

    constructor(
        private _companyService: CompanyService,
        private toastrService: NbToastrService,
    ) {
    }


    ngOnInit() {
        this.initialize();
    }

    private initialize() {

        this.getCompanyLogo();
    }

    //#region Metodos privados
    //Todo : Muestra toast segun mensaje
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
            ``,
            config);
    }

    public DeleteFile() {
        this.companyDTO.image = null;
        this.updateCompany(this.companyDTO);
        this.ngOnInit();
    }

    public UploadFile() {
        if (this.imageSrc === "https://icon-library.com/images/not-found-icon/not-found-icon-6.jpg") {
            this.companyDTO.image = null;
            this.updateCompany(this.companyDTO);
        } else {
            this.companyDTO.image = this.imageSrc;
            this.updateCompany(this.companyDTO);
        }

    }

    //#endregion

    //#region  Metodo Firedrop
    public dropped(files: NgxFileDropEntry[]) {
        for (const droppedFile of files) {

            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                const reader = new FileReader();
                fileEntry.file((file: File) => {

                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        this.imageSrc = reader.result;
                        this.companyDTO.image = this.imageSrc;
                    };


                });
            } else {
                // It was a directory (empty directories are added, otherwise only files)
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        }
    }


    public fileOver(event) {
        console.log(event);
    }

    public fileLeave(event) {
        console.log(event);
    }

    //#endregion

    //#region Servicios
    //#region Get
    public getCompanyLogo() {
        this._companyService.getCompanyLogo().subscribe((response: CompanyDTO) => {
            response.image || response.image != null ? this.imageSrc = response.image : this.imageSrc = "https://icon-library.com/images/not-found-icon/not-found-icon-6.jpg"
            this.companyDTO = response
        })
    }

    //endregion
    //#region Post
    public updateCompany(companyDTO: CompanyDTO) {
        this._companyService.updateCompany(companyDTO).subscribe(res => {
            this.getCompanyLogo();
            if (companyDTO.image != null) {
                this.showToast("success", null, "Logo guardado con exito")
            } else {
                this.showToast("success", null, "El logo se ha eliminado")
            }
        });
    }

    //#endregion


}
