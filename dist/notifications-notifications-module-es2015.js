(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "4VI5":
/*!*********************************************************************!*\
  !*** ./src/app/pages/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function() { return NotificationsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/monitoring/monitoring.component */ "pFqh");
/* harmony import */ var _components_sent_sent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sent/sent.component */ "Of3l");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/settings/settings.component */ "otOm");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications.component */ "Xf8J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [{
        path: '',
        component: _notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"],
        children: [{
                path: 'settings',
                component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
            },
            {
                path: 'sent',
                component: _components_sent_sent_component__WEBPACK_IMPORTED_MODULE_2__["SentComponent"],
            },
            {
                path: 'monitoring',
                component: _components_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_1__["MonitoringComponent"],
            }
        ],
    }];
class NotificationsRoutingModule {
}
NotificationsRoutingModule.ɵfac = function NotificationsRoutingModule_Factory(t) { return new (t || NotificationsRoutingModule)(); };
NotificationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NotificationsRoutingModule });
NotificationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NotificationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routedComponents = [
    _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
    _components_sent_sent_component__WEBPACK_IMPORTED_MODULE_2__["SentComponent"],
    _components_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_1__["MonitoringComponent"]
];


/***/ }),

/***/ "4sOm":
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.component */ "Xf8J");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/settings/settings.component */ "otOm");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications-routing.module */ "4VI5");
/* harmony import */ var _components_sent_sent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sent/sent.component */ "Of3l");
/* harmony import */ var _components_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/monitoring/monitoring.component */ "pFqh");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/tables-routing.module */ "Qy2A");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@components/components.module */ "h+2I");
/* harmony import */ var _backend_common_api_notification_sent_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./backend/common/api/notification-sent.api */ "WeQd");
/* harmony import */ var _backend_common_services_notification_sent_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./backend/common/services/notification-sent.service */ "z/Vt");
/* harmony import */ var _utils_custom_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/custom-http.service */ "K2vf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_sent_components_notification_detail_notification_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sent/components/notification-detail/notification-detail.component */ "mmsi");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");





















const components = [
    _notifications_component__WEBPACK_IMPORTED_MODULE_1__["NotificationsComponent"],
    _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
    _components_sent_sent_component__WEBPACK_IMPORTED_MODULE_4__["SentComponent"],
    _components_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_5__["MonitoringComponent"],
];
class NotificationsModule {
}
NotificationsModule.ɵfac = function NotificationsModule_Factory(t) { return new (t || NotificationsModule)(); };
NotificationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: NotificationsModule });
NotificationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        _utils_custom_http_service__WEBPACK_IMPORTED_MODULE_13__["CustomHttpService"],
        _backend_common_api_notification_sent_api__WEBPACK_IMPORTED_MODULE_11__["NotificationSentApi"],
        _backend_common_services_notification_sent_service__WEBPACK_IMPORTED_MODULE_12__["NotificationSentService"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbWindowService"],
    ], imports: [[
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationsRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbFormFieldModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
            _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_9__["TablesRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToggleModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTagModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](NotificationsModule, { declarations: [_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"], _components_sent_sent_component__WEBPACK_IMPORTED_MODULE_4__["SentComponent"], _components_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_5__["MonitoringComponent"], _notifications_component__WEBPACK_IMPORTED_MODULE_1__["NotificationsComponent"],
        _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
        _components_sent_sent_component__WEBPACK_IMPORTED_MODULE_4__["SentComponent"],
        _components_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_5__["MonitoringComponent"], _components_sent_components_notification_detail_notification_detail_component__WEBPACK_IMPORTED_MODULE_15__["NotificationDetailComponent"]], imports: [_notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationsRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbFormFieldModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
        _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_9__["TablesRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToggleModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDatepickerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTagModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"]] }); })();


/***/ }),

/***/ "5xEe":
/*!*********************************************!*\
  !*** ./node_modules/rxjs-compat/Subject.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
exports.Subject = rxjs_1.Subject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "8yf6":
/*!**************************************!*\
  !*** ./node_modules/rxjs/Subject.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! rxjs-compat/Subject */ "5xEe"));
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "Of3l":
/*!***********************************************************************!*\
  !*** ./src/app/pages/notifications/components/sent/sent.component.ts ***!
  \***********************************************************************/
/*! exports provided: SentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentComponent", function() { return SentComponent; });
/* harmony import */ var _backend_common_services_notification_sent_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../backend/common/services/notification-sent.service */ "z/Vt");
/* harmony import */ var _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/pagination-filter */ "36nv");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _components_notification_detail_notification_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/notification-detail/notification-detail.component */ "mmsi");
/* harmony import */ var _components_editors_custom_icon_smart_table_cell_custom_icon_smart_table_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@components/editors/custom-icon-smart-table-cell/custom-icon-smart-table-cell.component */ "Zvx5");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");











