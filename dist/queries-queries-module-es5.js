(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(typeof iterable + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["queries-queries-module"], {
    /***/
    "/zEO":
    /*!*************************************************************!*\
      !*** ./src/app/pages/queries/services/bulkQuery.service.ts ***!
      \*************************************************************/

    /*! exports provided: BulkQueryService */

    /***/
    function zEO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BulkQueryService", function () {
        return BulkQueryService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BulkQueryService = /*#__PURE__*/function () {
        function BulkQueryService(http) {
          _classCallCheck(this, BulkQueryService);

          this.http = http;
        }

        _createClass(BulkQueryService, [{
          key: "BulkQuery",
          value: function BulkQuery(formData) {
            return this.http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/BulkQueryController/BulkQuery"), formData);
          }
        }, {
          key: "BulkQuerySA",
          value: function BulkQuerySA(formData) {
            return this.http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/BulkQueryController/BulkQueryServicesAdditional"), formData);
          }
        }, {
          key: "getBulkQueryAddiotionalSA",
          value: function getBulkQueryAddiotionalSA() {
            return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/BulkQueryController/getBulkQueryServicesAdditionalTable"));
          }
        }, {
          key: "exportExcel",
          value: function exportExcel(id) {
            return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, '/BulkQueryController/getReportExcel', "?QueryId=").concat(id), {
              observe: 'response',
              responseType: 'blob'
            });
          }
        }, {
          key: "exportSAExcel",
          value: function exportSAExcel(id) {
            return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, '/BulkQueryController/getReportExcelAditionalService', "?QueryId=").concat(id), {
              observe: 'response',
              responseType: 'blob'
            });
          }
        }, {
          key: "exportPDF",
          value: function exportPDF(id) {
            return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, '/BulkQueryController/getReport/').concat(id), {
              observe: 'response',
              responseType: 'blob'
            });
          }
        }, {
          key: "exportSAPDF",
          value: function exportSAPDF(id) {
            return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, '/BulkQueryController/getReportAditionalService/').concat(id), {
              observe: 'response',
              responseType: 'blob'
            });
          }
        }]);

        return BulkQueryService;
      }();

      BulkQueryService.ɵfac = function BulkQueryService_Factory(t) {
        return new (t || BulkQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      BulkQueryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: BulkQueryService,
        factory: BulkQueryService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "016S":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/management/backend/common/services/ThirdPartyManage.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: thirdPartyManageService */

    /***/
    function S(module, __webpack_exports__, __webpack_require__) {
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
    "1G9O":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/queries/services/bulkQueryAdditionalService.service.ts ***!
      \******************************************************************************/

    /*! exports provided: BulkQueryAdditionalService */

    /***/
    function G9O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BulkQueryAdditionalService", function () {
        return BulkQueryAdditionalService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BulkQueryAdditionalService = /*#__PURE__*/function () {
        function BulkQueryAdditionalService(http) {
          _classCallCheck(this, BulkQueryAdditionalService);

          this.http = http;
        }

        _createClass(BulkQueryAdditionalService, [{
          key: "BulkQuerySA",
          value: function BulkQuerySA(formData) {
            return this.http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/BulkQueryAdditionalServiceController/BulkQueryServicesAdditional"), formData);
          }
        }, {
          key: "getBulkQueryAddiotionalSA",
          value: function getBulkQueryAddiotionalSA() {
            return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/BulkQueryAdditionalServiceController/getBulkQueryServicesAdditionalTable"));
          }
        }, {
          key: "exportSAExcel",
          value: function exportSAExcel(id) {
            return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, '/BulkQueryAdditionalServiceController/getReportExcelAditionalService', "?QueryId=").concat(id), {
              observe: 'response',
              responseType: 'blob'
            });
          }
        }, {
          key: "exportSAPDF",
          value: function exportSAPDF(id) {
            return this.http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, '/BulkQueryAdditionalServiceController/getReportAditionalService/').concat(id), {
              observe: 'response',
              responseType: 'blob'
            });
          }
        }]);

        return BulkQueryAdditionalService;
      }();

      BulkQueryAdditionalService.ɵfac = function BulkQueryAdditionalService_Factory(t) {
        return new (t || BulkQueryAdditionalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      BulkQueryAdditionalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: BulkQueryAdditionalService,
        factory: BulkQueryAdditionalService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "5Zer":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/pages/queries/components/bulk-additionalservices/bulk-additionalservices.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: BulkAdditionalservicesComponent */

    /***/
    function Zer(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BulkAdditionalservicesComponent", function () {
        return BulkAdditionalservicesComponent;
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


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _models_bulkQueryResponseDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../models/bulkQueryResponseDTO */
      "6JcG");
      /* harmony import */


      var _components_editors_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../@components/editors/button/button.component */
      "k02O");
      /* harmony import */


      var _services_bulkQueryAdditionalService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/bulkQueryAdditionalService.service */
      "1G9O");
      /* harmony import */


      var ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-file-drop */
      "gfTr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["divResult"];

      function BulkAdditionalservicesComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Arrastre el archivo aqu\xED o\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BulkAdditionalservicesComponent_ng_template_19_Template_a_click_4_listener() {
            var openFileSelector_r3 = ctx.openFileSelector;
            return openFileSelector_r3();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SELECCIONE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " para cargarlo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BulkAdditionalservicesComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.relativePath);
        }
      }

      var BulkAdditionalservicesComponent = /*#__PURE__*/function () {
        function BulkAdditionalservicesComponent(_BulkQueryAdditionalService, toastrService) {
          var _this = this;

          _classCallCheck(this, BulkAdditionalservicesComponent);

          this._BulkQueryAdditionalService = _BulkQueryAdditionalService;
          this.toastrService = toastrService;
          this.hasProcuraduria = false;
          this.loadingQuery = false;
          this.hasJemps = false;
          this.hasFile = false;
          this.hasRamaJudicial = false;
          this.queryFinished = false;
          this.nQuery = 0;
          this.data = new _models_bulkQueryResponseDTO__WEBPACK_IMPORTED_MODULE_3__["BulkQueryResponseDTO"]();
          this.bulkQueryServicesAdditionalList = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
          this.types = ['primary', 'success', 'info', 'warning', 'danger'];
          this.index = 1;
          this.destroyByClick = true;
          this.duration = 2000;
          this.hasIcon = true;
          this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbGlobalPhysicalPosition"].TOP_RIGHT;
          this.preventDuplicates = false;
          this.status = 'primary';
          this.BulkQueryServicesAdditional = {
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              id: {
                title: 'Id',
                type: 'string',
                filter: true
              },
              attorneyService: {
                title: 'Procuraduria',
                type: 'html',
                filter: false,
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.attorneyService ? 'Sí' : 'No';
                }
              },
              judicialBranchService: {
                title: 'Rama Judicial',
                type: 'html',
                filter: false,
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.judicialBranchService ? 'Sí' : 'No';
                }
              },
              jempsJudicialBranchService: {
                title: 'Rama Judicial JEMPS',
                type: 'string',
                filter: false,
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.jempsJudicialBranchService ? 'Sí' : 'No';
                }
              },
              createdAt: {
                title: 'Fecha de Consulta',
                type: 'string',
                addable: false,
                editable: false,
                width: '250px',
                filter: false,
                sortDirection: 'desc'
              },
              process: {
                title: 'Proceso Consulta',
                type: 'string',
                filter: false
              },
              consultingStatus: {
                title: 'Estado Consulta',
                type: 'html',
                filter: false,
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.consultingStatus ? 'Finalizado' : 'En proceso';
                }
              },
              // Columna para el botón "Excel"
              excelButton: {
                title: 'Excel',
                type: 'custom',
                filter: false,
                renderComponent: _components_editors_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                onComponentInitFunction: function onComponentInitFunction(instance) {
                  instance.action.subscribe(function (row) {
                    _this.exportToExcel(row);
                  });
                }
              },
              // Columna para el botón "PDF"
              pdfButton: {
                title: 'PDF',
                type: 'custom',
                filter: false,
                renderComponent: _components_editors_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                onComponentInitFunction: function onComponentInitFunction(instance) {
                  instance.action.subscribe(function (row) {
                    _this.exportToPDF(row);
                  });
                }
              }
            }
          };
          this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
          this.filesSA = [];
        }

        _createClass(BulkAdditionalservicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialize();
          } //#region Methods 

        }, {
          key: "initialize",
          value: function initialize() {
            this.BulkQueryServicesAdditionalTable();
          }
        }, {
          key: "droppedSA",
          value: function droppedSA(filesSA) {
            this.loadingQuery = true;
            this.filesSA = filesSA;
          }
        }, {
          key: "fileOverSA",
          value: function fileOverSA(event) {
            console.log(event);
          }
        }, {
          key: "fileLeaveSA",
          value: function fileLeaveSA(event) {
            console.log(event);
          } //#region Servicios

        }, {
          key: "setHasRamaProcuraduria",
          value: function setHasRamaProcuraduria(checked) {
            console.log('checked', checked.target.checked);
            this.hasProcuraduria = checked.target.checked;
          }
        }, {
          key: "setHasRamaJudicialJemps",
          value: function setHasRamaJudicialJemps(checked) {
            console.log('checked', checked.target.checked);
            this.hasJemps = checked.target.checked;
          }
        }, {
          key: "setHasRamaJudicial",
          value: function setHasRamaJudicial(checked) {
            console.log('checked', checked.target.checked);
            this.hasRamaJudicial = checked.target.checked;
          }
        }, {
          key: "BulkQuerySA",
          value: function BulkQuerySA() {
            var _this2 = this;

            debugger;

            var _iterator = _createForOfIteratorHelper(this.filesSA),
                _step;

            try {
              var _loop = function _loop() // Is it a file?
              {
                var droppedFile = _step.value;

                if (droppedFile.fileEntry.isFile) {
                  var fileEntry = droppedFile.fileEntry;
                  fileEntry.file(function (file) {
                    console.log(droppedFile.relativePath, file);

                    _this2.DoBulkQuerySA(file, droppedFile.relativePath);
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

            this.initialize();
          }
        }, {
          key: "DoBulkQuerySA",
          value: function DoBulkQuerySA(file, relativePath) {
            var _this3 = this;

            var formData = new FormData();
            formData.append('file', file, relativePath);
            formData.append('hasProcuraduria', String(this.hasProcuraduria));
            formData.append('hasRamaJudicialJEMPSv', String(this.hasJemps));
            formData.append('hasRamaJudicial', String(this.hasRamaJudicial));
            console.log(formData);

            this._BulkQueryAdditionalService.BulkQuerySA(formData).subscribe(function (response) {
              _this3.loadingQuery = false;
              _this3.data = response; // this.nQuery = this.data.query.id;
              // this.source = new LocalDataSource(this.data.lists as any);
              // console.log(this.settings);
            }, function (error) {
              _this3.loadingQuery = false;
              _this3.queryFinished = false;

              if (error.status === 400) {
                console.log(error.error); // Muestra el mensaje de error en la consola 

                _this3.loadingQuery = false;

                _this3.showToast("Error", error.error, 4, false);
              } else {
                _this3.showToast("Error", "No se pudo realizar consulta, por favor inténtelo más tarde", 4, false);

                console.log("e", error);
              }
            });

            this.showToast("success", 'Consulta en proceso', 1, false);
          }
        }, {
          key: "BulkQueryServicesAdditionalTable",
          value: function BulkQueryServicesAdditionalTable() {
            var _this4 = this;

            this._BulkQueryAdditionalService.getBulkQueryAddiotionalSA().subscribe(function (datos) {
              console.log(datos);
              _this4.dataBulkQueryServicesAdditional = datos.sort(function (a, b) {
                return b.id - a.id;
              });
              _this4.bulkQueryServicesAdditionalList = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"](_this4.dataBulkQueryServicesAdditional);
            }, function (error) {
              console.error('Error al obtener los datos:', error);
            });
          }
        }, {
          key: "exportToExcel",
          value: function exportToExcel(row) {
            var _this5 = this;

            this.nQuery = row.id;

            if (this.nQuery != 0) {
              this._BulkQueryAdditionalService.exportSAExcel(this.nQuery).subscribe(function (response) {
                var filename = _this5.getFileName(response, '.xlsx');

                var binaryData = [];
                binaryData.push(response.body);
                var downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {
                  type: 'blob'
                }));
                downloadLink.setAttribute('download', filename);
                document.body.appendChild(downloadLink);
                downloadLink.click();
              });
            }
          }
        }, {
          key: "exportToPDF",
          value: function exportToPDF(row) {
            var _this6 = this;

            console.log(row);
            this.nQuery = row.id;

            this._BulkQueryAdditionalService.exportSAPDF(this.nQuery).subscribe(function (response) {
              var filename = _this6.getFileName(response, '.pdf');

              var binaryData = [];
              binaryData.push(response.body);
              var downloadLink = document.createElement('a');
              downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {
                type: 'blob'
              }));
              downloadLink.setAttribute('download', filename);
              document.body.appendChild(downloadLink);
              downloadLink.click();
            });
          }
        }, {
          key: "getFileName",
          value: function getFileName(response, extension) {
            var filename;

            try {
              var contentDisposition = response.headers.get('content-disposition');
              var r = /(?:filename=")(.+)(?:;")/;
              filename = r.exec(contentDisposition)[1];
            } catch (e) {
              filename = "Masiva_servicios_adicionales_".concat(this.nQuery).concat(extension);
            }

            return filename;
          } //Todo : Muestra toast segun mensaje

        }, {
          key: "showToast",
          value: function showToast(tittle, mesage, type, hasIcon) {
            var icon = hasIcon ? {} : {
              icon: ''
            };
            var position = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbGlobalPhysicalPosition"].TOP_RIGHT;
            var config = Object.assign({
              status: this.types[type],
              destroyByClick: true,
              duration: 3000,
              position: position,
              preventDuplicates: false
            }, icon);
            this.index += 1;
            this.toastrService.show(mesage, tittle, config);
          }
        }]);

        return BulkAdditionalservicesComponent;
      }();

      BulkAdditionalservicesComponent.ɵfac = function BulkAdditionalservicesComponent_Factory(t) {
        return new (t || BulkAdditionalservicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bulkQueryAdditionalService_service__WEBPACK_IMPORTED_MODULE_5__["BulkQueryAdditionalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]));
      };

      BulkAdditionalservicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BulkAdditionalservicesComponent,
        selectors: [["ngx-bulk-additionalservices"]],
        viewQuery: function BulkAdditionalservicesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divResult = _t.first);
          }
        },
        decls: 48,
        vars: 4,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "font-row"], ["nbButton", "", "status", "success", "shape", "round", "size", "small"], ["href", "assets\\excel\\PlantillaConsultaMasiva.xlsx", "target", "_blank", "download", "PlantillaConsultaMasiva.xlsx", 1, "btnNavega"], ["icon", "file-text-outline"], [1, "text-center"], [1, "col-sm-12"], [1, "form-group"], ["accept", ".xlsx", "dropZoneLabel", "Drop files here", 3, "multiple", "onFileDrop", "onFileOver", "onFileLeave"], ["ngx-file-drop-content-tmp", ""], [1, "upload-table"], [1, "table"], [1, "upload-name-style"], [4, "ngFor", "ngForOf"], [1, "header"], [1, "name", "bold"], ["size", "2px", "color", "black"], [1, "col-sm-6"], ["status", "basic", 3, "change"], ["type", "submit", "hero", "", "status", "primary", "nbButton", "", "fullWidth", "", 3, "click"], [1, "example-smart-table", 3, "settings", "source"], ["table", ""], [1, "btnNavega", 3, "click"]],
        template: function BulkAdditionalservicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Descargue la plantilla para hacer la consulta dando clic en el siguiente boton ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Descargar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-header", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CONSULTA MASIVA CON SERVICIOS ADICIONALES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-file-drop", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFileDrop", function BulkAdditionalservicesComponent_Template_ngx_file_drop_onFileDrop_18_listener($event) {
              return ctx.droppedSA($event);
            })("onFileOver", function BulkAdditionalservicesComponent_Template_ngx_file_drop_onFileOver_18_listener($event) {
              return ctx.fileOverSA($event);
            })("onFileLeave", function BulkAdditionalservicesComponent_Template_ngx_file_drop_onFileLeave_18_listener($event) {
              return ctx.fileLeaveSA($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BulkAdditionalservicesComponent_ng_template_19_Template, 9, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BulkAdditionalservicesComponent_tr_23_Template, 4, 1, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "SERVICIOS ADICIONALES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nb-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BulkAdditionalservicesComponent_Template_nb_toggle_change_32_listener($event) {
              return ctx.setHasRamaJudicial($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Rama Judicial");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nb-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BulkAdditionalservicesComponent_Template_nb_toggle_change_36_listener($event) {
              return ctx.setHasRamaJudicialJemps($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Rama Judicial JEMPS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nb-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BulkAdditionalservicesComponent_Template_nb_toggle_change_41_listener($event) {
              return ctx.setHasRamaProcuraduria($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Procuraduria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BulkAdditionalservicesComponent_Template_button_click_43_listener() {
              return ctx.BulkQuerySA();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "VALIDAR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "ng2-smart-table", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filesSA);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.BulkQueryServicesAdditional)("source", ctx.bulkQueryServicesAdditionalList);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__["NgxFileDropComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__["NgxFileDropContentTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToggleComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWxrLWFkZGl0aW9uYWxzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "6JcG":
    /*!**************************************************************!*\
      !*** ./src/app/pages/queries/models/bulkQueryResponseDTO.ts ***!
      \**************************************************************/

    /*! exports provided: BulkQueryResponseDTO, QueryDTO, BulkQueryServicesAdditionalDTO */

    /***/
    function JcG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BulkQueryResponseDTO", function () {
        return BulkQueryResponseDTO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueryDTO", function () {
        return QueryDTO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BulkQueryServicesAdditionalDTO", function () {
        return BulkQueryServicesAdditionalDTO;
      });

      var BulkQueryResponseDTO = /*#__PURE__*/_createClass(function BulkQueryResponseDTO() {
        _classCallCheck(this, BulkQueryResponseDTO);
      });

      var QueryDTO = /*#__PURE__*/_createClass(function QueryDTO() {
        _classCallCheck(this, QueryDTO);
      });

      var BulkQueryServicesAdditionalDTO = /*#__PURE__*/_createClass(function BulkQueryServicesAdditionalDTO() {
        _classCallCheck(this, BulkQueryServicesAdditionalDTO);
      });
      /***/

    },

    /***/
    "O2q9":
    /*!*************************************************!*\
      !*** ./src/app/pages/queries/queries.module.ts ***!
      \*************************************************/

    /*! exports provided: QueriesModule */

    /***/
    function O2q9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueriesModule", function () {
        return QueriesModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _queries_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./queries.component */
      "bTCu");
      /* harmony import */


      var _components_individual_individual_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/individual/individual.component */
      "yaJ5");
      /* harmony import */


      var _components_bulk_bulk_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/bulk/bulk.component */
      "oUUq");
      /* harmony import */


      var _queries_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./queries-routing.module */
      "dOwp");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../forms/forms-routing.module */
      "G6J4");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      "vTDv");
      /* harmony import */


      var _components_editors_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../@components/editors/file-uploader/file-uploader.module */
      "Gdc+");
      /* harmony import */


      var _components_individual_result_individual_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/individual-result/individual-result.component */
      "nIFw");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-file-drop */
      "gfTr");
      /* harmony import */


      var _api_additional_company_service_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./api/additional-company-service.api */
      "ZXWX");
      /* harmony import */


      var _services_additional_company_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/additional-company-service.service */
      "qgDp");
      /* harmony import */


      var _components_bulk_additionalservices_bulk_additionalservices_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/bulk-additionalservices/bulk-additionalservices.component */
      "5Zer");
      /* harmony import */


      var _components_query_detailedview_query_detailedview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/query-detailedview/query-detailedview.component */
      "wvU2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var components = [_queries_component__WEBPACK_IMPORTED_MODULE_1__["QueriesComponent"], _components_individual_individual_component__WEBPACK_IMPORTED_MODULE_2__["IndividualComponent"], _components_bulk_bulk_component__WEBPACK_IMPORTED_MODULE_3__["BulkComponent"], _components_individual_result_individual_result_component__WEBPACK_IMPORTED_MODULE_10__["IndividualResultComponent"], _components_bulk_additionalservices_bulk_additionalservices_component__WEBPACK_IMPORTED_MODULE_15__["BulkAdditionalservicesComponent"], _components_query_detailedview_query_detailedview_component__WEBPACK_IMPORTED_MODULE_16__["QueryDetailedviewComponent"]];

      var QueriesModule = /*#__PURE__*/_createClass(function QueriesModule() {
        _classCallCheck(this, QueriesModule);
      });

      QueriesModule.ɵfac = function QueriesModule_Factory(t) {
        return new (t || QueriesModule)();
      };

      QueriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: QueriesModule
      });
      QueriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        providers: [_api_additional_company_service_api__WEBPACK_IMPORTED_MODULE_13__["AdditionalCompanyServiceApi"], _services_additional_company_service_service__WEBPACK_IMPORTED_MODULE_14__["AdditionalCompanyServiceService"]],
        imports: [[ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__["Ng2SmartTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionModule"], _queries_routing_module__WEBPACK_IMPORTED_MODULE_4__["QueriesRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDatepickerModule"], _forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_6__["FormsRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _components_editors_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_9__["NbFileUploaderModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__["NgxFileDropModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](QueriesModule, {
          declarations: [_queries_component__WEBPACK_IMPORTED_MODULE_1__["QueriesComponent"], _components_individual_individual_component__WEBPACK_IMPORTED_MODULE_2__["IndividualComponent"], _components_bulk_bulk_component__WEBPACK_IMPORTED_MODULE_3__["BulkComponent"], _components_bulk_additionalservices_bulk_additionalservices_component__WEBPACK_IMPORTED_MODULE_15__["BulkAdditionalservicesComponent"], _components_query_detailedview_query_detailedview_component__WEBPACK_IMPORTED_MODULE_16__["QueryDetailedviewComponent"], _queries_component__WEBPACK_IMPORTED_MODULE_1__["QueriesComponent"], _components_individual_individual_component__WEBPACK_IMPORTED_MODULE_2__["IndividualComponent"], _components_bulk_bulk_component__WEBPACK_IMPORTED_MODULE_3__["BulkComponent"], _components_individual_result_individual_result_component__WEBPACK_IMPORTED_MODULE_10__["IndividualResultComponent"], _components_bulk_additionalservices_bulk_additionalservices_component__WEBPACK_IMPORTED_MODULE_15__["BulkAdditionalservicesComponent"], _components_query_detailedview_query_detailedview_component__WEBPACK_IMPORTED_MODULE_16__["QueryDetailedviewComponent"]],
          imports: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__["Ng2SmartTableModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAccordionModule"], _queries_routing_module__WEBPACK_IMPORTED_MODULE_4__["QueriesRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDatepickerModule"], _forms_forms_routing_module__WEBPACK_IMPORTED_MODULE_6__["FormsRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _components_editors_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_9__["NbFileUploaderModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__["NgxFileDropModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZXWX":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/queries/api/additional-company-service.api.ts ***!
      \*********************************************************************/

    /*! exports provided: AdditionalCompanyServiceApi */

    /***/
    function ZXWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdditionalCompanyServiceApi", function () {
        return AdditionalCompanyServiceApi;
      });
      /* harmony import */


      var _core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../@core/backend/common/api/http.service */
      "sZbP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdditionalCompanyServiceApi = /*#__PURE__*/function () {
        function AdditionalCompanyServiceApi(api) {
          _classCallCheck(this, AdditionalCompanyServiceApi);

          this.api = api;
          this.apiAdditionalCompanyServicesController = 'additional-services/companies';
        }

        _createClass(AdditionalCompanyServiceApi, [{
          key: "getAdditionalCompanyServices",
          value: function getAdditionalCompanyServices(companyId) {
            var endpoint = "".concat(this.apiAdditionalCompanyServicesController, "/").concat(companyId);
            return this.api.get(endpoint);
          }
        }, {
          key: "updateAdditionalCompanyServices",
          value: function updateAdditionalCompanyServices(companyId, data) {
            var endpoint = "".concat(this.apiAdditionalCompanyServicesController, "/").concat(companyId);
            return this.api.put(endpoint, data);
          }
        }]);

        return AdditionalCompanyServiceApi;
      }();

      AdditionalCompanyServiceApi.ɵfac = function AdditionalCompanyServiceApi_Factory(t) {
        return new (t || AdditionalCompanyServiceApi)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]));
      };

      AdditionalCompanyServiceApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AdditionalCompanyServiceApi,
        factory: AdditionalCompanyServiceApi.ɵfac
      });
      /***/
    },

    /***/
    "bTCu":
    /*!****************************************************!*\
      !*** ./src/app/pages/queries/queries.component.ts ***!
      \****************************************************/

    /*! exports provided: QueriesComponent */

    /***/
    function bTCu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueriesComponent", function () {
        return QueriesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var QueriesComponent = /*#__PURE__*/function () {
        function QueriesComponent() {
          _classCallCheck(this, QueriesComponent);
        }

        _createClass(QueriesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return QueriesComponent;
      }();

      QueriesComponent.ɵfac = function QueriesComponent_Factory(t) {
        return new (t || QueriesComponent)();
      };

      QueriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QueriesComponent,
        selectors: [["ngx-queries"]],
        decls: 1,
        vars: 0,
        template: function QueriesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVyaWVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "dOwp":
    /*!*********************************************************!*\
      !*** ./src/app/pages/queries/queries-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: QueriesRoutingModule, routedComponents */

    /***/
    function dOwp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueriesRoutingModule", function () {
        return QueriesRoutingModule;
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


      var _components_bulk_bulk_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/bulk/bulk.component */
      "oUUq");
      /* harmony import */


      var _components_individual_result_individual_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/individual-result/individual-result.component */
      "nIFw");
      /* harmony import */


      var _components_individual_individual_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/individual/individual.component */
      "yaJ5");
      /* harmony import */


      var _queries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./queries.component */
      "bTCu");
      /* harmony import */


      var _components_bulk_additionalservices_bulk_additionalservices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/bulk-additionalservices/bulk-additionalservices.component */
      "5Zer");
      /* harmony import */


      var _components_query_detailedview_query_detailedview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/query-detailedview/query-detailedview.component */
      "wvU2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _queries_component__WEBPACK_IMPORTED_MODULE_4__["QueriesComponent"],
        children: [{
          path: 'individual',
          component: _components_individual_individual_component__WEBPACK_IMPORTED_MODULE_3__["IndividualComponent"]
        }, {
          path: 'bulk',
          component: _components_bulk_bulk_component__WEBPACK_IMPORTED_MODULE_1__["BulkComponent"]
        }, {
          path: 'individual/result/:id',
          component: _components_individual_result_individual_result_component__WEBPACK_IMPORTED_MODULE_2__["IndividualResultComponent"]
        }, {
          path: 'bulk-additionalservices',
          component: _components_bulk_additionalservices_bulk_additionalservices_component__WEBPACK_IMPORTED_MODULE_5__["BulkAdditionalservicesComponent"]
        }]
      }];

      var QueriesRoutingModule = /*#__PURE__*/_createClass(function QueriesRoutingModule() {
        _classCallCheck(this, QueriesRoutingModule);
      });

      QueriesRoutingModule.ɵfac = function QueriesRoutingModule_Factory(t) {
        return new (t || QueriesRoutingModule)();
      };

      QueriesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: QueriesRoutingModule
      });
      QueriesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](QueriesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();

      var routedComponents = [_queries_component__WEBPACK_IMPORTED_MODULE_4__["QueriesComponent"], _components_individual_individual_component__WEBPACK_IMPORTED_MODULE_3__["IndividualComponent"], _components_bulk_bulk_component__WEBPACK_IMPORTED_MODULE_1__["BulkComponent"], _components_bulk_additionalservices_bulk_additionalservices_component__WEBPACK_IMPORTED_MODULE_5__["BulkAdditionalservicesComponent"], _components_query_detailedview_query_detailedview_component__WEBPACK_IMPORTED_MODULE_6__["QueryDetailedviewComponent"]];
      /***/
    },

    /***/
    "nIFw":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/queries/components/individual-result/individual-result.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: IndividualResultComponent */

    /***/
    function nIFw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndividualResultComponent", function () {
        return IndividualResultComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_backend_common_services_individualQuery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../@core/backend/common/services/individualQuery.service */
      "8xMH");
      /* harmony import */


      var _core_interfaces_common_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../@core/interfaces/common/users */
      "2NI8");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/Subject */
      "8yf6");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _components_editors_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../@components/editors/icon/icon.component */
      "VNFU");
      /* harmony import */


      var _query_detailedview_query_detailedview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../query-detailedview/query-detailedview.component */
      "wvU2");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function IndividualResultComponent_nb_accordion_item_107_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Resultado Procuraduria ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r0.procuraduriaHtml, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
        }
      }

      function IndividualResultComponent_nb_accordion_item_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Resultado Procuraduria ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.procuraduriaError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ng2-smart-table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Rama Judicial JEPMS (", ctx_r2.RamaJempsLists.count(), " Resultados) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx_r2.RamaJempsSettings)("source", ctx_r2.RamaJempsLists);
        }
      }

      function IndividualResultComponent_nb_accordion_item_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Rama Judicial JEPMS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r3.ramaJudicialJEMPSError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ng2-smart-table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Rama Judicial (", ctx_r4.RamaLists.count(), " Resultados) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx_r4.RamaSettings)("source", ctx_r4.RamaLists);
        }
      }

      function IndividualResultComponent_nb_accordion_item_112_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Rama Judicial ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r5.ramaJudicialError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_113_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Servicio Ejercito Nacional ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Tipo Reservista");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Lugar");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Direcci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.military == null ? null : ctx_r6.military.ResultName);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.military == null ? null : ctx_r6.military.StatusResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.military == null ? null : ctx_r6.military.PlaceResult);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.military == null ? null : ctx_r6.military.AddressResult);
        }
      }

      function IndividualResultComponent_nb_accordion_item_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Servicio Ejercito Nacional ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.militaryError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Servicio RUES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ng2-smart-table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx_r8.RuesSettings)("source", ctx_r8.RuesLists);
        }
      }

      function IndividualResultComponent_nb_accordion_item_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Servicio RUES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r9.ruesError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_117_tr_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](val_r30);
        }
      }

      function IndividualResultComponent_nb_accordion_item_117_tr_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var val_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](val_r31);
        }
      }

      function IndividualResultComponent_nb_accordion_item_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Servicio SuperSociedades ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Direcci\xF3n Judicial");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Ciudad Judicial");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Departamento Judicial");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Direcci\xF3n Domicilio");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Ciudad Domicilio");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "table", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Departamento Domicilio");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Correo Electr\xF3nico");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Nit");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "Raz\xF3n Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Expediente");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "table", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Sigla");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "Objeto Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Fecha Estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "table", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79, "Etapa Situaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, "Fecha Situaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83, "Fecha Etapa");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, "Causal");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](95);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "table", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100, "Junta Directiva Principal");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](102, IndividualResultComponent_nb_accordion_item_117_tr_102_Template, 3, 1, "tr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "table", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](107, "Junta Directiva Suplente");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](109, IndividualResultComponent_nb_accordion_item_117_tr_109_Template, 3, 1, "tr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "table", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114, "Contador");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116, "Revisor Fiscal");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](118, "Representante Legal");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](122);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](124);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.direccionJudicial);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.ciudadJudicial);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.departamentoJudicial);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.direccionDomicilio);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.ciudadDomicilio);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.departamentoDomicilio);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.correoElectronico);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.nit);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.razonSocial);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.expediente);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.sigla);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.objetoSocial);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.estado);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.fechaEstado);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.etapaSituacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.fechaSituacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.fechaEtapa);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.causal);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.juntaDirectivaPrincipal);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.juntaDirectivaSuplente);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.contador);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.revisorFiscal);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.superSocieties == null ? null : ctx_r10.superSocieties.representanteLegal);
        }
      }

      function IndividualResultComponent_nb_accordion_item_118_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Servicio SuperSociedades ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r11.tituloSuperSocieties);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r11.superSocietiesError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Servicio Defunciones Registraduria ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Vigencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r12.registryDeaths == null ? null : ctx_r12.registryDeaths.vigencia);
        }
      }

      function IndividualResultComponent_nb_accordion_item_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Servicio Defunciones Registraduria ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r13.registryDeathsError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ng2-smart-table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Consulta servicio SIMIT (", ctx_r14.SimitList.count(), " Resultados) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx_r14.SimitSettings)("source", ctx_r14.SimitList);
        }
      }

      function IndividualResultComponent_nb_accordion_item_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Consulta servicio SIMIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r15.tituloSimit);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r15.simitError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Consulta de Estado EPS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ng2-smart-table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx_r16.EpsSettings)("source", ctx_r16.EpsList);
        }
      }

      function IndividualResultComponent_nb_accordion_item_124_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Consulta de Estado EPS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r17.epsError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_125_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Consulta de Estado Permiso por Protecci\xF3n temporal (nacionales venezolanos) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Tipo identificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Identificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Correo");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Tel\xE9fono");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r18.Ppt == null ? null : ctx_r18.Ppt.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r18.Ppt == null ? null : ctx_r18.Ppt.IdentificationType);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r18.Ppt == null ? null : ctx_r18.Ppt.Identification);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r18.Ppt == null ? null : ctx_r18.Ppt.Correo);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r18.Ppt == null ? null : ctx_r18.Ppt.Telefono);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r18.Ppt == null ? null : ctx_r18.Ppt.Status);
        }
      }

      function IndividualResultComponent_nb_accordion_item_126_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Consulta de Estado Permiso por Protecci\xF3n temporal (nacionales venezolanos) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r19.pptError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_127_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Pasado Judicial ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Antecedente");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Tipo documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r20.criminalRecordEcuador == null ? null : ctx_r20.criminalRecordEcuador.criminalRecord);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r20.criminalRecordEcuador == null ? null : ctx_r20.criminalRecordEcuador.documentType);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r20.criminalRecordEcuador == null ? null : ctx_r20.criminalRecordEcuador.document);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r20.criminalRecordEcuador == null ? null : ctx_r20.criminalRecordEcuador.name);
        }
      }

      function IndividualResultComponent_nb_accordion_item_128_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Pasado Judicial ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r21.criminalRecordEcuadorError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_129_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ng2-smart-table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" informaci\xF3n Judicial (", ctx_r22.infoJudicialEcuadorList.count(), " Resultados) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx_r22.infoJudicialEcuadorSettings)("source", ctx_r22.infoJudicialEcuadorList);
        }
      }

      function IndividualResultComponent_nb_accordion_item_130_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " informaci\xF3n Judicial ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r23.infoJudicialEcuadorError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Sunat ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "N\xFAmero de RUC");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Tipo Contribuyente");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Nombre Comercial");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Fecha de Inscripci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Fecha de Inicio de Actividades");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Estado del Contribuyente");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Condici\xF3n del Contribuyente");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Domicilio Fiscal");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Sistema Emisi\xF3n de Comprobante");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Actividad Comercio Exterior");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Sistema Contabilidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Actividad(es) Econ\xF3mica(s)");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Comprobantes de Pago c/aut. de impresi\xF3n (F. 806 u 816)");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Sistema de Emisi\xF3n Electr\xF3nica");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Emisor electr\xF3nico desde");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Comprobantes Electr\xF3nicos");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Afiliado al PLE desde");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Padrones");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.no_ruc);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.tipo_cont);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.nombre_comercial);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.fecha_inscripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.fecha_inicio_actividades);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.estado);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.condicion);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.domicilio);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.sistema_emicion);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.actividad_comercio_exterior);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.sistema_contabilidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.actividades_economicas);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.comprobante_pago);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.sistema_emision_electronica);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.emision_electronica_desde);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.comprobantes_electronicos);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.afiliado_ple);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r24.sunat.data == null ? null : ctx_r24.sunat.data.padrones);
        }
      }

      function IndividualResultComponent_nb_accordion_item_132_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Sunat ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Error");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r25.sunatError);
        }
      }

      function IndividualResultComponent_nb_accordion_item_133_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Resultado Policia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r26.policeData, "");
        }
      }

      function IndividualResultComponent_nb_accordion_item_134_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r32.bmeErrorMessagge, "");
        }
      }

      function IndividualResultComponent_nb_accordion_item_134_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r33.bmeText, "");
        }
      }

      function IndividualResultComponent_nb_accordion_item_134_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r34.bmeNonComplianceText, "");
        }
      }

      function IndividualResultComponent_nb_accordion_item_134_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-accordion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-accordion-item-header", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Resultado Bme ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-accordion-item-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, IndividualResultComponent_nb_accordion_item_134_div_4_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, IndividualResultComponent_nb_accordion_item_134_div_5_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ng2-smart-table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, IndividualResultComponent_nb_accordion_item_134_div_7_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r27.hasBmeError);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r27.hasBmeError);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx_r27.bmeSettings)("source", ctx_r27.bmeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r27.hasBmeError);
        }
      }

      var _c0 = function _c0() {
        return ["/pages/queries/individual"];
      };

      var IndividualResultComponent = /*#__PURE__*/function () {
        function IndividualResultComponent(route, userData, individualQueryService, dialogService) {
          var _this7 = this;

          _classCallCheck(this, IndividualResultComponent);

          this.route = route;
          this.userData = userData;
          this.individualQueryService = individualQueryService;
          this.dialogService = dialogService;
          this.unsubscribe$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.messageError = 'El servicio no está disponible, por favor inténtelo más tarde';
          this.restrictiveLists = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.laftPenalLists = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.laftAdminLists = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.sanctionsAffectationLists = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.pepsLists = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.EpsList = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.ownLists = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.RamaJempsLists = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.RamaLists = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.RuesLists = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.SimitList = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.infoJudicialEcuadorList = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.bmeList = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["LocalDataSource"]();
          this.policeData = '';
          this.bmeErrorMessagge = '';
          this.bmeText = '';
          this.bmeNonComplianceText = '';
          this.settings = {
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              id: {
                title: 'Id',
                type: 'string',
                filter: false,
                hide: true
              },
              priorityResult: {
                title: 'Prioridad',
                type: 'string',
                filter: false
              },
              nameTypeDocument: {
                title: 'Tipo de documento',
                type: 'string',
                filter: false
              },
              document: {
                title: 'Documento',
                type: 'string',
                filter: false
              },
              name: {
                title: 'Nombre completo',
                type: 'string',
                filter: false
              },
              nameListType: {
                title: 'Nombre Tipo Lista',
                type: 'string',
                filter: false
              },
              kindPerson: {
                title: 'Tipo Persona',
                type: 'string',
                filter: false
              },
              alias: {
                title: 'Alias',
                type: 'string',
                filter: false
              },
              crime: {
                title: 'Cargo o Delito',
                type: 'string',
                filter: false,
                valuePrepareFunction: function valuePrepareFunction(val) {
                  return val.length > 150 ? val.substring(0, 150) + "..." : val;
                }
              },
              zone: {
                title: 'Zona',
                type: 'string',
                filter: false
              },
              moreInformation: {
                title: 'Otra Informacion',
                type: 'string',
                filter: false,
                valuePrepareFunction: function valuePrepareFunction(val) {
                  return val.length > 150 ? val.substring(0, 150) + "..." : val;
                }
              },
              justificacion: {
                title: 'Justificación',
                type: 'string',
                filter: false
              },
              ver: {
                title: 'Ver',
                type: 'custom',
                renderComponent: _components_editors_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"],
                filter: false,
                onComponentInitFunction: function onComponentInitFunction(instance) {
                  instance.iconClick.subscribe(function (rowData) {
                    _this7.onRowIconClick(rowData);
                  });
                }
              }
            }
          };
          this.ownListsSettings = {
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              id: {
                title: 'Id',
                type: 'string',
                filter: false,
                hide: true
              },
              documentTypedocumentType: {
                title: 'Tipo documento',
                type: 'string',
                filter: false
              },
              identification: {
                title: 'Documento',
                type: 'string',
                filter: false
              },
              name: {
                title: 'Nombre completo',
                type: 'string',
                filter: false
              },
              ownlistTypeName: {
                title: 'Lista',
                type: 'string',
                filter: false
              },
              source: {
                title: 'Fuente',
                type: 'string',
                filter: false
              },
              alias: {
                title: 'Alias',
                type: 'string',
                filter: false
              },
              crime: {
                title: 'Cargo o Delito',
                type: 'string',
                filter: false
              },
              zone: {
                title: 'Zona',
                type: 'string',
                filter: false
              },
              moreInformation: {
                title: 'Otra Informacion',
                type: 'string',
                filter: false
              },
              link: {
                title: 'link',
                type: 'string',
                filter: false
              }
            }
          };
          this.RamaJempsSettings = {
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              cityName: {
                title: 'Ciudad',
                type: 'string',
                filter: false
              },
              identificationNumberResult: {
                title: 'Identificacion',
                type: 'string',
                filter: false
              },
              nameResult: {
                title: 'Nombre completo',
                type: 'string',
                filter: false
              },
              // queryDate: {
              //     title: 'Fecha',
              //     type: 'string',
              //     filter: false,
              // },
              link: {
                title: 'Enlace',
                type: 'html',
                filter: false,
                valuePrepareFunction: function valuePrepareFunction(val) {
                  return "<a target=\"_blank\" href=\"".concat(val, "\">Ver</a>");
                }
              }
            }
          };
          this.RamaSettings = {
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              llaveProceso: {
                title: 'Número de Radicación',
                type: 'html',
                filter: false,
                valuePrepareFunction: function valuePrepareFunction(val) {
                  return "<a target=\"_blank\" href=\"https://consultaprocesos.ramajudicial.gov.co/Procesos/NumeroRadicacion\">".concat(val, "</a>");
                }
              },
              fechaProceso: {
                title: 'Fecha Proceso',
                type: 'string',
                filter: false
              },
              fechaUltimaActuacion: {
                title: 'fecha Ultima Actualización',
                type: 'string',
                filter: false
              },
              sujetosProcesales: {
                title: 'Sujetos Procesales',
                type: 'string',
                filter: false
              },
              despacho: {
                title: 'Despachos',
                type: 'string',
                filter: false
              },
              departamento: {
                title: 'Departamento',
                type: 'string',
                filter: false
              }
            }
          };
          this.RuesSettings = {
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              razonSocialONombre: {
                title: 'Razón Social',
                type: 'string',
                filter: false
              },
              nit: {
                title: 'Nit',
                type: 'string',
                filter: false
              },
              estado: {
                title: 'Estado',
                type: 'string',
                filter: false
              },
              municipio: {
                title: 'Municipio',
                type: 'string',
                filter: false
              },
              categoria: {
                title: 'Categoria',
                type: 'string',
                filter: false
              }
            }
          };
          this.SimitSettings = {
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              type: {
                title: 'Tipo',
                type: 'string',
                filter: false
              },
              notification: {
                title: 'Notificación',
                type: 'string',
                filter: false
              },
              plate: {
                title: 'Placa',
                type: 'string',
                filter: false
              },
              secretaryship: {
                title: 'Secretaría',
                type: 'string',
                filter: false
              },
              infringement: {
                title: 'Infracción',
                type: 'string',
                filter: false
              },
              state: {
                title: 'Estado',
                type: 'string',
                filter: false
              },
              amount: {
                title: 'Valor',
                type: 'string',
                filter: false
              },
              amountToPaid: {
                title: 'Valor a pagar',
                type: 'string',
                filter: false
              }
            }
          };
          this.EpsSettings = {
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              entity: {
                title: 'Entidad',
                type: 'string',
                filter: false
              },
              regime: {
                title: 'Regimen',
                type: 'string',
                filter: false
              },
              effectiveDate: {
                title: 'Fecha efectiva',
                type: 'string',
                filter: false
              },
              endDate: {
                title: 'Fecha Terminación',
                type: 'string',
                filter: false
              },
              affiliateType: {
                title: 'Tipo de afiliado',
                type: 'string',
                filter: false
              },
              state: {
                title: 'Estado',
                type: 'string',
                filter: false
              }
            }
          };
          this.bmeSettings = {
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              name_reported: {
                title: 'Nombre reportado',
                type: 'string',
                filter: false
              },
              no_obligation: {
                title: 'No. oblicación',
                type: 'string',
                filter: false
              },
              state: {
                title: 'Estado',
                type: 'string',
                filter: false
              },
              date: {
                title: 'Fecha',
                type: 'string',
                filter: false
              }
            }
          };
          this.infoJudicialEcuadorSettings = {
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              date: {
                title: 'Fecha',
                type: 'string',
                filter: false
              },
              nProccess: {
                title: 'No. proceso',
                type: 'string',
                filter: false
              },
              action: {
                title: 'Acción',
                type: 'string',
                filter: false
              }
            }
          };
        }

        _createClass(IndividualResultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.queryId = this.route.snapshot.params.id;
            this.individualQueryService.getQuery(this.queryId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
              _this8.idQueryCompany = data.query.idQueryCompany;
              _this8.name = data.name;
              _this8.document = data.document;
              _this8.heatMap = data.heatMap;
              _this8.nameUser = data.user.name + " " + data.user.lastName;
              _this8.user = data.user.login;
              _this8.dateQuery = data.query.createdAt;
              _this8.thirdType = data.thirdPartyType != null ? data.thirdPartyType.name : "";
              _this8.military = data === null || data === void 0 ? void 0 : data.military;
              _this8.hasProcuraduria = data.hasProcuraduria;
              _this8.hasPolice = data.hasPolice;
              _this8.hasBme = data.hasBme;
              _this8.hasRamaJudicialJEMPS = data.hasRamaJudicialJEMPS;
              _this8.hasSuperSocieties = data.hasSuperSocieties;
              _this8.hasRues = data.hasRues;
              _this8.hasMilitary = data.hasMilitary;
              _this8.hasRamaJudicial = data.hasRamaJudicial;
              _this8.hasRegistryDeaths = data.hasRegistryDeaths;
              _this8.hasSimit = data.hasSimit;
              _this8.hasEstadoEPS = data.hasEstadoEPS;
              _this8.hasEstadoPermiso = data.hasEstadoPermiso;
              _this8.hasInformacionJudicial = data.hasInformacionJudicial;
              _this8.hasAntecedentesCriminales = data.hasAntecedentesCriminales;
              _this8.hasSunat = data.hasSunat; // debugger;

              data.ownLists.forEach(function (element) {
                _this8.ownLists.prepend(element);
              });

              if (data.hasRamaJudicialJEMPS) {
                if (data.ramaJudicialJEMPS.hasError) {
                  _this8.hasRamaJudicialJEMPS = false;
                  _this8.hasRamaJudicialJEMPSError = true;
                  _this8.ramaJudicialJEMPSError = data.ramaJudicialJEMPS.errorMessage;
                } else {
                  data.ramaJudicialJEMPS.data.forEach(function (element) {
                    _this8.RamaJempsLists.prepend(element);
                  });
                }
              }

              if (data.hasRamaJudicial) {
                if (!data.ramaJudicial.hasError) {
                  data.ramaJudicial.data.forEach(function (element) {
                    _this8.RamaLists.prepend(element);
                  });
                } else {
                  _this8.hasRamaJudicial = false;
                  _this8.hasRamaJudicialError = true;
                  _this8.ramaJudicialError = data.ramaJudicial.errorMessage;
                }
              }

              if (data.hasSuperSocieties) {
                if (!data.superSocieties.hasError) {
                  if (data.superSocieties.data != undefined) {
                    _this8.superSocieties = data.superSocieties.data;
                  } else {
                    _this8.tituloSuperSocieties = 'Información';
                    _this8.hasSuperSocieties = false;
                    _this8.hasSuperSocietiesError = true;
                    _this8.superSocietiesError = data.superSocieties.errorMessage;
                  }
                } else {
                  _this8.tituloSuperSocieties = 'Error';
                  _this8.hasSuperSocieties = false;
                  _this8.hasSuperSocietiesError = true;
                  _this8.superSocietiesError = data.superSocieties.errorMessage;
                }
              }

              if (data.hasRues) {
                if (!data.rues.hasError) {
                  data.rues.listData.forEach(function (element) {
                    _this8.RuesLists.prepend(element);
                  }); // this.rues=data.rues.listData;
                } else {
                  _this8.hasRues = false;
                  _this8.hasRuesError = true;
                  _this8.ruesError = data.rues.errorMessage;
                }
              }

              data.lists.forEach(function (element) {
                element["MoreInformation"] = element["moreInformation"].length > 150 ? element["moreInformation"].substring(0, 150) + "..." : element["moreInformation"];

                switch (element["listGroupId"]) {
                  case 1:
                    _this8.restrictiveLists.prepend(element);

                    break;

                  case 2:
                    _this8.laftPenalLists.prepend(element);

                    break;

                  case 3:
                    _this8.laftAdminLists.prepend(element);

                    break;

                  case 4:
                  case 5:
                    _this8.sanctionsAffectationLists.prepend(element);

                    break;

                  case 6:
                  case 7:
                    _this8.pepsLists.prepend(element);

                    break;
                }
              });

              if (data.hasRegistryDeaths) {
                if (!data.registryDeaths.hasError) {
                  _this8.registryDeaths = data.registryDeaths.data;
                } else {
                  _this8.hasRegistryDeaths = false;
                  _this8.hasRegistryDeathsError = true;
                  _this8.registryDeathsError = data.registryDeaths.errorMessage;
                }
              }

              if (data.hasMilitary) {
                if (!data.military.hasError) {
                  if (data.military.data.error == '') {
                    _this8.military = data.military.data;
                  } else {
                    _this8.hasMilitary = false;
                    _this8.hasMilitaryError = true;
                    _this8.militaryError = data.military.data.error;
                  }
                } else {
                  _this8.hasMilitary = false;
                  _this8.hasMilitaryError = true;
                  _this8.militaryError = data.military.errorMessage;
                }
              }

              if (data.hasSimit) {
                if (!data.simit.hasError) {
                  if (data.simit.data.length > 0) {
                    _this8.simit = data.simit.data;
                    data.simit.data.forEach(function (element) {
                      _this8.SimitList.prepend(element);
                    });
                  } else {
                    _this8.tituloSimit = 'Información';
                    _this8.hasSimit = false;
                    _this8.hasSimitError = true;
                    _this8.simitError = data.simit.errorMessage;
                  }
                } else {
                  _this8.tituloSimit = 'Error';
                  _this8.hasSimit = false;
                  _this8.hasSimitError = true;
                  _this8.simitError = data.simit.errorMessage;
                }
              }

              if (data.hasEstadoEPS) {
                if (!data.eps.hasError) {
                  _this8.EpsList = data.eps.listData;
                } else {
                  _this8.hasEstadoEPS = false;
                  _this8.hasEstadoEPSError = true;
                  _this8.epsError = data.eps.errorMessage;
                }
              }

              if (data.hasEstadoPermiso) {
                if (!data.ppt.hasError) {
                  _this8.Ppt = data.ppt.data;
                } else {
                  _this8.hasEstadoPermiso = false;
                  _this8.hasEstadoPermisoError = true;
                  _this8.pptError = data.ppt.errorMessage;
                }
              }

              if (data.hasAntecedentesCriminales) {
                if (!data.criminalRecordEcuador.hasError) {
                  if (data.criminalRecordEcuador.data.document != '') {
                    _this8.criminalRecordEcuador = data.criminalRecordEcuador.data;
                  } else {
                    _this8.hasAntecedentesCriminales = false;
                    _this8.hasAntecedentesCriminalesError = true;
                    _this8.criminalRecordEcuadorError = data.criminalRecordEcuador.data.error;
                  }
                } else {
                  _this8.hasAntecedentesCriminales = false;
                  _this8.hasAntecedentesCriminalesError = true;
                  _this8.criminalRecordEcuadorError = data.criminalRecordEcuador.errorMessage;
                }
              }

              if (data.hasInformacionJudicial) {
                if (!data.infoJudicialEcuador.hasError) {
                  _this8.infoJudicialEcuador = data.infoJudicialEcuador.data;

                  _this8.infoJudicialEcuador.forEach(function (element) {
                    _this8.infoJudicialEcuadorList.prepend(element);
                  });
                } else {
                  _this8.hasInformacionJudicial = false;
                  _this8.hasInformacionJudicialError = true;
                  _this8.infoJudicialEcuadorError = data.infoJudicialEcuador.errorMessage;
                }
              }

              if (data.hasSunat) {
                if (!data.sunat.hasError) {
                  _this8.sunat = data.sunat;
                } else {
                  _this8.hasSunat = false;
                  _this8.hasSunatError = true;
                  _this8.sunatError = data.sunat.errorMessage;
                }
              }

              console.log(data);

              if (data.hasProcuraduria) {
                if (!data.procuraduria.hasError) {
                  if (data.procuraduria.data.errorMessage == undefined) {
                    // const htmlEntities = {
                    //     "&": "&amp;",
                    //     "<": "&lt;",
                    //     ">": "&gt;",
                    //     '"': "&quot;",
                    //     "'": "&apos;"
                    // };
                    _this8.procuraduriaHtml = _this8.decodeEntities(data.procuraduria.data.html_response);
                  } else {
                    _this8.hasProcuraduria = false;
                    _this8.hasProcuraduriaError = true;
                    _this8.procuraduriaError = data.procuraduria.data.errorMessage;
                  }
                } else {
                  _this8.hasProcuraduria = false;
                  _this8.hasProcuraduriaError = true;
                  _this8.procuraduriaError = _this8.messageError;
                }
              }

              if (data.hasPolice) {
                if (!data.police.hasError) {
                  _this8.policeData = data.police.data.message.text_result;
                } else {
                  _this8.policeData = data.police.errorMessage;
                }
              }

              if (data.hasBme) {
                _this8.hasBmeError = data.bme.hasError;

                if (!data.bme.hasError) {
                  _this8.bmeList = data.bme.data.bme_data;
                  _this8.bmeText = data.bme.data.bme_text;
                  _this8.bmeNonComplianceText = data.bme.data.incumplimiento_acuerdos;
                } else {
                  _this8.bmeErrorMessagge = data.bme.errorMessage;
                }
              }

              console.log(data);
              var obj = JSON.parse(_this8.heatMap);
              obj["transitions"] = false;
              $("#chart").kendoChart(obj);
            });
          }
        }, {
          key: "downloadPdf",
          value: function downloadPdf() {
            var _this9 = this;

            // debugger;
            this.individualQueryService.getIndividualQueryPdf(this.queryId).subscribe(function (response) {
              var filename = _this9.getFileName(response);

              var binaryData = [];
              binaryData.push(response.body);
              var downloadLink = document.createElement('a');
              downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {
                type: 'blob'
              }));
              downloadLink.setAttribute('download', filename);
              document.body.appendChild(downloadLink);
              downloadLink.click();
            });
          }
        }, {
          key: "getFileName",
          value: function getFileName(response) {
            var filename;

            try {
              var contentDisposition = response.headers.get('content-disposition');
              var r = /(?:filename=")(.+)(?:;")/;
              filename = r.exec(contentDisposition)[1];
            } catch (e) {
              filename = "consulta_individual_".concat(this.idQueryCompany, ".pdf");
            }

            return filename;
          }
        }, {
          key: "decodeEntities",
          value: function decodeEntities(str) {
            var element = document.createElement('div');

            if (str && typeof str === 'string') {
              str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
              str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
              element.innerHTML = str;
              str = element.textContent;
              element.textContent = '';
            }

            return str;
          }
        }, {
          key: "onSelect",
          value: function onSelect(data) {}
        }, {
          key: "onActivate",
          value: function onActivate(data) {}
        }, {
          key: "onDeactivate",
          value: function onDeactivate(data) {}
        }, {
          key: "onRowIconClick",
          value: function onRowIconClick(rowData) {
            console.log(rowData);
            this.dialogService.open(_query_detailedview_query_detailedview_component__WEBPACK_IMPORTED_MODULE_7__["QueryDetailedviewComponent"], {
              context: {
                detaileInfo: rowData
              },
              closeOnBackdropClick: false,
              // hasScroll: true, // Permite el desplazamiento vertical dentro de la modal
              hasBackdrop: true,
              autoFocus: false,
              closeOnEsc: true
            });
          }
        }]);

        return IndividualResultComponent;
      }();

      IndividualResultComponent.ɵfac = function IndividualResultComponent_Factory(t) {
        return new (t || IndividualResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_interfaces_common_users__WEBPACK_IMPORTED_MODULE_2__["UserData"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_backend_common_services_individualQuery_service__WEBPACK_IMPORTED_MODULE_1__["IndividualQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDialogService"]));
      };

      IndividualResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: IndividualResultComponent,
        selectors: [["ngx-individual-result"]],
        decls: 138,
        vars: 58,
        consts: [["rel", "stylesheet", "href", "https://kendo.cdn.telerik.com/2019.2.619/styles/kendo.common-material.min.css"], ["rel", "stylesheet", "href", "https://kendo.cdn.telerik.com/2019.2.619/styles/kendo.material.min.css"], ["rel", "stylesheet", "href", "https://kendo.cdn.telerik.com/2019.2.619/styles/kendo.material.mobile.min.css"], [1, "row"], [1, "col-md-12", "mb-3"], ["nbButton", "", "status", "primary", 1, "ml-2", 3, "routerLink"], [1, "col-md-12"], [1, "text-center"], [1, "d-flex", "justify-content-center"], [1, "row", "col-lg-8", "col-md-8", "col-sm-12"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "col-12", "d-flex", "justify-content-center", "report-tittle"], [1, "col-6", "d-flex", "justify-content-center", "report-subtittle"], [1, "col-6", "d-flex", "justify-content-center", "report-text"], [1, "col-lg-12", "col-md-12", "col-sm-12", "mt-3"], [1, "col-12", "mt-3", "mb-3"], [1, "card", "border", "h-100", "border-dark"], [1, "card-body"], ["id", "chart"], [1, "accordion-container", "col-12"], ["multi", ""], [2, "background-color", "#990000 !important", "color", "black", "-webkit-text-stroke-width", "0.1px", "-webkit-text-stroke-color", "black"], [1, "example-smart-table", 3, "settings", "source"], [2, "background-color", "#ff0000 !important", "color", "black", "-webkit-text-stroke-width", "0.1px", "-webkit-text-stroke-color", "black"], [2, "background-color", "#FCBF17 !important", "color", "black", "-webkit-text-stroke-width", "0.1px", "-webkit-text-stroke-color", "black"], [2, "background-color", "#008000 !important", "color", "black", "-webkit-text-stroke-width", "0.1px", "-webkit-text-stroke-color", "black"], [2, "background-color", "#284775 !important", "color", "black", "-webkit-text-stroke-width", "0.1px", "-webkit-text-stroke-color", "black"], [4, "ngIf"], [1, "col-12"], ["nbButton", "", "fullWidth", "", "size", "large", "status", "primary", 1, "ml-2", 3, "click"], [2, "background-color", "#767070 !important", "color", "black", "-webkit-text-stroke-width", "0.3px", "-webkit-text-stroke-color", "#000"], [3, "innerHTML"], [1, "table"], ["scope", "col", 2, "text-align", "center"], ["scope", "row", 2, "text-align", "center"], ["scope", "col"], ["scope", "row"], [1, "table", "table-bordered"], [1, "table", "mt-3", "table-bordered"], [4, "ngFor", "ngForOf"]],
        template: function IndividualResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "link", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "link", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Realizar nueva consulta");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "nb-card-header", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Informaci\xF3n Consulta");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Nombre de Usuario Consulta");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Usuario de Consulta");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Fecha y Hora de Consulta");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](42, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Datos Consultados");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Numero de identificaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "Tipo de Tercero");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](74, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "nb-accordion", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "nb-accordion-item-header", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](81, "ng2-smart-table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "nb-accordion-item-header", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](86, "ng2-smart-table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "nb-accordion-item-header", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](91, "ng2-smart-table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "nb-accordion-item-header", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](96, "ng2-smart-table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "nb-accordion-item-header", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](99);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](101, "ng2-smart-table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "nb-accordion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "nb-accordion-item-header", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "nb-accordion-item-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](106, "ng2-smart-table", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](107, IndividualResultComponent_nb_accordion_item_107_Template, 5, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](108, IndividualResultComponent_nb_accordion_item_108_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](109, IndividualResultComponent_nb_accordion_item_109_Template, 5, 3, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](110, IndividualResultComponent_nb_accordion_item_110_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](111, IndividualResultComponent_nb_accordion_item_111_Template, 5, 3, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](112, IndividualResultComponent_nb_accordion_item_112_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](113, IndividualResultComponent_nb_accordion_item_113_Template, 25, 4, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](114, IndividualResultComponent_nb_accordion_item_114_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](115, IndividualResultComponent_nb_accordion_item_115_Template, 5, 2, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](116, IndividualResultComponent_nb_accordion_item_116_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](117, IndividualResultComponent_nb_accordion_item_117_Template, 127, 23, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](118, IndividualResultComponent_nb_accordion_item_118_Template, 13, 2, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](119, IndividualResultComponent_nb_accordion_item_119_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](120, IndividualResultComponent_nb_accordion_item_120_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](121, IndividualResultComponent_nb_accordion_item_121_Template, 5, 3, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](122, IndividualResultComponent_nb_accordion_item_122_Template, 13, 2, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](123, IndividualResultComponent_nb_accordion_item_123_Template, 5, 2, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](124, IndividualResultComponent_nb_accordion_item_124_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](125, IndividualResultComponent_nb_accordion_item_125_Template, 33, 6, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](126, IndividualResultComponent_nb_accordion_item_126_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](127, IndividualResultComponent_nb_accordion_item_127_Template, 25, 4, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](128, IndividualResultComponent_nb_accordion_item_128_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](129, IndividualResultComponent_nb_accordion_item_129_Template, 5, 3, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](130, IndividualResultComponent_nb_accordion_item_130_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](131, IndividualResultComponent_nb_accordion_item_131_Template, 81, 18, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](132, IndividualResultComponent_nb_accordion_item_132_Template, 13, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](133, IndividualResultComponent_nb_accordion_item_133_Template, 6, 1, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](134, IndividualResultComponent_nb_accordion_item_134_Template, 8, 5, "nb-accordion-item", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function IndividualResultComponent_Template_button_click_136_listener() {
              return ctx.downloadPdf();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](137, "Descargar reporte");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](57, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Consulta No. ", ctx.idQueryCompany, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.nameUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](42, 54, ctx.dateQuery, "medium"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.document);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.thirdType);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Listas Restrictivas (", ctx.restrictiveLists.count(), " Resultados) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.restrictiveLists);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Listas Asociadas a LA/FT, Corrupci\xF3n u otros delitos (Penal) (", ctx.laftPenalLists.count(), " Resultados) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.laftPenalLists);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Listas Asociadas a LA/FT, Corrupci\xF3n u otros similares (Administrativo) (", ctx.laftAdminLists.count(), " Resultados) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.laftAdminLists);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Sanciones Administrativas y Listas de Afectaci\xF3n Financiera (", ctx.sanctionsAffectationLists.count(), " Resultados) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.sanctionsAffectationLists);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Listas Informativas y PEPS (", ctx.pepsLists.count(), " Resultados) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.pepsLists);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Listas Propias (", ctx.ownLists.count(), " Resultados) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx.ownListsSettings)("source", ctx.ownLists);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasProcuraduria);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasProcuraduriaError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasRamaJudicialJEMPS);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasRamaJudicialJEMPSError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasRamaJudicial);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasRamaJudicialError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasMilitary);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasMilitaryError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasRues);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasRuesError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasSuperSocieties);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasSuperSocietiesError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasRegistryDeaths);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasRegistryDeathsError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasSimit);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasSimitError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasEstadoEPS);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasEstadoEPSError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasEstadoPermiso);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasEstadoPermisoError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasAntecedentesCriminales);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasAntecedentesCriminalesError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasInformacionJudicial);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasInformacionJudicialError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasSunat);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasSunatError);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasPolice);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasBme);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAccordionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAccordionItemBodyComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        styles: ["#chart[_ngcontent-%COMP%] {\n  max-width: 650px;\n  margin: 35px auto;\n}\n\n.report-tittle[_ngcontent-%COMP%] {\n  background-color: #071448;\n  border-style: solid;\n  border-color: #787777;\n  border-width: thin;\n}\n\n.report-tittle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n}\n\n.report-subtittle[_ngcontent-%COMP%] {\n  background-color: #ffffff95;\n  border-style: solid;\n  border-color: black;\n  border-width: thin;\n  border-color: #787777;\n}\n\n.report-subtittle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #282828;\n  font-size: 14px;\n}\n\n.report-text[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-style: solid;\n  border-color: black;\n  border-color: #787777;\n  border-width: thin;\n}\n\n.report-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #282828;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGluZGl2aWR1YWwtcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFQTs7QUFESTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBR1I7O0FBQ0E7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBRFE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUdaOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUFRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFFWiIsImZpbGUiOiJpbmRpdmlkdWFsLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGFydCB7XHJcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xyXG4gICAgbWFyZ2luOiAzNXB4IGF1dG87XHJcbn1cclxuLnJlcG9ydC10aXR0bGV7XHJcbmJhY2tncm91bmQtY29sb3I6ICMwNzE0NDg7XHJcbmJvcmRlci1zdHlsZTogc29saWQ7XHJcbmJvcmRlci1jb2xvcjogcmdiKDEyMCwgMTE5LCAxMTkpO1xyXG5ib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICBwe1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZXBvcnQtc3VidGl0dGxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjk1O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigxMjAsIDExOSwgMTE5KTtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDQwLCA0MCwgNDApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5cclxuLnJlcG9ydC10ZXh0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTIwLCAxMTksIDExOSk7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "oUUq":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/queries/components/bulk/bulk.component.ts ***!
      \*****************************************************************/

    /*! exports provided: BulkComponent */

    /***/
    function oUUq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BulkComponent", function () {
        return BulkComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _models_bulkQueryResponseDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../models/bulkQueryResponseDTO */
      "6JcG");
      /* harmony import */


      var _services_bulkQuery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/bulkQuery.service */
      "/zEO");
      /* harmony import */


      var ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-file-drop */
      "gfTr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["divResult"];

      function BulkComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Arrastre el archivo aqu\xED o\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BulkComponent_ng_template_19_Template_a_click_4_listener() {
            var openFileSelector_r5 = ctx.openFileSelector;
            return openFileSelector_r5();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "SELECCIONE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " para cargarlo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function BulkComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.relativePath);
        }
      }

      function BulkComponent_nb_select_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-select", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function BulkComponent_nb_select_36_Template_nb_select_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.setPalabrasP4($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nb-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nb-option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nb-option", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nb-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nb-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nb-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return {
          type: "zoom"
        };
      };

      var _c2 = function _c2(a0) {
        return {
          animation: a0
        };
      };

      function BulkComponent_div_98_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BulkComponent_div_98_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.exportExcel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "nb-icon", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Descargar Excel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BulkComponent_div_98_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.exportPdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "nb-icon", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Descargar PDF ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ng2-smart-table", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Resultados de la consulta no. ", ctx_r4.queryCompanyId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx_r4.settings)("source", ctx_r4.source);
        }
      }

      var BulkComponent = /*#__PURE__*/function () {
        function BulkComponent(_BulkQueryService, toastrService) {
          _classCallCheck(this, BulkComponent);

          this._BulkQueryService = _BulkQueryService;
          this.toastrService = toastrService;
          this.hasProcuraduria = false;
          this.loadingQuery = false;
          this.hasJemps = false;
          this.hasFile = false;
          this.hasRamaJudicial = false;
          this.hasP4 = false;
          this.queryFinished = false;
          this.NWords = 0;
          this.nQuery = 0;
          this.queryCompanyId = 0;
          this.data = new _models_bulkQueryResponseDTO__WEBPACK_IMPORTED_MODULE_4__["BulkQueryResponseDTO"]();
          this.types = ['primary', 'success', 'info', 'warning', 'danger'];
          this.index = 1;
          this.settings = {
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
            actions: {
              add: false,
              edit: false,
              "delete": false
            },
            columns: {
              listGroupId: {
                title: 'Grupo',
                type: 'number'
              },
              priorityResult: {
                title: 'Prioridad',
                type: 'string'
              },
              nameQuery: {
                title: 'Nombre Consultado',
                type: 'string'
              },
              identificationQuery: {
                title: 'Identificacion Consultada',
                type: 'string'
              },
              name: {
                title: 'Nombre Coincidencia',
                type: 'string'
              },
              document: {
                title: 'Identificación Coincidencia',
                type: 'string'
              },
              nameListType: {
                title: 'Lista',
                type: 'string'
              },
              crime: {
                title: 'Delito, cargo o resultado de consulta',
                type: 'string'
              },
              zone: {
                title: 'Delito, cargo o resultado de consulta',
                type: 'string'
              }
            }
          };
          this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"](); //#region  Metodos Firedrop

          this.files = [];
          this.filesSA = [];
        }

        _createClass(BulkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dropped",
          value: function dropped(files) {
            var _this10 = this;

            // this.files = files;
            try {
              this.files = files;
              this.loadingQuery = true; // Enforce only 1 file at a time!

              if (files.length > 1) {
                throw new Error('¡Solo se puede procesar un archivo a la vez!');
                this.hasFile = false;
              }

              var _iterator2 = _createForOfIteratorHelper(files),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var droppedFile = _step2.value;

                  // Is it a file?
                  if (droppedFile.fileEntry.isFile) {
                    var fileEntry = droppedFile.fileEntry;
                    fileEntry.file(function (file) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              // Here you can access the real file
                              console.log(droppedFile.relativePath, file);
                              _context.prev = 1;

                              if (this.isValidFile(file)) {
                                _context.next = 6;
                                break;
                              }

                              this.loadingQuery = false;
                              this.hasFile = false;
                              throw new Error('Formato de archivo invalido, solo se permite .xlsx');

                            case 6:
                              this.loadingQuery = false;
                              this.hasFile = true;
                              _context.next = 16;
                              break;

                            case 10:
                              _context.prev = 10;
                              _context.t0 = _context["catch"](1);
                              this.files = null;
                              this.hasFile = false;
                              this.loadingQuery = false;
                              this.showToast("Error", _context.t0.message, 4, false);

                            case 16:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee, this, [[1, 10]]);
                      }));
                    });
                  }
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } catch (err) {
              this.files = null; // clear files

              this.loadingQuery = false;
              this.hasFile = false;
              this.showToast("Error", err.message, 4, false);
            }
          }
        }, {
          key: "isValidFile",
          value: function isValidFile(file) {
            // enforce a "." being contained in the file name
            if (!(file === null || file === void 0 ? void 0 : file.name.includes('.'))) {
              return false;
            } // There should be a total of 2 strings, with a period in between in my case


            var names = file === null || file === void 0 ? void 0 : file.name.split('.');

            if (names.length < 2) {
              return false;
            }

            var ext = names[names.length - 1];

            if (ext !== 'xlsx') {
              return false;
            }

            return true;
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
          }
        }, {
          key: "droppedSA",
          value: function droppedSA(filesSA) {
            this.filesSA = filesSA;
          }
        }, {
          key: "fileOverSA",
          value: function fileOverSA(event) {
            console.log(event);
          }
        }, {
          key: "fileLeaveSA",
          value: function fileLeaveSA(event) {
            console.log(event);
          } //#endregion

        }, {
          key: "BulkQuery",
          value: function BulkQuery() {
            var _this11 = this;

            var _iterator3 = _createForOfIteratorHelper(this.files),
                _step3;

            try {
              var _loop3 = function _loop3() // Is it a file?
              {
                var droppedFile = _step3.value;

                if (droppedFile.fileEntry.isFile) {
                  _this11.loadingQuery = true;
                  _this11.queryFinished = false;
                  var fileEntry = droppedFile.fileEntry;
                  fileEntry.file(function (file) {
                    console.log(droppedFile.relativePath, file);

                    _this11.DoBulkQuery(file, droppedFile.relativePath);
                  });
                } else {
                  _this11.loadingQuery = false; // It was a directory (empty directories are added, otherwise only files)

                  var _fileEntry2 = droppedFile.fileEntry;
                  console.log(droppedFile.relativePath, _fileEntry2);

                  _this11.showToast("Error", "Error al procesar solicitud, vuelva a intentar", 4, false);
                }
              };

              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                _loop3();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "BulkQuerySA",
          value: function BulkQuerySA() {
            var _this12 = this;

            var _iterator4 = _createForOfIteratorHelper(this.filesSA),
                _step4;

            try {
              var _loop4 = function _loop4() // Is it a file?
              {
                var droppedFile = _step4.value;

                if (droppedFile.fileEntry.isFile) {
                  var fileEntry = droppedFile.fileEntry;
                  fileEntry.file(function (file) {
                    console.log(droppedFile.relativePath, file);

                    _this12.DoBulkQuerySA(file, droppedFile.relativePath);
                  });
                } else {
                  // It was a directory (empty directories are added, otherwise only files)
                  var _fileEntry3 = droppedFile.fileEntry;
                  console.log(droppedFile.relativePath, _fileEntry3);
                }
              };

              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                _loop4();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }, {
          key: "exportExcel",
          value: function exportExcel() {
            var _this13 = this;

            if (this.nQuery != 0) {
              this._BulkQueryService.exportExcel(this.nQuery).subscribe(function (response) {
                var filename = _this13.getFileName(response, '.xlsx');

                var binaryData = [];
                binaryData.push(response.body);
                var downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {
                  type: 'blob'
                }));
                downloadLink.setAttribute('download', filename);
                document.body.appendChild(downloadLink);
                downloadLink.click();
              });
            }
          }
        }, {
          key: "exportPdf",
          value: function exportPdf() {
            var _this14 = this;

            if (this.nQuery != 0) {
              this._BulkQueryService.exportPDF(this.nQuery).subscribe(function (response) {
                var filename = _this14.getFileName(response, '.pdf');

                var binaryData = [];
                binaryData.push(response.body);
                var downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {
                  type: 'blob'
                }));
                downloadLink.setAttribute('download', filename);
                document.body.appendChild(downloadLink);
                downloadLink.click();
              });
            }
          }
        }, {
          key: "getFileName",
          value: function getFileName(response, extension) {
            var filename;

            try {
              var contentDisposition = response.headers.get('content-disposition');
              var r = /(?:filename=")(.+)(?:;")/;
              filename = r.exec(contentDisposition)[1];
            } catch (e) {
              filename = "Masiva".concat(this.queryCompanyId).concat(extension);
            }

            return filename;
          } //#region Servicios

        }, {
          key: "setHasRamaProcuraduria",
          value: function setHasRamaProcuraduria(checked) {
            console.log('checked', checked.target.checked);
            this.hasProcuraduria = checked.target.checked; // your variable
          }
        }, {
          key: "setHasRamaJudicialJemps",
          value: function setHasRamaJudicialJemps(checked) {
            console.log('checked', checked.target.checked);
            this.hasJemps = checked.target.checked; // your variable
          }
        }, {
          key: "setHasRamaJudicial",
          value: function setHasRamaJudicial(checked) {
            console.log('checked', checked.target.checked);
            this.hasRamaJudicial = checked.target.checked; // your variable
          }
        }, {
          key: "setPalabrasP4",
          value: function setPalabrasP4(value) {
            this.NWords = value; // your variable
          }
        }, {
          key: "setPrioridad4Status",
          value: function setPrioridad4Status(checked) {
            console.log('checked', checked.target.checked);
            this.hasP4 = checked.target.checked;
            this.NWords = 0; // your variable
          } //#region Get

        }, {
          key: "aBulkQuery",
          value: function aBulkQuery() {// this._BulkQueryService.getCompanyLogo().subscribe((response:CompanyDTO) =>{
            //   response.image || response.image != null ? this.imageSrc = response.image : this.imageSrc = "https://icon-library.com/images/not-found-icon/not-found-icon-6.jpg"
            //   this.companyDTO = response
            // })
          } //endregion
          //#region Post

        }, {
          key: "DoBulkQuery",
          value: function DoBulkQuery(file, relativePath) {
            var _this15 = this;

            var formData = new FormData();
            formData.append('file', file, relativePath);
            formData.append('NWords', String(this.NWords));
            console.log(formData);

            this._BulkQueryService.BulkQuery(formData).subscribe(function (response) {
              _this15.data = response;
              _this15.nQuery = _this15.data.query.id;
              _this15.queryCompanyId = _this15.data.query.idQueryCompany; // console.log(this.data.lists);

              _this15.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"](_this15.data.lists); // console.log(this.settings);

              _this15.loadingQuery = false;

              _this15.showToast("Exitoso", "Consulta finalizada", 1, false);

              _this15.queryFinished = true;
              setTimeout(function () {
                _this15.divResult.nativeElement.focus();
              }, 15000);
            }, function (error) {
              _this15.loadingQuery = false;
              _this15.queryFinished = false;

              if (error.status === 400) {
                console.log(error.error); // Muestra el mensaje de error en la consola                    

                _this15.showToast("Error", error.error, 4, false);
              } else {
                _this15.showToast("Error", error.error.error, 4, false);

                console.log("e", error);
              }
            });
          }
        }, {
          key: "DoBulkQuerySA",
          value: function DoBulkQuerySA(file, relativePath) {
            var _this16 = this;

            var formData = new FormData();
            formData.append('file', file, relativePath);
            formData.append('hasProcuraduria', String(this.hasProcuraduria));
            formData.append('hasRamaJudicialJEMPSv', String(this.hasJemps));
            formData.append('hasRamaJudicial', String(this.hasRamaJudicial));
            console.log(formData);

            this._BulkQueryService.BulkQuerySA(formData).subscribe(function (response) {
              _this16.data = response;
              _this16.nQuery = _this16.data.query.id;
              _this16.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"](_this16.data.lists);
              console.log(_this16.settings);
            });
          }
        }, {
          key: "showToast",
          value: function showToast(tittle, mesage, type, hasIcon) {
            var icon = hasIcon ? {} : {
              icon: ''
            };
            var position = _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbGlobalPhysicalPosition"].TOP_RIGHT;
            var config = Object.assign({
              status: this.types[type],
              destroyByClick: true,
              duration: 3000,
              position: position,
              preventDuplicates: false
            }, icon);
            this.index += 1;
            this.toastrService.show(mesage, tittle, config);
          }
        }]);

        return BulkComponent;
      }();

      BulkComponent.ɵfac = function BulkComponent_Factory(t) {
        return new (t || BulkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bulkQuery_service__WEBPACK_IMPORTED_MODULE_5__["BulkQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]));
      };

      BulkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BulkComponent,
        selectors: [["ngx-bulk"]],
        viewQuery: function BulkComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.divResult = _t.first);
          }
        },
        decls: 99,
        vars: 6,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "font-row"], ["nbButton", "", "status", "success", "shape", "round", "size", "small"], ["href", "assets\\excel\\PlantillaConsultaMasiva.xlsx", "target", "_blank", "download", "PlantillaConsultaMasiva.xlsx", 1, "btnNavega"], ["icon", "file-text-outline"], [1, "col-lg-8"], [1, "text-center"], [1, "col-sm-12"], [1, "form-group"], ["accept", ".xlsx", "dropZoneLabel", "Drop files here", 3, "multiple", "onFileDrop", "onFileOver", "onFileLeave"], ["ngx-file-drop-content-tmp", ""], [1, "upload-table"], [1, "table"], [1, "upload-name-style"], [4, "ngFor", "ngForOf"], [1, "header"], [1, "name", "bold"], ["size", "2px", "color", "black"], [1, "col-6"], ["status", "basic", "labelPosition", "start", "fullwidth", "", 3, "change"], ["placeholder", "Palabras adicionales", "fullWidth", "", 3, "selectedChange", 4, "ngIf"], ["type", "submit", "hero", "", "status", "primary", "fullWidth", "", "nbButton", "", 3, "nbSpinner", "disabled", "click"], ["tabindex", "0", 1, "col-12", "mt-5", "justify-content-center"], ["divResult", ""], [1, "col-lg-4", "col-md-12", "col-sm-12"], ["bgcolor", "#990000"], ["align", "center"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Relaciona a las personas (naturales o jur\xEDdicas) o bienes con reporte en Listas Restrictivas, vinculantes o no. Por ejemplo, Lista OFAC (clinton) o listas del Consejo de Seguridad de Naciones Unidas (ONU). Se recomienda no tener v\xEDnculos con estos terceros.", 2, "display", "inline-block", "color", "White", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#FF0000"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Relaciona a las personas (naturales o jur\xEDdicas) o bienes que en forma alguna se encuentran relacionados con actividades delictivas bien sea Lavado de Activos (y sus delitos fuente), Financiaci\xF3n del Terrorismo, Corrupci\xF3n u otros delitos. As\xED mismo informaci\xF3n asociada a etapas de los procesos penales (capturas, decomisos, comiso, etc) y temas referidos a Extinci\xF3n o P\xE9rdida de Dominio. ", 2, "display", "inline-block", "color", "White", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#FF9900"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Relaciona a las personas (naturales o jur\xEDdicas) o bienes que en forma alguna se encuentran relacionados con actividades administrativas asociadas a Lavado de Activos (y sus delitos fuente), Financiaci\xF3n del Terrorismo, Corrupci\xF3n u otras conductas administrativas relevantes.", 2, "display", "inline-block", "color", "White", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#FFFF00"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Relaciona a las personas (naturales o jur\xEDdicas) o bienes que en forma alguna se encuentran relacionados con otras actividades administrativas (p.e. multas, inhabilidades, etc) as\xED como informaci\xF3n financiera (p.e. concordatos, liquidaci\xF3n, etc) no directamente asociadas a LA/FT o Corrupci\xF3n pero relevantes para la gesti\xF3n de riesgos.", 2, "display", "inline-block", "color", "#FF9900", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#008000"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Contiene datos asociados a personas (naturales o jur\xEDdicas) o bienes con car\xE1cter informativo (p.e. registros autorizados, sectores, cargos, personas expuestas pol\xEDtica o p\xFAblicamente, entidades sin \xE1nimo de lucro, etc).", 2, "display", "inline-block", "color", "White", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#bce8c1"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Contiene datos asociados a personas (naturales o jur\xEDdicas) o bienes en general que son de car\xE1cter informativo (p.e. registros autorizados, sectores, cargos, entidades sin \xE1nimo de lucro, etc). En general es informaci\xF3n que sirve para orientar la toma de decisiones pero no tiene connotaci\xF3n positiva/negativa.", 2, "display", "inline-block", "color", "Black", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#284775"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Contiene datos asociados a personas (naturales o jur\xEDdicas) o bienes que se administran y categorizan por nuestros clientes generando los procedimientos o respuestas que se definan internamente.", 2, "display", "inline-block", "color", "White", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#ffffff", 2, "border-left", "3px solid", "border-left-color", "coral"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Coincidencias en el n\xFAmero de identificaci\xF3n exacto y nombre que contenga la b\xFAsqueda", 2, "display", "inline-block", "color", "rgb(0, 0, 0)", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#ffffff"], ["align", "center", 2, "border-left", "3px solid", "border-left-color", "darkorange"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Coincidencias \xFAnicamente en el n\xFAmero de identificaci\xF3n exacto", 2, "display", "inline-block", "color", "rgb(0, 0, 0)", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#ffffff", 2, "border-left", "3px solid", "border-left-color", "yellow"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Coincidencias exactas \xFAnicamente en el nombre", 2, "display", "inline-block", "color", "rgb(0, 0, 0)", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Coincidencias \xFAnicamente en el nombre, con una determinada cantidad de palabras de precisi\xF3n", 2, "display", "inline-block", "color", "rgb(0, 0, 0)", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], [4, "ngIf"], [1, "btnNavega", 3, "click"], ["placeholder", "Palabras adicionales", "fullWidth", "", 3, "selectedChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["status", "success", "nbButton", "", "nbSuffix", "", 1, "align-self-center", 3, "click"], ["icon", "file-outline", 3, "options"], ["status", "danger", "nbButton", "", "nbSuffix", "", 1, "align-self-center", "ml-3", 3, "click"], ["icon", "file-text-outline", 3, "options"], [1, "example-smart-table", 3, "settings", "source"]],
        template: function BulkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Descargue la plantilla para hacer la consulta dando clic en el siguiente boton ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Descargar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nb-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nb-card-header", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "CONSULTA MASIVA ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ngx-file-drop", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFileDrop", function BulkComponent_Template_ngx_file_drop_onFileDrop_18_listener($event) {
              return ctx.dropped($event);
            })("onFileOver", function BulkComponent_Template_ngx_file_drop_onFileOver_18_listener($event) {
              return ctx.fileOver($event);
            })("onFileLeave", function BulkComponent_Template_ngx_file_drop_onFileLeave_18_listener($event) {
              return ctx.fileLeave($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, BulkComponent_ng_template_19_Template, 9, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tbody", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, BulkComponent_tr_23_Template, 4, 1, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "HABILITAR OTROS SERVICIOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nb-toggle", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BulkComponent_Template_nb_toggle_change_32_listener($event) {
              return ctx.setPrioridad4Status($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Consulta por prioridad 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, BulkComponent_nb_select_36_Template, 19, 0, "nb-select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BulkComponent_Template_button_click_37_listener() {
              return ctx.BulkQuery();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "VALIDAR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Tipos de listas");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Listas Restrictivas");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Listas Asociadas a LA/FT, Corrupci\xF3n u otros delitos (Penal)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tr", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Listas Asociadas a LA/FT, Corrupci\xF3n u otros similares (Administrativo)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "tr", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Sanciones Administrativas y Listas de Afectaci\xF3n Financiera");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tr", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Listas PEPS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Listas Informativas");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "tr", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Listas Propias");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Prioridades");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "tr", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Prioridad 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "tr", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Prioridad 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "tr", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Prioridad 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "tr", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Prioridad 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, BulkComponent_div_98_Template, 15, 11, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasP4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbSpinner", ctx.loadingQuery)("disabled", !ctx.hasFile || ctx.loadingQuery);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.queryFinished);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__["NgxFileDropComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__["NgxFileDropContentTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToggleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbOptionComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableComponent"]],
        styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.btnNavega[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-decoration: none;\n  color: #0782d0;\n}\n.filedropecs[_ngcontent-%COMP%] {\n  height: 10px;\n}\n.btnNavega[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGJ1bGsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQU1BO0VBQ0ksbUJBQUE7QUFBSjtBQUdBO0VBQ0ksT0FBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtBQUFKO0FBR0E7RUFDSSxpQkFBQTtBQUFKO0FBR0E7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0E7RUFDSSxZQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7QUFBSiIsImZpbGUiOiJidWxrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIENvcHlyaWdodCAoYykgQWt2ZW8gMjAxOS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNpbmdsZSBBcHBsaWNhdGlvbiAvIE11bHRpIEFwcGxpY2F0aW9uIExpY2Vuc2UuXHJcbiAqIFNlZSBMSUNFTlNFX1NJTkdMRV9BUFAgLyBMSUNFTlNFX01VTFRJX0FQUCBpbiB0aGUgJ2RvY3MnIGZvbGRlciBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbiBvbiB0eXBlIG9mIHB1cmNoYXNlZCBsaWNlbnNlLlxyXG4gKi9cclxuXHJcbm5iLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmU+KiB7XHJcbiAgICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xyXG59XHJcblxyXG5uYi1jYXJkLmlubGluZS1mb3JtLWNhcmQgbmItY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4uYnRuTmF2ZWdhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMwNzgyZDA7XHJcbn1cclxuXHJcbi5maWxlZHJvcGVjcyB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG5OYXZlZ2E6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "qgDp":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/queries/services/additional-company-service.service.ts ***!
      \******************************************************************************/

    /*! exports provided: AdditionalCompanyServiceService */

    /***/
    function qgDp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdditionalCompanyServiceService", function () {
        return AdditionalCompanyServiceService;
      });
      /* harmony import */


      var _api_additional_company_service_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../api/additional-company-service.api */
      "ZXWX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdditionalCompanyServiceService = /*#__PURE__*/function () {
        function AdditionalCompanyServiceService(api) {
          _classCallCheck(this, AdditionalCompanyServiceService);

          this.api = api;
        }

        _createClass(AdditionalCompanyServiceService, [{
          key: "getAdditionalCompanyServices",
          value: function getAdditionalCompanyServices(companyId) {
            return this.api.getAdditionalCompanyServices(companyId);
          }
        }, {
          key: "updateAdditionalCompanyServices",
          value: function updateAdditionalCompanyServices(companyId, data) {
            return this.api.updateAdditionalCompanyServices(companyId, data);
          }
        }]);

        return AdditionalCompanyServiceService;
      }();

      AdditionalCompanyServiceService.ɵfac = function AdditionalCompanyServiceService_Factory(t) {
        return new (t || AdditionalCompanyServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_additional_company_service_api__WEBPACK_IMPORTED_MODULE_0__["AdditionalCompanyServiceApi"]));
      };

      AdditionalCompanyServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AdditionalCompanyServiceService,
        factory: AdditionalCompanyServiceService.ɵfac
      });
      /***/
    },

    /***/
    "wvU2":
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/queries/components/query-detailedview/query-detailedview.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: QueryDetailedviewComponent */

    /***/
    function wvU2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueryDetailedviewComponent", function () {
        return QueryDetailedviewComponent;
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

      var _c0 = ["imageElement"];

      function QueryDetailedviewComponent_ng_container_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Periodo desde:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Periodo hasta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Entidad/empresa:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Justificaci\xF3n cambio:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx_r1.detaileInfo.startDate), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx_r1.detaileInfo.endDate), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.detaileInfo.entity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.detaileInfo.summary, "");
        }
      }

      var QueryDetailedviewComponent = /*#__PURE__*/function () {
        function QueryDetailedviewComponent(dialogRef) {
          _classCallCheck(this, QueryDetailedviewComponent);

          this.dialogRef = dialogRef;
        }

        _createClass(QueryDetailedviewComponent, [{
          key: "closeModal",
          value: function closeModal() {
            this.dialogRef.close();
          }
        }, {
          key: "toggleImageSize",
          value: function toggleImageSize() {
            var imageElement = document.querySelector('.left-card');

            if (imageElement) {
              imageElement.classList.toggle('fullscreen-image');
            }
          }
        }]);

        return QueryDetailedviewComponent;
      }();

      QueryDetailedviewComponent.ɵfac = function QueryDetailedviewComponent_Factory(t) {
        return new (t || QueryDetailedviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"]));
      };

      QueryDetailedviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QueryDetailedviewComponent,
        selectors: [["ngx-query-detailedview"]],
        viewQuery: function QueryDetailedviewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageElement = _t.first);
          }
        },
        decls: 76,
        vars: 22,
        consts: [[1, "custom-modal-container"], ["nbButton", "", "size", "tiny", 3, "click"], [1, "detalle-titulo"], [1, "cards-container"], [1, "left-card"], ["cardElement", ""], ["alt", "Imagen", 3, "src", "click"], [1, "right-card"], ["target", "_blank", 3, "href"], [4, "ngIf"]],
        template: function QueryDetailedviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QueryDetailedviewComponent_Template_button_click_1_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Detalle del registro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QueryDetailedviewComponent_Template_img_click_9_listener() {
              return ctx.toggleImageSize();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fecha registro:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Fecha actualizaci\xF3n:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Tipo de documento:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Documento:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Nombre completo:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lista:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Luente consulta:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Tipo persona:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Alias:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Delito:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Peps:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Zona:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Link:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Otra informaci\xF3n:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Estado:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, QueryDetailedviewComponent_ng_container_75_Template, 19, 8, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.detaileInfo.urlImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 18, ctx.detaileInfo.createdAt), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 20, ctx.detaileInfo.updatedAt), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.nameTypeDocument, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.document, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.nameListType, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.source, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.kindPerson, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.alias, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.crime, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.peps, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.zone, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.detaileInfo.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.link, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.moreInformation, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detaileInfo.status, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detaileInfo.peps !== "");
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: ["@charset \"UTF-8\";\nnb-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  max-height: 44.25rem;\n}\n.custom-modal-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  max-height: 90vh;\n  \n  max-width: 120vw;\n  \n  overflow-y: auto;\n}\n\n.cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  \n  justify-content: space-between;\n  \n}\n\n.left-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.left-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  \n  width: 200px;\n  height: 200px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.right-card[_ngcontent-%COMP%] {\n  font-size: 12px;\n  \n}\n\n.fullscreen-image[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  cursor: pointer;\n}\n.fullscreen-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHF1ZXJ5LWRldGFpbGVkdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFFQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUFrQix5REFBQTtFQUNsQixnQkFBQTtFQUFrQixzREFBQTtFQUNsQixnQkFBQTtBQUdKO0FBQUEsNENBQUE7QUFDQTtFQUNJLGFBQUE7RUFBZSw0REFBQTtFQUNmLDhCQUFBO0VBQWdDLDJEQUFBO0FBS3BDO0FBRkUsbUNBQUE7QUFDRjtFQUNJLGtCQUFBO0FBS0o7QUFGQTtFQUNJLHNFQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFLSjtBQUZFLGlDQUFBO0FBQ0Y7RUFDSSxlQUFBO0VBQWlCLDJDQUFBO0FBTXJCO0FBSEEsa0VBQUE7QUFDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBTUo7QUFIQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBTUoiLCJmaWxlIjoicXVlcnktZGV0YWlsZWR2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xubmItY2FyZCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1heC1oZWlnaHQ6IDQ0LjI1cmVtO1xufVxuXG4uY3VzdG9tLW1vZGFsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIC8qIFRhbWHDsW8gbcOheGltbyBkZSBsYSBtb2RhbCAoODAlIGRlIGxhIGFsdHVyYSB2aXNpYmxlKSAqL1xuICBtYXgtd2lkdGg6IDEyMHZ3O1xuICAvKiBUYW1hw7FvIG3DoXhpbW8gZGUgbGEgbW9kYWwgKDkwJSBkZWwgYW5jaG8gdmlzaWJsZSkgKi9cbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLyogRXN0aWxvcyBwYXJhIGVsIGNvbnRlbmVkb3IgZGUgbGFzIGNhcmRzICovXG4uY2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogVXRpbGl6YW1vcyBmbGV4Ym94IHBhcmEgb3JnYW5pemFyIGxhcyBjYXJkcyBlbiB1bmEgZmlsYSAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIEVzcGFjaW8gZW50cmUgbGFzIGNhcmRzIHBhcmEgY29sb2NhcmxhcyBhIGxvcyBleHRyZW1vcyAqL1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgbGEgY2FyZCBpenF1aWVyZGEgKi9cbi5sZWZ0LWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sZWZ0LWNhcmQgaW1nIHtcbiAgLyogRGVmaW5lIGVsIHRhbWHDsW8gcGVxdWXDsW8gcXVlIGRlc2VhcyBxdWUgdGVuZ2EgbGEgaW1hZ2VuIGFsIGluaWNpbyAqL1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLyogRXN0aWxvcyBwYXJhIGxhIGNhcmQgZGVyZWNoYSAqL1xuLnJpZ2h0LWNhcmQge1xuICBmb250LXNpemU6IDEycHg7XG4gIC8qIEFqdXN0YSBlbCB0YW1hw7FvIGRlbCB0ZXh0byBjb21vIGRlc2VlcyAqL1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgbGEgaW1hZ2VuIGN1YW5kbyBzZSBleHBhbmRlIGVuIHBhbnRhbGxhIGNvbXBsZXRhICovXG4uZnVsbHNjcmVlbi1pbWFnZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mdWxsc2NyZWVuLWltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59Il19 */"]
      });
      /***/
    },

    /***/
    "yaJ5":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/queries/components/individual/individual.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: IndividualComponent */

    /***/
    function yaJ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndividualComponent", function () {
        return IndividualComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_interfaces_common_checkName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../@core/interfaces/common/checkName */
      "PmJw");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/Subject */
      "8yf6");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _core_backend_common_services_individualQuery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../@core/backend/common/services/individualQuery.service */
      "8xMH");
      /* harmony import */


      var _core_interfaces_common_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../@core/interfaces/common/users */
      "2NI8");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _management_backend_common_services_ThirdPartyManage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../management/backend/common/services/ThirdPartyManage.service */
      "016S");
      /* harmony import */


      var _services_additional_company_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/additional-company-service.service */
      "qgDp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = ["divResult"];

      function IndividualComponent_nb_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var thirdType_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", thirdType_r31.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thirdType_r31.name);
        }
      }

      function IndividualComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Palabras de precisi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Servicios principales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IndividualComponent_div_39_Template_nb_checkbox_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.updateState(ctx_r32.procuraduriaType);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Procuradur\xEDa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_40_nb_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var typeDocument_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", typeDocument_r35.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](typeDocument_r35.name);
        }
      }

      function IndividualComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tipo Identificaci\xF3n Procuraduria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-select", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function IndividualComponent_div_40_Template_nb_select_selectedChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.ProcuraduriaTypeChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IndividualComponent_div_40_nb_option_4_Template, 2, 2, "nb-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.ProcuraduriaTypesDocuments);
        }
      }

      function IndividualComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Digito de verificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rama Judicial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rama Judicial JEPMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Defunciones registraduria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Servicios Colombia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ej\xE9rcito");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SuperSociedades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Simit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Estado EPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IndividualComponent_div_52_Template_nb_checkbox_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.PoliceTypeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Policia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_53_nb_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var typeDocument_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", typeDocument_r41.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](typeDocument_r41.name);
        }
      }

      function IndividualComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tipo Identificaci\xF3n Policia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndividualComponent_div_53_nb_option_6_Template, 2, 2, "nb-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.policeTypeDocuments);
        }
      }

      function IndividualComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IndividualComponent_div_54_Template_nb_checkbox_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.bmeTypeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_55_nb_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var typeDocument_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", typeDocument_r45.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](typeDocument_r45.name);
        }
      }

      function IndividualComponent_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tipo Identificaci\xF3n Bme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-select", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndividualComponent_div_55_nb_option_6_Template, 2, 2, "nb-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.bmeTypeDocuments);
        }
      }

      function IndividualComponent_div_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Servicios de Venezuela");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IndividualComponent_div_57_Template_nb_checkbox_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46.PptTypeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Estado Permiso ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_58_nb_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var typeDocument_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", typeDocument_r49.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](typeDocument_r49.name);
        }
      }

      function IndividualComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tipo Identificaci\xF3n PPT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-select", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndividualComponent_div_58_nb_option_6_Template, 2, 2, "nb-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.PptDocuments);
        }
      }

      function IndividualComponent_div_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Servicios de Ecuador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ant. criminales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Informaci\xF3n judicial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Servicios de Per\xFA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_63_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IndividualComponent_div_63_Template_nb_checkbox_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.SunatTypeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sunat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IndividualComponent_div_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ingrese RUC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a1) {
        return ["/pages/queries/individual/result", a1];
      };

      function IndividualComponent_div_127_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ver reporte ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Resultado de consulta no. ", ctx_r28.queryCompanyId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r28.queryId));
        }
      }

      function IndividualComponent_ng_template_128_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Consulta anterior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Este tercero ya fue consultado el : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " con el Id de consulta: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Puede generar una nueva consulta para actualizar su an\xE1lisis de riesgo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\xBFUsted qu\xE9 quiere hacer?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-card-footer", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndividualComponent_ng_template_128_Template_button_click_15_listener() {
            var ref_r54 = ctx.dialogRef;
            return ref_r54.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndividualComponent_ng_template_128_Template_button_click_17_listener() {
            var ref_r54 = ctx.dialogRef;
            return ref_r54.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ver Reporte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r53 = ctx.$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, data_r53.createdAt, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r53.idQueryCompany);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r30.queryId));
        }
      }

      var IndividualComponent = /*#__PURE__*/function () {
        function IndividualComponent(fb, checkNameService, userData, individualQueryService, toastrService, dialogService, _thirdPartyManageService, additionalCompanyServiceService) {
          _classCallCheck(this, IndividualComponent);

          this.fb = fb;
          this.checkNameService = checkNameService;
          this.userData = userData;
          this.individualQueryService = individualQueryService;
          this.toastrService = toastrService;
          this.dialogService = dialogService;
          this._thirdPartyManageService = _thirdPartyManageService;
          this.additionalCompanyServiceService = additionalCompanyServiceService;
          this.unsubscribe$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.procuraduriaType = 'procuraduria';
          this.militaryType = 'military';
          this.numberWordsType = 'numberWords'; //thirdTypes = [{'id': 1, 'name': 'prueba 1'}, {'id': 2, 'name': 'prueba 2'}, {'id': 3, 'name': 'prueba 3'}];

          this.ProcuraduriaTypesDocuments = [{
            'id': 0,
            'name': 'PEP'
          }, {
            'id': 1,
            'name': 'Cédula de ciudadanía'
          }, {
            'id': 2,
            'name': 'Nit'
          }, {
            'id': 3,
            'name': 'Cédula extranjería'
          }];
          this.TypesDocuments = [{
            'id': 0,
            'name': 'PEP'
          }, {
            'id': 1,
            'name': 'Cédula de ciudadanía'
          }, {
            'id': 2,
            'name': 'Nit'
          }, {
            'id': 3,
            'name': 'Cédula extranjería'
          }];
          this.militaryDocuments = [{
            'id': 'CC',
            'name': 'Cédula de Ciudadanía'
          }, {
            'id': 'TI',
            'name': 'Tarjeta de identidad'
          }, {
            'id': 'NUIP',
            'name': 'Número Único de Identificación Personal'
          }];
          this.PptDocuments = [{
            'id': 106001,
            'name': 'RUMV PEP'
          }, {
            'id': 106002,
            'name': 'Cédula de extranjería'
          }, {
            'id': 106003,
            'name': 'PASAPORTE'
          }];
          this.policeTypeDocuments = [{
            'id': 1,
            'name': 'Cedula de Ciudadanía'
          }, {
            'id': 2,
            'name': 'Cédula Extranjera'
          }, {
            'id': 3,
            'name': 'Pasaporte'
          }, {
            'id': 4,
            'name': 'Documento País Origen'
          }];
          this.bmeTypeDocuments = [{
            'id': 28979,
            'name': 'CEDULA DE CIUDADANÍA'
          }, {
            'id': 28980,
            'name': 'NIT'
          }, {
            'id': 28982,
            'name': 'CEDULA DE EXTRANJERÍA'
          }, {
            'id': 28983,
            'name': 'PASAPORTE'
          }, {
            'id': 28984,
            'name': 'SOCIEDAD EXTRANJERA SIN NIT EN COLOMBIA'
          }];
          this.showProcuraduriaTypeDocument = false;
          this.showNumberWords = false;
          this.makePreviusQuery = false;
          this.formInvalid = false;
          this.showButtonSearchName = false;
          this.showNitInputProcuraduria = false;
          this.loadingCheckName = false;
          this.showPptTypeDocument = false;
          this.showPoliceTypeDocument = false;
          this.showBmeTypeDocument = false;
          this.showSunatTypeDocument = false;
          this.loadingQuery = false;
          this.checkActiveServiceProcuraduria = false;
          this.checkActiveServiceRamaJudicial = false;
          this.checkActiveServiceRamaJudicialJEMPS = false;
          this.checkActiveServiceRegistryDeaths = false;
          this.checkActiveServiceMilitary = false;
          this.checkActiveServiceSimit = false;
          this.checkActiveServiceRues = false;
          this.checkActiveServiceSuperSocieties = false;
          this.checkActiveServiceEstadoEPS = false;
          this.checkActiveServicePolice = false;
          this.checkActiveServiceBme = false;
          this.checkActiveServiceSuperFinanciera = false;
          this.checkActiveServiceEstadoPermiso = false;
          this.checkActiveServiceAntecedentesCriminales = false;
          this.checkActiveServiceInformacionJudicial = false;
          this.checkActiveServiceSunat = false;
          this.activeTitleMainServices = false;
          this.activeTitleColombiaServices = false;
          this.activeTitleVenezuelaServices = false;
          this.activeTitleecuadorServices = false;
          this.activeTitlePeruServices = false;
          this.types = ['primary', 'success', 'info', 'warning', 'danger'];
          this.index = 1;
        }

        _createClass(IndividualComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.userData.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (user) {
              _this17.companyId = user.companyId;
              _this17.userId = user.id;

              _this17.activeCheck(user.companyId);

              _this17._thirdPartyManageService.getByCompanyID().subscribe(function (response) {
                _this17.thirdTypes = response.filter(function (value) {
                  return value.status;
                });
              });
            });
            this.formControls = {
              name: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              document: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              companyId: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              userId: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              // typeDocument: this.fb.control('', Validators.nullValidator),
              digitVerification: this.fb.control(1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              thirdTypeId: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              typeDocumentProcuraduria: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              typeDocumentPpt: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              ruc: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              typeDocumentMilitary: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              typeDocumentPolice: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              typeDocumentBme: this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasProcuraduria: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasRamaJudicial: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasRamaJudicialJEMPS: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasRegistryDeaths: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasPriority4: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              numberWords: this.fb.control(1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasMilitary: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasSimit: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasRues: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasSuperSocieties: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasEstadoEPS: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasPolice: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasBme: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasSuperFinanciera: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasEstadoPermiso: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasAntecedentesCriminales: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasInformacionJudicial: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator),
              hasSunat: this.fb.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator)
            };
            this.form = this.fb.group({
              name: this.formControls.name,
              document: this.formControls.document,
              companyId: this.formControls.companyId,
              userId: this.formControls.companyId,
              // typeDocument: this.formControls.typeDocument,
              digitVerification: this.formControls.digitVerification,
              thirdTypeId: this.formControls.thirdTypeId,
              typeDocumentProcuraduria: this.formControls.typeDocumentProcuraduria,
              typeDocumentMilitary: this.formControls.typeDocumentMilitary,
              typeDocumentPolice: this.formControls.typeDocumentPolice,
              typeDocumentBme: this.formControls.typeDocumentBme,
              typeDocumentPpt: this.formControls.typeDocumentPpt,
              ruc: this.formControls.ruc,
              hasProcuraduria: this.formControls.hasProcuraduria,
              hasRamaJudicial: this.formControls.hasRamaJudicial,
              hasRamaJudicialJEMPS: this.formControls.hasRamaJudicialJEMPS,
              hasRegistryDeaths: this.formControls.hasRegistryDeaths,
              hasPriority4: this.formControls.hasPriority4,
              numberWords: this.formControls.numberWords,
              hasMilitary: this.formControls.hasMilitary,
              hasSimit: this.formControls.hasSimit,
              hasRues: this.formControls.hasRues,
              hasSuperSocieties: this.formControls.hasSuperSocieties,
              hasEstadoEPS: this.formControls.hasEstadoEPS,
              hasPolice: this.formControls.hasPolice,
              hasBme: this.formControls.hasBme,
              hasSuperFinanciera: this.formControls.hasSuperFinanciera,
              hasEstadoPermiso: this.formControls.hasEstadoPermiso,
              hasAntecedentesCriminales: this.formControls.hasAntecedentesCriminales,
              hasInformacionJudicial: this.formControls.hasInformacionJudicial,
              hasSunat: this.formControls.hasSunat
            });
          }
        }, {
          key: "documentOrNameChange",
          value: function documentOrNameChange() {
            var doc = this.form.get("document").value;
            this.showButtonSearchName = this.form.get("document").value !== "" && this.form.get("name").value === "";

            if (this.form.get('document').value !== '') {
              this.form.controls['name'].clearValidators();
            } else {
              this.form.controls['name'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            }

            this.form.controls["name"].updateValueAndValidity();

            if (this.form.get('name').value !== '') {
              this.form.controls['document'].clearValidators();
            } else {
              this.form.controls['document'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            }

            this.form.controls["document"].updateValueAndValidity();
          }
        }, {
          key: "checkName",
          value: function checkName() {
            var _this18 = this;

            var doc = this.form.get("document").value;
            this.loadingCheckName = true;
            this.checkNameService.getNameByDocument(doc).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (checkNameData) {
              // let checkData: string = "" + checkNameData;
              // var name = checkData.substring(
              //     checkData.indexOf(">\"") + 2,
              //     checkData.lastIndexOf("\"<")
              // );
              // this.form.controls["name"].setValue(name);
              if (checkNameData != null) _this18.form.controls["name"].setValue(checkNameData.nombreCompleto);
              _this18.loadingCheckName = false;
            }, function (error) {
              _this18.loadingCheckName = false;

              _this18.showToast("Error", "No se pudo obtener nombre, por favor inténtelo más tarde", 4, false);
            });
          }
        }, {
          key: "updateState",
          value: function updateState(serviceType) {
            switch (serviceType) {
              case this.procuraduriaType:
                this.showProcuraduriaTypeDocument = this.form.get('hasProcuraduria').value;
                var typeProcuraduriaValue = this.form.get('typeDocumentProcuraduria').value;
                this.showNitInputProcuraduria = typeProcuraduriaValue == 2 && this.form.get('hasProcuraduria').value;

                if (this.showProcuraduriaTypeDocument) {
                  this.form.controls['typeDocumentProcuraduria'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                  console.log("typeProcuraduriaValue", typeProcuraduriaValue);

                  if (typeProcuraduriaValue == 2) {
                    this.form.controls['digitVerification'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                  } else {
                    this.form.controls['digitVerification'].clearValidators();
                  }

                  this.form.controls["digitVerification"].updateValueAndValidity();
                } else {
                  this.form.controls['typeDocumentProcuraduria'].clearValidators();
                }

                this.form.controls["typeDocumentProcuraduria"].updateValueAndValidity();
                break;

              case this.numberWordsType:
                this.showNumberWords = this.form.get('hasPriority4').value;
                break;
            }
          }
        }, {
          key: "ProcuraduriaTypeChange",
          value: function ProcuraduriaTypeChange(val) {
            this.showNitInputProcuraduria = val == 2 && this.form.get('hasProcuraduria').value;
            console.log("val", val);
          }
        }, {
          key: "PptTypeChange",
          value: function PptTypeChange() {
            this.showPptTypeDocument = this.form.get('hasEstadoPermiso').value;
          }
        }, {
          key: "PoliceTypeChange",
          value: function PoliceTypeChange() {
            this.showPoliceTypeDocument = this.form.get('hasPolice').value;
          }
        }, {
          key: "bmeTypeChange",
          value: function bmeTypeChange() {
            this.showBmeTypeDocument = this.form.get('hasBme').value;
          }
        }, {
          key: "SunatTypeChange",
          value: function SunatTypeChange() {
            this.showSunatTypeDocument = this.form.get('hasSunat').value;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(dialog) {
            var _this19 = this;

            this.loadingQuery = true;
            this.form.controls["companyId"].setValue(this.companyId);
            this.form.controls["userId"].setValue(this.userId);
            this.formInvalid = this.form.invalid; // console.log(this.form.value)

            if (!this.makePreviusQuery) {
              this.individualQueryService.makeQuery(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
                console.log(data);
                _this19.queryCompanyId = data.query.idQueryCompany;
                _this19.queryId = data.query.id;
                _this19.loadingQuery = false;

                _this19.showToast("Finalizado", "La consulta se realizó exitosamente!", 1, false);

                setTimeout(function () {
                  _this19.divResult.nativeElement.focus();
                }, 1000);
              }, function (error) {
                _this19.loadingQuery = false;

                _this19.showToast("Error", "No se pudo realizar consulta, por favor inténtelo más tarde", 4, false);

                console.log("e", error);
              });
            } else {
              this.individualQueryService.previusQuery(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (data) {
                console.log("data"); // this.queryCompanyId=data.query.idQueryCompany;

                _this19.queryId = data.id;
                _this19.loadingQuery = false; // const body = 'Este tercero ya fue consultado el : <b>' +data.CreatedAt + '</b> on el Id de consulta: <b>' +data.CompanyId + '</b> Puede generar una nueva consulta para actualizar su análisis de riesgo. <br>¿Usted qué quiere hacer?'

                _this19.dialogService.open(dialog, {
                  context: data,
                  closeOnBackdropClick: false
                }); // this.showToast("Finalizado","La consulta se realizó exitosamente!",1,false)
                // setTimeout(()=>{
                //     this.divResult.nativeElement.focus();
                // },1000)

              }, function (error) {
                _this19.loadingQuery = false;

                _this19.showToast("Error", "No se pudo realizar consulta, por favor inténtelo más tarde", 4, false);

                console.log("e", error);
              });
            }

            if (this.formInvalid) {
              return;
            }
          }
        }, {
          key: "makePreviusQueryChange",
          value: function makePreviusQueryChange(checked) {
            this.makePreviusQuery = checked;
          }
        }, {
          key: "activeCheck",
          value: function activeCheck(companyId) {
            var _this20 = this;

            this.additionalCompanyServiceService.getAdditionalCompanyServices(companyId).subscribe(function (response) {
              _this20.additionalServices = response.data;

              _this20.enableServices(_this20.additionalServices);

              _this20.enableTitlesAdditionalServices();
            }, function (error) {});
          }
        }, {
          key: "enableTitlesAdditionalServices",
          value: function enableTitlesAdditionalServices() {
            this.activeTitleMainServices = this.checkActiveServiceProcuraduria || this.checkActiveServiceRamaJudicial || this.checkActiveServiceRamaJudicialJEMPS || this.checkActiveServiceMilitary;
            this.activeTitleColombiaServices = this.checkActiveServiceMilitary || this.checkActiveServiceSimit || this.checkActiveServiceSuperSocieties || this.checkActiveServiceRues || this.checkActiveServiceEstadoEPS || this.checkActiveServicePolice;
            this.activeTitleVenezuelaServices = this.checkActiveServiceEstadoPermiso;
            this.activeTitleecuadorServices = this.checkActiveServiceAntecedentesCriminales || this.checkActiveServiceInformacionJudicial;
            this.activeTitlePeruServices = this.checkActiveServiceSunat;
          }
        }, {
          key: "enableServices",
          value: function enableServices(additionalServices) {
            var _this21 = this;

            additionalServices.forEach(function (element) {
              _this21[element.additionalService.htmlId] = element.active;
            });
          }
        }, {
          key: "showToast",
          value: function showToast(tittle, mesage, type, hasIcon) {
            var icon = hasIcon ? {} : {
              icon: ''
            };
            var position = _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbGlobalPhysicalPosition"].TOP_RIGHT;
            var config = Object.assign({
              status: this.types[type],
              destroyByClick: true,
              duration: 3000,
              position: position,
              preventDuplicates: false
            }, icon);
            this.index += 1;
            this.toastrService.show(mesage, tittle, config);
          }
        }]);

        return IndividualComponent;
      }();

      IndividualComponent.ɵfac = function IndividualComponent_Factory(t) {
        return new (t || IndividualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_interfaces_common_checkName__WEBPACK_IMPORTED_MODULE_2__["CheckNameData"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_interfaces_common_users__WEBPACK_IMPORTED_MODULE_6__["UserData"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_backend_common_services_individualQuery_service__WEBPACK_IMPORTED_MODULE_5__["IndividualQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_management_backend_common_services_ThirdPartyManage_service__WEBPACK_IMPORTED_MODULE_8__["thirdPartyManageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_additional_company_service_service__WEBPACK_IMPORTED_MODULE_9__["AdditionalCompanyServiceService"]));
      };

      IndividualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IndividualComponent,
        selectors: [["ngx-individual"]],
        viewQuery: function IndividualComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divResult = _t.first);
          }
        },
        decls: 130,
        vars: 36,
        consts: [[1, "row"], [1, "col-lg-8"], [3, "formGroup", "submit"], [1, "col-6", "border-right"], [1, "form-group"], ["for", "document", 1, "label"], ["type", "text", "fieldSize", "small", "id", "document", "nbInput", "", "fullWidth", "", "formControlName", "document", "placeholder", "Documento de Identificaci\xF3n", 3, "ngModelChange"], ["nbButton", "", "status", "primary", "size", "small", "type", "button", "hero", "", 3, "nbSpinner", "disabled", "hidden", "click"], ["for", "name", 1, "label"], ["type", "text", "id", "name", "fieldSize", "small", "formControlName", "name", "nbInput", "", "fullWidth", "", "placeholder", "Nombre", 3, "ngModelChange"], ["for", "thirdTypeId", 1, "label"], ["selected", "1", "id", "thirdType", "fullWidth", "", "formControlName", "thirdTypeId"], [3, "value", 4, "ngFor", "ngForOf"], [1, "label"], ["formControlName", "hasPriority4", 3, "change"], ["class", "form-group", 4, "ngIf"], [1, "col-6"], [1, "form-group", "col-12", "mt-3"], [3, "checked", "checkedChange"], ["nbButton", "", "status", "primary", "size", "large", "fullWidth", "", "hero", "", "type", "submit", 3, "nbSpinner", "disabled"], [1, "col-lg-4", "col-md-12", "col-sm-12"], [1, "table"], ["bgcolor", "#990000"], ["align", "center"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Relaciona a las personas (naturales o jur\xEDdicas) o bienes con reporte en Listas Restrictivas, vinculantes o no. Por ejemplo, Lista OFAC (clinton) o listas del Consejo de Seguridad de Naciones Unidas (ONU). Se recomienda no tener v\xEDnculos con estos terceros.", 2, "display", "inline-block", "color", "White", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#FF0000"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Relaciona a las personas (naturales o jur\xEDdicas) o bienes que en forma alguna se encuentran relacionados con actividades delictivas bien sea Lavado de Activos (y sus delitos fuente), Financiaci\xF3n del Terrorismo, Corrupci\xF3n u otros delitos. As\xED mismo informaci\xF3n asociada a etapas de los procesos penales (capturas, decomisos, comiso, etc) y temas referidos a Extinci\xF3n o P\xE9rdida de Dominio. ", 2, "display", "inline-block", "color", "White", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#FF9900"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Relaciona a las personas (naturales o jur\xEDdicas) o bienes que en forma alguna se encuentran relacionados con actividades administrativas asociadas a Lavado de Activos (y sus delitos fuente), Financiaci\xF3n del Terrorismo, Corrupci\xF3n u otras conductas administrativas relevantes.", 2, "display", "inline-block", "color", "White", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#FFFF00"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Relaciona a las personas (naturales o jur\xEDdicas) o bienes que en forma alguna se encuentran relacionados con otras actividades administrativas (p.e. multas, inhabilidades, etc) as\xED como informaci\xF3n financiera (p.e. concordatos, liquidaci\xF3n, etc) no directamente asociadas a LA/FT o Corrupci\xF3n pero relevantes para la gesti\xF3n de riesgos.", 2, "display", "inline-block", "color", "#FF9900", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#008000"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Contiene datos asociados a personas (naturales o jur\xEDdicas) o bienes con car\xE1cter informativo (p.e. registros autorizados, sectores, cargos, personas expuestas pol\xEDtica o p\xFAblicamente, entidades sin \xE1nimo de lucro, etc).", 2, "display", "inline-block", "color", "White", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#bce8c1"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Contiene datos asociados a personas (naturales o jur\xEDdicas) o bienes en general que son de car\xE1cter informativo (p.e. registros autorizados, sectores, cargos, entidades sin \xE1nimo de lucro, etc). En general es informaci\xF3n que sirve para orientar la toma de decisiones pero no tiene connotaci\xF3n positiva/negativa.", 2, "display", "inline-block", "color", "Black", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#284775"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Contiene datos asociados a personas (naturales o jur\xEDdicas) o bienes que se administran y categorizan por nuestros clientes generando los procedimientos o respuestas que se definan internamente.", 2, "display", "inline-block", "color", "White", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#ffffff", 2, "border-left", "3px solid", "border-left-color", "coral"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Coincidencias en el n\xFAmero de identificaci\xF3n exacto y nombre que contenga la b\xFAsqueda", 2, "display", "inline-block", "color", "rgb(0, 0, 0)", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#ffffff"], ["align", "center", 2, "border-left", "3px solid", "border-left-color", "darkorange"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Coincidencias \xFAnicamente en el n\xFAmero de identificaci\xF3n exacto", 2, "display", "inline-block", "color", "rgb(0, 0, 0)", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["bgcolor", "#ffffff", 2, "border-left", "3px solid", "border-left-color", "yellow"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Coincidencias exactas \xFAnicamente en el nombre", 2, "display", "inline-block", "color", "rgb(0, 0, 0)", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Coincidencias \xFAnicamente en el nombre, con una determinada cantidad de palabras de precisi\xF3n", 2, "display", "inline-block", "color", "rgb(0, 0, 0)", "font-family", "Calibri", "font-size", "Small", "font-weight", "normal", "width", "200px"], ["tabindex", "0", "class", "col-12 mt-5 justify-content-center", 4, "ngIf"], ["dialog", ""], [3, "value"], ["type", "number", "min", "1", "max", "9", "fieldSize", "small", "formControlName", "numberWords", "nbInput", "", "placeholder", "Qty"], ["formControlName", "hasProcuraduria", 3, "change"], ["for", "ProcuraduriaTypesDocument", 1, "label"], ["selected", "1", "id", "ProcuraduriaTypesDocument", "fullWidth", "", "formControlName", "typeDocumentProcuraduria", 3, "selectedChange"], ["type", "number", "min", "1", "fieldSize", "small", "formControlName", "digitVerification", "nbInput", "", "placeholder", ""], ["formControlName", "hasRamaJudicial"], ["formControlName", "hasRamaJudicialJEMPS"], ["formControlName", "hasRegistryDeaths"], ["formControlName", "hasMilitary"], ["formControlName", "hasRues"], ["formControlName", "hasSuperSocieties"], ["formControlName", "hasSimit"], ["formControlName", "hasEstadoEPS"], ["formControlName", "hasPolice", 3, "change"], ["for", "policeTypesDocument", 1, "label"], ["id", "policeTypesDocument", "fullWidth", "", "formControlName", "typeDocumentPolice"], ["formControlName", "hasBme", 3, "change"], ["for", "bmeTypesDocument", 1, "label"], ["id", "bmeTypesDocument", "fullWidth", "", "formControlName", "typeDocumentBme"], ["formControlName", "hasEstadoPermiso", 3, "change"], ["for", "PptDocuments", 1, "label"], ["selected", "0", "id", "PptTypesDocument", "fullWidth", "", "formControlName", "typeDocumentPpt"], ["formControlName", "hasAntecedentesCriminales"], ["formControlName", "hasInformacionJudicial"], ["formControlName", "hasSunat", 3, "change"], ["type", "text", "fieldSize", "small", "id", "ruc", "nbInput", "", "fullWidth", "", "formControlName", "ruc", "placeholder", "Ingrese RUC"], ["tabindex", "0", 1, "col-12", "mt-5", "justify-content-center"], ["divResult", ""], ["nbButton", "", "status", "primary", "size", "large", "fullWidth", "", "hero", "", "type", "submit", 3, "routerLink"], [1, "text-center"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "success", 1, "ml-2", 3, "routerLink", "click"]],
        template: function IndividualComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Consulta Individual");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function IndividualComponent_Template_form_submit_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

              var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](129);

              return ctx.onSubmit(_r29);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Documento de Identificaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndividualComponent_Template_input_ngModelChange_12_listener() {
              return ctx.documentOrNameChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndividualComponent_Template_button_click_14_listener() {
              return ctx.checkName();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Conozca el nombre o raz\xF3n social ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndividualComponent_Template_input_ngModelChange_19_listener() {
              return ctx.documentOrNameChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tipo de Tercero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, IndividualComponent_nb_option_24_Template, 2, 2, "nb-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Prioridad 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-checkbox", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IndividualComponent_Template_nb_checkbox_change_29_listener() {
              return ctx.updateState(ctx.numberWordsType);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Habilitar Prioridad 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, IndividualComponent_div_31_Template, 4, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Habilitar servicios adicionales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, IndividualComponent_div_38_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, IndividualComponent_div_39_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, IndividualComponent_div_40_Template, 5, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, IndividualComponent_div_41_Template, 4, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, IndividualComponent_div_42_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, IndividualComponent_div_43_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, IndividualComponent_div_44_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, IndividualComponent_div_45_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, IndividualComponent_div_46_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, IndividualComponent_div_47_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, IndividualComponent_div_48_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, IndividualComponent_div_50_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, IndividualComponent_div_51_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, IndividualComponent_div_52_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, IndividualComponent_div_53_Template, 7, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, IndividualComponent_div_54_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, IndividualComponent_div_55_Template, 7, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, IndividualComponent_div_56_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, IndividualComponent_div_57_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, IndividualComponent_div_58_Template, 7, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, IndividualComponent_div_59_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, IndividualComponent_div_60_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, IndividualComponent_div_61_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, IndividualComponent_div_62_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, IndividualComponent_div_63_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, IndividualComponent_div_64_Template, 6, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nb-checkbox", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function IndividualComponent_Template_nb_checkbox_checkedChange_66_listener($event) {
              return ctx.makePreviusQueryChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\xBFDesea realizar una revisi\xF3n de cunsulta previa en el \xFAltimo a\xF1o?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Realizar consulta ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Tipos de listas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "table", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Listas Restrictivas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Listas Asociadas a LA/FT, Corrupci\xF3n u otros delitos (Penal)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Listas Asociadas a LA/FT, Corrupci\xF3n u otros similares (Administrativo)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Sanciones Administrativas y Listas de Afectaci\xF3n Financiera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Listas PEPS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tr", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Listas Informativas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Listas Propias");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Prioridades");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "table", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Prioridad 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Prioridad 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tr", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Prioridad 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Prioridad 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, IndividualComponent_div_127_Template, 8, 4, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, IndividualComponent_ng_template_128_Template, 19, 8, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.loadingCheckName)("disabled", ctx.loadingCheckName)("hidden", !ctx.showButtonSearchName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thirdTypes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNumberWords);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTitleMainServices);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceProcuraduria);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProcuraduriaTypeDocument);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNitInputProcuraduria);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceRamaJudicial);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceRamaJudicialJEMPS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceRegistryDeaths);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTitleColombiaServices);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceMilitary);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceRues);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceSuperSocieties);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceSimit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceEstadoEPS);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServicePolice);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPoliceTypeDocument);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceBme);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBmeTypeDocument);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTitleVenezuelaServices);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceEstadoPermiso);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPptTypeDocument);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTitleecuadorServices);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceAntecedentesCriminales);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceInformacionJudicial);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTitlePeruServices);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkActiveServiceSunat);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSunatTypeDocument);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.makePreviusQuery);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.loadingQuery)("disabled", !ctx.form.valid || ctx.loadingQuery);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.queryCompanyId != null);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardFooterComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        styles: ["nb-card-body[_ngcontent-%COMP%] {\n  overflow: visible;\n  padding-top: 0;\n}\nnb-card-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGluZGl2aWR1YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSiIsImZpbGUiOiJpbmRpdmlkdWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2FyZC1ib2R5IHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuXHJcbiAgPiAqIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG59Il19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=queries-queries-module-es5.js.map