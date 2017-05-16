webpackJsonp([5],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infoProduto__ = __webpack_require__(277);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoProdutoModule", function() { return infoProdutoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var infoProdutoModule = (function () {
    function infoProdutoModule() {
    }
    return infoProdutoModule;
}());
infoProdutoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__infoProduto__["a" /* infoProduto */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__infoProduto__["a" /* infoProduto */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__infoProduto__["a" /* infoProduto */]
        ]
    })
], infoProdutoModule);

//# sourceMappingURL=infoProduto.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return infoProduto; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var infoProduto = (function () {
    function infoProduto(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '' };
        this.id = '';
        this.id = this.navParams.get('paramId');
    }
    return infoProduto;
}());
infoProduto = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-infoProduto',template:/*ion-inline-start:"C:\Users\Lukete da Bahia\cpu\src\pages\infoProduto\infoProduto.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n  	<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n	<ion-card>\n\n\n\n		<div class="container">\n\n	    	<img class="imageInfo" src="images/fertilizante.png"/>\n\n	    </div>\n\n	    	\n\n	    <ion-card-content>\n\n	      <ion-card-title>\n\n	        Fertilizante Industrial - 10L\n\n	      </ion-card-title>\n\n	      <p>\n\n	       É um fertilizante potássico obtido pelo processo natural de moagem, sem utilização de processos químicos para a sua produção.\n\n	      </p>\n\n	    </ion-card-content>\n\n\n\n	    <ion-list>\n\n		  <ion-item>\n\n		    <ion-label>Quantidade:</ion-label>\n\n		    <ion-select [(ngModel)]="quantidade" okText="Selecionar" cancelText="Cancelar">\n\n		      <ion-option >01</ion-option>\n\n              <ion-option >02</ion-option>\n\n              <ion-option >03</ion-option>\n\n              <ion-option >04</ion-option>\n\n              <ion-option >05</ion-option>\n\n              <ion-option >06</ion-option>\n\n              <ion-option >07</ion-option>\n\n              <ion-option >08</ion-option>\n\n              <ion-option >09</ion-option>\n\n              <ion-option >10</ion-option>\n\n		    </ion-select>\n\n		  </ion-item>\n\n		</ion-list>\n\n	    \n\n	    <ion-item>\n\n	      <ion-label>Valor: </ion-label>\n\n	      <ion-label>R$ 159,99</ion-label>		\n\n	    </ion-item>\n\n\n\n	    <ion-item>\n\n	      <ion-label>Total:</ion-label>\n\n	      <ion-label>R$ 159,99</ion-label>\n\n	    </ion-item>\n\n	    \n\n	    <button ion-button full color="secondary" style="vertical-align: bottom;">\n\n       	 	Adicionar no carrinho\n\n      	</button>\n\n   </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lukete da Bahia\cpu\src\pages\infoProduto\infoProduto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], infoProduto);

//# sourceMappingURL=infoProduto.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map