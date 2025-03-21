(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["third-party-profiling-third-party-profiling-module"],{

/***/ "AChg":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/third-party-profiling/parameterize-variables/category-variables/components/category-variables-form/category-variables-form.component.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: CategoryVariablesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryVariablesFormComponent", function() { return CategoryVariablesFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _backend_common_services_parameterize_variable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../backend/common/services/parameterize-variable.service */ "yxBn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@components/validation-message/validation-message.component */ "6edl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









function CategoryVariablesFormComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.nameError, " ");
} }
class CategoryVariablesFormComponent {
    constructor(toastrService, dialogRef, windowRef, parameterizeVariableService, fb) {
        this.toastrService = toastrService;
        this.dialogRef = dialogRef;
        this.windowRef = windowRef;
        this.parameterizeVariableService = parameterizeVariableService;
        this.fb = fb;
        this.nameError = null;
        this.weightError = null;
    }
    get name() {
        return this.categoryVariableForm.get('name');
    }
    get weight() {
        return this.categoryVariableForm.get('weight');
    }
    ngOnInit() {
        this.initCategoryVariableForm();
        this.loadVariable();
    }
    initCategoryVariableForm() {
        this.categoryVariableForm = this.fb.group({
            id: this.fb.control(''),
            name: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]),
            weight: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]),
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
        });
    }
    save() {
        const data = this.categoryVariableForm.value;
        const id = data.id;
        data.riskProfileVariableId = this.riskProfileVariableId;
        data.personTypeId = this.personTypeId;
        this.parameterizeVariableService.updateCategoryVariable(id, data).subscribe(response => {
            this.toastrService.success('', '¡Registro exitoso!', {
                icon: '',
            });
            this.dialogRef.close(response);
        }, error => {
            this.toastrService.danger('', 'Error al guardar el registro', {
                icon: '',
            });
        });
    }
}
CategoryVariablesFormComponent.ɵfac = function CategoryVariablesFormComponent_Factory(t) { return new (t || CategoryVariablesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbWindowRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_backend_common_services_parameterize_variable_service__WEBPACK_IMPORTED_MODULE_2__["ParameterizeVariableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CategoryVariablesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CategoryVariablesFormComponent, selectors: [["ngx-category-variables-form"]], inputs: { categoryVariables: "categoryVariables" }, decls: 20, vars: 9, consts: [[1, "col-lg-12"], [3, "formGroup"], [1, "form-group"], ["for", "name", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "name", "formControlName", "name", "placeholder", "Ingrese el n\u00FAmero Documento", 3, "status"], ["label", "First Name", "minLength", "3", "maxLength", "20", 3, "showMinLength", "showMaxLength"], ["class", "error-message caption status-danger", 4, "ngIf"], ["for", "weight", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "weight", "formControlName", "weight", "placeholder", "Ingrese el nombre", 1, "form-control", 3, "status"], ["nbButton", "", "status", "primary", "hero", "", 3, "disabled", "click"], [1, "error-message", "caption", "status-danger"]], template: function CategoryVariablesFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Editar categor\u00EDas de variable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Nombre categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ngx-validation-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CategoryVariablesFormComponent_p_11_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Peso");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "ngx-validation-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoryVariablesFormComponent_Template_button_click_18_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.categoryVariableForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", (ctx.name == null ? null : ctx.name.hasError("minlength")) || (ctx.name == null ? null : ctx.name.hasError("maxlength")) ? "danger" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showMinLength", ctx.name == null ? null : ctx.name.hasError("minlength"))("showMaxLength", ctx.name == null ? null : ctx.name.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nameError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", (ctx.weight == null ? null : ctx.weight.hasError("minlength")) || (ctx.weight == null ? null : ctx.weight.hasError("maxlength")) ? "danger" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showMinLength", ctx.weight == null ? null : ctx.weight.hasError("minlength"))("showMaxLength", ctx.weight == null ? null : ctx.weight.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.categoryVariableForm.valid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__["NgxValidationMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS12YXJpYWJsZXMtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "F2yh":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/third-party-profiling/third-party-profiling-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ThirdPartyProfilingRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyProfilingRoutingModule", function() { return ThirdPartyProfilingRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _third_party_profiling_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-party-profiling.component */ "ZSlo");
/* harmony import */ var _parameterize_variables_risk_profile_variables_risk_profile_variables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameterize-variables/risk-profile-variables/risk-profile-variables.component */ "ub9e");
/* harmony import */ var _parameterize_variables_category_variables_category_variables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameterize-variables/category-variables/category-variables.component */ "p2PC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _third_party_profiling_component__WEBPACK_IMPORTED_MODULE_1__["ThirdPartyProfilingComponent"],
        children: [
            {
                path: 'parameterize-variables/risk-profile-variables',
                component: _parameterize_variables_risk_profile_variables_risk_profile_variables_component__WEBPACK_IMPORTED_MODULE_2__["RiskProfileVariablesComponent"],
            },
            {
                path: 'parameterize-variables/category-variables/:id',
                component: _parameterize_variables_category_variables_category_variables_component__WEBPACK_IMPORTED_MODULE_3__["CategoryVariablesComponent"],
            },
        ],
    },
];
class ThirdPartyProfilingRoutingModule {
}
ThirdPartyProfilingRoutingModule.ɵfac = function ThirdPartyProfilingRoutingModule_Factory(t) { return new (t || ThirdPartyProfilingRoutingModule)(); };
ThirdPartyProfilingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ThirdPartyProfilingRoutingModule });
ThirdPartyProfilingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ThirdPartyProfilingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routedComponents = [
    _third_party_profiling_component__WEBPACK_IMPORTED_MODULE_1__["ThirdPartyProfilingComponent"],
];


