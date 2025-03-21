(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "36nv":
/*!********************************************!*\
  !*** ./src/app/utils/pagination-filter.ts ***!
  \********************************************/
/*! exports provided: PaginationFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationFilter", function() { return PaginationFilter; });
class PaginationFilter {
    constructor() {
        this.query = '';
        this.perPage = 20;
        this.pageNumber = 1;
        this.startDate = '';
        this.endDate = '';
    }
}


/***/ }),

/***/ "K2vf":
/*!**********************************************!*\
  !*** ./src/app/utils/custom-http.service.ts ***!
  \**********************************************/
/*! exports provided: CustomHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpService", function() { return CustomHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@core/backend/common/api/http.service */ "sZbP");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _custom_server_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-server.data-source */ "R3IU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class CustomHttpService extends _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] {
    constructor(http) {
        super(http);
        this.http = http;
    }
    getDataSource(endpoint, paginationFilter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    query: paginationFilter.query,
                    perPage: paginationFilter.perPage.toString(),
                    pageNumber: paginationFilter.pageNumber.toString(),
                },
            });
            const options = {
                params,
            };
            const perPage = paginationFilter.perPage;
            const pageNumber = paginationFilter.pageNumber;
            const apiPaginationResponse = yield this.http
                .get(`${this.apiUrl}/${endpoint}`, options).toPromise();
            const items = apiPaginationResponse.data;
            const dataSource = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"](items);
            dataSource.setPaging(pageNumber, perPage, true);
            return dataSource;
        });
    }
    getServerDataSource(endpoint) {
        const url = `${this.apiUrl}/${endpoint}`;
        return new _custom_server_data_source__WEBPACK_IMPORTED_MODULE_4__["CustomServerDataSource"](this.http, {
            endPoint: url,
            totalKey: 'total',
            dataKey: 'data',
            pagerPageKey: 'pageNumber',
            pagerLimitKey: 'perPage',
        });
    }
}
CustomHttpService.ɵfac = function CustomHttpService_Factory(t) { return new (t || CustomHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CustomHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CustomHttpService, factory: CustomHttpService.ɵfac });


/***/ }),

/***/ "R3IU":
/*!****************************************************!*\
  !*** ./src/app/utils/custom-server.data-source.ts ***!
  \****************************************************/
/*! exports provided: CustomServerDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomServerDataSource", function() { return CustomServerDataSource; });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CustomServerDataSource extends ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["ServerDataSource"] {
    constructor(http, conf) {
        super(http, conf);
        this._query = '';
        this.prevConfFilters = [];
        this._filters = {};
    }
    createRequesParams() {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        httpParams = this.addSearchRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    }
    setSearchQuery(query = '') {
        this._query = query;
        this.pagingConf['page'] = 1;
        this.refresh();
    }
    addSearchRequestParams(httpParams) {
        const keys = Object.keys(this._filters);
        httpParams = httpParams.set('query', this._query);
        keys.forEach(key => httpParams = httpParams.set(key, this._filters[key]));
        return httpParams;
    }
    setSearchFilters(filters) {
        this._filters = filters;
        this.pagingConf['page'] = 1;
        if (filters['perPage'] != null) {
            const perPageFilter = filters['perPage'];
            if (Number.isInteger(perPageFilter)) {
                this.pagingConf['perPage'] = filters['perPage'];
            }
            else {
                this._filters["showAll"] = true;
            }
        }
        this.refresh();
    }
}


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */
const environment = {
    production: true,
    //apiUrl: 'https://ambientetest.datalaft.com:2101/api',
    //apiUrl: 'https://localhost:5001/api',
    apiUrl: 'https://inspektor-backend.azurewebsites.net/api',
    testUser: {
        token: {},
        email: '',
    },
};


/***/ }),

/***/ "nVyZ":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/management/components/manageprocuracy/manageprocuracy.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ManageprocuracyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageprocuracyComponent", function() { return ManageprocuracyComponent; });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_editors_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@components/editors/toggle/toggle.component */ "f2ia");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");






