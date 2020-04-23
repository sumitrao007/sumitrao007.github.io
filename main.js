(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, compimport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compimport", function() { return compimport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listofcountries_listofcountries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listofcountries/listofcountries.component */ "./src/app/listofcountries/listofcountries.component.ts");
/* harmony import */ var _country_details_country_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country-details/country-details.component */ "./src/app/country-details/country-details.component.ts");





var routes = [
    {
        path: "",
        component: _listofcountries_listofcountries_component__WEBPACK_IMPORTED_MODULE_3__["ListofcountriesComponent"]
    },
    {
        path: "countrydetails/:date",
        component: _country_details_country_details_component__WEBPACK_IMPORTED_MODULE_4__["CountryDetailsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var compimport = [_listofcountries_listofcountries_component__WEBPACK_IMPORTED_MODULE_3__["ListofcountriesComponent"], _country_details_country_details_component__WEBPACK_IMPORTED_MODULE_4__["CountryDetailsComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'RealTimeAppCovid19';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _listcountry_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listcountry-service.service */ "./src/app/listcountry-service.service.ts");
/* harmony import */ var _countrydetail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./countrydetail.service */ "./src/app/countrydetail.service.ts");





// import { ListofcountriesComponent } from './listofcountries/listofcountries.component';
// import { CountryDetailsComponent } from './country-details/country-details.component';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                // ListofcountriesComponent,
                // CountryDetailsComponent,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["compimport"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_listcountry_service_service__WEBPACK_IMPORTED_MODULE_6__["ListcountryServiceService"],
                _countrydetail_service__WEBPACK_IMPORTED_MODULE_7__["CountrydetailService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/country-details/country-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/country-details/country-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".highlight{\r\n    background:#4CAF50 ;\r\n}\r\n.danger{\r\n    background: #FF5733;\r\n}\r\n.recovered{\r\n    background: #C39BD3;\r\n}\r\n.confirmed{\r\n    background: #DAF7A6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS1kZXRhaWxzL2NvdW50cnktZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY291bnRyeS1kZXRhaWxzL2NvdW50cnktZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZ2hsaWdodHtcclxuICAgIGJhY2tncm91bmQ6IzRDQUY1MCA7XHJcbn1cclxuLmRhbmdlcntcclxuICAgIGJhY2tncm91bmQ6ICNGRjU3MzM7XHJcbn1cclxuLnJlY292ZXJlZHtcclxuICAgIGJhY2tncm91bmQ6ICNDMzlCRDM7XHJcbn1cclxuLmNvbmZpcm1lZHtcclxuICAgIGJhY2tncm91bmQ6ICNEQUY3QTY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/country-details/country-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/country-details/country-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n\n\t<div class=\"row\">\n\n\t\t<div class=\"col-lg-5 col-md-5 col-12 order-lg-1 order-2\">\n\t\n\t\t  <div class=\"leftside w-100 h-100 d-flex justify-content-center align-items-center eksath_anime\">\n\t\t\t\t<a routerLink=\"\">\t<img src=\"../../assets/eksath.png\" width=\"300\" height=\"300\" >  </a>\n\t\t\t\t</div>\n\t\t</div>\n\t\n\t\t<div class=\"col-lg-7 col-md-7 col-12 order-1 order-lg-2 \" >\n\t\t\t\t<div class=\"rightside  w-100 h-100 d-flex justify-content-center align-items-center text-left\">\n\t\t\t\t\t<h1>&#35; घरी राहा &#44; सुरक्षित  राहा  आणि लॉकडाउनच पालन करा   <br> Fight Together <br> Against Cor<span class=\"corona_anime\"><img src=\"../../assets/corona.png\"></span>na Virus</h1> \n\t\t\t\t</div>\n\t\t</div>   \n\t\n\t  </div><!-- close here first row -->\n\n  \n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"d-flex justify-content-around align-items-center\">\n        <div >\n          <h3 class=\"text-center text-uppercase\" style=\"color: #ff7675;\"> covid-19 updates</h3>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"d-flex justify-content-around align-items-center\">\n        <div >\n          <h3 class=\"text-center text-uppercase\" style=\"color: #4CAF50;\"> {{countrydetails.country}} </h3>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-3 col-sm-3\">\n      <div class=\"d-flex justify-content-around align-items-center\">\n        <div>\n          <h1 class=\"count\" style=\"color:#FF9900;\"> {{countrydetails.TotalConfirmed}} </h1>\n         <strong><p>Total Confirmed</p></strong> \n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3\">\n      <div class=\"d-flex justify-content-around align-items-center\">\n        <div>\n          <h1 class=\"count\" style=\"color: #4CAF50;\"> {{countrydetails.TotalRecovered}} </h1>\n          <strong> <p>Total Recovered</p></strong>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3\">\n      <div class=\"d-flex justify-content-around align-items-center\">\n        <div>\n          <h1 class=\"count\" style=\"color: #ff7675;\" > {{countrydetails.TotalDeaths}} </h1>\n         <strong> <p>Total Deaths</p> </strong>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-3\">\n      <div class=\"d-flex justify-content-around align-items-center\">\n        <div>\n          <h1 class=\"count\" style=\"color: #E850A8;\"> {{date}} </h1>\n          <strong>  <p>Date </p> </strong>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  \n  <div class=\"row\">\n    \n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n\n      <div [hidden]=\"ishidden\">\n        \n      <div class=\"tableFixHead\">\n        \n        <table class=\"table table-bordered table-hover\">\n\n          <thead class=\"thead-dark\">\n            <th>#</th>\n            <th>Last Updated Time</th>\n            <th>State</th>\n            <th>Confirmed</th>\n            <th>Active</th>\n            <th>Recovered</th>\n            <th>Deaths</th>          \n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let item of statewiseDetails|slice:1;index as i\" (mouseover)=\"onMouseOver(item)\"\n            (mouseout)=\"MouseOut()\">\n\t\t\t\t\t\t\t\t\n              <td> {{i+1}} </td>\n              <td> {{item.lastupdatedtime}} </td>\n              <td [ngClass]=\"{'highlight':selectState==item.state}\"> {{item.state}} </td>\n              <td [ngClass]=\"{'confirmed':selectState==item.state}\"> {{item.confirmed}} </td>\n              <td> {{item.active}} </td>\n              <td [ngClass]=\"{'recovered':selectState==item.state}\"> {{item.recovered}} </td>\n              <td [ngClass]=\"{'danger':selectState==item.state}\"> {{item.deaths}} </td>\n\t\t\t\n            </tr>\n\n          </tbody>\n\n        </table>\n      </div> \n      </div><!-- ishidden Div close here -->\n    </div>\n\n      </div><!-- row close Here -->\n\n      \n\n      \n      \n      \n\n</div>\n\n\n\n<div class=\"container-fluid sub_section pt-5 pb-5\" id=\"aboutid\">\n  <div class=\"section_header text-center mb-5 mt-4\">\n    <h1 class=\"\">About COVID-19</h1>\n  </div>\n\n  <div class=\"row pt-5\">\n    <div class=\"col-lg-5 col-md-6  col-6 ml-5\">\n      <!-- <div class=\"  \"> -->\n        <img src=\"../../assets/aboutcorona.jpg\" class=\"img-fluid\">\n      <!-- </div> -->\n    </div>\n\n    <div class=\"col-lg-6  col-md-6 col-6\">\n        <h2 class=\"pb-3\">What is COVID-19 (Corona-Virus)</h2>\n        <p>COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.</p>\n        <p>Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.\n        </p>\n      \n    </div>\n  </div>\n</div>\n\n\n<!-- ********************************* symptoms section ****************************** -->\n\n<div class=\"container-fluid  pt-5 pb-5\" id=\"sympid\">\n\t<div class=\"section_header text-center mb-5 mt-4\">\n\t\t<h1 class=\"\">Corona virus symptoms </h1>\n\t</div>\n\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class= \"col-lg-4 col-md-4 col-12 mt-5 \" > \n\t\t\t\t<figure class=\"text-center\">\n\t\t\t\t\t<img src=\"../../assets/cough.png\" class=\"img-fluid\" width=\"120\" height=\"120\">\n\t\t\t\t\t<figcaption > cough </figcaption>\n\t\t\t\t</figure>\n\t\t\t</div>\n\n\t\t\t<div class= \"col-lg-4 col-md-4 col-12 mt-5 \" > \n\t\t\t\t<figure  class=\"text-center\">\n\t\t\t\t\t<img src=\"../../assets/runnynose.png\" class=\"img-fluid\" width=\"120\" height=\"120\">\n\t\t\t\t\t<figcaption > runny nose </figcaption>\n\t\t\t\t</figure>\n\t\t\t</div>\n\n\t\t\t<div class= \"col-lg-4 col-md-4 col-12 mt-5 \" > \n\t\t\t\t<figure  class=\"text-center\">\n\t\t\t\t\t<img src=\"../../assets/fever.png\" class=\"img-fluid\" width=\"120\" height=\"120\">\n\t\t\t\t\t<figcaption > fever </figcaption>\n\t\t\t\t</figure>\n\t\t\t</div>\n\n\t\t\t<div class= \"col-lg-4 col-md-4 col-12 mt-5 \" > \n\t\t\t\t<figure  class=\"text-center\">\n\t\t\t\t\t<img src=\"../../assets/sick.png\" class=\"img-fluid\" width=\"120\" height=\"120\">\n\t\t\t\t\t<figcaption > cold </figcaption>\n\t\t\t\t</figure>\n\t\t\t</div>\n\n\t\t\t<div class= \"col-lg-4 col-md-4 col-12 mt-5 \" > \n\t\t\t\t<figure  class=\"text-center\" >\n\t\t\t\t\t<img src=\"../../assets/week.png\" class=\"img-fluid\" width=\"120\" height=\"120\">\n\t\t\t\t\t<figcaption > tiredness </figcaption>\n\t\t\t\t</figure>\n\t\t\t</div>\n\n\t\t\t<div class= \"col-lg-4 col-md-4 col-12 mt-5 \" > \n\t\t\t\t<figure  class=\"text-center\">\n\t\t\t\t\t<img src=\"../../assets/breath.png\" class=\"img-fluid\" width=\"120\" height=\"120\">\n\t\t\t\t\t<figcaption > difficulty breathing (severe cases) </figcaption>\n\t\t\t\t</figure>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n\n<!-- *************************************** Prevention section *************** -->\n\n<div class=\"container-fluid sub_section pt-5 pb-5\" id=\"preventid\">\n\t<div class=\"section_header text-center mb-5 mt-4\">\n\t\t<h1 class=\"text-capitalize\">6 steps Prevention against Coronavirus  </h1>\n\t</div>\n\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4  col-md-4  col-12 mt-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-12 \">\n\t\t\t\t\t\t<figure>\n\t\t\t\t\t\t\t<img src=\"../../assets/handwash.png\" class=\"img-fluid\" width=\"90\" height=\"90\">\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-12\">\n\t\t\t\t\t\t<p>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-4  col-md-4  col-12 mt-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-12 \">\n\t\t\t\t\t\t<figure>\n\t\t\t\t\t\t\t<img src=\"../../assets/mask.png\" class=\"img-fluid\" width=\"90\" height=\"90\">\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-12\">\n\t\t\t\t\t\t<p>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"col-lg-4  col-md-4  col-12 mt-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-12 \">\n\t\t\t\t\t\t<figure>\n\t\t\t\t\t\t\t<img src=\"../../assets/quarantine.png\" class=\"img-fluid\" width=\"90\" height=\"90\">\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-12\">\n\t\t\t\t\t\t<p>Avoid close contact (1 meter or 3 feet) with people who are unwell</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"col-lg-4  col-md-4  col-12 mt-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-12 \">\n\t\t\t\t\t\t<figure>\n\t\t\t\t\t\t\t<img src=\"../../assets/home.png\" class=\"img-fluid\" width=\"90\" height=\"90\">\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-12\">\n\t\t\t\t\t\t<p>Stay home and self-isolate from others in the household if you feel unwell</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-4  col-md-4  col-12 mt-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-12 \">\n\t\t\t\t\t\t<figure>\n\t\t\t\t\t\t\t<img src=\"../../assets/news.png\" class=\"img-fluid\" width=\"90\" height=\"90\">\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-12\">\n\t\t\t\t\t\t<p>Stay informed by watching news & follow the recommended practices</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-4  col-md-4  col-12 mt-5\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-12 \">\n\t\t\t\t\t\t<figure>\n\t\t\t\t\t\t\t<img src=\"../../assets/medical.png\" class=\"img-fluid\" width=\"90\" height=\"90\">\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-12\">\n\t\t\t\t\t\t<p>If you have fever, cough and difficulty breathing, seek medical care early</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<footer class=\"mt-5\">\n\t<div class=\" footer_style bg-dark text-white container-fluid text-center\">\n\t\t<p>&#169;&nbsp;copyright 2020 by Sumit Raokhande</p>\n\t</div>\n</footer>\n<br>"

/***/ }),

/***/ "./src/app/country-details/country-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/country-details/country-details.component.ts ***!
  \**************************************************************/
/*! exports provided: CountryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDetailsComponent", function() { return CountryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _countrydetail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../countrydetail.service */ "./src/app/countrydetail.service.ts");




