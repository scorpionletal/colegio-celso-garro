(self["webpackChunklandrick_angular"] = self["webpackChunklandrick_angular"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'landrick-angular';
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
                window['Unicons']['refresh']();
            }
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 629);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-swiper-wrapper */ 15923);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-typed-js */ 23192);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-youtube-player */ 15622);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularx-flatpickr */ 42160);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-count-to */ 74848);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-masonry */ 70346);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.module */ 18950);
/* harmony import */ var _pages_pages_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.routing */ 63360);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 22723);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-feather/icons */ 940);
/* harmony import */ var _paginaerror_paginaerror_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginaerror/paginaerror.component */ 58027);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-interceptor.service */ 51035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);

































const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__.SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
            useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_7__.AuthInterceptorService,
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__.CarouselModule,
            angular_feather__WEBPACK_IMPORTED_MODULE_15__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_16__.allIcons),
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_17__.ScrollToModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot([], { relativeLinkResolution: 'legacy', initialNavigation: 'enabledNonBlocking' }),
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_18__.NgxYoutubePlayerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_20__.CKEditorModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbNavModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__.SwiperModule,
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_22__.NgxTypedJsModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_23__.FlatpickrModule.forRoot(),
            angular_count_to__WEBPACK_IMPORTED_MODULE_2__.CountToModule,
            ngx_masonry__WEBPACK_IMPORTED_MODULE_24__.NgxMasonryModule,
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__.PagesModule,
            _pages_pages_routing__WEBPACK_IMPORTED_MODULE_5__.PagesRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        ], angular_feather__WEBPACK_IMPORTED_MODULE_15__.FeatherModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _paginaerror_paginaerror_component__WEBPACK_IMPORTED_MODULE_6__.PaginaerrorComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_15__.FeatherModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_17__.ScrollToModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_18__.NgxYoutubePlayerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_20__.CKEditorModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbNavModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__.SwiperModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_22__.NgxTypedJsModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_23__.FlatpickrModule, angular_count_to__WEBPACK_IMPORTED_MODULE_2__.CountToModule,
        ngx_masonry__WEBPACK_IMPORTED_MODULE_24__.NgxMasonryModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__.PagesModule,
        _pages_pages_routing__WEBPACK_IMPORTED_MODULE_5__.PagesRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule], exports: [angular_feather__WEBPACK_IMPORTED_MODULE_15__.FeatherModule] }); })();


/***/ }),

/***/ 51035:
/*!*********************************************!*\
  !*** ./src/app/auth-interceptor.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": function() { return /* binding */ AuthInterceptorService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class AuthInterceptorService {
    constructor() { }
    intercept(req, next) {
        const token = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.key_acceso_backend;
        let request = req;
        if (token) {
            request = req.clone({
                setHeaders: {
                    Authorization: `Api-Key ${token}`
                }
            });
        }
        return next.handle(request);
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(); };
AuthInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 20754:
/*!****************************************************!*\
  !*** ./src/app/pages/aliados/aliados.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AliadosComponent": function() { return /* binding */ AliadosComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 20945);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ 91295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);









class AliadosComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.navClass = 'nav-light';
        this.cartillaData = [
            {
                image: 'assets/images/personal/1.jpg',
                title: 'Vista frente al mar',
                category: 'Mar de Máncora'
            },
            {
                image: 'assets/images/personal/2.jpg',
                title: 'Hermosos atardeceres',
                category: 'Ocaso'
            },
            {
                image: 'assets/images/personal/3.jpg',
                title: 'Nuestras instalaciones',
                category: 'Para su confort'
            },
            {
                image: 'assets/images/personal/4.jpg',
                title: 'Atardecer inolvidable',
                category: 'Sol de Máncora'
            },
            {
                image: 'assets/images/personal/5.jpg',
                title: 'Piscina frente al mar',
                category: 'Disfruta las mejores vacaciones'
            },
            {
                image: 'assets/images/personal/6.jpg',
                title: 'Momentos inolvidables',
                category: 'Cenas romanticas'
            },
        ];
        this.reviewData = [
            {
                profile: "assets/images/client/01.jpg",
                name: "Thomas Israel ",
                designation: "C.E.O",
                message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
            },
            {
                profile: "assets/images/client/02.jpg",
                name: "Carl Oliver",
                designation: "P.A",
                message: `" The advantage of its Latin origin and the relative meaninglessness
        of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention
        from the layout. "`
            },
            {
                profile: "assets/images/client/03.jpg",
                name: "Barbara McIntosh",
                designation: "M.D",
                message: `" There is now an abundance of readable dummy texts. These are
        usually used when a text is required purely to fill a space. These alternatives to the classic Lorem
        Ipsum texts are often amusing and tell short, funny or nonsensical stories. "`
            },
            {
                profile: "assets/images/client/04.jpg",
                name: "Christa Smith",
                designation: "Manager",
                message: `" According to most sources, Lorum Ipsum can be traced back to a text
        composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling
        all the instances of the unusual word 'consectetur' he could find "`
            },
            {
                profile: "assets/images/client/05.jpg",
                name: "Dean Tolle",
                designation: "Developer",
                message: `" It seems that only fragments of the original text remain in the
        Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have
        originated in the 16th century. "`
            },
            {
                profile: "assets/images/client/06.jpg",
                name: "Jill Webb",
                designation: "Designer",
                message: `" It seems that only fragments of the original text remain in the
        Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added
        or deleted at various positions within the text. "`
            }
        ];
    }
    ngOnInit() {
        this._trialEndsAt = "2022-12-25";
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(1000).pipe((0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__.map)((x) => {
            this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
        })).subscribe((x) => {
            this._days = this.getDays(this._diff);
            this._hours = this.getHours(this._diff);
            this._minutes = this.getMinutes(this._diff);
            this._seconds = this.getSeconds(this._diff);
        });
    }
    openWindowCustomClass(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
    getDays(t) {
        return Math.floor(t / (1000 * 60 * 60 * 24));
    }
    getHours(t) {
        return Math.floor((t / (1000 * 60 * 60)) % 24);
    }
    getMinutes(t) {
        return Math.floor((t / 1000 / 60) % 60);
    }
    getSeconds(t) {
        return Math.floor((t / 1000) % 60);
    }
    onActivate(componentReference) {
        this.addclass = componentReference.navClass;
        this.buttonShow = componentReference.buttonList;
        this.TopbarShow = componentReference.sliderTopbar;
        this.footerClass = componentReference.footerVariant;
        this.developerPage = componentReference.isdeveloper;
        this.hideFooter = componentReference.hideFooter;
        this.shopPages = componentReference.shopPages;
    }
}
AliadosComponent.ɵfac = function AliadosComponent_Factory(t) { return new (t || AliadosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal)); };
AliadosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AliadosComponent, selectors: [["app-aliados"]], decls: 250, vars: 8, consts: [[3, "navClass", "buttonList", "sliderTopbar", "isdeveloper", "shopPages"], [3, "activate"], ["id", "home", 1, "bg-half", "d-table", "w-100", 2, "background", "url('assets/images/company/aliadosPortada.jpg')", "background-size", "100% 160%"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-10", "text-center"], [1, "title-heading", 2, "height", "250px"], [1, "display-4", "title-dark", "text-white", "fw-bold", "mb-3"], [1, "para-desc", "title-dark", "mx-auto", "text-light", 2, "font-size", "x-large"], [1, "section", "border-top"], [1, "card", "rounded", "shadow", "border-0", "bg-light", "overflow-hidden"], [1, "row", "no-gutters", "align-items-center"], [1, "col-lg-6"], ["src", "assets/images/fotosaliados/HuastaFoto.jpg", "alt", "", 1, "img-fluid"], [1, "card-body", "section-title", "p-md-5"], [1, "mb-4"], [2, "font-size", "large"], [1, "mt-4", "pt-2"], ["href", "http://munihuasta.gob.pe/", "target", "_blank", 1, "btn", "btn-outline-primary"], [1, "container", 2, "margin-top", "50px"], ["src", "../../../assets/images/colegio/aliados/municipalidadDePampan.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/fotosaliados/qaliwarma.png", "alt", "", 1, "img-fluid"], ["href", "https://www.gob.pe/qaliwarma", "target", "_blank", 1, "btn", "btn-outline-primary"], ["src", "assets/images/fotosaliados/centroSalud.jpg", "alt", "", 1, "img-fluid"], ["href", "https://www.deperu.com/salud-nacional/establecimientos-de-salud-gbno-regional-minsa/huasta-huasta-1170", "target", "_blank", 1, "btn", "btn-outline-primary"], ["src", "assets/images/fotosaliados/cem.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/images/colegio/aliados/policiaNacional.png", "alt", "", 1, "img-fluid"], ["href", "https://www.policia.gob.pe/", "target", "_blank", 1, "btn", "btn-outline-primary"], ["src", "../../../assets/images/colegio/aliados/apafa.png", "alt", "", 1, "img-fluid"], ["href", "https://www.drelm.gob.pe/drelm/wp-content/uploads/2017/02/TallerAPAFA.pdf", "target", "_blank", 1, "btn", "btn-outline-primary"], ["src", "../../../assets/images/colegio/aliados/standard_Elecci\u00F3n del municipio escolar 2023.jpg", "alt", "", 1, "img-fluid"], ["href", "https://dnef.jne.gob.pe/documentos/3-cartillaeducativa3.pdf", "target", "_blank", 1, "btn", "btn-outline-primary"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-light"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "shape", "overflow-hidden", "text-white"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [3, "footerVariant", "hideFooter"]], template: function AliadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activate", function AliadosComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Aliados Estrategicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Colaboracion para el crecimiento y el desarrollo de nuestra instituci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "MUNICIPALIDAD DISTRITAL DE HUASTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Direcci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Jr. Bolognesi N\u00B0 125 Mz. C Lt. D Km. 11 - Huasta - Per\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Tel\u00E9fono:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " 943116648 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " munihuasta@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Sitio web oficial:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " No disponible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Alcalde distrital de Huasta:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " EDISON RUDNER PEREZ VALDEZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "MUNICIPALIDAD DEL CENTRO POBLADO DE PAMPAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Direcci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " \"Calle Mar\u00EDa Parado de Bellido Mz. E Lt. 3\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Centro Poblado:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, " Pampan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Distrito:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, " Huasta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Provincia:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, " Bolognesi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Regi\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " Ancash");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Tel\u00E9fono:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, " 986556403.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "QALIWARMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Somos un programa del Ministerio de Desarrollo e Inclusi\u00F3n Social (Midis) que garantiza la alimentaci\u00F3n de los estudiantes de colegios p\u00FAblicos del pa\u00EDs durante todos los d\u00EDas del a\u00F1o escolar, de acuerdo con sus caracter\u00EDsticas y las zonas donde viven.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "PUESTO DE SALUD DE HUASTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "Nombre del establecimiento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, " Puesto De Salud Huasta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "C\u00F3digo \u00FAnico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, " 1497");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Clasificaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, " Puestos De Salud O Postas De Salud");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Tipo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, " Establecimiento De Salud Sin Internamiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "Categor\u00EDa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, " I-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Direcci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, " Otros Huasta Sn Huasta Sn Huasta Bolognesi Ancash");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "Tel\u00E9fono:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, " 979163907");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Horario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, " 08:00 \u2013 14:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "Distrito:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, " Huasta");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](140, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "Provincia:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, " Bolognesi");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "Departamento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, " Ancash");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](156, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "CEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "Son servicios p\u00FAblicos especializados y gratuitos, de atenci\u00F3n integral y multidisciplinaria, para v\u00EDctimas de violencia contra las mujeres y los integrantes del grupo familiar y personas afectadas por violencia sexual. Permite acceder a asesor\u00EDa legal, contenci\u00F3n emocional y apoyo social a nivel nacional. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, " En todo el Per\u00FA, los 245 CEM regulares y un CEM en centro de salud (Santa Julia, Piura) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "atienden de lunes a viernes de 8:00 a.m a 4:15 p.m");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, ", y los 185 CEM en comisar\u00EDas, las 24 horas del d\u00EDa, los 365 d\u00EDas del a\u00F1o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](169, " Si deseas m\u00E1s informaci\u00F3n puedes llamar a la central telef\u00F3nica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, "(01) 4197260");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](180, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "PNP");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "Somos una instituci\u00F3n del Estado que tiene por misi\u00F3n garantizar, mantener y restablecer el orden interno, prestar protecci\u00F3n y ayuda a las personas y a la comunidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](187, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, " Telefono: 105. Polic\u00EDa Nacional del Per\u00FA. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](191, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](196, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](200, "APAFA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202, "La Asociaci\u00F3n de Padres de Familia, es un \u00F3rgano de colaboraci\u00F3n con las actividades del colegio, a trav\u00E9s del cual los padres de familia se organizan, colaboran y participan en las actividades que el Colegio propone. La Junta Directiva nexo entre el Director y los Padres de Familia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, " Para lograr sus objetivos, la Junta Directiva necesita contar con una activa participaci\u00F3n de los Comit\u00E9s de cada secci\u00F3n. Juntos podemos lograr mejoras para que el centro de estudios de nuestros hijos sea ese lugar ideal, en el cual ellos vivan experiencias enriquecedoras que los acompa\u00F1en toda la vida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](205, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207, "Las principales funciones de la junta directiva son:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](208, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, " * Elaborar el Plan de Trabajo Anual en coordinaci\u00F3n con la Direcci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](210, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](211, " * Colaborar en los talleres de padres, actividades de responsabilidad social, de integraci\u00F3n, deportivas, espirituales, culturales, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](213, " * Colaborar en la organizaci\u00F3n del D\u00EDa Familiar del Colegio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](214, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](215, " * Participar en las actuaciones del Colegio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](216, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, " * Proponer ideas para el mejoramiento de la educaci\u00F3n de nuestros hijos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](225, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](229, "MUNICIPIO ESCOLAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](231, "Un municipio escolar es una organizaci\u00F3n de alumnos en la escuela, a partir de la cual se desarrollan una serie de actividades que contribuir\u00E1n a su posterior educaci\u00F3n en la formaci\u00F3n de valores y democracia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](232, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](234, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](236, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](238, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](241, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](242, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](246, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](247, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](248, "i-feather", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](249, "app-footer", 40);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("navClass", ctx.addclass)("buttonList", ctx.buttonShow)("sliderTopbar", ctx.TopbarShow)("isdeveloper", ctx.developerPage)("shopPages", ctx.shopPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](247);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("footerVariant", ctx.footerClass)("hideFooter", ctx.hideFooter);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__.ScrollToDirective, angular_feather__WEBPACK_IMPORTED_MODULE_8__.FeatherComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], encapsulation: 2 });


/***/ }),

/***/ 99233:
/*!****************************************************!*\
  !*** ./src/app/pages/detalle/detalle.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleComponent": function() { return /* binding */ DetalleComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_inicio_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/inicio.service */ 18911);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_reserva_detalle_reserva_detalle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/reserva-detalle/reserva-detalle.component */ 24883);
/* harmony import */ var _shared_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/calendario/calendario.component */ 60801);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-feather */ 35411);











function DetalleComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.habitacion.imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function DetalleComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.habitacion.imagen2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function DetalleComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r2.habitacion.imagen3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function DetalleComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r3.habitacion.imagen4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function DetalleComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r4.habitacion.imagen5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function DetalleComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DetalleComponent_li_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r11.nombreservicio, " ");
} }
function DetalleComponent_li_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r13.nombreservicio, " ");
} }
function DetalleComponent_li_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r15.nombreservicio, " ");
} }
class DetalleComponent {
    constructor(fb, router, inicioService) {
        this.fb = fb;
        this.router = router;
        this.inicioService = inicioService;
        this.customOptions = {};
        this.config = {};
        this.shopPages = true;
        this.model = 1;
        this.listaServicios = [[], [], []];
        this.formSubmitted = false;
        this.reservaForm = this.fb.group({
            picker: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            checkoutpicker: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            numAdultos: ['3', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            numNinos: ['2', []],
            id: ['10', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
    ngOnInit() {
        this.customOptions = this.inicioService.customOptions;
        this.config = this.inicioService.swiperOptions;
        this.getHabitacionSeleccionada();
    }
    getHabitacionSeleccionada() {
        if (localStorage.getItem('habitacion')) {
            this.habitacion = JSON.parse(localStorage.getItem('habitacion'));
            this.prereserva = JSON.parse(localStorage.getItem('prereserva'));
            this.listaServicios = this.fragmentarLista(this.habitacion.servicios);
            this.categoria = this.habitacion.tipohabitacion.nombretipo;
            localStorage.removeItem('habitacion');
            localStorage.removeItem('prereserva');
        }
        else {
            this.habitacion = this.inicioService.habitacionVacia;
            this.prereserva = this.inicioService.prereserva;
            this.router.navigateByUrl('/inicio');
        }
    }
    getReservasDeHabitacion(id) {
    }
    fragmentarLista(lista) {
        let longitudNuevaLista = Math.ceil(lista.length / 3);
        let listaNueva = [[], [], []];
        for (let i = 0; i < lista.length; i++) {
            if (i < longitudNuevaLista) {
                listaNueva[0].push(lista[i]);
            }
            else if (i < 2 * longitudNuevaLista) {
                listaNueva[1].push(lista[i]);
            }
            else {
                listaNueva[2].push(lista[i]);
            }
        }
        return listaNueva;
    }
    obtenerDatosReserva(valor) {
    }
    imageShow(event) {
        const image = event.target.src;
        const expandImg = document.getElementById('expandedImg');
        expandImg.src = image;
    }
    increase() {
        this.model += 1;
    }
    decrement() {
        if (this.model > 0) {
            this.model -= 1;
        }
    }
}
DetalleComponent.ɵfac = function DetalleComponent_Factory(t) { return new (t || DetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_inicio_service__WEBPACK_IMPORTED_MODULE_0__.InicioService)); };
DetalleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DetalleComponent, selectors: [["app-detalle"]], decls: 54, vars: 13, consts: [[1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], ["id", "principal", 1, "section", "pb-0"], [1, "container", "shadow", "bg-white", "rounded", 2, "padding-top", "30px"], [1, "row", "align-items-center"], [1, "col-md-6"], ["id", "customer-testi", 3, "options"], ["carouselSlide", ""], [1, "col-md-6", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "section-title", "ms-md-4"], [1, "heading", "mb-3", "display-4", "title-dark", "fw-bold", "title-dark"], [1, "text-success"], [1, "list-unstyled", "text-warning", "h1", "mb-0"], ["class", "list-inline-item h5", 4, "ngFor", "ngForOf"], ["id", "#reserva", 3, "habitacion", "prereserva", "obtenerDatosReserva"], [1, "row", "list-unstyled", "text-muted", 2, "margin-top", "15px"], [1, "col-lg-12", "col-md-6"], [1, "mb-0", 2, "font-size", "large"], [1, "text-primary", "h3", "me-2"], [1, "uil", "uil-tag-alt", "align-middle"], [2, "color", "rgb(0, 17, 255)"], [1, "uil", "uil-users-alt", "align-middle"], [1, "container", "shadow", "bg-white", "rounded", 2, "padding-top", "15px", "margin-top", "15px"], [1, "mb-3"], [1, "row", "list-unstyled", "text-muted", "align-items-center"], [1, "col-lg-4", "col-md-6", "col-sm-12"], ["class", "mb-0", "style", "font-size: large;", 4, "ngFor", "ngForOf"], [1, "container", "mt-100", "mt-60", 2, "margin-bottom", "50px"], [1, "row"], [3, "dataId"], ["id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "tiny-slide"], ["alt", "", 1, "img-fluid", "rounded", 3, "src"], [1, "list-inline-item", "h5"], [1, "mdi", "mdi-star"], [1, "text-primary", "h5", "me-2"], [1, "uil", "uil-check-circle", "align-middle"]], template: function DetalleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "owl-carousel-o", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DetalleComponent_ng_template_9_Template, 3, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DetalleComponent_ng_template_10_Template, 3, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DetalleComponent_ng_template_11_Template, 3, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DetalleComponent_ng_template_12_Template, 3, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DetalleComponent_ng_template_13_Template, 3, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DetalleComponent_li_21_Template, 2, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "app-reserva-detalle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("obtenerDatosReserva", function DetalleComponent_Template_app_reserva_detalle_obtenerDatosReserva_22_listener($event) { return ctx.obtenerDatosReserva($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Categoria: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Para ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " personas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Comodidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, DetalleComponent_li_43_Template, 4, 1, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, DetalleComponent_li_45_Template, 4, 1, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, DetalleComponent_li_47_Template, 4, 1, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "app-calendario", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "i-feather", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Volver arriba");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.habitacion.nombrehabitacion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("S/. ", ctx.habitacion.preciohabitacion, " x Noche");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.habitacion.servicios);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("habitacion", ctx.habitacion)("prereserva", ctx.prereserva);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.categoria);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.habitacion.numerodepersonas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listaServicios[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listaServicios[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listaServicios[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataId", ctx.habitacion.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngxScrollTo", "#principal");
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselSlideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _shared_reserva_detalle_reserva_detalle_component__WEBPACK_IMPORTED_MODULE_1__.ReservaDetalleComponent, _shared_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_2__.CalendarioComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__.ScrollToDirective, angular_feather__WEBPACK_IMPORTED_MODULE_9__.FeatherComponent], encapsulation: 2 });


/***/ }),

/***/ 57182:
/*!****************************************************!*\
  !*** ./src/app/pages/gestion/gestion.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionComponent": function() { return /* binding */ GestionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);






class GestionComponent {
    constructor() {
        this.navClass = 'nav-light';
    }
    ngOnInit() {
    }
    onActivate(componentReference) {
        this.addclass = componentReference.navClass;
        this.buttonShow = componentReference.buttonList;
        this.TopbarShow = componentReference.sliderTopbar;
        this.footerClass = componentReference.footerVariant;
        this.developerPage = componentReference.isdeveloper;
        this.hideFooter = componentReference.hideFooter;
        this.shopPages = componentReference.shopPages;
    }
}
GestionComponent.ɵfac = function GestionComponent_Factory(t) { return new (t || GestionComponent)(); };
GestionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GestionComponent, selectors: [["app-gestion"]], decls: 439, vars: 8, consts: [[3, "navClass", "buttonList", "sliderTopbar", "isdeveloper", "shopPages"], [3, "activate"], ["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100", 2, "background", "url('assets/images/company/gestionPortada.jpg')", "background-size", "100% 100%"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level", "title-heading"], [1, "display-4", "title-dark", "text-white", "fw-bold", "mb-3", "text-white", "title-dark", "title"], [1, "text-white", "para-desc", "mb-0", "mx-auto", 2, "font-size", "x-large"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/inicio"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section", "border-top"], [1, "card", "rounded", "shadow", "border-0", "bg-light", "overflow-hidden"], [1, "row", "no-gutters", "align-items-center"], [1, "col-lg-12"], [1, "card-body", "section-title", "p-md-5", 2, "text-align", "center", "background", "white", "border", "0px solid"], ["src", "assets/images/colegio/organigrama1.png", "alt", "", 1, "img-fluid", 2, "width", "1500px", "height", "350px"], [1, "container", 2, "margin-top", "50px"], [1, "col-lg-6"], [1, "card-body", "section-title", "p-md-5"], [1, "mb-4"], [2, "font-size", "large"], ["src", "assets/images/colegio/GESTION/gestionEstrategica.jpeg", "alt", "", 1, "img-fluid", 2, "width", "1500px", "height", "350px"], [1, "card-body", "section-title", "p-md-5", 2, "text-align", "center"], ["src", "../../../assets/images/colegio/GESTION/resultadoGP1.png", "alt", ""], ["src", "../../../assets/images/colegio/GESTION/resultadoGP2.png", "alt", ""], ["src", "../../../assets/images/colegio/GESTION/resultadoGP3.png", "alt", ""], ["src", "../../../assets/images/colegio/GESTION/resultadoGP4.png", "alt", ""], ["src", "../../../assets/images/colegio/GESTION/gradoEficienciaInterna.png", "alt", ""], ["src", "../../../assets/images/colegio/GESTION/porsentajeDeEstudiantes1.jpeg", "alt", ""], ["src", "../../../assets/images/colegio/GESTION/porsentajeDeEstudiantes2.jpeg", "alt", ""], ["src", "../../../assets/images/colegio/GESTION/porsentajeDeEstudiantes3.png", "alt", ""], ["src", "../../../assets/images/colegio/GESTION/porsentajeDeEstudiantes4.png", "alt", ""], ["src", "../../../assets/images/colegio/GESTION/gradoEficienciaInterna2.png", "alt", ""], [1, "row"], ["href", "../../../assets/images/colegio/PEI-2022.pdf", "target", "_blank", 2, "font-size", "large", "padding-bottom", "0.5rem"], ["href", "../../../assets/images/colegio/PAT 2022_Anexos.pdf", "target", "_blank", 2, "font-size", "large", "padding-bottom", "0.5rem"], ["href", "../../../assets/images/colegio/PCI2022.pdf", "target", "_blank", 2, "font-size", "large", "padding-bottom", "0.5rem"], ["href", "../../../assets/images/colegio/RI2022OFICIAL.pdf", "target", "_blank", 2, "font-size", "large", "padding-bottom", "0.5rem"], ["src", "assets/images/colegio/GESTION/gestionAdministrativa.jpeg", "alt", "", 1, "img-fluid", 2, "width", "1500px", "height", "350px"], [1, "mt-4", "pt-2"], ["src", "../../../assets/images/colegio/GESTION/dimensionComunitaria.png", "alt", "", 1, "img-fluid", 2, "width", "1500px", "height", "350px"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [3, "footerVariant", "hideFooter"]], template: function GestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function GestionComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Gesti\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Disfruta de la mejor educaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Gesti\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "DIMENSI\u00D3N ESTRATEGICA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Referida a la generaci\u00F3n de una orientaci\u00F3n clara y compartida de los fines y prop\u00F3sitos educativos de la IE, a partir de la cual se formulan objetivos y metas a trav\u00E9s de los instrumentos de gesti\u00F3n. El prop\u00F3sito de esta gesti\u00F3n es lograr una visi\u00F3n integral de los recursos, oportunidades y necesidades propias de cada comunidad educativa y de la IE, para lo cual debe considerar de cerca las otras dimensiones de gesti\u00F3n. El principal criterio orientador de la dimensi\u00F3n estrat\u00E9gica es el cumplimiento de los compromisos de gesti\u00F3n escolar por resultados (CGE 1 y CGE 2):");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " CGE 1: Desarrollo integral de las y los estudiantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " CGE 2: Acceso de las y los estudiantes al SEP hasta la culminaci\u00F3n de su trayectoria educativa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Esta dimensi\u00F3n es liderada por el Director y el CONEI y operativizada por nuestra Comunidad Educativa. .");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " EL CONEI es un \u00F3rgano de participaci\u00F3n, concertaci\u00F3n y vigilancia ciudadana, cuyos miembros fueron elegidos para una vigencia de dos a\u00F1os (2021- 2022), reconocido mediante Resoluci\u00F3n Directoral N\u00B0 005- 2021.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "RESULTADOS DE GESTI\u00D3N 2019- 2020- 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "NIVEL PRIMARIA:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "GRADO DE EFICIENCIA INTERNA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "NIVEL SECUNDARIA:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "GRADO DE EFICIENCIA INTERNA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "INSTRUMENTOS DE GESTI\u00D3N (II.GG):");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " \u00A0\u00A0Proyecto Educativo Institucional (PEI): \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " Orienta la gesti\u00F3n escolar seg\u00FAn corresponda en el mediano plazo (2022-2026)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "INSTITUCION EDUCATIVA N\u00B0 86253(PCI 2022.pdf) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " \u00A0\u00A0Plan Anual de Trabajo (PAT 2022): \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " Concreta los objetivos y metas del PEI e incluye las actividades m\u00EDnimas definidas sectorialmente para el desarrollo del periodo lectivo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "PLAN ANUAL DE TRABAJO(PAT 2022.pdf) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " \u00A0\u00A0Proyecto Curricular de la Instituci\u00F3n Educativa (PCI 2022): \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, " Orienta los procesos pedag\u00F3gicos de la Instituci\u00F3n Educativa para el desarrollo de los aprendizajes establecidos en el CNEBR, alineando a lo establecido en el PEI, as\u00ED como las orientaciones de los modelos de servicio educativo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "PROYECTO CURRICULAR DE LA INSTITUCION EDUCATIVA (PCI 2022.pdf) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, " \u00A0\u00A0Reglamento Interno (RI 2022): \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, " Regula la organizaci\u00F3n y funcionamiento integral de la I.E para promover una convivencia escolar democr\u00E1tica y un clima favorable a los aprendizajes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "REGLAMENTO INTERNO (RI 2022.pdf) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "DIMENSI\u00D3N ADMINISTRATIVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Lleva a cabo las pr\u00E1cticas establecidas por el CGE 3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, " Esta dimensi\u00F3n es liderada por el Comit\u00E9 de gesti\u00F3n de condiciones operativas y operativizada por el personal de la IE que participe de las tareas involucradas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, " CGE 3: Gesti\u00F3n de las condiciones operativas orientada al sostenimiento del servicio educativo ofrecido por la IE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, " Comit\u00E9 de Gesti\u00F3n de Condiciones Operativas: aprobada seg\u00FAn la R.D. N\u00B0 008-2022 Plan de Trabajo del Comit\u00E9 de Gesti\u00F3n de Condiciones Operativas, aprobada seg\u00FAn la R.D. N\u00B0 016-2022 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "1) Seguridad y Salubridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, " \u00A0\u00A01.1. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "I.E. espacio seguro para la integridad f\u00EDsica de los estudiantes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, " \u00A0\u00A01.2. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "I.E. libre de riesgo sanitario para los estudiantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, " \u00A0\u00A01.3. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "I.E. acondicionada ante situaciones de emergencia y desastres");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, " \u00A0\u00A01.4. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "I.E. organizada para actuar ante situaciones de emergencia y desastres");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, " \u00A0\u00A01.5. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Personal organizado para la seguridad de los estudiantes durante los momentos cr\u00EDticos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, " \u00A0\u00A01.6. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Intervenci\u00F3n del personal ante situaciones que afectan la seguridad de los estudiantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, " \u00A0\u00A01.7. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "Prevenci\u00F3n de situaciones que amenacen la salud, seguridad o integridad de los estudiantes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "2) Gesti\u00F3n de los recursos educativos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, " \u00A0\u00A02.1. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Distribuci\u00F3n oportuna y cobertura del material educativo para los estudiantes enviado por el MINEDU");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, " \u00A0\u00A02.2. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "Promoci\u00F3n del uso del material educativo enviado por el MINEDU");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, " \u00A0\u00A02.3. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Promoci\u00F3n del uso de espacios y tecnolog\u00EDa con finalidad pedag\u00F3gica");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "3) Matr\u00EDcula y preservaci\u00F3n del Derecho a la Educaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, " \u00A0\u00A03.1. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "Matr\u00EDcula y permanencia de estudiantes sin condicionamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, " \u00A0\u00A03.2. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Acceso al servicio educativo sin condicionamientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, " \u00A0\u00A03.3. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Cumplimiento del horario de trabajo del personal docente y directivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, " \u00A0\u00A03.4. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "Registro oportuno de matr\u00EDcula en SIAGIE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, " \u00A0\u00A03.5. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "Implementaci\u00F3n de estrategias de apoyo para permanencia de estudiantes en situaciones de vulnerabilidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "4) Gesti\u00F3n Transparente de los Recursos Financieros");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](227, " \u00A0\u00A04.1. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "Integridad en la gesti\u00F3n de los recursos financieros de la I.E");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, " \u00A0\u00A04.2. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Constituci\u00F3n del comit\u00E9 de gesti\u00F3n de condiciones operativas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, " \u00A0\u00A04.3. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "Generaci\u00F3n o captaci\u00F3n y uso de los recursos financieros de la I.E. seg\u00FAn normativa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239, " \u00A0\u00A04.4. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "Registro oportuno en el sistema de informaci\u00F3n de mantenimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, " \u00A0\u00A04.5. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "Gesti\u00F3n de recursos propios seg\u00FAn lo planificado y rendici\u00F3n de cuentas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "DIMENSI\u00D3N PEDAG\u00D3GICA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "Lleva a cabo las pr\u00E1cticas establecidas por el CGE 4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](254, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](255, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](256, "Esta dimensi\u00F3n es liderada por el Comit\u00E9 de gesti\u00F3n pedag\u00F3gica y operativizada por el personal de la IE que participe de las tareas involucradas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](257, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](258, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](259, " CGE 4: Gesti\u00F3n de la pr\u00E1ctica pedag\u00F3gica orientada al logro de aprendizajes previstos en el perfil de egreso del CNEB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](260, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](261, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, " Comit\u00E9 de Gesti\u00F3n de los Procesos Pedag\u00F3gicos: Aprobada seg\u00FAn RD N\u00B0 009-2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](263, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](264, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, " Plan de Trabajo de la Comisi\u00F3n de Gesti\u00F3n de los Procesos Pedag\u00F3gicos: Aprobada seg\u00FAn R.D. N\u00B0 014-2022. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](266, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](272, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](277, " 1) Planificaci\u00F3n Curricular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](280, " \u00A0\u00A01.1. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281, "Planificaci\u00F3n de las Experiencias de Aprendizaje.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](284, " \u00A0\u00A01.2. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "Apoyo pedag\u00F3gico para la planificaci\u00F3n curricular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288, " \u00A0\u00A01.3. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](289, "Planificaci\u00F3n de sesiones o actividades de aprendizaje ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](292, " \u00A0\u00A01.4. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "Conocimientos suficientes para brindar asesor\u00EDa pedag\u00F3gica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, " \u00A0\u00A01.5. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297, "Espacios para la planificaci\u00F3n colegiada. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](299, "2) Monitoreo de la pr\u00E1ctica pedag\u00F3gica en el aula");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, " \u00A0\u00A02.1. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, "Muy alto cumplimiento del monitoreo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](306, " \u00A0\u00A02.2. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](307, "Organizaci\u00F3n de informaci\u00F3n obtenida en el monitoreo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](310, " \u00A0\u00A02.3. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](311, "An\u00E1lisis de los resultados obtenidos en el monitoreo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](313, "3) Fortalecimiento del trabajo docente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, " \u00A0\u00A03.1. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](317, "Participaci\u00F3n en acciones formativas promovidas por la UGEL, DRE, MINEDU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](320, " \u00A0\u00A03.2. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](321, "Acciones para el fortalecimiento de competencias docentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](324, " \u00A0\u00A03.3. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](325, "Retroalimentaci\u00F3n a la pr\u00E1ctica pedag\u00F3gica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, " \u00A0\u00A03.4. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, "Acciones para el fortalecimiento de competencias docentes basadas en un diagn\u00F3stico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](330, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, " \u00A0\u00A03.5. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](333, "Fortalecimiento de las pr\u00E1cticas pedag\u00F3gicas mediante el trabajo colegiado. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](335, "4) Seguimiento de los aprendizajes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](338, " \u00A0\u00A04.1. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](339, "Gesti\u00F3n de entrega oportuna de informe de progreso de las competencias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](340, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, " \u00A0\u00A04.2. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](343, "Informes de progreso con niveles de logro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](344, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](346, " \u00A0\u00A04.3. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](347, "Generaci\u00F3n de espacios para el an\u00E1lisis y la reflexi\u00F3n de los aprendizajes, e identificaci\u00F3n de oportunidades de mejora. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](348, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350, " \u00A0\u00A04.4. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](351, "Estrategias para la mejora de aprendizajes elaboradas sobre la base del an\u00E1lisis de los resultados del avance de los estudiantes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](355, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](357, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "DIMENSI\u00D3N COMUNITARIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](360, "Lleva a cabo las pr\u00E1cticas establecidas por el CGE 5. Esta dimensi\u00F3n es liderada por el Comit\u00E9 de gesti\u00F3n del bienestar y operativizada por el personal de la IE que participe de las tareas involucradas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](361, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](362, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](363, " CGE 5: Gesti\u00F3n del bienestar escolar que promueva el desarrollo integral de las y los estudiantes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](364, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](365, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](366, " Comit\u00E9 de Gesti\u00F3n del Bienestar: aprobada seg\u00FAn RD N\u00B0 010-2022 Plan de Trabajo del Comit\u00E9 de Gesti\u00F3n del Bienestar aprobada seg\u00FAn RD N\u00B0 017-2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](367, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](368, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](371, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](373, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](376, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](377, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](378, "1) Participaci\u00F3n de la Comunidad Educativa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](380, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](381, " \u00A0\u00A01.1. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](382, "Constituci\u00F3n de instancias formales de participaci\u00F3n de la comunidad educativa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](383, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](385, " \u00A0\u00A01.2. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, "Promoci\u00F3n de participaci\u00F3n de las familias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](387, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](388, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](389, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](390, " \u00A0\u00A01.3. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](391, "Liderazgo democr\u00E1tico del director en la gesti\u00F3n de la participaci\u00F3n de docentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](393, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](394, " \u00A0\u00A01.4. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](395, "Funcionamiento del CONEI");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](396, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](397, "2) Relaciones Interpersonales en la Instituci\u00F3n Educativa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](399, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](400, " \u00A0\u00A02.1. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](401, "Promoci\u00F3n de las relaciones interpersonales entre el personal docente de la I.E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](402, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](404, " \u00A0\u00A02.2. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](405, "Muy buenas relaciones interpersonales del director con los docentes de la I.E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](406, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](407, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](408, " \u00A0\u00A02.3. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](409, "Acciones para que las relaciones interpersonales en la I.E. sean muy buenas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](410, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](411, "3) Gesti\u00F3n de la Convivencia Escolar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](413, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](414, " \u00A0\u00A03.1. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](415, "La I.E. cuenta con normas de convivencia aprobadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](416, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](417, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](418, " \u00A0\u00A03.2. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](419, "La I.E cuenta con el libro de registro de incidencias y personal responsable del registro en el portal SISEVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](420, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](421, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](422, " \u00A0\u00A03.3. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](423, "Identificaci\u00F3n de situaciones de violencia escolar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](424, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](426, " \u00A0\u00A03.4. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](427, "Normas de convivencia elaboradas con integrantes de la comunidad educativa y difundidas entre ellos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](428, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](430, " \u00A0\u00A03.5. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](431, "Atenci\u00F3n de situaciones de violencia escolar en la I.E.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](432, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](433, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](434, " \u00A0\u00A03.6. \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](435, "Acciones para la prevenci\u00F3n de situaciones de violencia escolar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](436, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](437, "i-feather", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](438, "app-footer", 53);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navClass", ctx.addclass)("buttonList", ctx.buttonShow)("sliderTopbar", ctx.TopbarShow)("isdeveloper", ctx.developerPage)("shopPages", ctx.shopPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](436);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("footerVariant", ctx.footerClass)("hideFooter", ctx.hideFooter);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], encapsulation: 2 });


