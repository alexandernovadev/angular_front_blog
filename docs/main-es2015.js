(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+1dx":
/*!***************************************************************!*\
  !*** ./src/app/components/categorias/categorias.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function() { return CategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categorias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categorias.component.html */ "j6lq");
/* harmony import */ var _categorias_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorias.component.css */ "b0ZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CategoriasComponent = class CategoriasComponent {
    constructor() {
        this.page_title = 'Categorias';
    }
    ngOnInit() {
    }
};
CategoriasComponent.ctorParameters = () => [];
CategoriasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categorias',
        template: _raw_loader_categorias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categorias_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CategoriasComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alex/Documentos/threemillion/deploy/blog-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "0weG":
/*!************************************************************!*\
  !*** ./src/app/components/post-new/post-new.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LW5ldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "0z2C":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "24cc":
/*!*************************************************************!*\
  !*** ./src/app/components/user-edit/user-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-edit.component.html */ "5NoG");
/* harmony import */ var _user_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-edit.component.css */ "b5y5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user */ "2hxB");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_apiglobal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/apiglobal */ "XvYk");







let UserEditComponent = class UserEditComponent {
    constructor(_userService) {
        // this.user = new User(1,'','','ROLE_USER','','','','');
        this._userService = _userService;
        this.page_title = 'Ajustes de Usuario';
        this.status = '';
        this.urlapi = _services_apiglobal__WEBPACK_IMPORTED_MODULE_6__["urlglobal"].url;
        this.loading = true;
        this.opcionesfroala = {
            language: 'es',
            toolbarButtons: {
                'moreText': {
                    'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'paragraphFormat', 'superscript',
                        'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle',
                        'clearFormatting']
                }
            }
        };
        this.afuConfig = {
            multiple: false,
            formatsAllowed: ".jpg,.png, .gig, .jpeg",
            maxSize: "50",
            uploadAPI: {
                url: this.urlapi + 'user/upload',
                headers: {
                    "Authorization": this._userService.getToken()
                }
            },
            theme: "attachPin",
            hideProgressBar: false,
            hideResetBtn: false,
            hideSelectBtn: false,
            replaceTexts: {
                selectFileBtn: 'Select Files',
                resetBtn: 'Reset',
                uploadBtn: 'Upload',
                dragNDropBox: 'Drag N Drop',
                attachPinBtn: 'Sube Tu Avatar de usuario',
                afterUploadMsg_success: 'Successfully Uploaded !',
                afterUploadMsg_error: 'Upload Failed !'
            }
        };
        this.identity = _userService.getIdentity();
        this.token = _userService.getToken();
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.identity.userall.id, this.identity.userall.name, this.identity.userall.surname, this.identity.userall.role, this.identity.userall.email, '', this.identity.userall.description, this.identity.userall.image);
        console.log(this.identity.userall);
    }
    ngOnInit() {
    }
    enviarUpdateUser(form) {
        this._userService.updateuser(this.token, this.user).subscribe(response => {
            this.status = "success";
            console.log("WELL Update user", response);
            if (response.status == 'success') {
                this.identity.userall = this.user;
                this.identity.name = this.user.name;
                this.identity.surname = this.user.surname;
                this.identity.email = this.user.email;
                console.log(this.identity.userall);
                console.log("toke", this.identity);
                localStorage.setItem('identity', JSON.stringify(this.identity));
            }
        }, error => {
            console.log("Error Update user", error);
            this.status = "Hya un error en algun lado ajjaja arregls";
        });
    }
    ImagenUpload(datos) {
        //console.log("IMAGEN RTA", JSON.parse( datos.response));
        let data = JSON.parse(datos.response);
        this.user.image = data.imagename;
    }
};
UserEditComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
UserEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-edit',
        template: _raw_loader_user_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], UserEditComponent);



/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(id, name, surname, role, email, password, description, image) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.role = role;
        this.email = email;
        this.password = password;
        this.description = description;
        this.image = image;
    }
}


/***/ }),

/***/ "3FbO":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/category-new/category-new.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 m-3\">\n\n    <h1>{{ page_title }}</h1>\n    <p *ngIf=\"status == ''\">\n      Crea una Nueva  <b>CATEGORIA</b>!!!\n    </p>\n    <hr/>\n     \n    <div class=\"alert alert-success col-md-6\" *ngIf=\"status == 'success'\">\n      Categoria Creada correctamente. &nbsp; \n    </div>\n  \n    <div class=\"alert alert-danger col-md-6\" *ngIf=\"status != '' && status != 'success'\">\n      Error al crear la categoria. <br> <small> {{ status }}</small>  &nbsp; \n    </div>\n  \n  \n    <!-- Formulario de Crear Categoria -->\n\n   <form #categoryForm=\"ngForm\" (ngSubmit)=\"enviarnewCategoria(categoryForm)\"\n    class=\"col-md-5\">\n\n    <div class=\"form-group\">\n        <label for=\"name\">Nombre</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\"\n        [(ngModel)]=\"category.name\" required pattern=\"[a-zA-Z ]+\"/>\n  \n        <small *ngIf=\"name.invalid && name.touched\" class=\"invalid-feedback d-block\">\n          El nombre de la Catedpria no es valido\n        </small>\n      </div>\n\n      <input type=\"submit\" value=\"Add Categoria\" class=\"btn btn-success\"\n      [disabled]=\"categoryForm.invalid\">\n\n   </form>\n  </div>");

/***/ }),

/***/ "5NoG":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-edit/user-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 m-3\">\n\n  <h1>{{ page_title }}</h1>\n  <p *ngIf=\"status == ''\">\n    Seccion para editar datos de <b>USUARIO</b>!!!\n  </p>\n  <hr/>\n  <div class=\"alert alert-success col-md-6\" *ngIf=\"status == 'success'\">\n    Usuario Editado correctamente. &nbsp; \n  </div>\n\n  <div class=\"alert alert-danger col-md-6\" *ngIf=\"status != '' && status != 'success'\">\n    Error al editar el Usuario. <br> <small> {{ status }}</small>  &nbsp; \n  </div>\n\n\n  <!-- Formulario de Ajustes -->\n\n  <form  class=\"card p-3 col-md-6 \" #usereditForm=\"ngForm\" \n    (ngSubmit)=\"enviarUpdateUser(usereditForm)\">\n    <div class=\"form-group\">\n      <label for=\"name\">Nombre</label>\n      <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\"\n      [(ngModel)]=\"user.name\" required pattern=\"[a-zA-Z]+\"/>\n\n      <small *ngIf=\"name.invalid && name.touched\" class=\"invalid-feedback d-block\">\n        El name no es valido\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"surname\">Apellido</label>\n      <input type=\"text\" class=\"form-control\" name=\"surname\" #surname=\"ngModel\"\n      [(ngModel)]=\"user.surname\" required pattern=\"[a-zA-Z]+\"/>\n\n      <small *ngIf=\"surname.invalid && surname.touched\" class=\"invalid-feedback d-block\">\n          Los Apellidos no son validos\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\"class=\"form-control\"  name=\"email\"  #email=\"ngModel\"\n      [(ngModel)]=\"user.email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"/>\n\n      <small *ngIf=\"email.invalid && email.touched\" class=\"invalid-feedback d-block\">\n          El email no es valido\n      </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Descripcion</label>\n      <textarea [(froalaModel)]=\"user.description\"\n      [froalaEditor]=\"opcionesfroala\" type=\"text\" \n      name=\"description\"></textarea>\n      \n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"image\">Avatar</label>\n      <div *ngIf=\"identity && identity.userall.image\" class=\"container my-3\">\n        <img src=\"{{ urlapi + 'user/avatar/' + identity.userall.image }}\" alt=\"Imagen Avatar User\"\n        class=\"img-fluid\">\n      </div>\n      <angular-file-uploader\n        [config]=\"afuConfig\"\n        [resetUpload]=resetVar\n        (ApiResponse)=\"ImagenUpload($event)\">\n      </angular-file-uploader>\n      <!-- <input type=\"file\" class=\"form-control\" name=\"image\"  #image=\"ngModel\"\n      [(ngModel)]=\"user.image\"  /> -->\n    </div>\n\n    <input type=\"submit\" value=\"Guardar Cambios\" class=\"btn btn-success\" \n          [disabled]=\"usereditForm.invalid\">\n  </form>\n\n\n\n</div>");

