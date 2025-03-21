(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["own-lists-own-lists-module"],{

/***/ "0vdB":
/*!*******************************************************************!*\
  !*** ./src/app/pages/own-lists/components/type/type.component.ts ***!
  \*******************************************************************/
/*! exports provided: TypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeComponent", function() { return TypeComponent; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _models_OwnListTypesDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/OwnListTypesDTO */ "ddaW");
/* harmony import */ var _services_typeownlists_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/typeownlists.service */ "otP/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");








class TypeComponent {
    //#endregion
    constructor(toastrService, _typeownlistsService) {
        this.toastrService = toastrService;
        this._typeownlistsService = _typeownlistsService;
        this.index = 1;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
        this.status = 'primary';
        this.title = 'HI there!';
        this.content = `I'm cool toaster!`;
        this.types = [
            'primary',
            'success',
            'info',
            'warning',
            'danger',
        ];
        this.positions = [
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].TOP_RIGHT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].TOP_LEFT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].BOTTOM_LEFT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].BOTTOM_RIGHT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].TOP_END,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].TOP_START,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].BOTTOM_END,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].BOTTOM_START,
        ];
        this.quotes = [
            { title: null, body: 'We rock at Angular' },
            { title: null, body: 'Titles are not always needed' },
            { title: null, body: 'Toastr rock!' },
        ];
        //#endregion
        //#region Variables tabla
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
        this.data = new _models_OwnListTypesDTO__WEBPACK_IMPORTED_MODULE_2__["OwnListsTypesDTO"]();
        this.settings = {
            actions: {
                add: true,
                edit: true,
                delete: true,
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                name: {
                    title: 'Nombre Tipo Lista Propia',
                    type: 'string',
                    filter: false,
                }
            },
        };
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.getOwnListsTypes();
    }
    onUserRowSelect(event) {
        var selectedRows = event.selected;
    }
    //#region Metodos SmartTableData
    onSaveConfirm($event) {
        console.log($event);
        var datatemporal = $event.source.data;
        if (!this.isObjEmpty(datatemporal)) {
            this.updateOwnLists($event.newData);
            $event.confirm.resolve($event.newData);
        }
        else {
            $event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        console.log(event);
        var datatemporal = event.newData;
        if (!this.isObjEmpty(datatemporal)) {
            this.createOwnList(event.newData);
            event.confirm.resolve(event.newData);
            setTimeout(() => { window.location.reload(); }, 3000);
        }
        else {
            //this.showToast("danger", "Error","Debe ingresar todos los valores");
            event.confirm.reject();
        }
    }
    onDeleteConfirm(event) {
        if (window.confirm('Esta seguro de eliminar el registro')) {
            event.confirm.resolve();
            this.deleteOwnList(event.data.id.toString());
        }
        else {
            event.confirm.reject();
        }
        console.log(event.data.id);
    }
    onEdit(event) {
        console.log(event);
    }
    onRowSelect(event) {
        console.log(event);
    }
    //#endregion
    //#region Validacion
    //Todo: Valida si los registro de la tabla estan vacios
    isObjEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }
    //Todo : Muestra toast segun mensaje
    showToast(type, title, body) {
        const hasIcon = this.hasIcon ? {} : { icon: 'alert-circle-outline' };
        const config = Object.assign({ status: type, destroyByClick: this.destroyByClick, duration: this.duration, position: this.position, preventDuplicates: this.preventDuplicates }, hasIcon);
        const titleContent = title ? `. ${title}` : '';
        this.index += 1;
        this.toastrService.show(body, `Toast ${this.index}${titleContent}`, config);
    }
    //#endregion
    //#region Servicios
    //#region Get
    getOwnListsTypes(CompanyId) {
        this._typeownlistsService.getOwnListsTypes("1").subscribe((response) => {
            this.data = response;
            this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"](this.data);
        });
    }
    //endregion
    //#region Post
    createOwnList(ownListsDTO) {
        this._typeownlistsService.createOwnList(ownListsDTO).subscribe(res => {
            this.showToast("success", null, "Guardado Exitoso");
        });
    }
    //endregion
    //#region Update
    updateOwnLists(ownListsDTO) {
        this._typeownlistsService.updateOwnLists(ownListsDTO).subscribe(res => {
            this.showToast("success", null, "Actualizacion Exitosa");
            console.log("Enviado");
        });
    }
    //endregion
    //#region Delete
    deleteOwnList(id) {
        this._typeownlistsService.deleteOwnList(id).subscribe(res => {
            this.showToast("success", null, "Eliminado Exitoso");
            console.log("Enviado");
        });
    }
}
TypeComponent.ɵfac = function TypeComponent_Factory(t) { return new (t || TypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_typeownlists_service__WEBPACK_IMPORTED_MODULE_3__["TypeownlistsService"])); };
TypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TypeComponent, selectors: [["ngx-type"]], decls: 6, vars: 2, consts: [[1, "example-smart-table", 3, "settings", "source", "deleteConfirm", "editConfirm", "createConfirm", "rowSelect"], ["table", ""]], template: function TypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " TIPO DE LISTAS PROPIAS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ng2-smart-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("deleteConfirm", function TypeComponent_Template_ng2_smart_table_deleteConfirm_4_listener($event) { return ctx.onDeleteConfirm($event); })("editConfirm", function TypeComponent_Template_ng2_smart_table_editConfirm_4_listener($event) { return ctx.onSaveConfirm($event); })("createConfirm", function TypeComponent_Template_ng2_smart_table_createConfirm_4_listener($event) { return ctx.onCreateConfirm($event); })("rowSelect", function TypeComponent_Template_ng2_smart_table_rowSelect_4_listener($event) { return ctx.onRowSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.data);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "1HzU":
/*!***********************************************************************!*\
  !*** ./src/app/pages/own-lists/components/manage/manage.component.ts ***!
  \***********************************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _models_OwnListDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/OwnListDTO */ "CE/9");
