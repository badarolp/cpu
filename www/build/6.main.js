webpackJsonp([6],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrinho__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoModule", function() { return CarrinhoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarrinhoModule = (function () {
    function CarrinhoModule() {
    }
    return CarrinhoModule;
}());
CarrinhoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carrinho__["a" /* Carrinho */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carrinho__["a" /* Carrinho */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__carrinho__["a" /* Carrinho */]
        ]
    })
], CarrinhoModule);

//# sourceMappingURL=carrinho.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carrinho; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Carrinho = (function () {
    function Carrinho(nav, auth, alertCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '' };
    }
    return Carrinho;
}());
Carrinho = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-carrinho',template:/*ion-inline-start:"C:\Users\Gabriel\Documents\cpu\src\pages\carrinho\carrinho.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Carrinho</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n      <ion-list>\n\n        <ion-list-header  style="font-size: 15px; color: black; text-align: center">\n\n          Minha Cesta - 1 produto <ion-icon ios="ios-basket" md="md-basket" style="color: black;"></ion-icon>\n\n        </ion-list-header>\n\n        <ion-item>\n\n          <ion-label>Subtotal</ion-label><ion-label style="text-align: right"> 29,90</ion-label>\n\n        </ion-item>\n\n      </ion-list>\n\n      <button ion-button full color="secondary" style="vertical-align: bottom;">\n\n        Comprar\n\n      </button>\n\n\n\n      <ion-card>\n\n\n\n        <div>\n\n          <img src="images/cenoura.png"/>\n\n        </div>\n\n\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Produto\n\n          </ion-card-title>\n\n          <p>\n\n            Descrição do produto\n\n          </p>\n\n        </ion-card-content>\n\n\n\n        <ion-row no-padding>\n\n          <ion-col>\n\n            <button ion-button clear small>\n\n              <ion-icon ios="ios-remove" md="md-remove"></ion-icon>\n\n            </button>\n\n              1\n\n              <button ion-button clear small>\n\n                <ion-icon ios="ios-add" md="md-add"></ion-icon>\n\n              </button>\n\n          </ion-col>\n\n          <ion-col text-right>\n\n            <ion-label>29,90</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gabriel\Documents\cpu\src\pages\carrinho\carrinho.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */]])
], Carrinho);

//# sourceMappingURL=carrinho.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map