(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-extra-module"],{

/***/ "3Oqu":
/*!*********************************************!*\
  !*** ./src/app/pages/extra/extra.module.ts ***!
  \*********************************************/
/*! exports provided: ExtraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraModule", function() { return ExtraModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _extra_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extra-routing.module */ "LVBv");
/* harmony import */ var _extra_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extra.component */ "CkqY");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/help/help.component */ "fxSY");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tables/tables-routing.module */ "Qy2A");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "H+Cs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");














const components = [
    _extra_component__WEBPACK_IMPORTED_MODULE_2__["ExtraComponent"],
    _components_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"],
    _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__["FaqsComponent"]
];
class ExtraModule {
}
ExtraModule.ɵfac = function ExtraModule_Factory(t) { return new (t || ExtraModule)(); };
ExtraModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ExtraModule });
ExtraModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _extra_routing_module__WEBPACK_IMPORTED_MODULE_1__["ExtraRoutingModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAccordionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridModule"],
            _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_7__["TablesRoutingModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ExtraModule, { declarations: [_extra_component__WEBPACK_IMPORTED_MODULE_2__["ExtraComponent"], _components_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__["FaqsComponent"], _extra_component__WEBPACK_IMPORTED_MODULE_2__["ExtraComponent"],
        _components_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"],
        _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__["FaqsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _extra_routing_module__WEBPACK_IMPORTED_MODULE_1__["ExtraRoutingModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRadioModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAccordionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridModule"],
        _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_7__["TablesRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"]] }); })();


/***/ }),

/***/ "CkqY":
/*!************************************************!*\
  !*** ./src/app/pages/extra/extra.component.ts ***!
  \************************************************/