class SentComponent {
    constructor(notificationSentService, windowService) {
        this.notificationSentService = notificationSentService;
        this.windowService = windowService;
        this.filters = {};
        this.startDate = '';
        this.endDate = '';
        this.notifications = [];
        this.searchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.paginationFilter = new _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_1__["PaginationFilter"]();
        this.settings = {
            mode: 'external',
            actions: {
                add: false,
                edit: false,
                delete: false,
            },
            columns: {
                subject: {
                    title: 'Asunto',
                    type: 'string',
                    filter: false,
                },
                to: {
                    title: 'Para',
                    type: 'string',
                    filter: false,
                },
                createdAt: {
                    title: 'Fecha Envío',
                    type: 'string',
                    filter: false,
                },
                userName: {
                    title: 'Nombre usuario',
                    type: 'string',
                    filter: false,
                },
                user: {
                    title: 'Usuario',
                    type: 'string',
                    filter: false,
                },
                detail: {
                    title: 'Detalle',
                    type: 'custom',
                    filter: false,
                    renderComponent: _components_editors_custom_icon_smart_table_cell_custom_icon_smart_table_cell_component__WEBPACK_IMPORTED_MODULE_4__["CustomIconSmartTableCellComponent"],
                    onComponentInitFunction: (instance) => {
                        instance.save.subscribe(row => {
                            this.onDetail(row);
                        });
                    }
                },
            },
        };
        this.source = this.notificationSentService.getServerDataSource();
    }
    ngOnInit() {
        this.searchTextChanged
            // .debounceTime(250)
            .subscribe((query) => {
            this.query = query;
            this.filters = {
                query: query,
                startDate: this.startDate != '' ? new Date(this.startDate).toISOString().split('T')[0] : '',
                endDate: this.endDate != '' ? new Date(this.endDate).toISOString().split('T')[0] : '',
            };
            console.log(this.filters);
            this.source.setSearchFilters(this.filters);
        });
    }
    searchNotifications($event) {
        this.searchTextChanged.next($event.target.value);
    }
    onDetail(item) {
        console.log(item);
        this.windowService.open(_components_notification_detail_notification_detail_component__WEBPACK_IMPORTED_MODULE_3__["NotificationDetailComponent"], {
            context: {
                title: 'Detalle',
                notificationId: item.id
            }
        });
    }
    onSearch($event) {
        let q = this.search != undefined ? this.search : '';
        this.searchTextChanged.next(q);
    }
    exportExcel() {
        this.paginationFilter.query = this.search != undefined ? this.search : '';
        this.paginationFilter.startDate = this.startDate != '' ? new Date(this.startDate).toISOString().split('T')[0] : '',
            this.paginationFilter.endDate = this.endDate != '' ? new Date(this.endDate).toISOString().split('T')[0] : '',
            this.notificationSentService.getExcel(this.paginationFilter).subscribe((response) => {
                console.log(response.headers.get('content-type'));
                console.log(response);
                let filename = this.getFileName(response);
                let binaryData = [];
                binaryData.push(response.body);
                let downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
                downloadLink.setAttribute('download', filename);
                document.body.appendChild(downloadLink);
                downloadLink.click();
            });
    }
    getFileName(response) {
        let filename;
        try {
            const contentDisposition = response.headers.get('content-disposition');
            const r = /(?:filename=")(.+)(?:;")/;
            filename = r.exec(contentDisposition)[1];
        }
        catch (e) {
            filename = `NotMonitoreo_${''}.xlsx`;
        }
        return filename;
    }
}
SentComponent.ɵfac = function SentComponent_Factory(t) { return new (t || SentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_backend_common_services_notification_sent_service__WEBPACK_IMPORTED_MODULE_0__["NotificationSentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbWindowService"])); };
SentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SentComponent, selectors: [["ngx-sent"]], decls: 27, vars: 8, consts: [[1, "row", "mb-3"], [1, "col-md-12"], ["nbInput", "", 3, "ngModel", "ngModelChange", "keyup"], ["ghost", "", "nbButton", "", "nbSuffix", "", 3, "click"], ["pack", "eva", 3, "icon"], [1, "form-group"], ["for", "startDate", 1, "label"], ["id", "startDate", "nbInput", "", "fullWidth", "", "placeholder", "Fecha Desde", 3, "ngModel", "nbDatepicker", "ngModelChange"], ["formpicker", ""], ["for", "endDate", 1, "label"], ["id", "endDate", "nbInput", "", "fullWidth", "", "placeholder", "Fecha Hasta", 3, "ngModel", "nbDatepicker", "ngModelChange"], ["formpicker2", ""], ["status", "success", "nbButton", "", "nbSuffix", "", 1, "align-self-center", 3, "click"], [1, "example-smart-table", 3, "settings", "source"]], template: function SentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Notificaciones enviadas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SentComponent_Template_input_ngModelChange_7_listener($event) { return ctx.search = $event; })("keyup", function SentComponent_Template_input_keyup_7_listener($event) { return ctx.searchNotifications($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SentComponent_Template_button_click_8_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Fecha Desde");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SentComponent_Template_input_ngModelChange_13_listener($event) { return ctx.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "nb-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Fecha Hasta");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SentComponent_Template_input_ngModelChange_19_listener($event) { return ctx.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "nb-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SentComponent_Template_button_click_24_listener() { return ctx.exportExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "ng2-smart-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "search-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.startDate)("nbDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.endDate)("nbDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSuffixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableComponent"]], styles: [".search-label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6InNlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ "WeQd":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/notifications/backend/common/api/notification-sent.api.ts ***!
  \*********************************************************************************/
/*! exports provided: NotificationSentApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSentApi", function() { return NotificationSentApi; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _utils_custom_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utils/custom-http.service */ "K2vf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class NotificationSentApi {
    constructor(api) {
        this.api = api;
        this.apiController = 'notifications/sent';
    }
    list(paginationFilter) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            fromObject: {
                query: paginationFilter.query,
                perPage: paginationFilter.perPage.toString(),
                pageNumber: paginationFilter.pageNumber.toString(),
            },
        });
        const options = {
            params,
        };
        return this.api.get(`${this.apiController}`, options);
    }
    getServerDataSource() {
        return this.api.getServerDataSource(`${this.apiController}`);
    }
    getNotification(id) {
        return this.api.get(`${this.apiController}/${id}`);
    }
    getExportExcel(filter) {
        const urlSearchParams = Object.entries(filter).map(([key, val]) => `${key}=${val}`).join('&');
        return this.api.get(`${this.apiController}${'/ExportExcel'}?${urlSearchParams}`, { observe: 'response', responseType: 'blob' });
    }
}
NotificationSentApi.ɵfac = function NotificationSentApi_Factory(t) { return new (t || NotificationSentApi)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_utils_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"])); };
NotificationSentApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NotificationSentApi, factory: NotificationSentApi.ɵfac });