/***/ }),

/***/ "IPVU":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/third-party-profiling/backend/common/api/parameterize-variable.api.ts ***!
  \*********************************************************************************************/
/*! exports provided: ParameterizeVariableApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterizeVariableApi", function() { return ParameterizeVariableApi; });
/* harmony import */ var _utils_custom_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/custom-http.service */ "K2vf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ParameterizeVariableApi {
    constructor(api) {
        this.api = api;
        this.apiRiskProfileVariableController = 'third-party-profiling/parameterize-variables/risk-profile-variables';
        this.apiCategoryVariablesController = 'third-party-profiling/parameterize-variables/category-variables';
        this.apiCategoryVariablesDataSourceController = 'third-party-profiling/parameterize-variables/risk-profile-variables';
    }
    getRiskProfileVariableServerDataSource() {
        return this.api.getServerDataSource(`${this.apiRiskProfileVariableController}`);
    }
    getCategoryVariablesServerDataSource(riskProfileVariableId, personTypeId) {
        const endpoint = `${this.apiCategoryVariablesDataSourceController}/${riskProfileVariableId}/category-variables/person-type/${personTypeId}`;
        return this.api.getServerDataSource(`${endpoint}`);
    }
    updateRiskProfileVariable(id, data) {
        return this.api.put(`${this.apiRiskProfileVariableController}/${id}`, data);
    }
    updateCategoryVariable(id, data) {
        return this.api.put(`${this.apiCategoryVariablesController}/${id}`, data);
    }
}
ParameterizeVariableApi.ɵfac = function ParameterizeVariableApi_Factory(t) { return new (t || ParameterizeVariableApi)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_utils_custom_http_service__WEBPACK_IMPORTED_MODULE_0__["CustomHttpService"])); };
ParameterizeVariableApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ParameterizeVariableApi, factory: ParameterizeVariableApi.ɵfac });


/***/ }),