var CountryDetailsComponent = /** @class */ (function () {
    function CountryDetailsComponent(route, service) {
        this.route = route;
        this.service = service;
        this.countrydetails = {};
        this.ishidden = true;
        this.statewiseDetails = [];
        this.date = "";
        this.selectState = "";
    }
    CountryDetailsComponent.prototype.ngOnInit = function () {
        this.getCountryDetails();
        if (this.countrydetails.country == "India") {
            this.ishidden = false;
        }
        else {
            this.ishidden = true;
        }
        this.getstatewisedetails();
    };
    CountryDetailsComponent.prototype.getCountryDetails = function () {
        var _this = this;
        this.route.queryParamMap
            .subscribe(function (param) {
            _this.countrydetails = {
                country: param.get('Country'),
                TotalConfirmed: param.get('TotalConfirmed'),
                TotalRecovered: param.get('TotalRecovered'),
                TotalDeaths: param.get('TotalDeaths'),
            };
            // console.log(this.countrydetails.country);
        });
        this.route.paramMap.subscribe(function (parammap) {
            _this.date = parammap.get('date');
        });
    };
    CountryDetailsComponent.prototype.getstatewisedetails = function () {
        var _this = this;
        this.service.getstatewiseDetails()
            .subscribe(function (response) {
            _this.statewiseDetails = response['statewise'];
        });
    };
    CountryDetailsComponent.prototype.onMouseOver = function (item) {
        this.selectState = item.state;
    };
    CountryDetailsComponent.prototype.MouseOut = function () {
        this.selectState = "";
    };
    CountryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country-details',
            template: __webpack_require__(/*! ./country-details.component.html */ "./src/app/country-details/country-details.component.html"),
            styles: [__webpack_require__(/*! ./country-details.component.css */ "./src/app/country-details/country-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _countrydetail_service__WEBPACK_IMPORTED_MODULE_3__["CountrydetailService"]])
    ], CountryDetailsComponent);
    return CountryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/countrydetail.service.ts":
/*!******************************************!*\
  !*** ./src/app/countrydetail.service.ts ***!
  \******************************************/
/*! exports provided: CountrydetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrydetailService", function() { return CountrydetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CountrydetailService = /** @class */ (function () {
    function CountrydetailService(http) {
        this.http = http;
        this.url = "https://api.covid19india.org/data.json";
    }
    CountrydetailService.prototype.getstatewiseDetails = function () {
        return this.http.get(this.url);
    };
    CountrydetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CountrydetailService);
    return CountrydetailService;
}());



/***/ }),

