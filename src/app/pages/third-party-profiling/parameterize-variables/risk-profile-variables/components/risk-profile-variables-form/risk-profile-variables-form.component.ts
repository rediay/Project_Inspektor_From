import {Component, Input, OnInit, Optional} from '@angular/core';
import {NbDialogRef, NbToastrService, NbWindowRef} from "@nebular/theme";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParameterizeVariableService} from "../../../../backend/common/services/parameterize-variable.service";

@Component({
    selector: 'ngx-risk-profile-variables-form',
    templateUrl: './risk-profile-variables-form.component.html',
    styleUrls: ['./risk-profile-variables-form.component.scss']
})
export class RiskProfileVariablesFormComponent implements OnInit {

    constructor(protected toastrService: NbToastrService,
                @Optional() protected dialogRef: NbDialogRef<RiskProfileVariablesFormComponent>,
                @Optional() protected windowRef: NbWindowRef,
                private parameterizeVariableService: ParameterizeVariableService,
                private fb: FormBuilder) {
    }

    @Input() riskProfileVariables: any;
    variableForm: FormGroup;
    nameError = null;
    weightError = null;

    get name() {
        return this.variableForm.get('name');
    }

    get weight() {
        return this.variableForm.get('weight');
    }

    ngOnInit(): void {
        this.initVariableForm();
        this.loadVariable();
    }

    initVariableForm() {
        this.variableForm = this.fb.group({
            id: this.fb.control(''),
            name: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            weight: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        });
    }

    loadVariable() {
        const id = this.riskProfileVariables.id ? this.riskProfileVariables.id : '';
        const name = this.riskProfileVariables.name ? this.riskProfileVariables.name : '';
        const weight = this.riskProfileVariables.weight ? this.riskProfileVariables.weight : '';

        this.variableForm.setValue({
            id: id,
            name: name,
            weight: weight
        })
    }

    save() {
        const data = this.variableForm.value;
        const id = data.id;

        this.parameterizeVariableService.updateRiskProfileVariable(id, data).subscribe((response) => {

            this.toastrService.success('', '¡Registro exitoso!', {
                icon: '',
            });

            this.dialogRef.close(response)


            /*this.windowRef.onClose.subscribe(response => {
                console.log('response', response);
            })*/
            // console.log('componentRef', this.windowRef.componentRef);
            // this.dialogRef.close(response)

        }, error => {
            this.toastrService.danger('', 'Error al guardar el registro', {
                icon: '',
            });
        })
    }
}
