import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CheckNameData} from "../../../../@core/interfaces/common/checkName";
import {Subject} from "rxjs/Subject";
import {takeUntil} from "rxjs/operators";
import {IndividualQueryService} from "../../../../@core/backend/common/services/individualQuery.service";
import {UserData} from "../../../../@core/interfaces/common/users";
import {
    NbComponentStatus,
    NbDialogService,
    NbGlobalPhysicalPosition,
    NbGlobalPosition,
    NbToastrService
} from '@nebular/theme';
import {thirdPartyManageService} from '../../../management/backend/common/services/ThirdPartyManage.service';
import {ThirdPartyTypeDTO} from '../../../management/models/ThirdPartyTypeDTO';
import {AdditionalCompanyServiceService} from '../../services/additional-company-service.service';

@Component({
    selector: 'ngx-individual',
    templateUrl: './individual.component.html',
    styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {
    @ViewChild('divResult') divResult: ElementRef;
    protected readonly unsubscribe$ = new Subject<void>();
    procuraduriaType = 'procuraduria';
    thirdTypes: ThirdPartyTypeDTO[];
    militaryType = 'military';
    numberWordsType = 'numberWords';
    //thirdTypes = [{'id': 1, 'name': 'prueba 1'}, {'id': 2, 'name': 'prueba 2'}, {'id': 3, 'name': 'prueba 3'}];
    ProcuraduriaTypesDocuments = [{'id': 0, 'name': 'PEP'}, {'id': 1, 'name': 'Cédula de ciudadanía'}, {
        'id': 2,
        'name': 'Nit',
    }, {'id': 3, 'name': 'Cédula extranjería'}];
    TypesDocuments = [{'id': 0, 'name': 'PEP'}, {'id': 1, 'name': 'Cédula de ciudadanía'}, {
        'id': 2,
        'name': 'Nit',
    }, {'id': 3, 'name': 'Cédula extranjería'}];
    militaryDocuments = [{'id': 'CC', 'name': 'Cédula de Ciudadanía'}, {
        'id': 'TI',
        'name': 'Tarjeta de identidad'
    }, {'id': 'NUIP', 'name': 'Número Único de Identificación Personal'}];
    PptDocuments = [{'id': 106001, 'name': 'RUMV PEP'}, {'id': 106002, 'name': 'Cédula de extranjería'}, {
        'id': 106003,
        'name': 'PASAPORTE',
    }];
    policeTypeDocuments = [{'id': 1, 'name': 'Cedula de Ciudadanía'}, {'id': 2, 'name': 'Cédula Extranjera'},
        {'id': 3,'name': 'Pasaporte'},{'id': 4,'name': 'Documento País Origen'}];
    bmeTypeDocuments = [{'id': 28979, 'name': 'CEDULA DE CIUDADANÍA'}, {'id': 28980, 'name': 'NIT'},
        {'id': 28982,'name': 'CEDULA DE EXTRANJERÍA'},{'id': 28983,'name': 'PASAPORTE'},{'id': 28984,'name': 'SOCIEDAD EXTRANJERA SIN NIT EN COLOMBIA'}];
    showProcuraduriaTypeDocument: boolean = false;
    showNumberWords: boolean = false;
    makePreviusQuery: boolean = false;
    formInvalid: boolean = false;
    showButtonSearchName: boolean = false;
    showNitInputProcuraduria: boolean = false;
    loadingCheckName: boolean = false;
    showPptTypeDocument: boolean = false;
    showPoliceTypeDocument: boolean = false;
    showBmeTypeDocument: boolean = false;
    showSunatTypeDocument: boolean = false;
    loadingQuery: boolean = false;
    companyId: number;
    userId: number;
    queryCompanyId: number;
    queryId: number;
    form: FormGroup;
    formControls: {
        name: FormControl,
        document: FormControl,
        companyId: FormControl,
        userId: FormControl,
        // typeDocument: FormControl,
        digitVerification: FormControl,
        typeDocumentProcuraduria: FormControl,
        typeDocumentPpt: FormControl,
        ruc: FormControl,
        typeDocumentMilitary: FormControl,
        typeDocumentPolice: FormControl,
        typeDocumentBme: FormControl,
        thirdTypeId: FormControl,
        hasProcuraduria: FormControl,
        hasRamaJudicial: FormControl,
        hasRamaJudicialJEMPS: FormControl,
        hasRegistryDeaths: FormControl,
        hasPriority4: FormControl,
        numberWords: FormControl,
        hasMilitary: FormControl,
        hasSimit: FormControl,
        hasRues: FormControl,
        hasSuperSocieties: FormControl,
        hasEstadoEPS: FormControl,
        hasPolice: FormControl,
        hasBme: FormControl,
        hasSuperFinanciera: FormControl,
        hasEstadoPermiso: FormControl,
        hasAntecedentesCriminales: FormControl,
        hasInformacionJudicial: FormControl,
        hasSunat: FormControl,
    };
    checkActiveServiceProcuraduria: boolean = false;
    checkActiveServiceRamaJudicial: boolean = false;
    checkActiveServiceRamaJudicialJEMPS: boolean = false;
    checkActiveServiceRegistryDeaths: boolean = false;
    checkActiveServiceMilitary: boolean = false;
    checkActiveServiceSimit: boolean = false;
    checkActiveServiceRues: boolean = false;
    checkActiveServiceSuperSocieties: boolean = false;
    checkActiveServiceEstadoEPS: boolean = false;
    checkActiveServicePolice: boolean = false;
    checkActiveServiceBme: boolean = false;
    checkActiveServiceSuperFinanciera: boolean = false;
    checkActiveServiceEstadoPermiso: boolean = false;
    checkActiveServiceAntecedentesCriminales: boolean = false;
    checkActiveServiceInformacionJudicial: boolean = false;
    checkActiveServiceSunat: boolean = false;
    activeTitleMainServices: boolean = false;
    activeTitleColombiaServices: boolean = false;
    activeTitleVenezuelaServices: boolean = false;
    activeTitleecuadorServices: boolean = false;
    activeTitlePeruServices: boolean = false;
    additionalServices: any;

    types: NbComponentStatus[] = [
        'primary',
        'success',
        'info',
        'warning',
        'danger',
    ];
    index = 1;

    constructor(private fb: FormBuilder, private checkNameService: CheckNameData, private userData: UserData, private individualQueryService: IndividualQueryService
        , private toastrService: NbToastrService, private dialogService: NbDialogService, private _thirdPartyManageService: thirdPartyManageService,
                private additionalCompanyServiceService: AdditionalCompanyServiceService) {
    }

    ngOnInit() {
        this.userData.getCurrentUser().pipe(takeUntil(this.unsubscribe$)).subscribe(user => {
            this.companyId = user.companyId;
            this.userId = user.id;
            this.activeCheck(user.companyId);
            this._thirdPartyManageService.getByCompanyID().subscribe((response: ThirdPartyTypeDTO[]) => {
                this.thirdTypes = response.filter(value => value.status);
            })
        });
        this.formControls = {
            name: this.fb.control('', Validators.required),
            document: this.fb.control('', Validators.required),
            companyId: this.fb.control('', Validators.nullValidator),
            userId: this.fb.control('', Validators.nullValidator),
            // typeDocument: this.fb.control('', Validators.nullValidator),
            digitVerification: this.fb.control(1, Validators.nullValidator),
            thirdTypeId: this.fb.control('', Validators.nullValidator),
            typeDocumentProcuraduria: this.fb.control('', Validators.nullValidator),
            typeDocumentPpt: this.fb.control('', Validators.nullValidator),
            ruc: this.fb.control('', Validators.nullValidator),
            typeDocumentMilitary: this.fb.control('', Validators.nullValidator),
            typeDocumentPolice: this.fb.control('', Validators.nullValidator),
            typeDocumentBme: this.fb.control('', Validators.nullValidator),
            hasProcuraduria: this.fb.control(false, Validators.nullValidator),
            hasRamaJudicial: this.fb.control(false, Validators.nullValidator),
            hasRamaJudicialJEMPS: this.fb.control(false, Validators.nullValidator),
            hasRegistryDeaths: this.fb.control(false, Validators.nullValidator),
            hasPriority4: this.fb.control(false, Validators.nullValidator),
            numberWords: this.fb.control(1, Validators.nullValidator),
            hasMilitary: this.fb.control(false, Validators.nullValidator),
            hasSimit: this.fb.control(false, Validators.nullValidator),
            hasRues: this.fb.control(false, Validators.nullValidator),
            hasSuperSocieties: this.fb.control(false, Validators.nullValidator),
            hasEstadoEPS: this.fb.control(false, Validators.nullValidator),
            hasPolice: this.fb.control(false, Validators.nullValidator),
            hasBme: this.fb.control(false, Validators.nullValidator),
            hasSuperFinanciera: this.fb.control(false, Validators.nullValidator),
            hasEstadoPermiso: this.fb.control(false, Validators.nullValidator),
            hasAntecedentesCriminales: this.fb.control(false, Validators.nullValidator),
            hasInformacionJudicial: this.fb.control(false, Validators.nullValidator),
            hasSunat: this.fb.control(false, Validators.nullValidator),
        };
        this.form = this.fb.group({
            name: this.formControls.name,
            document: this.formControls.document,
            companyId: this.formControls.companyId,
            userId: this.formControls.companyId,
            // typeDocument: this.formControls.typeDocument,
            digitVerification: this.formControls.digitVerification,
            thirdTypeId: this.formControls.thirdTypeId,
            typeDocumentProcuraduria: this.formControls.typeDocumentProcuraduria,
            typeDocumentMilitary: this.formControls.typeDocumentMilitary,
            typeDocumentPolice: this.formControls.typeDocumentPolice,
            typeDocumentBme: this.formControls.typeDocumentBme,
            typeDocumentPpt: this.formControls.typeDocumentPpt,
            ruc: this.formControls.ruc,
            hasProcuraduria: this.formControls.hasProcuraduria,
            hasRamaJudicial: this.formControls.hasRamaJudicial,
            hasRamaJudicialJEMPS: this.formControls.hasRamaJudicialJEMPS,
            hasRegistryDeaths: this.formControls.hasRegistryDeaths,
            hasPriority4: this.formControls.hasPriority4,
            numberWords: this.formControls.numberWords,
            hasMilitary: this.formControls.hasMilitary,
            hasSimit: this.formControls.hasSimit,
            hasRues: this.formControls.hasRues,
            hasSuperSocieties: this.formControls.hasSuperSocieties,
            hasEstadoEPS: this.formControls.hasEstadoEPS,
            hasPolice: this.formControls.hasPolice,
            hasBme: this.formControls.hasBme,
            hasSuperFinanciera: this.formControls.hasSuperFinanciera,
            hasEstadoPermiso: this.formControls.hasEstadoPermiso,
            hasAntecedentesCriminales: this.formControls.hasAntecedentesCriminales,
            hasInformacionJudicial: this.formControls.hasInformacionJudicial,
            hasSunat: this.formControls.hasSunat,
        });
    }

    documentOrNameChange() {
        const doc: string = this.form.get("document").value;
        this.showButtonSearchName = (this.form.get("document").value !== "" && this.form.get("name").value === "");

        if (this.form.get('document').value !== '') {
            this.form.controls['name'].clearValidators();
        } else {
            this.form.controls['name'].setValidators(Validators.required);
        }
        this.form.controls["name"].updateValueAndValidity();

        if (this.form.get('name').value !== '') {
            this.form.controls['document'].clearValidators();
        } else {
            this.form.controls['document'].setValidators(Validators.required);
        }
        this.form.controls["document"].updateValueAndValidity();
    }

    checkName() {
        const doc: string = this.form.get("document").value;
        this.loadingCheckName = true;
        this.checkNameService.getNameByDocument(doc).pipe(takeUntil(this.unsubscribe$)).subscribe(checkNameData => {
                // let checkData: string = "" + checkNameData;
                // var name = checkData.substring(
                //     checkData.indexOf(">\"") + 2,
                //     checkData.lastIndexOf("\"<")
                // );
                // this.form.controls["name"].setValue(name);
                if (checkNameData != null)
                    this.form.controls["name"].setValue(checkNameData.nombreCompleto);
                this.loadingCheckName = false;
            },
            error => {
                this.loadingCheckName = false;
                this.showToast("Error", "No se pudo obtener nombre, por favor inténtelo más tarde", 4, false)
            });
    }

    updateState(serviceType) {
        switch (serviceType) {
            case this.procuraduriaType:
                this.showProcuraduriaTypeDocument = this.form.get('hasProcuraduria').value;
                const typeProcuraduriaValue = this.form.get('typeDocumentProcuraduria').value;
                this.showNitInputProcuraduria = typeProcuraduriaValue == 2 && this.form.get('hasProcuraduria').value;

                if (this.showProcuraduriaTypeDocument) {
                    this.form.controls['typeDocumentProcuraduria'].setValidators(Validators.required);
                    console.log("typeProcuraduriaValue", typeProcuraduriaValue)
                    if (typeProcuraduriaValue == 2) {
                        this.form.controls['digitVerification'].setValidators(Validators.required);
                    } else {
                        this.form.controls['digitVerification'].clearValidators();
                    }
                    this.form.controls["digitVerification"].updateValueAndValidity();
                } else {
                    this.form.controls['typeDocumentProcuraduria'].clearValidators();
                }
                this.form.controls["typeDocumentProcuraduria"].updateValueAndValidity();
                break;
            case this.numberWordsType:
                this.showNumberWords = this.form.get('hasPriority4').value;
                break;
        }

    }

    ProcuraduriaTypeChange(val) {
        this.showNitInputProcuraduria = val == 2 && this.form.get('hasProcuraduria').value;
        console.log("val", val)
    }

    PptTypeChange() {
        this.showPptTypeDocument = this.form.get('hasEstadoPermiso').value;
    }

    PoliceTypeChange() {
        this.showPoliceTypeDocument = this.form.get('hasPolice').value;
    }
    bmeTypeChange() {
        this.showBmeTypeDocument = this.form.get('hasBme').value;
    }

    SunatTypeChange() {
        this.showSunatTypeDocument = this.form.get('hasSunat').value;
    }

    onSubmit(dialog: TemplateRef<any>) {
        this.loadingQuery = true;
        this.form.controls["companyId"].setValue(this.companyId);
        this.form.controls["userId"].setValue(this.userId);
        this.formInvalid = this.form.invalid;
        // console.log(this.form.value)
        if (!this.makePreviusQuery) {
            this.individualQueryService.makeQuery(this.form.value).pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
                    console.log(data);
                    this.queryCompanyId = data.query.idQueryCompany;
                    this.queryId = data.query.id;
                    this.loadingQuery = false;
                    this.showToast("Finalizado", "La consulta se realizó exitosamente!", 1, false)
                    setTimeout(() => {
                        this.divResult.nativeElement.focus();
                    }, 1000)
                },
                error => {
                    this.loadingQuery = false;
                    this.showToast("Error", "No se pudo realizar consulta, por favor inténtelo más tarde", 4, false)
                    console.log("e", error)
                });
        } else {
            this.individualQueryService.previusQuery(this.form.value).pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
                    console.log("data");
                    // this.queryCompanyId=data.query.idQueryCompany;
                    this.queryId = data.id;
                    this.loadingQuery = false;

                    // const body = 'Este tercero ya fue consultado el : <b>' +data.CreatedAt + '</b> on el Id de consulta: <b>' +data.CompanyId + '</b> Puede generar una nueva consulta para actualizar su análisis de riesgo. <br>¿Usted qué quiere hacer?'
                    this.dialogService.open(
                        dialog,
                        {
                            context: data,
                            closeOnBackdropClick: false,
                        });
                    // this.showToast("Finalizado","La consulta se realizó exitosamente!",1,false)
                    // setTimeout(()=>{
                    //     this.divResult.nativeElement.focus();
                    // },1000)
                },
                error => {
                    this.loadingQuery = false;
                    this.showToast("Error", "No se pudo realizar consulta, por favor inténtelo más tarde", 4, false)
                    console.log("e", error)
                });
        }

        if (this.formInvalid) {
            return;
        }

    }

    makePreviusQueryChange(checked) {
        this.makePreviusQuery = checked;
    }

    activeCheck(companyId: number) {
        this.additionalCompanyServiceService.getAdditionalCompanyServices(companyId).subscribe(response => {
            this.additionalServices = response.data;
            this.enableServices(this.additionalServices);
            this.enableTitlesAdditionalServices();
        }, error => {
        });
    }

    enableTitlesAdditionalServices() {
        this.activeTitleMainServices = this.checkActiveServiceProcuraduria || this.checkActiveServiceRamaJudicial || this.checkActiveServiceRamaJudicialJEMPS || this.checkActiveServiceMilitary;
        this.activeTitleColombiaServices = this.checkActiveServiceMilitary || this.checkActiveServiceSimit || this.checkActiveServiceSuperSocieties
            || this.checkActiveServiceRues || this.checkActiveServiceEstadoEPS || this.checkActiveServicePolice;
        this.activeTitleVenezuelaServices = this.checkActiveServiceEstadoPermiso;
        this.activeTitleecuadorServices = this.checkActiveServiceAntecedentesCriminales || this.checkActiveServiceInformacionJudicial;
        this.activeTitlePeruServices = this.checkActiveServiceSunat;

    }

    enableServices(additionalServices: any) {
        additionalServices.forEach(element => {
            this[element.additionalService.htmlId] =element.active
        });
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

}
