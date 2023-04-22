"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_secure_module_ts"],{

/***/ 4507:
/*!*******************************************************!*\
  !*** ./src/app/pages/secure/secure-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecureRoutingModule": () => (/* binding */ SecureRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
}, {
  path: 'styleguide',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_styleguide_styleguide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./styleguide/styleguide.module */ 5594)).then(m => m.StyleguidePageModule)
}, {
  path: 'settings',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_core_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_list_mjs"), __webpack_require__.e("src_app_pages_secure_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 1576)).then(m => m.SettingsPageModule)
}, {
  path: 'settings/profile/edit',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_profile_edit_edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/edit/edit.module */ 630)).then(m => m.EditPageModule)
}, {
  path: 'payments/detail',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_payments_payment-detail_payment-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payments/payment-detail/payment-detail.module */ 2925)).then(m => m.PaymentDetailPageModule)
}, {
  path: 'other',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_core_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_list_mjs"), __webpack_require__.e("src_app_pages_secure_other_other_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./other/other.module */ 9920)).then(m => m.OtherPageModule)
}];
class SecureRoutingModule {}
SecureRoutingModule.ɵfac = function SecureRoutingModule_Factory(t) {
  return new (t || SecureRoutingModule)();
};
SecureRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SecureRoutingModule
});
SecureRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecureRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 3079:
/*!***********************************************!*\
  !*** ./src/app/pages/secure/secure.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecureModule": () => (/* binding */ SecureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _secure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secure-routing.module */ 4507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SecureModule {}
SecureModule.ɵfac = function SecureModule_Factory(t) {
  return new (t || SecureModule)();
};
SecureModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SecureModule
});
SecureModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _secure_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecureRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SecureModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _secure_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecureRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_secure_module_ts.js.map