/***/ }),

/***/ "7AdY":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error.component.html */ "lQtD");
/* harmony import */ var _error_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.component.css */ "csMw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ErrorComponent = class ErrorComponent {
    constructor() {
        this.page_title = 'Pagina No Encontrada';
    }
    ngOnInit() {
    }
};
ErrorComponent.ctorParameters = () => [];
ErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-error',
        template: _raw_loader_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_error_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ErrorComponent);



/***/ }),

/***/ "7aX5":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-new/post-new.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 m-3\">\n\n    <h1>{{ page_title }}</h1>\n    <p *ngIf=\"status == ''\">\n        Seccion para Crear POST con un <b>USUARIO</b>!!!\n    </p>\n    <hr/>\n    <div class=\"alert alert-success col-md-6\" *ngIf=\"status == 'success'\">\n      Post Creado correctamente. &nbsp; \n    </div>\n  \n    <div class=\"alert alert-danger col-md-6\" *ngIf=\"status != '' && status != 'success'\">\n      Error al crear el Post. <br> &nbsp; \n    </div>\n  \n  \n    <!-- Formulario de Ajustes -->\n  \n    <form  class=\"card p-3 col-md-6 \" #postnewForm=\"ngForm\" \n      (ngSubmit)=\"newpost(postnewForm)\">\n      <div class=\"form-group\">\n        <label for=\"name\">Titulo</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\"\n        [(ngModel)]=\"post.title\" required />\n  \n        <small *ngIf=\"title.invalid && title.touched\" class=\"invalid-feedback d-block\">\n          El titulo no es Valido\n        </small>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"content\">Contenido</label>\n        <textarea [(froalaModel)]=\"post.content\"\n        [(ngModel)]=\"post.content\"\n        [froalaEditor]=\"opcionesfroala\" type=\"text\" \n        name=\"content\" #content=\"ngModel\" required></textarea>\n        \n        <small *ngIf=\"content.invalid && content.touched\" class=\"invalid-feedback d-block\">\n            El contenido es obligatorio\n        </small>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"category_id\">Selecciones Categorias</label>\n          <select class=\"form-control\" id=\"category_id\" required\n          name=\"category_id\" #category=\"ngModel\" [(ngModel)]=\"post.category_id\">\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\">\n              {{  category.name }}\n            </option>\n          </select>\n\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"image\">Imagen Post</label>\n          <!-- <div *ngIf=\"identity && identity.userall.image\" class=\"container my-3\">\n            <img src=\"{{ urlapi + 'user/avatar/' + identity.userall.image }}\" alt=\"Imagen Avatar User\"\n            class=\"img-fluid\">\n          </div> -->\n          <angular-file-uploader\n            [config]=\"afuConfig\"\n            [resetUpload]=resetVar\n            (ApiResponse)=\"ImagenUpload($event)\">\n          </angular-file-uploader>\n    \n        </div>\n  \n      <input type=\"submit\" value=\"Crear Post\" class=\"btn btn-success\" \n            [disabled]=\"postnewForm.invalid\">\n    </form>\n  \n  \n  \n  </div>");

/***/ }),

/***/ "7xWU":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-edit/post-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 m-3\" *ngIf=\"post; else loading\">\n\n    <h1>{{ page_title }}</h1>\n    <p *ngIf=\"status == ''\">\n        Seccion para Editar POST con un <b>USUARIO</b>!!!\n    </p>\n    <hr/>\n    <div class=\"alert alert-success col-md-6\" *ngIf=\"status == 'success'\">\n      Post Editado correctamente. &nbsp; \n    </div>\n  \n    <div class=\"alert alert-danger col-md-6\" *ngIf=\"status != '' && status != 'success'\">\n      Error al editar el Post. <br> &nbsp; \n    </div>\n  \n  \n    <!-- Formulario de Ajustes -->\n  \n    <form  class=\"card p-3 col-md-6 \" #posteditForm=\"ngForm\" \n      (ngSubmit)=\"editpost(posteditForm)\">\n      <div class=\"form-group\">\n        <label for=\"name\">Titulo</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" #title=\"ngModel\"\n        [(ngModel)]=\"post.title\" required />\n  \n        <small *ngIf=\"title.invalid && title.touched\" class=\"invalid-feedback d-block\">\n          El titulo no es Valido\n        </small>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"content\">Contenido</label>\n        <textarea [(froalaModel)]=\"post.content\"\n        [(ngModel)]=\"post.content\"\n        [froalaEditor]=\"opcionesfroala\" type=\"text\" \n        name=\"content\" #content=\"ngModel\" required></textarea>\n        \n        <small *ngIf=\"content.invalid && content.touched\" class=\"invalid-feedback d-block\">\n            El contenido es obligatorio\n        </small>\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"category_id\">Selecciones Categorias</label>\n          <select class=\"form-control\" id=\"category_id\" required\n          name=\"category_id\" #category=\"ngModel\" [(ngModel)]=\"post.category_id\">\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\">\n              {{  category.name }}\n            </option>\n          </select>\n\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"image\">Imagen Post</label>\n          <div *ngIf=\"post.image\" class=\"container my-3\">\n            <img src=\"{{ urlapi + 'post/image/' + post.image }}\" alt=\"Imagen Avatar User\"\n            class=\"img-fluid\">\n          </div>\n          <angular-file-uploader\n            [config]=\"afuConfig\"\n            [resetUpload]=resetVar\n            (ApiResponse)=\"ImagenUpload($event)\">\n          </angular-file-uploader>\n    \n        </div>\n  \n      <input type=\"submit\" value=\"Editar Post\" class=\"btn btn-success\" \n            [disabled]=\"posteditForm.invalid\">\n    </form>\n  \n  \n  \n  </div>\n\n  <ng-template #loading>\n    Cargando data, por favor espere\n  </ng-template>\n  ");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BNuL":
/*!***********************************************************!*\
  !*** ./src/app/components/post-new/post-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PostNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostNewComponent", function() { return PostNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_new_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-new.component.html */ "7aX5");
