import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {SmartTableData} from "../../../../@core/interfaces/common/smart-table";
import {ToggleComponent} from '../../../../@components/editors/toggle/toggle.component';
import {InputComponent} from '../../../../@components/editors/input/input.component';

import {UserData} from '../../../../@core/interfaces/common/users';
import {NotificationSettingsData} from "../../../../@core/interfaces/common/notificationSettings";
import {FormBuilder, FormGroup} from "@angular/forms";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs/Subject";
import {
    NbComponentStatus,
    NbGlobalPhysicalPosition,
    NbGlobalPosition,
    NbTagComponent,
    NbTagInputAddEvent,
    NbToastrService
} from '@nebular/theme';

@Component({
    selector: 'ngx-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
    protected readonly unsubscribe$ = new Subject<void>();
    keys=["mailPriority1","mailPriority2","mailPriority3",
        "mailPriority4","mailCoincidences","mailAdditionalServices","mailAministrative","mailRoi"];
    settings = {
        actions: {
            add: false,
            edit: false,
            delete: false,
        },
        columns: {
            id: {
                title: 'ID',
                type: 'number',
                hide: true,
                filter: false,
            },
            action: {
                title: 'Accion',
                type: 'custom',
                filter: false,
                renderComponent: ToggleComponent,
            },
            type: {
                title: 'Tipo de notificaión',
                type: 'string',
                filter: false,
            },
            email: {
                title: 'Destino',
                type: 'custom',
                filter: false,
                renderComponent: InputComponent,
            },
        },
    };
    ValueP1 = '';
    isDisableP1 = false;
    statusButton = false;
    data: any;
    source: LocalDataSource = new LocalDataSource();
    companyId: number;
    MailPriority1: string;
    notificationSettingForm: FormGroup;
    loadingCheckName: boolean = false;
    types: NbComponentStatus[] = [
        'primary',
        'success',
        'info',
        'warning',
        'danger',
    ];
    index = 1;
    
    constructor(private service: SmartTableData, private userData: UserData, private notificationSettingsService: NotificationSettingsData, private fb: FormBuilder
        ,private toastrService: NbToastrService) {
        // const data = this.service.getData();

        // this.data = [
        //     {id: 1, action: true, type: 'Prioridad 1', email: {value: 'prueba', Isdisabled: true}},
        //     {id: 2, action: true, type: 'Prioridad 2', email: {value: 'prueba2', Isdisabled: false}},
        // ];
        // this.source.load(this.data);
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

    initForm() {

        this.notificationSettingForm = this.fb.group({
            id: this.fb.control(''),
            sendMailPriority1: this.fb.control(false),
            mailPriority1: this.fb.control(''),
            sendMailPriority2: this.fb.control(false),
            mailPriority2: this.fb.control(''),
            sendMailPriority3: this.fb.control(false),
            mailPriority3: this.fb.control(''),
            sendMailPriority4: this.fb.control(false),
            mailPriority4: this.fb.control(''),
            sendMailCoincidences: this.fb.control(false),
            mailCoincidences: this.fb.control(''),
            sendMailAdditionalServices: this.fb.control(false),
            mailAdditionalServices: this.fb.control(''),
            sendMailAdministrative: this.fb.control(false),
            mailAministrative: this.fb.control(''),
            sendMailRoi: this.fb.control(false),
            mailRoi: this.fb.control(''),
            companyId: this.fb.control(''),
        });
    }

    initFormValue() {
        this.userData.getCurrentUser().pipe(takeUntil(this.unsubscribe$)).subscribe(user => {
            this.companyId = user.companyId;
            this.notificationSettingsService.getCurrentNotificationSetting(this.companyId).pipe(takeUntil(this.unsubscribe$)).subscribe(settings => {
                
                if(settings ==null){
                    this.showToast("Error","No se pudo obtener información, por favor configure",4,false)
                }
                else{
                    this.MailPriority1=settings.mailPriority1
                    this.notificationSettingForm.setValue({
                        id: settings.id ,
                        sendMailPriority1:  settings?.sendMailPriority1 ,
                        mailPriority1:  [],
                        sendMailPriority2: settings?.sendMailPriority2 ,
                        mailPriority2:  [],
                        sendMailPriority3: settings?.sendMailPriority3 ,
                        mailPriority3: [],
                        sendMailPriority4: settings?.sendMailPriority4 ,
                        mailPriority4:  [],
                        sendMailCoincidences: settings?.sendMailCoincidences ,
                        mailCoincidences:   [],
                        sendMailAdditionalServices:  settings?.sendMailAdditionalServices ,
                        mailAdditionalServices:   [],
                        sendMailAdministrative:  settings?.sendMailAdministrative,
                        mailAministrative:   [],
                        sendMailRoi:  settings?.sendMailRoi,
                        mailRoi:   [],
                        companyId: settings.companyId ,
                    });
                }
                
                this.keys.forEach(key => {
                    var val =settings[key]!=null && settings[key]!=""?settings[key].split(","):[];
                    this.notificationSettingForm.get(key).setValue(val);
                    
                });
                
            });
        })

    }

    onChangeToggle(event): void {
        console.log(event.rowSelect);
    }
    submitForm(){
        // var keys=["mailAdditionalServices","mailAministrative","mailCoincidences",
        // "mailPriority2","mailPriority3","mailPriority4","mailRoi"];
        var notificationSettingFormToSend= this.notificationSettingForm;

        this.keys.forEach(key => {
            var textEmails="";
            if(!Array.isArray(this.notificationSettingForm.controls[key].value)){
                const arr = Array.from(this.notificationSettingForm.controls[key].value);
                arr.forEach(element => {
                    textEmails+=textEmails==""?element:","+element;
                });
            }
            else {
                this.notificationSettingForm.controls[key].value.forEach(element => {
                    textEmails+=textEmails==""?element:","+element;
                });
            }            
            
            notificationSettingFormToSend.get(key).setValue(textEmails);            
        });
        
        const companyid = notificationSettingFormToSend.value.companyId;
        
        notificationSettingFormToSend.value.companyId = companyid == "" ? this.companyId : companyid ;
        this.notificationSettingsService.updateCurrent(notificationSettingFormToSend.value,this.companyId).pipe(takeUntil(this.unsubscribe$)).subscribe(settings => {
            this.initFormValue();
            this.showToast("Finalizado","Se actualizo exitosamente!",1,false)
        
        //         this.MailPriority1=settings.mailPriority1
        //         // this.notificationSettingForm.setValue({
        //         //     id: settings.id ,
        //         //     sendMailPriority1:  settings?.sendMailPriority1 ,
        //         //     mailPriority1:  settings?.mailPriority1.split(",") ,
        //         //     sendMailPriority2: settings?.sendMailPriority2 ,
        //         //     mailPriority2: settings?.mailPriority2.split(","),
        //         //     sendMailPriority3: settings?.sendMailPriority3 ,
        //         //     mailPriority3: settings?.mailPriority3.split(","),
        //         //     sendMailPriority4: settings?.sendMailPriority4 ,
        //         //     mailPriority4: settings?.mailPriority4.split(","),
        //         //     sendMailCoincidences: settings?.sendMailCoincidences ,
        //         //     mailCoincidences:  settings?.mailCoincidences.split(","),
        //         //     sendMailAdditionalServices:  settings?.sendMailAdditionalServices ,
        //         //     mailAdditionalServices:  settings?.mailAdditionalServices.split(","),
        //         //     sendMailAdministrative:  settings?.sendMailAdministrative,
        //         //     mailAministrative:  settings?.mailAministrative.split(","),
        //         //     sendMailRoi:  settings?.sendMailRoi,
        //         //     mailRoi:  settings?.mailRoi.split(","),
        //         //     companyId: settings.companyId ,

        //         // });
        },
        error=>{
            this.loadingCheckName=false;
            this.showToast("Error","No se pudo obtener nombre, por favor inténtelo más tarde",4,false)
            this.initFormValue();
            
        });
    }
    onTagRemove(tagToRemove: NbTagComponent,keyArray:string): void {
       // this.trees.delete(tagToRemove.text);    
    var arr =this.notificationSettingForm.controls[keyArray].value;

    const index: number = arr.indexOf(tagToRemove.text);
        if (index !== -1) {
            arr.splice(index, 1);
        }        
       //delete arr[tagToRemove.text];
       //arr.delete(tagToRemove.text);
    this.notificationSettingForm.get(keyArray).setValue(arr);
    if(this.notificationSettingForm.get(keyArray).value.length == 0){
        this.statusButton = true;
    };
        // this.notificationSettingForm.controls[keyArray]=this.notificationSettingForm.controls[keyArray].value.delete(tagToRemove.text)
    }
    
    onTagAdd({ value, input }: NbTagInputAddEvent,keyArray:string): void {
        if (value) {
            let arr: string[] = [];
            if(this.notificationSettingForm.controls[keyArray].value != ''){
                arr =this.notificationSettingForm.controls[keyArray].value;
                arr.push(value);
            }
            else{
                arr[0] = value;
            }
            this.notificationSettingForm.get(keyArray).setValue(arr);
            
            if(this.notificationSettingForm.get(keyArray).value.length > 0){
                this.statusButton = false;
            };
        }
        input.nativeElement.value = '';
    }
    ngOnInit() {
        this.initForm();
        this.initFormValue();
    }
    showToast(tittle,mesage:string,type,hasIcon){
        const icon = hasIcon ? {  } : { icon: '' };
        const position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
    const config = {
        status: this.types[type],
        destroyByClick: true,
        duration: 3000,
        position:position,
        preventDuplicates: false,
        ...icon,
        };
    
        this.index += 1;
        this.toastrService.show(
        mesage,
        tittle,
        config);
    }

    changeStatus($event){
        if($event.target.checked){
            this.statusButton = true;
        }
        else{
            this.statusButton = false;
        }
        
    }

}