/***/ "JE2Q":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/third-party-profiling/third-party-profiling.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ThirdPartyProfilingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyProfilingModule", function() { return ThirdPartyProfilingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _third_party_profiling_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-party-profiling-routing.module */ "F2yh");
/* harmony import */ var _third_party_profiling_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./third-party-profiling.component */ "ZSlo");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@components/components.module */ "h+2I");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _parameterize_variables_risk_profile_variables_risk_profile_variables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parameterize-variables/risk-profile-variables/risk-profile-variables.component */ "ub9e");
/* harmony import */ var _parameterize_variables_risk_profile_variables_components_risk_profile_variables_form_risk_profile_variables_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parameterize-variables/risk-profile-variables/components/risk-profile-variables-form/risk-profile-variables-form.component */ "JpbP");
/* harmony import */ var _utils_custom_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/custom-http.service */ "K2vf");
/* harmony import */ var _backend_common_api_parameterize_variable_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./backend/common/api/parameterize-variable.api */ "IPVU");
/* harmony import */ var _backend_common_services_parameterize_variable_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./backend/common/services/parameterize-variable.service */ "yxBn");
/* harmony import */ var _parameterize_variables_category_variables_category_variables_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parameterize-variables/category-variables/category-variables.component */ "p2PC");
/* harmony import */ var _parameterize_variables_category_variables_components_category_variables_form_category_variables_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parameterize-variables/category-variables/components/category-variables-form/category-variables-form.component */ "AChg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class ThirdPartyProfilingModule {
}
ThirdPartyProfilingModule.ɵfac = function ThirdPartyProfilingModule_Factory(t) { return new (t || ThirdPartyProfilingModule)(); };
ThirdPartyProfilingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: ThirdPartyProfilingModule });
ThirdPartyProfilingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        _utils_custom_http_service__WEBPACK_IMPORTED_MODULE_9__["CustomHttpService"],
        _backend_common_api_parameterize_variable_api__WEBPACK_IMPORTED_MODULE_10__["ParameterizeVariableApi"],
        _backend_common_services_parameterize_variable_service__WEBPACK_IMPORTED_MODULE_11__["ParameterizeVariableService"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbWindowService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _third_party_profiling_routing_module__WEBPACK_IMPORTED_MODULE_1__["ThirdPartyProfilingRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](ThirdPartyProfilingModule, { declarations: [_third_party_profiling_component__WEBPACK_IMPORTED_MODULE_2__["ThirdPartyProfilingComponent"],
        _parameterize_variables_risk_profile_variables_risk_profile_variables_component__WEBPACK_IMPORTED_MODULE_7__["RiskProfileVariablesComponent"],
        _parameterize_variables_risk_profile_variables_components_risk_profile_variables_form_risk_profile_variables_form_component__WEBPACK_IMPORTED_MODULE_8__["RiskProfileVariablesFormComponent"],
        _parameterize_variables_category_variables_category_variables_component__WEBPACK_IMPORTED_MODULE_12__["CategoryVariablesComponent"],
        _parameterize_variables_category_variables_components_category_variables_form_category_variables_form_component__WEBPACK_IMPORTED_MODULE_13__["CategoryVariablesFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _third_party_profiling_routing_module__WEBPACK_IMPORTED_MODULE_1__["ThirdPartyProfilingRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();


/***/ }),

/***/ "JpbP":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/third-party-profiling/parameterize-variables/risk-profile-variables/components/risk-profile-variables-form/risk-profile-variables-form.component.ts ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: RiskProfileVariablesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskProfileVariablesFormComponent", function() { return RiskProfileVariablesFormComponent; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _backend_common_services_parameterize_variable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../backend/common/services/parameterize-variable.service */ "yxBn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@components/validation-message/validation-message.component */ "6edl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









function RiskProfileVariablesFormComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.nameError, " ");
} }
class RiskProfileVariablesFormComponent {
    constructor(toastrService, dialogRef, windowRef, parameterizeVariableService, fb) {
        this.toastrService = toastrService;
        this.dialogRef = dialogRef;
        this.windowRef = windowRef;
        this.parameterizeVariableService = parameterizeVariableService;
        this.fb = fb;
        this.nameError = null;
        this.weightError = null;
    }
    get name() {
        return this.variableForm.get('name');
    }
    get weight() {
        return this.variableForm.get('weight');
    }
    ngOnInit() {
        this.initVariableForm();
        this.loadVariable();
    }
    initVariableForm() {
        this.variableForm = this.fb.group({
            id: this.fb.control(''),
            name: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
            weight: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
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
        });
    }
    save() {
        const data = this.variableForm.value;
        const id = data.id;
        this.parameterizeVariableService.updateRiskProfileVariable(id, data).subscribe((response) => {
            this.toastrService.success('', '¡Registro exitoso!', {
                icon: '',
            });
            this.dialogRef.close(response);
            /*this.windowRef.onClose.subscribe(response => {
                console.log('response', response);
            })*/
            // console.log('componentRef', this.windowRef.componentRef);
            // this.dialogRef.close(response)
        }, error => {
            this.toastrService.danger('', 'Error al guardar el registro', {
                icon: '',
            });
        });
    }
}
RiskProfileVariablesFormComponent.ɵfac = function RiskProfileVariablesFormComponent_Factory(t) { return new (t || RiskProfileVariablesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbWindowRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_backend_common_services_parameterize_variable_service__WEBPACK_IMPORTED_MODULE_2__["ParameterizeVariableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RiskProfileVariablesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RiskProfileVariablesFormComponent, selectors: [["ngx-risk-profile-variables-form"]], inputs: { riskProfileVariables: "riskProfileVariables" }, decls: 20, vars: 9, consts: [[1, "col-lg-12"], [3, "formGroup"], [1, "form-group"], ["for", "name", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "name", "formControlName", "name", "placeholder", "Ingrese el n\u00FAmero Documento", 3, "status"], ["label", "First Name", "minLength", "3", "maxLength", "20", 3, "showMinLength", "showMaxLength"], ["class", "error-message caption status-danger", 4, "ngIf"], ["for", "weight", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "weight", "formControlName", "weight", "placeholder", "Ingrese el nombre", 1, "form-control", 3, "status"], ["nbButton", "", "status", "primary", "hero", "", 3, "disabled", "click"], [1, "error-message", "caption", "status-danger"]], template: function RiskProfileVariablesFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Editar variable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Nombre variable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "ngx-validation-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RiskProfileVariablesFormComponent_p_11_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Peso");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "ngx-validation-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RiskProfileVariablesFormComponent_Template_button_click_18_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.variableForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", (ctx.name == null ? null : ctx.name.hasError("minlength")) || (ctx.name == null ? null : ctx.name.hasError("maxlength")) ? "danger" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showMinLength", ctx.name == null ? null : ctx.name.hasError("minlength"))("showMaxLength", ctx.name == null ? null : ctx.name.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nameError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", (ctx.weight == null ? null : ctx.weight.hasError("minlength")) || (ctx.weight == null ? null : ctx.weight.hasError("maxlength")) ? "danger" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showMinLength", ctx.weight == null ? null : ctx.weight.hasError("minlength"))("showMaxLength", ctx.weight == null ? null : ctx.weight.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.variableForm.valid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__["NgxValidationMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaXNrLXByb2ZpbGUtdmFyaWFibGVzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZSlo":
/*!********************************************************************************!*\
  !*** ./src/app/pages/third-party-profiling/third-party-profiling.component.ts ***!
  \********************************************************************************/
/*! exports provided: ThirdPartyProfilingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPartyProfilingComponent", function() { return ThirdPartyProfilingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ThirdPartyProfilingComponent {
    constructor() { }
    ngOnInit() {
    }
}
ThirdPartyProfilingComponent.ɵfac = function ThirdPartyProfilingComponent_Factory(t) { return new (t || ThirdPartyProfilingComponent)(); };
ThirdPartyProfilingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThirdPartyProfilingComponent, selectors: [["ngx-third-party-profiling"]], decls: 1, vars: 0, template: function ThirdPartyProfilingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGlyZC1wYXJ0eS1wcm9maWxpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "p2PC":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/third-party-profiling/parameterize-variables/category-variables/category-variables.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: CategoryVariablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryVariablesComponent", function() { return CategoryVariablesComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _backend_common_services_parameterize_variable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../backend/common/services/parameterize-variable.service */ "yxBn");
/* harmony import */ var _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/pagination-filter */ "36nv");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _components_category_variables_form_category_variables_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/category-variables-form/category-variables-form.component */ "AChg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");














class CategoryVariablesComponent {
    constructor(location, route, windowService, dialogService, parameterizeVariableService) {
        this.location = location;
        this.route = route;
        this.windowService = windowService;
        this.dialogService = dialogService;
        this.parameterizeVariableService = parameterizeVariableService;
        this.searchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.search = '';
        this.paginationFilter = new _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_2__["PaginationFilter"]();
        this.settings = {
            mode: 'external',
            actions: {
                add: false,
                edit: true,
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
                id: {
                    title: 'Código',
                    type: 'string',
                    filter: false,
                },
                name: {
                    title: 'Nombre',
                    type: 'string',
                    filter: false,
                },
                weight: {
                    title: 'Peso',
                    type: 'string',
                    filter: false,
                },
            },
        };
    }
    ngOnInit() {
        this.searchTextChanged
            // .debounceTime(250)
            // .distinctUntilChanged()
            .subscribe((query) => {
            this.source.setSearchQuery(query);
        });
    }
    back($event) {
        $event.preventDefault();
        this.location.back();
    }
    onEdit($event) {
        const variable = $event.data;
        //this.windowService.open(CategoryVariablesFormComponent, {title: 'Categorías de variable'});
        /*this.windowService.open(CategoryVariablesFormComponent, {
            context: {
                title: 'Categorías de variable',
                categoryVariables: variable
            }
        });*/
        const dialogRef = this.dialogService.open(_components_category_variables_form_category_variables_form_component__WEBPACK_IMPORTED_MODULE_6__["CategoryVariablesFormComponent"], {
            context: {
                categoryVariables: variable,
            },
        });
        dialogRef.onClose.subscribe(() => {
            this.source.refresh();
        });
    }
    onPersonTypeChange(personTypeId) {
        const riskProfileVariableId = this.route.snapshot.paramMap.get('id');
        this.source = this.parameterizeVariableService.getCategoryVariablesServerDataSource(+riskProfileVariableId, personTypeId);
        /*this.source = this.ge
        console.log('id', id);
        console.log('event', value);*/
    }
    searchCategoryVariables($event) {
        this.searchTextChanged.next($event.target.value);
    }
}
CategoryVariablesComponent.ɵfac = function CategoryVariablesComponent_Factory(t) { return new (t || CategoryVariablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbWindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_backend_common_services_parameterize_variable_service__WEBPACK_IMPORTED_MODULE_1__["ParameterizeVariableService"])); };
CategoryVariablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CategoryVariablesComponent, selectors: [["ngx-category-variables"]], decls: 25, vars: 4, consts: [[1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"], [1, "form-group"], ["for", "personType", 1, "label"], ["id", "personType", "selected", "", "fullWidth", "", 3, "selectedChange"], ["value", ""], ["value", "1"], ["value", "2"], [1, "row", "mb-3"], [1, "col-md-12"], ["nbInput", "", 3, "ngModel", "ngModelChange", "keyup"], ["ghost", "", "nbButton", "", "nbSuffix", ""], ["pack", "eva", 3, "icon"], [1, "example-smart-table", 3, "settings", "source", "edit"]], template: function CategoryVariablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CategoryVariablesComponent_Template_a_click_3_listener($event) { return ctx.back($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "nb-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Categor\u00EDas de variables ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Tipo Persona");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "nb-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedChange", function CategoryVariablesComponent_Template_nb_select_selectedChange_11_listener($event) { return ctx.onPersonTypeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "nb-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Seleccione...");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "nb-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Natural");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "nb-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Jur\u00EDdica");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CategoryVariablesComponent_Template_input_ngModelChange_21_listener($event) { return ctx.search = $event; })("keyup", function CategoryVariablesComponent_Template_input_keyup_21_listener($event) { return ctx.searchCategoryVariables($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "nb-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "ng2-smart-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("edit", function CategoryVariablesComponent_Template_ng2_smart_table_edit_24_listener($event) { return ctx.onEdit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "search-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSuffixDirective"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS12YXJpYWJsZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ub9e":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/third-party-profiling/parameterize-variables/risk-profile-variables/risk-profile-variables.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: RiskProfileVariablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskProfileVariablesComponent", function() { return RiskProfileVariablesComponent; });
/* harmony import */ var _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/pagination-filter */ "36nv");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_risk_profile_variables_form_risk_profile_variables_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/risk-profile-variables-form/risk-profile-variables-form.component */ "JpbP");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _backend_common_services_parameterize_variable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../backend/common/services/parameterize-variable.service */ "yxBn");
/* harmony import */ var _components_editors_custom_icon_smart_table_cell_custom_icon_smart_table_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@components/editors/custom-icon-smart-table-cell/custom-icon-smart-table-cell.component */ "Zvx5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");