/* harmony import */ var _post_new_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-new.component.css */ "0weG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/category.service */ "cPV5");
/* harmony import */ var src_app_models_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/post */ "FNOU");
/* harmony import */ var _services_apiglobal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/apiglobal */ "XvYk");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/post.service */ "ENZJ");










let PostNewComponent = class PostNewComponent {
    constructor(_route, _activeRouter, _userService, _categoryService, _postService) {
        this._route = _route;
        this._activeRouter = _activeRouter;
        this._userService = _userService;
        this._categoryService = _categoryService;
        this._postService = _postService;
        this.urlapi = _services_apiglobal__WEBPACK_IMPORTED_MODULE_8__["urlglobal"].url;
        this.opcionesfroala = {
            language: 'es',
            toolbarButtons: {
                'moreText': {
                    'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'paragraphFormat', 'superscript',
                        'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle',
                        'clearFormatting']
                }
            }
        };
        this.afuConfig = {
            multiple: false,
            formatsAllowed: ".jpg,.png, .gig, .jpeg",
            maxSize: "50",
            uploadAPI: {
                url: this.urlapi + 'post/upload',
                headers: {
                    "Authorization": this._userService.getToken()
                }
            },
            theme: "attachPin",
            hideProgressBar: false,
            hideResetBtn: false,
            hideSelectBtn: false,
            replaceTexts: {
                selectFileBtn: 'Select Files',
                resetBtn: 'Reset',
                uploadBtn: 'Upload',
                dragNDropBox: 'Drag N Drop',
                attachPinBtn: 'Sube Tu Imagen para el POST',
                afterUploadMsg_success: 'Successfully Uploaded !',
                afterUploadMsg_error: 'Upload Failed !'
            }
        };
        this.page_title = 'Crear un Nuevo Post';
        this.status = '';
        this.token = _userService.getToken();
        this.identity = _userService.getIdentity();
        this.post = new src_app_models_post__WEBPACK_IMPORTED_MODULE_7__["Post"](1, this.identity.sub, 1, '', '', '');
        // console.log(this.token );
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        this._categoryService.getCategories().subscribe(response => {
            // console.log(response.categories);
            this.categories = response.categories;
        });
    }
    newpost(form) {
        // console.log(this.post);
        this._postService.create(this.token, this.post).subscribe(response => {
            if (response.status == 'success') {
                this.status = response.status;
                setTimeout(() => {
                    this._route.navigate(['/home']);
                }, 1500);
            }
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    ImagenUpload(datos) {
        let image_data = JSON.parse(datos.response);
        this.post.image = image_data.nameimage;
    }
};
PostNewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_9__["PostService"] }
];
PostNewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-new',
        template: _raw_loader_post_new_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_new_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_9__["PostService"]])
], PostNewComponent);



/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "tXZI");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "0z2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post.service */ "ENZJ");
/* harmony import */ var _services_apiglobal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/apiglobal */ "XvYk");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");







let HomeComponent = class HomeComponent {
    constructor(_postService, _userService) {
        this._postService = _postService;
        this._userService = _userService;
        this.page_title = 'Home';
        this.url = _services_apiglobal__WEBPACK_IMPORTED_MODULE_5__["urlglobal"].url;
        this.indentity = _userService.getIdentity();
        this.token = _userService.getToken();
    }
    ngOnInit() {
        this.getPosts();
    }
    getPosts() {
        this._postService.getPosts().subscribe(response => {
            if (response.status == 'success') {
                // console.log(response);
                this.posts = response.posts;
                //console.log(this.posts);
            }
        }, error => {
        });
    }
    deletepost(id) {
        this._postService.deletePost(this.token, id).subscribe(response => {
            if (response.status == 'success') {
                this.getPosts();
            }
        }, error => {
            console.log("Error al borrar post", error);
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], HomeComponent);



/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "rJJk");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.css */ "nlSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/post.service */ "ENZJ");
/* harmony import */ var _services_apiglobal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/apiglobal */ "XvYk");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");








let ProfileComponent = class ProfileComponent {
    constructor(_activeRoute, _postService, _userService) {
        this._activeRoute = _activeRoute;
        this._postService = _postService;
        this._userService = _userService;
        this.iduser = +_activeRoute.snapshot.params.id;
        //console.log(this.iduser);
        this.url = _services_apiglobal__WEBPACK_IMPORTED_MODULE_6__["urlglobal"].url;
        this.indentity = _userService.getIdentity();
        this.token = _userService.getToken();
    }
    ngOnInit() {
        this.getPosts(this.iduser);
    }
    getPosts(userId) {
        this._userService.getPosts(userId).subscribe(response => {
            if (response.status == 'success') {
                // console.log(response);
                this.posts = response.post;
                //console.log(this.posts);
                this.page_title = `Post de ${this.posts[0].user.name} ${this.posts[0].user.surname}`;
            }
        }, error => {
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], ProfileComponent);



/***/ }),

/***/ "E8lZ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 m-3\">\n\n  <h1>{{ page_title }}</h1>\n  <p *ngIf=\"status == ''\">\n    Pagina de registro, para que el usuario se registre el la plataforma !!!\n  </p>\n\n  <div class=\"alert alert-success col-md-6\" *ngIf=\"status == 'success'\">\n    Usuario creado correctamente. &nbsp; \n    <a [routerLink]=\"[ '/login']\">Ingresa Aqui</a>\n  </div>\n\n  <div class=\"alert alert-danger col-md-6\" *ngIf=\"status != '' && status != 'success'\">\n    Error al crear el usuario. <br> <small> {{ status }}</small>  &nbsp; \n  </div>\n  <!-- Formulario de Registros -->\n\n  <form action=\"\" class=\"card p-3 col-md-6 \" #registerForm=\"ngForm\" \n    (ngSubmit)=\"enviarRegistro(registerForm)\">\n    <div class=\"form-group\">\n      <label for=\"name\">Nombre</label>\n      <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\"\n      [(ngModel)]=\"user.name\" required pattern=\"[a-zA-Z]+\"/>\n\n      <small *ngIf=\"name.invalid && name.touched\" class=\"invalid-feedback d-block\">\n        El name no es valido\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"surname\">Apellido</label>\n      <input type=\"text\" class=\"form-control\" name=\"surname\" name=\"surname\" #surname=\"ngModel\"\n      [(ngModel)]=\"user.surname\" required pattern=\"[a-zA-Z]+\"/>\n\n      <small *ngIf=\"surname.invalid && surname.touched\" class=\"invalid-feedback d-block\">\n          Los Apellidos no son validos\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\"class=\"form-control\"  name=\"email\" name=\"email\" #email=\"ngModel\"\n      [(ngModel)]=\"user.email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"/>\n\n      <small *ngIf=\"email.invalid && email.touched\" class=\"invalid-feedback d-block\">\n          El email no es valido\n      </small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"text\" class=\"form-control\" name=\"password\" name=\"password\" #password=\"ngModel\"\n      [(ngModel)]=\"user.password\" required />\n\n      <small *ngIf=\"password.invalid && password.touched\" class=\"invalid-feedback d-block\">\n          El password no es valido\n      </small>\n    </div>\n    <input type=\"submit\" value=\"Registrarme\" class=\"btn btn-success\" \n          [disabled]=\"registerForm.invalid\">\n  </form>\n</div>");

