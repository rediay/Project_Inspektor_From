import {Component, EventEmitter, Input, OnInit, Optional, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbDialogRef, NbToastrService, NbWindowRef} from "@nebular/theme";
import {ParameterizeVariableService} from "../../../../backend/common/services/parameterize-variable.service";

@Component({
    selector: 'ngx-category-variables-form',
    templateUrl: './category-variables-form.component.html',
    styleUrls: ['./category-variables-form.component.scss']
})
export class CategoryVariablesFormComponent implements OnInit {

    categoryVariableForm: FormGroup;
    nameError = null;
    weightError = null;
    private riskProfileVariableId: number;
    private personTypeId: number;
    @Input() categoryVariables: any;

    get name() {
        return this.categoryVariableForm.get('name');
    }

    get weight() {
        return this.categoryVariableForm.get('weight');
    }

    constructor(protected toastrService: NbToastrService,
                @Optional() protected dialogRef: NbDialogRef<CategoryVariablesFormComponent>,
                @Optional() protected windowRef: NbWindowRef,
                private parameterizeVariableService: ParameterizeVariableService,
                private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.initCategoryVariableForm();
        this.loadVariable();
    }

    initCategoryVariableForm() {
        this.categoryVariableForm = this.fb.group({
            id: this.fb.control(''),
            name: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            weight: this.fb.control('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
        });
    }

    loadVariable() {
        const id = this.categoryVariables.id ? this.categoryVariables.id : '';
        const name = this.categoryVariables.name ? this.categoryVariables.name : '';
        const weight = this.categoryVariables.weight ? this.categoryVariables.weight : '';

        this.riskProfileVariableId = this.categoryVariables.riskProfileVariableId;
        this.personTypeId = this.categoryVariables.personTypeId;

        this.categoryVariableForm.setValue({
            id: id,
            name: name,
            weight: weight,
        })
    }

    save() {
        const data = this.categoryVariableForm.value;
        const id = data.id;

        data.riskProfileVariableId = this.riskProfileVariableId
        data.personTypeId = this.personTypeId

        this.parameterizeVariableService.updateCategoryVariable(id, data).subscribe(response => {

            this.toastrService.success('', '¡Registro exitoso!', {
                icon: '',
            });

            this.dialogRef.close(response)

        }, error => {
            this.toastrService.danger('', 'Error al guardar el registro', {
                icon: '',
            });
        })
    }
}
