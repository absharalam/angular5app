webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <title>Bootstrap Dashboard by Bootstrapious.com</title>\r\n    <meta name=\"description\" content=\"\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <meta name=\"robots\" content=\"all,follow\">\r\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\">\r\n    <link rel=\"shortcut icon\" href=\"img/favicon.ico\">\r\n    <!-- Tweaks for older IEs--><!--[if lt IE 9]>\r\n        <script src=\"https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js\"></script>\r\n        <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script><![endif]-->\r\n  </head>\r\n  <body>\r\n    <!-- Side Navbar -->\r\n    <nav class=\"side-navbar\">\r\n      <div class=\"side-navbar-wrapper\">\r\n        <!-- Sidebar Header    -->\r\n        <div class=\"sidenav-header d-flex align-items-center justify-content-center\">\r\n          <!-- User Info -->\r\n          <div class=\"sidenav-header-inner text-center\">\r\n              <!-- <img src=\"../assets/img/avatar-1.jpg\" alt=\"person\" class=\"img-fluid rounded-circle\"> -->\r\n            <h2 class=\"h5\">INVENTORY SYSTEM</h2><span>XYZ</span>\r\n          </div>\r\n          <!-- Small Brand information, appears on minimized sidebar-->\r\n          <div class=\"sidenav-header-logo\"><a routerLink=\"home\" class=\"brand-small text-center\"> <strong>I</strong><strong class=\"text-primary\">S</strong></a></div>     \r\n        </div>\r\n        <!-- Sidebar Navigation Menus-->\r\n        <!-- <br><br><br> -->\r\n        <div class=\"main-menu\">\r\n          <!-- <h5 class=\"sidenav-heading\">Main</h5> -->\r\n          <ul id=\"side-main-menu\" class=\"side-menu list-unstyled\">                  \r\n            <li><a routerLink=\"manage-products\"> <i class=\"icon-home\"></i>Manage Products                             </a></li>\r\n            \r\n          </ul>\r\n        </div>\r\n    \r\n      </div>\r\n    </nav>\r\n    <div class=\"page\">\r\n      <!-- navbar-->\r\n      <header class=\"header\">\r\n        <nav class=\"navbar\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"navbar-holder d-flex align-items-center justify-content-between\">\r\n              <div class=\"navbar-header\"><a id=\"toggle-btn\" href=\"#\" class=\"menu-btn\"><i class=\"icon-bars\"> </i></a><a href=\"index.html\" class=\"navbar-brand\">\r\n                  <div class=\"brand-text d-none d-md-inline-block\"><strong class=\"text-primary\">FASHOIN MART</strong></div></a></div>\r\n              <ul class=\"nav-menu list-unstyled d-flex flex-md-row align-items-md-center\">\r\n                  <li class=\"nav-item\"><a href=\"login.html\" class=\"nav-link logout\">Logout<i class=\"fa fa-sign-out\"></i></a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </nav>\r\n      </header>\r\n\r\n      <router-outlet></router-outlet>\r\n      \r\n      <footer class=\"main-footer\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <p>Your company &copy; 2017-2019</p>\r\n            </div>\r\n            <div class=\"col-sm-6 text-right\">\r\n              <!-- <p>Design by <a href=\"#\" class=\"external\">Bootstrapious</a></p> -->\r\n              <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </body>\r\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manageproduct_manageproduct_component__ = __webpack_require__("./src/app/manageproduct/manageproduct.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] },
    { path: 'manage-products', component: __WEBPACK_IMPORTED_MODULE_5__manageproduct_manageproduct_component__["a" /* ManageproductComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__manageproduct_manageproduct_component__["a" /* ManageproductComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true, useHash: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/manageproduct/manageproduct.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manageproduct/manageproduct.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4>Striped Table</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                \n                <th>User Id</th>\n                <th>Title</th>\n                <th>Body</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of result\">\n                <th scope=\"row\">{{data.userId}}</th>\n                <td>{{data.title}}</td>\n                <td>{{data.body}}</td>\n              </tr>\n             \n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/manageproduct/manageproduct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageproductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageproductComponent = /** @class */ (function () {
    function ManageproductComponent() {
        var _this = this;
        this.result = [];
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.result = data; })
            .catch(function (err) { return console.log(err); });
    }
    ManageproductComponent.prototype.ngOnInit = function () {
    };
    ManageproductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manageproduct',
            template: __webpack_require__("./src/app/manageproduct/manageproduct.component.html"),
            styles: [__webpack_require__("./src/app/manageproduct/manageproduct.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageproductComponent);
    return ManageproductComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map