/***/ }),

/***/ "ENZJ":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apiglobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiglobal */ "XvYk");




let PostService = class PostService {
    constructor(_http) {
        this._http = _http;
        this.url = _apiglobal__WEBPACK_IMPORTED_MODULE_3__["urlglobal"].url;
    }
    create(token, post) {
        // El JSON se rompe porque HTML entities, asi que este metodo limpia esa basura 
        // JJAJAJ basura no es pero casi que no puedo solucionarlo
        post.content = _apiglobal__WEBPACK_IMPORTED_MODULE_3__["urlglobal"].htmlEntities(post.content);
        let json = JSON.stringify(post);
        let params = "json=" + json;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this._http.post(this.url + 'post', params, { headers });
    }
    getPosts() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url + 'post', { headers });
    }
    getPost(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url + 'post/' + id, { headers });
    }
    updatepost(token, post, id) {
        post.content = _apiglobal__WEBPACK_IMPORTED_MODULE_3__["urlglobal"].htmlEntities(post.content);
        let json = JSON.stringify(post);
        let params = "json=" + json;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this._http.put(this.url + 'post/' + id, params, { headers });
    }
    deletePost(token, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this._http.delete(this.url + 'post/' + id, { headers });
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PostService);



/***/ }),

/***/ "FNOU":
/*!********************************!*\
  !*** ./src/app/models/post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
class Post {
    constructor(id, user_id, category_id, content, image, createdAt) {
        this.id = id;
        this.user_id = user_id;
        this.category_id = category_id;
        this.content = content;
        this.image = image;
        this.createdAt = createdAt;
    }
}


/***/ }),

/***/ "FOWj":
/*!******************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "HfIm":
/*!**************************************************************************!*\
  !*** ./src/app/components/category-detail/category-detail.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "IocU":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/category-detail/category-detail.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid my-3\" *ngIf=\"category; else loading\">\n  <!-- Cuando la variable post tenga contenido miestre este div -->\n    \n    <h1>{{ category.name }}</h1>\n    <hr>\n  \n    <div *ngIf=\"posts && posts.length == 0\" class=\"alert alert-info\">\n      NO hay entradas para este post\n    </div>\n\n    <div class=\"card-columns\" *ngIf=\"posts; else loading\">\n        <article class=\"card w-100\" *ngFor=\"let post of posts\">\n          <div class=\"card-header\">\n    \n            <h3>\n            <a class=\"\" \n             [routerLink]=\"[ '/entrada',post.id]\" > {{ post.title }}</a> \n            </h3>\n          </div>\n    \n          <div class=\"card-body\">\n            <div class=\"post-image\" *ngIf=\"post.image; else imagenone\">\n              <img [src]=\"url +'post/image/' + post.image\" [alt]=\"post.title\" class=\"w-100\"/>\n            </div>\n    \n            <ng-template class=\"post-image\" #imagenone>\n                <img src=\"assets/images/noimage.png\" alt=\"imagen default\" class=\"w-100\">\n            </ng-template>\n    \n    \n            <!-- Botones -->\n            <div class=\"post-buttons m-3\">\n              <a [routerLink]=\"[ '/entrada',post.id]\" class=\"mr-2 btn btn-success\">Leer</a>\n              <span *ngIf=\"identity && identity.sub == post.user_id\">\n                <a [routerLink]=\"[ '/editar-entrada',post.id]\" class=\"mr-2 btn btn-primary\">Editar</a>\n                <a  class=\"btn btn-danger\" style=\"color: #fff\"\n                data-toggle=\"modal\" [attr.data-target]=\"'#modalborrapost'+post.id\">Borrar</a>\n              </span>\n            </div>\n          </div>\n    \n          <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"{{ 'modalborrapost'+ post.id}}\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">Borrar Post</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    <p>¿ Está seguro que quiere eliminar el post ?<br/></p>\n                      <h5><b>\"{{  post.title }}\"</b></h5>\n                       \n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n                     (click)=\"deletepost(post.id)\">\n                      Borrar Post\n                    </button>\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </article>\n    \n        \n      </div>\n</div>\n\n<ng-template #loading>\n  Cargando..\n</ng-template>\n  \n  \n  \n  ");

/***/ }),

/***/ "MSij":
/*!*******************************************************************!*\
  !*** ./src/app/components/category-new/category-new.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryNewComponent", function() { return CategoryNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_new_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category-new.component.html */ "3FbO");
/* harmony import */ var _category_new_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-new.component.css */ "dJeq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_categoty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/categoty */ "Uigi");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/category.service */ "cPV5");








let CategoryNewComponent = class CategoryNewComponent {
    constructor(_userService, _categoryService, _router, _activateroute) {
        this._userService = _userService;
        this._categoryService = _categoryService;
        this._router = _router;
        this._activateroute = _activateroute;
        this.page_title = 'Crear Nueva Categoria';
        this.status = '';
        this.identity = _userService.getIdentity();
        this.token = _userService.getToken();
        this.category = new _models_categoty__WEBPACK_IMPORTED_MODULE_6__["Category"](1, '');
    }
    ngOnInit() {
    }
    enviarnewCategoria(form) {
        console.log(this.category);
        this._categoryService.addnewCategory(this.token, this.category).subscribe(response => {
            this.status = response.status;
            // console.log("HABEr", response);
            setTimeout(() => {
                this._router.navigate(['/home']);
            }, 1500);
        }, error => {
        });
    }
};
CategoryNewComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
CategoryNewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-new',
        template: _raw_loader_category_new_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_new_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], CategoryNewComponent);



/***/ }),

