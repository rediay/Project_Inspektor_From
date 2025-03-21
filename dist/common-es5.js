(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(typeof iterable + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "36nv":
    /*!********************************************!*\
      !*** ./src/app/utils/pagination-filter.ts ***!
      \********************************************/

    /*! exports provided: PaginationFilter */

    /***/
    function nv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationFilter", function () {
        return PaginationFilter;
      });

      var PaginationFilter = /*#__PURE__*/_createClass(function PaginationFilter() {
        _classCallCheck(this, PaginationFilter);

        this.query = '';
        this.perPage = 20;
        this.pageNumber = 1;
        this.startDate = '';
        this.endDate = '';
      });
      /***/

    },

    /***/
    "K2vf":
    /*!**********************************************!*\
      !*** ./src/app/utils/custom-http.service.ts ***!
      \**********************************************/

    /*! exports provided: CustomHttpService */

    /***/
    function K2vf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomHttpService", function () {
        return CustomHttpService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../@core/backend/common/api/http.service */
      "sZbP");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _custom_server_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./custom-server.data-source */
      "R3IU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CustomHttpService = /*#__PURE__*/function (_core_backend_common_) {
        _inherits(CustomHttpService, _core_backend_common_);

        var _super = _createSuper(CustomHttpService);

        function CustomHttpService(http) {
          var _this;

          _classCallCheck(this, CustomHttpService);

          _this = _super.call(this, http);
          _this.http = http;
          return _this;
        }

        _createClass(CustomHttpService, [{
          key: "getDataSource",
          value: function getDataSource(endpoint, paginationFilter) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var params, options, perPage, pageNumber, apiPaginationResponse, items, dataSource;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                      fromObject: {
                        query: paginationFilter.query,
                        perPage: paginationFilter.perPage.toString(),
                        pageNumber: paginationFilter.pageNumber.toString()
                      }
                    });
                    options = {
                      params: params
                    };
                    perPage = paginationFilter.perPage;
                    pageNumber = paginationFilter.pageNumber;
                    _context.next = 6;
                    return this.http.get("".concat(this.apiUrl, "/").concat(endpoint), options).toPromise();

                  case 6:
                    apiPaginationResponse = _context.sent;
                    items = apiPaginationResponse.data;
                    dataSource = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"](items);
                    dataSource.setPaging(pageNumber, perPage, true);
                    return _context.abrupt("return", dataSource);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getServerDataSource",
          value: function getServerDataSource(endpoint) {
            var url = "".concat(this.apiUrl, "/").concat(endpoint);
            return new _custom_server_data_source__WEBPACK_IMPORTED_MODULE_4__["CustomServerDataSource"](this.http, {
              endPoint: url,
              totalKey: 'total',
              dataKey: 'data',
              pagerPageKey: 'pageNumber',
              pagerLimitKey: 'perPage'
            });
          }
        }]);

        return CustomHttpService;
      }(_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]);

      CustomHttpService.ɵfac = function CustomHttpService_Factory(t) {
        return new (t || CustomHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      CustomHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: CustomHttpService,
        factory: CustomHttpService.ɵfac
      });
      /***/
    },

    /***/
    "R3IU":
    /*!****************************************************!*\
      !*** ./src/app/utils/custom-server.data-source.ts ***!
      \****************************************************/

    /*! exports provided: CustomServerDataSource */

    /***/
    function R3IU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomServerDataSource", function () {
        return CustomServerDataSource;
      });
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CustomServerDataSource = /*#__PURE__*/function (_ng2_smart_table__WEB) {
        _inherits(CustomServerDataSource, _ng2_smart_table__WEB);

        var _super2 = _createSuper(CustomServerDataSource);

        function CustomServerDataSource(http, conf) {
          var _this2;

          _classCallCheck(this, CustomServerDataSource);

          _this2 = _super2.call(this, http, conf);
          _this2._query = '';
          _this2.prevConfFilters = [];
          _this2._filters = {};
          return _this2;
        }

        _createClass(CustomServerDataSource, [{
          key: "createRequesParams",
          value: function createRequesParams() {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
            httpParams = this.addSortRequestParams(httpParams);
            httpParams = this.addFilterRequestParams(httpParams);
            httpParams = this.addSearchRequestParams(httpParams);
            return this.addPagerRequestParams(httpParams);
          }
        }, {
          key: "setSearchQuery",
          value: function setSearchQuery() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._query = query;
            this.pagingConf['page'] = 1;
            this.refresh();
          }
        }, {
          key: "addSearchRequestParams",
          value: function addSearchRequestParams(httpParams) {
            var _this3 = this;

            var keys = Object.keys(this._filters);
            httpParams = httpParams.set('query', this._query);
            keys.forEach(function (key) {
              return httpParams = httpParams.set(key, _this3._filters[key]);
            });
            return httpParams;
          }
        }, {
          key: "setSearchFilters",
          value: function setSearchFilters(filters) {
            this._filters = filters;
            this.pagingConf['page'] = 1;

            if (filters['perPage'] != null) {
              var perPageFilter = filters['perPage'];

              if (Number.isInteger(perPageFilter)) {
                this.pagingConf['perPage'] = filters['perPage'];
              } else {
                this._filters["showAll"] = true;
              }
            }

            this.refresh();
          }
        }]);

        return CustomServerDataSource;
      }(ng2_smart_table__WEBPACK_IMPORTED_MODULE_0__["ServerDataSource"]);
      /***/

    },

    /***/
    "cxbk":
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /*! exports provided: environment */

    /***/
    function cxbk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /*
       * Copyright (c) Akveo 2019. All Rights Reserved.
       * Licensed under the Single Application / Multi Application License.
       * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
       */


      var environment = {
        production: true,
        //apiUrl: 'https://ambientetest.datalaft.com:2101/api',
        //apiUrl: 'https://localhost:5001/api',
        apiUrl: 'https://inspektor-backend.azurewebsites.net/api',
        testUser: {
          token: {},
          email: ''
        }
      };
      /***/
    },

    /***/
    "nVyZ":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/management/components/manageprocuracy/manageprocuracy.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ManageprocuracyComponent */

    /***/
    function nVyZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageprocuracyComponent", function () {
        return ManageprocuracyComponent;
      });
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _components_editors_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../@components/editors/toggle/toggle.component */
      "f2ia");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");

      var ManageprocuracyComponent = /*#__PURE__*/function () {
        function ManageprocuracyComponent(translate) {
          _classCallCheck(this, ManageprocuracyComponent);

          this.translate = translate;
          this.settings = {
            hideSubHeader: true,
            actions: {
              "delete": false,
              edit: false,
              add: false
            },
            columns: {
              Rol: {
                title: 'Rol',
                type: 'list',
                editor: {
                  type: 'list',
                  config: {
                    list: [{
                      title: 'Administrador',
                      value: 'Administrador'
                    }, {
                      title: 'Consultor',
                      value: 'Consultor'
                    }, {
                      title: 'Informador',
                      value: 'Informador'
                    }, {
                      title: 'Reporte',
                      value: 'Reporte'
                    }]
                  }
                },
                filter: false
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
                filter: false
              },
              FechaDesactivacion: {
                title: 'Fecha Desactivación',
                type: 'string',
                filter: false
              }
            }
          };
          this.settingsUsers = {
            hideSubHeader: true,
            actions: {
              "delete": false,
              edit: false,
              add: false
            },
            columns: {
              Rol: {
                title: 'Rol',
                type: 'list',
                editor: {
                  type: 'list',
                  config: {
                    list: [{
                      title: 'Administrador',
                      value: 'Administrador'
                    }, {
                      title: 'Consultor',
                      value: 'Consultor'
                    }, {
                      title: 'Informador',
                      value: 'Informador'
                    }, {
                      title: 'Reporte',
                      value: 'Reporte'
                    }]
                  }
                },
                filter: false
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
                filter: false
              },
              FechaDesactivacion: {
                title: 'Fecha Desactivación',
                type: 'string',
                filter: false
              }
            }
          };
          this.data = [{
            Rol: 'Administrador',
            AccesoProcuraduria: true,
            FechaActivacion: '1/07/2020 9:57:05 a. m.',
            FechaDesactivacion: ''
          }];
          this.dataUsers = [{
            Rol: 'Administrador',
            NDocumento: '7876545',
            Nombres: 'Alejandro',
            Apellidos: 'Castellanos',
            Usuario: 'c.castellanos',
            Estado: true,
            AccesoProcuraduria: true,
            FechaActivacion: '1/07/2020 9:57:05 a. m.',
            FechaDesactivacion: ''
          }];
        }

        _createClass(ManageprocuracyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.traductorlocal();
          }
        }, {
          key: "traductorlocal",
          value: function traductorlocal() {
            this.lang = localStorage.getItem('lang');
            var currentlang = this.translate.currentLang;
            currentlang = this.lang;
            this.translate.use(currentlang);
          }
        }, {
          key: "onUserRowSelect",
          value: function onUserRowSelect(event) {
            var selectedRows = event.selected;
          }
        }]);

        return ManageprocuracyComponent;
      }();

      ManageprocuracyComponent.ɵfac = function ManageprocuracyComponent_Factory(t) {
        return new (t || ManageprocuracyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__["TranslateService"]));
      };

      ManageprocuracyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ManageprocuracyComponent,
        selectors: [["ngx-manageprocuracy"]],
        decls: 13,
        vars: 7,
        consts: [[1, "example-smart-table", 3, "settings", "source"]],
        template: function ManageprocuracyComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, "ManageModule.Administracion_del_Acceso_de_Procuraduria_en_linea"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settingsUsers)("source", ctx.dataUsers);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2Vwcm9jdXJhY3kuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map