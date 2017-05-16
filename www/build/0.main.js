webpackJsonp([0],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicos__ = __webpack_require__(282);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosModule", function() { return ServicosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicosModule = (function () {
    function ServicosModule() {
    }
    return ServicosModule;
}());
ServicosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__servicos__["a" /* Servicos */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__servicos__["a" /* Servicos */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__servicos__["a" /* Servicos */]
        ]
    })
], ServicosModule);

//# sourceMappingURL=servicos.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Servicos; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Servicos = (function () {
    function Servicos(nav, auth, alertCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { email: 'email', password: 'pass' };
        this.items = [
            { title: 'Exame Laboratórial' },
            { title: 'Consulta médica' },
            { title: 'Avaliação física' }
        ];
    }
    Servicos.prototype.goListServicos = function () {
        this.nav.push('listServicos');
    };
    return Servicos;
}());
Servicos = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-servicos',template:/*ion-inline-start:"C:\Users\Badaro\Documents\cpu\src\pages\servicos\servicos.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Servicos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n      <ion-list>\n\n        <ion-list-header  style="font-size: 25px; color: black;">\n\n          <ion-icon ios="ios-medkit" md="md-medkit" style="color: #387ef5;"></ion-icon> Saúde\n\n        </ion-list-header>\n\n        <button ion-item *ngFor="let item of items" (click)="goListServicos()">\n\n          {{ item.title }}\n\n        </button>  \n\n      </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Badaro\Documents\cpu\src\pages\servicos\servicos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */]])
], Servicos);

//# sourceMappingURL=servicos.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map