/***/ "O5bD":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 m-3\">\n\n  <h1>{{ page_title }}</h1>\n  <p *ngIf=\"status == ''\">\n    Pagina de registro, para que el usuario se registre el la plataforma !!!\n  </p>\n\n  <div class=\"alert alert-success col-md-6\" *ngIf=\"status == 'success'\">\n    Bienvenido. &nbsp; \n  </div>\n\n  <div class=\"alert alert-danger col-md-6\" *ngIf=\"status != '' && status != 'success'\">\n    Error al entrar <br> <small> {{ status }}</small>  &nbsp; \n  </div> \n\n  <!-- Formulario de Registros -->\n\n  <form action=\"\" class=\"card p-3 col-md-6 \" #loginForm=\"ngForm\" \n    (ngSubmit)=\"enviarLogin(loginForm)\">\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\"class=\"form-control\"  name=\"email\" name=\"email\" #email=\"ngModel\"\n      [(ngModel)]=\"user.email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"/>\n\n      <small *ngIf=\"email.invalid && email.touched\" class=\"invalid-feedback d-block\">\n          El email no es valido\n      </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"text\" class=\"form-control\" name=\"password\" name=\"password\" #password=\"ngModel\"\n      [(ngModel)]=\"user.password\" required />\n\n      <small *ngIf=\"password.invalid && password.touched\" class=\"invalid-feedback d-block\">\n          El password no es valido\n      </small>\n    </div>\n\n    <input type=\"submit\" value=\"Registrarme\" class=\"btn btn-success\" \n          [disabled]=\"loginForm.invalid\"/>\n\n  </form>\n</div>");

/***/ }),

/***/ "QmUL":
/*!***********************************!*\
  !*** ./src/app/identity.guard.ts ***!
  \***********************************/
/*! exports provided: IdentityGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityGuard", function() { return IdentityGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "qfBg");




let IdentityGuard = class IdentityGuard {
    constructor(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    canActivate() {
        let identity = this._userService.getIdentity();
        if (identity) {
            return true;
        }
        else {
            this._router.navigate(['/error']);
            return true;
        }
    }
};
IdentityGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
IdentityGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], IdentityGuard);



/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APPROUTINGPROVIDERS, ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROUTINGPROVIDERS", function() { return APPROUTINGPROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING", function() { return ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error/error.component */ "7AdY");
/* harmony import */ var _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/categorias/categorias.component */ "+1dx");
/* harmony import */ var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-edit/user-edit.component */ "24cc");
/* harmony import */ var _components_category_new_category_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/category-new/category-new.component */ "MSij");
/* harmony import */ var _components_post_new_post_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/post-new/post-new.component */ "BNuL");
/* harmony import */ var _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/post-detail/post-detail.component */ "S3qa");
/* harmony import */ var _components_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/post-edit/post-edit.component */ "sJZg");
/* harmony import */ var _components_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/category-detail/category-detail.component */ "lvAC");
/* harmony import */ var _identity_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./identity.guard */ "QmUL");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");














const ROUTES = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'logout/:sure', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'ajustes', component: _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], canActivate: [_identity_guard__WEBPACK_IMPORTED_MODULE_12__["IdentityGuard"]] },
    { path: 'crear-categoria', component: _components_category_new_category_new_component__WEBPACK_IMPORTED_MODULE_7__["CategoryNewComponent"], canActivate: [_identity_guard__WEBPACK_IMPORTED_MODULE_12__["IdentityGuard"]] },
    { path: 'crear-post', component: _components_post_new_post_new_component__WEBPACK_IMPORTED_MODULE_8__["PostNewComponent"], canActivate: [_identity_guard__WEBPACK_IMPORTED_MODULE_12__["IdentityGuard"]] },
    { path: 'entrada/:id', component: _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_9__["PostDetailComponent"] },
    { path: 'editar-entrada/:id', component: _components_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_10__["PostEditComponent"], canActivate: [_identity_guard__WEBPACK_IMPORTED_MODULE_12__["IdentityGuard"]] },
    { path: 'registro', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'perfil/:id', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"] },
    { path: 'categoria/:id', component: _components_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_11__["CategoryDetailComponent"] },
    { path: 'categorias', component: _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_5__["CategoriasComponent"] },
    { path: 'error', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] },
];
const APPROUTINGPROVIDERS = [];
const ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES, { relativeLinkResolution: 'legacy' });


/***/ }),

/***/ "S3qa":
/*!*****************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-detail.component.html */ "vP5Q");
/* harmony import */ var _post_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-detail.component.css */ "FOWj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/post.service */ "ENZJ");








let PostDetailComponent = class PostDetailComponent {
    constructor(_userService, _http, _postService, _route, _activeRoute) {
        this._userService = _userService;
        this._http = _http;
        this._postService = _postService;
        this._route = _route;
        this._activeRoute = _activeRoute;
    }
    ngOnInit() {
        this.getPost();
    }
    getPost() {
        this._activeRoute.params.subscribe(response => {
            let id = +response['id'];
            //console.log(id);
            this._postService.getPost(id).subscribe(data => {
                if (data.status == 'success') {
                    this.post = data.posts;
                    //console.log(data.posts);
                }
                else {
                    this._route.navigate(['home']);
                }
            }, error => {
                this._route.navigate(['home']);
                // console.log(error);
            });
        });
    }
};
PostDetailComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
PostDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-detail',
        template: _raw_loader_post_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], PostDetailComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _services_apiglobal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/apiglobal */ "XvYk");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/category.service */ "cPV5");







let AppComponent = class AppComponent {
    constructor(_userService, _categoryServie) {
        this._userService = _userService;
        this._categoryServie = _categoryServie;
        this.title = 'blog-angular';
        this.urlapi = _services_apiglobal__WEBPACK_IMPORTED_MODULE_5__["urlglobal"].url;
        this.loadUser();
    }
    ngDoCheck() {
        // Cada vez que se produsca un cambio este metodo se llama
        // Y yo juraba que era el Onchangues
        this.loadUser();
    }
    ngOnInit() {
        this.getCategories();
    }
    loadUser() {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    getCategories() {
        this._categoryServie.getCategories().subscribe(response => {
            if (response.status == 'success') {
                this.categories = response.categories;
                //console.log(this.categories);
            }
        }, error => {
            console.log("Error al cargar categories", error);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]])
], AppComponent);



/***/ }),

