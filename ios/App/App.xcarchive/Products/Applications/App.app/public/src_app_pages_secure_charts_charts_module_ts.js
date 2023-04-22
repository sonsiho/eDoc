"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_charts_charts_module_ts"],{

/***/ 216:
/*!********************************************************!*\
  !*** ./src/app/core/services/helper/helper.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperService": () => (/* binding */ HelperService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HelperService {
  constructor() {}
  // Get color variable from SCSS by color name
  getColorVariable(name) {
    return getComputedStyle(document.documentElement).getPropertyValue('--ion-color-' + name);
  }
  // Get color variable RGB from SCSS by color name
  getColorVariableRgb(name) {
    return getComputedStyle(document.documentElement).getPropertyValue('--ion-color-' + name + '-rgb');
  }
  // Create gradient for chart
  createGradientChart(ctx, color_1, color_2) {
    // Create gradient
    let bar_background = ctx.createLinearGradient(0, 0, 0, 150);
    bar_background.addColorStop(0, this.getColorVariable(color_1));
    bar_background.addColorStop(1, 'rgba(' + this.getColorVariableRgb(color_2) + ', .35)');
    return bar_background;
  }
}
HelperService.ɵfac = function HelperService_Factory(t) {
  return new (t || HelperService)();
};
HelperService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: HelperService,
  factory: HelperService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1241:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/charts/charts-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsPageRoutingModule": () => (/* binding */ ChartsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _charts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.page */ 6220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _charts_page__WEBPACK_IMPORTED_MODULE_0__.ChartsPage
}];
class ChartsPageRoutingModule {}
ChartsPageRoutingModule.ɵfac = function ChartsPageRoutingModule_Factory(t) {
  return new (t || ChartsPageRoutingModule)();
};
ChartsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ChartsPageRoutingModule
});
ChartsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChartsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6806:
/*!******************************************************!*\
  !*** ./src/app/pages/secure/charts/charts.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsPageModule": () => (/* binding */ ChartsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-routing.module */ 1241);
/* harmony import */ var _charts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts.page */ 6220);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 1208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





// NgCharts


class ChartsPageModule {}
ChartsPageModule.ɵfac = function ChartsPageModule_Factory(t) {
  return new (t || ChartsPageModule)();
};
ChartsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ChartsPageModule
});
ChartsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsPageRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChartsPageModule, {
    declarations: [_charts_page__WEBPACK_IMPORTED_MODULE_1__.ChartsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsPageRoutingModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule]
  });
})();

/***/ }),

/***/ 6220:
/*!****************************************************!*\
  !*** ./src/app/pages/secure/charts/charts.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsPage": () => (/* binding */ ChartsPage)
/* harmony export */ });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ 1208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/helper/helper.service */ 216);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);







