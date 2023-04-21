"use strict";
(self["webpackChunkeDoc"] = self["webpackChunkeDoc"] || []).push([["src_app_pages_secure_styleguide_styleguide_module_ts"],{

/***/ 266:
/*!**********************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePageRoutingModule": () => (/* binding */ StyleguidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _styleguide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide.page */ 4236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _styleguide_page__WEBPACK_IMPORTED_MODULE_0__.StyleguidePage
}];
class StyleguidePageRoutingModule {}
StyleguidePageRoutingModule.ɵfac = function StyleguidePageRoutingModule_Factory(t) {
  return new (t || StyleguidePageRoutingModule)();
};
StyleguidePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: StyleguidePageRoutingModule
});
StyleguidePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StyleguidePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5594:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePageModule": () => (/* binding */ StyleguidePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide-routing.module */ 266);
/* harmony import */ var _styleguide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleguide.page */ 4236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class StyleguidePageModule {}
StyleguidePageModule.ɵfac = function StyleguidePageModule_Factory(t) {
  return new (t || StyleguidePageModule)();
};
StyleguidePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: StyleguidePageModule
});
StyleguidePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__.StyleguidePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StyleguidePageModule, {
    declarations: [_styleguide_page__WEBPACK_IMPORTED_MODULE_1__.StyleguidePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__.StyleguidePageRoutingModule]
  });
})();

/***/ }),

/***/ 4236:
/*!************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePage": () => (/* binding */ StyleguidePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class StyleguidePage {
  constructor() {}
  ngOnInit() {}
}
StyleguidePage.ɵfac = function StyleguidePage_Factory(t) {
  return new (t || StyleguidePage)();
};
StyleguidePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: StyleguidePage,
  selectors: [["app-styleguide"]],
  decls: 109,
  vars: 2,
  consts: [["collapse", "fade", 3, "translucent"], ["color", "dark"], ["color", "light"], ["slot", "primary"], ["color", "secondary", "routerLink", "/settings"], ["slot", "icon-only", "name", "cog"], [3, "fullscreen"], [1, "ion-padding"], ["color", "tertiary"], [1, "hr-medium"], ["color", "primary"], ["alt", "Silhouette of mountains", "src", "../../../../assets/card-media.png"], ["slot", "start"], ["color", "primary", "lines", "none"], ["lines", "none", 1, "item-card-list", "animate__animated", "animate__fadeIn", "ion-margin"], ["color", "primary", "button", "", "detail", ""], ["color", "medium"], ["lines", "full", 1, "list-custom", "animate__animated", "animate__fadeIn", "ion-margin"], ["color", "primary", "button", "", "detail", "false"], ["slot", "start", 1, "ion-avatar-default-icon"], ["color", "tertiary", "size", "large", "name", "cafe-outline"], ["color", "danger", "slot", "end"], ["color", "tertiary", "size", "large", "name", "cash-outline"], ["color", "secondary", "slot", "end"], ["color", "tertiary", "size", "large", "name", "home-outline"], ["color", "danger", "mode", "ios", "slot", "end"]],
  template: function StyleguidePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Style Guide ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-buttons", 3)(5, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 6)(8, "div", 7)(9, "h2")(10, "ion-text", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sample Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-card", 10)(14, "ion-card-header")(15, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Card Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Card Subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Here's a small text description for the card content. Nothing more, nothing less. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-card-header")(24, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Card Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Card Subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Here's a small text description for the card content. Nothing more, nothing less. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-card", 10)(31, "ion-card-header")(32, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Card Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Card Subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-card-content")(37, "ion-list")(38, "ion-item", 10)(39, "ion-thumbnail", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-item", 10)(44, "ion-thumbnail", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ion-item", 10)(49, "ion-thumbnail", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ion-item", 13)(54, "ion-thumbnail", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ion-list", 14)(59, "ion-item", 15)(60, "ion-label", 16)(61, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "$12,123.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Deutsche Bank AG");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ion-item", 15)(66, "ion-label", 16)(67, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "$255,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Bitcoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ion-item", 15)(72, "ion-label", 16)(73, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "$1,500.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "PayPal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ion-list", 17)(78, "ion-item", 18)(79, "ion-avatar", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "ion-icon", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ion-label")(82, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Coffee");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Lorem Ipsum \u00B7 09.04.2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "ion-badge", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "- $7.50");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ion-item", 18)(89, "ion-avatar", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "ion-icon", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ion-label")(92, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Lorem Ipsum Inc. \u00B7 06.03.2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ion-badge", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "$7500");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ion-item", 18)(99, "ion-avatar", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "ion-icon", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ion-label")(102, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Rent");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Lorem Inc. \u00B7 03.02.2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ion-badge", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "- $1800.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "hr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2VjdXJlL3N0eWxlZ3VpZGUvc3R5bGVndWlkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwwQ0FBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_styleguide_styleguide_module_ts.js.map