/***/ }),

/***/ 75461:
/*!**************************************************!*\
  !*** ./src/app/pages/inicio/inicio.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioComponent": function() { return /* binding */ InicioComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_inicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/inicio.service */ 18911);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _shared_reserva_inicio_reserva_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/reserva-inicio/reserva-inicio.component */ 64582);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _shared_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/services.component */ 42474);
/* harmony import */ var _shared_cartillas_cartillas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/cartillas/cartillas.component */ 49965);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);














function InicioComponent_ng_template_4_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InicioComponent_ng_template_4_ng_template_14_Template_button_click_1_listener() { const modal_r10 = ctx.$implicit; return modal_r10.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "iframe", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function InicioComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h1", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h2", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InicioComponent_ng_template_4_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.openWindowCustomClass(_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i-feather", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, InicioComponent_ng_template_4_ng_template_14_Template, 6, 0, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("background-image:url('", ctx_r0.carruselData[0].urlImage, "'); margin-top: -25px;");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r0.carruselData[0].h1, " ", ctx_r0.carruselData[0].h1Parrafo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.carruselData[0].h4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.carruselData[0].span);
} }
function InicioComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h1", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h2", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("background-image:url('", ctx_r1.carruselData[1].urlImage, "'); margin-top: -25px;");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.carruselData[1].h1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.carruselData[1].h4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.carruselData[1].link);
} }
function InicioComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h1", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h2", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("background-image:url('", ctx_r2.carruselData[2].urlImage, "'); margin-top: -25px;");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r2.carruselData[2].h1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.carruselData[2].h1Parrafo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.carruselData[2].h4);
} }
function InicioComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "DOCENTES PRIMARIA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "TUTORA : Fabian Antaurco.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "1ro y 2do de PRIMARIA - Actividades de aprendizaje.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "TUTORA : Luz Valderrama.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "3ro de PRIMARIA - Actividades de aprendizaje.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "TUTORA : Nelsy Zulema.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "4to de PRIMARIA - Actividades de aprendizaje.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "TUTORA : Yoysy Rosas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](66, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "5to de PRIMARIA - Actividades de aprendizaje.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "TUTOR : Rober Velasquez.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](80, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "6to de PRIMARIA - Actividades de aprendizaje.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](86, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function InicioComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "DOCENTES SECUNDARIA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "GRADO : 1ro DE SECUNDARIA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "GRADO : 2do DE SECUNDARIA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "GRADO : 3ro DE SECUNDARIA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "GRADO : 4to DE SECUNDARIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "GRADO : 5to DE SECUNDARIA.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function InicioComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InicioComponent_ng_template_78_Template_button_click_1_listener() { const modal_r14 = ctx.$implicit; return modal_r14.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "iframe", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
//Hotel Component
class InicioComponent {
    constructor(modalService, router, inicioService, fb) {
        this.modalService = modalService;
        this.router = router;
        this.inicioService = inicioService;
        this.fb = fb;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = false;
        this.navClass = 'bg-white';
        this.servicesData = [];
        this.cartillaData = [];
        this.customOptions = {};
        this.carruselData = [];
        this.roomData = [];
        this.habitaciones = [];
        this.primaria = [];
        this.showRoomList = false;
        this.contactenosForm = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
            comentarios: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
        });
        this.rows = [];
        this.columns = [];
    }
    ngOnInit() {
        this.columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
        this.servicesData = this.inicioService.servicesData;
        this.cartillaData = this.inicioService.cartillaData;
        this.customOptions = this.inicioService.customOptions;
        this.carruselData = this.inicioService.carruselData;
        this.config = this.inicioService.swiperOptions;
    }
    enviarContacto() {
        if (this.contactenosForm.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Datos de contacto',
            html: 'Sus comentarios han sido enviados, ' +
                'pronto nos pondremos en contacto con Ud.',
            icon: 'success',
            confirmButtonText: 'ok',
        });
        this.contactenosForm.reset();
    }
    showNgbNav(valor) {
        let n = 0;
        if (valor == true) {
            n = 2;
        }
        else {
            n = 1;
        }
        return n;
    }
    envioFiltro(valor) {
        if (localStorage.getItem('habitacion')) {
            localStorage.removeItem('habitacion');
        }
        localStorage.setItem('habitacion', JSON.stringify(valor));
        this.router.navigateByUrl('/inicio/habitaciones');
    }
    habitacionSeleccionada(valor) {
        if (localStorage.getItem('habitacion')) {
            localStorage.removeItem('habitacion');
        }
        localStorage.setItem('habitacion', JSON.stringify(valor));
        if (localStorage.getItem('prereserva')) {
            localStorage.removeItem('prereserva');
        }
        localStorage.setItem('prereserva', JSON.stringify(this.prereserva));
        this.router.navigateByUrl('/inicio/detalle');
    }
    obtenerDatosReserva(valor) {
        this.showRoomList = true;
        this.habitaciones = valor.habitaciones;
        this.prereserva = valor.prereserva;
    }
    openWindowCustomClass(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
    openModal(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
    onActivate(componentReference) {
        this.addclass = componentReference.navClass;
        this.buttonShow = componentReference.buttonList;
        this.TopbarShow = componentReference.sliderTopbar;
        this.footerClass = componentReference.footerVariant;
        this.developerPage = componentReference.isdeveloper;
        this.hideFooter = componentReference.hideFooter;
        this.shopPages = componentReference.shopPages;
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_inicio_service__WEBPACK_IMPORTED_MODULE_1__.InicioService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder)); };
InicioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 133, vars: 16, consts: [[3, "navClass", "buttonList", "isdeveloper", "shopPages"], [3, "activate"], ["id", "home", 1, "main-slider"], [1, "slides", 3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], ["id", "bookroom", 1, "section-two", "bg-light"], [1, "container"], [1, "row", "justify-content-center"], ["id", "#reserva", 3, "obtenerDatosReserva"], [1, "container", "mt-100", "mt-60"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [2, "text-align", "justify", "font-family", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"], ["src", "assets/images/colegio/fotopresentacion.jpeg", 2, "float", "left", "padding-right", "1.5rem", "height", "40%", "width", "40%"], [2, "font-size", "x-large", "color", "blue"], [1, "text-primary", "fw-bold"], [1, "row"], [1, "col-12"], ["ngbNav", "", "id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "shadow", "flex-column", "flex-sm-row", "d-md-inline-flex", "mb-0", "p-1", "bg-white", "rounded", "position-relative", "overflow-hidden", 3, "activeId"], ["nav", "ngbNav"], [1, "nav-item", "m-1", 3, "ngbNavItem"], ["ngbNavLink", "", 1, "nav-link", "py-2", "px-5", "rounded"], [1, "text-center"], [1, "mb-0"], ["ngbNavContent", ""], [1, "col-12", "tab-content", "mt-5", 3, "ngbNavOutlet"], ["id", "cta", 1, "section", "bg-cta", 2, "background", "url('assets/images/colegio/foto-panoramica.png') center center", "background-size", "100% 200%"], [1, "bg-overlay"], [1, "section-title"], [1, "text-white"], [1, "text-light", "para-dark", "mx-auto", 2, "font-size", "x-large"], ["href", "javascript:void(0);", 1, "play-btn", "border", "border-light", "mt-4", "video-play-icon", 3, "click"], ["name", "play", 1, "fea", "icon-ex-md", "text-white", "title-dark"], ["contentmodal", ""], [3, "servicesData"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-light"], ["viewBox", "0 0 2880 250", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M720 125L2160 0H2880V250H0V125H720Z", "fill", "currentColor"], [3, "cartillaData"], [1, "section"], [1, "col-lg-8", "col-md-6", "p-0", "ps-md-3", "pr-md-3"], [1, "card", "map", "map-height-two", "rounded", "map-gray", "border-0"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.7503353584443!2d-77.15969248620799!3d-10.119510792769262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a8330d221e2755%3A0xe9769e4a265b24eb!2sColegio%20Nacional%20Celso%20Garro%20Valderrama%20Pampan!5e0!3m2!1ses!2spe!4v1663966265191!5m2!1ses!2spe", "width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], [1, "col-lg-4", "col-md-6", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "card", "rounded", "shadow", "border-0"], [1, "card-body", "py-5"], [1, "card-title"], [1, "custom-form", "mt-4"], ["id", "message"], ["autocomplete", "off", 1, "p-4", "shadow", "bg-white", "rounded", 3, "formGroup", "ngSubmit"], [1, "col-md-12"], [1, "mb-3"], [1, "form-label", 2, "font-size", "x-large"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "text", "formControlName", "nombre", "id", "nombre", "placeholder", "Su nombre :", 1, "form-control", "ps-5"], ["name", "email", 1, "fea", "icon-sm", "icons"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Su email :", 1, "form-control", "ps-5"], ["name", "message-circle", 1, "fea", "icon-sm", "icons"], ["type", "text", "formControlName", "comentarios", "id", "comentarios", "placeholder", "Sus Comentarios :", 1, "form-control", "ps-5"], [1, "col-sm-12", "text-center"], [1, "d-grid"], ["type", "submit", "id", "search", "name", "search", "value", "Enviar Mensaje", 1, "submitBnt", "btn", "btn-primary"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [3, "footerVariant", "hideFooter"], [1, "bg-home", "bg-animation-left", "d-flex", "align-items-center"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-7"], [1, "position-relative", "mt-4", 2, "z-index", "1"], [1, "heading", "mb-3", "display-4", "title-dark", "fw-bold", "title-dark"], [1, "para-desc"], [1, "watch-video", "mt-4", "pt-2"], ["href", "javascript:void(0);", "data-type", "youtube", "data-id", "yba7hPeTSjk", 1, "btn", "btn-icon", "btn-pills", "btn-primary", 3, "click"], ["name", "video", 1, "icons"], [1, "fw-bold", "text-uppercase", "small", "align-middle", "ms-2"], ["content", ""], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["height", "450px", "width", "780px", "src", "https://www.youtube.com/embed/1Z7Jx3g9u58", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "marcovideo"], [1, "heading", "mb-3", "display-4", "title-dark", "fw-bold", "title-dark", 2, "color", "white"], [1, "para-desc", "text-white"], ["routerLink", "nosotros", 1, "btn", "btn-primary"], [1, "uil", "uil-heart-alt"], [1, "row", 2, "text-align", "center", "align-items", "center"], [1, "col"], ["src", "assets/images/colegio/docentes-primaria.png"], [1, "row", 2, "margin-top", "20px"], ["src", "assets/images/colegio/tabla-primaria.png"], [1, "col-lg-6", "col-md-6", "col-12", "mt-4", "pt-2"], [1, "card", "border-0", "work-container", "work-modern", "position-relative", "d-block", "overflow-hidden", "rounded"], [1, "card-body", "p-0"], ["src", "../../../assets/images/colegio/PRIMARIA/DocentesActualesR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/PRIMARIA/estudiantesPrimariR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/PRIMARIA/primeroysegundoPrimaria/tutoraFabianAntaurco.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/PRIMARIA/primeroysegundoPrimaria/ActividadesAprendizajeR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/PRIMARIA/terceroPrimaria/tutoraLuzValderramaR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/PRIMARIA/terceroPrimaria/actividadesAprendizaje3R.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/PRIMARIA/cuartoPrimaria/tutoraNelsyZulemaR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/PRIMARIA/cuartoPrimaria/actividadesAprendizaje4R.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/PRIMARIA/quintoPrimaria/tutoraYoysyRosasR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/PRIMARIA/quintoPrimaria/ActividadesAprendizaje5R.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/PRIMARIA/sextoPrimaria/tutorRoberVelasquezR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/PRIMARIA/sextoPrimaria/ActividadesAprendizaje6R.png", "alt", "work-image", 1, "img-fluid"], ["src", "assets/images/colegio/docentes-secundaria.png", 2, "height", "250px"], ["src", "assets/images/colegio/tabla-secundaria.png"], ["src", "../../../assets/images/colegio/SECUNDARIA/profesoresSecundariaR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/SECUNDARIA/alunmosSecundaria.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/SECUNDARIA/primeroSecundariaR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/SECUNDARIA/segundoSecundariaR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/SECUNDARIA/terceroSecundariaR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/SECUNDARIA/cuartoSecundariaR.png", "alt", "work-image", 1, "img-fluid"], ["src", "../../../assets/images/colegio/SECUNDARIA/quintoSecundaria.png", "alt", "work-image", 1, "img-fluid"], ["height", "450px", "width", "780px", "src", "https://www.youtube.com/embed/VfQjUqrwh8A", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "marcovideo"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("activate", function InicioComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ngb-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, InicioComponent_ng_template_4_Template, 16, 7, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, InicioComponent_ng_template_5_Template, 13, 6, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, InicioComponent_ng_template_6_Template, 11, 6, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "app-reserva-inicio", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("obtenerDatosReserva", function InicioComponent_Template_app_reserva_inicio_obtenerDatosReserva_10_listener($event) { return ctx.obtenerDatosReserva($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Presentaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Me dirijo a las y los seguidores de nuestra Instituci\u00F3n Educativa N\u00B0 86253 \u201CCelso Garro Valderrama\u201D del Centro Poblado de Pampan, Provincia de Bolognesi, Regi\u00F3n Ancash, en forma especial a nuestra comunidad educativa y local, con la finalidad de expresar el cordial saludo en mi condici\u00F3n de Director, al mismo tiempo; aprovecho el presente para hacer la presentaci\u00F3n p\u00FAblica de nuestro sitio Web, como una herramienta de gesti\u00F3n escolar que tiene como prop\u00F3sito fortalecer el liderazgo de la comunidad educativa hac\u00EDa el logro de aprendizajes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " A trav\u00E9s del presente pretendemos la participaci\u00F3n, el involucramiento y la comunicaci\u00F3n de nuestra comunidad educativa en dimensiones de gesti\u00F3n, operando la funcionalidad de los comit\u00E9s de gesti\u00F3n estrat\u00E9gica, de condiciones operativas, pedag\u00F3gica y del bienestar, direccionando el sentido de la gesti\u00F3n hacia el logro de los compromisos de gesti\u00F3n escolar en beneficio de la formaci\u00F3n integral de nuestros estudiantes, garantizando su acceso al sistema educativo peruano y su conclusi\u00F3n satisfactoria de su perfil de egreso.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " El lanzamiento de esta plataforma se realiza en el marco de haber ganado el II y IV Concurso Nacional de Proyectos de Innovaci\u00F3n Pedag\u00F3gica organizado por el FONDEP, el a\u00F1o 2020 con el Proyecto \u201CGestionando las condiciones digitales logramos aprendizajes a distancia\u201D, y; el a\u00F1o 2022 con el Proyecto \u201CComunidad Educativa L\u00EDder, hac\u00EDa una gesti\u00F3n de aprendizajes\u201D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Ambos proyectos tienen el objetivo de mejorar las buenas pr\u00E1cticas docentes, el primero promueve el uso de las principales herramientas digitales al servicio de los prop\u00F3sitos de aprendizajes de nuestros estudiantes especialmente en un escenario de aprendizaje h\u00EDbrido, y; el segundo promueve el acceso de la comunidad educativa l\u00EDder y su presencia hacia el logro de una gesti\u00F3n de aprendizajes a favor de nuestros estudiantes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " Estaremos muy atentos a recibir sus sugerencias para mejorar y enriquecer los contenidos de nuestra plataforma, poniendo a vuestra disposici\u00F3n para su conocimiento y emitir sus comentarios. Gracias por su atenci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " Marcos Victor Llallihuaman Antunez");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, " DIRECTOR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Niveles Educativos");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "En ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Celso Garro Valderrama");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " disfruta de la mejor educacion. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "ul", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "primaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, InicioComponent_ng_template_58_Template, 87, 0, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Secundaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, InicioComponent_ng_template_64_Template, 55, 0, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "En Celso Garro Valderrama");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "Disfruta de la mejor ense\u00F1anza. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InicioComponent_Template_a_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](79); return ctx.openModal(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "i-feather", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, InicioComponent_ng_template_78_Template, 6, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](80, "app-services", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](85, "app-cartillas", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "section", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](91, "iframe", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "Cont\u00E1ctenos !");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "form", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function InicioComponent_Template_form_ngSubmit_99_listener() { return ctx.enviarContacto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, "Nombre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](108, "i-feather", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](109, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](117, "i-feather", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](118, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "Comentarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](124, "i-feather", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](125, "textarea", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](129, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](131, "i-feather", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](132, "app-footer", 67);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("navClass", ctx.addclass)("buttonList", ctx.buttonShow)("isdeveloper", ctx.developerPage)("shopPages", ctx.shopPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showNavigationArrows", ctx.showNavigationArrows)("showNavigationIndicators", ctx.showNavigationIndicators);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("activeId", ctx.showNgbNav(ctx.showRoomList));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngbNavOutlet", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("servicesData", ctx.servicesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cartillaData", ctx.cartillaData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.contactenosForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("footerVariant", ctx.footerClass)("hideFooter", ctx.hideFooter);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbSlide, _shared_reserva_inicio_reserva_inicio_component__WEBPACK_IMPORTED_MODULE_3__.ReservaInicioComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavOutlet, angular_feather__WEBPACK_IMPORTED_MODULE_11__.FeatherComponent, _shared_services_services_component__WEBPACK_IMPORTED_MODULE_4__.ServicesComponent, _shared_cartillas_cartillas_component__WEBPACK_IMPORTED_MODULE_5__.CartillasComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__.ScrollToDirective, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], styles: [".dark-modal .modal-content {\r\n    background-color: #000000;\r\n    color: white;\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n   .dark-modal .modal-header {\r\n    border: none\r\n}\r\n\r\n   .dark-modal .close {\r\n    color: white;\r\n}\r\n\r\n .marcovideo[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    width: 346.6px;\r\n}\r\n\r\n @media(min-width: 528px) {\r\n    .marcovideo[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n        width: 485px;\r\n    }\r\n}\r\n\r\n @media(min-width: 992px) {\r\n    .marcovideo[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n        width: 780px;\r\n    }\r\n}\r\n\r\n .personalizado[_ngcontent-%COMP%] {\r\n    background-color: rgb(8, 231, 247);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7Q0FFQztJQUNHO0FBQ0o7O0NBRUM7SUFDRyxZQUFZO0FBQ2hCOztDQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0NBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0FBQ0o7O0NBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0FBQ0o7O0NBRUE7SUFDSSxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiA6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBib3JkZXI6IG5vbmVcclxufVxyXG5cclxuIDo6bmctZGVlcCAuZGFyay1tb2RhbCAuY2xvc2Uge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWFyY292aWRlbyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDM0Ni42cHg7XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDUyOHB4KSB7XHJcbiAgICAubWFyY292aWRlbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICB3aWR0aDogNDg1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubWFyY292aWRlbyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgICAgICB3aWR0aDogNzgwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wZXJzb25hbGl6YWRvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCAyMzEsIDI0Nyk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 247:
/*!**********************************************************!*\
  !*** ./src/app/pages/innovacion/innovacion.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InnovacionComponent": function() { return /* binding */ InnovacionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);






class InnovacionComponent {
    constructor() {
        this.navClass = 'nav-light';
    }
    ngOnInit() {
    }
    onActivate(componentReference) {
        this.addclass = componentReference.navClass;
        this.buttonShow = componentReference.buttonList;
        this.TopbarShow = componentReference.sliderTopbar;
        this.footerClass = componentReference.footerVariant;
        this.developerPage = componentReference.isdeveloper;
        this.hideFooter = componentReference.hideFooter;
        this.shopPages = componentReference.shopPages;
    }
}
InnovacionComponent.ɵfac = function InnovacionComponent_Factory(t) { return new (t || InnovacionComponent)(); };
InnovacionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InnovacionComponent, selectors: [["app-innovacion"]], decls: 40, vars: 8, consts: [[3, "navClass", "buttonList", "sliderTopbar", "isdeveloper", "shopPages"], [3, "activate"], ["id", "home", 1, "bg-half", "d-table", "w-100", 2, "background", "url('assets/images/company/innovacionPortada.jpg')", "background-size", "100% 160%"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-10", "text-center"], [1, "title-heading", 2, "height", "250px"], [1, "display-4", "title-dark", "text-white", "fw-bold", "mb-3"], [1, "para-desc", "title-dark", "mx-auto", "text-light", 2, "font-size", "x-large"], [1, "section", "border-top"], [1, "card", "rounded", "shadow", "border-0", "bg-light", "overflow-hidden"], [1, "row", "no-gutters", "align-items-center"], [1, "col-lg-6"], ["src", "assets/images/company/innovacionPortada.jpg", "alt", "", 1, "img-fluid"], [1, "card-body", "section-title", "p-md-5"], [1, "mb-4"], [2, "font-size", "large"], [1, "mt-4", "pt-2"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-light"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "shape", "overflow-hidden", "text-white"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [3, "footerVariant", "hideFooter"]], template: function InnovacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function InnovacionComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Innovaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Colaboracion para el crecimiento y el desarrollo de nuestra instituci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "UGEL BOLOGNESI");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Nuestro compromiso por dar una excelente educaci\u00F3n se nota en los reconocimientos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i-feather", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "app-footer", 26);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navClass", ctx.addclass)("buttonList", ctx.buttonShow)("sliderTopbar", ctx.TopbarShow)("isdeveloper", ctx.developerPage)("shopPages", ctx.shopPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("footerVariant", ctx.footerClass)("hideFooter", ctx.hideFooter);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], encapsulation: 2 });


/***/ }),

/***/ 13176:
/*!******************************************************************!*\
  !*** ./src/app/pages/normatividades/normatividades.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NormatividadesComponent": function() { return /* binding */ NormatividadesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);







function NormatividadesComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " --> Oficios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NormatividadesComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "En Proceso...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NormatividadesComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " --> Resoluciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NormatividadesComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "En Proceso... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NormatividadesComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " --> Directivas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NormatividadesComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "En Proceso...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NormatividadesComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " --> Instructivos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NormatividadesComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "En Proceso...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NormatividadesComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " --> Todas las normas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NormatividadesComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "En Proceso...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class NormatividadesComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.navClass = 'nav-light';
        this.anioActual = new Date().getFullYear();
    }
    ngOnInit() {
    }
    openWindowCustomClass(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
    onActivate(componentReference) {
        this.addclass = componentReference.navClass;
        this.buttonShow = componentReference.buttonList;
        this.TopbarShow = componentReference.sliderTopbar;
        this.footerClass = componentReference.footerVariant;
        this.developerPage = componentReference.isdeveloper;
        this.hideFooter = componentReference.hideFooter;
        this.shopPages = componentReference.shopPages;
    }
}
NormatividadesComponent.ɵfac = function NormatividadesComponent_Factory(t) { return new (t || NormatividadesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
NormatividadesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NormatividadesComponent, selectors: [["app-normatividades"]], decls: 62, vars: 8, consts: [[3, "navClass", "buttonList", "sliderTopbar", "isdeveloper", "shopPages"], [3, "activate"], ["id", "home", 1, "bg-half", "d-table", "w-100", 2, "background", "url('assets/images/company/normatividadesPortada.png')", "background-size", "100% 100%", "height", "1000px"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level", "title-heading"], [1, "display-4", "title-dark", "text-white", "fw-bold", "mb-3", "text-white", "title-dark", "title"], [1, "text-white", "para-desc", "mb-0", "mx-auto", 2, "font-size", "x-large"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/inicio"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section", "bg-light"], [1, "container", "mt-100", "mt-60", 2, "margin-top", "-15px"], [1, "row", "align-items-center"], [1, "col-lg-12", "col-md-12", "order-2", "order-md-1", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "section-title", "me-lg-5"], [2, "font-size", "large", "color", "blue"], [1, "text-primary", "fw-bold"], [1, "faq-content", "mt-4", "pt-2"], ["activeIds", "ngb-panel-0", "closeOthers", "true"], ["acc", "ngbAccordion"], ["cardClass", "border-0 rounded shadow mb-2"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], [1, "section", "bg-light", "pt-0"], [1, "col-12", "text-center"], [1, "video-solution-cta", "position-relative", 2, "z-index", "1"], ["src", "../../../assets/images/colegio/FOTOSGENERALES/fotogenerica-1.jpeg", "alt", "", 1, "img-fluid", "rounded-md", "shadow-lg"], [1, "feature-posts-placeholder", "bg-primary"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [3, "footerVariant", "hideFooter"], ["id", "headingtwo", 1, "border-0", "bg-light"], [1, "title", "mb-0", "text-dark"], [2, "font-size", "large"]], template: function NormatividadesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function NormatividadesComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Normatividades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Nuestras normatividades. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Normatividades");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Normatividades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ngb-accordion", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ngb-panel", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, NormatividadesComponent_ng_template_37_Template, 3, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, NormatividadesComponent_ng_template_38_Template, 2, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ngb-panel", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, NormatividadesComponent_ng_template_40_Template, 3, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, NormatividadesComponent_ng_template_41_Template, 2, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ngb-panel", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, NormatividadesComponent_ng_template_43_Template, 3, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, NormatividadesComponent_ng_template_44_Template, 2, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ngb-panel", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, NormatividadesComponent_ng_template_46_Template, 3, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, NormatividadesComponent_ng_template_47_Template, 2, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ngb-panel", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, NormatividadesComponent_ng_template_49_Template, 3, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, NormatividadesComponent_ng_template_50_Template, 2, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "i-feather", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "app-footer", 40);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navClass", ctx.addclass)("buttonList", ctx.buttonShow)("sliderTopbar", ctx.TopbarShow)("isdeveloper", ctx.developerPage)("shopPages", ctx.shopPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("footerVariant", ctx.footerClass)("hideFooter", ctx.hideFooter);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbPanelContent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__.ScrollToDirective, angular_feather__WEBPACK_IMPORTED_MODULE_6__.FeatherComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], encapsulation: 2 });


/***/ }),

/***/ 12290:
/*!******************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NosotrosComponent": function() { return /* binding */ NosotrosComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-count-to */ 74848);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);








function NosotrosComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00BFQu\u00E9 ofrece Celso Garro Valderrama? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NosotrosComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Educaci\u00F3n de calidad al alcance de Ud.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NosotrosComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00BFDonde se encuentra Celso Garro Valderrama? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NosotrosComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nos encontramos en el centro de la ciudad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NosotrosComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00BFCon qu\u00E9 comodidades cuenta Celso Garro Valderrama? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NosotrosComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Celso Garro Valderrama cuenta con infraestructura de ultima generaci\u00F3n para dar comodidad al estudiante y pueda realizar de manera \u00F3ptima sus actividades.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NosotrosComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NosotrosComponent_ng_template_82_Template_button_click_1_listener() { const modal_r9 = ctx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 66);
} }
class NosotrosComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.navClass = 'nav-light';
        this.anioActual = new Date().getFullYear();
    }
    ngOnInit() {
    }
    openWindowCustomClass(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
    onActivate(componentReference) {
        this.addclass = componentReference.navClass;
        this.buttonShow = componentReference.buttonList;
        this.TopbarShow = componentReference.sliderTopbar;
        this.footerClass = componentReference.footerVariant;
        this.developerPage = componentReference.isdeveloper;
        this.hideFooter = componentReference.hideFooter;
        this.shopPages = componentReference.shopPages;
    }
}
NosotrosComponent.ɵfac = function NosotrosComponent_Factory(t) { return new (t || NosotrosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal)); };
NosotrosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NosotrosComponent, selectors: [["app-nosotros"]], decls: 88, vars: 11, consts: [[3, "navClass", "buttonList", "sliderTopbar", "isdeveloper", "shopPages"], [3, "activate"], ["id", "home", 1, "bg-half", "d-table", "w-100", 2, "background", "url('assets/images/company/nosotrosPortada.jpg')", "background-size", "100% 100%"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level", "title-heading"], [1, "display-4", "title-dark", "text-white", "fw-bold", "mb-3", "text-white", "title-dark", "title"], [1, "text-white", "para-desc", "mb-0", "mx-auto", 2, "font-size", "x-large"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/inicio"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColors"], [1, "section"], ["id", "counter", 1, "row", "align-items-center"], [1, "col-md-6", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "ms-lg-4"], [1, "d-flex", "mb-4"], [1, "text-primary", "h1", "mb-0"], [1, "counter-value", "display-1", "fw-bold", 3, "CountTo", "from", "duration"], [1, "align-self-end", "ms-2", 2, "font-size", "x-large"], [1, "section-title"], [1, "mb-4"], [2, "font-size", "medium", "font-size", "large"], [1, "text-primary", "fw-bold", 2, "font-family", "Tillana"], ["href", "javascript:void(0)", "routerLink", "/inicio/contacto", 1, "btn", "btn-primary", "mt-3", 2, "font-size", "large"], [1, "col-md-6"], ["src", "assets/images/colegio/portada1xx.jfif", "alt", "", 1, "img-fluid"], ["src", "assets/images/company/noticiasPortada.jpg", "alt", "", 1, "img-fluid"], [1, "section", "bg-light"], [1, "container", "mt-100", "mt-60", 2, "margin-top", "-15px"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-6", "order-1", "order-md-2"], [1, "title", "mb-4"], ["src", "assets/images/colegio/organigrama.png", "alt", "", 1, "img-fluid", "rounded", "shadow-md"], [1, "col-lg-5", "col-md-6", "order-2", "order-md-1", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "section-title", "me-lg-5"], [1, "faq-content", "mt-4", "pt-2"], ["activeIds", "ngb-panel-0", "closeOthers", "true"], ["acc", "ngbAccordion"], ["cardClass", "border-0 rounded shadow mb-2"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], [1, "section", "bg-light", "pt-0"], [1, "col-12", "text-center"], [1, "video-solution-cta", "position-relative", 2, "z-index", "1"], ["src", "../../../assets/images/colegio/FOTOSGENERALES/fotogenerica-3.jpeg", "alt", "", 1, "img-fluid", "rounded-md", "shadow-lg"], [1, "play-icon"], ["content", ""], [1, "feature-posts-placeholder", "bg-primary"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [3, "footerVariant", "hideFooter"], ["id", "headingtwo", 1, "border-0", "bg-light"], [1, "title", "mb-0", "text-dark"], [2, "font-size", "large"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function NosotrosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activate", function NosotrosComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Nosotros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Juntos formamos una gran familia, comprometidos con la ense\u00F1anza de calidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "A\u00F1os De Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Nuestra Misi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "En la instituci\u00F3n educactiva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Celso Garro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " tenemos servicios p\u00FAblicos en la modalidad presencial y/o virtual que promueve el desarrollo y la formaci\u00F3n integral de los estudiantes, con docentes capacitados que promueven buenas pr\u00E1cticas pedag\u00F3gicas, innovadoras y de emprendimiento utilizando las experiencias TIC; prestando atenci\u00F3n a las necesidades de aprendizaje e inclusivas, para construir una ciudadan\u00EDa basada en el respeto de los espacios democr\u00E1ticos, frente a las diversas crisis de pandemias, siendo participativos en la conservaci\u00F3n del medio ambiente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Nuestra Visi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Todos y todas desarrollan aprendizajes para ejercer una ciudadan\u00EDa plena, comunicaci\u00F3n efectiva para interactuar con otras personas, pr\u00E1ctica de una vida saludable para su bienestar, resoluci\u00F3n de problemas para mejorar la calidad de vida y una cultura digital para interactuar con la informaci\u00F3n a trav\u00E9s de buenas pr\u00E1cticas pedag\u00F3gicas, de innovaci\u00F3n y emprendimiento, con una Gesti\u00F3n Escolar centrado en el estudiante quien es protagonista de su propio aprendizaje, conviviendo y dialogando en una sociedad democr\u00E1tica, equitativa, intercultural e inclusiva que valora la diversidad y est\u00E1n comprometidos con el desarrollo sostenible en lo social, ambiental y econ\u00F3mico de su entorno.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Cont\u00E1ctenos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "h4", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Organigrama.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "h4", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Preguntas frecuentes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "ngb-accordion", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "ngb-panel", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, NosotrosComponent_ng_template_66_Template, 3, 0, "ng-template", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, NosotrosComponent_ng_template_67_Template, 2, 0, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "ngb-panel", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, NosotrosComponent_ng_template_69_Template, 3, 0, "ng-template", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, NosotrosComponent_ng_template_70_Template, 2, 0, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "ngb-panel", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, NosotrosComponent_ng_template_72_Template, 3, 0, "ng-template", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, NosotrosComponent_ng_template_73_Template, 2, 0, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "section", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, NosotrosComponent_ng_template_82_Template, 5, 0, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "i-feather", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "app-footer", 59);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("navClass", ctx.addclass)("buttonList", ctx.buttonShow)("sliderTopbar", ctx.TopbarShow)("isdeveloper", ctx.developerPage)("shopPages", ctx.shopPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("CountTo", ctx.anioActual - 2009)("from", 0)("duration", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("footerVariant", ctx.footerClass)("hideFooter", ctx.hideFooter);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, angular_count_to__WEBPACK_IMPORTED_MODULE_1__.CountToDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPanelContent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToDirective, angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".dark-modal .modal-content {\r\n    background-color: #000000;\r\n    color: white;\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n   .dark-modal .modal-header {\r\n    border: none\r\n}\r\n\r\n   .dark-modal .close {\r\n    color: white;\r\n}\r\n\r\n iframe[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    width: 346.6px;\r\n}\r\n\r\n @media(min-width: 528px) {\r\n    iframe[_ngcontent-%COMP%] {\r\n        height: 280px;\r\n        width: 485px;\r\n    }\r\n}\r\n\r\n @media(min-width: 992px) {\r\n    iframe[_ngcontent-%COMP%] {\r\n        height: 450px;\r\n        width: 780px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vc290cm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztDQUVDO0lBQ0c7QUFDSjs7Q0FFQztJQUNHLFlBQVk7QUFDaEI7O0NBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7Q0FFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7QUFDSjs7Q0FFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJub3NvdHJvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4gOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgYm9yZGVyOiBub25lXHJcbn1cclxuXHJcbiA6Om5nLWRlZXAgLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaWZyYW1lIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzQ2LjZweDtcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNTI4cHgpIHtcclxuICAgIGlmcmFtZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICB3aWR0aDogNDg1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBpZnJhbWUge1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDc4MHB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 41785:
/*!******************************************************!*\
  !*** ./src/app/pages/noticias/noticias.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasComponent": function() { return /* binding */ NoticiasComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header/header.component */ 89470);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);






class NoticiasComponent {
    constructor() {
        this.navClass = 'nav-light';
        this.servicesData = [
            {
                icon: "uil uil-wifi h1 text-primary",
                title: "Wi-Fi Gratis",
                description: "Contamos con el servicio de Wifi 24x7 "
            },
            {
                icon: "uil uil-swimmer h1 text-primary",
                title: "Piscina",
                description: "Disfruta de nuestra piscina frente al mar."
            },
            {
                icon: "uil uil-car h1 text-primary",
                title: "Estacionamiento",
                description: "Contamos con estacionamiento en nuestro establecimiento."
            },
            {
                icon: "uil uil-utensils h1 text-primary",
                title: "Restaurante Interno",
                description: "Disfruta de nuestra gastronomia en nuestro restaurante."
            },
            {
                icon: "uil uil-accessible-icon-alt h1 text-primary",
                title: "Instalaciones para discapacitados",
                description: "Contamos con instalaciones para personas con discapacidad."
            },
            {
                icon: "uil uil-tv-retro h1 text-primary",
                title: "Televisión Cable",
                description: "Contamos con television por cable las 24 horas."
            },
            {
                icon: "uil uil-temperature-half h1 text-primary",
                title: "Aire Acondicionado",
                description: "Poseemos habitacionescon el aire acondicionado que buscas."
            },
            {
                icon: "uil uil-lock-access h1 text-primary",
                title: "Caja Fuerte",
                description: "Guarda tus objetos de valor sin preocupaciones"
            },
            {
                icon: "uil uil-sunset h1 text-primary",
                title: "Terraza frente al mar",
                description: "La mejor vista frente al mar, Calidad educativa ."
            },
            {
                icon: "uil uil-stretcher h1 text-primary",
                title: "Parrilla",
                description: "Comparte con tus amigos en nuestra zona de parrilla."
            },
            {
                icon: "uil uil-wind h1 text-primary",
                title: "Hidromasaje",
                description: "Disfruta de un hidromasaje frente al mar"
            },
            {
                icon: "uil uil-kid h1 text-primary",
                title: "Piscina para niños",
                description: "Piscina para los engreidos de la familia."
            }
        ];
        /**
         * Client Testimonial Data
         */
        this.testimonialData = [
            {
                profile: "assets/images/client/01.jpg",
                name: "Rodrigo Paredes",
                designation: "Gerente",
                message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`
            },
            {
                profile: "assets/images/client/02.jpg",
                name: "Barbara Jimenez",
                designation: "Administradora",
                message: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`
            },
            {
                profile: "assets/images/client/03.jpg",
                name: "Ana Oliver",
                designation: "Ingeniero",
                message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
            },
            {
                profile: "assets/images/client/04.jpg",
                name: "Kevin Aragon",
                designation: "Comercial",
                message: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`
            },
            {
                profile: "assets/images/client/05.jpg",
                name: "Diana Gutierrez",
                designation: "Arquiteto",
                message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`
            },
            {
                profile: "assets/images/client/06.jpg",
                name: "Sergio Salazar",
                designation: "Diseñador",
                message: `" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`
            }
        ];
    }
    ngOnInit() {
    }
    onActivate(componentReference) {
        this.addclass = componentReference.navClass;
        this.buttonShow = componentReference.buttonList;
        this.TopbarShow = componentReference.sliderTopbar;
        this.footerClass = componentReference.footerVariant;
        this.developerPage = componentReference.isdeveloper;
        this.hideFooter = componentReference.hideFooter;
        this.shopPages = componentReference.shopPages;
    }
}
NoticiasComponent.ɵfac = function NoticiasComponent_Factory(t) { return new (t || NoticiasComponent)(); };
NoticiasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NoticiasComponent, selectors: [["app-noticias"]], decls: 118, vars: 8, consts: [[3, "navClass", "buttonList", "sliderTopbar", "isdeveloper", "shopPages"], [3, "activate"], ["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100", 2, "background", "url('assets/images/company/noticiasPortada.jpg')", "background-size", "100% 160%"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "display-4", "title-dark", "text-white", "fw-bold", "mb-3", "text-white", "title-dark", "title"], [1, "text-white", "para-desc", "mb-0", "mx-auto", 2, "font-size", "x-large"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/inicio"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], [1, "col-lg-6", "mt-4", "pt-2"], [1, "card", "work-container", "work-modern", "rounded", "border-0", "overflow-hidden"], [1, "card-header"], [1, "card-body", "p-0"], ["src", "assets/images/colegio/FOTOSGENERALES/fotogenerica-1.jpeg", "alt", "work-image", 1, "img-fluid", "rounded"], [1, "overlay-work", "bg-dark"], [1, "content"], [1, "read_more", "bg-primary", "text-center", "rounded-circle"], ["href", "javascript:void(0)", 1, "text-light", "d-block"], ["name", "chevron-right", 1, "fea", "icon-sm", "title-dark"], ["src", "assets/images/colegio/FOTOSGENERALES/fotogenerica-2.jpeg", "alt", "work-image", 1, "img-fluid", "rounded"], [1, "post-meta", "mb-0", "mt-2", "text-white", "list-unstyled"], [1, "list-inline-item", "me-3", 2, "font-size", "x-large"], [1, "uil", "uil-bed-double", "me-2"], ["src", "assets/images/colegio/FOTOSGENERALES/fotogenerica-3.jpeg", "alt", "work-image", 1, "img-fluid", "rounded"], ["src", "assets/images/colegio/FOTOSGENERALES/fotogenerica-4.jpeg", "alt", "work-image", 1, "img-fluid", "rounded"], ["src", "assets/images/colegio/FOTOSGENERALES/fotogenerica-5.jpeg", "alt", "work-image", 1, "img-fluid", "rounded"], ["src", "assets/images/colegio/FOTOSGENERALES/fotogenerica-6.jpeg", "alt", "work-image", 1, "img-fluid", "rounded"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [3, "footerVariant", "hideFooter"]], template: function NoticiasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function NoticiasComponent_Template_router_outlet_activate_1_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Noticias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "En Celso Garro Valderrama contamos con las Noticias de nuestro avance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Noticias");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Noticia 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa unde id consectetur, modi corrupti esse itaque sequi voluptatibus sunt ad quos autem, ut nihil at. Consequatur, porro laborum. Ullam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i-feather", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Noticia 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore modi itaque accusantium dicta consequatur aspernatur magni consectetur maxime excepturi. Quod possimus cupiditate veritatis sapiente reiciendis alias exercitationem dolore commodi labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "noticia");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i-feather", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Noticia 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa unde id consectetur, modi corrupti esse itaque sequi voluptatibus sunt ad quos autem, ut nihil at. Consequatur, porro laborum. Ullam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i-feather", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Noticia 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore modi itaque accusantium dicta consequatur aspernatur magni consectetur maxime excepturi. Quod possimus cupiditate veritatis sapiente reiciendis alias exercitationem dolore commodi labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i-feather", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Noticia 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa unde id consectetur, modi corrupti esse itaque sequi voluptatibus sunt ad quos autem, ut nihil at. Consequatur, porro laborum. Ullam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "i-feather", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " Noticia 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore modi itaque accusantium dicta consequatur aspernatur magni consectetur maxime excepturi. Quod possimus cupiditate veritatis sapiente reiciendis alias exercitationem dolore commodi labore.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "i-feather", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "i-feather", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "app-footer", 42);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navClass", ctx.addclass)("buttonList", ctx.buttonShow)("sliderTopbar", ctx.TopbarShow)("isdeveloper", ctx.developerPage)("shopPages", ctx.shopPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxScrollTo", "#home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("footerVariant", ctx.footerClass)("hideFooter", ctx.hideFooter);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__.ScrollToDirective, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], encapsulation: 2 });


/***/ }),