/*! exports provided: ExtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraComponent", function() { return ExtraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ExtraComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExtraComponent.ɵfac = function ExtraComponent_Factory(t) { return new (t || ExtraComponent)(); };
ExtraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtraComponent, selectors: [["ngx-extra"]], decls: 1, vars: 0, template: function ExtraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHRyYS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "H+Cs":
/*!***************************************************************!*\
  !*** ./src/app/pages/extra/components/faqs/faqs.component.ts ***!
  \***************************************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");


class FaqsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqsComponent.ɵfac = function FaqsComponent_Factory(t) { return new (t || FaqsComponent)(); };
FaqsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqsComponent, selectors: [["ngx-faqs"]], decls: 233, vars: 0, consts: [[1, "accordions-container", "row", "justify-content-center"], [1, "accordion-container", "col-10"], ["multi", ""]], template: function FaqsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-accordion", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00BFCu\u00E1l es el \u00E1mbito de aplicaci\u00F3n del nuevo Decreto 830 de 2021? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " No tiene aplicaci\u00F3n restringida a un sector en concreto ni est\u00E1 vinculado a un sistema de prevenci\u00F3n y gesti\u00F3n de riesgos en espec\u00EDfico (ll\u00E1mese SAGRILAFT, SARLAFT, SIPLAFT o cualquier otro). Se trata de una regulaci\u00F3n general en aplicaci\u00F3n de lo dispuesto en el Art. 52 de la Convenci\u00F3n de las Naciones Unidas contra la corrupci\u00F3n y Recomendaciones del GAFI y como tal tiene aplicaci\u00F3n en todo el territorio nacional independiente de la regulaci\u00F3n que aplique a un sujeto obligado. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Contrase\u00F1a bloqueada \u00BFQu\u00E9 hago? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cuando se ingresa 3 veces de forma incorrecta la contrase\u00F1a se bloquea. Se debe solicitar al administrador de la cuenta ingresar a configuraci\u00F3n, consultar usuario y all\u00ED selecciona la opci\u00F3n restablecer contrase\u00F1a y es importante cambiar el estado de inactivo a activo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Los testigos se registran en Inspektor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Para efectos de los sistemas de gesti\u00F3n de riesgos LA/FT/CO y alineado con el servicio de consulta en Listas que ofrece nuestra compa\u00F1\u00EDa, es importante aclarar en el marco de actuaciones procesales judiciales \u00BFqui\u00E9nes son objeto de inclusi\u00F3n en nuestra base de datos? y \u00BFpor qu\u00E9?, debiendo indicar desde ya que no se hace an\u00E1lisis, inclusi\u00F3n o reporte alguno de persona diferente al procesado (entre ellos los testigos). Se debe recordar que un testigo es llamado al proceso para que rinda su declara ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00BFC\u00F3mo cargar las listas propias? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Este proceso solo lo puede realizar el rol administrador. Para realizar el cargue de una lista propia, deben dirigirse al m\u00F3dulo listas restrictivas, sub-modulo cargar listas propias, ver\u00E1n la opci\u00F3n seleccionar archivo y all\u00ED deben cargar la plantilla enviada por nosotros con la informaci\u00F3n. Para realizar este proceso, recuerden lo siguiente: 1. Todos los datos que se ingresen deber\u00E1n ser diligenciados con precisi\u00F3n debido a que las Listas Propias solo manejan prioridad 1. 2. No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00BFPuede una persona jur\u00EDdica cometer un delito en Colombia? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u00A1En Colombia no existe un r\u00E9gimen de responsabilidad penal de las personas jur\u00EDdicas! En este sentido, bajo ning\u00FAn contexto, puede hablarse de la comisi\u00F3n de un delito por una empresa y cuando el mismo se geste en su interior o a trav\u00E9s de la misma, se evaluar\u00E1 qui\u00E9nes son las personas naturales que concurrieron a su realizaci\u00F3n y es sobre las mismas que recaer\u00E1 la acci\u00F3n penal y las consecuencias derivadas del delito. Ahora, la empresa (personas jur\u00EDdicas en general), puede resu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00BFPuede una persona jur\u00EDdica cometer un delito en Colombia? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u00A1En Colombia no existe un r\u00E9gimen de responsabilidad penal de las personas jur\u00EDdicas! En este sentido, bajo ning\u00FAn contexto, puede hablarse de la comisi\u00F3n de un delito por una empresa y cuando el mismo se geste en su interior o a trav\u00E9s de la misma, se evaluar\u00E1 qui\u00E9nes son las personas naturales que concurrieron a su realizaci\u00F3n y es sobre las mismas que recaer\u00E1 la acci\u00F3n penal y las consecuencias derivadas del delito. Ahora, la empresa (personas jur\u00EDdicas en general), puede resultar vincul ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00BFLa consulta arroja un mensaje de error? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Si al realizar la consulta se obtiene un mensaje en pantalla de \u00A1Error! con el texto \"Error al cargar la informaci\u00F3n. Referencia a objeto no establecida como instancia de un objeto (...)\", ello se debe a que se ha superado el tiempo de inactividad en Inspektor. En este caso, es necesario loguearse de nuevo en la aplicaci\u00F3n y realizar de nuevo la consulta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u00BFPor qu\u00E9 arroja error la consulta masiva de PGN y Rama Judicial? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Para quienes tienen contratado este servicio, en las consultas masivas es importante mantener los formatos tal y como se han puesto a disposici\u00F3n ingresando la informaci\u00F3n completa que se requiere. Para la consulta masiva en Procuradur\u00EDa y Rama Judicial exige incluir informaci\u00F3n correspondiente al tipo de Identificaci\u00F3n, debiendo recordar que \"PEP : 0 , C\u00E9dula de ciudadan\u00EDa : 1, Nit: 2 y C\u00E9dula de extranjer\u00EDa: 5\". Adicionalmente, para los tipos de identificaci\u00F3n NIT, se deber\u00E1 ingresar el d\u00EDgit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u00BFQu\u00E9 hacer cuando un tercero tiene coincidencia en la lista OFAC? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Se deber\u00E1 descartar que no se trate de la misma persona validando los datos del tercero. Si se confirma que es la persona se deber\u00E1 reportar al oficial de cumplimiento y/o encargado y acatar las politicas u procedimientos de el SARLAFT correspondiente a la entidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u00BFPor qu\u00E9 en una consulta aparece coincidencia de prioridad 3? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Debido a que la informaci\u00F3n la obtenemos de medios p\u00FAblicos, no en todos los casos se obtienen los n\u00FAmeros de identificaci\u00F3n y por tanto registran estos llamados hom\u00F3nimos los cuales se podr\u00E1n descartar verificando la informaci\u00F3n de la noticia registrada en la coincidencia, con datos como el lugar de nacimiento, el lugar de los hechos, la edad, el cargo y hasta la foto de la persona si es que aparece. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u00BFQue funci\u00F3n tiene el Reporte de Consultas y Coincidencias Detalle? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Este Subm\u00F3dulo permitir\u00E1 ver el n\u00FAmero de veces consultado un tercero en el rango de fechas, el usuario que realiza la gesti\u00F3n, el n\u00FAmero de consulta obtenido y el detalle de la informaci\u00F3n del registrado en la herramienta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u00BFPor qu\u00E9 no arroja coincidencias una consulta de un NIT con digito de verificaci\u00F3n? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Las personas jur\u00EDdicas se deben de consultar sin el digito de verificaci\u00F3n, ya que estas se encuentran ingresadas en nuestra herramienta sin dicho n\u00FAmero. Sin embargo, cuando se habilita la consulta en l\u00EDnea de la Procuradur\u00EDa ser\u00E1 posible diligenciarlo en una casilla aparte puesto que la pagina como tal lo solicita ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " \u00BFQu\u00E9 significa cuando en una consulta aparece coincidencia de prioridad 2? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Si al consultar un tercero le da como resultado prioridad 2, es porque el tercero tiene coincidencia \u00FAnicamente en el n\u00FAmero del documento y en este caso la forma de descartarlo es, comparando la informaci\u00F3n del registrado con en la herramienta con la Procuradur\u00EDa, Rama Judicial y en caso de ser persona jur\u00EDdica en RUES. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u00BFQu\u00E9 significa el correo enviado por ustedes que dice Notificaci\u00F3n de coincidencia Prioridad 3? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Quiere decir que su usuario y/o alg\u00FAn otro ya creado a cargo suyo, realizo una consulta de la cual se obtuvo como resultado una coincidencia en este caso de prioridad 3 y la herramienta se lo est\u00E1 notificando. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " \u00BFQu\u00E9 significa el correo enviado por ustedes que dice Notificaci\u00F3n de coincidencia Prioridad 2? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Quiere decir que alg\u00FAn usuario de la plataforma, realizo una consulta de la cual se obtuvo como resultado una coincidencia en este caso de prioridad 2 y la herramienta se lo est\u00E1 notificando. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " \u00BFQu\u00E9 significa el correo enviado por ustedes que dice Notificaci\u00F3n de coincidencia Prioridad 1? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Quiere decir que alg\u00FAn usuario de la plataforma, realizo una consulta de la cual se obtuvo como resultado una coincidencia en este caso de prioridad 1 y la herramienta se lo est\u00E1 notificando. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " \u00BFQu\u00E9 significa EL NUMERO DE IDENTIFICACION CONSULTADO NO SE ENCUENTRA REGISTRADO EN EL SISTEMA ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Este mensaje \u00FAnicamente aparece cuando se a\u00F1ade la consulta en l\u00EDnea de la Procuradur\u00EDa y dentro de la informaci\u00F3n de esa p\u00E1gina como tal aun no est\u00E1n registrados los antecedentes. En casos de tal \u00EDndole es necesario informar al tercero que se comunique con la p\u00E1gina de la Procuradur\u00EDa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " \u00BFEn que consiste el sistema autom\u00E1tico de monitoreo transaccional? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Es un servicio de la herramienta donde se monitorea todas las consultas que se hagan en la plataforma informando si se llegan a encontrar coincidencias posteriormente. Cada vez que se consulte una persona, la herramienta almacena esta informaci\u00F3n y si esta persona en el futuro llegara a ser ingresada o actualizada en alguna de las listas, se notificara autom\u00E1ticamente mediante el correo electr\u00F3nico parametrizado y no tener que hacer consulta de la misma persona. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \u00BFComo puedo generar un reporte de una consulta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Al momento de generar un reporte, deber\u00E1 tener en cuenta, que el navegador cuente con la habilitaci\u00F3n de ventanas emergentes, que no se haya otra ventana emergente abierta de la herramienta y si la tiene, lo recomendado ser\u00E1 cerrarla y luego dar clic en Generar Reporte para que abra la informaci\u00F3n actualizada. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " \u00BFQuiero saber para qu\u00E9 sirve la opci\u00F3n de PEP en el tipo de documento? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " El tipo de documento PEP, solicitado en la p\u00E1gina de la Procuradur\u00EDa es el tipo de documento Permiso Especial de Permanencia establecido para las personas provenientes de Venezuela. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " \u00BFComo puedo descargar un reporte donde aparezca informaci\u00F3n de consultas realizadas, la cantidad por n\u00FAmero de consulta, nombre de la persona y tercero consultado? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Un reporte del cual se puede obtener informaci\u00F3n completa se puede obtener \u00FAnicamente con el usuario que tenga rol Administrador, por medio del m\u00F3dulo Log, sub modulo Reporte de Consultas & Coincidencias. Luego deber\u00E1 seleccionar el rango de fechas del cual quiera la informaci\u00F3n y da clic en el icono de Excel. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " \u00BFComo puedo consultar personas con pasaporte? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Para realizar la consulta de persona con pasaporte es necesario ingresarlo con letras y n\u00FAmeros. No deber\u00E1 habilitar Consulta en l\u00EDnea de la Procuradur\u00EDa ni Rama Judicial, puesto que las paginas fuente no manejan este documento y lo que har\u00E1 la herramienta ser\u00E1 consultar las listas de la base de datos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " \u00BFQu\u00E9 significa que en una consulta aparece coincidencia de prioridad 1? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Si al consultar un tercero le da como resultado prioridad 1, significa que se encontr\u00F3 coincidencia exacta en el documento de identificaci\u00F3n y nombre. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " \u00BFQu\u00E9 significa el grupo de color verde? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " El grupo de color verde se encuentran listas informativas y personas pol\u00EDticamente y p\u00FAblicamente expuestas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " \u00BFQu\u00E9 significa el grupo de listas de color rojo? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " El grupo de color rojo Listas Restrictivas se encuentran personas y empresas relacionadas directamente con lavado de activos y financiaci\u00F3n del terrorismo, espec\u00EDficamente con las listas OFAC y ONU. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " \u00BFQu\u00E9 significa el grupo de listas de color amarillo? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " El grupo de color amarillo se encuentran listas de las empresas o personas que actualmente presentan inconveniente en su \u00E1rea financiera, econ\u00F3mica, operativa y/o administrativa (no quiere decir que est\u00E9n directamente relacionadas a delitos LAFT, pero si pueden estar vulnerables a estos). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " \u00BFQuiero saber por qu\u00E9 la lista de color naranja pertenece al grupo \u201Clistas asociadas al LA/FT y anticorrupci\u00F3n ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Las listas de color naranja asocian medidas de cautela y/o investigaci\u00F3n que involucran desde delitos contra la administraci\u00F3n p\u00FAblica, lavado de activos hasta fraude fiscal. Esto para poder diferenciar las listas restrictivas de las vinculantes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " \u00BFC\u00F3mo puedo obtener un archivo con las listas actuales de Inspektor? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Para poder enviar el documento actualizado que contiene la informaci\u00F3n de las listas y la colorimetr\u00EDa actual de Inspektor, le solicitamos nos env\u00EDe el requerimiento al correo: soporte@riskconsultingcolombia.com por este medio enviaremos el archivo con la informaci\u00F3n solicitada al correo que nos indique. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " \u00BFCu\u00E1les son los motivos por los cuales un tercero natural o jur\u00EDdico es eliminado de la OFAC? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Cuando registra una persona Natural o Jur\u00EDdica en la lista OFAC la \u00FAnica raz\u00F3n por la cual pudo estar registrado es porque tuvo v\u00EDnculos con lavado de activos, narcotr\u00E1fico, terrorismo y algunos por corrupci\u00F3n y en el caso de ser eliminados es porque generalmente se acogen a alg\u00FAn acuerdo econ\u00F3mico o logran comprobar el origen de sus ingresos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " \u00BFEs posible consultar una tarjeta de identidad en Inspektor? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " En nuestra base de datos s\u00ED es posible consultar un tercero identificado con tarjeta de identidad, sin embargo, para realizar esta consulta se deben deshabilitar las opciones de Procuradur\u00EDa y Rama Judicial, ya que estas p\u00E1ginas no contemplan el par\u00E1metro de b\u00FAsqueda con este tipo de identificaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " \u00BFEs necesario habilitar la prioridad tres? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Este tipo de prioridad corresponde a coincidencias \u00FAnicamente en el nombre, en caso de no requerir dicha opci\u00F3n, el usuario puede deshabilitarla y el sistema no deber\u00E1 realizar la consulta utilizando esa prioridad. Pero siempre se recomienda dejarla habilitada. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " \u00BFC\u00F3mo puedo acceder al manual de usuario en Inspektor? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Nuestra herramienta cuenta con un instructivo que le permite conocer los diferentes procesos que puede llevar a cabo seg\u00FAn el rol establecido para un usuario. Para acceder a este manual debe realizar los siguientes pasos: 1. Dirigirse al m\u00F3dulo MI CUENTA 2. Sub \u2013 Modulo AYUDA 3. MANUAL DEL USUARIO, 4. VER MANUAL DE SUARIO, en esta opci\u00F3n usted puede descargar el instructivo en formato PDF. Se debe tener en cuenta que cada usuario tendr\u00E1 el manual disponible seg\u00FAn el rol que le corresponda. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " \u00BFEl aplicativo cuenta con una opci\u00F3n que indique cuando se actualiz\u00F3 cada una de las listas? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Cuando se realiza una consulta en nuestra base de datos, el detalle de la informaci\u00F3n le indicar\u00E1 la fecha en que el registro fue actualizado. Sin embargo, un m\u00F3dulo en donde usted pueda consultar una fecha exacta de actualizaci\u00F3n de listas no est\u00E1 disponible dado que la gran mayor\u00EDa de ellas se actualizan diariamente con nueva informaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " \u00BFPuedo reemplazar la informaci\u00F3n contenida en una lista propia? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " La informaci\u00F3n contenida en la base de listas propias s\u00ED se puede modificar, no obstante, Para realizar este proceso, tenga en cuenta lo siguiente: a) Todos los datos que se ingresen deber\u00E1n ser diligenciados con precisi\u00F3n debido a que las Listas Propias solo manejan prioridad 1. b) Cuando realice la actualizaci\u00F3n de la plantilla deber\u00E1 dejar los datos antiguos para mantener el hist\u00F3rico de la informaci\u00F3n ya registrada si as\u00ED desea, pues solo se puede cargar una plantilla. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " \u00BFPara qu\u00E9 se utiliza el cargue masivo de listas propias? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Esta es una opci\u00F3n en nuestra herramienta que permite realizar un cargue masivo de una base de datos en la cual podr\u00E1 incluir personas o empresas con las que se desea realizar prevenci\u00F3n a futuro, evitando nuevos v\u00EDnculos. Esta lista es personalizada para cada cliente y solo puede ser alimentada por un Rol Administrador. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " \u00BFQu\u00E9 funci\u00F3n cumple el subm\u00F3dulo notificaciones? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Este subm\u00F3dulo permite realizar la parametrizaci\u00F3n de los correos electr\u00F3nicos para el env\u00EDo de las notificaciones, en cuanto se encuentre una coincidencia al realizar una consulta en listas restrictivas. El usuario debe parametrizar los correos que desee para cada una de las prioridades de b\u00FAsqueda. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " \u00BFPor qu\u00E9 los usuarios no pueden ser eliminados? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Los usuarios no son eliminados, se cambian a estado bloqueado para no perder la trazabilidad de la informaci\u00F3n consultada, o en caso de que un usuario deba ausentarse por un periodo de tiempo se pueda bloquear hasta su regreso y designar a otra persona con el mismo rol para efectuar sus funciones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " \u00BFQu\u00E9 significa el enunciado de cargo o delito en la herramienta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Esta casilla hace referencia al delito cometido o a la acusaci\u00F3n emitida en contra de la entidad o persona consultada. En el caso de los PEP\u00B4S se refiere a la a la funci\u00F3n o cargo que desempe\u00F1e el tercero consultado. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " No se encontraron coincidencias de un tercero el cual se tiene conocimientos que est\u00E1 involucrado con alg\u00FAn delito. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " En este caso se debe tener en cuenta que el alcance de nuestro servicio es alertar a nuestros clientes en temas relacionados a delitos LA/FT y que nuestra labor se limita a informaci\u00F3n que se encuentre en fuentes p\u00FAblicas de informaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " \u00BFA que corresponde la lista delitos contra el sistema financiero? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " En esta lista se encuentran ingresadas personas sindicadas o juzgadas por delitos tales como: -Utilizaci\u00F3n indebida de fondos captados del p\u00FAblico. -Operaciones no autorizadas con accionistas o asociados. -Captaci\u00F3n Masiva y Habitual de Dinero. -Manipulaci\u00F3n fraudulenta de especies inscritas en el Registro Nacional de Valores e Intermediarios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " \u00BFPor qu\u00E9 no puedo generar el log de las consultas? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Esto puede suceder porque las consultas realizadas en el rango de fechas establecido sobrepasan el l\u00EDmite de resultados (90.000) que Inspektor puede mostrar, en este caso recomendamos seleccionar un rango de fechas inferior. Si tomando esta medida no se logra obtener la informaci\u00F3n, se puede poner en contacto con nosotros para escalar el caso a nuestra \u00E1rea correspondiente y darle soporte en su requerimiento. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " \u00BFEs necesario quitar los puntos para consultar en Inspektor? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " Para realizar una consulta en nuestro aplicativo es necesario que se realice sin ning\u00FAn car\u00E1cter especial (comas, tildes, puntos, ap\u00F3strofos, entre otros...), estos se tienen que eliminar y los guiones se tienen que reemplazar con un espacio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " \u00BFQu\u00E9 significa la lista 53 - Entidades sin \u00E1nimo de lucro ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Esta lista se implement\u00F3 con la finalidad de informar a nuestros clientes, ya que las empresas sin \u00E1nimo de lucro presentan alto grado de vulnerabilidad a ser utilizadas para los delitos LAFT, seg\u00FAn la recomendaci\u00F3n 8 del GAFI. No significa necesariamente que la empresa est\u00E9 envuelta en alg\u00FAn delito, se encuentra all\u00ED para que ustedes tengan un manejo especial. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " \u00BFLa lista de personas expuestas pol\u00EDticamente se encuentra actualizada? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Actualmente esta lista se encuentra actualizada seg\u00FAn lo establecido por el decreto 1674 del 2016, el cual tiene como objeto definir qui\u00E9nes son las Personas Expuestas Pol\u00EDticamente y en que consiste su obligaci\u00F3n con el sistema financiero en raz\u00F3n de dicha condici\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " \u00BFEs posible eliminar el registro de actividad en Inspektor? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Este proceso no es posible llevarlo a cabo, ya que la informaci\u00F3n contenida en Inspektor no se puede eliminar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " \u00BFPor qu\u00E9 el aplicativo no me arroja coincidencias? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " Cuando en el aplicativo aparece el mensaje no arroja coincidencias con los par\u00E1metros de b\u00FAsqueda, esto indica que la persona natural o jur\u00EDdica no se encuentra registrada en ninguna de nuestras listas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionItemBodyComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXFzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "LVBv":
/*!*****************************************************!*\
  !*** ./src/app/pages/extra/extra-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ExtraRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraRoutingModule", function() { return ExtraRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _extra_extra_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extra/extra.component */ "CkqY");