class RiskProfileVariablesComponent {
    constructor(router, windowService, dialogService, parameterizeVariableService) {
        this.router = router;
        this.windowService = windowService;
        this.dialogService = dialogService;
        this.parameterizeVariableService = parameterizeVariableService;
        this.searchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.search = '';
        this.paginationFilter = new _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_0__["PaginationFilter"]();
        this.settings = {
            mode: 'external',
            actions: {
                add: false,
                edit: true,
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
                name: {
                    title: 'Nombre',
                    type: 'string',
                    filter: false,
                },
                weight: {
                    title: 'Peso',
                    type: 'string',
                    filter: false,
                },
                categories: {
                    title: 'Categorías',
                    type: 'custom',
                    filter: false,
                    renderComponent: _components_editors_custom_icon_smart_table_cell_custom_icon_smart_table_cell_component__WEBPACK_IMPORTED_MODULE_6__["CustomIconSmartTableCellComponent"],
                    onComponentInitFunction: (instance) => {
                        instance.save.subscribe(row => {
                            this.onOpenCategoryVariables(row);
                        });
                    }
                },
            },
        };
        this.source = this.parameterizeVariableService.getRiskProfileVariableServerDataSource();
    }
    ngOnInit() {
        this.searchTextChanged
            // .debounceTime(250)
            // .distinctUntilChanged()
            .subscribe((query) => {
            this.source.setSearchQuery(query);
        });
    }
    onEdit($event) {
        const variable = $event.data;
        /*const windowRef = this.windowService.open(RiskProfileVariablesFormComponent, {context: {
                title: 'Editar variable de perfiles de riesgo cali',
                riskProfileVariables: variable
            }});

        windowRef.onClose.subscribe((result) => {
            console.log('result', result);
        })*/
        const dialogRef = this.dialogService.open(_components_risk_profile_variables_form_risk_profile_variables_form_component__WEBPACK_IMPORTED_MODULE_3__["RiskProfileVariablesFormComponent"], {
            context: {
                riskProfileVariables: variable,
            },
        });
        dialogRef.onClose.subscribe((result) => {
            this.source.refresh();
        });
    }
    onOpenCategoryVariables(data) {
        this.router.navigate([`/pages/third-party-profiling/parameterize-variables/category-variables/${data.id}`]);
    }
    searchRiskProfileVariables($event) {
        this.searchTextChanged.next($event.target.value);
    }
}
RiskProfileVariablesComponent.ɵfac = function RiskProfileVariablesComponent_Factory(t) { return new (t || RiskProfileVariablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbWindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_backend_common_services_parameterize_variable_service__WEBPACK_IMPORTED_MODULE_5__["ParameterizeVariableService"])); };
RiskProfileVariablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RiskProfileVariablesComponent, selectors: [["ngx-risk-profile-variables"]], decls: 11, vars: 4, consts: [[1, "row", "mb-3"], [1, "col-md-12"], ["nbInput", "", 3, "ngModel", "ngModelChange", "keyup"], ["ghost", "", "nbButton", "", "nbSuffix", ""], ["pack", "eva", 3, "icon"], [1, "example-smart-table", 3, "settings", "source", "edit"]], template: function RiskProfileVariablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Variables de perfiles de riesgo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function RiskProfileVariablesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.search = $event; })("keyup", function RiskProfileVariablesComponent_Template_input_keyup_7_listener($event) { return ctx.searchRiskProfileVariables($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ng2-smart-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("edit", function RiskProfileVariablesComponent_Template_ng2_smart_table_edit_10_listener($event) { return ctx.onEdit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "search-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSuffixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaXNrLXByb2ZpbGUtdmFyaWFibGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "yxBn":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/third-party-profiling/backend/common/services/parameterize-variable.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: ParameterizeVariableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterizeVariableService", function() { return ParameterizeVariableService; });
/* harmony import */ var _api_parameterize_variable_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/parameterize-variable.api */ "IPVU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ParameterizeVariableService {
    constructor(api) {
        this.api = api;
    }
    getRiskProfileVariableServerDataSource() {
        return this.api.getRiskProfileVariableServerDataSource();
    }
    getCategoryVariablesServerDataSource(riskProfileVariableId, personTypeId) {
        return this.api.getCategoryVariablesServerDataSource(riskProfileVariableId, personTypeId);
    }
    updateRiskProfileVariable(id, data) {
        return this.api.updateRiskProfileVariable(id, data);
    }
    updateCategoryVariable(id, data) {
        return this.api.updateCategoryVariable(id, data);
    }
}
ParameterizeVariableService.ɵfac = function ParameterizeVariableService_Factory(t) { return new (t || ParameterizeVariableService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_parameterize_variable_api__WEBPACK_IMPORTED_MODULE_0__["ParameterizeVariableApi"])); };
ParameterizeVariableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ParameterizeVariableService, factory: ParameterizeVariableService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=third-party-profiling-third-party-profiling-module-es2015.js.map