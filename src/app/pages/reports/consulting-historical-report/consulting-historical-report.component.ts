import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalDataSource} from "ng2-smart-table";
import {Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";
import {CustomServerDataSource} from "../../../utils/custom-server.data-source";
import {ConsultingHistoricalReportService} from "../backend/common/services/consulting-historical-report.service";
import {HttpResponse} from "@angular/common/http";
import {IndividualQueryService} from "../../../@core/backend/common/services/individualQuery.service";
import {$e} from "codelyzer/angular/styles/chars";
import {ExcelService} from "../backend/common/services/excel.service";
import {formatDate} from '@angular/common';
import { isEmpty } from 'rxjs-compat/operator/isEmpty';

@Component({
    selector: 'ngx-consulting-historical-report',
    templateUrl: './consulting-historical-report.component.html',
    styleUrls: ['./consulting-historical-report.component.scss']
})
export class ConsultingHistoricalReportComponent implements OnInit {

    constructor(private router: Router,
                private fb: FormBuilder,
                private consultingHistoricalReportService: ConsultingHistoricalReportService,
                private individualQueryService: IndividualQueryService,
                private excelService: ExcelService,
                @Inject(LOCALE_ID) private locale: string,
                private toastrService: NbToastrService) {
        this.dataSource1 = consultingHistoricalReportService.getQueries();
    }

    formGroup: FormGroup;
    dataSource1: CustomServerDataSource;
    dataSource2: LocalDataSource = new LocalDataSource();
    dataSource3: LocalDataSource = new LocalDataSource();
    perPagePagination: any;
    queryDetailId = '';
    currentLists = [];

    settings = {
        actions: {
            add: false,
            edit: true,
            delete: true,
            position: 'right'
        },
        mode: 'external',
        edit: {
            //editButtonContent: '<i class="far fa-file-alt" width="20" height="20"></i>',
            editButtonContent: '<i class="far fa-eye"></i>',
            /*editButtonContent: '<nb-icon icon="brush"></nb-icon>',
            saveButtonContent: '<span class="material-icons">check_circle</span>',
            cancelButtonContent: '<span class="material-icons">cancel</span>'*/
        },
        delete: {
            deleteButtonContent: '<i class="far fa-file-pdf"></i>',
            confirmDelete: true,
        },
        columns: {
            idQueryCompany: {
                title: 'Id consulta',
                type: 'html',
                filter: false,
                valuePrepareFunction: (cell, row) => {
                    return row.query.idQueryCompany;
                },
            },
            identification: {
                title: 'Identificación',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Nombre consulta',
                type: 'string',
                filter: false,
            },
            user: {
                title: 'Nombre del usuario',
                type: 'html',
                filter: false,
                valuePrepareFunction: (cell, row) => {
                    return `${row.query.user.name} ${row.query.user.lastName}`;
                },
            },
            thirdTypeName: {
                title: 'Nombre tipo tercero',
                type: 'html',
                filter: false,
                valuePrepareFunction: (cell, row) => {
                    return row.query.thirdTypeName;
                },
            },
            resultQuantity: {
                title: 'Cantidad de coincidencias',
                type: 'string',
                filter: false,
            },
            // thirdTypeName: {
            //     title: 'Nombre tipo tercero',
            //     type: 'string',
            //     filter: false,
            // },
            queryType: {
                title: 'Tipo consulta',
                type: 'html',
                filter: false,
                valuePrepareFunction: (cell, row) => {
                    return row.query.queryType.name;
                },
            },
            createdAt: {
                title: 'Fecha y hora de consulta',
                type: 'string',
                filter: false,
            },
        },
    };

    settings2 = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        mode: 'external',
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
            group: {
                title: 'Grupo',
                type: 'number',
                filter: false,
            },
            priority: {
                title: 'Prioridad',
                type: 'string',
                filter: false,
            },
            identification: {
                title: 'Número de identificación',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Nombre',
                type: 'string',
                filter: false,
            },
            // name: {
            //     title: 'Nombre',
            //     type: 'string',
            //     filter: false,
            // },
            crime: {
                title: 'Delito, cargo o resultado de la consulta',
                type: 'string',
                filter: false,
            },
        },
    };

    settings3 = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        mode: 'external',
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
            group: {
                title: 'Grupo',
                type: 'number',
                filter: false,
            },
            priority: {
                title: 'Prioridad',
                type: 'string',
                filter: false,
            },
            identification: {
                title: 'Número de identificación',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Nombre',
                type: 'string',
                filter: false,
            },
            // name: {
            //     title: 'Nombre',
            //     type: 'string',
            //     filter: false,
            // },
            crime: {
                title: 'Delito, cargo o resultado de la consulta',
                type: 'string',
                filter: false,
            },
        },
    };

    get idQueryCompany() {
        return this.formGroup.get('idQueryCompany');
    }

    get identification() {
        return this.formGroup.get('identification');
    }

    get name() {
        return this.formGroup.get('name');
    }

    get user() {
        return this.formGroup.get('user');
    }

    get startDate() {
        return this.formGroup.get('startDate');
    }

    get endDate() {
        return this.formGroup.get('endDate');
    }

    get queryTypeId() {
        return this.formGroup.get('queryTypeId');
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.formGroup = this.fb.group({
            idQueryCompany: this.fb.control(''),
            identification: this.fb.control(''),
            name: this.fb.control(''),
            user: this.fb.control(''),
            startDate: this.fb.control('', [Validators.required]),
            endDate: this.fb.control('', [Validators.required]),
            queryTypeId: this.fb.control(''),
        })
    }

    search() {
        const data: any = this.formGroup.value;        
        if(!(typeof data.startDate === 'undefined' || data.startDate === null || data.startDate.length === 0)){
            data.startDate = formatDate(data.startDate, 'yyyy-MM-dd', this.locale);            
        }
        
        if(!(typeof data.endDate === 'undefined' || data.endDate === null || data.endDate.length === 0)){
            data.endDate= formatDate(data.endDate, 'yyyy-MM-dd', this.locale);
        }
        this.dataSource1.setSearchFilters({...data});
    }

    onQueryDetail($event: any) {
        const record = $event.data;
        const id = record.queryId;
        this.queryDetailId = record.query.idQueryCompany;

        this.consultingHistoricalReportService.getQueryLists(id).subscribe(response => {
            const records = response.data;            
            this.dataSource2.load(records.lists);
            this.dataSource3.load(records.ownLists);
        }, error => {
            this.toastrService.danger(error, 'Error', {
                icon: '',
            });
        })
    }

    onDetail($event: any) {

    }

    onDownLoadPdf($event: any) {
        const query = $event.data.query;
        const queryId = query.id
        debugger;
        if (query.queryTypeId != 2) {
            const queryId = query.id;

            this.individualQueryService.getIndividualQueryPdf(queryId).subscribe(
                (response: HttpResponse<Blob>) => {
                    let filename: string = this.getFileName(response)
                    let binaryData = [];
                    binaryData.push(response.body);
                    let downloadLink = document.createElement('a');
                    downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: 'blob'}));
                    downloadLink.setAttribute('download', filename);
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                }, error => {                                        
                    this.toastrService.danger(error.statusText, 'Error', {
                        icon: '',
                    });
                }
            );
        }

        if (query.queryTypeId == 2) {
            this.individualQueryService.getMasiveQueryPdf(queryId).subscribe(
                (response: HttpResponse<Blob>) => {
                    let filename: string = this.getFileName(response)
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

    getFileName(response: HttpResponse<Blob>) {
        let filename: string;
        try {
            const contentDisposition: string = response.headers.get('content-disposition');
            const r = /(?:filename=")(.+)(?:;")/
            filename = r.exec(contentDisposition)[1];
        } catch (e) {
            filename = `consulta_individual_${this.idQueryCompany}.pdf`;
        }
        return filename
    }

    onChangePerPage(value) {
        const data: any = this.formGroup.value;
        data['perPage'] = value;
        this.dataSource1.setSearchFilters({perPage: value, ...data});
    }

    async getDataToBeExported() {
        const data = await this.dataSource1.getElements();
        const columns = this.settings.columns;
        const columnKeys = Object.keys(columns);

        const preparedData = data.map(item => {
            const newItem = {}
            columnKeys.forEach(key => {
                let value;
                const column = columns[key];
                const columnTitle = column.title;

                if (column.valuePrepareFunction != null) {
                    value = column.valuePrepareFunction(item[key], item);
                } else {
                    value = item[key]
                }

                newItem[columnTitle] = value
            });

            return newItem;
        });

        return preparedData;
    }

    async exportAsXLSX() {
        const preparedData = await this.getDataToBeExported();
        this.excelService.exportAsExcelFile(preparedData, 'sample');
    }

    async exportDetailAsXLSX() {
        const data = await this.dataSource1.getElements();
        const columns = this.settings.columns;
        const columnKeys = Object.keys(columns);

        /*console.log('data', data);
        console.log('currentLists', this.currentLists);*/
        const preparedData = [];

        data.forEach(item => {
            const newItem = {}

            columnKeys.forEach(key => {
                let value;
                const column = columns[key];
                const columnTitle = column.title;

                if (column.valuePrepareFunction != null) {
                    value = column.valuePrepareFunction(item[key], item);
                } else {
                    value = item[key]
                }

                newItem[columnTitle] = value
            });

            item.query.lists.forEach(list => {
                newItem['NombreGrupoLista'] = list.nameListGroup;
                //newItem['TipoDocumento'] = 'TipoDocumento';
                newItem['TipoDocumento'] = list.nameTypeDocument;
                //newItem['DocumentoIdentidad'] = 'DocumentoIdentidad';
                newItem['DocumentoIdentidad'] = list.identification;
                //newItem['NombreCompleto'] = 'NombreCompleto';
                newItem['NombreCompleto'] = list.name;
                newItem['NombreTipoLista'] = list.nameListType;
                newItem['FuenteConsulta'] = list.source;
                // newItem['NombreTercero'] = 'NombreTercero';
                newItem['Delito'] = list.crime;
                newItem['Zona'] = list.zone;
                newItem['Link'] = list.link;
                newItem['Estado'] = list.status ? 'ACTIVO' : 'INACTIVO';

                preparedData.push(newItem);
            })

            delete newItem['Cantidad de coincidencias'];
        });

        this.excelService.exportAsExcelFile(preparedData, 'sample');
    }

    cleanForm() {
        this.formGroup.reset();
        window.location.reload();
    }
}