/* harmony import */ var _models_OwnListTypesDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/OwnListTypesDTO */ "ddaW");
/* harmony import */ var _services_manage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/manage.service */ "3ADv");
/* harmony import */ var _services_typeownlists_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/typeownlists.service */ "otP/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _load_load_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../load/load.component */ "uly0");













function ManageComponent_ngx_load_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngx-load", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSuccess", function ManageComponent_ngx_load_6_Template_ngx_load_onSuccess_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.getOwnLists(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ManageComponent {
    //#endregion
    constructor(toastrService, _manageService, _typeownlistsService) {
        this.toastrService = toastrService;
        this._manageService = _manageService;
        this._typeownlistsService = _typeownlistsService;
        this.index = 1;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
        this.status = 'primary';
        this.title = 'HI there!';
        this.content = `I'm cool toaster!`;
        this.types = [
            'primary',
            'success',
            'info',
            'warning',
            'danger',
        ];
        this.positions = [
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].TOP_RIGHT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].TOP_LEFT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].BOTTOM_LEFT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].BOTTOM_RIGHT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].TOP_END,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].TOP_START,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].BOTTOM_END,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].BOTTOM_START,
        ];
        this.quotes = [
            { title: null, body: 'We rock at Angular' },
            { title: null, body: 'Titles are not always needed' },
            { title: null, body: 'Toastr rock!' },
        ];
        //#endregion
        this.flags = false;
        //#region Variables tabla
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
        this.data = new _models_OwnListDTO__WEBPACK_IMPORTED_MODULE_2__["OwnListsDTO"]();
        this.typeslist = new _models_OwnListTypesDTO__WEBPACK_IMPORTED_MODULE_3__["OwnListsTypesDTO"]();
        this.listCom = this.getOwnListTypes();
        this.settings = {
            actions: {
                add: true,
                edit: true,
                delete: true,
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                ownListTypeId: {
                    title: 'Tipo de Lista',
                    type: 'html',
                    // valuePrepareFunction: (cell, row) => { return row.ownListTypeName}
                    valuePrepareFunction: (cell, row, ownListTypeId) => {
                        var t;
                        t = this.typeslist;
                        var a = t.find(element => element.id == cell);
                        if (a)
                            return a.name;
                    },
                    editor: {
                        type: 'list',
                        config: {
                            list: this.listCom
                        }
                    }
                },
                documentType: {
                    title: 'Tipo de documento',
                    type: 'string',
                },
                identification: {
                    title: 'Documento de Identidad',
                    type: 'string',
                    filter: true
                },
                name: {
                    title: 'Nombre Completo',
                    type: 'string',
                },
                source: {
                    title: 'Fuente de la Consulta',
                    type: 'string',
                    filter: false,
                },
                typeIdentification: {
                    title: 'Tipo Persona',
                    type: 'string',
                    filter: false,
                    width: '3%'
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
                link: {
                    title: 'Link',
                    type: 'string',
                    filter: false,
                },
                moreInformation: {
                    title: 'Más información',
                    type: 'string',
                    filter: false,
                },
            }
        };
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.getOwnLists();
    }
    //#region Metodos SmartTableData
    onSaveConfirm(event) {
        console.log(event);
        var datatemporal = event.source.data;
        if (!this.isObjEmpty(datatemporal)) {
            this.updateOwnLists(event.newData);
            event.confirm.resolve(event.newData);
            this.getOwnListTypes();
        }
        else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        console.log(event);
        var datatemporal = event.newData;
        if (!this.isObjEmpty(datatemporal)) {
            this.createOwnList(event.newData);
            event.confirm.resolve(event.newData);
            this.getOwnListTypes();
            setTimeout(() => { window.location.reload(); }, 3000);
        }
        else {
            this.showToast("danger", "Error", "Debe ingresar todos los valores");
            event.confirm.reject();
        }
    }
    onDeleteConfirm(event) {
        if (window.confirm('Esta seguro de eliminar el registro')) {
            event.confirm.resolve();
            this.deleteOwnList(event.data.id.toString());
        }
        else {
            event.confirm.reject();
        }
        console.log(event.data.id);
    }
    onEdit(event) {
        this.getOwnListTypes();
        console.log(event);
    }
    onRowSelect(event) {
        console.log(event);
    }
    //#endregion
    onUserRowSelect(event) {
        var selectedRows = event.selected;
    }
    //#region Servicios
    //#region Get
    getOwnLists(CompanyId) {
        this._manageService.getOwnLists("1").subscribe((response) => {
            this.data = response;
            this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"](this.data);
        });
    }
    getOwnListTypes() {
        var settingList = [];
        // Call API category
        this._typeownlistsService.getOwnListsTypes("1").subscribe((response) => {
            this.typeslist = response;
            response.forEach(obj => {
                settingList.push({ value: obj.id, title: obj.name });
            });
            let newSettings = this.settings;
            newSettings.columns.ownListTypeId.editor.config.list = settingList;
            this.settings = Object.assign({}, newSettings);
        });
    }
    //endregion
    //#region Post
    createOwnList(ownListsDTO) {
        this._manageService.createOwnList(ownListsDTO).subscribe(res => {
            this.showToast("success", null, "Guardado Exitoso");
        });
    }
    //endregion
    //#region Update
    updateOwnLists(ownListsDTO) {
        this._manageService.updateOwnLists(ownListsDTO).subscribe(res => {
            this.showToast("success", null, "Actualizacion Exitosa");
            this.source.refresh();
            console.log("Enviado");
        });
    }
    //endregion
    //#region Delete
    deleteOwnList(id) {
        this._manageService.deleteOwnList(id).subscribe(res => {
            this.showToast("success", null, "Eliminado Exitoso");
            console.log("Enviado");
        });
    }
    getOwnListsTypes(CompanyId) {
        this._typeownlistsService.getOwnListsTypes("1").subscribe((response) => {
            this.typeslist = response;
        });
    }
    //endregion
    //#endregion
    //#region Validacion
    //Todo: Valida si los registro de la tabla estan vacios
    isObjEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }
    //Todo : Muestra toast segun mensaje
    showToast(type, title, body) {
        const hasIcon = this.hasIcon ? {} : { icon: 'alert-circle-outline' };
        const config = Object.assign({ status: type, destroyByClick: this.destroyByClick, duration: this.duration, position: this.position, preventDuplicates: this.preventDuplicates }, hasIcon);
        const titleContent = title ? `. ${title}` : '';
        this.index += 1;
        this.toastrService.show(body, `Listas Propias`, config);
    }
    //#endregion
    setCheckedStatus(checked) {
        console.log('checked', checked.target.checked);
        this.flags = checked.target.checked; // your variable
    }
}
ManageComponent.ɵfac = function ManageComponent_Factory(t) { return new (t || ManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_manage_service__WEBPACK_IMPORTED_MODULE_4__["ManageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_typeownlists_service__WEBPACK_IMPORTED_MODULE_5__["TypeownlistsService"])); };
ManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ManageComponent, selectors: [["ngx-manage"]], decls: 10, vars: 3, consts: [["status", "basic", 3, "change"], [3, "onSuccess", 4, "ngIf"], [1, "example-smart-table", 3, "settings", "source", "deleteConfirm", "editConfirm", "createConfirm", "rowSelect"], ["table", ""], [3, "onSuccess"]], template: function ManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Configuraci\u00F3n tipos de lista por consulta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "nb-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ManageComponent_Template_nb_toggle_change_4_listener($event) { return ctx.setCheckedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00BFDesea descargar la plantilla segun el tipo de lista?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ManageComponent_ngx_load_6_Template, 1, 0, "ngx-load", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ng2-smart-table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("deleteConfirm", function ManageComponent_Template_ng2_smart_table_deleteConfirm_7_listener($event) { return ctx.onDeleteConfirm($event); })("editConfirm", function ManageComponent_Template_ng2_smart_table_editConfirm_7_listener($event) { return ctx.onSaveConfirm($event); })("createConfirm", function ManageComponent_Template_ng2_smart_table_createConfirm_7_listener($event) { return ctx.onCreateConfirm($event); })("rowSelect", function ManageComponent_Template_ng2_smart_table_rowSelect_7_listener($event) { return ctx.onRowSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.flags);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.data);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToggleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["Ng2SmartTableComponent"], _load_load_component__WEBPACK_IMPORTED_MODULE_8__["LoadComponent"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1hbmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FBTUE7RUFDSSxtQkFBQTtBQUFKO0FBR0E7RUFDSSxPQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFHQTtFQUNJLGlCQUFBO0FBQUoiLCJmaWxlIjoibWFuYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIENvcHlyaWdodCAoYykgQWt2ZW8gMjAxOS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNpbmdsZSBBcHBsaWNhdGlvbiAvIE11bHRpIEFwcGxpY2F0aW9uIExpY2Vuc2UuXHJcbiAqIFNlZSBMSUNFTlNFX1NJTkdMRV9BUFAgLyBMSUNFTlNFX01VTFRJX0FQUCBpbiB0aGUgJ2RvY3MnIGZvbGRlciBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbiBvbiB0eXBlIG9mIHB1cmNoYXNlZCBsaWNlbnNlLlxyXG4gKi9cclxuXHJcbm5iLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmU+KiB7XHJcbiAgICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG5uYi1jYXJkLmlubGluZS1mb3JtLWNhcmQgbmItY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59Il19 */"] });


