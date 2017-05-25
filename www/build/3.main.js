webpackJsonp([3],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listServicos__ = __webpack_require__(279);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listServicosModule", function() { return listServicosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var listServicosModule = (function () {
    function listServicosModule() {
    }
    return listServicosModule;
}());
listServicosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__listServicos__["a" /* listServicos */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listServicos__["a" /* listServicos */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__listServicos__["a" /* listServicos */]
        ]
    })
], listServicosModule);

//# sourceMappingURL=listServicos.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listServicos; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var listServicos = (function () {
    function listServicos(nav, navParams, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    listServicos.prototype.goInfoServico = function (id) {
        this.nav.push('infoProduto', { paramId: id });
    };
    return listServicos;
}());
listServicos = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-listServicos',template:/*ion-inline-start:"C:\Users\Gabriel\Documents\cpu\src\pages\listServicos\listServicos.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n  	<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-icon ios="ios-medkit" md="md-medkit" style="color: #387ef5;"></ion-icon><ion-title>Serviços</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	 <ion-item (click)="goInfoServico(10)">\n\n	 \n\n      <ion-thumbnail item-left>\n\n        <img src="images/fertilizante.png">\n\n      </ion-thumbnail>\n\n      <h2>Fertilizante orgânico</h2>\n\n      <p>Número: 10212</p>\n\n      <p>Valor: R$100,00</p>\n\n      <button ion-button clear item-right><ion-icon ios="ios-add" md="md-add"  (click)="goInfoProduto(\'Fertilizante orgânico\')"></ion-icon></button>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-thumbnail item-left>\n\n        <img src="images/mel.png">\n\n      </ion-thumbnail>\n\n      <h2>Mel puro</h2>\n\n      <p>Número: 10212</p>\n\n      <p>Valor: R$100,00</p>\n\n      <button ion-button clear item-right><ion-icon ios="ios-add" md="md-add" (click)="goInfoProduto(\'Mel puro\')"></ion-icon></button>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gabriel\Documents\cpu\src\pages\listServicos\listServicos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], listServicos);

//# sourceMappingURL=listServicos.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map