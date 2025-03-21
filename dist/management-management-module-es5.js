(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["management-management-module"], {
    /***/
    "+rkV":
    /*!***************************************************************!*\
      !*** ./src/app/pages/management/models/CompanyTypeListDTO.ts ***!
      \***************************************************************/

    /*! exports provided: CompanyTypeListsDTO, CompanyTypeListDTO */

    /***/
    function rkV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyTypeListsDTO", function () {
        return CompanyTypeListsDTO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyTypeListDTO", function () {
        return CompanyTypeListDTO;
      });

      var CompanyTypeListsDTO = /*#__PURE__*/_createClass(function CompanyTypeListsDTO() {
        _classCallCheck(this, CompanyTypeListsDTO);
      });

      var CompanyTypeListDTO = /*#__PURE__*/_createClass(function CompanyTypeListDTO() {
        _classCallCheck(this, CompanyTypeListDTO);

        this.id = 0;
        this.search = false;
        this.name = " ";
        this.companyId = 0;
        this.createdAt = " ";
        this.updatedAt = " ";
        this.listType = {};
      });
      /***/

    },

    /***/
    "/sA8":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/management/backend/common/services/access.service.ts ***!
      \****************************************************************************/

    /*! exports provided: AccessService */

    /***/
    function sA8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessService", function () {
        return AccessService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AccessService = /*#__PURE__*/function () {
        function AccessService(http) {
          _classCallCheck(this, AccessService);

          this.http = http;
        }

        _createClass(AccessService, [{
          key: "getByCompany",
          value: function getByCompany() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/AccessController/GetByCompany"));
          }
        }, {
          key: "getPermissionsByAccessId",
          value: function getPermissionsByAccessId(id) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append("AccessId", id);
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/AccessController/GetPermissionsByAccessId"), {
              params: httpParams
            });
          }
        }, {
          key: "createNameAccess",
          value: function createNameAccess(_nameacces) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/AccessController/Create"), _nameacces);
          }
        }, {
          key: "DeleteNameAccess",
          value: function DeleteNameAccess(_idacces) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append("id", _idacces);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/AccessController/Delete"), null, {
              params: httpParams
            });
          }
        }, {
          key: "createAccessByCompany",
          value: function createAccessByCompany(_accessrol) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/AccessController/CreateAccessJson"), _accessrol);
          }
        }, {
          key: "updateAccess",
          value: function updateAccess(_accessrol) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/AccessController/UpdateAccess"), _accessrol);
          }
        }]);

        return AccessService;
      }();

      AccessService.ɵfac = function AccessService_Factory(t) {
        return new (t || AccessService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      AccessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AccessService,
        factory: AccessService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "57+D":
    /*!**************************************************************!*\
      !*** ./src/app/pages/management/models/ThirdPartyTypeDTO.ts ***!
      \**************************************************************/

    /*! exports provided: ThirdPartyTypeListDTO, ThirdPartyTypeDTO */

    /***/
    function D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThirdPartyTypeListDTO", function () {
        return ThirdPartyTypeListDTO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThirdPartyTypeDTO", function () {
        return ThirdPartyTypeDTO;
      });

      var ThirdPartyTypeListDTO = /*#__PURE__*/_createClass(function ThirdPartyTypeListDTO() {
        _classCallCheck(this, ThirdPartyTypeListDTO);
      });

      var ThirdPartyTypeDTO = /*#__PURE__*/_createClass(function ThirdPartyTypeDTO() {
        _classCallCheck(this, ThirdPartyTypeDTO);

        this.id = 0;
        this.name = '';
        this.status = false;
        this.createdAt = '';
      });
      /***/

    },

    /***/
    "AsH/":
    /*!***************************************************************!*\
      !*** ./src/app/pages/management/management-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ManagementRoutingModule, routedComponents */

    /***/
    function AsH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagementRoutingModule", function () {
        return ManagementRoutingModule;
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


      var _management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./management.component */
      "K1Oe");
      /* harmony import */


      var _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/user-management/user-management.component */
      "X4oW");
      /* harmony import */


      var _components_user_management_form_user_management_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/user-management-form/user-management-form.component */
      "zPfu");
      /* harmony import */


      var _components_thirdpartymanage_thirdpartymanage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/thirdpartymanage/thirdpartymanage.component */
      "sIGp");
      /* harmony import */


      var _components_companytypelist_companytypelist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/companytypelist/companytypelist.component */
      "iVQy");
      /* harmony import */


      var _components_manageprocuracy_manageprocuracy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/manageprocuracy/manageprocuracy.component */
      "nVyZ");
      /* harmony import */


      var _components_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/access-management/access-management.component */
      "MKIP");
      /* harmony import */


      var _components_access_management_form_access_management_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/access-management-form/access-management-form.component */
      "hLaO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _management_component__WEBPACK_IMPORTED_MODULE_1__["ManagementComponent"],
        children: [{
          path: 'users',
          component: _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_2__["UserManagementComponent"]
        }, {
          path: 'users/create',
          component: _components_user_management_form_user_management_form_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementFormComponent"]
        }, {
          path: 'users/edit/:id',
          component: _components_user_management_form_user_management_form_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementFormComponent"]
        }, {
          path: 'thirdpartymanage',
          component: _components_thirdpartymanage_thirdpartymanage_component__WEBPACK_IMPORTED_MODULE_4__["ThirdpartymanageComponent"]
        }, {
          path: 'companytypelist',
          component: _components_companytypelist_companytypelist_component__WEBPACK_IMPORTED_MODULE_5__["CompanytypelistComponent"]
        }, {
          path: 'manageprocuracy',
          component: _components_manageprocuracy_manageprocuracy_component__WEBPACK_IMPORTED_MODULE_6__["ManageprocuracyComponent"]
        }, {
          path: 'access',
          component: _components_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_7__["AccessManagementComponent"]
        }, {
          path: 'access/create',
          component: _components_access_management_form_access_management_form_component__WEBPACK_IMPORTED_MODULE_8__["AccessManagementFormComponent"]
        }, {
          path: 'access/edit/:id',
          component: _components_access_management_form_access_management_form_component__WEBPACK_IMPORTED_MODULE_8__["AccessManagementFormComponent"]
        }]
      }];

      var ManagementRoutingModule = /*#__PURE__*/_createClass(function ManagementRoutingModule() {
        _classCallCheck(this, ManagementRoutingModule);
      });

      ManagementRoutingModule.ɵfac = function ManagementRoutingModule_Factory(t) {
        return new (t || ManagementRoutingModule)();
      };

      ManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: ManagementRoutingModule
      });
      ManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();

      var routedComponents = [_components_thirdpartymanage_thirdpartymanage_component__WEBPACK_IMPORTED_MODULE_4__["ThirdpartymanageComponent"], _components_companytypelist_companytypelist_component__WEBPACK_IMPORTED_MODULE_5__["CompanytypelistComponent"], _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_2__["UserManagementComponent"], _management_component__WEBPACK_IMPORTED_MODULE_1__["ManagementComponent"], _components_user_management_form_user_management_form_component__WEBPACK_IMPORTED_MODULE_3__["UserManagementFormComponent"], _components_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_7__["AccessManagementComponent"], _components_access_management_form_access_management_form_component__WEBPACK_IMPORTED_MODULE_8__["AccessManagementFormComponent"]];
      /***/
    },

    /***/
    "K1Oe":
    /*!**********************************************************!*\
      !*** ./src/app/pages/management/management.component.ts ***!
      \**********************************************************/

    /*! exports provided: ManagementComponent */

    /***/
    function K1Oe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagementComponent", function () {
        return ManagementComponent;
      });
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ManagementComponent = /*#__PURE__*/function () {
        function ManagementComponent(translate) {
          _classCallCheck(this, ManagementComponent);

          this.translate = translate;
        }

        _createClass(ManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.lang = localStorage.getItem('lang');
            var currentlang = this.translate.currentLang;
            currentlang = this.lang;
            this.translate.use(currentlang);
          }
        }]);

        return ManagementComponent;
      }();

      ManagementComponent.ɵfac = function ManagementComponent_Factory(t) {
        return new (t || ManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__["TranslateService"]));
      };

      ManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ManagementComponent,
        selectors: [["ngx-management"]],
        decls: 1,
        vars: 0,
        template: function ManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "MKIP":
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/management/components/access-management/access-management.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: AccessManagementComponent */

    /***/
    function MKIP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessManagementComponent", function () {
        return AccessManagementComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../utils/pagination-filter */
      "36nv");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _backend_common_services_access_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../backend/common/services/access.service */
      "/sA8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");

      var AccessManagementComponent = /*#__PURE__*/function () {
        function AccessManagementComponent(router, accessService, translate) {
          _classCallCheck(this, AccessManagementComponent);

          this.router = router;
          this.accessService = accessService;
          this.translate = translate;
          this.lang = localStorage.getItem('lang').toUpperCase();
          this.searchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.users = [];
          this.search = '';
          this.paginationFilter = new _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_2__["PaginationFilter"]();
          this.mySettings = {
            actions: {
              add: false,
              "delete": true
            },
            mode: 'external',
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
            "delete": {
              deleteButtonContent: '<i class="nb-trash"></i>',
              confirmDelete: true
            },
            columns: {
              name: {
                title: 'Nombres',
                type: 'string',
                filter: false
              },
              createdAt: {
                title: 'Fecha de creación',
                type: 'string',
                filter: false,
                editable: false,
                addable: false
              }
            }
          };
          this.lenguagetable = ["name", "createdAt"];
          this.funtionconstructor();
        }

        _createClass(AccessManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.translatecomponent();
            this.searchTextChanged // .debounceTime(250)
            // .distinctUntilChanged()
            .subscribe(function (query) {
              _this.source.setSearchQuery(query);
            });
          }
        }, {
          key: "create",
          value: function create() {
            this.router.navigate(["/pages/management/access/create"]);
          }
        }, {
          key: "onEdit",
          value: function onEdit($event) {
            var user = $event.data;
            this.router.navigate(["/pages/management/access/edit/".concat(user.id)]);
          }
        }, {
          key: "onDelete",
          value: function onDelete(event) {
            var _this2 = this;

            console.log(event);
            var data = event.data.id;
            this.accessService.DeleteNameAccess(data).subscribe(function () {
              _this2.getAccessall();
            });
          }
        }, {
          key: "searchUser",
          value: function searchUser($event) {
            this.searchTextChanged.next($event.target.value);
          }
        }, {
          key: "onCreateConfirm",
          value: function onCreateConfirm($event) {
            var _this3 = this;

            var data = {
              name: $event.newData.name
            };
            this.accessService.createNameAccess(data).subscribe(function () {
              _this3.source.refresh();
            });
            console.log($event);
          }
        }, {
          key: "onRowSelect",
          value: function onRowSelect(event) {}
        }, {
          key: "funtionconstructor",
          value: function funtionconstructor() {
            this.getAccessall();
            /*this.source = this.AccessService.getServerDataSource();
            this.translatecomponent()
            this.settings = Object.assign({}, this.mySettings)*/
          }
        }, {
          key: "translatecomponent",
          value: function translatecomponent() {
            this.lang = localStorage.getItem('lang');
            var currentlang = this.translate.currentLang;
            currentlang = this.lang;
            this.translate.use(currentlang);
            this.refeshtitlestable();
          }
        }, {
          key: "refeshtitlestable",
          value: function refeshtitlestable() {
            var _this4 = this;

            var _loop = function _loop(index) {
              _this4.translate.stream("GenericTable." + _this4.lenguagetable[index]).subscribe(function (res) {
                _this4.mySettings.columns[_this4.lenguagetable[index]].title = res;
                _this4.settings = Object.assign({}, _this4.mySettings);
              });
            };

            for (var index = 0; index < this.lenguagetable.length; index++) {
              _loop(index);
            }
          }
        }, {
          key: "getAccessall",
          value: function getAccessall() {
            var _this5 = this;

            this.accessService.getByCompany().subscribe(function (result) {
              _this5.source = result;

              _this5.translatecomponent();

              _this5.settings = Object.assign({}, _this5.mySettings);
            });
          }
        }]);

        return AccessManagementComponent;
      }();

      AccessManagementComponent.ɵfac = function AccessManagementComponent_Factory(t) {
        return new (t || AccessManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_backend_common_services_access_service__WEBPACK_IMPORTED_MODULE_4__["AccessService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
      };

      AccessManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: AccessManagementComponent,
        selectors: [["ngx-access-management"]],
        decls: 16,
        vars: 10,
        consts: [[1, "row", "mb-3"], [1, "col-md-1"], ["status", "primary", "nbButton", "", "nbSuffix", "", 3, "click"], [1, "col-md-11", "searchbar"], ["nbInput", "", 3, "ngModel", "ngModelChange", "keyup"], ["ghost", "", "nbButton", "", "nbSuffix", ""], ["pack", "eva", 3, "icon"], [1, "example-smart-table", 3, "settings", "source", "edit", "delete", "settingsChange"]],
        template: function AccessManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccessManagementComponent_Template_button_click_7_listener() {
              return ctx.create();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "nb-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccessManagementComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.search = $event;
            })("keyup", function AccessManagementComponent_Template_input_keyup_12_listener($event) {
              return ctx.searchUser($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "nb-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ng2-smart-table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("edit", function AccessManagementComponent_Template_ng2_smart_table_edit_15_listener($event) {
              return ctx.onEdit($event);
            })("delete", function AccessManagementComponent_Template_ng2_smart_table_delete_15_listener($event) {
              return ctx.onDelete($event);
            })("settingsChange", function AccessManagementComponent_Template_ng2_smart_table_settingsChange_15_listener($event) {
              return ctx.settings = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 6, "AccessComponent.Administrar_usuarios"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 8, "Components.Agregar"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "search-outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSuffixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: [".search-label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.searchbar[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  left: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFjY2Vzcy1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7QUFFRiIsImZpbGUiOiJhY2Nlc3MtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5zZWFyY2hiYXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGxlZnQ6IDglO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "OlR6":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/management/backend/common/services/companytypeList.service.ts ***!
      \*************************************************************************************/

    /*! exports provided: CompanytypeListService */

    /***/
    function OlR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanytypeListService", function () {
        return CompanytypeListService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CompanytypeListService = /*#__PURE__*/function () {
        function CompanytypeListService(http) {
          _classCallCheck(this, CompanytypeListService);

          this.http = http;
        }

        _createClass(CompanytypeListService, [{
          key: "getTypeList",
          value: function getTypeList() {
            return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/CompanyTypeList/GetTypeList"));
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(companyTypeListDTO) {
            return this.http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/CompanyTypeList/UpdateTypeList"), companyTypeListDTO);
          }
        }, {
          key: "updateRangeStatus",
          value: function updateRangeStatus(status) {
            var st = String(status);
            var parameters = {
              "status": st
            };
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
              fromObject: {
                status: st
              }
            });
            return this.http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/CompanyTypeList/UpdateRangeTypeList?status=").concat(st), null);
          }
        }]);

        return CompanytypeListService;
      }();

      CompanytypeListService.ɵfac = function CompanytypeListService_Factory(t) {
        return new (t || CompanytypeListService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      CompanytypeListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: CompanytypeListService,
        factory: CompanytypeListService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "QK9T":
    /*!*******************************************************!*\
      !*** ./src/app/pages/management/management.module.ts ***!
      \*******************************************************/

    /*! exports provided: ManagementModule */

    /***/
    function QK9T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagementModule", function () {
        return ManagementModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _management_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./management-routing.module */
      "AsH/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../@components/components.module */
      "h+2I");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./management.component */
      "K1Oe");
      /* harmony import */


      var _backend_common_services_user_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./backend/common/services/user-management.service */
      "TqkH");
      /* harmony import */


      var _components_user_management_form_user_management_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/user-management-form/user-management-form.component */
      "zPfu");
      /* harmony import */


      var _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/user-management/user-management.component */
      "X4oW");
      /* harmony import */


      var _backend_common_api_user_management_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./backend/common/api/user-management.api */
      "aOQL");
      /* harmony import */


      var _utils_custom_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../utils/custom-http.service */
      "K2vf");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      "vTDv");
      /* harmony import */


      var _components_thirdpartymanage_thirdpartymanage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/thirdpartymanage/thirdpartymanage.component */
      "sIGp");
      /* harmony import */


      var _components_companytypelist_companytypelist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/companytypelist/companytypelist.component */
      "iVQy");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _components_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/access-management/access-management.component */
      "MKIP");
      /* harmony import */


      var _components_access_management_form_access_management_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/access-management-form/access-management-form.component */
      "hLaO");
      /* harmony import */


      var _backend_common_services_thirdPartyManage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./backend/common/services/thirdPartyManage.service */
      "YxJL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var components = [_components_thirdpartymanage_thirdpartymanage_component__WEBPACK_IMPORTED_MODULE_13__["ThirdpartymanageComponent"], _components_companytypelist_companytypelist_component__WEBPACK_IMPORTED_MODULE_14__["CompanytypelistComponent"], _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_9__["UserManagementComponent"], _management_component__WEBPACK_IMPORTED_MODULE_6__["ManagementComponent"], _components_user_management_form_user_management_form_component__WEBPACK_IMPORTED_MODULE_8__["UserManagementFormComponent"], _components_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_16__["AccessManagementComponent"], _components_access_management_form_access_management_form_component__WEBPACK_IMPORTED_MODULE_17__["AccessManagementFormComponent"]];

      var ManagementModule = /*#__PURE__*/_createClass(function ManagementModule() {
        _classCallCheck(this, ManagementModule);
      });

      ManagementModule.ɵfac = function ManagementModule_Factory(t) {
        return new (t || ManagementModule)();
      };

      ManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
        type: ManagementModule
      });
      ManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
        providers: [_utils_custom_http_service__WEBPACK_IMPORTED_MODULE_11__["CustomHttpService"], _backend_common_api_user_management_api__WEBPACK_IMPORTED_MODULE_10__["UserManagementApi"], _backend_common_services_user_management_service__WEBPACK_IMPORTED_MODULE_7__["UserManagementService"], _backend_common_services_thirdPartyManage_service__WEBPACK_IMPORTED_MODULE_18__["thirdPartyManageService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _management_routing_module__WEBPACK_IMPORTED_MODULE_1__["ManagementRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToggleModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepperModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](ManagementModule, {
          declarations: [_components_thirdpartymanage_thirdpartymanage_component__WEBPACK_IMPORTED_MODULE_13__["ThirdpartymanageComponent"], _components_companytypelist_companytypelist_component__WEBPACK_IMPORTED_MODULE_14__["CompanytypelistComponent"], _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_9__["UserManagementComponent"], _management_component__WEBPACK_IMPORTED_MODULE_6__["ManagementComponent"], _components_user_management_form_user_management_form_component__WEBPACK_IMPORTED_MODULE_8__["UserManagementFormComponent"], _components_access_management_access_management_component__WEBPACK_IMPORTED_MODULE_16__["AccessManagementComponent"], _components_access_management_form_access_management_form_component__WEBPACK_IMPORTED_MODULE_17__["AccessManagementFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _management_routing_module__WEBPACK_IMPORTED_MODULE_1__["ManagementRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTreeGridModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToggleModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepperModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"]]
        });
      })();
      /***/

    },

    /***/
    "TqkH":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/management/backend/common/services/user-management.service.ts ***!
      \*************************************************************************************/

    /*! exports provided: UserManagementService */

    /***/
    function TqkH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementService", function () {
        return UserManagementService;
      });
      /* harmony import */


      var _api_user_management_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../api/user-management.api */
      "aOQL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserManagementService = /*#__PURE__*/function () {
        function UserManagementService(api, http) {
          _classCallCheck(this, UserManagementService);

          this.api = api;
          this.http = http;
        }

        _createClass(UserManagementService, [{
          key: "get",
          value: function get(id) {
            return this.api.get(id);
          }
        }, {
          key: "create",
          value: function create(data) {
            return this.api.create(data);
          }
        }, {
          key: "ResetPassword",
          value: function ResetPassword(id, data) {
            return this.api.ResetPassword(id, data);
          }
        }, {
          key: "update",
          value: function update(id, data) {
            return this.api.update(id, data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.api["delete"](id);
          }
        }, {
          key: "getServerDataSource",
          value: function getServerDataSource(data) {
            return this.api.getServerDataSource(data);
          }
        }, {
          key: "list",
          value: function list(paginationFilter) {
            return this.api.list(paginationFilter);
          }
        }, {
          key: "createRolesUser",
          value: function createRolesUser(roleUserDTO) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/management/Permissions/Update"), roleUserDTO);
          }
        }, {
          key: "getPermissionsByUser",
          value: function getPermissionsByUser(iduser) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('UserId', iduser);
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/management/Permissions/GetPermissionsByUser"), {
              params: params
            });
          }
        }]);

        return UserManagementService;
      }();

      UserManagementService.ɵfac = function UserManagementService_Factory(t) {
        return new (t || UserManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_user_management_api__WEBPACK_IMPORTED_MODULE_0__["UserManagementApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UserManagementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: UserManagementService,
        factory: UserManagementService.ɵfac
      });
      /***/
    },

    /***/
    "X4oW":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/management/components/user-management/user-management.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: UserManagementComponent */

    /***/
    function X4oW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function () {
        return UserManagementComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _backend_common_services_user_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../backend/common/services/user-management.service */
      "TqkH");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../utils/pagination-filter */
      "36nv");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");

      var UserManagementComponent = /*#__PURE__*/function () {
        function UserManagementComponent(router, userManagementService, toasterService) {
          _classCallCheck(this, UserManagementComponent);

          this.router = router;
          this.userManagementService = userManagementService;
          this.toasterService = toasterService;
          this.searchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.users = [];
          this.search = '';
          this.paginationFilter = new _utils_pagination_filter__WEBPACK_IMPORTED_MODULE_3__["PaginationFilter"]();
          this.settings = {
            actions: {
              add: false,
              "delete": false
            },
            mode: 'external',
            add: {
              addButtonContent: '<i class="nb-plus"></i>',
              createButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>'
            },
            edit: {
              editButtonContent: '<i class="nb-edit"></i>',
              saveButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>'
            },
            "delete": {
              deleteButtonContent: '<i class="nb-trash"></i>',
              confirmDelete: true
            },
            columns: {
              /*id: {
                  title: 'Id',
                  type: 'number',
                  filter: false,
              },*/
              identification: {
                title: 'Numero Documento',
                type: 'string',
                filter: false
              },
              name: {
                title: 'Nombres',
                type: 'string',
                filter: false
              },
              lastName: {
                title: 'Apellidos',
                type: 'string',
                filter: false
              },
              email: {
                title: 'E-mail',
                type: 'string',
                filter: false
              },
              createdAt: {
                title: 'Fecha de creación',
                type: 'string',
                filter: false
              }
            }
          };
        }

        _createClass(UserManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDataSource();
            this.searchText();
          }
        }, {
          key: "searchText",
          value: function searchText() {
            var _this6 = this;

            this.searchTextChanged // .debounceTime(250)
            // .distinctUntilChanged()
            .subscribe(function (query) {
              _this6.source.setSearchQuery(query);
            });
          }
        }, {
          key: "getDataSource",
          value: function getDataSource() {
            this.source = this.userManagementService.getServerDataSource(this.paginationFilter);
          }
        }, {
          key: "create",
          value: function create() {
            this.router.navigate(["/pages/management/users/create"]);
          }
        }, {
          key: "onEdit",
          value: function onEdit($event) {
            var user = $event.data;
            this.router.navigate(["/pages/management/users/edit/".concat(user.id)]);
          }
        }, {
          key: "onDelete",
          value: function onDelete($event) {
            var _this7 = this;

            this.userManagementService["delete"]($event.data.id).subscribe(function (data) {
              _this7.toasterService.success('', "Ususario eliminado con exitoso!", {
                icon: ''
              });

              _this7.getDataSource();
            });
          }
        }, {
          key: "searchUser",
          value: function searchUser($event) {
            this.searchTextChanged.next($event.target.value);
          }
        }]);

        return UserManagementComponent;
      }();

      UserManagementComponent.ɵfac = function UserManagementComponent_Factory(t) {
        return new (t || UserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_backend_common_services_user_management_service__WEBPACK_IMPORTED_MODULE_1__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]));
      };

      UserManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: UserManagementComponent,
        selectors: [["ngx-user-management"]],
        decls: 14,
        vars: 4,
        consts: [[1, "row", "mb-3"], [1, "col-md-1"], ["status", "primary", "nbButton", "", "nbSuffix", "", 3, "click"], [1, "col-md-11", "searchbar"], ["nbInput", "", 3, "ngModel", "ngModelChange", "keyup"], ["ghost", "", "nbButton", "", "nbSuffix", ""], ["pack", "eva", 3, "icon"], [1, "example-smart-table", 3, "settings", "source", "edit"]],
        template: function UserManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Administrar usuarios ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserManagementComponent_Template_button_click_6_listener() {
              return ctx.create();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Agregar");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "nb-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UserManagementComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.search = $event;
            })("keyup", function UserManagementComponent_Template_input_keyup_10_listener($event) {
              return ctx.searchUser($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "nb-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ng2-smart-table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("edit", function UserManagementComponent_Template_ng2_smart_table_edit_13_listener($event) {
              return ctx.onEdit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "search-outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSuffixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableComponent"]],
        styles: [".search-label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.searchbar[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  left: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVzZXItbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0FBRUYiLCJmaWxlIjoidXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnNlYXJjaGJhcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbGVmdDogOCU7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "YxJL":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/management/backend/common/services/thirdPartyManage.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: thirdPartyManageService */

    /***/
    function YxJL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "thirdPartyManageService", function () {
        return thirdPartyManageService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var thirdPartyManageService = /*#__PURE__*/function () {
        function thirdPartyManageService(http) {
          _classCallCheck(this, thirdPartyManageService);

          this.http = http;
        }

        _createClass(thirdPartyManageService, [{
          key: "getByCompanyID",
          value: function getByCompanyID() {
            return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/ThirdPartyType/GetByCompanyID"));
          }
        }, {
          key: "updateThirdPartyType",
          value: function updateThirdPartyType(thirdPartyTypeListDTO) {
            return this.http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/ThirdPartyType/UpdateThirdPartyType"), thirdPartyTypeListDTO);
          }
        }, {
          key: "createThirdPartyType",
          value: function createThirdPartyType(thirdPartyTypeListDTO) {
            return this.http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/ThirdPartyType/CreateThirdPartyType"), thirdPartyTypeListDTO);
          }
        }, {
          key: "deleteThirdPartyType",
          value: function deleteThirdPartyType(ThirdPartyTypeId) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append("ThirdPartyTypeId", ThirdPartyTypeId); //const params = new HttpParams({ fromObject: { ThirdPartyTypeId } });

            return this.http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/ThirdPartyType/DeleteThirdPartyType"), null, {
              params: httpParams
            });
          }
        }]);

        return thirdPartyManageService;
      }();

      thirdPartyManageService.ɵfac = function thirdPartyManageService_Factory(t) {
        return new (t || thirdPartyManageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      thirdPartyManageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: thirdPartyManageService,
        factory: thirdPartyManageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "aOQL":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/management/backend/common/api/user-management.api.ts ***!
      \****************************************************************************/

    /*! exports provided: UserManagementApi */

    /***/
    function aOQL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementApi", function () {
        return UserManagementApi;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _utils_custom_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../utils/custom-http.service */
      "K2vf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserManagementApi = /*#__PURE__*/function () {
        function UserManagementApi(api) {
          _classCallCheck(this, UserManagementApi);

          this.api = api;
          this.apiController = 'management/users';
        }

        _createClass(UserManagementApi, [{
          key: "get",
          value: function get(id) {
            return this.api.get("".concat(this.apiController, "/").concat(id));
          }
        }, {
          key: "create",
          value: function create(data) {
            return this.api.post("".concat(this.apiController), data);
          }
        }, {
          key: "update",
          value: function update(id, data) {
            return this.api.put("".concat(this.apiController, "/").concat(id), data);
          }
        }, {
          key: "ResetPassword",
          value: function ResetPassword(id, data) {
            return this.api.put("".concat(this.apiController, "/ResetPassword/").concat(id), data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.api["delete"]("".concat(this.apiController, "/").concat(id));
          }
        }, {
          key: "list",
          value: function list(paginationFilter) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
              fromObject: {
                query: paginationFilter.query,
                perPage: paginationFilter.perPage.toString(),
                pageNumber: paginationFilter.pageNumber.toString()
              }
            });
            var options = {
              params: params
            };
            return this.api.get("".concat(this.apiController), options);
          } // getDataSource(data: PaginationFilter): Promise<LocalDataSource> {
          //     return this.api.getDataSource(`${this.apiController}`, data);
          // }

        }, {
          key: "getServerDataSource",
          value: function getServerDataSource(data) {
            return this.api.getServerDataSource("".concat(this.apiController));
          }
        }]);

        return UserManagementApi;
      }();

      UserManagementApi.ɵfac = function UserManagementApi_Factory(t) {
        return new (t || UserManagementApi)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_utils_custom_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomHttpService"]));
      };

      UserManagementApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: UserManagementApi,
        factory: UserManagementApi.ɵfac
      });
      /***/
    },

    /***/
    "hLaO":
    /*!********************************************************************************************************!*\
      !*** ./src/app/pages/management/components/access-management-form/access-management-form.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: AccessManagementFormComponent */

    /***/
    function hLaO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessManagementFormComponent", function () {
        return AccessManagementFormComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _backend_common_services_user_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../backend/common/services/user-management.service */
      "TqkH");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../@auth/components */
      "Cgdg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _backend_common_services_access_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../backend/common/services/access.service */
      "/sA8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var AccessManagementFormComponent = /*#__PURE__*/function () {
        function AccessManagementFormComponent(userManagementService, accessService, router, route, location, toastrService, fb) {
          _classCallCheck(this, AccessManagementFormComponent);

          this.userManagementService = userManagementService;
          this.accessService = accessService;
          this.router = router;
          this.route = route;
          this.location = location;
          this.toastrService = toastrService;
          this.fb = fb;
          this.headerTitle = 'Crear_usuario';
          this.emailError = null;
          this.loginError = null;
          this.identificationError = null;
        }

        _createClass(AccessManagementFormComponent, [{
          key: "identification",
          get: function get() {
            return this.userForm.get('identification');
          }
        }, {
          key: "name",
          get: function get() {
            return this.userForm.get('name');
          }
        }, {
          key: "lastName",
          get: function get() {
            return this.userForm.get('lastName');
          }
        }, {
          key: "login",
          get: function get() {
            return this.userForm.get('login');
          }
        }, {
          key: "email",
          get: function get() {
            return this.userForm.get('email');
          }
        }, {
          key: "isActive",
          get: function get() {
            return this.userForm.get('isActive');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initUserForm();
            this.initsecondform();
            this.loadUser();
          }
        }, {
          key: "initUserForm",
          value: function initUserForm() {
            this.userForm = this.fb.group({
              id: this.fb.control(''),
              identification: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]),
              name: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]),
              lastName: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]),
              login: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]),
              isActive: this.fb.control(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_auth_components__WEBPACK_IMPORTED_MODULE_3__["EMAIL_PATTERN"])])
            });
          }
        }, {
          key: "initsecondform",
          value: function initsecondform() {
            this.secondForm = this.fb.group({
              nameAccess: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              logoempresa: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              changepassword: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              thirdparties: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              typeslistbyquery: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              procurator: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              users: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              access: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              setting: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              sentto: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              monitoring: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              individual: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              massive: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              type: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              manager: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              historyreport: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              getlog: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              queriesandmatches: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              coincidencedetailing: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              viewpastconsultations: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              certificationlistupdates: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              parameterscategory: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              news: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              roi: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              faqs: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              signal: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "loadUser",
          value: function loadUser() {
            var _this8 = this;

            this.id = this.route.snapshot.paramMap.get('id');

            if (this.id != null) {
              this.headerTitle = 'Actualizar_usuario';
              this.accessService.getPermissionsByAccessId(this.id).subscribe(function (response) {
                var access = response;
                delete access.accessId;
                console.log(access);

                _this8.secondForm.setValue(access);

                _this8.secondForm.get('nameAccess').disable();
              }, function (error) {
                _this8.toastrService.danger('', 'Usuario no econtrado', {
                  icon: ''
                });
              });
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this9 = this;

            console.log(this.secondForm.value);

            if (this.id == null) {
              this.accessService.createAccessByCompany(this.secondForm.value).subscribe(function () {
                //console.log("enviado");
                _this9.router.navigate(["/pages/management/access/"]);
              });
            } else {
              var data = Object.assign(Object.assign({}, this.secondForm.value), {
                accessId: this.id
              });
              this.accessService.updateAccess(data).subscribe(function () {
                //console.log("enviado");
                _this9.router.navigate(["/pages/management/access/"]);
              });
            }
          }
        }, {
          key: "back",
          value: function back($event) {
            $event.preventDefault();
            this.location.back();
          }
        }, {
          key: "setupErrorResponse",
          value: function setupErrorResponse(errorResponse) {
            var errorObj = errorResponse.error.errors;
            if (errorObj.hasOwnProperty('email')) this.emailError = errorObj.email;
            if (errorObj.hasOwnProperty('login')) this.loginError = errorObj.login;
            if (errorObj.hasOwnProperty('identification')) this.identificationError = errorObj.identification;
          }
        }, {
          key: "clearErrors",
          value: function clearErrors() {
            this.emailError = null;
            this.loginError = null;
            this.identificationError = null;
          }
        }, {
          key: "onSecondSubmit",
          value: function onSecondSubmit() {
            this.secondForm.markAsDirty();
          }
        }, {
          key: "getPermissionsByUser",
          value: function getPermissionsByUser(id) {
            var _this10 = this;

            this.userManagementService.getPermissionsByUser(id).subscribe(function (roles) {
              //Se escoge unicamente el objeto que nos interesa el atributo status
              Object.keys(roles).map(function (key, index) {
                if (key != "user") roles[key] = roles[key][0]['status'];
              }); //se elimina el atributo user debido a que no corresponde al modelo del secondform y asi utilizar la propiedad setvalue de formgroup

              delete roles.user;

              _this10.secondForm.setValue(roles);

              console.log(roles);
            });
          }
        }]);

        return AccessManagementFormComponent;
      }();

      AccessManagementFormComponent.ɵfac = function AccessManagementFormComponent_Factory(t) {
        return new (t || AccessManagementFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_backend_common_services_user_management_service__WEBPACK_IMPORTED_MODULE_1__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_backend_common_services_access_service__WEBPACK_IMPORTED_MODULE_6__["AccessService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      AccessManagementFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: AccessManagementFormComponent,
        selectors: [["ngx-access-management-form"]],
        decls: 188,
        vars: 41,
        consts: [["xmlns", "http://www.w3.org/1999/html", 1, "col-lg-12"], [1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"], [1, "steppers-container", "row"], [1, "col-md-12", "col-lg-12", "col-xxxl-12"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row", "offset-md-3", "col-sm-6"], ["for", "inputPassword", 1, "col-sm-2", "col-form-label", "font-weight-bolder"], [1, "col-sm-10"], ["type", "text", "formControlName", "nameAccess", "id", "inputPassword", 1, "form-control"], ["multi", ""], [3, "expanded"], [1, "row"], [1, "col-6"], [1, "col-6", "text-center"], ["status", "primary", "formControlName", "logoempresa", 1, "p-2", 3, "checked"], ["status", "primary", "formControlName", "changepassword", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "thirdparties", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "typeslistbyquery", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "procurator", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "users", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "access", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "setting", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "sentto", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "monitoring", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "individual", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "massive", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "type", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "manager", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "historyreport", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "getlog", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "queriesandmatches", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "coincidencedetailing", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "viewpastconsultations", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "certificationlistupdates", 1, "p-2", 3, "checked"], ["status", "primary", "formControlName", "parameterscategory", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "news", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "roi", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "faqs", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "signal", 1, "p-2", 3, "checked", "checkedChange"], [1, "nav", "justify-content-center", "pt-2"], ["nbButton", "", "status", "primary", "hero", "", 3, "disabled", "click"]],
        template: function AccessManagementFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccessManagementFormComponent_Template_a_click_4_listener($event) {
              return ctx.back($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "nb-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AccessManagementFormComponent_Template_form_ngSubmit_11_listener() {
              return ctx.onSecondSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "nb-accordion", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "nb-accordion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Configuracion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Logo Empresa");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "nb-toggle", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Cambiar contrase\xF1a");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "nb-toggle", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_33_listener($event) {
              return ctx.secondForm["changepassword"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "nb-accordion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " Administracion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Tipo Terceros");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "nb-toggle", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_43_listener($event) {
              return ctx.secondForm["thirdparties"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Tipos Lista por Consulta");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "nb-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_48_listener($event) {
              return ctx.secondForm["typeslistbyquery"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Procuraduria");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "nb-toggle", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_53_listener($event) {
              return ctx.secondForm["procurator"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Usuarios");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "nb-toggle", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_58_listener($event) {
              return ctx.secondForm["users"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Accesos");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "nb-toggle", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_63_listener($event) {
              return ctx.secondForm["access"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "nb-accordion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, " Notificaciones ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Configuraci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "nb-toggle", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_73_listener($event) {
              return ctx.secondForm["setting"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Enviadas");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "nb-toggle", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_78_listener($event) {
              return ctx.secondForm["sentto"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "Monitoreo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "nb-toggle", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_83_listener($event) {
              return ctx.secondForm["monitoring"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "nb-accordion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, " Consultas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, "Individual");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "nb-toggle", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_93_listener($event) {
              return ctx.secondForm["individual"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "Masiva");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "nb-toggle", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_98_listener($event) {
              return ctx.secondForm["massive"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "nb-accordion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, " Listas Propias ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, "Tipo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "nb-toggle", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_108_listener($event) {
              return ctx.secondForm["type"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "Administrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "nb-toggle", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_113_listener($event) {
              return ctx.secondForm["manager"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "nb-accordion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](116, " Reportes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](121, "Consulta Reporte Historico");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "nb-toggle", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_123_listener($event) {
              return ctx.secondForm["historyreport"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, "Consultar Log");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "nb-toggle", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_128_listener($event) {
              return ctx.secondForm["getlog"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "Consultas y Coincidencias");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "nb-toggle", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_133_listener($event) {
              return ctx.secondForm["queriesandmatches"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](136, "Detallado de Coincidencias");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "nb-toggle", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_138_listener($event) {
              return ctx.secondForm["coincidencedetailing"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](139, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](141, "Ver Consultas Realizadas");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](143, "nb-toggle", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_143_listener($event) {
              return ctx.secondForm["viewpastconsultations"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](146, "Certificaci\xF3n Actualizacion Listas");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](148, "nb-toggle", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](149, "nb-accordion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151, " Perfilamiento de Terceros ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](156, "Parametrizar variables y categor\xEDas");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "nb-toggle", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_158_listener($event) {
              return ctx.secondForm["parameterscategory"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](159, "nb-accordion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](161, " Extras ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](163, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](165, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](166, "Noticias");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "nb-toggle", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_168_listener($event) {
              return ctx.secondForm["news"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](169, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](171, "Registrar ROI/Denuncia");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "nb-toggle", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_173_listener($event) {
              return ctx.secondForm["roi"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](174, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](175, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](176, "FAQs");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](177, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](178, "nb-toggle", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_178_listener($event) {
              return ctx.secondForm["faqs"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](179, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](180, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](181, "Se\xF1ales de alerta");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](182, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](183, "nb-toggle", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function AccessManagementFormComponent_Template_nb_toggle_checkedChange_183_listener($event) {
              return ctx.secondForm["signal"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](185, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccessManagementFormComponent_Template_button_click_185_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](186, "Guardar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](187, "nb-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 37, "AccessComponent." + ctx.headerTitle), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.secondForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 39, "AccessComponent.Nombre_rol"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["logoempresa"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["changepassword"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["thirdparties"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["typeslistbyquery"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["procurator"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["users"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["access"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["setting"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["sentto"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["monitoring"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["individual"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["massive"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["type"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["manager"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["historyreport"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["getlog"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["queriesandmatches"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["coincidencedetailing"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["viewpastconsultations"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["certificationlistupdates"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["parameterscategory"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["news"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["roi"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["faqs"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["signal"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.secondForm.valid);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionItemBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToggleComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardFooterComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: [".navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n}\n.navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  vertical-align: middle;\n}\n.links[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFjY2Vzcy1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQUNKO0FBR0E7RUFDRSxpQkFBQTtBQUFGIiwiZmlsZSI6ImFjY2Vzcy1tYW5hZ2VtZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbiAubGluayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgbmItaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG5cclxuLmxpbmtzIG5iLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "iVQy":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/management/components/companytypelist/companytypelist.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: CompanytypelistComponent */

    /***/
    function iVQy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanytypelistComponent", function () {
        return CompanytypelistComponent;
      });
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _components_editors_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../@components/editors/toggle/toggle.component */
      "f2ia");
      /* harmony import */


      var _backend_common_services_companytypeList_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../backend/common/services/companytypeList.service */
      "OlR6");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _models_CompanyTypeListDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../models/CompanyTypeListDTO */
      "+rkV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var CompanytypelistComponent = /*#__PURE__*/function () {
        function CompanytypelistComponent(_companytypeService, _sanitizer, toastrService) {
          var _this11 = this;

          _classCallCheck(this, CompanytypelistComponent);

          this._companytypeService = _companytypeService;
          this._sanitizer = _sanitizer;
          this.toastrService = toastrService;
          this.index = 1;
          this.destroyByClick = true;
          this.duration = 2000;
          this.hasIcon = true;
          this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalPhysicalPosition"].TOP_RIGHT;
          this.preventDuplicates = false;
          this.status = 'primary';
          this.title = 'HI there!';
          this.content = "I'm cool toaster!";
          this.types = ['primary', 'success', 'info', 'warning', 'danger'];
          this.positions = [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalPhysicalPosition"].TOP_RIGHT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalPhysicalPosition"].TOP_LEFT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalPhysicalPosition"].BOTTOM_LEFT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalLogicalPosition"].TOP_END, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalLogicalPosition"].TOP_START, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalLogicalPosition"].BOTTOM_END, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalLogicalPosition"].BOTTOM_START];
          this.quotes = [{
            title: null,
            body: 'We rock at Angular'
          }, {
            title: null,
            body: 'Titles are not always needed'
          }, {
            title: null,
            body: 'Toastr rock!'
          }]; //#endregion

          this.data = new _models_CompanyTypeListDTO__WEBPACK_IMPORTED_MODULE_5__["CompanyTypeListsDTO"]();
          this.settings = {
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              search: {
                title: 'Estado',
                type: 'custom',
                width: '5%',
                filter: false,
                renderComponent: _components_editors_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__["ToggleComponent"],
                onComponentInitFunction: function onComponentInitFunction(instance) {
                  instance.save.subscribe(function (row) {
                    row.search = row.search ? false : true;

                    _this11.updateStatus(row);
                  });
                }
              },
              listTypeId: {
                title: 'No.',
                type: 'number',
                filter: true,
                width: '3%'
              },
              name: {
                title: 'Nombre Tipo Lista',
                type: 'string',
                filter: true
              },
              listType: {
                title: 'Grupo lista',
                type: 'html',
                filter: true,
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return _this11._sanitizer.bypassSecurityTrustHtml("<h6 class=\"text-black p-t-0 qlz-line-height text-center\" style=\"background:".concat(row.listType.listGroup.color, "\"><strong>").concat(row.listType.listGroup.name, " </strong> </h6>"));
                },
                filterFunction: function filterFunction(cell, search) {
                  console.log("cell", cell.listGroup.name);
                  return cell.listGroup.name.includes(search);
                }
              },
              country: {
                title: 'Pais',
                type: 'html',
                filter: true,
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return _this11._sanitizer.bypassSecurityTrustHtml("".concat(row.listType.country.name));
                }
              }
            }
          };
        }

        _createClass(CompanytypelistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          } //#region Methods 

        }, {
          key: "initialize",
          value: function initialize() {
            this.getCompany();
          } //#endregion
          //#region Metodos SmartTableData

        }, {
          key: "onDeleteConfirm",
          value: function onDeleteConfirm(event) {
            if (window.confirm('Esta seguro de eliminar el registro')) {
              event.confirm.resolve(); //this.deleteThirdPartyType(event.data.id.toString());
            } else {
              event.confirm.reject();
            }

            console.log(event.data.id);
          }
        }, {
          key: "onEdit",
          value: function onEdit(event) {
            console.log(event);
          }
        }, {
          key: "onSaveConfirm",
          value: function onSaveConfirm(event) {
            console.log(event);
            var datatemporal = event.source.data;

            if (!this.isObjEmpty(datatemporal)) {
              //this.updateThirdPartyType(event.newData);
              event.confirm.resolve(event.newData);
            } else {
              event.confirm.reject();
            }
          }
        }, {
          key: "onCreateConfirm",
          value: function onCreateConfirm(event) {
            console.log(event);
            var datatemporal = event.source.data;

            if (!this.isObjEmpty(datatemporal)) {
              //this.createThirdPartyType(event.newData);
              event.confirm.resolve(event.newData);
            } else {
              //this.showToast("danger", "Error","Debe ingresar todos los valores");
              event.confirm.reject();
            }
          } //#endregion
          //#region Metodos Privados 
          //#endregion

        }, {
          key: "setCheckedStatus",
          value: function setCheckedStatus(checked) {
            var _this12 = this;

            var status = checked.target.checked;

            this._companytypeService.updateRangeStatus(status).subscribe(function (res) {
              _this12.showToast("success", 'Tipos de listas por consulta', "Actualizados con Exito");

              _this12.getCompany();

              (function (error) {
                _this12.showToast("danger", null, error);
              });
            });
          } //#region Services
          //#region Get

        }, {
          key: "getCompany",
          value: function getCompany() {
            var _this13 = this;

            this._companytypeService.getTypeList().subscribe(function (res) {
              _this13.data = res;
              _this13.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["LocalDataSource"](_this13.data);
            });
          } //#endregion
          //#region Update

        }, {
          key: "updateStatus",
          value: function updateStatus(CompanyTypeListDTO) {
            var _this14 = this;

            this._companytypeService.updateStatus(CompanyTypeListDTO).subscribe(function (res) {
              _this14.showToast("success", CompanyTypeListDTO.name, "Actualizada con Exito");

              (function (error) {
                _this14.showToast("danger", null, error);
              });
            });
          } //endregion
          //#endregion
          //#region Validacion
          //Todo: Valida si los registro de la tabla estan vacios

        }, {
          key: "isObjEmpty",
          value: function isObjEmpty(obj) {
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) return false;
            }

            return true;
          } //Todo : Muestra toast segun mensaje

        }, {
          key: "showToast",
          value: function showToast(type, title, body) {
            var hasIcon = this.hasIcon ? {} : {
              icon: 'alert-circle-outline'
            };
            var config = Object.assign({
              status: type,
              destroyByClick: this.destroyByClick,
              duration: this.duration,
              position: this.position,
              preventDuplicates: this.preventDuplicates
            }, hasIcon);
            var titleContent = title ? ". ".concat(title) : '';
            this.index += 1;
            this.toastrService.show(body, title, config);
          }
        }]);

        return CompanytypelistComponent;
      }();

      CompanytypelistComponent.ɵfac = function CompanytypelistComponent_Factory(t) {
        return new (t || CompanytypelistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_backend_common_services_companytypeList_service__WEBPACK_IMPORTED_MODULE_3__["CompanytypeListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]));
      };

      CompanytypelistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: CompanytypelistComponent,
        selectors: [["ngx-companytypelist"]],
        decls: 9,
        vars: 5,
        consts: [["labelPosition", "start", 3, "change"], [1, "example-smart-table", 3, "settings", "source", "deleteConfirm", "editConfirm", "createConfirm"], ["table", ""]],
        template: function CompanytypelistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "nb-toggle", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CompanytypelistComponent_Template_nb_toggle_change_5_listener($event) {
              return ctx.setCheckedStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Activaci\xF3n / inactivaci\xF3n masiva");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ng2-smart-table", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("deleteConfirm", function CompanytypelistComponent_Template_ng2_smart_table_deleteConfirm_7_listener($event) {
              return ctx.onDeleteConfirm($event);
            })("editConfirm", function CompanytypelistComponent_Template_ng2_smart_table_editConfirm_7_listener($event) {
              return ctx.onSaveConfirm($event);
            })("createConfirm", function CompanytypelistComponent_Template_ng2_smart_table_createConfirm_7_listener($event) {
              return ctx.onCreateConfirm($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "ManageModule.ADMINISTRAR_TIPOS_DE_LISTAS_POR_CONSULTA"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.data);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToggleComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["Ng2SmartTableComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55dHlwZWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "sIGp":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/management/components/thirdpartymanage/thirdpartymanage.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ThirdpartymanageComponent */

    /***/
    function sIGp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThirdpartymanageComponent", function () {
        return ThirdpartymanageComponent;
      });
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _components_editors_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../@components/editors/toggle/toggle.component */
      "f2ia");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _models_ThirdPartyTypeDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../models/ThirdPartyTypeDTO */
      "57+D");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _backend_common_services_thirdPartyManage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../backend/common/services/thirdPartyManage.service */
      "YxJL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import { thirdPartyManageService } from '../../backend/common/services/ThirdPartyManage.service';


      var _c0 = ["table"];

      var ThirdpartymanageComponent = /*#__PURE__*/function () {
        function ThirdpartymanageComponent(toastrService, _thirdPartyManageService, translate) {
          var _this15 = this;

          _classCallCheck(this, ThirdpartymanageComponent);

          this.toastrService = toastrService;
          this._thirdPartyManageService = _thirdPartyManageService;
          this.translate = translate;
          this.selectedRows = [];
          this.index = 1;
          this.destroyByClick = true;
          this.duration = 2000;
          this.hasIcon = true;
          this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalPhysicalPosition"].TOP_RIGHT;
          this.preventDuplicates = false;
          this.status = 'primary';
          this.title = 'HI there!';
          this.content = "I'm cool toaster!";
          this.types = ['primary', 'success', 'info', 'warning', 'danger'];
          this.positions = [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalPhysicalPosition"].TOP_RIGHT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalPhysicalPosition"].TOP_LEFT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalPhysicalPosition"].BOTTOM_LEFT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalPhysicalPosition"].BOTTOM_RIGHT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalLogicalPosition"].TOP_END, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalLogicalPosition"].TOP_START, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalLogicalPosition"].BOTTOM_END, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalLogicalPosition"].BOTTOM_START];
          this.quotes = [{
            title: null,
            body: 'We rock at Angular'
          }, {
            title: null,
            body: 'Titles are not always needed'
          }, {
            title: null,
            body: 'Toastr rock!'
          }]; //#endregion

          this.settings = {
            actions: {
              add: true,
              edit: true,
              "delete": false
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
            "delete": {
              deleteButtonContent: '<i class="nb-trash"></i>',
              confirmDelete: true
            },
            columns: {
              name: {
                title: 'Nombre Tercero',
                type: 'string'
              },
              createdAt: {
                title: 'Fecha de registro',
                type: 'string',
                addable: false,
                editable: false,
                width: '250px',
                filter: false,
                sortDirection: 'desc'
              },
              status: {
                title: 'Estado',
                type: 'custom',
                renderComponent: _components_editors_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"],
                onComponentInitFunction: function onComponentInitFunction(instance) {
                  instance.save.subscribe(function (row) {
                    row.status = row.status ? false : true;

                    _this15.updateThirdPartyType(row);
                  });
                },
                editor: {
                  type: 'list',
                  config: {
                    list: [{
                      title: 'Inactivo',
                      value: false
                    }, {
                      title: 'Activo',
                      value: true
                    }]
                  },
                  width: '5%',
                  filter: false
                }
              }
            }
          };
          this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["LocalDataSource"]();
          this.data = new _models_ThirdPartyTypeDTO__WEBPACK_IMPORTED_MODULE_3__["ThirdPartyTypeListDTO"]();
        }

        _createClass(ThirdpartymanageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
            this.traductorlocal();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.getByCompanyID();
          } //#region Metodos SmartTableData

        }, {
          key: "onDeleteConfirm",
          value: function onDeleteConfirm(event) {
            if (window.confirm('Esta seguro de eliminar el registro')) {
              event.confirm.resolve();
              this.deleteThirdPartyType(event.data.id.toString());
            } else {
              event.confirm.reject();
            }
          }
        }, {
          key: "onEdit",
          value: function onEdit(event) {}
        }, {
          key: "onSaveConfirm",
          value: function onSaveConfirm(event) {
            var datatemporal = event.newData;

            if (!this.isObjEmpty(datatemporal.name)) {
              this.updateThirdPartyType(event.newData);
              event.confirm.resolve(event.newData);
            } else {
              this.showToast("danger", "Error", "El campo Nombre Tercero es obligatorio");
              event.confirm.reject();
            }

            this.getByCompanyID();
          }
        }, {
          key: "onCreateConfirm",
          value: function onCreateConfirm(event) {
            console.log(event);
            var datatemporal = event.newData;

            if (!this.isObjEmpty(datatemporal.name)) {
              this.createThirdPartyType(event.newData);
              event.confirm.resolve(event.newData);
            } else {
              this.showToast("danger", "Error", "El campo Nombre Tercero es obligatorio");
              event.confirm.reject();
            }
          }
        }, {
          key: "onRowSelect",
          value: function onRowSelect(event) {} //#endregion
          //#region Metodos Privados

        }, {
          key: "ChangeStatus",
          value: function ChangeStatus(event) {
            var id = event;
          }
        }, {
          key: "traductorlocal",
          value: function traductorlocal() {
            this.lang = localStorage.getItem('lang');
            var currentlang = this.translate.currentLang;
            currentlang = this.lang;
            this.translate.use(currentlang);
          } //#endregion
          //#region Validacion
          //Todo: Valida si los registro de la tabla estan vacios

        }, {
          key: "isObjEmpty",
          value: function isObjEmpty(obj) {
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) return false;
            }

            return true;
          } //Todo : Muestra toast segun mensaje

        }, {
          key: "showToast",
          value: function showToast(type, title, body) {
            var hasIcon = this.hasIcon ? {} : {
              icon: 'alert-circle-outline'
            };
            var config = Object.assign({
              status: type,
              destroyByClick: this.destroyByClick,
              duration: this.duration,
              position: this.position,
              preventDuplicates: this.preventDuplicates
            }, hasIcon);
            var titleContent = title ? ". ".concat(title) : '';
            this.index += 1;
            this.toastrService.show(body, title, config);
          } //#endregion
          //#region Servicios
          //#region Get

        }, {
          key: "getByCompanyID",
          value: function getByCompanyID(CompanyId) {
            var _this16 = this;

            this._thirdPartyManageService.getByCompanyID().subscribe(function (response) {
              _this16.data = response;
              _this16.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["LocalDataSource"](_this16.data); // console.log(this.settings);
            });
          } //endregion
          //#region Post

        }, {
          key: "createThirdPartyType",
          value: function createThirdPartyType(thirdPartyTypeListDTO) {
            var _this17 = this;

            this._thirdPartyManageService.createThirdPartyType(thirdPartyTypeListDTO).subscribe(function (res) {
              var tp = thirdPartyTypeListDTO;

              _this17.showToast("success", tp["name"], "Guardado Exitoso");

              _this17.getByCompanyID();
            });
          } //endregion
          //#region Update

        }, {
          key: "updateThirdPartyType",
          value: function updateThirdPartyType(thirdPartyTypeListDTO) {
            var _this18 = this;

            this._thirdPartyManageService.updateThirdPartyType(thirdPartyTypeListDTO).subscribe(function (res) {
              var tp = thirdPartyTypeListDTO;

              _this18.showToast("success", tp["name"], "Actualización Exitosa");

              console.log("Enviado");
            });
          } //endregion
          //#region Delete

        }, {
          key: "deleteThirdPartyType",
          value: function deleteThirdPartyType(id) {
            var _this19 = this;

            this._thirdPartyManageService.deleteThirdPartyType(id).subscribe(function (res) {
              _this19.showToast("success", 'Tipo tercero', "Eliminado Exitoso");
            });
          }
        }]);

        return ThirdpartymanageComponent;
      }();

      ThirdpartymanageComponent.ɵfac = function ThirdpartymanageComponent_Factory(t) {
        return new (t || ThirdpartymanageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_backend_common_services_thirdPartyManage_service__WEBPACK_IMPORTED_MODULE_5__["thirdPartyManageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
      };

      ThirdpartymanageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: ThirdpartymanageComponent,
        selectors: [["ngx-thirdpartymanage"]],
        viewQuery: function ThirdpartymanageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 7,
        vars: 5,
        consts: [[1, "example-smart-table", 3, "settings", "source", "deleteConfirm", "editConfirm", "createConfirm", "rowSelect"], ["table", ""]],
        template: function ThirdpartymanageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ng2-smart-table", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("deleteConfirm", function ThirdpartymanageComponent_Template_ng2_smart_table_deleteConfirm_5_listener($event) {
              return ctx.onDeleteConfirm($event);
            })("editConfirm", function ThirdpartymanageComponent_Template_ng2_smart_table_editConfirm_5_listener($event) {
              return ctx.onSaveConfirm($event);
            })("createConfirm", function ThirdpartymanageComponent_Template_ng2_smart_table_createConfirm_5_listener($event) {
              return ctx.onCreateConfirm($event);
            })("rowSelect", function ThirdpartymanageComponent_Template_ng2_smart_table_rowSelect_5_listener($event) {
              return ctx.onRowSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "ManageModule.Administraci\xF3n_Tipo_Tercero"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.data);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["Ng2SmartTableComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGlyZHBhcnR5bWFuYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "zPfu":
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/management/components/user-management-form/user-management-form.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: UserManagementFormComponent */

    /***/
    function zPfu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserManagementFormComponent", function () {
        return UserManagementFormComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _backend_common_services_user_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../backend/common/services/user-management.service */
      "TqkH");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../@auth/components */
      "Cgdg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _backend_common_services_access_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../backend/common/services/access.service */
      "/sA8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../@components/validation-message/validation-message.component */
      "6edl");

      function UserManagementFormComponent_p_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.identificationError, " ");
        }
      }

      function UserManagementFormComponent_p_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.emailError, " ");
        }
      }

      function UserManagementFormComponent_p_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.loginError, " ");
        }
      }

      function UserManagementFormComponent_nb_option_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserManagementFormComponent_nb_option_59_Template_nb_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var access_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r6.changeaccess(access_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var access_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", access_r5.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](access_r5.name);
        }
      }

      var UserManagementFormComponent = /*#__PURE__*/function () {
        function UserManagementFormComponent(userManagementService, router, route, accessService, location, toastrService, fb) {
          _classCallCheck(this, UserManagementFormComponent);

          this.userManagementService = userManagementService;
          this.router = router;
          this.route = route;
          this.accessService = accessService;
          this.location = location;
          this.toastrService = toastrService;
          this.fb = fb;
          this.headerTitle = 'Crear usuario';
          this.BtnResetPassword = false;
          this.emailError = null;
          this.loginError = null;
          this.accessrol = [];
          this.identificationError = null;
          this.editAdd = "1";
        }

        _createClass(UserManagementFormComponent, [{
          key: "identification",
          get: function get() {
            return this.userForm.get('identification');
          }
        }, {
          key: "name",
          get: function get() {
            return this.userForm.get('name');
          }
        }, {
          key: "lastName",
          get: function get() {
            return this.userForm.get('lastName');
          }
        }, {
          key: "login",
          get: function get() {
            return this.userForm.get('login');
          }
        }, {
          key: "email",
          get: function get() {
            return this.userForm.get('email');
          }
        }, {
          key: "isActive",
          get: function get() {
            return this.userForm.get('isActive');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initUserForm();
            this.initsecondform();
            this.inithirdform();
            this.loadUser();
            this.getAllAccess();
            console.log('inicio', this.editAdd);
          }
        }, {
          key: "initUserForm",
          value: function initUserForm() {
            this.userForm = this.fb.group({
              id: this.fb.control(''),
              identification: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]),
              name: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]),
              lastName: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]),
              login: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]),
              isActive: this.fb.control(true, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_auth_components__WEBPACK_IMPORTED_MODULE_3__["EMAIL_PATTERN"])])
            });
          }
        }, {
          key: "initsecondform",
          value: function initsecondform() {
            this.secondForm = this.fb.group({
              logoempresa: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              changepassword: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              thirdparties: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              typeslistbyquery: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              procurator: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              users: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              access: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              setting: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              sentto: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              monitoring: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              individual: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              massive: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              type: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              manager: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              historyreport: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              getlog: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              queriesandmatches: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              coincidencedetailing: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              viewpastconsultations: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              certificationlistupdates: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              parameterscategory: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              news: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              roi: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              faqs: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              signal: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "inithirdform",
          value: function inithirdform() {
            this.thirdForm = this.fb.group({
              thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "loadUser",
          value: function loadUser() {
            var _this20 = this;

            var id = this.route.snapshot.paramMap.get('id');

            if (id != null) {
              this.headerTitle = 'Actualizar usuario';
              this.BtnResetPassword = true;
              this.editAdd = "0";
              this.userManagementService.get(+id).subscribe(function (response) {
                var user = response.data;

                _this20.userForm.setValue({
                  id: user.id ? user.id : '',
                  identification: user.identification ? user.identification : '',
                  name: user.name ? user.name : '',
                  lastName: user.lastName ? user.lastName : '',
                  login: user.login ? user.login : '',
                  email: user.email,
                  isActive: user.isActive
                });

                _this20.getPermissionsByUser(id);
              }, function (error) {
                _this20.toastrService.danger('', 'Usuario no econtrado', {
                  icon: ''
                });
              });
            }
          }
        }, {
          key: "ResetPassword",
          value: function ResetPassword() {
            var _this21 = this;

            var user = this.userForm.value;
            var id = null;
            this.route.snapshot.paramMap.get('id') ? id = this.route.snapshot.paramMap.get('id') : delete user.id;

            if (id != null) {
              this.userManagementService.ResetPassword(id, user).subscribe(function (user) {
                _this21.toastrService.success('', '¡Reinicio de Contraseña Exitoso!', {
                  icon: ''
                });

                _this21.router.navigate(["/pages/management/users"]);

                _this21.clearErrors();
              }, function (errorResponse) {
                _this21.setupErrorResponse(errorResponse);
              });
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this22 = this;

            var y = JSON.parse(JSON.stringify(this.secondForm.value));
            Object.keys(y).map(function (key, index) {
              y[key] = [{
                status: y[key],
                id: index + 1
              }];
            });
            console.log(y);
            var rolesuser = y;
            var user = this.userForm.value;
            var id = null;
            this.route.snapshot.paramMap.get('id') ? id = this.route.snapshot.paramMap.get('id') : delete user.id;

            if (id == null) {
              this.userManagementService.create(user).subscribe(function (user) {
                _this22.userForm.reset();

                rolesuser.user = user.data.id;

                _this22.userManagementService.createRolesUser(rolesuser).subscribe(function () {});

                _this22.toastrService.success('', '¡Registro exitoso!', {
                  icon: ''
                });

                _this22.clearErrors();

                _this22.router.navigate(["/pages/management/users"]);
              }, function (errorResponse) {
                _this22.toastrService.warning('', 'El usuario ya se encuentra registrado o se a registrado con un correo ya existente', {
                  icon: ''
                });

                _this22.userForm.controls['email'].setValue('');

                _this22.setupErrorResponse(errorResponse);
              });
            } else {
              this.userManagementService.update(+id, user).subscribe(function (user) {
                rolesuser.user = parseInt(id);

                _this22.userManagementService.createRolesUser(rolesuser).subscribe(function () {
                  _this22.toastrService.success('', '¡Actualizacion Exitosa!', {
                    icon: ''
                  });

                  _this22.router.navigate(["/pages/management/users"]);
                }); // this.router.navigate([`/pages/management/users`]);


                _this22.clearErrors();
              }, function (errorResponse) {
                _this22.setupErrorResponse(errorResponse);
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "back",
          value: function back($event) {
            $event.preventDefault();
            this.location.back();
          }
        }, {
          key: "setupErrorResponse",
          value: function setupErrorResponse(errorResponse) {
            var errorObj = errorResponse.error.errors;
            if (errorObj.hasOwnProperty('email')) this.emailError = errorObj.email;
            if (errorObj.hasOwnProperty('login')) this.loginError = errorObj.login;
            if (errorObj.hasOwnProperty('identification')) this.identificationError = errorObj.identification;
          }
        }, {
          key: "clearErrors",
          value: function clearErrors() {
            this.emailError = null;
            this.loginError = null;
            this.identificationError = null;
          }
        }, {
          key: "onFirstSubmit",
          value: function onFirstSubmit() {
            this.userForm.markAsDirty();
          }
        }, {
          key: "onSecondSubmit",
          value: function onSecondSubmit() {
            this.secondForm.markAsDirty();
          }
        }, {
          key: "getPermissionsByUser",
          value: function getPermissionsByUser(id) {
            var _this23 = this;

            this.userManagementService.getPermissionsByUser(id).subscribe(function (roles) {
              //Se escoge unicamente el objeto que nos interesa el atributo status
              Object.keys(roles).map(function (key, index) {
                if (key != "user") roles[key] = roles[key][0]['status'];
              }); //se elimina el atributo user debido a que no corresponde al modelo del secondform y asi utilizar la propiedad setvalue de formgroup

              delete roles.user;

              _this23.secondForm.setValue(roles);

              console.log(roles);
            });
          }
        }, {
          key: "getAllAccess",
          value: function getAllAccess() {
            var _this24 = this;

            this.accessService.getByCompany().subscribe(function (result) {
              _this24.accessrol = result;
              console.log('roles', _this24.accessrol);
              _this24.selectedAccessDefault = _this24.accessrol.filter(function (x) {
                return x.name == "Personalizar";
              });
              _this24.selectedAccessDefault = _this24.selectedAccessDefault[0].id;
            });
          }
        }, {
          key: "changeaccess",
          value: function changeaccess(e) {
            var _this25 = this;

            this.accessService.getPermissionsByAccessId(e).subscribe(function (result) {
              //console.log(result);
              delete result.accessId;
              delete result.nameAccess;

              _this25.secondForm.setValue(result);
            });
          }
        }]);

        return UserManagementFormComponent;
      }();

      UserManagementFormComponent.ɵfac = function UserManagementFormComponent_Factory(t) {
        return new (t || UserManagementFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_backend_common_services_user_management_service__WEBPACK_IMPORTED_MODULE_1__["UserManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_backend_common_services_access_service__WEBPACK_IMPORTED_MODULE_6__["AccessService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      UserManagementFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: UserManagementFormComponent,
        selectors: [["ngx-user-management-form"]],
        decls: 243,
        vars: 63,
        consts: [["xmlns", "http://www.w3.org/1999/html", 1, "col-lg-12"], [1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"], [1, "steppers-container", "row"], [1, "col-md-12", "col-lg-12", "col-xxxl-12"], ["stepper", ""], ["label", "Datos basicos", 3, "stepControl"], [3, "formGroup"], [1, "form-row"], [1, "form-group", "col-md-6", "col-lg-6", "col-xxxl-6"], ["for", "firstName", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "firstName", "formControlName", "name", "placeholder", "Ingrese el nombre", 1, "form-control", 3, "status"], ["label", "First Name", "minLength", "3", "maxLength", "20", 3, "showMinLength", "showMaxLength"], ["for", "lastName", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "lastName", "formControlName", "lastName", "placeholder", "Ingrese el apellido", 1, "form-control", 3, "status"], ["label", "Last Name", "minLength", "3", "maxLength", "20", 3, "showMinLength", "showMaxLength"], ["for", "identification", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "identification", "formControlName", "identification", "placeholder", "Ingrese el n\xFAmero Documento", 3, "status"], ["class", "error-message caption status-danger", 4, "ngIf"], ["for", "inputEmail", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "inputEmail", "formControlName", "email", "placeholder", "Ingrese el correo electr\xF3nico", 1, "form-control", 3, "status"], ["label", "Email", "min", "1", "max", "120", 3, "showPattern", "showRequired"], ["for", "inputLogin", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "inputLogin", "formControlName", "login", "placeholder", "Login", 1, "form-control", 3, "status"], ["label", "Login", "minLength", "6", "maxLength", "20", 3, "showMinLength", "showMaxLength", "showRequired"], [1, "row"], [1, "col-sm"], ["for", "isActive", 1, "label"], ["id", "isActive", "selected", "1", "formControlName", "isActive", "fullWidth", ""], [3, "value"], ["placeholder", "", "placeholder", "Seleccione Acceso", "fullWidth", "", 3, "selected", "selectedChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "nav", "justify-content-center"], ["nbButton", "", "nbStepperNext", "", "outline", "", "status", "primary"], ["label", "Roles", 3, "stepControl"], [1, "step-container", 3, "formGroup", "ngSubmit"], ["multi", ""], [3, "expanded"], [1, "col-6"], [1, "col-6", "text-center"], ["status", "primary", "formControlName", "logoempresa", 1, "p-2", 3, "checked"], ["status", "primary", "formControlName", "changepassword", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "thirdparties", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "typeslistbyquery", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "procurator", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "users", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "access", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "setting", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "sentto", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "monitoring", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "individual", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "massive", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "type", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "manager", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "historyreport", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "getlog", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "queriesandmatches", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "coincidencedetailing", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "viewpastconsultations", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "certificationlistupdates", 1, "p-2", 3, "checked"], ["status", "primary", "formControlName", "parameterscategory", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "news", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "roi", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "faqs", 1, "p-2", 3, "checked", "checkedChange"], ["status", "primary", "formControlName", "signal", 1, "p-2", 3, "checked", "checkedChange"], ["nbButton", "", "status", "danger", "hero", "", 3, "disabled", "click"], [1, "nav", "justify-content-center", "pt-2"], ["nbButton", "", "nbStepperPrevious", "", 1, "mr-2"], ["nbButton", "", "status", "primary", "hero", "", 3, "disabled", "click"], [1, "error-message", "caption", "status-danger"], [3, "value", "click"]],
        template: function UserManagementFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserManagementFormComponent_Template_a_click_4_listener($event) {
              return ctx.back($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "nb-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "nb-stepper", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "nb-step", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Nombres");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "ngx-validation-message", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Apellidos");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "ngx-validation-message", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "N\xFAmero Documento");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "ngx-validation-message", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, UserManagementFormComponent_p_31_Template, 2, 1, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Correo Electr\xF3nico");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "ngx-validation-message", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, UserManagementFormComponent_p_37_Template, 2, 1, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Usuario");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "ngx-validation-message", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, UserManagementFormComponent_p_44_Template, 2, 1, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Estado");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "nb-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "nb-option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Activo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "nb-option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Inactivo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Tipo Acceso");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "nb-select", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedChange", function UserManagementFormComponent_Template_nb_select_selectedChange_58_listener($event) {
              return ctx.editAdd = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, UserManagementFormComponent_nb_option_59_Template, 2, 2, "nb-option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Siguiente");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "nb-step", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "form", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UserManagementFormComponent_Template_form_ngSubmit_64_listener() {
              return ctx.onSecondSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "nb-accordion", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "nb-accordion-item", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, " Configuracion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Logo Empresa");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "nb-toggle", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Cambiar contrase\xF1a");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "nb-toggle", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_80_listener($event) {
              return ctx.secondForm["changepassword"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "nb-accordion-item", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, " Administracion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Tipo Terceros");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "nb-toggle", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_90_listener($event) {
              return ctx.secondForm["thirdparties"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Tipos Lista por Consulta");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "nb-toggle", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_95_listener($event) {
              return ctx.secondForm["typeslistbyquery"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, "Procuraduria");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "nb-toggle", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_100_listener($event) {
              return ctx.secondForm["procurator"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "Usuarios");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "nb-toggle", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_105_listener($event) {
              return ctx.secondForm["users"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, "Accesos");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "nb-toggle", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_110_listener($event) {
              return ctx.secondForm["access"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "nb-accordion-item", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, " Notificaciones ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, "Configuraci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "nb-toggle", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_120_listener($event) {
              return ctx.secondForm["setting"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](123, "Enviadas");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](125, "nb-toggle", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_125_listener($event) {
              return ctx.secondForm["sentto"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](128, "Monitoreo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "nb-toggle", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_130_listener($event) {
              return ctx.secondForm["monitoring"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "nb-accordion-item", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, " Consultas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](138, "Individual");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](139, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "nb-toggle", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_140_listener($event) {
              return ctx.secondForm["individual"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](143, "Masiva");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "nb-toggle", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_145_listener($event) {
              return ctx.secondForm["massive"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "nb-accordion-item", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](148, " Listas Propias ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](149, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](151, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](153, "Tipo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "nb-toggle", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_155_listener($event) {
              return ctx.secondForm["type"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](158, "Administrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](159, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "nb-toggle", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_160_listener($event) {
              return ctx.secondForm["manager"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](161, "nb-accordion-item", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, " Reportes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](165, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](168, "Consulta Reporte Historico");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](169, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "nb-toggle", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_170_listener($event) {
              return ctx.secondForm["historyreport"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](171, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](173, "Consultar Log");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](174, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](175, "nb-toggle", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_175_listener($event) {
              return ctx.secondForm["getlog"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](176, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](177, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](178, "Consultas y Coincidencias");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](179, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](180, "nb-toggle", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_180_listener($event) {
              return ctx.secondForm["queriesandmatches"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](182, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, "Detallado de Coincidencias");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](185, "nb-toggle", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_185_listener($event) {
              return ctx.secondForm["coincidencedetailing"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](187, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](188, "Ver Consultas Realizadas");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](190, "nb-toggle", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_190_listener($event) {
              return ctx.secondForm["viewpastconsultations"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](191, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](192, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](193, "Certificaci\xF3n Actualizacion Listas");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](195, "nb-toggle", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](196, "nb-accordion-item", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](197, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](198, " Perfilamiento de Terceros ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](199, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](200, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](201, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](202, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](203, "Parametrizar variables y categor\xEDas");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](204, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](205, "nb-toggle", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_205_listener($event) {
              return ctx.secondForm["parameterscategory"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](206, "nb-accordion-item", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](207, "nb-accordion-item-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](208, " Extras ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](209, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](210, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](211, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](212, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](213, "Noticias");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](214, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](215, "nb-toggle", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_215_listener($event) {
              return ctx.secondForm["news"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](216, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](217, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](218, "Registrar ROI/Denuncia");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](219, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](220, "nb-toggle", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_220_listener($event) {
              return ctx.secondForm["roi"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](221, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](222, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](223, "FAQs");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](224, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](225, "nb-toggle", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_225_listener($event) {
              return ctx.secondForm["faqs"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](226, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](227, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](228, "Se\xF1ales de alerta");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](229, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](230, "nb-toggle", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkedChange", function UserManagementFormComponent_Template_nb_toggle_checkedChange_230_listener($event) {
              return ctx.secondForm["signal"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](231, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](232, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](233, "Reiniciar Contrase\xF1a");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](234, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](235, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserManagementFormComponent_Template_button_click_235_listener() {
              return ctx.ResetPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](236, "Reiniciar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](237, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](238, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](239, "Anterior");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](240, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserManagementFormComponent_Template_button_click_240_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](241, "Guardar");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](242, "nb-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.headerTitle, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", (ctx.name == null ? null : ctx.name.hasError("minlength")) || (ctx.name == null ? null : ctx.name.hasError("maxlength")) ? "danger" : "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showMinLength", ctx.name == null ? null : ctx.name.hasError("minlength"))("showMaxLength", ctx.name == null ? null : ctx.name.hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", (ctx.lastName == null ? null : ctx.lastName.hasError("minlength")) || (ctx.lastName == null ? null : ctx.lastName.hasError("maxlength")) ? "danger" : "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showMinLength", ctx.lastName == null ? null : ctx.lastName.hasError("minlength"))("showMaxLength", ctx.lastName == null ? null : ctx.lastName.hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", (ctx.identification == null ? null : ctx.identification.hasError("minlength")) || (ctx.identification == null ? null : ctx.identification.hasError("maxlength")) ? "danger" : "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showMinLength", ctx.identification == null ? null : ctx.identification.hasError("minlength"))("showMaxLength", ctx.identification == null ? null : ctx.identification.hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.identificationError);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ((ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.required) || (ctx.email == null ? null : ctx.email.hasError("pattern"))) && ctx.email.touched ? "danger" : "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showPattern", (ctx.email == null ? null : ctx.email.hasError("pattern")) && ctx.email.touched)("showRequired", (ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.required) && ctx.email.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.emailError);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ((ctx.login == null ? null : ctx.login.errors == null ? null : ctx.login.errors.required) || (ctx.login == null ? null : ctx.login.hasError("minlength")) || (ctx.login == null ? null : ctx.login.hasError("maxlength"))) && ctx.login.touched ? "danger" : "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showMinLength", ctx.login == null ? null : ctx.login.hasError("minlength"))("showMaxLength", ctx.login == null ? null : ctx.login.hasError("maxlength"))("showRequired", (ctx.login == null ? null : ctx.login.errors == null ? null : ctx.login.errors.required) && ctx.login.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginError);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selected", ctx.editAdd);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.accessrol);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.secondForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.secondForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["logoempresa"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["changepassword"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["thirdparties"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["typeslistbyquery"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["procurator"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["users"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["access"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["setting"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["sentto"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["monitoring"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["individual"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["massive"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["type"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["manager"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["historyreport"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["getlog"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["queriesandmatches"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["coincidencedetailing"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["viewpastconsultations"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["certificationlistupdates"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["parameterscategory"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("expanded", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["news"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["roi"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["faqs"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.secondForm["signal"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.BtnResetPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.userForm.valid);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__["NgxValidationMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperNextDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionItemBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToggleComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperPreviousDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardFooterComponent"]],
        styles: [".navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n}\n.navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  vertical-align: middle;\n}\n.links[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVzZXItbWFuYWdlbWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUdBO0VBQ0UsaUJBQUE7QUFBRiIsImZpbGUiOiJ1c2VyLW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uIC5saW5rIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICBuYi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlua3MgbmItaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbn1cclxuIl19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=management-management-module-es5.js.map