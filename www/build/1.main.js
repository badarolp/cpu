webpackJsonp([1],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(281);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* Register */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* Register */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* Register */]
        ]
    })
], RegisterModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Register = (function () {
    function Register(nav, auth, alertCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '' };
    }
    Register.prototype.register = function () {
        var _this = this;
        this.auth.register(this.registerCredentials).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Account created.");
            }
            else {
                _this.showPopup("Error", "Problem creating account.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    Register.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return Register;
}());
Register = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\Badaro\Documents\cpu\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Cadastro</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n\n\n            <ion-item>\n\n              <ion-label>Escolha uma opção:</ion-label>\n\n              <ion-select >\n\n                <ion-option value="nes">Pessoa física</ion-option>\n\n                <ion-option value="nes">Pessoa jurídica</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Nome" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="password" placeholder="CPF" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item style="width: 100%;">\n\n              <ion-label>Data de nascimento</ion-label>\n\n                <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD MM YYYY" required></ion-datetime>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Senha" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Repetir Senha" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n            <ion-grid class= "grid-basic-page" style="background-color: #fff;">\n\n\n\n                <ion-col col-12>Sua senha deve ter de 6 a 8 caracteres.</ion-col>\n\n                <ion-col col-12>Evite utilizar seu nome, apelido ou data de aniversário.</ion-col>\n\n\n\n            </ion-grid>\n\n\n\n            <ion-item class="notificacao">\n\n              <ion-label>Ativar notificação por email</ion-label>\n\n              <ion-toggle color="energized" checked="true"></ion-toggle>\n\n            </ion-item>\n\n\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Cadastrar</button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Badaro\Documents\cpu\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */]])
], Register);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map