/***/ }),

/***/ "3ADv":
/*!************************************************************!*\
  !*** ./src/app/pages/own-lists/services/manage.service.ts ***!
  \************************************************************/
/*! exports provided: ManageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageService", function() { return ManageService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ManageService {
    constructor(http) {
        this.http = http;
    }
    getOwnLists(CompanyId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({ fromObject: { CompanyId } });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/OwnLists/GetOwnLists`, { params });
    }
    updateOwnLists(ownListsDTO) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/OwnLists/UpdateOwnLists`, ownListsDTO);
    }
    createOwnList(ownListsDTO) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/OwnLists/CreateOwnList`, ownListsDTO);
    }
    deleteOwnList(id) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append("id", id);
        //const params = new HttpParams({ fromObject: { ThirdPartyTypeId } });
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/OwnLists/DeleteOwnList`, null, { params: httpParams });
    }
}
ManageService.ɵfac = function ManageService_Factory(t) { return new (t || ManageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ManageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ManageService, factory: ManageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "CE/9":
/*!******************************************************!*\
  !*** ./src/app/pages/own-lists/models/OwnListDTO.ts ***!
  \******************************************************/
/*! exports provided: OwnListsDTO, OwnListDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnListsDTO", function() { return OwnListsDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnListDTO", function() { return OwnListDTO; });
class OwnListsDTO {
}
class OwnListDTO {
    constructor() {
        this.id = 0;
        this.name = '';
        this.identification = ' ';
        this.typeIdentification = ' ';
        this.documentType = ' ';
        this.source = ' ';
        this.alias = ' ';
        this.crime = ' ';
        this.link = ' ';
        this.moreInformation = ' ';
        this.zone = ' ';
    }
}


/***/ }),