/***/ 18950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": function() { return /* binding */ PagesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio/inicio.component */ 75461);
/* harmony import */ var _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nosotros/nosotros.component */ 12290);
/* harmony import */ var _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle/detalle.component */ 99233);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-feather/icons */ 940);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-youtube-player */ 15622);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 22723);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-swiper-wrapper */ 15923);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-typed-js */ 23192);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angularx-flatpickr */ 42160);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-count-to */ 74848);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-masonry */ 70346);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lightbox */ 629);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noticias/noticias.component */ 41785);
/* harmony import */ var _aliados_aliados_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aliados/aliados.component */ 20754);
/* harmony import */ var _normatividades_normatividades_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./normatividades/normatividades.component */ 13176);
/* harmony import */ var _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gestion/gestion.component */ 57182);
/* harmony import */ var _innovacion_innovacion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./innovacion/innovacion.component */ 247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);

































class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselModule,
            angular_feather__WEBPACK_IMPORTED_MODULE_17__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_18__.allIcons),
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_19__.ScrollToModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot([], { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' }),
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_20__.NgxYoutubePlayerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdownModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_22__.CKEditorModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbNavModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_24__.SwiperModule,
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_25__.NgxTypedJsModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_26__.FlatpickrModule.forRoot(),
            angular_count_to__WEBPACK_IMPORTED_MODULE_4__.CountToModule,
            ngx_masonry__WEBPACK_IMPORTED_MODULE_27__.NgxMasonryModule,
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__.LightboxModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__.InicioComponent,
        _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_1__.NosotrosComponent,
        _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__.DetalleComponent,
        _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_6__.NoticiasComponent,
        _aliados_aliados_component__WEBPACK_IMPORTED_MODULE_7__.AliadosComponent,
        _normatividades_normatividades_component__WEBPACK_IMPORTED_MODULE_8__.NormatividadesComponent,
        _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_9__.GestionComponent,
        _innovacion_innovacion_component__WEBPACK_IMPORTED_MODULE_10__.InnovacionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_17__.FeatherModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_19__.ScrollToModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_20__.NgxYoutubePlayerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbDropdownModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_22__.CKEditorModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbNavModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_24__.SwiperModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_25__.NgxTypedJsModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_26__.FlatpickrModule, angular_count_to__WEBPACK_IMPORTED_MODULE_4__.CountToModule,
        ngx_masonry__WEBPACK_IMPORTED_MODULE_27__.NgxMasonryModule,
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__.LightboxModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule], exports: [_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__.InicioComponent,
        _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_1__.NosotrosComponent,
        _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_2__.DetalleComponent] }); })();