/***/ }),

/***/ "XBZW":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/notifications/backend/common/services/notificationmonitoring.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: NotificationmonitoringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationmonitoringService", function() { return NotificationmonitoringService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class NotificationmonitoringService {
    constructor(HttpClient) {
        this.HttpClient = HttpClient;
    }
    getAll(filter) {
        const urlSearchParams = Object.entries(filter).map(([key, val]) => `${key}=${val}`).join('&');
        return this.HttpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${'/notifications/monitoring/GetAll'}?${urlSearchParams}`);
    }
    exportExcel(filter) {
        const urlSearchParams = Object.entries(filter).map(([key, val]) => `${key}=${val}`).join('&');
        return this.HttpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${'/notifications/monitoring/ExportExcel'}?${urlSearchParams}`, { observe: 'response', responseType: 'blob' });
    }
}
NotificationmonitoringService.ɵfac = function NotificationmonitoringService_Factory(t) { return new (t || NotificationmonitoringService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
NotificationmonitoringService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NotificationmonitoringService, factory: NotificationmonitoringService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Xf8J":
/*!****************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.component.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NotificationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["ngx-notifications"]], decls: 1, vars: 0, template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "mmsi":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/notifications/components/sent/components/notification-detail/notification-detail.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: NotificationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDetailComponent", function() { return NotificationDetailComponent; });
/* harmony import */ var _backend_common_services_notification_sent_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../backend/common/services/notification-sent.service */ "z/Vt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");






class NotificationDetailComponent {
    constructor(notificationSentService, fb) {
        this.notificationSentService = notificationSentService;
        this.fb = fb;
    }
    get subject() {
        return this.notificationDetailForm.get('subject');
    }
    get to() {
        return this.notificationDetailForm.get('to');
    }
    get createdAt() {
        return this.notificationDetailForm.get('createdAt');
    }
    ngOnInit() {
        this.initNotificationDetailForm();
        this.notificationSentService.getNotification(1).subscribe(response => {
            this.notification = response.data;
            this.loadNotificationData(this.notification);
        }, error => {
        });
    }
    initNotificationDetailForm() {
        this.notificationDetailForm = this.fb.group({
            subject: this.fb.control(''),
            to: this.fb.control(''),
            createdAt: this.fb.control(''),
        });
    }
    loadNotificationData(notificationSent) {
        console.log(this.notification);
        this.notificationDetailForm.setValue({
            subject: notificationSent.subject,
            to: notificationSent.to,
            createdAt: notificationSent.createdAt,
        });
    }
}
NotificationDetailComponent.ɵfac = function NotificationDetailComponent_Factory(t) { return new (t || NotificationDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_backend_common_services_notification_sent_service__WEBPACK_IMPORTED_MODULE_0__["NotificationSentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
NotificationDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NotificationDetailComponent, selectors: [["ngx-notification-detail"]], decls: 25, vars: 1, consts: [[3, "formGroup"], [1, "form-group"], ["for", "subject", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "subject", "formControlName", "subject", "disabled", "", 1, "form-control"], ["for", "to", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "to", "formControlName", "to", "disabled", "", 1, "form-control"], ["for", "createdAt", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "createdAt", "formControlName", "createdAt", "disabled", "", 1, "form-control"], ["for", "detail", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "detail", "disabled", "", 1, "form-control"], ["for", "name", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "name", "disabled", "", 1, "form-control"], ["fullWidth", "", "nbInput", "", "id", "user", "disabled", "", 1, "form-control"]], template: function NotificationDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Para");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Fecha Envio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Nombre Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.notificationDetailForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "otOm":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/notifications/components/settings/settings.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _core_interfaces_common_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/interfaces/common/smart-table */ "LyxI");
/* harmony import */ var _components_editors_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@components/editors/toggle/toggle.component */ "f2ia");
/* harmony import */ var _components_editors_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@components/editors/input/input.component */ "7E6+");
/* harmony import */ var _core_interfaces_common_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@core/interfaces/common/users */ "2NI8");
/* harmony import */ var _core_interfaces_common_notificationSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/interfaces/common/notificationSettings */ "YfFT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Subject */ "8yf6");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


















function SettingsComponent_nb_tag_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "nb-tag", 18);
} if (rf & 2) {
    const value_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", value_r8);
} }
function SettingsComponent_nb_tag_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "nb-tag", 18);
} if (rf & 2) {
    const value_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", value_r9);
} }
function SettingsComponent_nb_tag_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "nb-tag", 18);
} if (rf & 2) {
    const value_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", value_r10);
} }
function SettingsComponent_nb_tag_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "nb-tag", 18);
} if (rf & 2) {
    const value_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", value_r11);
} }
function SettingsComponent_nb_tag_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "nb-tag", 18);
} if (rf & 2) {
    const value_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", value_r12);
} }
function SettingsComponent_nb_tag_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "nb-tag", 18);
} if (rf & 2) {
    const value_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", value_r13);
} }
function SettingsComponent_nb_tag_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "nb-tag", 18);
} if (rf & 2) {
    const value_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", value_r14);
} }
function SettingsComponent_nb_tag_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "nb-tag", 18);
} if (rf & 2) {
    const value_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", value_r15);
} }
class SettingsComponent {
    constructor(service, userData, notificationSettingsService, fb, toastrService) {
        // const data = this.service.getData();
        this.service = service;
        this.userData = userData;
        this.notificationSettingsService = notificationSettingsService;
        this.fb = fb;
        this.toastrService = toastrService;
        this.unsubscribe$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.keys = ["mailPriority1", "mailPriority2", "mailPriority3",
            "mailPriority4", "mailCoincidences", "mailAdditionalServices", "mailAministrative", "mailRoi"];
        this.settings = {
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
                    renderComponent: _components_editors_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__["ToggleComponent"],
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
                    renderComponent: _components_editors_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"],
                },
            },
        };
        this.ValueP1 = '';
        this.isDisableP1 = false;
        this.statusButton = false;
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["LocalDataSource"]();
        this.loadingCheckName = false;
        this.types = [
            'primary',
            'success',
            'info',
            'warning',
            'danger',
        ];
        this.index = 1;
        // this.data = [
        //     {id: 1, action: true, type: 'Prioridad 1', email: {value: 'prueba', Isdisabled: true}},
        //     {id: 2, action: true, type: 'Prioridad 2', email: {value: 'prueba2', Isdisabled: false}},
        // ];
        // this.source.load(this.data);
    }
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
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
        this.userData.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(user => {
            this.companyId = user.companyId;
            this.notificationSettingsService.getCurrentNotificationSetting(this.companyId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(settings => {
                if (settings == null) {
                    this.showToast("Error", "No se pudo obtener información, por favor configure", 4, false);
                }
                else {
                    this.MailPriority1 = settings.mailPriority1;
                    this.notificationSettingForm.setValue({
                        id: settings.id,
                        sendMailPriority1: settings === null || settings === void 0 ? void 0 : settings.sendMailPriority1,
                        mailPriority1: [],
                        sendMailPriority2: settings === null || settings === void 0 ? void 0 : settings.sendMailPriority2,
                        mailPriority2: [],
                        sendMailPriority3: settings === null || settings === void 0 ? void 0 : settings.sendMailPriority3,
                        mailPriority3: [],
                        sendMailPriority4: settings === null || settings === void 0 ? void 0 : settings.sendMailPriority4,
                        mailPriority4: [],
                        sendMailCoincidences: settings === null || settings === void 0 ? void 0 : settings.sendMailCoincidences,
                        mailCoincidences: [],
                        sendMailAdditionalServices: settings === null || settings === void 0 ? void 0 : settings.sendMailAdditionalServices,
                        mailAdditionalServices: [],
                        sendMailAdministrative: settings === null || settings === void 0 ? void 0 : settings.sendMailAdministrative,
                        mailAministrative: [],
                        sendMailRoi: settings === null || settings === void 0 ? void 0 : settings.sendMailRoi,
                        mailRoi: [],
                        companyId: settings.companyId,
                    });
                }
                this.keys.forEach(key => {
                    var val = settings[key] != null && settings[key] != "" ? settings[key].split(",") : [];
                    this.notificationSettingForm.get(key).setValue(val);
                });
            });
        });
    }
    onChangeToggle(event) {
        console.log(event.rowSelect);
    }
    submitForm() {
        // var keys=["mailAdditionalServices","mailAministrative","mailCoincidences",
        // "mailPriority2","mailPriority3","mailPriority4","mailRoi"];
        var notificationSettingFormToSend = this.notificationSettingForm;
        this.keys.forEach(key => {
            var textEmails = "";
            if (!Array.isArray(this.notificationSettingForm.controls[key].value)) {
                const arr = Array.from(this.notificationSettingForm.controls[key].value);
                arr.forEach(element => {
                    textEmails += textEmails == "" ? element : "," + element;
                });
            }
            else {
                this.notificationSettingForm.controls[key].value.forEach(element => {
                    textEmails += textEmails == "" ? element : "," + element;
                });
            }
            notificationSettingFormToSend.get(key).setValue(textEmails);
        });
        const companyid = notificationSettingFormToSend.value.companyId;
        notificationSettingFormToSend.value.companyId = companyid == "" ? this.companyId : companyid;
        this.notificationSettingsService.updateCurrent(notificationSettingFormToSend.value, this.companyId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(settings => {
            this.initFormValue();
            this.showToast("Finalizado", "Se actualizo exitosamente!", 1, false);
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
        }, error => {
            this.loadingCheckName = false;
            this.showToast("Error", "No se pudo obtener nombre, por favor inténtelo más tarde", 4, false);
            this.initFormValue();
        });
    }
    onTagRemove(tagToRemove, keyArray) {
        // this.trees.delete(tagToRemove.text);    
        var arr = this.notificationSettingForm.controls[keyArray].value;
        const index = arr.indexOf(tagToRemove.text);
        if (index !== -1) {
            arr.splice(index, 1);
        }
        //delete arr[tagToRemove.text];
        //arr.delete(tagToRemove.text);
        this.notificationSettingForm.get(keyArray).setValue(arr);
        if (this.notificationSettingForm.get(keyArray).value.length == 0) {
            this.statusButton = true;
        }
        ;
        // this.notificationSettingForm.controls[keyArray]=this.notificationSettingForm.controls[keyArray].value.delete(tagToRemove.text)
    }
    onTagAdd({ value, input }, keyArray) {
        if (value) {
            let arr = [];
            if (this.notificationSettingForm.controls[keyArray].value != '') {
                arr = this.notificationSettingForm.controls[keyArray].value;
                arr.push(value);
            }
            else {
                arr[0] = value;
            }
            this.notificationSettingForm.get(keyArray).setValue(arr);
            if (this.notificationSettingForm.get(keyArray).value.length > 0) {
                this.statusButton = false;
            }
            ;
        }
        input.nativeElement.value = '';
    }
    ngOnInit() {
        this.initForm();
        this.initFormValue();
    }
    showToast(tittle, mesage, type, hasIcon) {
        const icon = hasIcon ? {} : { icon: '' };
        const position = _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        const config = Object.assign({ status: this.types[type], destroyByClick: true, duration: 3000, position: position, preventDuplicates: false }, icon);
        this.index += 1;
        this.toastrService.show(mesage, tittle, config);
    }
    changeStatus($event) {
        if ($event.target.checked) {
            this.statusButton = true;
        }
        else {
            this.statusButton = false;
        }
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_interfaces_common_smart_table__WEBPACK_IMPORTED_MODULE_1__["SmartTableData"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_interfaces_common_users__WEBPACK_IMPORTED_MODULE_4__["UserData"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_interfaces_common_notificationSettings__WEBPACK_IMPORTED_MODULE_5__["NotificationSettingsData"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbToastrService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["ngx-settings"]], decls: 88, vars: 29, consts: [[3, "formGroup"], [1, "row", "show-grid"], [1, "col-4"], [1, "row", "mt-3"], [1, "col-4", "mt-2"], ["status", "primary", "formControlName", "sendMailPriority1", 3, "checked", "change"], [3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "email", "nbTagInput", "", "fullWidth", "", "email", "", 3, "readonly", "tagAdd"], ["status", "primary", "formControlName", "sendMailPriority2", 3, "checked", "change"], ["status", "primary", "formControlName", "sendMailPriority3", 3, "checked", "change"], ["status", "primary", "formControlName", "sendMailPriority4", 3, "checked", "change"], ["status", "primary", "formControlName", "sendMailAdditionalServices", 3, "checked", "change"], ["status", "primary", "formControlName", "sendMailCoincidences", 3, "checked", "change"], ["status", "primary", "formControlName", "sendMailAdministrative", 3, "checked", "change"], ["status", "primary", "formControlName", "sendMailRoi", 3, "checked", "change"], [1, "col-12", "flex", "mt-3", "justify-content-center"], ["fullWidth", "", "nbButton", "", "status", "primary", "size", "large", "hero", "", 3, "disabled", "click"], ["removable", "", 3, "text"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Acci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Tipo de notificai\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " Destino ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "nb-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SettingsComponent_Template_nb_toggle_change_14_listener($event) { return ctx.changeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Habilitar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Prioridad 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "nb-tag-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagRemove", function SettingsComponent_Template_nb_tag_list_tagRemove_19_listener($event) { return ctx.onTagRemove($event, "mailPriority1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, SettingsComponent_nb_tag_20_Template, 1, 1, "nb-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagAdd", function SettingsComponent_Template_input_tagAdd_21_listener($event) { return ctx.onTagAdd($event, "mailPriority1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "nb-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SettingsComponent_Template_nb_toggle_change_23_listener($event) { return ctx.changeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Habilitar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, " Prioridad 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "nb-tag-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagRemove", function SettingsComponent_Template_nb_tag_list_tagRemove_28_listener($event) { return ctx.onTagRemove($event, "mailPriority2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, SettingsComponent_nb_tag_29_Template, 1, 1, "nb-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagAdd", function SettingsComponent_Template_input_tagAdd_30_listener($event) { return ctx.onTagAdd($event, "mailPriority2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "nb-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SettingsComponent_Template_nb_toggle_change_32_listener($event) { return ctx.changeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Habilitar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, " Prioridad 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "nb-tag-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagRemove", function SettingsComponent_Template_nb_tag_list_tagRemove_37_listener($event) { return ctx.onTagRemove($event, "mailPriority3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, SettingsComponent_nb_tag_38_Template, 1, 1, "nb-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagAdd", function SettingsComponent_Template_input_tagAdd_39_listener($event) { return ctx.onTagAdd($event, "mailPriority3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "nb-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SettingsComponent_Template_nb_toggle_change_41_listener($event) { return ctx.changeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Habilitar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " Prioridad 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "nb-tag-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagRemove", function SettingsComponent_Template_nb_tag_list_tagRemove_46_listener($event) { return ctx.onTagRemove($event, "mailPriority4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, SettingsComponent_nb_tag_47_Template, 1, 1, "nb-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagAdd", function SettingsComponent_Template_input_tagAdd_48_listener($event) { return ctx.onTagAdd($event, "mailPriority4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "nb-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SettingsComponent_Template_nb_toggle_change_50_listener($event) { return ctx.changeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Habilitar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, " Servicios adicionales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "nb-tag-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagRemove", function SettingsComponent_Template_nb_tag_list_tagRemove_55_listener($event) { return ctx.onTagRemove($event, "mailAdditionalServices"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](56, SettingsComponent_nb_tag_56_Template, 1, 1, "nb-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagAdd", function SettingsComponent_Template_input_tagAdd_57_listener($event) { return ctx.onTagAdd($event, "mailAdditionalServices"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "nb-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SettingsComponent_Template_nb_toggle_change_59_listener($event) { return ctx.changeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "Habilitar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, " Notificaciones de monitoreo de tercero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "nb-tag-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagRemove", function SettingsComponent_Template_nb_tag_list_tagRemove_64_listener($event) { return ctx.onTagRemove($event, "mailCoincidences"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](65, SettingsComponent_nb_tag_65_Template, 1, 1, "nb-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagAdd", function SettingsComponent_Template_input_tagAdd_66_listener($event) { return ctx.onTagAdd($event, "mailCoincidences"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "nb-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SettingsComponent_Template_nb_toggle_change_68_listener($event) { return ctx.changeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Habilitar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, " Notificaciones administrativas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "nb-tag-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagRemove", function SettingsComponent_Template_nb_tag_list_tagRemove_73_listener($event) { return ctx.onTagRemove($event, "mailAministrative"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](74, SettingsComponent_nb_tag_74_Template, 1, 1, "nb-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagAdd", function SettingsComponent_Template_input_tagAdd_75_listener($event) { return ctx.onTagAdd($event, "mailAministrative"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "nb-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SettingsComponent_Template_nb_toggle_change_77_listener($event) { return ctx.changeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "Habilitar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, " Notificaciones ROI/Denuncia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "nb-tag-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagRemove", function SettingsComponent_Template_nb_tag_list_tagRemove_82_listener($event) { return ctx.onTagRemove($event, "mailRoi"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](83, SettingsComponent_nb_tag_83_Template, 1, 1, "nb-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("tagAdd", function SettingsComponent_Template_input_tagAdd_84_listener($event) { return ctx.onTagAdd($event, "mailRoi"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_86_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 27, "NotificationModule.Configuracion_Notificaciones"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.notificationSettingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.notificationSettingForm.controls["sendMailPriority1"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.notificationSettingForm.controls["mailPriority1"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", !ctx.notificationSettingForm.controls["sendMailPriority1"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.notificationSettingForm.controls["sendMailPriority2"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.notificationSettingForm.controls["mailPriority2"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", !ctx.notificationSettingForm.controls["sendMailPriority2"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.notificationSettingForm.controls["sendMailPriority3"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.notificationSettingForm.controls["mailPriority3"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", !ctx.notificationSettingForm.controls["sendMailPriority3"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.notificationSettingForm.controls["sendMailPriority4"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.notificationSettingForm.controls["mailPriority4"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", !ctx.notificationSettingForm.controls["sendMailPriority4"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.notificationSettingForm.controls["sendMailAdditionalServices"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.notificationSettingForm.controls["mailAdditionalServices"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", !ctx.notificationSettingForm.controls["sendMailAdditionalServices"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.notificationSettingForm.controls["sendMailCoincidences"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.notificationSettingForm.controls["mailCoincidences"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", !ctx.notificationSettingForm.controls["sendMailCoincidences"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.notificationSettingForm.controls["sendMailAdministrative"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.notificationSettingForm.controls["mailAministrative"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", !ctx.notificationSettingForm.controls["sendMailAdministrative"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.notificationSettingForm.controls["sendMailRoi"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.notificationSettingForm.controls["mailRoi"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("readonly", !ctx.notificationSettingForm.controls["sendMailRoi"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.statusButton);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbToggleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbTagListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbTagInputDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbTagComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "pFqh":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/notifications/components/monitoring/monitoring.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringComponent", function() { return MonitoringComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/pagination-filter */ "36nv");
/* harmony import */ var _backend_common_services_notificationmonitoring_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../backend/common/services/notificationmonitoring.service */ "XBZW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "aceb");









class MonitoringComponent {
    constructor(_notificationmonitoringService, fb) {
        this._notificationmonitoringService = _notificationmonitoringService;
        this.fb = fb;
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
        this.paginationFilter = new _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_2__["PaginationFilter"]();
        this.settings = {
            /*isHideHeader: false,
            isPagerDisplay: true,*/
            actions: {
                add: false,
                edit: false,
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
                subject: {
                    title: 'Asunto',
                    type: 'string',
                    filter: false,
                },
                to: {
                    title: 'Para',
                    type: 'string',
                    filter: false,
                },
                status: {
                    title: 'Estado del registro',
                    type: 'string',
                    filter: false,
                },
                justification: {
                    title: 'Justificación de cambio',
                    type: 'string',
                    filter: false,
                },
                listDocument: {
                    title: 'Documento en Lista',
                    type: 'string',
                    filter: false,
                },
                listName: {
                    title: 'Nombre en Lista',
                    type: 'string',
                    filter: false,
                },
                typeList: {
                    title: 'Tipo de Lista',
                    type: 'string',
                    filter: false,
                },
                identificationNumber: {
                    title: 'Identificación Consultada',
                    type: 'string',
                    filter: false,
                },
                queryName: {
                    title: 'Nombre Consultado',
                    type: 'string',
                    filter: false,
                },
                queryDate: {
                    title: 'Fecha Envío',
                    type: 'string',
                    filter: false,
                },
                queryUser: {
                    title: 'Nombre Usuario',
                    type: 'string',
                    filter: false,
                },
                user: {
                    title: 'Usuario',
                    type: 'string',
                    filter: false,
                },
            },
        };
        // const data = this.getData();
        // this.source.load(data);
    }
    get rangeDate() {
        return this.formGroup.get('rangeDate');
    }
    get description() {
        return this.formGroup.get('search');
    }
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        this.initForm();
        this.getAll(false);
    }
    initForm() {
        this.formGroup = this.fb.group({
            search: this.fb.control(''),
            rangeDate: this.fb.control(null),
        });
    }
    //#region  Metodos Privados
    onSearch() {
        this.getAll(false);
    }
    ToExcel() {
        this.getAll(true);
    }
    //#endregion
    //#region Servicios
    //#region Get
    getAll(flag) {
        const filter = this.formGroup.value;
        filter.rangeDate;
        this.paginationFilter.query = filter.search;
        this.paginationFilter.startDate = filter.rangeDate != null ? filter.rangeDate.start.toISOString().split('T')[0] : '';
        this.paginationFilter.endDate = filter.rangeDate != null ? filter.rangeDate.end.toISOString().split('T')[0] : '';
        console.log(this.paginationFilter.endDate);
        if (!flag) {
            this._notificationmonitoringService.getAll(this.paginationFilter).subscribe((response) => {
                this.source.load(response.data);
            });
        }
        else {
            this._notificationmonitoringService.exportExcel(this.paginationFilter).subscribe((response) => {
                let filename = this.getFileName(response);
                let binaryData = [];
                binaryData.push(response.body);
                let downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
                downloadLink.setAttribute('download', filename);
                document.body.appendChild(downloadLink);
                downloadLink.click();
            });
        }
        //#endregion
        //#endregion
    }
    getFileName(response) {
        let filename;
        try {
            const contentDisposition = response.headers.get('content-disposition');
            const r = /(?:filename=")(.+)(?:;")/;
            filename = r.exec(contentDisposition)[1];
        }
        catch (e) {
            filename = `NotMonitoreo_${''}.xlsx`;
        }
        return filename;
    }
}
MonitoringComponent.ɵfac = function MonitoringComponent_Factory(t) { return new (t || MonitoringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_backend_common_services_notificationmonitoring_service__WEBPACK_IMPORTED_MODULE_3__["NotificationmonitoringService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
MonitoringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MonitoringComponent, selectors: [["ngx-monitoring"]], decls: 27, vars: 4, consts: [[1, "own-scroll"], [3, "formGroup"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], ["nbInput", "", "fullWidth", "", "formControlName", "search", "placeholder", "Buscar...", 1, "form-control"], ["id", "rangeDate", "nbInput", "", "fullWidth", "", "placeholder", "Fecha desde - Fecha hasta", "formControlName", "rangeDate", 3, "nbDatepicker"], ["rangepicker", ""], ["status", "primary", "nbButton", "", "nbSuffix", "", 1, "align-self-center", 3, "click"], ["nbButton", "", "hero", "", 1, "ml-4"], ["status", "success", "nbButton", "", "nbSuffix", "", 1, "align-self-center", 3, "click"], [1, "example-smart-table", 3, "settings", "source"]], template: function MonitoringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "BUSQUEDA NOTIFICIACIONES DE MONITOREO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "nb-rangepicker", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MonitoringComponent_Template_button_click_15_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " BUSCAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " CANCELAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Consulta notificaciones monitoreo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MonitoringComponent_Template_button_click_24_listener() { return ctx.ToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "ng2-smart-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nbDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDatepickerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbRangepickerComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSuffixDirective"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb25pdG9yaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "z/Vt":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/notifications/backend/common/services/notification-sent.service.ts ***!
  \******************************************************************************************/
/*! exports provided: NotificationSentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSentService", function() { return NotificationSentService; });
/* harmony import */ var _api_notification_sent_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/notification-sent.api */ "WeQd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NotificationSentService {
    constructor(api) {
        this.api = api;
    }
    list(paginationFilter) {
        return this.api.list(paginationFilter);
    }
    getServerDataSource() {
        return this.api.getServerDataSource();
    }
    getNotification(id) {
        return this.api.getNotification(id);
    }
    getExcel(filter) {
        return this.api.getExportExcel(filter);
    }
}
NotificationSentService.ɵfac = function NotificationSentService_Factory(t) { return new (t || NotificationSentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_notification_sent_api__WEBPACK_IMPORTED_MODULE_0__["NotificationSentApi"])); };
NotificationSentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationSentService, factory: NotificationSentService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map