/***/ "./src/app/listcountry-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/listcountry-service.service.ts ***!
  \************************************************/
/*! exports provided: ListcountryServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcountryServiceService", function() { return ListcountryServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ListcountryServiceService = /** @class */ (function () {
    function ListcountryServiceService(http) {
        this.http = http;
        this.url = "https://api.covid19api.com/summary";
    }
    ListcountryServiceService.prototype.getListOfCountries = function () {
        return this.http.get(this.url);
    };
    ListcountryServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ListcountryServiceService);
    return ListcountryServiceService;
}());



/***/ }),

/***/ "./src/app/listofcountries/listofcountries.component.css":
/*!***************************************************************!*\
  !*** ./src/app/listofcountries/listofcountries.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.corono_update{\r\n\tmargin: 0 0 30px 0;\r\n\t/*background-color: #fab1a0;*/\r\n}\r\n\r\n.corono_update h3{ color: #ff7675; }\r\n\r\n.corono_update h1{\r\n\tfont-size: 2rem;\r\n\ttext-align: center;\r\n}\r\n\r\n.highlight{\r\n    background:#4CAF50 ;\r\n}\r\n\r\n.danger{\r\n    background: #FF5733;\r\n}\r\n\r\n.recovered{\r\n    background: #C39BD3;\r\n}\r\n\r\n.confirmed{\r\n    background: #DAF7A6;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdG9mY291bnRyaWVzL2xpc3RvZmNvdW50cmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQiw2QkFBNkI7QUFDOUI7O0FBRUEsbUJBQW1CLGNBQWMsRUFBRTs7QUFFbkM7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbGlzdG9mY291bnRyaWVzL2xpc3RvZmNvdW50cmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb3Jvbm9fdXBkYXRle1xyXG5cdG1hcmdpbjogMCAwIDMwcHggMDtcclxuXHQvKmJhY2tncm91bmQtY29sb3I6ICNmYWIxYTA7Ki9cclxufVxyXG5cclxuLmNvcm9ub191cGRhdGUgaDN7IGNvbG9yOiAjZmY3Njc1OyB9XHJcblxyXG4uY29yb25vX3VwZGF0ZSBoMXtcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oaWdobGlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kOiM0Q0FGNTAgO1xyXG59XHJcbi5kYW5nZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY1NzMzO1xyXG59XHJcbi5yZWNvdmVyZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzM5QkQzO1xyXG59XHJcbi5jb25maXJtZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjREFGN0E2O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/listofcountries/listofcountries.component.html":
/*!****************************************************************!*\
  !*** ./src/app/listofcountries/listofcountries.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-5 col-md-5 col-12 order-lg-1 order-2\">\n\n      <div class=\"leftside w-100 h-100 d-flex justify-content-center align-items-center eksath_anime\">\n\t\t\t\t<img src=\"../../assets/eksath.png\" width=\"300\" height=\"300\" >\n\t\t\t</div>\n    </div>\n\n    <div class=\"col-lg-7 col-md-7 col-12 order-1 order-lg-2 \" >\n\t\t\t<div class=\"rightside  w-100 h-100 d-flex justify-content-center align-items-center text-left\">\n        <h1>&#35; घरी राहा &#44; सुरक्षित  राहा  आणि लॉकडाउनच पालन करा   <br> Fight Together <br> Against Cor<span class=\"corona_anime\"><img src=\"../../assets/corona.png\"></span>na Virus</h1>         \n      </div>\n      \n    </div>   \n\n  </div><!-- close here first row -->\n  <div class=\"row\">\n    <div class=\"col-lg-5 col-md-5 col-12 order-lg-1 order-2\">\n\n    </div>\n    <div class=\"col-lg-7 col-md-7 col-12 order-1 order-lg-2 \">\n      <div class=\"rightside  w-100 h-100 d-flex justify-content-center align-items-center text-left\">\n      <a [routerLink]=\"['countrydetails',date]\" [queryParams]=\"indialive\">  <h3 style=\"color:#4CAF50;\">Corona India Live</h3> </a>\n        </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"d-flex justify-content-around align-items-center\">\n        <div >\n          <h3 class=\"text-center text-uppercase\" style=\"color: #ff7675;\"> covid-19 updates</h3>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-3 col-sm-3\">\n      <div class=\"d-flex justify-content-around align-items-center\">\n        <div>\n          <h1 class=\"count\"> {{globaldetails.TotalConfirmed}} </h1>\n         <strong><p>Total Confirmed</p></strong> \n        </div>    \n      </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-3 col-sm-3\">\n          <div class=\"d-flex justify-content-around align-items-center\">\n            <div>\n              <h1 class=\"count\"> {{globaldetails.TotalRecovered}} </h1>\n              <strong> <p>Total Recovered</p></strong>\n            </div> \n          </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-3\">\n              <div class=\"d-flex justify-content-around align-items-center\">\n                <div>\n                  <h1 class=\"count\"> {{globaldetails.TotalDeaths}} </h1>\n                 <strong> <p>Total Deaths</p> </strong>\n                </div>\n\n              </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-3 col-sm-3\">\n                  <div class=\"d-flex justify-content-around align-items-center\">\n                    \n                    <div>\n                      <h1 class=\"count\"> {{date}} </h1>\n                      <strong>  <p>Date </p> </strong>\n                    </div>\n                  </div>\n                    </div>\n  </div>\n\n \n\n  <!-- close here Second row -->\n\n  <div class=\"row\">\n    \n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n\n      <div class=\"tableFixHead\">\n\n        <table class=\"table table-bordered table-hover\">\n          <thead class=\"thead-dark\">\n            <th>#</th>\n            <th>Country</th>\n            <th>NewConfirmed</th>\n            <th>NewRecovered</th>\n            <th>NewDeaths</th>\n            <th>TotalConfirmed</th>\n            <th>TotalRecovered</th>\n            <th>TotalDeaths</th>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let item of listcountry;index as i\" style=\"padding: 2px;\" (mouseover)=\"onMouseOver(item)\"\n            (mouseout)=\"MouseOut()\">\n              <td> {{i+1}} </td>\n              <td [ngClass]=\"{'highlight':country==item.Country}\">\n                <a [routerLink]=\"['countrydetails',date]\" [queryParams]=\"item\"> {{item.Country}} </a> </td>\n              <td> {{item.NewConfirmed}} </td>\n              <td> {{item.NewRecovered}} </td>\n              <td> {{item.NewDeaths}} </td>\n              <td [ngClass]=\"{'confirmed':country==item.Country}\"> {{item.TotalConfirmed}} </td>\n              <td [ngClass]=\"{'recovered':country==item.Country}\"> {{item.TotalRecovered}} </td>\n              <td [ngClass]=\"{'danger':country==item.Country}\" > {{item.TotalDeaths}} </td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </div>\n\n\n    </div><!-- close here third row -->\n\n  </div>\n\n</div>\n<br>\n<footer class=\"mt-5\">\n\t<div class=\" footer_style bg-dark text-white container-fluid text-center\">\n\t\t<p>&#169;&nbsp;copyright 2020 by Sumit Raokhande</p>\n\t</div>\n</footer>\n<br>"

/***/ }),