/***/ "MjR0":
/*!*****************************************************!*\
  !*** ./src/app/pages/own-lists/own-lists.module.ts ***!
  \*****************************************************/
/*! exports provided: OwnListsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnListsModule", function() { return OwnListsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _own_lists_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./own-lists.component */ "YGzN");
/* harmony import */ var _components_type_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/type/type.component */ "0vdB");
/* harmony import */ var _components_load_load_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/load/load.component */ "uly0");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/manage/manage.component */ "1HzU");
/* harmony import */ var _own_lists_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./own-lists-routing.module */ "qVjb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tables/tables-routing.module */ "Qy2A");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _components_editors_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@components/editors/file-uploader/file-uploader.module */ "Gdc+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");

















const components = [
    _own_lists_component__WEBPACK_IMPORTED_MODULE_1__["OwnListsComponent"],
    _components_type_type_component__WEBPACK_IMPORTED_MODULE_2__["TypeComponent"],
    _components_load_load_component__WEBPACK_IMPORTED_MODULE_3__["LoadComponent"],
    _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__["ManageComponent"]
];
class OwnListsModule {
}
OwnListsModule.ɵfac = function OwnListsModule_Factory(t) { return new (t || OwnListsModule)(); };
OwnListsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: OwnListsModule });
OwnListsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _own_lists_routing_module__WEBPACK_IMPORTED_MODULE_5__["OwnListsRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDatepickerModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_8__["TablesRoutingModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToggleModule"],
            _components_editors_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_10__["NbFileUploaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](OwnListsModule, { declarations: [_own_lists_component__WEBPACK_IMPORTED_MODULE_1__["OwnListsComponent"], _components_type_type_component__WEBPACK_IMPORTED_MODULE_2__["TypeComponent"], _components_load_load_component__WEBPACK_IMPORTED_MODULE_3__["LoadComponent"], _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__["ManageComponent"], _own_lists_component__WEBPACK_IMPORTED_MODULE_1__["OwnListsComponent"],
        _components_type_type_component__WEBPACK_IMPORTED_MODULE_2__["TypeComponent"],
        _components_load_load_component__WEBPACK_IMPORTED_MODULE_3__["LoadComponent"],
        _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_4__["ManageComponent"]], imports: [_own_lists_routing_module__WEBPACK_IMPORTED_MODULE_5__["OwnListsRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDatepickerModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_8__["TablesRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToggleModule"],
        _components_editors_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_10__["NbFileUploaderModule"]] }); })();


