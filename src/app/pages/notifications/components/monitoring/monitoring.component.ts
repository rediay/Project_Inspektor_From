import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalDataSource } from "ng2-smart-table";
import { PaginationFilter } from '../../../../utils/pagination-filter';
import { NotificationmonitoringService } from '../../backend/common/services/notificationmonitoring.service';

@Component({
  selector: 'ngx-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

  constructor(private _notificationmonitoringService: NotificationmonitoringService, private fb: FormBuilder) {
    // const data = this.getData();
    // this.source.load(data);
  }
  formGroup: FormGroup;

  source: LocalDataSource = new LocalDataSource();
  paginationFilter: PaginationFilter = new PaginationFilter();
  get rangeDate() {
    return this.formGroup.get('rangeDate');
  }
  get description() {
    return this.formGroup.get('search');
  }
  settings = {
    /*isHideHeader: false,
    isPagerDisplay: true,*/
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
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
    columns: {
      subject: {
        title: 'Asunto',
        type: 'string',
        filter: false,
      },
      to: {
        title: 'Para',
        type: 'string',
        filter: false,
      },
      status: {
        title: 'Estado del registro',
        type: 'string',
        filter: false,
      },
      justification: {
        title: 'Justificación de cambio',
        type: 'string',
        filter: false,
      },
      listDocument: {
        title: 'Documento en Lista',
        type: 'string',
        filter: false,
      },
      listName: {
        title: 'Nombre en Lista',
        type: 'string',
        filter: false,
      },
      typeList: {
        title: 'Tipo de Lista',
        type: 'string',
        filter: false,
      },
      identificationNumber: {
        title: 'Identificación Consultada',
        type: 'string',
        filter: false,
      },
      queryName: {
        title: 'Nombre Consultado',
        type: 'string',
        filter: false,
      },
      queryDate: {
        title: 'Fecha Envío',
        type: 'string',
        filter: false,
      },
      queryUser: {
        title: 'Nombre Usuario',
        type: 'string',
        filter: false,
      },
      user: {
        title: 'Usuario',
        type: 'string',
        filter: false,
      },
    },
  };


  ngOnInit() {
    this.initialize();
  }

  private initialize() {

    this.initForm();
    this.getAll(false);
  }
  initForm() {
    this.formGroup = this.fb.group({
      search: this.fb.control(''),
      rangeDate: this.fb.control(null),


      //newsTypeId: this.fb.control(''),
    });
  }
  //#region  Metodos Privados
  onSearch() {

    this.getAll(false);

  }
  ToExcel() {

    this.getAll(true);

  }
  //#endregion

  //#region Servicios
  //#region Get
  public getAll(flag: boolean) {
    const filter = this.formGroup.value;
    filter.rangeDate;

    this.paginationFilter.query = filter.search;
    this.paginationFilter.startDate = filter.rangeDate != null ? filter.rangeDate.start.toISOString().split('T')[0] : '';
    this.paginationFilter.endDate = filter.rangeDate != null ? filter.rangeDate.end.toISOString().split('T')[0] : '';
    console.log(this.paginationFilter.endDate);
    if (!flag) {
      this._notificationmonitoringService.getAll(this.paginationFilter).subscribe((response: any) => {
        this.source.load(response.data);
      })
    }
    else {
      

      this._notificationmonitoringService.exportExcel(this.paginationFilter).subscribe(
        (response: HttpResponse<Blob>) => {
          let filename: string = this.getFileName(response)
          let binaryData = [];
          binaryData.push(response.body);
          let downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
          downloadLink.setAttribute('download', filename);
          document.body.appendChild(downloadLink);
          downloadLink.click();
        }
      );

    }
    //#endregion
    //#endregion
  }
  getFileName(response: HttpResponse<Blob>) {
    let filename: string;
    try {
      const contentDisposition: string = response.headers.get('content-disposition');
      const r = /(?:filename=")(.+)(?:;")/
      filename = r.exec(contentDisposition)[1];
    }
    catch (e) {
      filename = `NotMonitoreo_${''}.xlsx`;
    }
    return filename
  }
}