/***/ }),

/***/ 63360:
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": function() { return /* binding */ PagesRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio/inicio.component */ 75461);
/* harmony import */ var _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nosotros/nosotros.component */ 12290);
/* harmony import */ var _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticias/noticias.component */ 41785);
/* harmony import */ var _aliados_aliados_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aliados/aliados.component */ 20754);
/* harmony import */ var _normatividades_normatividades_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normatividades/normatividades.component */ 13176);
/* harmony import */ var _innovacion_innovacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./innovacion/innovacion.component */ 247);
/* harmony import */ var _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle/detalle.component */ 99233);
/* harmony import */ var _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gestion/gestion.component */ 57182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);











const routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__.InicioComponent },
    { path: 'nosotros', component: _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_1__.NosotrosComponent },
    { path: 'gestion', component: _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_7__.GestionComponent },
    { path: 'noticias', component: _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_2__.NoticiasComponent },
    { path: 'aliados', component: _aliados_aliados_component__WEBPACK_IMPORTED_MODULE_3__.AliadosComponent },
    { path: 'innovacion', component: _innovacion_innovacion_component__WEBPACK_IMPORTED_MODULE_5__.InnovacionComponent },
    { path: 'normatividades', component: _normatividades_normatividades_component__WEBPACK_IMPORTED_MODULE_4__.NormatividadesComponent },
    { path: 'detalle', component: _detalle_detalle_component__WEBPACK_IMPORTED_MODULE_6__.DetalleComponent },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 58027:
/*!******************************************************!*\
  !*** ./src/app/paginaerror/paginaerror.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginaerrorComponent": function() { return /* binding */ PaginaerrorComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 35411);



class PaginaerrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaginaerrorComponent.ɵfac = function PaginaerrorComponent_Factory(t) { return new (t || PaginaerrorComponent)(); };
PaginaerrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginaerrorComponent, selectors: [["app-paginaerror"]], decls: 22, vars: 0, consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/inicio", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-home", "d-flex", "align-items-center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-12", "text-center"], [1, "text-uppercase", "mt-4", "display-3"], [1, "text-capitalize", "text-dark", "mb-4", "error-page"], [1, "text-muted", "para-desc", "mx-auto"], [1, "text-primary", "fw-bold", 2, "font-family", "Tillana"], [1, "row"], [1, "col-md-12", "text-center"], ["input", "", "type", "button", "value", "Go back!", "onclick", "history.go(-1)", 1, "btn", "btn-outline-primary", "mt-4"], ["routerLink", "/inicio", 1, "btn", "btn-primary", "mt-4", "ms-2"]], template: function PaginaerrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Oh ! no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "P\u00E1gina no encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Esta direcci\u00F3n web en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Celso Garro Valderrama ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " no existe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ir atr\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ir a inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent], encapsulation: 2 });


/***/ }),

/***/ 84160:
/*!*********************************************!*\
  !*** ./src/app/services/detalle.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleService": function() { return /* binding */ DetalleService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);