/***/ }),

/***/ "YGzN":
/*!********************************************************!*\
  !*** ./src/app/pages/own-lists/own-lists.component.ts ***!
  \********************************************************/
/*! exports provided: OwnListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnListsComponent", function() { return OwnListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class OwnListsComponent {
    constructor() { }
    ngOnInit() {
    }
}
OwnListsComponent.ɵfac = function OwnListsComponent_Factory(t) { return new (t || OwnListsComponent)(); };
OwnListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OwnListsComponent, selectors: [["ngx-own-lists"]], decls: 1, vars: 0, template: function OwnListsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvd24tbGlzdHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ddaW":
/*!***********************************************************!*\
  !*** ./src/app/pages/own-lists/models/OwnListTypesDTO.ts ***!
  \***********************************************************/
/*! exports provided: OwnListsTypesDTO, OwnListTypesDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnListsTypesDTO", function() { return OwnListsTypesDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnListTypesDTO", function() { return OwnListTypesDTO; });
class OwnListsTypesDTO {
}
class OwnListTypesDTO {
    constructor() {
        this.id = 0;
        this.name = '';
    }
}


/***/ }),

/***/ "otP/":
/*!******************************************************************!*\
  !*** ./src/app/pages/own-lists/services/typeownlists.service.ts ***!
  \******************************************************************/
