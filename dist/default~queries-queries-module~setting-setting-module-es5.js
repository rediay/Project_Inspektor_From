(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~queries-queries-module~setting-setting-module"], {
    /***/
    "5xEe":
    /*!*********************************************!*\
      !*** ./node_modules/rxjs-compat/Subject.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function xEe(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      exports.Subject = rxjs_1.Subject; //# sourceMappingURL=Subject.js.map

      /***/
    },

    /***/
    "8yf6":
    /*!**************************************!*\
      !*** ./node_modules/rxjs/Subject.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function yf6(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/Subject */
      "5xEe")); //# sourceMappingURL=Subject.js.map

      /***/

    },

    /***/
    "gfTr":
    /*!***************************************************************************!*\
      !*** ./node_modules/ngx-file-drop/__ivy_ngcc__/fesm2015/ngx-file-drop.js ***!
      \***************************************************************************/

    /*! exports provided: NgxFileDropComponent, NgxFileDropContentTemplateDirective, NgxFileDropEntry, NgxFileDropModule */

    /***/
    function gfTr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxFileDropComponent", function () {
        return NgxFileDropComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxFileDropContentTemplateDirective", function () {
        return NgxFileDropContentTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxFileDropEntry", function () {
        return NgxFileDropEntry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxFileDropModule", function () {
        return NgxFileDropModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * fileEntry is an instance of {@link FileSystemFileEntry} or {@link FileSystemDirectoryEntry}.
       * Which one is it can be checked using {@link FileSystemEntry.isFile} or {@link FileSystemEntry.isDirectory}
       * properties of the given {@link FileSystemEntry}.
       */


      var _c0 = ["fileSelector"];

      function NgxFileDropComponent_ng_template_4_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.dropZoneLabel);
        }
      }

      function NgxFileDropComponent_ng_template_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxFileDropComponent_ng_template_4_div_1_Template_input_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.openFileSelector($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.browseBtnLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx_r5.browseBtnClassName);
        }
      }

      function NgxFileDropComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxFileDropComponent_ng_template_4_div_0_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxFileDropComponent_ng_template_4_div_1_Template, 2, 2, "div", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dropZoneLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showBrowseBtn);
        }
      }

      function NgxFileDropComponent_ng_template_6_Template(rf, ctx) {}

      var _c1 = function _c1(a0) {
        return {
          openFileSelector: a0
        };
      };

      var NgxFileDropEntry = /*#__PURE__*/_createClass(function NgxFileDropEntry(relativePath, fileEntry) {
        _classCallCheck(this, NgxFileDropEntry);

        this.relativePath = relativePath;
        this.fileEntry = fileEntry;
      });

      var NgxFileDropContentTemplateDirective = /*#__PURE__*/_createClass(function NgxFileDropContentTemplateDirective(template) {
        _classCallCheck(this, NgxFileDropContentTemplateDirective);

        this.template = template;
      });

      NgxFileDropContentTemplateDirective.ɵfac = function NgxFileDropContentTemplateDirective_Factory(t) {
        return new (t || NgxFileDropContentTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      NgxFileDropContentTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgxFileDropContentTemplateDirective,
        selectors: [["", "ngx-file-drop-content-tmp", ""]]
      });

      NgxFileDropContentTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxFileDropContentTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ngx-file-drop-content-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }];
        }, null);
      })();

      var NgxFileDropComponent = /*#__PURE__*/function () {
        function NgxFileDropComponent(zone, renderer) {
          var _this = this;

          _classCallCheck(this, NgxFileDropComponent);

          this.zone = zone;
          this.renderer = renderer;
          this.accept = '*';
          this.directory = false;
          this.multiple = true;
          this.dropZoneLabel = '';
          this.dropZoneClassName = 'ngx-file-drop__drop-zone';
          this.useDragEnter = false;
          this.contentClassName = 'ngx-file-drop__content';
          this.showBrowseBtn = false;
          this.browseBtnClassName = 'btn btn-primary btn-xs ngx-file-drop__browse-btn';
          this.browseBtnLabel = 'Browse files';
          this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onFileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onFileLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isDraggingOverDropZone = false;
          this.globalDraggingInProgress = false;
          this.files = [];
          this.numOfActiveReadEntries = 0;
          this.helperFormEl = null;
          this.fileInputPlaceholderEl = null;
          this.dropEventTimerSubscription = null;
          this._disabled = false;

          this.openFileSelector = function (event) {
            if (_this.fileSelector && _this.fileSelector.nativeElement) {
              _this.fileSelector.nativeElement.click();
            }
          };

          this.globalDragStartListener = this.renderer.listen('document', 'dragstart', function (evt) {
            _this.globalDraggingInProgress = true;
          });
          this.globalDragEndListener = this.renderer.listen('document', 'dragend', function (evt) {
            _this.globalDraggingInProgress = false;
          });
        }

        _createClass(NgxFileDropComponent, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = value != null && "".concat(value) !== 'false';
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.dropEventTimerSubscription) {
              this.dropEventTimerSubscription.unsubscribe();
              this.dropEventTimerSubscription = null;
            }

            this.globalDragStartListener();
            this.globalDragEndListener();
            this.files = [];
            this.helperFormEl = null;
            this.fileInputPlaceholderEl = null;
          }
        }, {
          key: "onDragOver",
          value: function onDragOver(event) {
            if (this.useDragEnter) {
              this.preventAndStop(event);

              if (event.dataTransfer) {
                event.dataTransfer.dropEffect = 'copy';
              }
            } else if (!this.isDropzoneDisabled() && !this.useDragEnter && event.dataTransfer) {
              if (!this.isDraggingOverDropZone) {
                this.isDraggingOverDropZone = true;
                this.onFileOver.emit(event);
              }

              this.preventAndStop(event);
              event.dataTransfer.dropEffect = 'copy';
            }
          }
        }, {
          key: "onDragEnter",
          value: function onDragEnter(event) {
            if (!this.isDropzoneDisabled() && this.useDragEnter) {
              if (!this.isDraggingOverDropZone) {
                this.isDraggingOverDropZone = true;
                this.onFileOver.emit(event);
              }

              this.preventAndStop(event);
            }
          }
        }, {
          key: "onDragLeave",
          value: function onDragLeave(event) {
            if (!this.isDropzoneDisabled()) {
              if (this.isDraggingOverDropZone) {
                this.isDraggingOverDropZone = false;
                this.onFileLeave.emit(event);
              }

              this.preventAndStop(event);
            }
          }
        }, {
          key: "dropFiles",
          value: function dropFiles(event) {
            if (!this.isDropzoneDisabled()) {
              this.isDraggingOverDropZone = false;

              if (event.dataTransfer) {
                var items;

                if (event.dataTransfer.items) {
                  items = event.dataTransfer.items;
                } else {
                  items = event.dataTransfer.files;
                }

                this.preventAndStop(event);
                this.checkFiles(items);
              }
            }
          }
          /**
           * Processes the change event of the file input and adds the given files.
           * @param Event event
           */

        }, {
          key: "uploadFiles",
          value: function uploadFiles(event) {
            if (!this.isDropzoneDisabled()) {
              if (event.target) {
                var items = event.target.files || [];
                this.checkFiles(items);
                this.resetFileInput();
              }
            }
          }
        }, {
          key: "checkFiles",
          value: function checkFiles(items) {
            var _this2 = this;

            var _loop = function _loop() {
              var item = items[i];
              var entry = null;

              if (_this2.canGetAsEntry(item)) {
                entry = item.webkitGetAsEntry();
              }

              if (!entry) {
                if (item) {
                  var fakeFileEntry = {
                    name: item.name,
                    isDirectory: false,
                    isFile: true,
                    file: function file(callback) {
                      return callback(item);
                    }
                  };
                  var toUpload = new NgxFileDropEntry(fakeFileEntry.name, fakeFileEntry);

                  _this2.addToQueue(toUpload);
                }
              } else {
                if (entry.isFile) {
                  var _toUpload = new NgxFileDropEntry(entry.name, entry);

                  _this2.addToQueue(_toUpload);
                } else if (entry.isDirectory) {
                  _this2.traverseFileTree(entry, entry.name);
                }
              }
            };

            for (var i = 0; i < items.length; i++) {
              _loop();
            }

            if (this.dropEventTimerSubscription) {
              this.dropEventTimerSubscription.unsubscribe();
            }

            this.dropEventTimerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200, 200).subscribe(function () {
              if (_this2.files.length > 0 && _this2.numOfActiveReadEntries === 0) {
                var files = _this2.files;
                _this2.files = [];

                _this2.onFileDrop.emit(files);
              }
            });
          }
        }, {
          key: "traverseFileTree",
          value: function traverseFileTree(item, path) {
            var _this3 = this;

            if (item.isFile) {
              var toUpload = new NgxFileDropEntry(path, item);
              this.files.push(toUpload);
            } else {
              path = path + '/';
              var dirReader = item.createReader();
              var entries = [];

              var readEntries = function readEntries() {
                _this3.numOfActiveReadEntries++;
                dirReader.readEntries(function (result) {
                  if (!result.length) {
                    // add empty folders
                    if (entries.length === 0) {
                      var _toUpload2 = new NgxFileDropEntry(path, item);

                      _this3.zone.run(function () {
                        _this3.addToQueue(_toUpload2);
                      });
                    } else {
                      var _loop2 = function _loop2(i) {
                        _this3.zone.run(function () {
                          _this3.traverseFileTree(entries[i], path + entries[i].name);
                        });
                      };

                      for (var i = 0; i < entries.length; i++) {
                        _loop2(i);
                      }
                    }
                  } else {
                    // continue with the reading
                    entries = entries.concat(result);
                    readEntries();
                  }

                  _this3.numOfActiveReadEntries--;
                });
              };

              readEntries();
            }
          }
          /**
           * Clears any added files from the file input element so the same file can subsequently be added multiple times.
           */

        }, {
          key: "resetFileInput",
          value: function resetFileInput() {
            if (this.fileSelector && this.fileSelector.nativeElement) {
              var fileInputEl = this.fileSelector.nativeElement;
              var fileInputContainerEl = fileInputEl.parentElement;
              var helperFormEl = this.getHelperFormElement();
              var fileInputPlaceholderEl = this.getFileInputPlaceholderElement(); // Just a quick check so we do not mess up the DOM (will never happen though).

              if (fileInputContainerEl !== helperFormEl) {
                // Insert the form input placeholder in the DOM before the form input element.
                this.renderer.insertBefore(fileInputContainerEl, fileInputPlaceholderEl, fileInputEl); // Add the form input as child of the temporary form element, removing the form input from the DOM.

                this.renderer.appendChild(helperFormEl, fileInputEl); // Reset the form, thus clearing the input element of any files.

                helperFormEl.reset(); // Add the file input back to the DOM in place of the file input placeholder element.

                this.renderer.insertBefore(fileInputContainerEl, fileInputEl, fileInputPlaceholderEl); // Remove the input placeholder from the DOM

                this.renderer.removeChild(fileInputContainerEl, fileInputPlaceholderEl);
              }
            }
          }
          /**
           * Get a cached HTML form element as a helper element to clear the file input element.
           */

        }, {
          key: "getHelperFormElement",
          value: function getHelperFormElement() {
            if (!this.helperFormEl) {
              this.helperFormEl = this.renderer.createElement('form');
            }

            return this.helperFormEl;
          }
          /**
           * Get a cached HTML div element to be used as placeholder for the file input element when clearing said element.
           */

        }, {
          key: "getFileInputPlaceholderElement",
          value: function getFileInputPlaceholderElement() {
            if (!this.fileInputPlaceholderEl) {
              this.fileInputPlaceholderEl = this.renderer.createElement('div');
            }

            return this.fileInputPlaceholderEl;
          }
        }, {
          key: "canGetAsEntry",
          value: function canGetAsEntry(item) {
            return !!item.webkitGetAsEntry;
          }
        }, {
          key: "isDropzoneDisabled",
          value: function isDropzoneDisabled() {
            return this.globalDraggingInProgress || this.disabled;
          }
        }, {
          key: "addToQueue",
          value: function addToQueue(item) {
            this.files.push(item);
          }
        }, {
          key: "preventAndStop",
          value: function preventAndStop(event) {
            event.stopPropagation();
            event.preventDefault();
          }
        }]);

        return NgxFileDropComponent;
      }();

      NgxFileDropComponent.ɵfac = function NgxFileDropComponent_Factory(t) {
        return new (t || NgxFileDropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      NgxFileDropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgxFileDropComponent,
        selectors: [["ngx-file-drop"]],
        contentQueries: function NgxFileDropComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgxFileDropContentTemplateDirective, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
          }
        },
        viewQuery: function NgxFileDropComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileSelector = _t.first);
          }
        },
        inputs: {
          accept: "accept",
          directory: "directory",
          multiple: "multiple",
          dropZoneLabel: "dropZoneLabel",
          dropZoneClassName: "dropZoneClassName",
          useDragEnter: "useDragEnter",
          contentClassName: "contentClassName",
          showBrowseBtn: "showBrowseBtn",
          browseBtnClassName: "browseBtnClassName",
          browseBtnLabel: "browseBtnLabel",
          disabled: "disabled"
        },
        outputs: {
          onFileDrop: "onFileDrop",
          onFileOver: "onFileOver",
          onFileLeave: "onFileLeave"
        },
        decls: 7,
        vars: 15,
        consts: [[3, "className", "drop", "dragover", "dragenter", "dragleave"], [3, "className"], ["type", "file", 1, "ngx-file-drop__file-input", 3, "accept", "multiple", "change"], ["fileSelector", ""], ["defaultContentTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ngx-file-drop__drop-zone-label", 4, "ngIf"], [4, "ngIf"], [1, "ngx-file-drop__drop-zone-label"], ["type", "button", 3, "className", "value", "click"]],
        template: function NgxFileDropComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function NgxFileDropComponent_Template_div_drop_0_listener($event) {
              return ctx.dropFiles($event);
            })("dragover", function NgxFileDropComponent_Template_div_dragover_0_listener($event) {
              return ctx.onDragOver($event);
            })("dragenter", function NgxFileDropComponent_Template_div_dragenter_0_listener($event) {
              return ctx.onDragEnter($event);
            })("dragleave", function NgxFileDropComponent_Template_div_dragleave_0_listener($event) {
              return ctx.onDragLeave($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgxFileDropComponent_Template_input_change_2_listener($event) {
              return ctx.uploadFiles($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxFileDropComponent_ng_template_4_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxFileDropComponent_ng_template_6_Template, 0, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-file-drop__drop-zone--over", ctx.isDraggingOverDropZone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.dropZoneClassName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.contentClassName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx.accept)("multiple", ctx.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("directory", ctx.directory || undefined)("webkitdirectory", ctx.directory || undefined)("mozdirectory", ctx.directory || undefined)("msdirectory", ctx.directory || undefined)("odirectory", ctx.directory || undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate || _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.openFileSelector));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".ngx-file-drop__drop-zone[_ngcontent-%COMP%]{border:2px dotted #0782d0;border-radius:30px;height:100px;margin:auto}.ngx-file-drop__drop-zone--over[_ngcontent-%COMP%]{background-color:hsla(0,0%,57.6%,.5)}.ngx-file-drop__content[_ngcontent-%COMP%]{align-items:center;color:#0782d0;display:flex;height:100px;justify-content:center}.ngx-file-drop__drop-zone-label[_ngcontent-%COMP%]{text-align:center}.ngx-file-drop__file-input[_ngcontent-%COMP%]{display:none}"]
      });

      NgxFileDropComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      NgxFileDropComponent.propDecorators = {
        accept: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        directory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropZoneLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropZoneClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        useDragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showBrowseBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        browseBtnClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        browseBtnLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onFileDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFileOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFileLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NgxFileDropContentTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        fileSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileSelector', {
            "static": true
          }]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxFileDropComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-file-drop',
            template: "<div [className]=\"dropZoneClassName\"\r\n     [class.ngx-file-drop__drop-zone--over]=\"isDraggingOverDropZone\"\r\n     (drop)=\"dropFiles($event)\"\r\n     (dragover)=\"onDragOver($event)\"\r\n     (dragenter)=\"onDragEnter($event)\"\r\n     (dragleave)=\"onDragLeave($event)\">\r\n  <div [className]=\"contentClassName\">\r\n    <input \r\n      type=\"file\" \r\n      #fileSelector \r\n      [accept]=\"accept\" \r\n      [attr.directory]=\"directory || undefined\" \r\n      [attr.webkitdirectory]=\"directory || undefined\"\r\n      [attr.mozdirectory]=\"directory || undefined\"\r\n      [attr.msdirectory]=\"directory || undefined\"\r\n      [attr.odirectory]=\"directory || undefined\"\r\n      [multiple]=\"multiple\"\r\n      (change)=\"uploadFiles($event)\" \r\n      class=\"ngx-file-drop__file-input\" \r\n    />\r\n\r\n    <ng-template #defaultContentTemplate>\r\n      <div *ngIf=\"dropZoneLabel\" class=\"ngx-file-drop__drop-zone-label\">{{dropZoneLabel}}</div>\r\n      <div *ngIf=\"showBrowseBtn\">\r\n        <input type=\"button\" [className]=\"browseBtnClassName\" value=\"{{browseBtnLabel}}\" (click)=\"openFileSelector($event)\" />\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"contentTemplate || defaultContentTemplate\"\r\n      [ngTemplateOutletContext]=\"{ openFileSelector: openFileSelector }\">\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n",
            styles: [".ngx-file-drop__drop-zone{border:2px dotted #0782d0;border-radius:30px;height:100px;margin:auto}.ngx-file-drop__drop-zone--over{background-color:hsla(0,0%,57.6%,.5)}.ngx-file-drop__content{align-items:center;color:#0782d0;display:flex;height:100px;justify-content:center}.ngx-file-drop__drop-zone-label{text-align:center}.ngx-file-drop__file-input{display:none}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          directory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dropZoneLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dropZoneClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          useDragEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showBrowseBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          browseBtnClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          browseBtnLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onFileDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onFileOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onFileLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgxFileDropContentTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
            }]
          }],
          fileSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileSelector', {
              "static": true
            }]
          }]
        });
      })();

      var NgxFileDropModule = /*#__PURE__*/_createClass(function NgxFileDropModule() {
        _classCallCheck(this, NgxFileDropModule);
      });

      NgxFileDropModule.ɵfac = function NgxFileDropModule_Factory(t) {
        return new (t || NgxFileDropModule)();
      };

      NgxFileDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxFileDropModule,
        bootstrap: function bootstrap() {
          return [NgxFileDropComponent];
        }
      });
      NgxFileDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxFileDropModule, {
          declarations: function declarations() {
            return [NgxFileDropComponent, NgxFileDropContentTemplateDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [NgxFileDropComponent, NgxFileDropContentTemplateDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxFileDropModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [NgxFileDropComponent, NgxFileDropContentTemplateDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [NgxFileDropComponent, NgxFileDropContentTemplateDirective],
            providers: [],
            bootstrap: [NgxFileDropComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-file-drop.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~queries-queries-module~setting-setting-module-es5.js.map