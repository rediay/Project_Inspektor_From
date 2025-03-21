(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~own-lists-own-lists-module~queries-queries-module~setting-setting-module"], {
    /***/
    "4Y1K":
    /*!**********************************************************************************!*\
      !*** ./src/app/@components/editors/file-uploader/upload-queue-item.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: NbUploadQueueItemComponent */

    /***/
    function Y1K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NbUploadQueueItemComponent", function () {
        return NbUploadQueueItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");

      var NbUploadQueueItemComponent = /*#__PURE__*/function () {
        function NbUploadQueueItemComponent() {
          _classCallCheck(this, NbUploadQueueItemComponent);
        }

        _createClass(NbUploadQueueItemComponent, [{
          key: "status",
          get: function get() {
            if (this.item.progress <= 25) {
              return 'danger';
            }

            if (this.item.progress <= 50) {
              return 'warning';
            }

            if (this.item.progress <= 75) {
              return 'info';
            }

            return 'success';
          }
        }]);

        return NbUploadQueueItemComponent;
      }();

      NbUploadQueueItemComponent.ɵfac = function NbUploadQueueItemComponent_Factory(t) {
        return new (t || NbUploadQueueItemComponent)();
      };

      NbUploadQueueItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NbUploadQueueItemComponent,
        selectors: [["nb-upload-queue-item"]],
        inputs: {
          item: "item"
        },
        decls: 6,
        vars: 4,
        consts: [[1, "file-item-caption"], [1, "file-progress"], [3, "value", "status"]],
        template: function NbUploadQueueItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-progress-bar", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.progress + "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.item.progress)("status", ctx.status);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbProgressBarComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .file-item-caption[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.25rem;\n}\n[_nghost-%COMP%]   .file-progress[_ngcontent-%COMP%] {\n  color: gray;\n}\n[_nghost-%COMP%]   .file-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 0.25rem;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-container {\n  height: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXBsb2FkLXF1ZXVlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7QUFBSjtBQUdFO0VBQ0Usc0JBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtBQUZKIiwiZmlsZSI6InVwbG9hZC1xdWV1ZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcblxyXG4gIC5maWxlLWl0ZW0tY2FwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICB9XHJcblxyXG4gIC5maWxlLXByb2dyZXNzIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIH1cclxuXHJcbiAgLmZpbGUtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgbmItcHJvZ3Jlc3MtYmFyIC5wcm9ncmVzcy1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAwLjI1cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "C4FO":
    /*!****************************************************************************!*\
      !*** ./src/app/@components/editors/file-uploader/file-uploader.service.ts ***!
      \****************************************************************************/

    /*! exports provided: NbFileUploaderService */

    /***/
    function C4FO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NbFileUploaderService", function () {
        return NbFileUploaderService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NbFileUploaderService = /*#__PURE__*/function () {
        function NbFileUploaderService() {
          _classCallCheck(this, NbFileUploaderService);

          this.uploadQueue = [];
        }

        _createClass(NbFileUploaderService, [{
          key: "uploadQueue$",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.uploadQueue);
          }
        }, {
          key: "uploadAll",
          value: function uploadAll(files, options) {
            var _this = this;

            if (!files) {
              return;
            }

            this.addToQueue(files);
            files.forEach(function (file) {
              return _this.upload(file, options);
            });
          }
        }, {
          key: "addToQueue",
          value: function addToQueue(files) {
            var _this$uploadQueue;

            (_this$uploadQueue = this.uploadQueue).push.apply(_this$uploadQueue, _toConsumableArray(files));
          }
        }, {
          key: "upload",
          value: function upload(file, options) {
            var sendable = new FormData();
            sendable.append('file', file.rawFile, file.name);
            file.onBeforeUpload();
            var xhr = new XMLHttpRequest();
            xhr.open('post', options.url, true);

            xhr.upload.onprogress = function (event) {
              var percentDone = Math.round(event.lengthComputable ? 100 * event.loaded / event.total : 0);
              file.onProgress(percentDone);
            };

            xhr.onerror = function (event) {
              file.onError();
            };

            xhr.onload = function (event) {
              file.onSuccess();
            };

            if (options.params) {
              Object.entries(options.params).forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                sendable.append(key, value);
              });
            }

            if (options.headers) {
              Object.entries(options.headers).forEach(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    key = _ref4[0],
                    value = _ref4[1];

                xhr.setRequestHeader(key, value);
              });
            }

            xhr.send(sendable);
          }
        }]);

        return NbFileUploaderService;
      }();

      NbFileUploaderService.ɵfac = function NbFileUploaderService_Factory(t) {
        return new (t || NbFileUploaderService)();
      };

      NbFileUploaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: NbFileUploaderService,
        factory: NbFileUploaderService.ɵfac
      });
      /***/
    },

    /***/
    "Gdc+":
    /*!***************************************************************************!*\
      !*** ./src/app/@components/editors/file-uploader/file-uploader.module.ts ***!
      \***************************************************************************/

    /*! exports provided: NbFileUploaderModule */

    /***/
    function Gdc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NbFileUploaderModule", function () {
        return NbFileUploaderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/eva-icons */
      "tR1z");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _file_uploader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./file-uploader.component */
      "Jaxf");
      /* harmony import */


      var _upload_queue_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./upload-queue-item.component */
      "4Y1K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NbFileUploaderModule = /*#__PURE__*/_createClass(function NbFileUploaderModule() {
        _classCallCheck(this, NbFileUploaderModule);
      });

      NbFileUploaderModule.ɵfac = function NbFileUploaderModule_Factory(t) {
        return new (t || NbFileUploaderModule)();
      };

      NbFileUploaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: NbFileUploaderModule
      });
      NbFileUploaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbProgressBarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_2__["NbEvaIconsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NbFileUploaderModule, {
          declarations: [_file_uploader_component__WEBPACK_IMPORTED_MODULE_4__["NbFileUploaderComponent"], _upload_queue_item_component__WEBPACK_IMPORTED_MODULE_5__["NbUploadQueueItemComponent"], _upload_queue_item_component__WEBPACK_IMPORTED_MODULE_5__["NbUploadQueueItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbProgressBarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_2__["NbEvaIconsModule"]],
          exports: [_file_uploader_component__WEBPACK_IMPORTED_MODULE_4__["NbFileUploaderComponent"], _upload_queue_item_component__WEBPACK_IMPORTED_MODULE_5__["NbUploadQueueItemComponent"], _upload_queue_item_component__WEBPACK_IMPORTED_MODULE_5__["NbUploadQueueItemComponent"]]
        });
      })();
      /***/

    },

    /***/
    "Jaxf":
    /*!******************************************************************************!*\
      !*** ./src/app/@components/editors/file-uploader/file-uploader.component.ts ***!
      \******************************************************************************/

    /*! exports provided: NbFileUploaderComponent */

    /***/
    function Jaxf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NbFileUploaderComponent", function () {
        return NbFileUploaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _file_uploader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./file-uploader.service */
      "C4FO");
      /* harmony import */


      var _file_uploader_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./file-uploader.model */
      "VAo9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");

      var _c0 = ["inputEl"];

      function NbFileUploaderComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NbFileUploaderComponent_ng_container_4_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx_r1.accept)("multiple", ctx_r1.options.multiple);
        }
      }

      function NbFileUploaderComponent_nb_upload_queue_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-upload-queue", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r2.uploader.uploadQueue$));
        }
      }

      var NbFileUploaderComponent = /*#__PURE__*/function () {
        function NbFileUploaderComponent(uploader) {
          _classCallCheck(this, NbFileUploaderComponent);

          this.uploader = uploader;
          this.options = {
            multiple: false,
            directory: false,
            showUploadQueue: true
          };
          this.selectFile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(NbFileUploaderComponent, [{
          key: "accept",
          get: function get() {
            return this.options.allowedFileTypes.join(',');
          }
        }, {
          key: "browse",
          value: function browse() {
            this.inputEl.nativeElement.click();
          }
        }, {
          key: "onChange",
          value: function onChange() {
            var files = this.inputEl.nativeElement.files;
            var preparedFiles = this.getPreparedFiles(files);

            if (files.length > 0) {
              this.selectFile.emit(files[0]);
            } //this.uploader.uploadAll(preparedFiles, this.options);

          }
        }, {
          key: "getPreparedFiles",
          value: function getPreparedFiles(files) {
            return Array.from(files).map(function (file) {
              return new _file_uploader_model__WEBPACK_IMPORTED_MODULE_2__["NbFileItem"](file);
            });
          }
        }]);

        return NbFileUploaderComponent;
      }();

      NbFileUploaderComponent.ɵfac = function NbFileUploaderComponent_Factory(t) {
        return new (t || NbFileUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_file_uploader_service__WEBPACK_IMPORTED_MODULE_1__["NbFileUploaderService"]));
      };

      NbFileUploaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NbFileUploaderComponent,
        selectors: [["nb-file-uploader"]],
        viewQuery: function NbFileUploaderComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEl = _t.first);
          }
        },
        inputs: {
          options: "options"
        },
        outputs: {
          selectFile: "selectFile"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_file_uploader_service__WEBPACK_IMPORTED_MODULE_1__["NbFileUploaderService"]])],
        decls: 10,
        vars: 6,
        consts: [[1, "file-uploader"], ["type", "file", 2, "display", "none", 3, "accept", "multiple", "change"], ["inputEl", ""], [4, "ngIf"], ["nbButton", "", "outline", "", "status", "success", 3, "click"], ["icon", "upload-outline"], [3, "items", 4, "ngIf"], ["type", "file", "webkitdirectory", "", 2, "display", "none", 3, "accept", "multiple", "change"], [3, "items"]],
        template: function NbFileUploaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NbFileUploaderComponent_Template_input_change_2_listener() {
              return ctx.onChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NbFileUploaderComponent_ng_container_4_Template, 3, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NbFileUploaderComponent_Template_button_click_5_listener() {
              return ctx.browse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Seleccionar archivo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NbFileUploaderComponent_nb_upload_queue_8_Template, 2, 3, "nb-upload-queue", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx.accept)("multiple", ctx.options.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.directory);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.uploader.uploadQueue$).length && ctx.options.showUploadQueue);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "VAo9":
    /*!**************************************************************************!*\
      !*** ./src/app/@components/editors/file-uploader/file-uploader.model.ts ***!
      \**************************************************************************/

    /*! exports provided: NbFileItem */

    /***/
    function VAo9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NbFileItem", function () {
        return NbFileItem;
      });

      var NbFileItem = /*#__PURE__*/function () {
        function NbFileItem(file) {
          _classCallCheck(this, NbFileItem);

          this.progress = 0;
          this.isUploading = false;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = false;
          this.rawFile = file;
          this.name = file.name;
          this.lastModified = file.lastModified;
          this.size = file.size;
          this.type = file.type;
        }

        _createClass(NbFileItem, [{
          key: "onProgress",
          value: function onProgress(progress) {
            this.progress = progress;
          }
        }, {
          key: "onBeforeUpload",
          value: function onBeforeUpload() {
            this.isUploading = true;
            this.isUploading = false;
            this.isCancel = false;
            this.isError = false;
            this.isSuccess = false;
            this.progress = 0;
          }
        }, {
          key: "onSuccess",
          value: function onSuccess() {
            this.isUploading = false;
            this.isUploaded = true;
            this.isCancel = false;
            this.isError = false;
            this.isSuccess = true;
            this.progress = 100;
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.isUploading = false;
            this.isUploaded = false;
            this.isCancel = true;
            this.isError = false;
            this.isSuccess = false;
            this.progress = 0;
          }
        }, {
          key: "onError",
          value: function onError() {
            this.isUploading = false;
            this.isUploaded = false;
            this.isCancel = false;
            this.isError = true;
            this.isSuccess = false;
            this.progress = 0;
          }
        }]);

        return NbFileItem;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~own-lists-own-lists-module~queries-queries-module~setting-setting-module-es5.js.map