/*! exports provided: TypeownlistsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeownlistsService", function() { return TypeownlistsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TypeownlistsService {
    constructor(http) {
        this.http = http;
    }
    getOwnListsTypes(CompanyId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({ fromObject: { CompanyId } });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/OwnListTypes/GetOwnListTypes`, { params });
    }
    updateOwnLists(ownListsTypesDTO) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/OwnListTypes/UpdateOwnListTypes`, ownListsTypesDTO);
    }
    createOwnList(ownListsTypesDTO) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/OwnListTypes/CreateOwnListType`, ownListsTypesDTO);
    }
    deleteOwnList(id) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append("id", id);
        //const params = new HttpParams({ fromObject: { ThirdPartyTypeId } });
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/OwnListTypes/DeleteOwnListType`, null, { params: httpParams });
    }
    getOwnListsTypes2(CompanyId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({ fromObject: { CompanyId } });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/OwnListTypes/GetOwnListTypes`, { params });
    }
    importOwnLists(formData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/OwnListTypes/ImportOwnLists`, formData);
    }
    deleteImportedOwnListsByType(ownListTypeId) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/OwnListTypes/DeleteImportedOwnListsByType/${ownListTypeId}`, null);
    }
}
TypeownlistsService.ɵfac = function TypeownlistsService_Factory(t) { return new (t || TypeownlistsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TypeownlistsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TypeownlistsService, factory: TypeownlistsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qVjb":
/*!*************************************************************!*\
  !*** ./src/app/pages/own-lists/own-lists-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OwnListsRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnListsRoutingModule", function() { return OwnListsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_load_load_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/load/load.component */ "uly0");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/manage/manage.component */ "1HzU");
/* harmony import */ var _components_type_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/type/type.component */ "0vdB");
/* harmony import */ var _own_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./own-lists.component */ "YGzN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [{
        path: '',
        component: _own_lists_component__WEBPACK_IMPORTED_MODULE_4__["OwnListsComponent"],
        children: [{
                path: 'type',
                component: _components_type_type_component__WEBPACK_IMPORTED_MODULE_3__["TypeComponent"],
            },
            {
                path: 'load',
                component: _components_load_load_component__WEBPACK_IMPORTED_MODULE_1__["LoadComponent"],
            },
            {
                path: 'manage',
                component: _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_2__["ManageComponent"],
            },
        ],
    }];
class OwnListsRoutingModule {
}
OwnListsRoutingModule.ɵfac = function OwnListsRoutingModule_Factory(t) { return new (t || OwnListsRoutingModule)(); };
OwnListsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: OwnListsRoutingModule });
OwnListsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OwnListsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routedComponents = [
    _own_lists_component__WEBPACK_IMPORTED_MODULE_4__["OwnListsComponent"],
    _components_type_type_component__WEBPACK_IMPORTED_MODULE_3__["TypeComponent"],
    _components_load_load_component__WEBPACK_IMPORTED_MODULE_1__["LoadComponent"],
    _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_2__["ManageComponent"],
];


/***/ }),

/***/ "uly0":
/*!*******************************************************************!*\
  !*** ./src/app/pages/own-lists/components/load/load.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadComponent", function() { return LoadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _models_OwnListTypesDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/OwnListTypesDTO */ "ddaW");
/* harmony import */ var _services_typeownlists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/typeownlists.service */ "otP/");
/* harmony import */ var _components_editors_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@components/editors/file-uploader/file-uploader.component */ "Jaxf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