/***/ "Uigi":
/*!************************************!*\
  !*** ./src/app/models/categoty.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary mt-3\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/images/angular.png\" width=\"40\" height=\"40\" alt=\"logo NG-Blog\"/>\n      NG-BLOG\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" \n            data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" \n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" [routerLink]=\"[ '/home' ]\">Inicio <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\"\n             role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n             Categorias\n             <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                <a *ngFor=\"let category of categories\" class=\"dropdown-item\" \n                [routerLink]=\"['categoria', category.id]\">\n                  {{ category.name}}\n                </a>\n              </div>\n            </a>\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav navbar-right\" *ngIf=\"!identity\">\n          <li class=\"nav-item active\" routerLinkActive=\"active\">\n              <a class=\"nav-link\" [routerLink]=\"[ '/login' ]\">Login</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n              <a class=\"nav-link\"[routerLink]=\"[ '/registro' ]\">Registro</a>\n            </li>\n      </ul>\n\n      <ul class=\"navbar-nav navbar-right\" *ngIf=\"identity && identity.name\">\n          <li *ngIf=\"identity && identity.userall.image\" class=\"nav-item\">\n              <div class=\"avatar_mask m-0 p-0 \">\n                  <img src=\"{{ urlapi + 'user/avatar/' + identity.userall.image }}\" \n                  alt=\"Imagen Avatar User\">\n              </div>\n            </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\"\n           role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{ identity.name  + ' '+ identity.surname}}\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/crear-post']\">Crear post</a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/crear-categoria']\">Crear categoria</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" [routerLink]=\"['/perfil', identity.sub]\">Mi perfil</a>\n            <a class=\"dropdown-item\" [routerLink]=\"[ '/ajustes']\">Ajustes</a>\n            <a class=\"dropdown-item\" [routerLink]=\"[ '/logout/1']\">Salir</a>\n          </div>\n        </li>\n      </ul>\n  \n    </div>\n  </nav>\n\n  <router-outlet></router-outlet>\n  \n</div>");

/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "O5bD");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "mDuy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user */ "2hxB");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let LoginComponent = class LoginComponent {
    constructor(_userService, _router, _activateroute) {
        this._userService = _userService;
        this._router = _router;
        this._activateroute = _activateroute;
        this.page_title = "Loggeate";
        this.status = '';
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"](1, '', '', 'ROLE_USER', '', '', '', '');
    }
    ngOnInit() {
        // Sse ejecuta cuando cargo este componente, y cierra sesion cuando 
        // le llega el parametro por la URL osea un 1
        this.logout();
    }
    enviarLogin(form) {
        this._userService.signup(this.user).subscribe(response => {
            if (response.status == 'error') {
                this.status = 'Contraseña o Password Incorrectos';
                return;
            }
            console.log("RSA", response);
            // Token
            this.status = 'success';
            this.token = response;
            this._userService.signup(this.user, true).subscribe(response => {
                console.log("RSA", response);
                // User information
                this.identity = response;
                console.log("toke", this.token);
                console.log("User identidaD", this.identity);
                // PERSISTIR DATOS
                localStorage.setItem('token', this.token);
                localStorage.setItem('identity', JSON.stringify(this.identity));
                // Redireccion a INICIO
                this._router.navigate(['home']);
            }, error => {
                console.log("Error", error);
                this.status = 'error';
            });
        }, error => {
            console.log("Error1", error);
            this.status = 'error';
        });
    }
    logout() {
        this._activateroute.params.subscribe(dato => {
            let logout = +dato['sure'];
            // Con el ma antes de dato lo convierto a int
            if (logout == 1) {
                localStorage.removeItem('identity');
                localStorage.removeItem('token');
                this.identity = null;
                this.token = null;
                // Redireccion a INICIO
                this._router.navigate(['home']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], LoginComponent);



/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "E8lZ");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "woRh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");






let RegisterComponent = class RegisterComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.page_title = 'Registrate';
        this.status = '';
        console.log(this.status);
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"](1, '', '', 'ROLE_USER', '', '', '', '');
    }
    enviarRegistro(form) {
        // console.log(this.user);
        this._userService.register(this.user).subscribe(response => {
            // console.log("databack",response);
            this.status = 'success';
            form.reset();
        }, error => {
            //console.log("HYA UN ERROR" , error);
            let emailcheck = error.error.nameerror.email.length;
            if (emailcheck) {
                // console.log("El email ya existe");
                this.status = 'El email ya existe';
            }
        });
    }
    ngOnInit() {
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], RegisterComponent);



/***/ }),

/***/ "XvYk":
/*!***************************************!*\
  !*** ./src/app/services/apiglobal.ts ***!
  \***************************************/
/*! exports provided: urlglobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlglobal", function() { return urlglobal; });
var urlglobal = {
    url: 'https://apiblogalexsk88.herokuapp.com/api/',
    htmlEntities: function (str) {
        return String(str).replace('&ntilde;', 'ñ')
            .replace('&Ntilde;', 'Ñ')
            .replace('&amp;', '&')
            .replace('&Ntilde;', 'Ñ')
            .replace('&ntilde;', 'ñ')
            .replace('&Ntilde;', 'Ñ')
            .replace('&Agrave;', 'À')
            .replace('&Aacute;', 'Á')
            .replace('&Acirc;', 'Â')
            .replace('&Atilde;', 'Ã')
            .replace('&Auml;', 'Ä')
            .replace('&Aring;', 'Å')
            .replace('&AElig;', 'Æ')
            .replace('&Ccedil;', 'Ç')
            .replace('&Egrave;', 'È')
            .replace('&Eacute;', 'É')
            .replace('&Ecirc;', 'Ê')
            .replace('&Euml;', 'Ë')
            .replace('&Igrave;', 'Ì')
            .replace('&Iacute;', 'Í')
            .replace('&Icirc;', 'Î')
            .replace('&Iuml;', 'Ï')
            .replace('&ETH;', 'Ð')
            .replace('&Ntilde;', 'Ñ')
            .replace('&Ograve;', 'Ò')
            .replace('&Oacute;', 'Ó')
            .replace('&Ocirc;', 'Ô')
            .replace('&Otilde;', 'Õ')
            .replace('&Ouml;', 'Ö')
            .replace('&Oslash;', 'Ø')
            .replace('&Ugrave;', 'Ù')
            .replace('&Uacute;', 'Ú')
            .replace('&Ucirc;', 'Û')
            .replace('&Uuml;', 'Ü')
            .replace('&Yacute;', 'Ý')
            .replace('&THORN;', 'Þ')
            .replace('&szlig;', 'ß')
            .replace('&agrave;', 'à')
            .replace('&aacute;', 'á')
            .replace('&acirc;', 'â')
            .replace('&atilde;', 'ã')
            .replace('&auml;', 'ä')
            .replace('&aring;', 'å')
            .replace('&aelig;', 'æ')
            .replace('&ccedil;', 'ç')
            .replace('&egrave;', 'è')
            .replace('&eacute;', 'é')
            .replace('&ecirc;', 'ê')
            .replace('&euml;', 'ë')
            .replace('&igrave;', 'ì')
            .replace('&iacute;', 'í')
            .replace('&icirc;', 'î')
            .replace('&iuml;', 'ï')
            .replace('&eth;', 'ð')
            .replace('&ntilde;', 'ñ')
            .replace('&ograve;', 'ò')
            .replace('&oacute;', 'ó')
            .replace('&ocirc;', 'ô')
            .replace('&otilde;', 'õ')
            .replace('&ouml;', 'ö')
            .replace('&oslash;', 'ø')
            .replace('&ugrave;', 'ù')
            .replace('&uacute;', 'ú')
            .replace('&ucirc;', 'û')
            .replace('&uuml;', 'ü')
            .replace('&yacute;', 'ý')
            .replace('&thorn;', 'þ')
            .replace('&yuml;', 'ÿ')
            .replace('&nbsp;', '')
            .replace('&', '')
            .replace('nbsp;', '');
    }
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-froala-wysiwyg */ "WU05");
/* harmony import */ var froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! froala-editor/js/plugins.pkgd.min.js */ "rcg+");
/* harmony import */ var froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_plugins_pkgd_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-file-uploader */ "wn2B");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/error/error.component */ "7AdY");
/* harmony import */ var _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/categorias/categorias.component */ "+1dx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-edit/user-edit.component */ "24cc");
/* harmony import */ var _components_category_new_category_new_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/category-new/category-new.component */ "MSij");
/* harmony import */ var _components_post_new_post_new_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/post-new/post-new.component */ "BNuL");
/* harmony import */ var _pipes_imagenone_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/imagenone.pipe */ "cnrC");
/* harmony import */ var _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/post-detail/post-detail.component */ "S3qa");
/* harmony import */ var _components_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/post-edit/post-edit.component */ "sJZg");
/* harmony import */ var _components_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/category-detail/category-detail.component */ "lvAC");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");




