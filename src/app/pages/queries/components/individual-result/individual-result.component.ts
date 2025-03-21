import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IndividualQueryService} from "../../../../@core/backend/common/services/individualQuery.service";
import {UserData} from "../../../../@core/interfaces/common/users";
import {Subject} from "rxjs/Subject";
import {takeUntil} from "rxjs/operators";
import {LocalDataSource} from 'ng2-smart-table';
import {HttpResponse} from '@angular/common/http';
import {IconComponent} from '../../../../@components/editors/icon/icon.component';
import {QueryDetailedviewComponent} from '../query-detailedview/query-detailedview.component';
import {NbDialogService} from '@nebular/theme';
declare var $: any;
@Component({
    selector: 'ngx-individual-result',
    templateUrl: './individual-result.component.html',
    styleUrls: ['./individual-result.component.scss']
})
export class IndividualResultComponent implements OnInit {

    protected readonly unsubscribe$ = new Subject<void>();
    error: any;
    messageError: string = 'El servicio no está disponible, por favor inténtelo más tarde';
    nameUser: string;
    user: string;
    dateQuery: string;
    queryId: number;
    idQueryCompany: number;
    name: string;
    date: string;
    document: string;
    thirdType: string;
    military: any;
    registryDeaths: any;
    superSocieties: any;
    rues: any;
    simit:any;
    // eps:any;
    Ppt:any;
    infoJudicialEcuador:any;
    criminalRecordEcuador:any;
    sunat:any;
    heatMap: any;
    restrictiveLists: LocalDataSource = new LocalDataSource();
    laftPenalLists: LocalDataSource = new LocalDataSource();
    laftAdminLists: LocalDataSource = new LocalDataSource();
    sanctionsAffectationLists: LocalDataSource = new LocalDataSource();
    pepsLists: LocalDataSource = new LocalDataSource();
    EpsList: LocalDataSource = new LocalDataSource();
    ownLists: LocalDataSource = new LocalDataSource();
    RamaJempsLists: LocalDataSource = new LocalDataSource();
    RamaLists: LocalDataSource = new LocalDataSource();
    RuesLists: LocalDataSource = new LocalDataSource();
    SimitList: LocalDataSource = new LocalDataSource();
    infoJudicialEcuadorList: LocalDataSource = new LocalDataSource();
    bmeList: LocalDataSource = new LocalDataSource();
    procuraduriaHtml: any;
    policeData: string='';
    bmeErrorMessagge: string='';
    bmeText: string='';
    bmeNonComplianceText: string='';
    settings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            id: {
                title: 'Id',
                type: 'string',
                filter: false,
                hide: true,
            },
            priorityResult: {
                title: 'Prioridad',
                type: 'string',
                filter: false,
            },
            nameTypeDocument: {
                title: 'Tipo de documento',
                type: 'string',
                filter: false,
            },
            document: {
                title: 'Documento',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Nombre completo',
                type: 'string',
                filter: false,
            },
            nameListType: {
                title: 'Nombre Tipo Lista',
                type: 'string',
                filter: false,
            },
            kindPerson: {
                title: 'Tipo Persona',
                type: 'string',
                filter: false,
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
                valuePrepareFunction: (val) => {
                    return val.length > 150 ? val.substring(0, 150) + "..." : val;
                },
            },
            zone: {
                title: 'Zona',
                type: 'string',
                filter: false,
            },
            moreInformation: {
                title: 'Otra Informacion',
                type: 'string',
                filter: false,
                valuePrepareFunction: (val) => {
                    return val.length > 150 ? val.substring(0, 150) + "..." : val;
                },
            },
            justificacion: {
                title: 'Justificación',
                type: 'string',
                filter: false,
            },
            ver: {
                title: 'Ver',
                type: 'custom',
                renderComponent: IconComponent,
                filter: false,
                onComponentInitFunction: (instance) => {
                    instance.iconClick.subscribe((rowData: any) => {
                    this.onRowIconClick(rowData);
                    });
                },
            },

        },
    };
    ownListsSettings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            id: {
                title: 'Id',
                type: 'string',
                filter: false,
                hide: true,
            },
            documentTypedocumentType: {
                title: 'Tipo documento',
                type: 'string',
                filter: false,
            },
            identification: {
                title: 'Documento',
                type: 'string',
                filter: false,
            },
            name: {
                title: 'Nombre completo',
                type: 'string',
                filter: false,
            },
            ownlistTypeName: {
                title: 'Lista',
                type: 'string',
                filter: false,
            },
            source: {
                title: 'Fuente',
                type: 'string',
                filter: false,
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
            moreInformation: {
                title: 'Otra Informacion',
                type: 'string',
                filter: false,
            },
            link: {
                title: 'link',
                type: 'string',
                filter: false,
            },
        },
    };
    RamaJempsSettings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            cityName: {
                title: 'Ciudad',
                type: 'string',
                filter: false,
            },
            identificationNumberResult: {
                title: 'Identificacion',
                type: 'string',
                filter: false,
            },
            nameResult: {
                title: 'Nombre completo',
                type: 'string',
                filter: false,
            },
            // queryDate: {
            //     title: 'Fecha',
            //     type: 'string',
            //     filter: false,
            // },
            link: {
                title: 'Enlace',
                type: 'html',
                filter: false,
                valuePrepareFunction: (val) => {
                    return `<a target="_blank" href="${val}">Ver</a>`;
                },
            },
        },
    };
    
    RamaSettings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            llaveProceso: {
                title: 'Número de Radicación',
                type: 'html',
                filter: false,
                valuePrepareFunction: (val) => {
                    return `<a target="_blank" href="https://consultaprocesos.ramajudicial.gov.co/Procesos/NumeroRadicacion">${val}</a>`;
                },
            },
            fechaProceso: {
                title: 'Fecha Proceso',
                type: 'string',
                filter: false,
            },
            fechaUltimaActuacion: {
                title: 'fecha Ultima Actualización',
                type: 'string',
                filter: false,
            },
            sujetosProcesales: {
                title: 'Sujetos Procesales',
                type: 'string',
                filter: false,
            },
            despacho: {
                title: 'Despachos',
                type: 'string',
                filter: false,
            },
            departamento: {
                title: 'Departamento',
                type: 'string',
                filter: false,
            },
        },
    };
    RuesSettings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            razonSocialONombre: {
                title: 'Razón Social',
                type: 'string',
                filter: false,
            },
            nit: {
                title: 'Nit',
                type: 'string',
                filter: false,
            },
            estado: {
                title: 'Estado',
                type: 'string',
                filter: false,
            },
            municipio: {
                title: 'Municipio',
                type: 'string',
                filter: false,
            },
            categoria: {
                title: 'Categoria',
                type: 'string',
                filter: false,
            },

        },
    };
    SimitSettings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            type: {
                title: 'Tipo',
                type: 'string',
                filter: false,
            },
            notification: {
                title: 'Notificación',
                type: 'string',
                filter: false,
            },
            plate: {
                title: 'Placa',
                type: 'string',
                filter: false,
            },
            secretaryship: {
                title: 'Secretaría',
                type: 'string',
                filter: false,
            },
            infringement: {
                title: 'Infracción',
                type: 'string',
                filter: false,
            },            
            state: {
                title: 'Estado',
                type: 'string',
                filter: false,
            },            
            amount: {
                title: 'Valor',
                type: 'string',
                filter: false,
            },
            amountToPaid: {
                title: 'Valor a pagar',
                type: 'string',
                filter: false,
            },
        },
    };
    EpsSettings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            entity: {
                title: 'Entidad',
                type: 'string',
                filter: false,
            },
            regime: {
                title: 'Regimen',
                type: 'string',
                filter: false,
            },
            effectiveDate: {
                title: 'Fecha efectiva',
                type: 'string',
                filter: false,
            },
            endDate: {
                title: 'Fecha Terminación',
                type: 'string',
                filter: false,
            },
            affiliateType: {
                title: 'Tipo de afiliado',
                type: 'string',
                filter: false,
            },
            state: {
                title: 'Estado',
                type: 'string',
                filter: false,
            },
        },
    };
    bmeSettings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            name_reported: {
                title: 'Nombre reportado',
                type: 'string',
                filter: false,
            },
            no_obligation: {
                title: 'No. oblicación',
                type: 'string',
                filter: false,
            },
            state: {
                title: 'Estado',
                type: 'string',
                filter: false,
            },
            date: {
                title: 'Fecha',
                type: 'string',
                filter: false,
            },
        },
    };
    infoJudicialEcuadorSettings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            date: {
                title: 'Fecha',
                type: 'string',
                filter: false,
            },
            nProccess: {
                title: 'No. proceso',
                type: 'string',
                filter: false,
            },
            action: {
                title: 'Acción',
                type: 'string',
                filter: false,
            },
        },
    };

    hasProcuraduria:boolean;
    hasRamaJudicialJEMPS:boolean;
    hasSuperSocieties:boolean;
    hasRues:boolean;
    hasMilitary:boolean;
    hasRamaJudicial:boolean;
    hasRegistryDeaths: boolean;
    hasSimit:boolean;
    hasEstadoEPS:boolean;
    hasEstadoPermiso:boolean;
    hasInformacionJudicial:boolean;
    hasAntecedentesCriminales:boolean;
    hasSunat:boolean;

    hasProcuraduriaError:boolean;
    hasRamaJudicialJEMPSError:boolean;
    hasSuperSocietiesError:boolean;
    hasRuesError:boolean;
    hasMilitaryError:boolean;
    hasRamaJudicialError:boolean;
    hasRegistryDeathsError:boolean;
    hasSimitError:boolean;
    hasEstadoEPSError:boolean;
    hasEstadoPermisoError:boolean;
    hasInformacionJudicialError:boolean;
    hasAntecedentesCriminalesError:boolean;
    hasSunatError:boolean;
    hasPolice:boolean;
    hasBme:boolean;
    hasBmeError:boolean;
    ramaJudicialError:string;
    ramaJudicialJEMPSError:string;
    procuraduriaError:string;
    militaryError:string;
    ruesError:string;
    registryDeathsError:string;
    simitError:string;
    epsError:string;
    pptError:string;
    superSocietiesError:string;
    infoJudicialEcuadorError:string;
    criminalRecordEcuadorError:string;
    sunatError:string;
    tituloSimit:string;
    tituloSuperSocieties:string;

    constructor(private route: ActivatedRoute, private userData: UserData, private individualQueryService: IndividualQueryService,
                private dialogService: NbDialogService) {
    }
    ngOnInit(): void {
        this.queryId = this.route.snapshot.params.id;
        
        this.individualQueryService.getQuery(this.queryId).pipe(takeUntil(this.unsubscribe$)).subscribe(data => {

            this.idQueryCompany = data.query.idQueryCompany;
            this.name = data.name;
            this.document = data.document;
            this.heatMap = data.heatMap;
            this.nameUser=data.user.name +" "+data.user.lastName;
            this.user=data.user.login ;
            this.dateQuery=data.query.createdAt;
            this.thirdType=data.thirdPartyType!=null?data.thirdPartyType.name:"";
            this.military=data?.military;
            this.hasProcuraduria=data.hasProcuraduria;
            this.hasPolice=data.hasPolice;
            this.hasBme=data.hasBme;
            this.hasRamaJudicialJEMPS=data.hasRamaJudicialJEMPS;
            this.hasSuperSocieties=data.hasSuperSocieties;
            this.hasRues=data.hasRues;
            this.hasMilitary=data.hasMilitary;
            this.hasRamaJudicial=data.hasRamaJudicial;
            this.hasRegistryDeaths=data.hasRegistryDeaths;
            this.hasSimit = data.hasSimit;
            this.hasEstadoEPS = data.hasEstadoEPS;
            this.hasEstadoPermiso = data.hasEstadoPermiso;
            this.hasInformacionJudicial = data.hasInformacionJudicial;
            this.hasAntecedentesCriminales = data.hasAntecedentesCriminales;
            this.hasSunat = data.hasSunat;

            // debugger;
            
            data.ownLists.forEach(element => {
                this.ownLists.prepend(element);
            });
            if (data.hasRamaJudicialJEMPS) {
                if(data.ramaJudicialJEMPS.hasError){
                    this.hasRamaJudicialJEMPS = false;
                    this.hasRamaJudicialJEMPSError = true;
                    this.ramaJudicialJEMPSError = data.ramaJudicialJEMPS.errorMessage;
                }
                else{
                    data.ramaJudicialJEMPS.data.forEach(element => {
                        this.RamaJempsLists.prepend(element);
                    });
                }                
            }
            if (data.hasRamaJudicial) {
                if(!data.ramaJudicial.hasError){
                    data.ramaJudicial.data.forEach(element => {
                        this.RamaLists.prepend(element);
                    });
                }
                else{
                    this.hasRamaJudicial = false;
                    this.hasRamaJudicialError = true;
                    this.ramaJudicialError = data.ramaJudicial.errorMessage;
                }
            }
            if(data.hasSuperSocieties){
                if(!data.superSocieties.hasError){
                    if(data.superSocieties.data != undefined){
                        this.superSocieties = data.superSocieties.data;
                    }
                    else{
                        this.tituloSuperSocieties = 'Información'
                        this.hasSuperSocieties = false;
                        this.hasSuperSocietiesError = true;
                        this.superSocietiesError = data.superSocieties.errorMessage;
                    }
                    
                }
                else{
                    this.tituloSuperSocieties = 'Error'
                    this.hasSuperSocieties = false;
                    this.hasSuperSocietiesError = true;
                    this.superSocietiesError = data.superSocieties.errorMessage;
                }
                
            }
            if(data.hasRues){
                if(!data.rues.hasError){

                    data.rues.listData.forEach(element => {
                        this.RuesLists.prepend(element);
                    });
                    // this.rues=data.rues.listData;
                }
                else{
                    this.hasRues = false;
                    this.hasRuesError = true;
                    this.ruesError = data.rues.errorMessage;
                }  
            }
            data.lists.forEach(element => {
                element["MoreInformation"] = element["moreInformation"].length > 150 ? element["moreInformation"].substring(0, 150) + "..." : element["moreInformation"];

                switch (element["listGroupId"]) {
                    case 1:
                        this.restrictiveLists.prepend(element);
                        break;
                    case 2:
                        this.laftPenalLists.prepend(element);
                        break;
                    case 3:
                        this.laftAdminLists.prepend(element);
                        break;
                    case 4:
                    case 5:
                        this.sanctionsAffectationLists.prepend(element);
                        break;
                    case 6:
                    case 7:
                        this.pepsLists.prepend(element);
                        break;
                }
            });

            if(data.hasRegistryDeaths){
                if(!data.registryDeaths.hasError){
                    this.registryDeaths = data.registryDeaths.data;
                }
                else{
                    this.hasRegistryDeaths = false;
                    this.hasRegistryDeathsError = true;
                    this.registryDeathsError = data.registryDeaths.errorMessage;
                }                
            }

            if(data.hasMilitary){
                if(!data.military.hasError){
                    if(data.military.data.error == ''){
                        this.military = data.military.data;
                    }
                    else{
                        this.hasMilitary = false;
                        this.hasMilitaryError = true
                        this.militaryError = data.military.data.error;
                    }
                    
                }
                else{
                    this.hasMilitary = false;
                    this.hasMilitaryError = true
                    this.militaryError = data.military.errorMessage;
                }
                
            }

            if(data.hasSimit){
                if(!data.simit.hasError){
                    if(data.simit.data.length > 0){                        
                        this.simit = data.simit.data;
                        data.simit.data.forEach(element => {
                            this.SimitList.prepend(element);
                        });
                    }
                    else{
                        this.tituloSimit = 'Información'
                        this.hasSimit = false;
                        this.hasSimitError = true;
                        this.simitError = data.simit.errorMessage;
                    }
                }
                else{
                    this.tituloSimit = 'Error'
                    this.hasSimit = false;
                    this.hasSimitError = true;
                    this.simitError = data.simit.errorMessage;
                }
            }

            if(data.hasEstadoEPS){
                if(!data.eps.hasError){
                    this.EpsList = data.eps.listData;
                }
                else{
                    this.hasEstadoEPS = false;
                    this.hasEstadoEPSError = true;
                    this.epsError = data.eps.errorMessage;
                }  
            }

            if(data.hasEstadoPermiso){
                if(!data.ppt.hasError){
                    this.Ppt = data.ppt.data;
                }
                else{
                    this.hasEstadoPermiso = false;
                    this.hasEstadoPermisoError = true;
                    this.pptError = data.ppt.errorMessage;
                }
                
            }

            if(data.hasAntecedentesCriminales){
                if(!data.criminalRecordEcuador.hasError){
                    if(data.criminalRecordEcuador.data.document != ''){
                        this.criminalRecordEcuador = data.criminalRecordEcuador.data;
                    }
                    else{
                        this.hasAntecedentesCriminales = false;
                        this.hasAntecedentesCriminalesError = true;
                        this.criminalRecordEcuadorError = data.criminalRecordEcuador.data.error;
                    }
                }
                else{
                    this.hasAntecedentesCriminales = false;
                    this.hasAntecedentesCriminalesError = true;
                    this.criminalRecordEcuadorError = data.criminalRecordEcuador.errorMessage;
                }
                
            }

            if(data.hasInformacionJudicial){
                if(!data.infoJudicialEcuador.hasError){
                    this.infoJudicialEcuador = data.infoJudicialEcuador.data;
                    this.infoJudicialEcuador.forEach(element => {
                        this.infoJudicialEcuadorList.prepend(element);
                    });
                }
                else{
                    this.hasInformacionJudicial = false;
                    this.hasInformacionJudicialError = true;
                    this.infoJudicialEcuadorError = data.infoJudicialEcuador.errorMessage;
                }
                
            }

            if(data.hasSunat){
                if(!data.sunat.hasError){
                    this.sunat = data.sunat;
                }
                else{
                    this.hasSunat = false;
                    this.hasSunatError = true;
                    this.sunatError = data.sunat.errorMessage;
                }
            }

            console.log(data);
            if (data.hasProcuraduria) {
                if(!data.procuraduria.hasError){
                    if(data.procuraduria.data.errorMessage == undefined){
                        // const htmlEntities = {
                        //     "&": "&amp;",
                        //     "<": "&lt;",
                        //     ">": "&gt;",
                        //     '"': "&quot;",
                        //     "'": "&apos;"
                        // };
                        this.procuraduriaHtml = this.decodeEntities(data.procuraduria.data.html_response);
                    }
                    else{
                        this.hasProcuraduria = false;
                        this.hasProcuraduriaError = true;
                        this.procuraduriaError = data.procuraduria.data.errorMessage;
                    }
                    
                }
                else{
                    this.hasProcuraduria = false;
                    this.hasProcuraduriaError = true;
                    this.procuraduriaError = this.messageError;
                }
                
            }
            if(data.hasPolice){
                if(!data.police.hasError){
                    this.policeData=data.police.data.message.text_result;
                }
                else{
                    this.policeData = data.police.errorMessage;
                }
            }
            if(data.hasBme){
                this.hasBmeError=data.bme.hasError
                if(!data.bme.hasError){
                    this.bmeList=data.bme.data.bme_data;
                    this.bmeText=data.bme.data.bme_text;
                    this.bmeNonComplianceText=data.bme.data.incumplimiento_acuerdos;
                }
                else{
                    this.bmeErrorMessagge = data.bme.errorMessage;
                }
            }
            console.log(data);
            var obj = JSON.parse(this.heatMap);
            obj["transitions"] = false;

            $("#chart").kendoChart(obj);

        });

    }
    downloadPdf(){
        // debugger;
        this.individualQueryService.getIndividualQueryPdf(this.queryId).subscribe(
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
    getFileName(response: HttpResponse<Blob>) {
    let filename: string;
    try {
        const contentDisposition: string = response.headers.get('content-disposition');
        const r = /(?:filename=")(.+)(?:;")/
        filename = r.exec(contentDisposition)[1];
    }
    catch (e) {
        filename = `consulta_individual_${this.idQueryCompany}.pdf`;
    }
    return filename
    }

    decodeEntities(str) {
        const element = document.createElement('div');
        if (str && typeof str === 'string') {
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
        }
        return str;
    }
    onSelect(data): void {
    }

    onActivate(data): void {
    }

    onDeactivate(data): void {
    }
    onRowIconClick(rowData: any) {
        console.log(rowData);
        this.dialogService.open(QueryDetailedviewComponent, {
            context: {
                detaileInfo: rowData,
            },
            closeOnBackdropClick: false, // Evitar que la modal se cierre haciendo clic en el fondo
            // hasScroll: true, // Permite el desplazamiento vertical dentro de la modal
            hasBackdrop: true, // Habilita el fondo opaco detrás de la modal
            autoFocus: false, // Evitar que la modal tenga enfoque automático
            closeOnEsc: true, // Permite cerrar la modal presionando la tecla Esc
        });

    }
}
