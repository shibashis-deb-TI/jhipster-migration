"use strict";
(self["webpackChunkjhipster"] = self["webpackChunkjhipster"] || []).push([["src_main_webapp_app_admin_admin-routing_module_ts"],{

/***/ 1097:
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/admin/admin-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([
                {
                    path: 'docs',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_admin_docs_docs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./docs/docs.module */ 8159)).then(m => m.DocsModule),
                },
                {
                    path: 'configuration',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_admin_configuration_configuration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./configuration/configuration.module */ 5733)).then(m => m.ConfigurationModule),
                },
                {
                    path: 'health',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_admin_health_health_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./health/health.module */ 1473)).then(m => m.HealthModule),
                },
                {
                    path: 'logs',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_admin_logs_logs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./logs/logs.module */ 6371)).then(m => m.LogsModule),
                },
                {
                    path: 'metrics',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_admin_metrics_metrics_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./metrics/metrics.module */ 7539)).then(m => m.MetricsModule),
                },
                /* jhipster-needle-add-admin-route - JHipster will add admin routes here */
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_admin-routing_module_ts.js.map