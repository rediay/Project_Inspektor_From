import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService} from '@nebular/theme';
import {LocalDataSource} from 'ng2-smart-table';
import {NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import {NbFileUploaderOptions} from '../../../../@components/editors/file-uploader/file-uploader.model';
import {BulkQueryResponseDTO} from '../../models/bulkQueryResponseDTO';
import {BulkQueryService} from '../../services/bulkQuery.service';

@Component({
    selector: 'ngx-bulk',
    templateUrl: './bulk.component.html',
    styleUrls: ['./bulk.component.scss']
})
export class BulkComponent implements OnInit {

    @ViewChild('divResult') divResult: ElementRef;
    public fileSrc: any;
    public hasProcuraduria = false;
    public loadingQuery = false;
    public hasJemps = false;
    public hasFile = false;
    public hasRamaJudicial = false;
    public hasP4 = false;
    public queryFinished = false;
    public NWords = 0;
    public nQuery = 0;
    public queryCompanyId = 0;
    public data: BulkQueryResponseDTO = new BulkQueryResponseDTO();

    types: NbComponentStatus[] = [
        'primary',
        'success',
        'info',
        'warning',
        'danger',
    ];
    index = 1;

    constructor(private _BulkQueryService: BulkQueryService, private toastrService: NbToastrService,) {
    }

    settings = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        actions: {
            add: false,
            edit: false,
            delete: false,
        },

        columns: {
            listGroupId: {
                title: 'Grupo',
                type: 'number',

            },
            priorityResult: {
                title: 'Prioridad',
                type: 'string',
            },
            nameQuery: {
                title: 'Nombre Consultado',
                type: 'string',
            },
            identificationQuery: {
                title: 'Identificacion Consultada',
                type: 'string',
            },
            name: {
                title: 'Nombre Coincidencia',
                type: 'string',
            },
            document: {
                title: 'Identificación Coincidencia',
                type: 'string',
            },
            nameListType: {
                title: 'Lista',
                type: 'string',
            },
            crime: {
                title: 'Delito, cargo o resultado de consulta',
                type: 'string',
            },
            zone: {
                title: 'Delito, cargo o resultado de consulta',
                type: 'string',
            },

        },
    };

    source: LocalDataSource = new LocalDataSource();


    ngOnInit() {

    };

    //#region  Metodos Firedrop
    public files: NgxFileDropEntry[] = [];

    public dropped(files: NgxFileDropEntry[]) {
        // this.files = files;
        try {
            this.files = files;
            this.loadingQuery = true;

            // Enforce only 1 file at a time!
            if (files.length > 1) {
                throw new Error('¡Solo se puede procesar un archivo a la vez!');
                this.hasFile = false
            }
            for (const droppedFile of files) {
                // Is it a file?
                if (droppedFile.fileEntry.isFile) {
                    const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                    fileEntry.file(async (file: File) => {
                        // Here you can access the real file
                        console.log(droppedFile.relativePath, file);

                        try {
                            // File Check
                            // Here you can have some custom function to check whatever parameters you want, return true if valid...
                            if (!this.isValidFile(file)) {
                                this.loadingQuery = false
                                this.hasFile = false
                                throw new Error('Formato de archivo invalido, solo se permite .xlsx');
                            }
                            this.loadingQuery = false
                            this.hasFile = true

                        } catch (err) {
                            this.files = null;
                            this.hasFile = false
                            this.loadingQuery = false
                            this.showToast("Error", err.message, 4, false)
                        }
                    })
                }
            }
        } catch (err) {
            this.files = null; // clear files
            this.loadingQuery = false;
            this.hasFile = false
            this.showToast("Error", err.message, 4, false)
        }

    }


    public isValidFile(file: File) {
        // enforce a "." being contained in the file name
        if (!file?.name.includes('.')) {
            return false;
        }

        // There should be a total of 2 strings, with a period in between in my case
        const names = file?.name.split('.');
        if (names.length < 2) {
            return false;
        }

        const ext = names[names.length - 1];
        if (ext !== 'xlsx') {
            return false;
        }

        return true;
    }

    public fileOver(event) {
        console.log(event);
    }

    public fileLeave(event) {
        console.log(event);
    }


    public filesSA: NgxFileDropEntry[] = [];

    public droppedSA(filesSA: NgxFileDropEntry[]) {
        this.filesSA = filesSA;

    }

    public fileOverSA(event) {
        console.log(event);
    }

    public fileLeaveSA(event) {
        console.log(event);
    }


    //#endregion
    public BulkQuery() {

        for (const droppedFile of this.files)
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                this.loadingQuery = true
                this.queryFinished = false
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {
                    console.log(droppedFile.relativePath, file);
                    this.DoBulkQuery(file, droppedFile.relativePath);
                });
            } else {
                this.loadingQuery = false
                // It was a directory (empty directories are added, otherwise only files)
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                console.log(droppedFile.relativePath, fileEntry);
                this.showToast("Error", "Error al procesar solicitud, vuelva a intentar", 4, false)
            }
    }

    public BulkQuerySA() {
        for (const droppedFile of this.filesSA)
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {
                    console.log(droppedFile.relativePath, file);
                    this.DoBulkQuerySA(file, droppedFile.relativePath);
                });
            } else {
                // It was a directory (empty directories are added, otherwise only files)
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
    }

    exportExcel() {
        if (this.nQuery != 0) {
            this._BulkQueryService.exportExcel(this.nQuery).subscribe(
                (response: HttpResponse<Blob>) => {
                    let filename: string = this.getFileName(response, '.xlsx')
                    let binaryData = [];
                    binaryData.push(response.body);
                    let downloadLink = document.createElement('a');
                    downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: 'blob'}));
                    downloadLink.setAttribute('download', filename);
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                }
            );
        }
    }

    exportPdf() {
        if (this.nQuery != 0) {
            this._BulkQueryService.exportPDF(this.nQuery).subscribe(
                (response: HttpResponse<Blob>) => {
                    let filename: string = this.getFileName(response, '.pdf')
                    let binaryData = [];
                    binaryData.push(response.body);
                    let downloadLink = document.createElement('a');
                    downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: 'blob'}));
                    downloadLink.setAttribute('download', filename);
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                }
            );
        }
    }

  getFileName(response: HttpResponse<Blob>,extension:string) {
    let filename: string;
    try {
      const contentDisposition: string = response.headers.get('content-disposition');
      const r = /(?:filename=")(.+)(?:;")/
      filename = r.exec(contentDisposition)[1];
    }
    catch (e) {
      filename = `Masiva${this.queryCompanyId}${extension}`;
    }
    return filename
  }

    //#region Servicios
    setHasRamaProcuraduria(checked) {
        console.log('checked', checked.target.checked);
        this.hasProcuraduria = checked.target.checked; // your variable
    }

    setHasRamaJudicialJemps(checked) {
        console.log('checked', checked.target.checked);
        this.hasJemps = checked.target.checked; // your variable
    }

    setHasRamaJudicial(checked) {
        console.log('checked', checked.target.checked);
        this.hasRamaJudicial = checked.target.checked; // your variable
    }

    setPalabrasP4(value) {
        this.NWords = value; // your variable
    }

    setPrioridad4Status(checked) {
        console.log('checked', checked.target.checked);
        this.hasP4 = checked.target.checked;
        this.NWords = 0;// your variable
    }

    //#region Get
    public aBulkQuery() {
        // this._BulkQueryService.getCompanyLogo().subscribe((response:CompanyDTO) =>{
        //   response.image || response.image != null ? this.imageSrc = response.image : this.imageSrc = "https://icon-library.com/images/not-found-icon/not-found-icon-6.jpg"
        //   this.companyDTO = response
        // })
    }

    //endregion
    //#region Post
    public DoBulkQuery(file: File, relativePath: string) {
        const formData = new FormData()
        formData.append('file', file, relativePath)
        formData.append('NWords', String(this.NWords))
        console.log(formData);
        this._BulkQueryService.BulkQuery(formData).subscribe((response: BulkQueryResponseDTO) => {
                this.data = response;
                this.nQuery = this.data.query.id;
                this.queryCompanyId = this.data.query.idQueryCompany;
                // console.log(this.data.lists);
                this.source = new LocalDataSource(this.data.lists as any);
                // console.log(this.settings);
                this.loadingQuery = false
                this.showToast("Exitoso", "Consulta finalizada", 1, false)
                this.queryFinished = true
                setTimeout(() => {
                    this.divResult.nativeElement.focus();
                }, 15000)
            },
            (error: HttpErrorResponse) => {
                this.loadingQuery = false;
                this.queryFinished = false;
                if (error.status === 400) {
                    console.log(error.error); // Muestra el mensaje de error en la consola                    
                    this.showToast("Error", error.error, 4, false)
                } else{   
                    this.showToast("Error", error.error.error, 4, false)
                    console.log("e", error)
                }
            });
    }

    public DoBulkQuerySA(file: File, relativePath: string) {

        const formData = new FormData()
        formData.append('file', file, relativePath)
        formData.append('hasProcuraduria', String(this.hasProcuraduria))
        formData.append('hasRamaJudicialJEMPSv', String(this.hasJemps))
        formData.append('hasRamaJudicial', String(this.hasRamaJudicial))
        console.log(formData);
        this._BulkQueryService.BulkQuerySA(formData).subscribe((response: BulkQueryResponseDTO) => {
            this.data = response;
            this.nQuery = this.data.query.id;
            this.source = new LocalDataSource(this.data.lists as any);
            console.log(this.settings);
        })
    }

    showToast(tittle, mesage: string, type, hasIcon) {
        const icon = hasIcon ? {} : {icon: ''};
        const position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
        const config = {
            status: this.types[type],
            destroyByClick: true,
            duration: 3000,
            position: position,
            preventDuplicates: false,
            ...icon,
        };
        this.index += 1;
        this.toastrService.show(
            mesage,
            tittle,
            config);
    }

    //#endregion

}