function LoadComponent_nb_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", m_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1.name);
} }
class LoadComponent {
    constructor(_typeownlistsService, toastrService) {
        this._typeownlistsService = _typeownlistsService;
        this.toastrService = toastrService;
        this.namefile = '';
        //public typeslist :OwnListsTypesDTO = new OwnListsTypesDTO();
        this.typeslist = new _models_OwnListTypesDTO__WEBPACK_IMPORTED_MODULE_3__["OwnListsTypesDTO"]();
        this.ownListTypes = [];
        this.ownListTypeId = null;
        this.index = 1;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
        this.status = 'primary';
        this.title = 'HI there!';
        this.content = `I'm cool toaster!`;
        this.types = [
            'primary',
            'success',
            'info',
            'warning',
            'danger',
        ];
        this.positions = [
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalPhysicalPosition"].TOP_RIGHT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalPhysicalPosition"].TOP_LEFT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalPhysicalPosition"].BOTTOM_LEFT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalPhysicalPosition"].BOTTOM_RIGHT,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalLogicalPosition"].TOP_END,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalLogicalPosition"].TOP_START,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalLogicalPosition"].BOTTOM_END,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalLogicalPosition"].BOTTOM_START,
        ];
        this.quotes = [
            { title: null, body: 'We rock at Angular' },
            { title: null, body: 'Titles are not always needed' },
            { title: null, body: 'Toastr rock!' },
        ];
        //#endregion
        this.selectedItemFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //allowedMimeType: string[] = ['image/png', 'image/jpg'];  // Change to what file types you need
        this.allowedMimeType = ['xls', 'xlsx']; // Change to what file types you need
        this.maxFileSize = 25; // Change to max file size in mb
        this.templateFile = null;
        this.importButtonDisabled = true;
        this.deleteButtonDisabled = true;
        this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.fileTypesAllowed = this.allowedMimeType.map((fileType) => fileType.substring(fileType.lastIndexOf('/') + 1, fileType.length));
        this.options = {
            url: 'https://localhost:5001',
            multiple: false,
            directory: true,
            showUploadQueue: true,
            allowedFileTypes: this.allowedMimeType,
        };
        this.initialize();
    }
    initialize() {
        this.getOwnListsTypes();
    }
    //#region Metodos Privados
    selectiontype(selected) {
        console.log(selected);
        if (selected == "Betados") {
            window.open('./../../assets/PlantillaListaspropias.xlsx', 'Excel', 'width=20,height=10,toolbar=0,menubar=0,scrollbars=no');
        }
        else {
            this.showToast("danger", null, "No existe una plantilla para la lista seleccionada");
        }
    }
    showToast(type, title, body) {
        const hasIcon = this.hasIcon ? {} : { icon: 'alert-circle-outline' };
        const config = Object.assign({ status: type, destroyByClick: this.destroyByClick, duration: this.duration, position: this.position, preventDuplicates: this.preventDuplicates }, hasIcon);
        const titleContent = title ? `. ${title}` : '';
        this.index += 1;
        this.toastrService.show(body, `Toast ${this.index}${titleContent}`, config);
    }
    //#endregion
    //#region Servicios
    //#region Get
    getOwnListsTypes2(CompanyId) {
        this._typeownlistsService.getOwnListsTypes("1").subscribe((response) => {
            this.typeslist = response;
            console.log(this.types);
        });
    }
    //endregion
    //endregion
    getOwnListsTypes(CompanyId) {
        this._typeownlistsService.getOwnListsTypes2("1").subscribe((response) => {
            this.ownListTypes = response;
        });
    }
    onOwnListsTypeChange(selected) {
        this.ownListTypeId = selected;
        this.updateImportButtonStatus();
        this.updateDeleteButtonStatus();
    }
    onSave() {
        if (this.ownListTypeId != null && this.templateFile != null) {
            this.importButtonDisabled = true;
            const formData = new FormData();
            formData.append('ownListTypeId', this.ownListTypeId.toString());
            formData.append('templateFile', this.templateFile);
            this._typeownlistsService.importOwnLists(formData).subscribe(response => {
                this.showToast("success", null, "Guardado exitosamente");
                this.importButtonDisabled = false;
                this.onSuccess.emit();
            }, error => {
                this.showToast("danger", null, error.message);
                this.importButtonDisabled = false;
            });
        }
    }
    onDeleteImportedOwnListsByType() {
        if (this.ownListTypeId != null) {
            this.importButtonDisabled = true;
            this._typeownlistsService.deleteImportedOwnListsByType(this.ownListTypeId).subscribe(response => {
                this.showToast("success", null, "Borrado exitosamente");
                this.importButtonDisabled = false;
                this.onSuccess.emit();
            }, error => {
                this.showToast("danger", null, error.message);
                this.importButtonDisabled = false;
            });
        }
    }
    onFileSelected(files) {
        this.templateFile = files;
        this.updateImportButtonStatus();
    }
    updateImportButtonStatus() {
        this.importButtonDisabled = !(this.templateFile != null && this.ownListTypeId != null);
    }
    updateDeleteButtonStatus() {
        this.deleteButtonDisabled = !(this.ownListTypeId != null);
    }
}
LoadComponent.ɵfac = function LoadComponent_Factory(t) { return new (t || LoadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_typeownlists_service__WEBPACK_IMPORTED_MODULE_4__["TypeownlistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"])); };
LoadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadComponent, selectors: [["ngx-load"]], inputs: { id: "id" }, outputs: { onSuccess: "onSuccess" }, decls: 23, vars: 5, consts: [[1, "col-sm"], ["nbButton", "", "fullWidth", "", "status", "success"], ["href", "assets\\excel\\PlantillaListaPropia.xlsx", "target", "_blank", "download", "PlantillaListaPropia.xlsx", 2, "text-decoration", "none", "color", "white"], ["icon", "file-text-outline"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["buttonLabel", "Browse", "dropAreaLabel", "Drag files here or", "dropAreaFileChooserLabel", "browse to upload", 3, "options", "selectFile"], ["placeholder", "Tipo Lista Propia", "fullWidth", "", 3, "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", "hero", "", "status", "primary", "nbButton", "", 1, "mr-2", 3, "disabled", "click"], ["type", "submit", "hero", "", "status", "danger", "nbButton", "", 3, "disabled", "click"], [3, "value"]], template: function LoadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Plantilla de Cargue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-file-uploader", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectFile", function LoadComponent_Template_nb_file_uploader_selectFile_13_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function LoadComponent_Template_nb_select_selectedChange_17_listener($event) { return ctx.onOwnListsTypeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoadComponent_nb_option_18_Template, 2, 2, "nb-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadComponent_Template_button_click_19_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadComponent_Template_button_click_21_listener() { return ctx.onDeleteImportedOwnListsByType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Borrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cargar Listas Propias + ", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ownListTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.importButtonDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.deleteButtonDisabled);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"], _components_editors_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_5__["NbFileUploaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbOptionComponent"]], styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQU1BO0VBQ0ksbUJBQUE7QUFBSjtBQUdBO0VBQ0ksT0FBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtBQUFKO0FBR0E7RUFDSSxpQkFBQTtBQUFKIiwiZmlsZSI6ImxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuICogQ29weXJpZ2h0IChjKSBBa3ZlbyAyMDE5LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU2luZ2xlIEFwcGxpY2F0aW9uIC8gTXVsdGkgQXBwbGljYXRpb24gTGljZW5zZS5cclxuICogU2VlIExJQ0VOU0VfU0lOR0xFX0FQUCAvIExJQ0VOU0VfTVVMVElfQVBQIGluIHRoZSAnZG9jcycgZm9sZGVyIGZvciBsaWNlbnNlIGluZm9ybWF0aW9uIG9uIHR5cGUgb2YgcHVyY2hhc2VkIGxpY2Vuc2UuXHJcbiAqL1xyXG5cclxubmItY2hlY2tib3gge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZT4qIHtcclxuICAgIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XHJcbn1cclxuXHJcbm5iLWNhcmQuaW5saW5lLWZvcm0tY2FyZCBuYi1jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=own-lists-own-lists-module-es2015.js.map