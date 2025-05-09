(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"], {
    /***/
    "3tUw":
    /*!************************************************************************!*\
      !*** ./src/app/pages/setting/backend/common/api/users-password.api.ts ***!
      \************************************************************************/

    /*! exports provided: UsersPasswordApi */

    /***/
    function tUw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPasswordApi", function () {
        return UsersPasswordApi;
      });
      /* harmony import */


      var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../@core/backend/common/api/http.service */
      "sZbP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UsersPasswordApi = /*#__PURE__*/function () {
        function UsersPasswordApi(api) {
          _classCallCheck(this, UsersPasswordApi);

          this.api = api;
          this.apiController = 'password/update';
        }

        _createClass(UsersPasswordApi, [{
          key: "update",
          value: function update(data) {
            return this.api.put("".concat(this.apiController), data);
          }
        }]);

        return UsersPasswordApi;
      }();

      UsersPasswordApi.ɵfac = function UsersPasswordApi_Factory(t) {
        return new (t || UsersPasswordApi)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]));
      };

      UsersPasswordApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UsersPasswordApi,
        factory: UsersPasswordApi.ɵfac
      });
      /***/
    },

    /***/
    "5Rpy":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/setting/backend/common/services/company.service.ts ***!
      \**************************************************************************/

    /*! exports provided: CompanyService */

    /***/
    function Rpy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
        return CompanyService;
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

      var CompanyService = /*#__PURE__*/function () {
        function CompanyService(_httpClient) {
          _classCallCheck(this, CompanyService);

          this._httpClient = _httpClient;
        }

        _createClass(CompanyService, [{
          key: "getCompanyLogo",
          value: function getCompanyLogo() {
            return this._httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/Company/GetCompany"));
          }
        }, {
          key: "updateCompany",
          value: function updateCompany(companyDTO) {
            return this._httpClient.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/Company/UpdateCompany"), companyDTO);
          }
        }]);

        return CompanyService;
      }();

      CompanyService.ɵfac = function CompanyService_Factory(t) {
        return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: CompanyService,
        factory: CompanyService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "F03B":
    /*!****************************************************!*\
      !*** ./src/app/pages/setting/models/companyDTO.ts ***!
      \****************************************************/

    /*! exports provided: CompanyDTO */

    /***/
    function F03B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyDTO", function () {
        return CompanyDTO;
      });

      var CompanyDTO = /*#__PURE__*/_createClass(function CompanyDTO() {
        _classCallCheck(this, CompanyDTO);

        this.id = 0;
        this.name = ' ';
        this.identification = ' ';
        this.status = false;
        this.autoRenewal = false;
        this.image = ' ';
        this.contractDate = ' ';
      });
      /***/

    },

    /***/
    "H+hM":
    /*!****************************************************!*\
      !*** ./src/app/pages/setting/setting.component.ts ***!
      \****************************************************/

    /*! exports provided: SettingComponent */

    /***/
    function HHM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingComponent", function () {
        return SettingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SettingComponent = /*#__PURE__*/function () {
        function SettingComponent() {
          _classCallCheck(this, SettingComponent);
        }

        _createClass(SettingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SettingComponent;
      }();

      SettingComponent.ɵfac = function SettingComponent_Factory(t) {
        return new (t || SettingComponent)();
      };

      SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingComponent,
        selectors: [["ngx-Setting"]],
        decls: 1,
        vars: 0,
        template: function SettingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "LxRW":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/setting/backend/common/services/users-password.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: UsersPasswordService */

    /***/
    function LxRW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersPasswordService", function () {
        return UsersPasswordService;
      });
      /* harmony import */


      var _api_users_password_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../api/users-password.api */
      "3tUw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UsersPasswordService = /*#__PURE__*/function () {
        function UsersPasswordService(api) {
          _classCallCheck(this, UsersPasswordService);

          this.api = api;
        }

        _createClass(UsersPasswordService, [{
          key: "update",
          value: function update(data) {
            return this.api.update(data);
          }
        }]);

        return UsersPasswordService;
      }();

      UsersPasswordService.ɵfac = function UsersPasswordService_Factory(t) {
        return new (t || UsersPasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_users_password_api__WEBPACK_IMPORTED_MODULE_0__["UsersPasswordApi"]));
      };

      UsersPasswordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UsersPasswordService,
        factory: UsersPasswordService.ɵfac
      });
      /***/
    },

    /***/
    "SM5h":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/setting/components/companylogo/companylogo.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: CompanylogoComponent */

    /***/
    function SM5h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanylogoComponent", function () {
        return CompanylogoComponent;
      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _backend_common_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../backend/common/services/company.service */
      "5Rpy");
      /* harmony import */


      var _models_companyDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/companyDTO */
      "F03B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-file-drop */
      "gfTr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function CompanylogoComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Deslice la imagen a subir ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompanylogoComponent_ng_template_7_Template_button_click_4_listener() {
            var openFileSelector_r3 = ctx.openFileSelector;
            return openFileSelector_r3();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Cargar Imagen ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function CompanylogoComponent_div_9_img_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("srcChange", function CompanylogoComponent_div_9_img_1_Template_img_srcChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r6.imageSrc = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r5.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      function CompanylogoComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CompanylogoComponent_div_9_img_1_Template, 1, 1, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.imageSrc);
        }
      }

      function CompanylogoComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompanylogoComponent_div_10_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.UploadFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CompanylogoComponent_div_10_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.DeleteFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Eliminar");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", ctx_r2.success);
        }
      }

      var CompanylogoComponent = /*#__PURE__*/function () {
        //#endregion
        function CompanylogoComponent(_companyService, toastrService) {
          _classCallCheck(this, CompanylogoComponent);

          this._companyService = _companyService;
          this.toastrService = toastrService;
          this.isvisible = true;
          this.files = [];
          this.idempresa = "";
          this.companyDTO = new _models_companyDTO__WEBPACK_IMPORTED_MODULE_2__["CompanyDTO"]();
          this.index = 1;
          this.destroyByClick = true;
          this.duration = 2000;
          this.hasIcon = true;
          this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].TOP_RIGHT;
          this.preventDuplicates = false;
          this.status = 'primary';
          this.title = 'HI there!';
          this.content = "I'm cool toaster!";
          this.types = ['primary', 'success', 'info', 'warning', 'danger'];
          this.positions = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].TOP_RIGHT, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].TOP_LEFT, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].BOTTOM_LEFT, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalPhysicalPosition"].BOTTOM_RIGHT, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].TOP_END, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].TOP_START, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].BOTTOM_END, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbGlobalLogicalPosition"].BOTTOM_START];
          this.quotes = [{
            title: null,
            body: 'We rock at Angular'
          }, {
            title: null,
            body: 'Titles are not always needed'
          }, {
            title: null,
            body: 'Toastr rock!'
          }];
        }

        _createClass(CompanylogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.getCompanyLogo();
          } //#region Metodos privados
          //Todo : Muestra toast segun mensaje

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
            this.toastrService.show(body, "", config);
          }
        }, {
          key: "DeleteFile",
          value: function DeleteFile() {
            this.companyDTO.image = null;
            this.updateCompany(this.companyDTO);
            this.ngOnInit();
          }
        }, {
          key: "UploadFile",
          value: function UploadFile() {
            if (this.imageSrc === "https://icon-library.com/images/not-found-icon/not-found-icon-6.jpg") {
              this.companyDTO.image = null;
              this.updateCompany(this.companyDTO);
            } else {
              this.companyDTO.image = this.imageSrc;
              this.updateCompany(this.companyDTO);
            }
          } //#endregion
          //#region  Metodo Firedrop

        }, {
          key: "dropped",
          value: function dropped(files) {
            var _this = this;

            var _iterator = _createForOfIteratorHelper(files),
                _step;

            try {
              var _loop = function _loop() {
                var droppedFile = _step.value;

                // Is it a file?
                if (droppedFile.fileEntry.isFile) {
                  var fileEntry = droppedFile.fileEntry;
                  var reader = new FileReader();
                  fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    reader.readAsDataURL(file);

                    reader.onload = function () {
                      _this.imageSrc = reader.result;
                      _this.companyDTO.image = _this.imageSrc;
                    };
                  });
                } else {
                  // It was a directory (empty directories are added, otherwise only files)
                  var _fileEntry = droppedFile.fileEntry;
                  console.log(droppedFile.relativePath, _fileEntry);
                }
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "fileOver",
          value: function fileOver(event) {
            console.log(event);
          }
        }, {
          key: "fileLeave",
          value: function fileLeave(event) {
            console.log(event);
          } //#endregion
          //#region Servicios
          //#region Get

        }, {
          key: "getCompanyLogo",
          value: function getCompanyLogo() {
            var _this2 = this;

            this._companyService.getCompanyLogo().subscribe(function (response) {
              response.image || response.image != null ? _this2.imageSrc = response.image : _this2.imageSrc = "https://icon-library.com/images/not-found-icon/not-found-icon-6.jpg";
              _this2.companyDTO = response;
            });
          } //endregion
          //#region Post

        }, {
          key: "updateCompany",
          value: function updateCompany(companyDTO) {
            var _this3 = this;

            this._companyService.updateCompany(companyDTO).subscribe(function (res) {
              _this3.getCompanyLogo();

              if (companyDTO.image != null) {
                _this3.showToast("success", null, "Logo guardado con exito");
              } else {
                _this3.showToast("success", null, "El logo se ha eliminado");
              }
            });
          }
        }]);

        return CompanylogoComponent;
      }();

      CompanylogoComponent.ɵfac = function CompanylogoComponent_Factory(t) {
        return new (t || CompanylogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_backend_common_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]));
      };

      CompanylogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CompanylogoComponent,
        selectors: [["ngx-companylogo"]],
        decls: 11,
        vars: 5,
        consts: [["accent", "info"], [1, "center"], ["dropZoneLabel", "Drop files here", 3, "onFileDrop", "onFileOver", "onFileLeave"], ["ngx-file-drop-content-tmp", ""], ["class", "d-flex justify-content-center p-3", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "row"], [1, "col"], [1, "col", "pt-2", "align-self-center"], ["nbButton", "", "outline", "", "status", "primary", "outline", "", 3, "click"], [1, "d-flex", "justify-content-center", "p-3"], ["style", "height: 300px; width:500px", "class", "pb-2", 3, "src", "srcChange", 4, "ngIf"], [1, "pb-2", 2, "height", "300px", "width", "500px", 3, "src", "srcChange"], [1, "d-flex", "justify-content-center"], ["nbButton", "", "outline", "", 1, "status-success", "align-self-center", 3, "status", "click"], ["nbButton", "", "outline", "", "status", "danger", 1, "m-2", 3, "click"]],
        template: function CompanylogoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngx-file-drop", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onFileDrop", function CompanylogoComponent_Template_ngx_file_drop_onFileDrop_6_listener($event) {
              return ctx.dropped($event);
            })("onFileOver", function CompanylogoComponent_Template_ngx_file_drop_onFileOver_6_listener($event) {
              return ctx.fileOver($event);
            })("onFileLeave", function CompanylogoComponent_Template_ngx_file_drop_onFileLeave_6_listener($event) {
              return ctx.fileLeave($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CompanylogoComponent_ng_template_7_Template, 6, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CompanylogoComponent_div_9_Template, 3, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CompanylogoComponent_div_10_Template, 5, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, "SettingModule.logo"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.imageSrc);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.imageSrc);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardBodyComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__["NgxFileDropComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__["NgxFileDropContentTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55bG9nby5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "hBK9":
    /*!*************************************************!*\
      !*** ./src/app/pages/setting/setting.module.ts ***!
      \*************************************************/

    /*! exports provided: SettingModule */

    /***/
    function hBK9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingModule", function () {
        return SettingModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./setting.component */
      "H+hM");
      /* harmony import */


      var _setting_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./setting-routing.module */
      "zhNF");
      /* harmony import */


      var _components_companylogo_companylogo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/companylogo/companylogo.component */
      "SM5h");
      /* harmony import */


      var _components_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/password-change/password-change.component */
      "zOIk");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      "vTDv");
      /* harmony import */


      var _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../tables/tables-routing.module */
      "Qy2A");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../@components/components.module */
      "h+2I");
      /* harmony import */


      var _backend_common_services_users_password_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./backend/common/services/users-password.service */
      "LxRW");
      /* harmony import */


      var _backend_common_api_users_password_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./backend/common/api/users-password.api */
      "3tUw");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_editors_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../@components/editors/file-uploader/file-uploader.module */
      "Gdc+");
      /* harmony import */


      var _management_components_manageprocuracy_manageprocuracy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../management/components/manageprocuracy/manageprocuracy.component */
      "nVyZ");
      /* harmony import */


      var ngx_file_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-file-drop */
      "gfTr");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import { AdduserComponent } from './components/adduser/adduser.component';
      // import { GetuserComponent } from './components/getuser/getuser.component';
      // import { ThirdpartymanageComponent } from './components/thirdpartymanage/thirdpartymanage.component';
      // import { CompanytypelistComponent } from './components/companytypelist/companytypelist.component';
      // import { ManageprocuracyComponent } from './components/manageprocuracy/manageprocuracy.component';


      var components = [_setting_component__WEBPACK_IMPORTED_MODULE_1__["SettingComponent"], // AdduserComponent,
      // GetuserComponent,   
      _management_components_manageprocuracy_manageprocuracy_component__WEBPACK_IMPORTED_MODULE_14__["ManageprocuracyComponent"], _components_companylogo_companylogo_component__WEBPACK_IMPORTED_MODULE_3__["CompanylogoComponent"], _components_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_4__["PasswordChangeComponent"]];

      var SettingModule = /*#__PURE__*/_createClass(function SettingModule() {
        _classCallCheck(this, SettingModule);
      });

      SettingModule.ɵfac = function SettingModule_Factory(t) {
        return new (t || SettingModule)();
      };

      SettingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: SettingModule
      });
      SettingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        providers: [_backend_common_api_users_password_api__WEBPACK_IMPORTED_MODULE_11__["UsersPasswordApi"], _backend_common_services_users_password_service__WEBPACK_IMPORTED_MODULE_10__["UsersPasswordService"]],
        imports: [[_setting_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"], _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_7__["TablesRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionModule"], _components_editors_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_13__["NbFileUploaderModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_15__["NgxFileDropModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAlertModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](SettingModule, {
          declarations: [_management_components_manageprocuracy_manageprocuracy_component__WEBPACK_IMPORTED_MODULE_14__["ManageprocuracyComponent"], _components_companylogo_companylogo_component__WEBPACK_IMPORTED_MODULE_3__["CompanylogoComponent"], _setting_component__WEBPACK_IMPORTED_MODULE_1__["SettingComponent"], _components_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_4__["PasswordChangeComponent"], _setting_component__WEBPACK_IMPORTED_MODULE_1__["SettingComponent"], // AdduserComponent,
          // GetuserComponent,   
          _management_components_manageprocuracy_manageprocuracy_component__WEBPACK_IMPORTED_MODULE_14__["ManageprocuracyComponent"], _components_companylogo_companylogo_component__WEBPACK_IMPORTED_MODULE_3__["CompanylogoComponent"], _components_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_4__["PasswordChangeComponent"]],
          imports: [_setting_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTreeGridModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"], _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_7__["TablesRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionModule"], _components_editors_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_13__["NbFileUploaderModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_15__["NgxFileDropModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAlertModule"]]
        });
      })();
      /***/

    },

    /***/
    "zOIk":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/setting/components/password-change/password-change.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: PasswordChangeComponent */

    /***/
    function zOIk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordChangeComponent", function () {
        return PasswordChangeComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _backend_common_services_users_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../backend/common/services/users-password.service */
      "LxRW");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _auth_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../@auth/helpers */
      "bFD5");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _core_interfaces_common_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../@core/interfaces/common/users */
      "2NI8");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/Subject */
      "8yf6");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../@components/validation-message/validation-message.component */
      "6edl");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function PasswordChangeComponent_nb_card_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-card-body", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "nb-alert", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\xA1Advertencia! Para continuar debe actualizar su contrase\xF1a.");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function PasswordChangeComponent_p_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Contrase\xF1a incorrecta. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function PasswordChangeComponent_p_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \xA1La contrase\xF1a y la contrase\xF1a de confirmaci\xF3n no coinciden! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      var PasswordChangeComponent = /*#__PURE__*/function () {
        function PasswordChangeComponent() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var fb = arguments.length > 1 ? arguments[1] : undefined;
          var usersPasswordService = arguments.length > 2 ? arguments[2] : undefined;
          var toastrService = arguments.length > 3 ? arguments[3] : undefined;
          var userData = arguments.length > 4 ? arguments[4] : undefined;
          var location = arguments.length > 5 ? arguments[5] : undefined;

          _classCallCheck(this, PasswordChangeComponent);

          this.options = options;
          this.fb = fb;
          this.usersPasswordService = usersPasswordService;
          this.toastrService = toastrService;
          this.userData = userData;
          this.location = location;
          this.unsubscribe$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this.minLength = this.getConfigValue('forms.validation.password.minLength');
          this.maxLength = this.getConfigValue('forms.validation.password.maxLength');
          this.submitted = false;
          this.hasPasswordError = false;
          this.hasPasswordReset = false;
        }

        _createClass(PasswordChangeComponent, [{
          key: "currentPassword",
          get: function get() {
            return this.passwordForm.get('currentPassword');
          }
        }, {
          key: "newPassword",
          get: function get() {
            return this.passwordForm.get('newPassword');
          }
        }, {
          key: "confirmPassword",
          get: function get() {
            return this.passwordForm.get('confirmPassword');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initPasswordForm();
            this.getCurrentUser();
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            var _this4 = this;

            this.userData.refreshInfoCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(function (user) {
              console.log();
              _this4.hasPasswordReset = user.hasResetPassword;
              console.log("hasPasswordReset", _this4.hasPasswordReset);
            });
          }
        }, {
          key: "initPasswordForm",
          value: function initPasswordForm() {
            var passwordValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(this.minLength), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(this.maxLength)];
            this.passwordForm = this.fb.group({
              currentPassword: this.fb.control('', [].concat(passwordValidators)),
              newPassword: this.fb.control('', [].concat(passwordValidators)),
              confirmPassword: this.fb.control('', [].concat(passwordValidators))
            });
          }
        }, {
          key: "updatePassword",
          value: function updatePassword() {
            var _this5 = this;

            this.submitted = true;
            this.hasPasswordError = false;
            var password = this.passwordForm.value;
            this.usersPasswordService.update(password).subscribe(function () {
              _this5.getCurrentUser();

              _this5.submitted = false;

              _this5.passwordForm.reset();

              _this5.toastrService.success('', '¡Registro exitoso!', {
                icon: ''
              });
            }, function () {
              _this5.submitted = false;
              _this5.hasPasswordError = true;
            });
          }
        }, {
          key: "getConfigValue",
          value: function getConfigValue(key) {
            return Object(_auth_helpers__WEBPACK_IMPORTED_MODULE_4__["getDeepFromObject"])(this.options, key, null);
          }
        }, {
          key: "back",
          value: function back($event) {
            $event.preventDefault();
            this.location.back();
          }
        }]);

        return PasswordChangeComponent;
      }();

      PasswordChangeComponent.ɵfac = function PasswordChangeComponent_Factory(t) {
        return new (t || PasswordChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_backend_common_services_users_password_service__WEBPACK_IMPORTED_MODULE_2__["UsersPasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_interfaces_common_users__WEBPACK_IMPORTED_MODULE_6__["UserData"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
      };

      PasswordChangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: PasswordChangeComponent,
        selectors: [["ngx-password-change"]],
        decls: 31,
        vars: 25,
        consts: [[1, "col-lg-12"], [4, "ngIf"], [1, "navigation"], ["href", "#", "aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"], [3, "formGroup"], [1, "form-group"], ["for", "currentPassword", 1, "label"], ["fullWidth", "", "nbInput", "", "autofocus", "", "id", "currentPassword", "formControlName", "currentPassword", "type", "password", "placeholder", "Contrase\xF1a actual", 1, "first"], ["label", "Password", 3, "showMinLength", "showMaxLength", "showRequired", "minLength", "maxLength"], ["class", "error-message caption status-danger", 4, "ngIf"], ["for", "newPassword", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "newPassword", "formControlName", "newPassword", "type", "password", "placeholder", "Nueva contrase\xF1a"], ["for", "confirmPassword", 1, "label"], ["fullWidth", "", "nbInput", "", "id", "confirmPassword", "formControlName", "confirmPassword", "type", "password", "placeholder", "Confirmar contrase\xF1a"], ["label", "Confirmar contrase\xF1a", 3, "showMinLength", "showMaxLength", "showRequired", "minLength", "maxLength"], ["nbButton", "", "status", "primary", "fullWidth", "", 3, "disabled", "click"], [1, "example-last-child-no-b-margin"], ["status", "warning"], [1, "error-message", "caption", "status-danger"]],
        template: function PasswordChangeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PasswordChangeComponent_nb_card_1_Template, 4, 0, "nb-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PasswordChangeComponent_Template_a_click_5_listener($event) {
              return ctx.back($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "nb-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Contrase\xF1a actual");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "ngx-validation-message", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, PasswordChangeComponent_p_16_Template, 2, 0, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Contrase\xF1a nueva");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "ngx-validation-message", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Confirmar contrase\xF1a");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "ngx-validation-message", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, PasswordChangeComponent_p_27_Template, 2, 0, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "nb-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PasswordChangeComponent_Template_button_click_29_listener() {
              return ctx.updatePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, " Guardar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasPasswordReset);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 23, "SettingModule.Cambiar_Contrasena"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.passwordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showMinLength", (ctx.currentPassword == null ? null : ctx.currentPassword.hasError("minlength")) && ctx.currentPassword.touched)("showMaxLength", (ctx.currentPassword == null ? null : ctx.currentPassword.hasError("maxlength")) && ctx.currentPassword.touched)("showRequired", (ctx.currentPassword == null ? null : ctx.currentPassword.errors == null ? null : ctx.currentPassword.errors.required) && ctx.currentPassword.touched)("minLength", ctx.minLength)("maxLength", ctx.maxLength);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasPasswordError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showMinLength", (ctx.newPassword == null ? null : ctx.newPassword.hasError("minlength")) && ctx.newPassword.touched)("showMaxLength", (ctx.newPassword == null ? null : ctx.newPassword.hasError("maxlength")) && ctx.newPassword.touched)("showRequired", (ctx.newPassword == null ? null : ctx.newPassword.errors == null ? null : ctx.newPassword.errors.required) && ctx.newPassword.touched)("minLength", ctx.minLength)("maxLength", ctx.maxLength);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showMinLength", (ctx.confirmPassword == null ? null : ctx.confirmPassword.hasError("minlength")) && ctx.confirmPassword.touched)("showMaxLength", (ctx.confirmPassword == null ? null : ctx.confirmPassword.hasError("maxlength")) && ctx.confirmPassword.touched)("showRequired", (ctx.confirmPassword == null ? null : ctx.confirmPassword.errors == null ? null : ctx.confirmPassword.errors.required) && ctx.confirmPassword.touched)("minLength", ctx.minLength)("maxLength", ctx.maxLength);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.newPassword.value != ctx.confirmPassword.value && ctx.confirmPassword.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("btn-pulse", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.submitted || !ctx.passwordForm.valid || ctx.newPassword.value != ctx.confirmPassword.value);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _components_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_10__["NgxValidationMessageComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAlertComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: [".navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n}\n.navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  vertical-align: middle;\n}\n.links[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBhc3N3b3JkLWNoYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFHQTtFQUNFLGlCQUFBO0FBQUYiLCJmaWxlIjoicGFzc3dvcmQtY2hhbmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24gLmxpbmsge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gIG5iLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbi5saW5rcyBuYi1pY29uIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "zhNF":
    /*!*********************************************************!*\
      !*** ./src/app/pages/setting/setting-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SettingRoutingModule, routedComponents */

    /***/
    function zhNF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function () {
        return SettingRoutingModule;
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


      var _management_components_manageprocuracy_manageprocuracy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../management/components/manageprocuracy/manageprocuracy.component */
      "nVyZ");
      /* harmony import */


      var _setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./setting.component */
      "H+hM");
      /* harmony import */


      var _components_companylogo_companylogo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/companylogo/companylogo.component */
      "SM5h");
      /* harmony import */


      var _components_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/password-change/password-change.component */
      "zOIk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _setting_component__WEBPACK_IMPORTED_MODULE_2__["SettingComponent"],
        children: [{
          path: 'companylogo',
          component: _components_companylogo_companylogo_component__WEBPACK_IMPORTED_MODULE_3__["CompanylogoComponent"]
        }, {
          path: 'companylogo',
          component: _components_companylogo_companylogo_component__WEBPACK_IMPORTED_MODULE_3__["CompanylogoComponent"]
        }, {
          path: 'password-change',
          component: _components_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_4__["PasswordChangeComponent"]
        }]
      }];

      var SettingRoutingModule = /*#__PURE__*/_createClass(function SettingRoutingModule() {
        _classCallCheck(this, SettingRoutingModule);
      });

      SettingRoutingModule.ɵfac = function SettingRoutingModule_Factory(t) {
        return new (t || SettingRoutingModule)();
      };

      SettingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: SettingRoutingModule
      });
      SettingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();

      var routedComponents = [_management_components_manageprocuracy_manageprocuracy_component__WEBPACK_IMPORTED_MODULE_1__["ManageprocuracyComponent"], _components_companylogo_companylogo_component__WEBPACK_IMPORTED_MODULE_3__["CompanylogoComponent"], _setting_component__WEBPACK_IMPORTED_MODULE_2__["SettingComponent"], _components_password_change_password_change_component__WEBPACK_IMPORTED_MODULE_4__["PasswordChangeComponent"]];
      /***/
    }
  }]);
})();
//# sourceMappingURL=setting-setting-module-es5.js.map