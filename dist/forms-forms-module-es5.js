(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"], {
    /***/
    "E+Zg":
    /*!*********************************************!*\
      !*** ./src/app/pages/forms/forms.module.ts ***!
      \*********************************************/

    /*! exports provided: FormsModule */

    /***/
    function EZg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
        return FormsModule;
      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      "vTDv");
      /* harmony import */


      var _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forms-routing.module */
      "G6J4");
      /* harmony import */


      var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forms.component */
      "Bf2M");
      /* harmony import */


      var _form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./form-inputs/form-inputs.component */
      "IiY5");
      /* harmony import */


      var _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./form-layouts/form-layouts.component */
      "LpbI");
      /* harmony import */


      var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./datepicker/datepicker.component */
      "j9UV");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "9bLz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FormsModule = /*#__PURE__*/_createClass(function FormsModule() {
        _classCallCheck(this, FormsModule);
      });

      FormsModule.ɵfac = function FormsModule_Factory(t) {
        return new (t || FormsModule)();
      };

      FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: FormsModule
      });
      FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbDatepickerModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FormsModule, {
          declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsComponent"], _form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_4__["FormInputsComponent"], _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_5__["FormLayoutsComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__["DatepickerComponent"]],
          imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbDatepickerModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=forms-forms-module-es5.js.map