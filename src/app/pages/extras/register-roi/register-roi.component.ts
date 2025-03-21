import {Component, OnInit} from '@angular/core';
import {EventRoiService} from "../backend/common/services/event-roi.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventRoi} from "../interfaces/event-roi";
import {NbToastrService} from "@nebular/theme";

@Component({
    selector: 'ngx-register-roi',
    templateUrl: './register-roi.component.html',
    styleUrls: ['./register-roi.component.scss']
})
export class RegisterRoiComponent implements OnInit {

    types = []
    statuses = []
    eventRoiForm: FormGroup;

    get title() {
        return this.eventRoiForm.get('title');
    }

    get transactionDate() {
        return this.eventRoiForm.get('transactionDate');
    }

    get estimatedAmount() {
        return this.eventRoiForm.get('estimatedAmount');
    }

    get identification() {
        return this.eventRoiForm.get('identification');
    }

    get observations() {
        return this.eventRoiForm.get('observations');
    }

    get eventRoiOperationTypeId() {
        return this.eventRoiForm.get('eventRoiOperationTypeId');
    }

    get eventRoiOperationStatusId() {
        return this.eventRoiForm.get('eventRoiOperationStatusId');
    }

    constructor(private eventRoiService: EventRoiService,
                protected toastrService: NbToastrService,
                private fb: FormBuilder) {

    }

    ngOnInit(): void {
        this.eventRoiService.getEventRoiTypes().subscribe(response => {
            this.types = response.data
        }, error => {
        });

        this.eventRoiService.getEventRoiStatuses().subscribe(response => {
            this.statuses = response.data
        }, error => {
        });

        this.initEventRoiForm();
    }

    initEventRoiForm() {
        this.eventRoiForm = this.fb.group({
            title: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
            transactionDate: this.fb.control('', [Validators.required]),
            estimatedAmount: this.fb.control(0),
            identification: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
            observations: this.fb.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]),
            operationTypeId: this.fb.control('', [Validators.required]),
            operationStatusId: this.fb.control('', [Validators.required]),
        });

        /*this.eventRoiForm = this.fb.group({
            title: this.fb.control('Hola es una preuba'),
            transactionDate: this.fb.control(''),
            estimatedAmount: this.fb.control(3000),
            identification: this.fb.control('131231231', [Validators.minLength(3), Validators.maxLength(20)]),
            observations: this.fb.control('Cali es una bonita ciudad', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]),
            operationTypeId: this.fb.control(1, [Validators.required]),
            operationStatusId: this.fb.control(2, [Validators.required]),
        });*/
    }

    save() {
        const eventRoi: EventRoi = this.eventRoiForm.value;
        this.eventRoiService.create(eventRoi).subscribe(() => {
            this.eventRoiForm.reset();
            this.toastrService.success('', '¡Registro exitoso!', {
                icon: '',
            });
        }, error => {
        })
    }
}