class DetalleService {
    constructor(http) {
        this.http = http;
    }
    getReservasHabitacion(id) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url_base_backend}/obtener-fechas-habitacion`, { id: id });
    }
}
DetalleService.ɵfac = function DetalleService_Factory(t) { return new (t || DetalleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DetalleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DetalleService, factory: DetalleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 18911:
/*!********************************************!*\
  !*** ./src/app/services/inicio.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioService": function() { return /* binding */ InicioService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class InicioService {
    constructor() {
        this.servicesData = [
            {
                icon: "uil uil-game-structure h1 text-primary",
                title: "Responsabilidad",
                description: "La enseñanza de respetar los tiempos de los deberes casa a la perfección con la rutina para ayudar en las tareas del hogar. De esta forma, el pequeño se convertirá en un adulto responsable el día de mañana; ya que aprenderá a diferenciar los actos buenos y los no tan buenos, y a asumir las consecuencias de cada uno."
            },
            {
                icon: "uil uil-book-reader h1 text-primary",
                title: "Educación para la Igualdad de Oportunidades de Ambos Sexos, uno de los valores más importante en la escuela",
                description: "Una educación orientada a contemplar la diferencia como realidad enriquecedora y no como una forma de discriminación. Distinguiendo entre identidad sexual e identidad de género, y distinguiendo entre las diferencias biológicas y las funciones y los roles sociales relacionados con el género."
            },
            {
                icon: "uil uil-swimmer h1 text-primary",
                title: "Compromiso",
                description: " De esta forma, conseguirá fortalecer los objetivos y los proyectos, proponiéndose cualquier cosa y siendo capaz de llegar hasta donde él quiera."
            },
            {
                icon: "uil uil-bolt-alt h1 text-primary",
                title: "Tolerancia",
                description: "Como ya te podrás suponer, la tolerancia es uno de los principales valores que se deben enseñar en la escuela. En este sentido, el centro educativo es el espacio cotidiano donde se relacionan diferentes niños, cada uno con sus costumbres, culturas y de padres y madres diferentes."
            },
            {
                icon: "uil uil-thumbs-up h1 text-primary",
                title: "Gratitud",
                description: "“Gracias” es una de las palabras más importantes que el pequeño debe aprender y seguir descubriendo a lo largo de su vida, junto a “te quiero” y “perdón”. Desde la infancia, se debe procurar que los niños sean agradecidos, sobre todo con las pequeñas cosas que da la vida."
            },
            {
                icon: "uil uil-users-alt h1 text-primary",
                title: "Generosidad",
                description: "Además, hay que asegurarse de convertir la generosidad en un placer que les haga sentir bien haciendo lo correcto por los demás desde el corazón."
            },
            {
                icon: "uil uil-user-check h1 text-primary",
                title: "Honestidad",
                description: "Entender que hay que ser honestos hasta cuando se ha cometido un error es una clara muestra de madurez y responsabilidad. Por eso, en clase y en casa hay que darle a los niños la suficiente confianza para que ellos sepan y entiendan que lo mejor es decir siempre la verdad. "
            },
            {
                icon: "uil uil-sun h1 text-primary",
                title: "Educación Moral y Cívica",
                description: "Educación relacionada con el concepto de ‘Democracia’ y el fomento de sus valores. Una educación moral y cívica debe partir del conocimiento del sistema social en que se basa, de los derechos y deberes de los ciudadanos, y del mismo concepto de ciudadanía."
            },
            {
                icon: "uil uil-mountains-sun h1 text-primary",
                title: "Humildad",
                description: "En hermandad con la honestidad, se practicará también la humildad con los demás porque el ser humano habita en un mundo plural, multicultural y diferente. Por ende, es importante educar al niño para que no crea que es superior a los demás, ni se crea tener más derechos que el resto."
            }
        ];
        this.roomData = [
            {
                image: 'assets/images/hotel/01.jpg',
                title: 'Primer Bungalow',
                category: 'bungalow',
                numBed: 5,
                numBath: 2,
                costo: 500,
                numPersonas: 6,
                valor2: 'Ronald'
            },
            {
                image: 'assets/images/hotel/02.jpg',
                title: 'Segundo Bungalow',
                category: 'bungalow',
                numBed: 7,
                numBath: 2,
                costo: 600,
                numPersonas: 8,
                valor2: 'Jorge'
            },
            {
                image: 'assets/images/hotel/03.jpg',
                title: 'Habitación Standard',
                category: 'standard',
                numBed: 3,
                numBath: 1,
                costo: 350,
                numPersonas: 4,
                valor2: 'Alex'
            },
        ];
        this.cartillaData = [
            {
                image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-7.jpeg',
                title: '',
                category: ''
            },
            {
                image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-8.jpeg',
                title: '',
                category: ''
            },
            {
                image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-9.jpeg',
                title: '',
                category: ''
            },
            {
                image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-10.jpeg',
                title: '',
                category: ''
            },
            {
                image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-11.jpeg',
                title: '',
                category: ''
            },
            {
                image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-12.jpeg',
                title: '',
                category: ''
            },
        ];
        this.carruselData = [
            {
                h1: 'Colegio 86253 - Celso Garro Valderrama, ',
                h1Parrafo: '"ESTUDIO PARA TRASCENDER"',
                h4: 'La mejor educacion en nuestras manos',
                span: 'Mirar Ahora',
                src: 'https://www.youtube.com/embed/1Z7Jx3g9u58',
                urlImage: 'assets/images/colegio/portada1xx.jfif',
                iframe: 'https://www.youtube.com/embed/1Z7Jx3g9u58',
                link: '',
            },
            {
                h1: 'Celso Garro Valderrama, la mejor elección para su educación',
                h1Parrafo: '',
                h4: '',
                span: '',
                src: '',
                urlImage: 'assets/images/colegio/portada1xx.jfif',
                iframe: '',
                link: 'Nosotros',
            },
            {
                h1: 'Bienvenidos, Colegio 86253  ',
                h1Parrafo: '"ESTUDIO PARA TRASCENDER"',
                h4: 'Reserva tu vacante.',
                span: '',
                src: '',
                urlImage: 'assets/images/colegio/portada1xx.jfif',
                iframe: '',
                link: '',
            }
        ];
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            autoplay: true,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                900: {
                    items: 1
                }
            },
            nav: false
        };
        this.swiperOptions = {
            a11y: { enabled: true },
            direction: 'horizontal',
            slidesPerView: 1,
            keyboard: true,
            navigation: true,
            pagination: false
        };
        //Member Data
        this.memberData = [
            {
                profile: "assets/images/client/01.jpg",
                list: ['facebook', "instagram", "twitter", "linkedin"],
                name: "Ronny Jofra",
                designation: "C.E.O"
            },
            {
                profile: "assets/images/client/04.jpg",
                list: ["facebook", "instagram", "twitter", "linkedin"],
                name: "Micheal Carlo",
                designation: "Director"
            },
            {
                profile: "assets/images/client/02.jpg",
                list: ["facebook", "instagram", "twitter", "linkedin"],
                name: "Aliana Rosy",
                designation: "Manager"
            },
            {
                profile: "assets/images/client/03.jpg",
                list: ["facebook", "instagram", "twitter", "linkedin"],
                name: "Sofia Razaq",
                designation: "Developer"
            }
        ];
        this.habitacionVacia = {
            id: 0,
            imagen1: '',
            imagen2: '',
            imagen3: '',
            imagen4: '',
            imagen5: '',
            nombrehabitacion: '',
            numerodebanios: 0,
            numerodecamas: 0,
            numerodepersonas: 0,
            numerohabitacion: 0,
            preciohabitacion: 0,
            tipohabitacion: {
                id: 0,
                nombretipo: 'todo'
            },
            servicios: [{
                    id: 0,
                    nombreservicio: ''
                }]
        };
        this.prereserva = {
            fechaInicio: '',
            fechaFin: '',
        };
        this.contactenos = {
            nombre: '',
            email: '',
            comentarios: '',
        };
    }
}
InicioService.ɵfac = function InicioService_Factory(t) { return new (t || InicioService)(); };
InicioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InicioService, factory: InicioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60801:
/*!***********************************************************!*\
  !*** ./src/app/shared/calendario/calendario.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarioComponent": function() { return /* binding */ CalendarioComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_detalle_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/detalle.service */ 84160);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/angular */ 52955);





class CalendarioComponent {
    constructor(fb, detalleService) {
        this.fb = fb;
        this.detalleService = detalleService;
        this.dataId = 0;
        this.obtenerDatosReserva = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.habitaciones = [];
        this.defaultDate = ["2021-11-25", "2021-11-29"];
        this.reservas = [];
        this.checkDisponibilidadFormSubmitted = false;
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            weekends: true,
            events: this.reservas,
            droppable: true,
            visibleRange: {
                start: '2021-11-24',
                end: '2021-11-25',
            }
        };
    }
    ngOnInit() {
        this.detalleService.getReservasHabitacion(this.dataId)
            .subscribe((data) => {
            this.reservas = [];
            data['fechas'].forEach((e) => {
                console.log(data);
                var hab = {
                    title: 'Reservado',
                    start: this.cambiarFormatoFecha1(e.check_in),
                    end: this.cambiarFormatoFecha2(e.check_out),
                    backgroundColor: '#FD8B02',
                    borderColor: '#52F012',
                    allDay: true,
                };
                this.reservas.push(hab);
            });
            console.log(this.reservas);
            this.calendarOptions.events = this.reservas;
        });
    }
    cambiarFormatoFecha1(fecha) {
        return `${fecha.substring(0, 4)}-${fecha.substring(5, 7)}-${fecha.substring(8, 10)}`;
    }
    cambiarFormatoFecha2(fecha) {
        var dia = ((Number(fecha.substring(8, 10)) < 10 ? '0' + (Number(fecha.substring(8, 10)) + 1) : (Number(fecha.substring(8, 10)) + 1)));
        return `${fecha.substring(0, 4)}-${fecha.substring(5, 7)}-${dia}`;
    }
    handleDateClick(arg) {
        alert('date click! ' + arg.dateStr);
    }
    buscarDisponibilidad() {
    }
}
CalendarioComponent.ɵfac = function CalendarioComponent_Factory(t) { return new (t || CalendarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_detalle_service__WEBPACK_IMPORTED_MODULE_0__.DetalleService)); };
CalendarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CalendarioComponent, selectors: [["app-calendario"]], inputs: { dataId: "dataId" }, outputs: { obtenerDatosReserva: "obtenerDatosReserva" }, decls: 2, vars: 1, consts: [[1, "col-lg-12"], [3, "options"]], template: function CalendarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "full-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.calendarOptions);
    } }, directives: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__.FullCalendarComponent], encapsulation: 2 });


/***/ }),

/***/ 49965:
/*!*********************************************************!*\
  !*** ./src/app/shared/cartillas/cartillas.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartillasComponent": function() { return /* binding */ CartillasComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 35411);




function CartillasComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartillasComponent_div_13_Template_a_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.open(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i-feather", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.category);
} }
class CartillasComponent {
    constructor(_lightbox) {
        this._lightbox = _lightbox;
        this._album = [];
        for (let i = 1; i <= 6; i++) {
            const src = '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-' + (i + 6) + '.jpeg';
            const caption = '';
            const thumb = '../../../assets/images/colegio/foto-colegio' + i + '-thumb.jpg';
            const album = {
                src: src,
                caption: caption,
                thumb: thumb
            };
            this._album.push(album);
        }
    }
    open(index) {
        this._lightbox.open(this._album, index);
    }
    close() {
        this._lightbox.close();
    }
    ngOnInit() {
    }
}
CartillasComponent.ɵfac = function CartillasComponent_Factory(t) { return new (t || CartillasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.Lightbox)); };
CartillasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartillasComponent, selectors: [["app-cartillas"]], inputs: { cartillaData: "cartillaData" }, decls: 14, vars: 1, consts: [[1, "section", "pt-5", "pt-sm-0", "pt-md-4", "bg-light"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [2, "font-size", "x-large", "color", "blue"], [1, "text-primary", "fw-bold"], [1, "row"], ["class", "col-lg-4 col-md-6 col-12 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "col-12", "mt-4", "pt-2"], [1, "card", "border-0", "work-container", "work-modern", "position-relative", "d-block", "overflow-hidden", "rounded"], [1, "card-body", "p-0"], ["alt", "work-image", 1, "img-fluid", 3, "src"], [1, "overlay-work", "bg-dark"], [1, "content"], [1, "mb-0"], [1, "text-white", "title"], [1, "text-light", "tag", "mb-0"], [1, "icons", "text-center"], [1, "text-primary", "work-icon", "bg-white", "d-inline-block", "rounded-pill", "mfp-image", 3, "click"], ["name", "camera", 1, "fea", "icon-sm"]], template: function CartillasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Educaci\u00F3n que nos diferencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "En ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Celso Garro Valderrama");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " nos encargamos de educaci\u00F3n de sus hijos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CartillasComponent_div_13_Template, 14, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cartillaData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent], encapsulation: 2 });


/***/ }),

/***/ 45227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 35411);



function FooterComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i-feather", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i-feather", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i-feather", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i-feather", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Celso Garro Valderrama");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ofrece al publico en general nuestras redes sociales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i-feather", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i-feather", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i-feather", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i-feather", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Nosotros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Gestion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Noticias ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Aliados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Innovacion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Normatividades ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\"Estudio para trascender\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_0_div_1_Template, 21, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_div_0_ng_template_2_Template, 51, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.footerVariant == "bg-light")("ngIfElse", _r2);
} }
class FooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { footerVariant: "footerVariant", hideFooter: "hideFooter" }, decls: 11, vars: 2, consts: [[4, "ngIf"], [1, "footer", "footer-bar"], [1, "container", "text-center"], [1, "row", "align-items-center"], [1, "col-sm-6"], [1, "text-sm-start"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], [4, "ngIf", "ngIfElse"], ["execute_block", ""], [1, "footer", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-12", "mb-0", "mb-md-4", "pb-0", "pb-md-2"], ["href", "#", 1, "logo-footer"], [1, "mt-4", "text-muted"], [1, "list-unstyled", "social-icon", "social", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], [1, "list-inline-item", "ms-1"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], [1, "footer"], [1, "col-lg-6", "col-12", "mb-0", "mb-md-4", "pb-0", "pb-md-2"], [1, "mt-4"], [1, "text-primary", "fw-bold"], [1, "list-unstyled", "social-icon", "foot-social-icon", "mb-0", "mt-4"], ["href", "https://www.facebook.com/", "target", "_blank", 1, "rounded"], ["href", "https://www.instagram.com/", "target", "_blank", 1, "rounded"], [1, "col-lg-3", "col-md-4", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "list-unstyled", "footer-list", "mt-6"], ["href", "/nosotros", 1, "text-foot"], [1, "uil", "uil-angle-right-b", "me-1"], ["href", "/gestion", 1, "text-foot"], ["href", "/noticias", 1, "text-foot"], ["href", "/aliados", 1, "text-foot"], ["href", "/innovacion", 1, "text-foot"], ["href", "/normatividades", 1, "text-foot"], [1, "col-lg-3", "col-md-4", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0", 2, "text-align", "end"], ["src", "../../../assets/images/mundo/logoSinFondo.png", "alt", "", 1, "col-lg-8", "col-md-12", "col-6", 2, "margin-top", "0px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " por Wolfrit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year, " Dise\u00F1ado con ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent], encapsulation: 2 });


/***/ }),

/***/ 89470:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);






function HeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_span_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Intranet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#bookroom");
} }
function HeaderComponent_span_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Intranet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#bookroom");
} }
function HeaderComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_span_6_ng_template_2_Template, 2, 1, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_span_6_ng_template_3_Template, 2, 1, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.navClass === "nav-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.navClass !== "nav-light");
} }
const _c0 = function (a0) { return { "tagline-height": a0 }; };
class HeaderComponent {
    constructor(router, modalService) {
        this.router = router;
        this.modalService = modalService;
        this.isCondensed = false;
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                this._activateMenuDropdown();
            }
        });
    }
    ngAfterViewInit() {
        this._activateMenuDropdown();
    }
    ngOnInit() {
    }
    _activateMenuDropdown() {
        const resetParent = (el) => {
            el.classList.remove("active");
            const parent = el.parentElement;
            if (parent) {
                parent.classList.remove("active");
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.remove("active");
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.remove("active");
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            const parent5 = parent4.parentElement;
                            parent5.classList.remove("active");
                            if (parent5) {
                                const parent6 = parent5.parentElement;
                                parent6.classList.remove("active");
                                if (parent6) {
                                    const parent7 = parent6.parentElement;
                                    parent7.classList.remove("active");
                                }
                            }
                        }
                    }
                }
            }
        };
        let links = document.getElementsByClassName("nav-link-ref");
        console.log(links);
        let matchingMenuItem = null;
        for (let i = 0; i < links.length; i++) {
            resetParent(links[i]);
        }
        for (let i = 0; i < links.length; i++) {
            console.log('**********');
            console.log(links[i]);
            console.log('//**********');
            if (window.location.pathname === links[i]["pathname"]) {
                matchingMenuItem = links[i];
                break;
            }
        }
        if (matchingMenuItem) {
            matchingMenuItem.classList.add("active");
            const parent = matchingMenuItem.parentElement;
            if (parent) {
                parent.classList.add("active");
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.add("active");
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.add("active");
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            const parent5 = parent4.parentElement;
                            parent5.classList.add("active");
                            if (parent5) {
                                const parent6 = parent5.parentElement;
                                parent6.classList.add("active");
                                if (parent6) {
                                    const parent7 = parent6.parentElement;
                                    parent7.classList.add("active");
                                    document.getElementById("navigation").style.display = "none";
                                    this.isCondensed = false;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    windowScroll() {
        if (document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50) {
            document.getElementById("topnav").classList.add("nav-sticky");
        }
        else {
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
        if (document.getElementById("back-to-top")) {
            if (document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100) {
                document.getElementById("back-to-top").style.display = "inline";
            }
            else {
                document.getElementById("back-to-top").style.display = "none";
            }
        }
    }
    toggleMenu() {
        this.isCondensed = !this.isCondensed;
        if (this.isCondensed) {
            document.getElementById("navigation").style.display = "block";
        }
        else {
            document.getElementById("navigation").style.display = "none";
        }
    }
    onMenuClick(event) {
        event.preventDefault();
        const nextEl = event.target.nextSibling.nextSibling;
        if (nextEl && !nextEl.classList.contains("open")) {
            const parentEl = event.target.parentNode;
            if (parentEl) {
                parentEl.classList.remove("open");
            }
            nextEl.classList.add("open");
        }
        else if (nextEl) {
            nextEl.classList.remove("open");
        }
        return false;
    }
    developerModal(content) {
        this.modalService.open(content, { size: 'lg', centered: true });
    }
    wishListModal(content) {
        this.modalService.open(content, { centered: true });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { navClass: "navClass", buttonList: "buttonList", sliderTopbar: "sliderTopbar", isdeveloper: "isdeveloper", shopPages: "shopPages" }, decls: 30, vars: 11, consts: [["id", "topnav", 1, "defaultscroll", "sticky", 3, "ngClass", "scroll"], [1, "container", 2, "margin-top", "5px"], ["class", "logo", 4, "ngIf"], ["class", "buy-button list-inline mb-0", 4, "ngIf"], ["class", "logo", "routerLink", "", 4, "ngIf"], [4, "ngIf"], ["id", "navigation"], [1, "navigation-menu"], ["href", "/inicio", 1, "nav-link-ref", 2, "font-family", "'Lucida Sans', cursive"], ["href", "/nosotros", 1, "nav-link-ref", 2, "font-family", "'Lucida Sans', cursive"], ["href", "/gestion", 1, "nav-link-ref", 2, "font-family", "'Lucida Sans', cursive"], ["href", "/noticias", 1, "nav-link-ref", 2, "font-family", "'Lucida Sans', cursive"], ["href", "/aliados", 1, "nav-link-ref", 2, "font-family", "'Lucida Sans', cursive"], ["href", "/innovacion", 1, "nav-link-ref", 2, "font-family", "'Lucida Sans', cursive"], ["href", "/normatividades", 1, "nav-link-ref", 2, "font-family", "'Lucida Sans', cursive"], [1, "logo"], ["src", "assets/images/colegio/logo-colegio-celso.jpg", "height", "55", "alt", "", 1, "l-dark", "logo-light-mode", 2, "margin-right", "-90px", "margin-left", "-90px", "margin-top", "8px", "margin-bottom", "8px"], ["src", "assets/images/colegio/logo-colegio-celso.jpg", "height", "55", "alt", "", 1, "logo-dark-mode"], [1, "buy-button", "list-inline", "mb-0"], [1, "list-inline-item", "mb-0", "ms-1"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-primary"], [1, "uil", "uil-facebook-f", "icons"], [1, "uil", "uil-github", "icons"], [1, "uil", "uil-twitter", "icons"], [1, "uil", "uil-linkedin-alt", "icons"], ["routerLink", "", 1, "logo"], ["src", "assets/images/logo/logo-dark-bvm.jpg", "height", "55", "alt", "", 1, "l-dark", 2, "margin-right", "-90px", "margin-left", "-90px", "margin-top", "8px", "margin-bottom", "8px"], [1, "buy-button"], [3, "ngIf"], ["routerLink", "/", 1, "btn", "personalizado", "login-btn-primary", 3, "ngxScrollTo"], [1, "btn", "personalizado", 3, "ngxScrollTo"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_header_scroll_0_listener() { return ctx.windowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_a_3_Template, 3, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_ul_4_Template, 13, 0, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_a_5_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_span_6_Template, 4, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Gesti\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Noticias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Aliados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Innovacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Normatividades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.navClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.sliderTopbar == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navClass !== "nav-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonList == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navClass === "nav-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.buttonList && !ctx.isdeveloper && !ctx.shopPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.navClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective], styles: [".personalizado[_ngcontent-%COMP%] {\r\n    background-color: rgb(151, 240, 247);\r\n}\r\n\r\n.activo[_ngcontent-%COMP%] {\r\n    background-color: rgb(1, 252, 168);\r\n    color: #120991\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDO0VBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVyc29uYWxpemFkbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAyNDAsIDI0Nyk7XHJcbn1cclxuXHJcbi5hY3Rpdm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDI1MiwgMTY4KTtcclxuICAgIGNvbG9yOiAjMTIwOTkxXHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 24883:
/*!*********************************************************************!*\
  !*** ./src/app/shared/reserva-detalle/reserva-detalle.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservaDetalleComponent": function() { return /* binding */ ReservaDetalleComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_services_inicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/inicio.service */ 18911);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-flatpickr */ 42160);












function ReservaDetalleComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReservaDetalleComponent_div_15_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.reservar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Reservar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const url_base_backend = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url_base_backend;
const url_root_backend = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url_root_backend;
const url_root_frontend = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url_root_frontend;
class ReservaDetalleComponent {
    constructor(fb, http, inicioService, miDatePipe, router) {
        this.fb = fb;
        this.http = http;
        this.inicioService = inicioService;
        this.miDatePipe = miDatePipe;
        this.router = router;
        this.prereserva = this.inicioService.prereserva;
        this.obtenerDatosReserva = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.habilitarBtnReserva = false;
        this.defaultDate = ["2021-11-25", "2021-11-29"];
        this.checkDisponibilidadFormSubmitted = false;
        this.checkDisponibilidadForm = this.fb.group({
            picker: [[this.prereserva.fechaInicio, this.prereserva.fechaFin], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        this.showMensajeError = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.prereserva = this.inicioService.prereserva;
    }
    cambiarFormatoFecha(fecha) {
        return `${(new Date(fecha)).getUTCFullYear()}/${(new Date(fecha)).getMonth() + 1}/${((new Date(fecha)).getDate() + 1 < 10 ? '0' + ((new Date(fecha)).getDate() + 1) : (new Date(fecha).getDate()) + 1)}`;
    }
    alertaCompleteReserva() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Seleccione su dia de salida',
            text: 'Hotel Mancora a su servicio',
            icon: 'warning',
            confirmButtonText: 'ok'
        });
    }
    alertaHabitacionNoDisponible() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Habitacion no disponible para esta fecha. Precios por temporada.',
            text: 'Por favor revise la disponibilidad en el calendario, para reservar fuera de temporada comunicarse por whatsapp al (+51) 951 298 174.',
            icon: 'warning',
            confirmButtonText: 'ok'
        });
    }
    changeFecha(event) {
        this.habilitarBtnReserva = false;
    }
    buscarDisponibilidadHabitacion() {
        this.habilitarBtnReserva = false;
        if (this.checkDisponibilidadForm.invalid ||
            this.checkDisponibilidadForm.value.picker[0] === '' ||
            this.checkDisponibilidadForm.value.picker === '') {
            this.showMensajeError = true;
            return;
        }
        let fechaInicio = '', fechaFinal = '';
        if (typeof this.checkDisponibilidadForm.value.picker === 'string') {
            fechaInicio = this.checkDisponibilidadForm.value.picker.split(' ');
            if (fechaInicio[2] == undefined) {
                this.alertaCompleteReserva();
                return;
            }
            fechaFinal = fechaInicio[2];
            fechaInicio = fechaInicio[0];
            fechaInicio = this.miDatePipe.transform(fechaInicio, 'yyyy/MM/dd');
            fechaFinal = this.miDatePipe.transform(fechaFinal, 'yyyy/MM/dd');
        }
        else {
            fechaInicio = this.miDatePipe.transform(this.checkDisponibilidadForm.value.picker[0], 'yyyy/MM/dd');
            fechaFinal = this.miDatePipe.transform(this.checkDisponibilidadForm.value.picker[1], 'yyyy/MM/dd');
        }
        this.busquedaDisponibilidad = {
            picker: this.checkDisponibilidadForm.value.picker,
            fechaInicio: fechaInicio,
            fechaFin: fechaFinal,
            id: this.habitacion.id,
            numerodepersonas: this.habitacion.numerodepersonas,
            preciohabitacion: this.habitacion.preciohabitacion,
            ImgUrl: `${url_root_frontend}/${this.habitacion.imagen1}`
        };
        this.http.post(`${url_base_backend}/habitaciones-libres/`, this.busquedaDisponibilidad)
            .subscribe((resp) => {
            this.habitaciones = resp;
            if (this.habitaciones.length > 0) {
                this.habilitarBtnReserva = true;
            }
            else {
                this.habilitarBtnReserva = false;
                this.alertaHabitacionNoDisponible();
            }
        }, (error) => {
            console.log(error);
        });
    }
    reservar() {
        this.http.post(`${url_root_backend}/reservas-mancora/reservar/`, this.busquedaDisponibilidad)
            .subscribe((reservaFinal) => {
            if (reservaFinal.ok) {
                window.location.href = `${url_root_backend}/reservas-mancora/detalle_reserva/${reservaFinal.linkSeguro}`;
            }
            else {
                this.busquedaDisponibilidad = {};
            }
        });
    }
}
ReservaDetalleComponent.ɵfac = function ReservaDetalleComponent_Factory(t) { return new (t || ReservaDetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_inicio_service__WEBPACK_IMPORTED_MODULE_2__.InicioService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
ReservaDetalleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReservaDetalleComponent, selectors: [["app-reserva-detalle"]], inputs: { habitacion: "habitacion", prereserva: "prereserva", picker: "picker" }, outputs: { obtenerDatosReserva: "obtenerDatosReserva" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe])], decls: 16, vars: 2, consts: [[1, "col-lg-12"], ["autocomplete", "off", 1, "p-4", "shadow", "bg-white", "rounded", 3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "row", "text-start"], ["ngClass", "col-lg-12 col-md-12"], [1, "mb-6", "mb-lg-0"], [1, "form-label", 2, "font-size", "large"], ["type", "text", "formControlName", "picker", "id", "checkin", "placeholder", "Fecha de Ingreso - Fecha de salida :", "mwlFlatpickr", "", "mode", "range", "minDate", "today", 1, "form-control", 2, "text-align", "center", 3, "ngModelChange"], ["ngClass", "col-md-12"], [1, "row", "align-items-center"], ["ngClass", "col-md-12 mt-lg-4 pt-2 pt-lg-1"], [1, "d-grid"], ["type", "submit", "id", "search", "name", "search", "value", "Buscar", 1, "searchbtn", "btn", "btn-blue", 2, "font-size", "large"], ["class", "col-md-12 mt-lg-4 pt-2 pt-lg-1", 4, "ngIf"], [1, "col-md-12", "mt-lg-4", "pt-2", "pt-lg-1"], [1, "searchbtn", "btn", "btn-primary", 3, "click"]], template: function ReservaDetalleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ReservaDetalleComponent_Template_form_ngSubmit_1_listener() { return ctx.buscarDisponibilidadHabitacion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Prepare su reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Check in - Check out : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReservaDetalleComponent_Template_input_ngModelChange_9_listener($event) { return ctx.changeFecha($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ReservaDetalleComponent_div_15_Template, 4, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.checkDisponibilidadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.habilitarBtnReserva);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 64582:
/*!*******************************************************************!*\
  !*** ./src/app/shared/reserva-inicio/reserva-inicio.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservaInicioComponent": function() { return /* binding */ ReservaInicioComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_services_inicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/inicio.service */ 18911);







const url_base_backend = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url_base_backend;
class ReservaInicioComponent {
    constructor(fb, http, inicioService) {
        this.fb = fb;
        this.http = http;
        this.inicioService = inicioService;
        this.obtenerDatosReserva = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.prereserva = this.inicioService.prereserva;
        this.habitaciones = [];
        this.checkDisponibilidadFormSubmitted = false;
        this.checkDisponibilidadForm = this.fb.group({
            picker: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            numAdultos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(15)]],
            numNinios: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(15)]],
        });
    }
    ngOnInit() {
    }
    campoNoValido(campo) {
        var _a;
        if (((_a = this.checkDisponibilidadForm.get(campo)) === null || _a === void 0 ? void 0 : _a.invalid) && this.checkDisponibilidadFormSubmitted) {
            return true;
        }
        else {
            return false;
        }
    }
    cambiarFormatoFecha(fecha) {
        return `${(new Date(fecha)).getUTCFullYear()}-${(new Date(fecha)).getMonth() + 1}-${(new Date(fecha)).getDate()}`;
    }
    buscarDisponibilidad() {
        this.checkDisponibilidadFormSubmitted = true;
        if (!this.checkDisponibilidadForm.value.numNinios) {
            this.checkDisponibilidadForm.value.numNinios = 0;
        }
        if (this.checkDisponibilidadForm.invalid) {
            return;
        }
        if (this.checkDisponibilidadForm.value.picker.to === undefined) {
            this.checkDisponibilidadForm.value.picker.to = this.checkDisponibilidadForm.value.picker.from;
        }
        const busquedaDisponibilidad = {
            picker: this.checkDisponibilidadForm.value.picker,
            fechaInicio: this.checkDisponibilidadForm.value.picker.from,
            fechaFin: this.checkDisponibilidadForm.value.picker.to,
            adultos: this.checkDisponibilidadForm.value.numAdultos,
            ninios: this.checkDisponibilidadForm.value.numNinios,
        };
        this.prereserva.fechaInicio = this.cambiarFormatoFecha(this.checkDisponibilidadForm.value.picker.from);
        this.prereserva.fechaFin = this.cambiarFormatoFecha(this.checkDisponibilidadForm.value.picker.to);
        this.http.post(`${url_base_backend}/buscarhabitaciones`, busquedaDisponibilidad)
            .subscribe((habitaciones) => {
            this.obtenerDatosReserva.emit({
                prereserva: this.prereserva,
                habitaciones: habitaciones
            });
        }, (error) => {
            console.log(error);
        });
    }
}
ReservaInicioComponent.ɵfac = function ReservaInicioComponent_Factory(t) { return new (t || ReservaInicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_inicio_service__WEBPACK_IMPORTED_MODULE_1__.InicioService)); };
ReservaInicioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReservaInicioComponent, selectors: [["app-reserva-inicio"]], outputs: { obtenerDatosReserva: "obtenerDatosReserva" }, decls: 1, vars: 0, consts: [[1, "col-lg-12"]], template: function ReservaInicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 82819:
/*!**********************************************************!*\
  !*** ./src/app/shared/room-cards/room-card.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomCardComponent": function() { return /* binding */ RoomCardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 35411);




function RoomCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomCardComponent_div_1_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const data_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.enviar(data_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Desde: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " x Noche");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i-feather", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.nombrehabitacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.numerodecamas == 1 ? data_r1.numerodecamas + " Cama " : data_r1.numerodecamas + " Camas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.numerodebanios == 1 ? data_r1.numerodebanios + " Ba\u00F1o" : data_r1.numerodebanios + " Ba\u00F1os");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("S/. ", data_r1.preciohabitacion, "");
} }
class RoomCardComponent {
    constructor() {
        this.roomCardEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    enviar(valor) {
        this.roomCardEvent.emit(valor);
    }
    ngOnInit() {
    }
}
RoomCardComponent.ɵfac = function RoomCardComponent_Factory(t) { return new (t || RoomCardComponent)(); };
RoomCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomCardComponent, selectors: [["app-room-card"]], inputs: { roomCardData: "roomCardData" }, outputs: { roomCardEvent: "roomCardEvent" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-lg-4 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "card", "work-container", "work-modern", "rounded", "border-0", "overflow-hidden"], [1, "card-body", "p-0", 3, "click"], ["alt", "work-image", 1, "img-fluid", "rounded", 3, "src"], [1, "overlay-work", "bg-dark"], [1, "content"], [1, "title", "text-white", "pb-2", "border-bottom", 2, "font-size", "x-large"], [1, "post-meta", "mb-0", "mt-2", "text-white", "list-unstyled"], [1, "list-inline-item", "me-3", 2, "font-size", "x-large"], [1, "uil", "uil-bed-double", "me-2"], [1, "list-inline-item", 2, "font-size", "x-large"], [1, "uil", "uil-bath", "me-2"], [1, "text-white", "d-block", "mb-0", 2, "font-size", "x-large"], [1, "text-success"], [1, "read_more", "bg-primary", "text-center", "rounded-circle"], ["href", "javascript:void(0)", 1, "text-light", "d-block"], ["name", "chevron-right", 1, "fea", "icon-sm", "title-dark"]], template: function RoomCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomCardComponent_div_1_Template, 23, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roomCardData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent], encapsulation: 2 });


/***/ }),

/***/ 92585:
/*!*********************************************************!*\
  !*** ./src/app/shared/room-list/room-list.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomListComponent": function() { return /* binding */ RoomListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var src_app_services_inicio_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/inicio.service */ 18911);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 35411);







function RoomListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomListComponent_div_9_Template_div_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.enviar(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Desde: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "x Noche");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomListComponent_div_9_Template_a_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.enviar(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Reservar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r1.imagen1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.nombrehabitacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("N\u00FAmero de habitacion: ", item_r1.numerohabitacion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("N\u00FAmero de personas: ", item_r1.numerodepersonas, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("S/. ", item_r1.preciohabitacion, "");
} }
;
class RoomListComponent {
    constructor(modalService, inicioService) {
        this.modalService = modalService;
        this.inicioService = inicioService;
        this.roomListDataValor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.memberData = this.inicioService.memberData;
    }
    enviar(valor) {
        this.roomListDataValor.emit(valor);
    }
    openWindowCustomClass(content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
    }
}
RoomListComponent.ɵfac = function RoomListComponent_Factory(t) { return new (t || RoomListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_inicio_service__WEBPACK_IMPORTED_MODULE_0__.InicioService)); };
RoomListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoomListComponent, selectors: [["app-room-list"]], inputs: { roomListData: "roomListData", totalCoincidencias: "totalCoincidencias" }, outputs: { roomListDataValor: "roomListDataValor" }, decls: 12, vars: 4, consts: [[1, "container"], [1, "row"], [1, "section"], ["class", "row align-items-center shadow bg-white rounded", "style", "margin-top: 20px; padding: 15px;", 4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "row", "align-items-center", "shadow", "bg-white", "rounded", 2, "margin-top", "20px", "padding", "15px"], [1, "col-lg-3", "col-md-3", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "card", "work-container", "work-modern", "rounded", "border-0", "overflow-hidden"], [1, "position-relative", 3, "click"], ["alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block", 3, "src"], [1, "col-lg-7", "col-md-7", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "section-title", "ms-lg-4"], [1, "title", "mb-4"], [1, "text-muted"], [1, "text-success", 2, "color", "blue"], [1, "col-lg-2", "col-md-7", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "btn", "btn-primary", "mt-3", 3, "click"], [1, "uil", "uil-angle-right-b"]], template: function RoomListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Se encontr\u00F3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RoomListComponent_div_9_Template, 24, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i-feather", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalCoincidencias);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" coincidencia", ctx.totalCoincidencias == 1 ? "" : "s", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roomListData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "#home");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent], encapsulation: 2 });


/***/ }),

/***/ 42474:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/services.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": function() { return /* binding */ ServicesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);


function ServicesComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](data_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description);
} }
class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], inputs: { servicesData: "servicesData" }, decls: 14, vars: 1, consts: [[1, "section"], [1, "container", "pb-lg-4", "mb-md-5", "mb-4"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [2, "font-size", "x-large", "color", "blue"], [1, "text-primary", "fw-bold"], [1, "row"], ["class", "col-md-4 col-12 mt-5", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-12", "mt-5"], [1, "features", "features", "text-center"], [1, "image", "position-relative", "d-inline-block"], [1, "content", "mt-4"], [1, "text-muted", "mb-0"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Valores en la escuela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nuestros valores en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Celso Garro Valderrama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ServicesComponent_div_13_Template, 9, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicesData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-feather */ 35411);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fullcalendar/angular */ 52955);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/daygrid */ 93520);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/interaction */ 9549);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/services.component */ 42474);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 89470);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 45227);
/* harmony import */ var _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switcher/switcher.component */ 22157);
/* harmony import */ var _room_cards_room_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room-cards/room-card.component */ 82819);
/* harmony import */ var _cartillas_cartillas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cartillas/cartillas.component */ 49965);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _reserva_inicio_reserva_inicio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reserva-inicio/reserva-inicio.component */ 64582);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularx-flatpickr */ 42160);
/* harmony import */ var _room_list_room_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./room-list/room-list.component */ 92585);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 48994);
/* harmony import */ var _reserva_detalle_reserva_detalle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reserva-detalle/reserva-detalle.component */ 24883);
/* harmony import */ var _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendario/calendario.component */ 60801);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);























_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_12__.FullCalendarModule.registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__.default,
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__.default
]);
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselModule,
            angular_feather__WEBPACK_IMPORTED_MODULE_16__.FeatherModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_20__.FlatpickrModule,
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_21__.ScrollToModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_12__.FullCalendarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_services_services_component__WEBPACK_IMPORTED_MODULE_2__.ServicesComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_5__.SwitcherComponent,
        _room_cards_room_card_component__WEBPACK_IMPORTED_MODULE_6__.RoomCardComponent,
        _cartillas_cartillas_component__WEBPACK_IMPORTED_MODULE_7__.CartillasComponent,
        _reserva_inicio_reserva_inicio_component__WEBPACK_IMPORTED_MODULE_8__.ReservaInicioComponent,
        _room_list_room_list_component__WEBPACK_IMPORTED_MODULE_9__.RoomListComponent,
        _reserva_detalle_reserva_detalle_component__WEBPACK_IMPORTED_MODULE_10__.ReservaDetalleComponent,
        _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_11__.CalendarioComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselModule,
        angular_feather__WEBPACK_IMPORTED_MODULE_16__.FeatherModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        angularx_flatpickr__WEBPACK_IMPORTED_MODULE_20__.FlatpickrModule,
        _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_21__.ScrollToModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_12__.FullCalendarModule], exports: [_services_services_component__WEBPACK_IMPORTED_MODULE_2__.ServicesComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _switcher_switcher_component__WEBPACK_IMPORTED_MODULE_5__.SwitcherComponent,
        _room_cards_room_card_component__WEBPACK_IMPORTED_MODULE_6__.RoomCardComponent,
        _cartillas_cartillas_component__WEBPACK_IMPORTED_MODULE_7__.CartillasComponent,
        _reserva_inicio_reserva_inicio_component__WEBPACK_IMPORTED_MODULE_8__.ReservaInicioComponent,
        _room_list_room_list_component__WEBPACK_IMPORTED_MODULE_9__.RoomListComponent,
        _reserva_detalle_reserva_detalle_component__WEBPACK_IMPORTED_MODULE_10__.ReservaDetalleComponent,
        _calendario_calendario_component__WEBPACK_IMPORTED_MODULE_11__.CalendarioComponent] }); })();


/***/ }),

/***/ 22157:
/*!*******************************************************!*\
  !*** ./src/app/shared/switcher/switcher.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitcherComponent": function() { return /* binding */ SwitcherComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class SwitcherComponent {
    constructor() { }
    ngOnInit() {
        this.isVisible = false;
    }
    onChangeColor(color) {
        document
            .getElementById('color-opt')
            .setAttribute('href', './assets/css/colors/' + color + '.css');
    }
    setDark() {
        window.location.href = 'http://en.buenavistamancora.com/';
    }
    setLight() {
        document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
    }
    darkRtl() {
        document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark-rtl.min.css');
    }
    darkLtr() {
        document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
    }
    setRtl() {
        window.location.href = 'http://www.buenavistamancora.com/';
    }
    setLtr() {
        document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
    }
    onChangeSwitch() {
        this.isVisible = !this.isVisible;
    }
}
SwitcherComponent.ɵfac = function SwitcherComponent_Factory(t) { return new (t || SwitcherComponent)(); };
SwitcherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwitcherComponent, selectors: [["app-switcher"]], decls: 35, vars: 2, consts: [["id", "style-switcher", 1, "bg-light", "border", "p-3", "pt-2", "pb-2", 2, "left", "0px"], [1, "title", "text-center"], [1, "pattern"], [1, "list-inline-item"], ["href", "javascript: void(0);", 1, "color1", 3, "click"], ["href", "javascript: void(0);", 1, "color2", 3, "click"], ["href", "javascript: void(0);", 1, "color3", 3, "click"], ["href", "javascript: void(0);", 1, "color4", 3, "click"], ["href", "javascript: void(0);", 1, "color5", 3, "click"], ["href", "javascript: void(0);", 1, "color6", 3, "click"], ["href", "javascript: void(0);", 1, "color7", 3, "click"], ["href", "javascript: void(0);", 1, "color8", 3, "click"], ["href", "javascript: void(0);", 1, "color9", 3, "click"], [1, "title", "text-center", "pt-3", "mb-0", "border-top"], [1, "text-center", "list-unstyled", "mb-0"], [1, "d-grid"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-primary", "rtl-version", "t-rtl-light", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-dark", "dark-version", "t-dark", "mt-2", 3, "click"], [1, "bottom"], ["href", "javascript: void(0);", 1, "settings", "bg-white", "title-bg-dark", "shadow", "d-block", 3, "click"], [1, "mdi", "mdi-cog", "ms-1", "mdi-24px", "position-absolute", "mdi-spin", "text-primary"]], template: function SwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select Your Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_6_listener() { return ctx.onChangeColor("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_8_listener() { return ctx.onChangeColor("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_10_listener() { return ctx.onChangeColor("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_12_listener() { return ctx.onChangeColor("red"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_14_listener() { return ctx.onChangeColor("skyblue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_16_listener() { return ctx.onChangeColor("skobleoff"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_18_listener() { return ctx.onChangeColor("cyan"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_20_listener() { return ctx.onChangeColor("slateblue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_22_listener() { return ctx.onChangeColor("default"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Theme Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_27_listener() { return ctx.setRtl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Espa\u00F1ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_30_listener() { return ctx.setDark(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_33_listener() { return ctx.onChangeSwitch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.isVisible ? "left: 0px" : "left: -189px");
    } }, encapsulation: 2 });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
const environment = {
    production: false,
    url_base_backend: '//reserva.buenavistamancora.com/api',
    url_root_backend: '//reserva.buenavistamancora.com',
    url_root_frontend: '//www.buenavistamancora.com',
    url_pago: 'http://localhost:9100',
    key_acceso_backend: 'Rdt6uToQ.10xQDsISuxkIHMGvs4ZOFRt18Is8GEta'
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map