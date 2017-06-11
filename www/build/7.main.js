webpackJsonp([7],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__esquecer_senha__ = __webpack_require__(285);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsquecerSenhaModule", function() { return EsquecerSenhaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EsquecerSenhaModule = (function () {
    function EsquecerSenhaModule() {
    }
    return EsquecerSenhaModule;
}());
EsquecerSenhaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__esquecer_senha__["a" /* EsquecerSenha */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__esquecer_senha__["a" /* EsquecerSenha */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__esquecer_senha__["a" /* EsquecerSenha */]
        ]
    })
], EsquecerSenhaModule);

//# sourceMappingURL=esquecer-senha.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsquecerSenha; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EsquecerSenhaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EsquecerSenha = (function () {
    function EsquecerSenha(http, navCtrl, navParams, alertCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.envioSucesso = false;
    }
    EsquecerSenha.prototype.enviarEmailUsuario = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Headers */]();
        headers.append('Content-Type', 'text/plain');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var usuarioJson = { email: this.emailUsuario };
        this.http.post(__WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* Config */].enderecoPrincipal + '/CatalogoUesbServer/rest/usuario/enviarEmail', JSON.stringify(usuarioJson), options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); })
            .subscribe(function (data) {
            if (data.ret == 1) {
                _this.envioSucesso = true;
                _this.showPopup("Sucesso", data.msg);
            }
            else {
                _this.envioSucesso = false;
                _this.showPopup("Erro", data.msg);
            }
        }, function (err) {
            // Log errors if any
            console.log(err);
        });
        ;
    };
    EsquecerSenha.prototype.enviarEmail = function () {
        this.enviarEmailUsuario();
    };
    EsquecerSenha.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.envioSucesso) {
                            _this.navCtrl.pop();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return EsquecerSenha;
}());
EsquecerSenha = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'page-esquecer-senha',template:/*ion-inline-start:"C:\Users\Gabriel\Documents\cpu\src\pages\esquecer-senha\esquecer-senha.html"*/'<!--\n  Generated template for the EsquecerSenhaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Esquecer a senha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="enviarEmail()" #esquecerSenhaForm="ngForm">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <ion-item>\n            <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="emailUsuario" required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="signup-col">\n        <button ion-button class="submit-btn" full type="submit" [disabled]="!esquecerSenhaForm.form.valid">Enviar</button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gabriel\Documents\cpu\src\pages\esquecer-senha\esquecer-senha.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* AlertController */]) === "function" && _d || Object])
], EsquecerSenha);

var _a, _b, _c, _d;
//# sourceMappingURL=esquecer-senha.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map