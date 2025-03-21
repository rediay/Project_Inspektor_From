import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { BulkQueryService } from '../../services/bulkQuery.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { BulkQueryResponseDTO } from '../../models/bulkQueryResponseDTO';
import { ButtonComponent } from '../../../../@components/editors/button/button.component';
import { ToasterConfig } from 'angular2-toaster';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BulkQueryAdditionalService } from '../../services/bulkQueryAdditionalService.service';

@Component({
  selector: 'ngx-bulk-additionalservices',
  templateUrl: './bulk-additionalservices.component.html',
  styleUrls: ['./bulk-additionalservices.component.scss']
})
export class BulkAdditionalservicesComponent implements OnInit {
  @ViewChild('divResult') divResult: ElementRef;
  public fileSrc: any;
  public hasProcuraduria = false;
  public loadingQuery = false;
  public hasJemps = false;
  public hasFile = false;
  public hasRamaJudicial = false;
  public queryFinished = false;
  nQuery = 0;
  public data: BulkQueryResponseDTO = new BulkQueryResponseDTO();
  public dataBulkQueryServicesAdditional: any;
  bulkQueryServicesAdditionalList: LocalDataSource = new LocalDataSource();


  types: NbComponentStatus[] = [
      'primary',
      'success',
      'info',
      'warning',
      'danger',
  ];

  //#region Variables Toast
  config: ToasterConfig;
  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  public BulkQueryServicesAdditional = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },

    columns: {
      id: {
        title: 'Id',
        type: 'string',
        filter: true
      },
      attorneyService: {
        title: 'Procuraduria',
        type: 'html',
        filter:false,
        valuePrepareFunction: (cell, row) => row.attorneyService ? 'Sí' : 'No'   
      },
      judicialBranchService: {
        title: 'Rama Judicial',
        type: 'html',
        filter: false,
        valuePrepareFunction: (cell, row) => row.judicialBranchService ? 'Sí' : 'No' 

      },
      jempsJudicialBranchService: {
        title: 'Rama Judicial JEMPS',
        type: 'string',
        filter: false,
        valuePrepareFunction: (cell, row) => row.jempsJudicialBranchService ? 'Sí' : 'No' 
      },
      createdAt: {
        title: 'Fecha de Consulta',
        type: 'string',        
        addable: false,
        editable:false,         
        width: '250px',
        filter: false,
        sortDirection: 'desc',    
      },
      process: {
        title: 'Proceso Consulta',
        type: 'string',
        filter: false
      },   
      consultingStatus: {
        title: 'Estado Consulta',
        type: 'html',
        filter: false,
        valuePrepareFunction: (cell, row) => row.consultingStatus ? 'Finalizado' : 'En proceso'        
      },   
      // Columna para el botón "Excel"
      excelButton: {
        title: 'Excel',
        type: 'custom',
        filter: false,
        renderComponent: ButtonComponent,
        onComponentInitFunction: (instance) => {
          instance.action.subscribe((row) => {
            this.exportToExcel(row);
          });
        },
      },
      // Columna para el botón "PDF"
      pdfButton: {
        title: 'PDF',
        type: 'custom',
        filter: false,
        renderComponent: ButtonComponent,
        onComponentInitFunction: (instance) => {
          instance.action.subscribe((row) => {
            this.exportToPDF(row);
          });
        },
      }
    }
  }

  constructor(private _BulkQueryAdditionalService: BulkQueryAdditionalService, private toastrService: NbToastrService) { }

  source: LocalDataSource = new LocalDataSource();
  
  ngOnInit() {
    this.initialize();
  }
  //#region Methods 
  private initialize() {
    this.BulkQueryServicesAdditionalTable();
  }

  public filesSA: NgxFileDropEntry[] = [];

  public droppedSA(filesSA: NgxFileDropEntry[]) {
    this.loadingQuery = true;
    this.filesSA = filesSA;

}

  public fileOverSA(event) {
      console.log(event);
  }

  public fileLeaveSA(event) {
      console.log(event);
  }

  //#region Servicios
  setHasRamaProcuraduria(checked) {
    console.log('checked', checked.target.checked);
    this.hasProcuraduria = checked.target.checked; 
  }

  setHasRamaJudicialJemps(checked) {
    console.log('checked', checked.target.checked);
    this.hasJemps = checked.target.checked; 
  }

  setHasRamaJudicial(checked) {
    console.log('checked', checked.target.checked);
    this.hasRamaJudicial = checked.target.checked;
  }

  public BulkQuerySA() {
    debugger;
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

    this.initialize();
  }

  public DoBulkQuerySA(file: File, relativePath: string) {
    const formData = new FormData()
    formData.append('file', file, relativePath)
    formData.append('hasProcuraduria', String(this.hasProcuraduria))
    formData.append('hasRamaJudicialJEMPSv', String(this.hasJemps))
    formData.append('hasRamaJudicial', String(this.hasRamaJudicial))
    console.log(formData);
    this._BulkQueryAdditionalService.BulkQuerySA(formData).subscribe((response) => {
      this.loadingQuery = false;
        this.data = response;
        // this.nQuery = this.data.query.id;
        // this.source = new LocalDataSource(this.data.lists as any);
        // console.log(this.settings);
    },
    (error: HttpErrorResponse) => {
      this.loadingQuery = false;
      this.queryFinished = false;
      if (error.status === 400) {
          console.log(error.error); // Muestra el mensaje de error en la consola 
          this.loadingQuery = false;                   
          this.showToast("Error", error.error, 4, false)
      } else{   
        this.showToast("Error", "No se pudo realizar consulta, por favor inténtelo más tarde", 4, false);
          console.log("e", error)
      }
  })
    this.showToast("success", 'Consulta en proceso',1, false);
  }

public BulkQueryServicesAdditionalTable (){
  this._BulkQueryAdditionalService.getBulkQueryAddiotionalSA().subscribe(
    (datos) => {
    console.log(datos);
    this.dataBulkQueryServicesAdditional = datos.sort((a, b) => b.id - a.id);
    this.bulkQueryServicesAdditionalList = new LocalDataSource(this.dataBulkQueryServicesAdditional as any);
    },
    (error) => {
      console.error('Error al obtener los datos:', error);
    });
  }

  exportToExcel(row: any){
    this.nQuery = row.id;
    if (this.nQuery != 0) {
      this._BulkQueryAdditionalService.exportSAExcel(this.nQuery).subscribe(
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

  exportToPDF(row: any) {
    console.log(row);
    this.nQuery = row.id;
    this._BulkQueryAdditionalService.exportSAPDF(this.nQuery).subscribe(
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

  getFileName(response: HttpResponse<Blob>,extension:string) {
    let filename: string;
    try {
      const contentDisposition: string = response.headers.get('content-disposition');
      const r = /(?:filename=")(.+)(?:;")/
      filename = r.exec(contentDisposition)[1];
    }
    catch (e) {
      filename = `Masiva_servicios_adicionales_${this.nQuery}${extension}`;
    }
    return filename
  }

   //Todo : Muestra toast segun mensaje
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

}