/***/ "./src/app/listofcountries/listofcountries.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/listofcountries/listofcountries.component.ts ***!
  \**************************************************************/
/*! exports provided: ListofcountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListofcountriesComponent", function() { return ListofcountriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listcountry_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listcountry-service.service */ "./src/app/listcountry-service.service.ts");



var ListofcountriesComponent = /** @class */ (function () {
    function ListofcountriesComponent(service) {
        this.service = service;
        this.listcountry = [];
        this.globaldetails = {
            TotalConfirmed: "",
            TotalRecovered: "",
            TotalDeaths: ""
        };
        this.date = "";
        this.country = "";
        this.indialive = {};
    }
    ListofcountriesComponent.prototype.ngOnInit = function () {
        this.getoflist();
    };
    ListofcountriesComponent.prototype.getoflist = function () {
        var _this = this;
        this.service.getListOfCountries()
            .subscribe(function (response) {
            // console.log(response);
            _this.listcountry = response['Countries'];
            // console.log(this.listcountry);
            // this.globaldetails=response['Global'];
            // console.log("Total confirmed"+response['Global']['TotalConfirmed']);
            _this.globaldetails = {
                TotalConfirmed: response['Global']['TotalConfirmed'],
                TotalRecovered: response['Global']['TotalRecovered'],
                TotalDeaths: response['Global']['TotalDeaths']
            };
            //  console.log(this.globaldetails);
            _this.date = response['Date'];
            _this.date = _this.date.slice(0, 10);
            for (var index = 0; index < _this.listcountry.length; index++) {
                if (_this.listcountry[index].Country == "India") {
                    _this.indialive = {
                        Country: _this.listcountry[index].Country,
                        NewConfirmed: _this.listcountry[index].NewConfirmed,
                        NewRecovered: _this.listcountry[index].NewRecovered,
                        NewDeaths: _this.listcountry[index].NewDeaths,
                        TotalConfirmed: _this.listcountry[index].TotalConfirmed,
                        TotalRecovered: _this.listcountry[index].TotalRecovered,
                        TotalDeaths: _this.listcountry[index].TotalDeaths,
                        CountryCode: _this.listcountry[index].CountryCode,
                        Date: _this.listcountry[index].Date,
                        Slug: _this.listcountry[index].Slug,
                    };
                }
            }
        });
    };
    ListofcountriesComponent.prototype.onMouseOver = function (item) {
        this.country = item.Country;
    };
    ListofcountriesComponent.prototype.MouseOut = function () {
        this.country = "";
    };
    ListofcountriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listofcountries',
            template: __webpack_require__(/*! ./listofcountries.component.html */ "./src/app/listofcountries/listofcountries.component.html"),
            styles: [__webpack_require__(/*! ./listofcountries.component.css */ "./src/app/listofcountries/listofcountries.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listcountry_service_service__WEBPACK_IMPORTED_MODULE_2__["ListcountryServiceService"]])
    ], ListofcountriesComponent);
    return ListofcountriesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular_program\CoronaRealTimeApp\RealTimeAppCovid19\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map