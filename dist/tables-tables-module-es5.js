(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"], {
    /***/
    "w2km":
    /*!***********************************************!*\
      !*** ./src/app/pages/tables/tables.module.ts ***!
      \***********************************************/

    /*! exports provided: TablesModule */

    /***/
    function w2km(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      "vTDv");
      /* harmony import */


      var _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tables-routing.module */
      "Qy2A");
      /* harmony import */


      var _tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tree-grid/tree-grid.component */
      "RjRO");
      /* harmony import */


      var _theme_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../@theme/pipes */
      "01oQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _tables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tables.component */
      "YP3p");
      /* harmony import */


      var _smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./smart-table/smart-table.component */
      "QUNw");

      var TablesModule = /*#__PURE__*/_createClass(function TablesModule() {
        _classCallCheck(this, TablesModule);
      });

      TablesModule.ɵfac = function TablesModule_Factory(t) {
        return new (t || TablesModule)();
      };

      TablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: TablesModule
      });
      TablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [_theme_pipes__WEBPACK_IMPORTED_MODULE_5__["MeasureConverterPipe"]],
        imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTreeGridModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["Ng2SmartTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TablesModule, {
          declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_7__["TablesComponent"], _smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_8__["SmartTableComponent"], _tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_4__["TreeGridComponent"], _tree_grid_tree_grid_component__WEBPACK_IMPORTED_MODULE_4__["FsIconComponent"]],
          imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTreeGridModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["Ng2SmartTableModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=tables-tables-module-es5.js.map