/* harmony import */ var _extra_components_help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extra/components/help/help.component */ "fxSY");
/* harmony import */ var _extra_components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extra/components/faqs/faqs.component */ "H+Cs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [{
        path: '',
        component: _extra_extra_component__WEBPACK_IMPORTED_MODULE_1__["ExtraComponent"],
        children: [{
                path: 'help',
                component: _extra_components_help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"],
            },
        ],
    }, {
        path: '',
        component: _extra_extra_component__WEBPACK_IMPORTED_MODULE_1__["ExtraComponent"],
        children: [{
                path: 'faqs',
                component: _extra_components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__["FaqsComponent"],
            },
        ],
    }];
class ExtraRoutingModule {
}
ExtraRoutingModule.ɵfac = function ExtraRoutingModule_Factory(t) { return new (t || ExtraRoutingModule)(); };
ExtraRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ExtraRoutingModule });
ExtraRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ExtraRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routedComponents = [
    _extra_extra_component__WEBPACK_IMPORTED_MODULE_1__["ExtraComponent"],
    _extra_components_help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"],
    _extra_components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__["FaqsComponent"],
];


/***/ }),

/***/ "fxSY":
/*!***************************************************************!*\
  !*** ./src/app/pages/extra/components/help/help.component.ts ***!
  \***************************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HelpComponent_nb_list_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", row_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", row_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r1.name, " ");
} }
// import {$} from "protractor";
class HelpComponent {
    constructor(iconsLibrary, dialogService) {
        this.dialogService = dialogService;
        // displayStyle = "none";
        this.pdfType = 1;
        this.videoType = 2;
        this.data = [{
                type: this.pdfType,
                name: 'Manual de Usuario',
                'url': 'https://inspektor.datalaft.com:448/ManualUsuario.pdf',
                icon: 'document',
            }, {
                type: this.videoType,
                name: 'Política de tratamiento de datos',
                'url': 'https://inspektor.datalaft.com:448/PoliticaTratamiento.pdf',
                icon: 'document',
            }, {
                type: this.videoType,
                name: 'Listas y Colorimetría',
                'url': 'https://inspektor.datalaft.com:448/LISTADOS_Y_COLORIMETRIA_%20INSPEKTOR.pdf',
                icon: 'document',
            }, {
                type: this.videoType,
                name: 'Preguntas y Respuestas Rama Judicial',
                'url': 'https://inspektor.datalaft.com:448/preguntas_respuestas_rama_judicial.pdf',
                icon: 'document',
            }, {
                type: this.videoType,
                name: 'Tutorial inspektor',
                'url': 'https://inspektor.datalaft.com:448/Inspektor_Vr5.0_Tutorial.mp3',
                icon: 'social-youtube',
            }, {
                type: this.videoType,
                name: 'Nuevas Funcionalidades',
                'url': 'https://inspektor.datalaft.com:448/Inspektor_Vr5.0_NuevasFuncionalidades.mp3',
                icon: 'social-youtube',
            }, {
                type: this.videoType,
                name: 'Cambios anteriores',
                'url': 'https://inspektor.datalaft.com:448/Inspektor_Vr5.0_RecientesFuncionalidades.mp3',
                icon: 'social-youtube',
            }];
        iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
    }
    ngOnInit() {
    }
    openModal(dialog, url) {
        this.url = url;
        // this.displayStyle = "block";
        // $("#myModal").modal('show');
        this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog', dialogClass: 'model-full' });
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconLibraries"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"])); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["ngx-help"]], decls: 8, vars: 1, consts: [[1, "lists", "row", "justify-content-center"], [1, "col-8"], [1, "list-card"], [4, "ngFor", "ngForOf"], ["pack", "ion", 1, "mr-2", 3, "icon"], ["target", "_blank", 3, "href"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ayuda y Manuales de Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HelpComponent_nb_list_item_7_Template, 4, 3, "nb-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbListItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconComponent"]], styles: [".model-full[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n.model-full[_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  width: 99% !important;\n  height: 99% !important;\n}\n.model-full[_ngcontent-%COMP%]   nb-dialog-container[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n.model-full[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  display: block !important;\n  width: 100% !important;\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUVFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUFKO0FBRUU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSiIsImZpbGUiOiJoZWxwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGVsLWZ1bGwge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcclxuICAgIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTklICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBuYi1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNkay1vdmVybGF5LXBhbmV7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=extra-extra-module-es2015.js.map