class ManageprocuracyComponent {
    constructor(translate) {
        this.translate = translate;
        this.settings = {
            hideSubHeader: true,
            actions: {
                delete: false,
                edit: false,
                add: false
            },
            columns: {
                Rol: {
                    title: 'Rol',
                    type: 'list',
                    editor: {
                        type: 'list',
                        config: { list: [
                                { title: 'Administrador', value: 'Administrador' },
                                { title: 'Consultor', value: 'Consultor' },
                                { title: 'Informador', value: 'Informador' },
                                { title: 'Reporte', value: 'Reporte' },
                            ] }
                    },
                    filter: false,
                },
                AccesoProcuraduria: {
                    title: 'Acceso Procuraduría',
                    type: 'custom',
                    renderComponent: _components_editors_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"],
                    editor: {
                        type: 'checkbox'
                    },
                    filter: false,
                    width: '3%'
                },
                FechaActivacion: {
                    title: 'Fecha Activación',
                    type: 'string',
                    filter: false,
                },
                FechaDesactivacion: {
                    title: 'Fecha Desactivación',
                    type: 'string',
                    filter: false,
                },
            }
        };
        this.settingsUsers = {
            hideSubHeader: true,
            actions: {
                delete: false,
                edit: false,
                add: false
            },
            columns: {
                Rol: {
                    title: 'Rol',
                    type: 'list',
                    editor: {
                        type: 'list',
                        config: { list: [
                                { title: 'Administrador', value: 'Administrador' },
                                { title: 'Consultor', value: 'Consultor' },
                                { title: 'Informador', value: 'Informador' },
                                { title: 'Reporte', value: 'Reporte' },
                            ] }
                    },
                    filter: false,
                },
                NDocumento: {
                    title: 'Numero Documento',
                    type: 'string'
                },
                Nombres: {
                    title: 'Nombres',
                    type: 'string'
                },
                Apellidos: {
                    title: 'Apellidos',
                    type: 'string'
                },
                Usuario: {
                    title: 'Usuario',
                    type: 'string'
                },
                Estado: {
                    title: 'Estado',
                    type: 'custom',
                    renderComponent: _components_editors_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"],
                    editor: {
                        type: 'checkbox'
                    },
                    filter: false,
                    width: '3%'
                },
                AccesoProcuraduria: {
                    title: 'Acceso Procuraduría',
                    type: 'custom',
                    renderComponent: _components_editors_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"],
                    editor: {
                        type: 'checkbox'
                    },
                    filter: false,
                    width: '3%'
                },
                FechaActivacion: {
                    title: 'Fecha Activación',
                    type: 'string',
                    filter: false,
                },
                FechaDesactivacion: {
                    title: 'Fecha Desactivación',
                    type: 'string',
                    filter: false,
                },
            }
        };
        this.data = [
            {
                Rol: 'Administrador',
                AccesoProcuraduria: true,
                FechaActivacion: '1/07/2020 9:57:05 a. m.',
                FechaDesactivacion: ''
            }
        ];
        this.dataUsers = [
            {
                Rol: 'Administrador',
                NDocumento: '7876545',
                Nombres: 'Alejandro',
                Apellidos: 'Castellanos',
                Usuario: 'c.castellanos',
                Estado: true,
                AccesoProcuraduria: true,
                FechaActivacion: '1/07/2020 9:57:05 a. m.',
                FechaDesactivacion: ''
            }
        ];
    }
    ngOnInit() {
        this.traductorlocal();
    }
    traductorlocal() {
        this.lang = localStorage.getItem('lang');
        let currentlang = this.translate.currentLang;
        currentlang = this.lang;
        this.translate.use(currentlang);
    }
    onUserRowSelect(event) {
        var selectedRows = event.selected;
    }
}
ManageprocuracyComponent.ɵfac = function ManageprocuracyComponent_Factory(t) { return new (t || ManageprocuracyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__["TranslateService"])); };
ManageprocuracyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ManageprocuracyComponent, selectors: [["ngx-manageprocuracy"]], decls: 13, vars: 7, consts: [[1, "example-smart-table", 3, "settings", "source"]], template: function ManageprocuracyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, "ManageModule.Administracion_del_Acceso_de_Procuraduria_en_linea"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settingsUsers)("source", ctx.dataUsers);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2Vwcm9jdXJhY3kuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map