// FROALA EDITOR


// File UpLoader

















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
            _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_13__["CategoriasComponent"],
            _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_15__["UserEditComponent"],
            _components_category_new_category_new_component__WEBPACK_IMPORTED_MODULE_16__["CategoryNewComponent"],
            _components_post_new_post_new_component__WEBPACK_IMPORTED_MODULE_17__["PostNewComponent"],
            _pipes_imagenone_pipe__WEBPACK_IMPORTED_MODULE_18__["ImagenonePipe"],
            _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_19__["PostDetailComponent"],
            _components_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_20__["PostEditComponent"],
            _components_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_21__["CategoryDetailComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTING"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_4__["FroalaEditorModule"].forRoot(),
            angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_4__["FroalaViewModule"].forRoot(),
            angular_file_uploader__WEBPACK_IMPORTED_MODULE_6__["AngularFileUploaderModule"]
        ],
        providers: [
            _app_routes__WEBPACK_IMPORTED_MODULE_10__["APPROUTINGPROVIDERS"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "b0ZK":
/*!****************************************************************!*\
  !*** ./src/app/components/categorias/categorias.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWFzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "b5y5":
/*!**************************************************************!*\
  !*** ./src/app/components/user-edit/user-edit.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "cPV5":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _apiglobal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiglobal */ "XvYk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.url = _apiglobal__WEBPACK_IMPORTED_MODULE_2__["urlglobal"].url;
    }
    addnewCategory(token, category) {
        let json = JSON.stringify(category);
        // El backend solo lee un String, 
        // y pues ese string se codifica a JSON en el backend
        let params = 'json=' + json;
        // key: json 
        // value de json de user
        // COMO EN POSTMAN !! WUUAO
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        // Indico las cabecera 
        return this.http.post(this.url + 'category', params, { headers: headers });
    }
    getCategories() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'aplication/x-www-form-urlencoded');
        return this.http.get(this.url + 'category', { headers });
    }
    getCategory(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'aplication/x-www-form-urlencoded');
        return this.http.get(`${this.url}category/${id}`, { headers });
    }
    getPosts(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'aplication/x-www-form-urlencoded');
        return this.http.get(`${this.url}post/category/${id}`, { headers });
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CategoryService);



/***/ }),

/***/ "cnrC":
/*!*****************************************!*\
  !*** ./src/app/pipes/imagenone.pipe.ts ***!
  \*****************************************/
/*! exports provided: ImagenonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenonePipe", function() { return ImagenonePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let ImagenonePipe = class ImagenonePipe {
    constructor(_http) {
        this._http = _http;
        this.url = 'assets/image/noimage.png';
    }
    transform(value, args) {
        return true;
    }
};
ImagenonePipe.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ImagenonePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'imagenone'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ImagenonePipe);



/***/ }),

/***/ "csMw":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "dJeq":
/*!********************************************************************!*\
  !*** ./src/app/components/category-new/category-new.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1uZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "j6lq":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorias/categorias.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ page_title }}</h1>\n<p>\n  categorias works!\n</p>\n");

/***/ }),

/***/ "lQtD":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ page_title }}</h1>\n<p>\n  error works!\n</p>\n");

/***/ }),

/***/ "lvAC":
/*!*************************************************************************!*\
  !*** ./src/app/components/category-detail/category-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category-detail.component.html */ "IocU");
/* harmony import */ var _category_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-detail.component.css */ "HfIm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/category.service */ "cPV5");
/* harmony import */ var _services_apiglobal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/apiglobal */ "XvYk");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/post.service */ "ENZJ");









let CategoryDetailComponent = class CategoryDetailComponent {
    constructor(_activeRoute, _categoryService, _userService, _postService) {
        this._activeRoute = _activeRoute;
        this._categoryService = _categoryService;
        this._userService = _userService;
        this._postService = _postService;
        this.url = _services_apiglobal__WEBPACK_IMPORTED_MODULE_6__["urlglobal"].url;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    ngOnInit() {
        this.getPostByCategory();
    }
    getPostByCategory() {
        this._activeRoute.params.subscribe(data => {
            let id = +data['id'];
            this._categoryService.getCategory(id).subscribe(response => {
                if (response.status == 'success') {
                    this.category = response.category;
                    //console.log(response); 
                    //console.log(this.category.id);
                    console.log(this.identity.sub);
                    console.log(this.category.user_id);
                }
            }, error => console.log(error));
            this._categoryService.getPosts(id).subscribe(response => {
                if (response.status == 'success') {
                    console.log("Aui postbycategory", response.post);
                    this.posts = response.post;
                }
            }, error => console.log('Error', error));
        });
    }
    deletepost(id) {
        this._postService.deletePost(this.token, id).subscribe(response => {
            if (response.status == 'success') {
                this.getPostByCategory();
            }
        }, error => {
            console.log("Error al borrar post", error);
        });
    }
};
CategoryDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"] }
];
CategoryDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-detail',
        template: _raw_loader_category_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"]])
], CategoryDetailComponent);



/***/ }),

/***/ "mDuy":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "nlSG":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apiglobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiglobal */ "XvYk");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.url = _apiglobal__WEBPACK_IMPORTED_MODULE_3__["urlglobal"].url;
    }
    register(user) {
        let json = JSON.stringify(user);
        // El backend solo lee un String, 
        // y pues ese string se codifica a JSON en el backend
        let params = 'json=' + json;
        // key: json 
        // value de json de user
        // COMO EN POSTMAN !! WUUAO
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        // Indico las cabecera 
        return this.http.post(this.url + 'register', params, { headers: headers });
    }
    signup(user, gettoken = null) {
        if (gettoken != null) {
            user.getToken = 'true';
        }
        let json = JSON.stringify(user);
        let params = 'json=' + json;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.url + 'login', params, { headers: headers });
    }
    updateuser(token, user) {
        user.description = _apiglobal__WEBPACK_IMPORTED_MODULE_3__["urlglobal"].htmlEntities(user.description);
        let json = JSON.stringify(user);
        // Lo convierto a string para enviarlo al API
        let params = "json=" + json;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this.http.put(this.url + 'user/update', params, { headers: headers });
    }
    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if (identity && identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    }
    getToken() {
        let token = localStorage.getItem('token');
        if (token && token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    }
    traerUser(id) {
        return this.http.get(this.url + 'user/detail/' + id);
    }
    getPosts(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'aplication/x-www-form-urlencoded');
        return this.http.get(`${this.url}post/user/${id}`, { headers });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "rJJk":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container my-5\">\n  <h1>{{ page_title }}</h1>\n  <hr><br>\n\n  <div class=\"card my-2\" *ngFor=\"let post of posts\">\n      <div class=\"card-header\">\n        <h2>{{ post.title }}</h2>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-10\">\n              <div class=\" mb-0\">\n                  <p [innerHTML]=\"post.content\"></p>\n                  <footer class=\"blockquote-footer\">Por \n                    <cite title=\"Source Title\">{{ post.user.name + ' '+ post.user.surname }}</cite></footer>\n                  </div>\n          </div>\n          <div class=\"col-sm-2\">\n            <img src=\"{{ url + 'post/image/'+post.image }}\" class=\"img-fluid\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "sJZg":
/*!*************************************************************!*\
  !*** ./src/app/components/post-edit/post-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditComponent", function() { return PostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-edit.component.html */ "7xWU");