function ChartsPage_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header")(2, "div")(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-skeleton-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-skeleton-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-badge", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-skeleton-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-skeleton-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ChartsPage_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header")(2, "div")(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "$481.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-subtitle", 18)(6, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Spent in total this year");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-badge", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "21.16% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "canvas", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r1.bar_chart_data)("options", ctx_r1.bar_chart_option)("type", ctx_r1.bar_chart_type);
  }
}
function ChartsPage_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header")(2, "div")(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-skeleton-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-skeleton-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-badge", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-skeleton-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-skeleton-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ChartsPage_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r3.barChartData)("options", ctx_r3.barChartOptions)("type", ctx_r3.barChartType);
  }
}
function ChartsPage_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header")(2, "div")(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-skeleton-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-skeleton-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-badge", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-skeleton-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-skeleton-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ChartsPage_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r5.polarAreaChartData)("legend", ctx_r5.polarAreaLegend)("type", ctx_r5.polarAreaChartType);
  }
}
class ChartsPage {
  constructor(helperService) {
    this.helperService = helperService;
    this.bar_chart_option = {
      font: {
        family: 'Inter'
      },
      animation: {
        easing: 'easeInOutElastic',
        delay: 25
      },
      responsive: true,
      scales: {
        x: {
          grid: {
            color: this.helperService.getColorVariable('medium')
          },
          ticks: {
            color: this.helperService.getColorVariable('tertiary'),
            font: {
              family: 'Inter',
              weight: '500'
            }
          }
        },
        y: {
          position: 'right',
          grid: {
            color: this.helperService.getColorVariable('medium')
          },
          ticks: {
            color: this.helperService.getColorVariable('tertiary'),
            callback: function (value) {
              return '$' + value;
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: this.helperService.getColorVariable('dark'),
          bodyColor: this.helperService.getColorVariable('medium'),
          titleColor: this.helperService.getColorVariable('tertiary'),
          titleFont: {
            size: 14,
            weight: 'normal'
          },
          bodyFont: {
            size: 16,
            weight: 'bold'
          },
          padding: 12,
          boxWidth: 10,
          boxHeight: 10,
          boxPadding: 3,
          usePointStyle: true,
          callbacks: {
            // Add currency format to tooltip
            label: function (context) {
              var label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(context.parsed.y);
              }
              return label;
            }
          }
        }
      }
    };
    this.bar_chart_data = {
      labels: [],
      datasets: []
    };
    this.bar_chart_type = 'bar';
    this.barChartOptions = {
      elements: {
        line: {
          tension: 0.4
        }
      },
      animation: {
        easing: 'easeInOutElastic',
        delay: 25
      },
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        x: {
          grid: {
            color: this.helperService.getColorVariable('medium')
          },
          ticks: {
            color: this.helperService.getColorVariable('tertiary'),
            font: {
              family: 'Inter',
              weight: '500'
            }
          }
        },
        y: {
          position: 'right',
          grid: {
            color: this.helperService.getColorVariable('medium')
          },
          ticks: {
            color: this.helperService.getColorVariable('tertiary'),
            callback: function (value) {
              return '$' + value;
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: this.helperService.getColorVariable('dark'),
          bodyColor: this.helperService.getColorVariable('medium'),
          titleColor: this.helperService.getColorVariable('tertiary'),
          titleFont: {
            size: 14,
            weight: 'normal'
          },
          bodyFont: {
            size: 16,
            weight: 'bold'
          },
          padding: 12,
          boxWidth: 10,
          boxHeight: 10,
          boxPadding: 3,
          usePointStyle: true,
          callbacks: {
            // Add currency format to tooltip
            label: function (context) {
              var label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(context.parsed.y);
              }
              return label;
            }
          }
        }
      }
    };
    this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    this.barChartType = 'bar';
    this.barChartData = {
      labels: this.barChartLabels,
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A'
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B'
      }]
    };
    // PolarArea
    this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    this.polarAreaChartData = {
      labels: this.polarAreaChartLabels,
      datasets: [{
        data: [300, 500, 100, 40, 120],
        label: 'Series 1'
      }]
    };
    this.polarAreaLegend = true;
    this.polarAreaChartType = 'polarArea';
    this.content_loaded = false;
  }
  ngOnInit() {
    // Create bar chart
    this.createBarChart();
  }
  ionViewDidEnter() {
    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }
  // Create bar chart
  createBarChart() {
    let helperService = this.helperService;
    // Random array of numbers
    let rand_numbers = [...Array(12)].map(e => Math.random() * 100 | 0);
    // Set labels
    this.bar_chart_data.labels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    // Set datasets
    this.bar_chart_data.datasets = [{
      data: rand_numbers,
      backgroundColor: function (context) {
        const chart = context.chart;
        const {
          ctx,
          chartArea
        } = chart;
        if (!chartArea) {
          // This case happens on initial chart load
          return null;
        }
        // Create gradient
        return helperService.createGradientChart(ctx, 'tertiary', 'tertiary');
      },
      barThickness: 10,
      borderRadius: 4,
      borderColor: helperService.getColorVariable('secondary'),
      hoverBackgroundColor: helperService.getColorVariable('secondary'),
      pointStyle: 'circle'
    }];
  }
}
ChartsPage.ɵfac = function ChartsPage_Factory(t) {
  return new (t || ChartsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_helper_helper_service__WEBPACK_IMPORTED_MODULE_0__.HelperService));
};
ChartsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ChartsPage,
  selectors: [["app-charts"]],
  viewQuery: function ChartsPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  decls: 24,
  vars: 8,
  consts: [["collapse", "fade", 3, "translucent"], ["color", "dark"], ["color", "light"], ["slot", "primary"], ["color", "secondary", "routerLink", "/settings"], ["slot", "icon-only", "name", "cog"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], [1, "ion-padding"], ["color", "primary", 1, "ion-no-margin", "ion-card-chart", "animate__animated", "animate__fadeIn"], [4, "ngIf"], [1, "hr-medium"], ["animated", "", 2, "width", "60px"], ["animated", "", 2, "width", "80px"], ["color", "primary", "mode", "ios"], ["animated", "", 2, "width", "50px"], ["animated", "", 2, "width", "calc(100% - 40px)", "margin", "16px auto 16px auto", "min-height", "140px"], [1, "ion-margin-bottom"], ["color", "tertiary"], ["color", "secondary"], ["name", "caret-up"], ["baseChart", "", 1, "ion-padding", 3, "data", "options", "type"], ["baseChart", "", 1, "chart", 3, "data", "legend", "type"]],
  template: function ChartsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Charts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 3)(5, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 6)(8, "ion-header", 7)(9, "ion-toolbar")(10, "ion-title", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Insights");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "ion-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ChartsPage_ng_container_14_Template, 10, 0, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ChartsPage_ng_container_15_Template, 12, 3, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ChartsPage_ng_container_18_Template, 10, 0, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ChartsPage_ng_container_19_Template, 2, 3, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "hr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-card", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ChartsPage_ng_container_22_Template, 10, 0, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ChartsPage_ng_container_23_Template, 2, 3, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.content_loaded);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.content_loaded);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.content_loaded);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.content_loaded);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.content_loaded);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.content_loaded);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective],
  styles: ["[_nghost-%COMP%]   body[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-dark);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary));\n}\n[_nghost-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  margin-bottom: 8px;\n  background-color: var(--ion-color-primary);\n}\n[_nghost-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2VjdXJlL2NoYXJ0cy9jaGFydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsdUNBQUE7QUFBSjtBQUdFO0VBQ0Usc0ZBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBRko7QUFLRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIH1cblxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSk7XG4gIH1cblxuICBpb24tbGlzdCB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgLy8gaW9uLWl0ZW0ge1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLy8gfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_charts_charts_module_ts.js.map