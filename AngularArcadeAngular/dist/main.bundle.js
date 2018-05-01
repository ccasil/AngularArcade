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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var arcade_component_1 = __webpack_require__("./src/app/arcade/arcade.component.ts");
var tictactoe_component_1 = __webpack_require__("./src/app/tictactoe/tictactoe.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'arcade', component: arcade_component_1.ArcadeComponent },
    { path: 'tictactoe', component: tictactoe_component_1.TictactoeComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: arcade_component_1.ArcadeComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Angular Arcade</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var arcade_component_1 = __webpack_require__("./src/app/arcade/arcade.component.ts");
var tictactoe_component_1 = __webpack_require__("./src/app/tictactoe/tictactoe.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                arcade_component_1.ArcadeComponent,
                tictactoe_component_1.TictactoeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/arcade/arcade.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/arcade/arcade.component.html":
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/tictactoe']\">Tic Tac Toe</button>"

/***/ }),

/***/ "./src/app/arcade/arcade.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ArcadeComponent = /** @class */ (function () {
    function ArcadeComponent() {
    }
    ArcadeComponent.prototype.ngOnInit = function () {
    };
    ArcadeComponent = __decorate([
        core_1.Component({
            selector: 'app-arcade',
            template: __webpack_require__("./src/app/arcade/arcade.component.html"),
            styles: [__webpack_require__("./src/app/arcade/arcade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArcadeComponent);
    return ArcadeComponent;
}());
exports.ArcadeComponent = ArcadeComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Enter your name:</h4>\n<form (submit)=\"addNewPlayer()\">\n  <input type=\"text\" name=\"newPlayer.name\" [(ngModel)]=\"newPlayer.name\">\n  <p *ngIf=\"newPlayer.name.length > 0\">\n    <button>Submit Name</button>\n  </p>\n\n</form>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.initToConnection();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.newPlayer = { name: '', socketid: this.socketid };
        // this._httpService.on("initial")
    };
    HomeComponent.prototype.addNewPlayer = function () {
        var _this = this;
        console.log('in home component');
        // this.newPlayer.name = name //need this line to get name from the html
        var observable = this._httpService.addNewPlayer(this.newPlayer);
        observable.subscribe(function (data) {
            // console.log("123123123", data)
            _this._router.navigate(['/arcade']);
            // return false;
        });
    };
    HomeComponent.prototype.initToConnection = function () {
        var _this = this;
        this._httpService.initSocket();
        this._httpService.onEvent('connect').subscribe(function () {
            console.log('You are connected!');
        });
        this._httpService.onEvent('other:connection').subscribe(function () {
            console.log('Somebody else connected!');
        });
        this.ioConnection = this._httpService.oninitial().subscribe(function (data) {
            console.log(data);
            // this.socketid = data['socketid']
            _this.newPlayer.socketid = data['socketid'];
            console.log(_this.newPlayer);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var io = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
var SERVER_URL = 'http://localhost:8000';
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.addNewPlayer = function (player) {
        return this._http.post('/player', player);
    };
    HttpService.prototype.startgame = function () {
        return this._http.get('/startgame');
    };
    HttpService.prototype.broadcast = function () {
        // console.log(message)
        this.socket.emit('broadcasting');
    };
    HttpService.prototype.onBroadcast = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('broadcast', function (data) {
                observer.next(data);
                console.log('in broadcast service', data);
            });
        });
    };
    HttpService.prototype.initSocket = function () {
        this.socket = io(SERVER_URL);
    };
    HttpService.prototype.onEvent = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    HttpService.prototype.oninitial = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('initial', function (data) {
                observer.next(data);
                console.log('12342q353545', data);
                _this.socketid = data['socketid'];
            });
        });
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/tictactoe/tictactoe.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tictactoe/tictactoe.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tictactoe/tictactoe.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TictactoeComponent = /** @class */ (function () {
    function TictactoeComponent() {
    }
    TictactoeComponent.prototype.ngOnInit = function () {
    };
    TictactoeComponent = __decorate([
        core_1.Component({
            selector: 'app-tictactoe',
            template: __webpack_require__("./src/app/tictactoe/tictactoe.component.html"),
            styles: [__webpack_require__("./src/app/tictactoe/tictactoe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TictactoeComponent);
    return TictactoeComponent;
}());
exports.TictactoeComponent = TictactoeComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map