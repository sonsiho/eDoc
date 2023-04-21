"use strict";
(self["webpackChunkeDoc"] = self["webpackChunkeDoc"] || []).push([["src_app_pages_secure_other_other_module_ts"],{

/***/ 8183:
/*!************************************************************!*\
  !*** ./src/app/pages/secure/other/other-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherPageRoutingModule": () => (/* binding */ OtherPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _other_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other.page */ 5532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _other_page__WEBPACK_IMPORTED_MODULE_0__.OtherPage
}, {
  path: 'face-id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_secure_other_face-id_face-id_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./face-id/face-id.module */ 308)).then(m => m.FaceIdPageModule)
}];
class OtherPageRoutingModule {}
OtherPageRoutingModule.ɵfac = function OtherPageRoutingModule_Factory(t) {
  return new (t || OtherPageRoutingModule)();
};
OtherPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: OtherPageRoutingModule
});
OtherPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OtherPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9920:
/*!****************************************************!*\
  !*** ./src/app/pages/secure/other/other.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherPageModule": () => (/* binding */ OtherPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _other_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-routing.module */ 8183);
/* harmony import */ var _other_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other.page */ 5532);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class OtherPageModule {}
OtherPageModule.ɵfac = function OtherPageModule_Factory(t) {
  return new (t || OtherPageModule)();
};
OtherPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: OtherPageModule
});
OtherPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _other_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherPageRoutingModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OtherPageModule, {
    declarations: [_other_page__WEBPACK_IMPORTED_MODULE_1__.OtherPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _other_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherPageRoutingModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListModule]
  });
})();

/***/ }),

/***/ 5532:
/*!**************************************************!*\
  !*** ./src/app/pages/secure/other/other.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherPage": () => (/* binding */ OtherPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth/auth.service */ 7990);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





function OtherPage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8)(2, "ion-avatar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11)(5, "h2")(6, "ion-text", 12)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p")(10, "ion-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.FullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.UnitName);
  }
}
class OtherPage {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this._currentUser$ = this.authService.currentUser$;
  }
  // Sign out
  signOut() {
    this.authService.signOut();
  }
}
OtherPage.ɵfac = function OtherPage_Factory(t) {
  return new (t || OtherPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
OtherPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: OtherPage,
  selectors: [["app-other"]],
  decls: 17,
  vars: 4,
  consts: [[3, "fullscreen"], ["color", "light"], [4, "ngIf"], ["routerLink", "/other/face-id"], ["slot", "start", "name", "finger-print"], [2, "margin-top", "20px"], [3, "click"], ["slot", "start", "name", "exit"], [1, "d-flex", "flex-row", "profile-card", "p-2", "mb-5"], [1, "me-4", "align-self-center"], ["src", "https://edoc.smas.edu.vn/assets/media/users/default.svg"], [1, "d-flex", "flex-column"], ["color", "dark"], ["color", "medium"]],
  template: function OtherPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-header")(2, "ion-toolbar", 1)(3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Kh\u00E1c");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OtherPage_ng_container_5_Template, 12, 2, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-list", 1)(8, "ion-item", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "C\u00E0i \u0111\u1EB7t FaceID");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list", 5)(13, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherPage_Template_ion_item_click_13_listener() {
        return ctx.signOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0110\u0103ng xu\u1EA5t");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, ctx._currentUser$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: [".profile-card[_ngcontent-%COMP%] {\n  background: var(--ion-toolbar-background-color);\n}\n\n.menus[_ngcontent-%COMP%] {\n  background-color: var(--ion-toolbar-background-color);\n}\n\nmat-selection-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nion-list[_ngcontent-%COMP%] {\n  background: var(--ion-toolbar-background-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2VjdXJlL290aGVyL290aGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxREFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ubWVudXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5tYXQtc2VsZWN0aW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_other_other_module_ts.js.map