/* harmony import */ var _post_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-edit.component.css */ "tTkt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/post.service */ "ENZJ");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_apiglobal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/apiglobal */ "XvYk");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/category.service */ "cPV5");









let PostEditComponent = class PostEditComponent {
    constructor(_activeRoute, _postService, _userService, _categoryService, _router) {
        this._activeRoute = _activeRoute;
        this._postService = _postService;
        this._userService = _userService;
        this._categoryService = _categoryService;
        this._router = _router;
        this.urlapi = _services_apiglobal__WEBPACK_IMPORTED_MODULE_7__["urlglobal"].url;
        this.opcionesfroala = {
            language: 'es',
            toolbarButtons: {
                'moreText': {
                    'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'paragraphFormat', 'superscript',
                        'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle',
                        'clearFormatting']
                }
            }
        };
        this.afuConfig = {
            multiple: false,
            formatsAllowed: ".jpg,.png, .gig, .jpeg",
            maxSize: "50",
            uploadAPI: {
                url: this.urlapi + 'post/upload',
                headers: {
                    "Authorization": this._userService.getToken()
                }
            },
            theme: "attachPin",
            hideProgressBar: false,
            hideResetBtn: false,
            hideSelectBtn: false,
            replaceTexts: {
                selectFileBtn: 'Select Files',
                resetBtn: 'Reset',
                uploadBtn: 'Upload',
                dragNDropBox: 'Drag N Drop',
                attachPinBtn: 'Sube Tu Imagen para el POST',
                afterUploadMsg_success: 'Successfully Uploaded !',
                afterUploadMsg_error: 'Upload Failed !'
            }
        };
        this.token = _userService.getToken();
        this.identity = _userService.getIdentity();
        this.page_title = 'Editar Post';
        this.status = '';
        this._activeRoute.params.subscribe(data => {
            this.id = +data['id'];
            _postService.getPost(this.id).subscribe(response => {
                if (response.status == 'success') {
                    //console.log(response.posts);
                    delete response.posts['user'];
                    this.post = response.posts;
                    let userid = +this.post.user_id;
                    // Comprobar si el dueño del POST, para editar
                    // Toco casting a int porque son string, pues eso dice el EDITOR
                    if (userid != +this.identity.sub) {
                        this._router.navigate(['/home']);
                    }
                }
            }, error => {
            });
        });
    }
    ngOnInit() {
        this.getCategories();
    }
    editpost(form) {
        console.log(this.post);
        this._postService.updatepost(this.token, this.post, this.id).subscribe(response => {
            if (response.status == 'success') {
                this.status = response.status;
            }
        }, error => {
            console.log(error);
        });
    }
    getCategories() {
        this._categoryService.getCategories().subscribe(response => {
            // console.log(response.categories);
            this.categories = response.categories;
        });
    }
    ImagenUpload(datos) {
        let image_data = JSON.parse(datos.response);
        this.post.image = image_data.nameimage;
    }
};
PostEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PostEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-edit',
        template: _raw_loader_post_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], PostEditComponent);



/***/ }),

/***/ "tTkt":
/*!**************************************************************!*\
  !*** ./src/app/components/post-edit/post-edit.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "tXZI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid my-3\" *ngIf=\"posts\">\n<!-- Cuando la variable post tenga contenido miestre este div -->\n  \n  <h1>{{ page_title }}</h1>\n  <hr>\n\n  <div class=\"card-columns\">\n    <article class=\"card w-100\" *ngFor=\"let post of posts\">\n      <div class=\"card-header\">\n\n        <h3>\n        <a class=\"\" \n         [routerLink]=\"[ '/entrada',post.id]\" > {{ post.title }}</a> \n        </h3>\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"post-image\" *ngIf=\"post.image; else imagenone\">\n          <img [src]=\"url +'post/image/' + post.image\" [alt]=\"post.title\" class=\"w-100\"/>\n        </div>\n\n        <ng-template class=\"post-image\" #imagenone>\n            <img src=\"assets/images/noimage.png\" alt=\"imagen default\" class=\"w-100\">\n        </ng-template>\n\n\n        <!-- Botones -->\n        <div class=\"post-buttons m-3\">\n          <a [routerLink]=\"[ '/entrada',post.id]\" class=\"mr-2 btn btn-success\">Leer</a>\n          <span *ngIf=\"indentity && indentity.sub == post.user_id\">\n            <a [routerLink]=\"[ '/editar-entrada',post.id]\" class=\"mr-2 btn btn-primary\">Editar</a>\n            <a  class=\"btn btn-danger\" style=\"color: #fff\"\n            data-toggle=\"modal\" [attr.data-target]=\"'#modalborrapost'+post.id\">Borrar</a>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"{{ 'modalborrapost'+ post.id}}\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Borrar Post</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <p>¿ Está seguro que quiere eliminar el post ?<br/></p>\n                  <h5><b>\"{{  post.title }}\"</b></h5>\n                   \n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n                 (click)=\"deletepost(post.id)\">\n                  Borrar Post\n                </button>\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\n              </div>\n            </div>\n          </div>\n        </div>\n    </article>\n\n    \n  </div>\n\n<div class=\"loading\" *ngIf=\"!posts\">\n  Cargando..\n</div>\n\n\n");

/***/ }),

/***/ "vP5Q":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-detail/post-detail.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\" *ngIf=\"post; else loading\">\n  <h1>{{ post.title }}</h1>\n  <hr>\n  \n  <p>\n    {{ post.category.name }} - <a [routerLink]=\"[ '/perfil', post.user.id ]\">\n      {{ post.user.name + \" \" + post.user.surname }}\n    </a>\n  </p>\n  <hr>\n<!-- \n  Pintar HTML sin etiquetas\n  Hay que utilizar una propiedad de Angular llamada [innerHTML]=\"aqui la variable\" -->\n\n  <p [innerHTML]=\"post.content\"></p>\n</div>\n\n<ng-template #loading>\n    <div class=\"col-md-12\">\n      Cargando...\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "woRh":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map