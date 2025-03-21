(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-extra-module"], {
    /***/
    "3Oqu":
    /*!*********************************************!*\
      !*** ./src/app/pages/extra/extra.module.ts ***!
      \*********************************************/

    /*! exports provided: ExtraModule */

    /***/
    function Oqu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtraModule", function () {
        return ExtraModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _extra_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./extra-routing.module */
      "LVBv");
      /* harmony import */


      var _extra_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./extra.component */
      "CkqY");
      /* harmony import */


      var _components_help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/help/help.component */
      "fxSY");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      "vTDv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../tables/tables-routing.module */
      "Qy2A");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/faqs/faqs.component */
      "H+Cs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var components = [_extra_component__WEBPACK_IMPORTED_MODULE_2__["ExtraComponent"], _components_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__["FaqsComponent"]];

      var ExtraModule = /*#__PURE__*/_createClass(function ExtraModule() {
        _classCallCheck(this, ExtraModule);
      });

      ExtraModule.ɵfac = function ExtraModule_Factory(t) {
        return new (t || ExtraModule)();
      };

      ExtraModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: ExtraModule
      });
      ExtraModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _extra_routing_module__WEBPACK_IMPORTED_MODULE_1__["ExtraRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAccordionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridModule"], _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_7__["TablesRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ExtraModule, {
          declarations: [_extra_component__WEBPACK_IMPORTED_MODULE_2__["ExtraComponent"], _components_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__["FaqsComponent"], _extra_component__WEBPACK_IMPORTED_MODULE_2__["ExtraComponent"], _components_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__["FaqsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _extra_routing_module__WEBPACK_IMPORTED_MODULE_1__["ExtraRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAccordionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridModule"], _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_7__["TablesRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"]]
        });
      })();
      /***/

    },

    /***/
    "CkqY":
    /*!************************************************!*\
      !*** ./src/app/pages/extra/extra.component.ts ***!
      \************************************************/

    /*! exports provided: ExtraComponent */

    /***/
    function CkqY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtraComponent", function () {
        return ExtraComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ExtraComponent = /*#__PURE__*/function () {
        function ExtraComponent() {
          _classCallCheck(this, ExtraComponent);
        }

        _createClass(ExtraComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExtraComponent;
      }();

      ExtraComponent.ɵfac = function ExtraComponent_Factory(t) {
        return new (t || ExtraComponent)();
      };

      ExtraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExtraComponent,
        selectors: [["ngx-extra"]],
        decls: 1,
        vars: 0,
        template: function ExtraComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHRyYS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "H+Cs":
    /*!***************************************************************!*\
      !*** ./src/app/pages/extra/components/faqs/faqs.component.ts ***!
      \***************************************************************/

    /*! exports provided: FaqsComponent */

    /***/
    function HCs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqsComponent", function () {
        return FaqsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");

      var FaqsComponent = /*#__PURE__*/function () {
        function FaqsComponent() {
          _classCallCheck(this, FaqsComponent);
        }

        _createClass(FaqsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FaqsComponent;
      }();

      FaqsComponent.ɵfac = function FaqsComponent_Factory(t) {
        return new (t || FaqsComponent)();
      };

      FaqsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FaqsComponent,
        selectors: [["ngx-faqs"]],
        decls: 233,
        vars: 0,
        consts: [[1, "accordions-container", "row", "justify-content-center"], [1, "accordion-container", "col-10"], ["multi", ""]],
        template: function FaqsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-accordion", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \xBFCu\xE1l es el \xE1mbito de aplicaci\xF3n del nuevo Decreto 830 de 2021? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " No tiene aplicaci\xF3n restringida a un sector en concreto ni est\xE1 vinculado a un sistema de prevenci\xF3n y gesti\xF3n de riesgos en espec\xEDfico (ll\xE1mese SAGRILAFT, SARLAFT, SIPLAFT o cualquier otro). Se trata de una regulaci\xF3n general en aplicaci\xF3n de lo dispuesto en el Art. 52 de la Convenci\xF3n de las Naciones Unidas contra la corrupci\xF3n y Recomendaciones del GAFI y como tal tiene aplicaci\xF3n en todo el territorio nacional independiente de la regulaci\xF3n que aplique a un sujeto obligado. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Contrase\xF1a bloqueada \xBFQu\xE9 hago? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cuando se ingresa 3 veces de forma incorrecta la contrase\xF1a se bloquea. Se debe solicitar al administrador de la cuenta ingresar a configuraci\xF3n, consultar usuario y all\xED selecciona la opci\xF3n restablecer contrase\xF1a y es importante cambiar el estado de inactivo a activo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Los testigos se registran en Inspektor ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Para efectos de los sistemas de gesti\xF3n de riesgos LA/FT/CO y alineado con el servicio de consulta en Listas que ofrece nuestra compa\xF1\xEDa, es importante aclarar en el marco de actuaciones procesales judiciales \xBFqui\xE9nes son objeto de inclusi\xF3n en nuestra base de datos? y \xBFpor qu\xE9?, debiendo indicar desde ya que no se hace an\xE1lisis, inclusi\xF3n o reporte alguno de persona diferente al procesado (entre ellos los testigos). Se debe recordar que un testigo es llamado al proceso para que rinda su declara ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \xBFC\xF3mo cargar las listas propias? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Este proceso solo lo puede realizar el rol administrador. Para realizar el cargue de una lista propia, deben dirigirse al m\xF3dulo listas restrictivas, sub-modulo cargar listas propias, ver\xE1n la opci\xF3n seleccionar archivo y all\xED deben cargar la plantilla enviada por nosotros con la informaci\xF3n. Para realizar este proceso, recuerden lo siguiente: 1. Todos los datos que se ingresen deber\xE1n ser diligenciados con precisi\xF3n debido a que las Listas Propias solo manejan prioridad 1. 2. No ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \xBFPuede una persona jur\xEDdica cometer un delito en Colombia? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \xA1En Colombia no existe un r\xE9gimen de responsabilidad penal de las personas jur\xEDdicas! En este sentido, bajo ning\xFAn contexto, puede hablarse de la comisi\xF3n de un delito por una empresa y cuando el mismo se geste en su interior o a trav\xE9s de la misma, se evaluar\xE1 qui\xE9nes son las personas naturales que concurrieron a su realizaci\xF3n y es sobre las mismas que recaer\xE1 la acci\xF3n penal y las consecuencias derivadas del delito. Ahora, la empresa (personas jur\xEDdicas en general), puede resu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \xBFPuede una persona jur\xEDdica cometer un delito en Colombia? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \xA1En Colombia no existe un r\xE9gimen de responsabilidad penal de las personas jur\xEDdicas! En este sentido, bajo ning\xFAn contexto, puede hablarse de la comisi\xF3n de un delito por una empresa y cuando el mismo se geste en su interior o a trav\xE9s de la misma, se evaluar\xE1 qui\xE9nes son las personas naturales que concurrieron a su realizaci\xF3n y es sobre las mismas que recaer\xE1 la acci\xF3n penal y las consecuencias derivadas del delito. Ahora, la empresa (personas jur\xEDdicas en general), puede resultar vincul ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \xBFLa consulta arroja un mensaje de error? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Si al realizar la consulta se obtiene un mensaje en pantalla de \xA1Error! con el texto \"Error al cargar la informaci\xF3n. Referencia a objeto no establecida como instancia de un objeto (...)\", ello se debe a que se ha superado el tiempo de inactividad en Inspektor. En este caso, es necesario loguearse de nuevo en la aplicaci\xF3n y realizar de nuevo la consulta. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \xBFPor qu\xE9 arroja error la consulta masiva de PGN y Rama Judicial? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Para quienes tienen contratado este servicio, en las consultas masivas es importante mantener los formatos tal y como se han puesto a disposici\xF3n ingresando la informaci\xF3n completa que se requiere. Para la consulta masiva en Procuradur\xEDa y Rama Judicial exige incluir informaci\xF3n correspondiente al tipo de Identificaci\xF3n, debiendo recordar que \"PEP : 0 , C\xE9dula de ciudadan\xEDa : 1, Nit: 2 y C\xE9dula de extranjer\xEDa: 5\". Adicionalmente, para los tipos de identificaci\xF3n NIT, se deber\xE1 ingresar el d\xEDgit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \xBFQu\xE9 hacer cuando un tercero tiene coincidencia en la lista OFAC? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Se deber\xE1 descartar que no se trate de la misma persona validando los datos del tercero. Si se confirma que es la persona se deber\xE1 reportar al oficial de cumplimiento y/o encargado y acatar las politicas u procedimientos de el SARLAFT correspondiente a la entidad. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \xBFPor qu\xE9 en una consulta aparece coincidencia de prioridad 3? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Debido a que la informaci\xF3n la obtenemos de medios p\xFAblicos, no en todos los casos se obtienen los n\xFAmeros de identificaci\xF3n y por tanto registran estos llamados hom\xF3nimos los cuales se podr\xE1n descartar verificando la informaci\xF3n de la noticia registrada en la coincidencia, con datos como el lugar de nacimiento, el lugar de los hechos, la edad, el cargo y hasta la foto de la persona si es que aparece. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \xBFQue funci\xF3n tiene el Reporte de Consultas y Coincidencias Detalle? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Este Subm\xF3dulo permitir\xE1 ver el n\xFAmero de veces consultado un tercero en el rango de fechas, el usuario que realiza la gesti\xF3n, el n\xFAmero de consulta obtenido y el detalle de la informaci\xF3n del registrado en la herramienta. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \xBFPor qu\xE9 no arroja coincidencias una consulta de un NIT con digito de verificaci\xF3n? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Las personas jur\xEDdicas se deben de consultar sin el digito de verificaci\xF3n, ya que estas se encuentran ingresadas en nuestra herramienta sin dicho n\xFAmero. Sin embargo, cuando se habilita la consulta en l\xEDnea de la Procuradur\xEDa ser\xE1 posible diligenciarlo en una casilla aparte puesto que la pagina como tal lo solicita ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " \xBFQu\xE9 significa cuando en una consulta aparece coincidencia de prioridad 2? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Si al consultar un tercero le da como resultado prioridad 2, es porque el tercero tiene coincidencia \xFAnicamente en el n\xFAmero del documento y en este caso la forma de descartarlo es, comparando la informaci\xF3n del registrado con en la herramienta con la Procuradur\xEDa, Rama Judicial y en caso de ser persona jur\xEDdica en RUES. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \xBFQu\xE9 significa el correo enviado por ustedes que dice Notificaci\xF3n de coincidencia Prioridad 3? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Quiere decir que su usuario y/o alg\xFAn otro ya creado a cargo suyo, realizo una consulta de la cual se obtuvo como resultado una coincidencia en este caso de prioridad 3 y la herramienta se lo est\xE1 notificando. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " \xBFQu\xE9 significa el correo enviado por ustedes que dice Notificaci\xF3n de coincidencia Prioridad 2? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Quiere decir que alg\xFAn usuario de la plataforma, realizo una consulta de la cual se obtuvo como resultado una coincidencia en este caso de prioridad 2 y la herramienta se lo est\xE1 notificando. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " \xBFQu\xE9 significa el correo enviado por ustedes que dice Notificaci\xF3n de coincidencia Prioridad 1? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Quiere decir que alg\xFAn usuario de la plataforma, realizo una consulta de la cual se obtuvo como resultado una coincidencia en este caso de prioridad 1 y la herramienta se lo est\xE1 notificando. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " \xBFQu\xE9 significa EL NUMERO DE IDENTIFICACION CONSULTADO NO SE ENCUENTRA REGISTRADO EN EL SISTEMA ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Este mensaje \xFAnicamente aparece cuando se a\xF1ade la consulta en l\xEDnea de la Procuradur\xEDa y dentro de la informaci\xF3n de esa p\xE1gina como tal aun no est\xE1n registrados los antecedentes. En casos de tal \xEDndole es necesario informar al tercero que se comunique con la p\xE1gina de la Procuradur\xEDa. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " \xBFEn que consiste el sistema autom\xE1tico de monitoreo transaccional? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Es un servicio de la herramienta donde se monitorea todas las consultas que se hagan en la plataforma informando si se llegan a encontrar coincidencias posteriormente. Cada vez que se consulte una persona, la herramienta almacena esta informaci\xF3n y si esta persona en el futuro llegara a ser ingresada o actualizada en alguna de las listas, se notificara autom\xE1ticamente mediante el correo electr\xF3nico parametrizado y no tener que hacer consulta de la misma persona. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \xBFComo puedo generar un reporte de una consulta? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Al momento de generar un reporte, deber\xE1 tener en cuenta, que el navegador cuente con la habilitaci\xF3n de ventanas emergentes, que no se haya otra ventana emergente abierta de la herramienta y si la tiene, lo recomendado ser\xE1 cerrarla y luego dar clic en Generar Reporte para que abra la informaci\xF3n actualizada. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " \xBFQuiero saber para qu\xE9 sirve la opci\xF3n de PEP en el tipo de documento? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " El tipo de documento PEP, solicitado en la p\xE1gina de la Procuradur\xEDa es el tipo de documento Permiso Especial de Permanencia establecido para las personas provenientes de Venezuela. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " \xBFComo puedo descargar un reporte donde aparezca informaci\xF3n de consultas realizadas, la cantidad por n\xFAmero de consulta, nombre de la persona y tercero consultado? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Un reporte del cual se puede obtener informaci\xF3n completa se puede obtener \xFAnicamente con el usuario que tenga rol Administrador, por medio del m\xF3dulo Log, sub modulo Reporte de Consultas & Coincidencias. Luego deber\xE1 seleccionar el rango de fechas del cual quiera la informaci\xF3n y da clic en el icono de Excel. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " \xBFComo puedo consultar personas con pasaporte? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Para realizar la consulta de persona con pasaporte es necesario ingresarlo con letras y n\xFAmeros. No deber\xE1 habilitar Consulta en l\xEDnea de la Procuradur\xEDa ni Rama Judicial, puesto que las paginas fuente no manejan este documento y lo que har\xE1 la herramienta ser\xE1 consultar las listas de la base de datos. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " \xBFQu\xE9 significa que en una consulta aparece coincidencia de prioridad 1? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Si al consultar un tercero le da como resultado prioridad 1, significa que se encontr\xF3 coincidencia exacta en el documento de identificaci\xF3n y nombre. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " \xBFQu\xE9 significa el grupo de color verde? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " El grupo de color verde se encuentran listas informativas y personas pol\xEDticamente y p\xFAblicamente expuestas. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " \xBFQu\xE9 significa el grupo de listas de color rojo? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " El grupo de color rojo Listas Restrictivas se encuentran personas y empresas relacionadas directamente con lavado de activos y financiaci\xF3n del terrorismo, espec\xEDficamente con las listas OFAC y ONU. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " \xBFQu\xE9 significa el grupo de listas de color amarillo? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " El grupo de color amarillo se encuentran listas de las empresas o personas que actualmente presentan inconveniente en su \xE1rea financiera, econ\xF3mica, operativa y/o administrativa (no quiere decir que est\xE9n directamente relacionadas a delitos LAFT, pero si pueden estar vulnerables a estos). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " \xBFQuiero saber por qu\xE9 la lista de color naranja pertenece al grupo \u201Clistas asociadas al LA/FT y anticorrupci\xF3n ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Las listas de color naranja asocian medidas de cautela y/o investigaci\xF3n que involucran desde delitos contra la administraci\xF3n p\xFAblica, lavado de activos hasta fraude fiscal. Esto para poder diferenciar las listas restrictivas de las vinculantes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " \xBFC\xF3mo puedo obtener un archivo con las listas actuales de Inspektor? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Para poder enviar el documento actualizado que contiene la informaci\xF3n de las listas y la colorimetr\xEDa actual de Inspektor, le solicitamos nos env\xEDe el requerimiento al correo: soporte@riskconsultingcolombia.com por este medio enviaremos el archivo con la informaci\xF3n solicitada al correo que nos indique. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " \xBFCu\xE1les son los motivos por los cuales un tercero natural o jur\xEDdico es eliminado de la OFAC? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Cuando registra una persona Natural o Jur\xEDdica en la lista OFAC la \xFAnica raz\xF3n por la cual pudo estar registrado es porque tuvo v\xEDnculos con lavado de activos, narcotr\xE1fico, terrorismo y algunos por corrupci\xF3n y en el caso de ser eliminados es porque generalmente se acogen a alg\xFAn acuerdo econ\xF3mico o logran comprobar el origen de sus ingresos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " \xBFEs posible consultar una tarjeta de identidad en Inspektor? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " En nuestra base de datos s\xED es posible consultar un tercero identificado con tarjeta de identidad, sin embargo, para realizar esta consulta se deben deshabilitar las opciones de Procuradur\xEDa y Rama Judicial, ya que estas p\xE1ginas no contemplan el par\xE1metro de b\xFAsqueda con este tipo de identificaci\xF3n. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " \xBFEs necesario habilitar la prioridad tres? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Este tipo de prioridad corresponde a coincidencias \xFAnicamente en el nombre, en caso de no requerir dicha opci\xF3n, el usuario puede deshabilitarla y el sistema no deber\xE1 realizar la consulta utilizando esa prioridad. Pero siempre se recomienda dejarla habilitada. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " \xBFC\xF3mo puedo acceder al manual de usuario en Inspektor? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Nuestra herramienta cuenta con un instructivo que le permite conocer los diferentes procesos que puede llevar a cabo seg\xFAn el rol establecido para un usuario. Para acceder a este manual debe realizar los siguientes pasos: 1. Dirigirse al m\xF3dulo MI CUENTA 2. Sub \u2013 Modulo AYUDA 3. MANUAL DEL USUARIO, 4. VER MANUAL DE SUARIO, en esta opci\xF3n usted puede descargar el instructivo en formato PDF. Se debe tener en cuenta que cada usuario tendr\xE1 el manual disponible seg\xFAn el rol que le corresponda. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " \xBFEl aplicativo cuenta con una opci\xF3n que indique cuando se actualiz\xF3 cada una de las listas? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Cuando se realiza una consulta en nuestra base de datos, el detalle de la informaci\xF3n le indicar\xE1 la fecha en que el registro fue actualizado. Sin embargo, un m\xF3dulo en donde usted pueda consultar una fecha exacta de actualizaci\xF3n de listas no est\xE1 disponible dado que la gran mayor\xEDa de ellas se actualizan diariamente con nueva informaci\xF3n. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " \xBFPuedo reemplazar la informaci\xF3n contenida en una lista propia? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " La informaci\xF3n contenida en la base de listas propias s\xED se puede modificar, no obstante, Para realizar este proceso, tenga en cuenta lo siguiente: a) Todos los datos que se ingresen deber\xE1n ser diligenciados con precisi\xF3n debido a que las Listas Propias solo manejan prioridad 1. b) Cuando realice la actualizaci\xF3n de la plantilla deber\xE1 dejar los datos antiguos para mantener el hist\xF3rico de la informaci\xF3n ya registrada si as\xED desea, pues solo se puede cargar una plantilla. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " \xBFPara qu\xE9 se utiliza el cargue masivo de listas propias? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Esta es una opci\xF3n en nuestra herramienta que permite realizar un cargue masivo de una base de datos en la cual podr\xE1 incluir personas o empresas con las que se desea realizar prevenci\xF3n a futuro, evitando nuevos v\xEDnculos. Esta lista es personalizada para cada cliente y solo puede ser alimentada por un Rol Administrador. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " \xBFQu\xE9 funci\xF3n cumple el subm\xF3dulo notificaciones? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Este subm\xF3dulo permite realizar la parametrizaci\xF3n de los correos electr\xF3nicos para el env\xEDo de las notificaciones, en cuanto se encuentre una coincidencia al realizar una consulta en listas restrictivas. El usuario debe parametrizar los correos que desee para cada una de las prioridades de b\xFAsqueda. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " \xBFPor qu\xE9 los usuarios no pueden ser eliminados? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Los usuarios no son eliminados, se cambian a estado bloqueado para no perder la trazabilidad de la informaci\xF3n consultada, o en caso de que un usuario deba ausentarse por un periodo de tiempo se pueda bloquear hasta su regreso y designar a otra persona con el mismo rol para efectuar sus funciones. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " \xBFQu\xE9 significa el enunciado de cargo o delito en la herramienta? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Esta casilla hace referencia al delito cometido o a la acusaci\xF3n emitida en contra de la entidad o persona consultada. En el caso de los PEP\xB4S se refiere a la a la funci\xF3n o cargo que desempe\xF1e el tercero consultado. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " No se encontraron coincidencias de un tercero el cual se tiene conocimientos que est\xE1 involucrado con alg\xFAn delito. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " En este caso se debe tener en cuenta que el alcance de nuestro servicio es alertar a nuestros clientes en temas relacionados a delitos LA/FT y que nuestra labor se limita a informaci\xF3n que se encuentre en fuentes p\xFAblicas de informaci\xF3n. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " \xBFA que corresponde la lista delitos contra el sistema financiero? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " En esta lista se encuentran ingresadas personas sindicadas o juzgadas por delitos tales como: -Utilizaci\xF3n indebida de fondos captados del p\xFAblico. -Operaciones no autorizadas con accionistas o asociados. -Captaci\xF3n Masiva y Habitual de Dinero. -Manipulaci\xF3n fraudulenta de especies inscritas en el Registro Nacional de Valores e Intermediarios ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " \xBFPor qu\xE9 no puedo generar el log de las consultas? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Esto puede suceder porque las consultas realizadas en el rango de fechas establecido sobrepasan el l\xEDmite de resultados (90.000) que Inspektor puede mostrar, en este caso recomendamos seleccionar un rango de fechas inferior. Si tomando esta medida no se logra obtener la informaci\xF3n, se puede poner en contacto con nosotros para escalar el caso a nuestra \xE1rea correspondiente y darle soporte en su requerimiento. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " \xBFEs necesario quitar los puntos para consultar en Inspektor? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " Para realizar una consulta en nuestro aplicativo es necesario que se realice sin ning\xFAn car\xE1cter especial (comas, tildes, puntos, ap\xF3strofos, entre otros...), estos se tienen que eliminar y los guiones se tienen que reemplazar con un espacio. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " \xBFQu\xE9 significa la lista 53 - Entidades sin \xE1nimo de lucro ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " Esta lista se implement\xF3 con la finalidad de informar a nuestros clientes, ya que las empresas sin \xE1nimo de lucro presentan alto grado de vulnerabilidad a ser utilizadas para los delitos LAFT, seg\xFAn la recomendaci\xF3n 8 del GAFI. No significa necesariamente que la empresa est\xE9 envuelta en alg\xFAn delito, se encuentra all\xED para que ustedes tengan un manejo especial. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " \xBFLa lista de personas expuestas pol\xEDticamente se encuentra actualizada? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Actualmente esta lista se encuentra actualizada seg\xFAn lo establecido por el decreto 1674 del 2016, el cual tiene como objeto definir qui\xE9nes son las Personas Expuestas Pol\xEDticamente y en que consiste su obligaci\xF3n con el sistema financiero en raz\xF3n de dicha condici\xF3n. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " \xBFEs posible eliminar el registro de actividad en Inspektor? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Este proceso no es posible llevarlo a cabo, ya que la informaci\xF3n contenida en Inspektor no se puede eliminar. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " \xBFPor qu\xE9 el aplicativo no me arroja coincidencias? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " Cuando en el aplicativo aparece el mensaje no arroja coincidencias con los par\xE1metros de b\xFAsqueda, esto indica que la persona natural o jur\xEDdica no se encuentra registrada en ninguna de nuestras listas. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbAccordionItemBodyComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXFzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "LVBv":
    /*!*****************************************************!*\
      !*** ./src/app/pages/extra/extra-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ExtraRoutingModule, routedComponents */

    /***/
    function LVBv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtraRoutingModule", function () {
        return ExtraRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routedComponents", function () {
        return routedComponents;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _extra_extra_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../extra/extra.component */
      "CkqY");
      /* harmony import */


      var _extra_components_help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../extra/components/help/help.component */
      "fxSY");
      /* harmony import */


      var _extra_components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../extra/components/faqs/faqs.component */
      "H+Cs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _extra_extra_component__WEBPACK_IMPORTED_MODULE_1__["ExtraComponent"],
        children: [{
          path: 'help',
          component: _extra_components_help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"]
        }]
      }, {
        path: '',
        component: _extra_extra_component__WEBPACK_IMPORTED_MODULE_1__["ExtraComponent"],
        children: [{
          path: 'faqs',
          component: _extra_components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__["FaqsComponent"]
        }]
      }];

      var ExtraRoutingModule = /*#__PURE__*/_createClass(function ExtraRoutingModule() {
        _classCallCheck(this, ExtraRoutingModule);
      });

      ExtraRoutingModule.ɵfac = function ExtraRoutingModule_Factory(t) {
        return new (t || ExtraRoutingModule)();
      };

      ExtraRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: ExtraRoutingModule
      });
      ExtraRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ExtraRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();

      var routedComponents = [_extra_extra_component__WEBPACK_IMPORTED_MODULE_1__["ExtraComponent"], _extra_components_help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"], _extra_components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_3__["FaqsComponent"]];
      /***/
    },

    /***/
    "fxSY":
    /*!***************************************************************!*\
      !*** ./src/app/pages/extra/components/help/help.component.ts ***!
      \***************************************************************/

    /*! exports provided: HelpComponent */

    /***/
    function fxSY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
        return HelpComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HelpComponent_nb_list_item_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", row_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", row_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r1.name, " ");
        }
      } // import {$} from "protractor";


      var HelpComponent = /*#__PURE__*/function () {
        function HelpComponent(iconsLibrary, dialogService) {
          _classCallCheck(this, HelpComponent);

          this.dialogService = dialogService; // displayStyle = "none";

          this.pdfType = 1;
          this.videoType = 2;
          this.data = [{
            type: this.pdfType,
            name: 'Manual de Usuario',
            'url': 'https://inspektor.datalaft.com:448/ManualUsuario.pdf',
            icon: 'document'
          }, {
            type: this.videoType,
            name: 'Política de tratamiento de datos',
            'url': 'https://inspektor.datalaft.com:448/PoliticaTratamiento.pdf',
            icon: 'document'
          }, {
            type: this.videoType,
            name: 'Listas y Colorimetría',
            'url': 'https://inspektor.datalaft.com:448/LISTADOS_Y_COLORIMETRIA_%20INSPEKTOR.pdf',
            icon: 'document'
          }, {
            type: this.videoType,
            name: 'Preguntas y Respuestas Rama Judicial',
            'url': 'https://inspektor.datalaft.com:448/preguntas_respuestas_rama_judicial.pdf',
            icon: 'document'
          }, {
            type: this.videoType,
            name: 'Tutorial inspektor',
            'url': 'https://inspektor.datalaft.com:448/Inspektor_Vr5.0_Tutorial.mp3',
            icon: 'social-youtube'
          }, {
            type: this.videoType,
            name: 'Nuevas Funcionalidades',
            'url': 'https://inspektor.datalaft.com:448/Inspektor_Vr5.0_NuevasFuncionalidades.mp3',
            icon: 'social-youtube'
          }, {
            type: this.videoType,
            name: 'Cambios anteriores',
            'url': 'https://inspektor.datalaft.com:448/Inspektor_Vr5.0_RecientesFuncionalidades.mp3',
            icon: 'social-youtube'
          }];
          iconsLibrary.registerFontPack('ion', {
            iconClassPrefix: 'ion'
          });
        }

        _createClass(HelpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openModal",
          value: function openModal(dialog, url) {
            this.url = url; // this.displayStyle = "block";
            // $("#myModal").modal('show');

            this.dialogService.open(dialog, {
              context: 'this is some additional data passed to dialog',
              dialogClass: 'model-full'
            });
          }
        }]);

        return HelpComponent;
      }();

      HelpComponent.ɵfac = function HelpComponent_Factory(t) {
        return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconLibraries"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"]));
      };

      HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelpComponent,
        selectors: [["ngx-help"]],
        decls: 8,
        vars: 1,
        consts: [[1, "lists", "row", "justify-content-center"], [1, "col-8"], [1, "list-card"], [4, "ngFor", "ngForOf"], ["pack", "ion", 1, "mr-2", 3, "icon"], ["target", "_blank", 3, "href"]],
        template: function HelpComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbListItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconComponent"]],
        styles: [".model-full[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n.model-full[_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  width: 99% !important;\n  height: 99% !important;\n}\n.model-full[_ngcontent-%COMP%]   nb-dialog-container[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n.model-full[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  display: block !important;\n  width: 100% !important;\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUVFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUFKO0FBRUU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSiIsImZpbGUiOiJoZWxwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGVsLWZ1bGwge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcclxuICAgIHdpZHRoOiA5OSUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTklICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBuYi1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNkay1vdmVybGF5LXBhbmV7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=extra-extra-module-es5.js.map