function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Page Wrapper -->\r\n<div id=\"wrapper\">\r\n\r\n  <!-- Sidebar -->\r\n  <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" style=\"position: fixed;\"\r\n    id=\"accordionSidebar\">\r\n\r\n    <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n      <a class=\"nav-link\" href=\"#\" routerLink=\"/\">\r\n        <i class=\"fas fa-fw fa-cogs\"></i>\r\n        <span>Generator</span></a>\r\n    </li>\r\n\r\n    <!-- Divider -->\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <!-- Heading -->\r\n    <div class=\"sidebar-heading\">\r\n      Data\r\n    </div>\r\n\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" href=\"#\"  routerLink=\"/time-slot\">\r\n        <i class=\"fas fa-fw fa-clock\"></i>\r\n        <span>Slot Waktu</span></a>\r\n    </li>\r\n\r\n\r\n\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" href=\"#\" routerLink=\"/lecturer\">\r\n        <i class=\"fas fa-fw fa-chalkboard-teacher\"></i>\r\n        <span>Dosen</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" href=\"#\" routerLink=\"/class\">\r\n        <i class=\"fas fa-fw fa-users\"></i>\r\n        <span>Kelas</span></a>\r\n    </li>\r\n\r\n    <!-- <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">\r\n        <i class=\"fas fa-fw fa-book\"></i>\r\n        <span>Pengampuh</span></a>\r\n    </li> -->\r\n\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" href=\"#\" routerLink=\"/room\">\r\n        <i class=\"fas fa-fw fa-building\"></i>\r\n        <span>Ruangan</span></a>\r\n    </li>\r\n\r\n    <hr class=\"sidebar-divider\">\r\n\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" href=\"#\" routerLink=\"/about\">\r\n        <i class=\"fas fa-fw fa-info\"></i>\r\n        <span>Tentang</span></a>\r\n    </li>\r\n    <!-- <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" href=\"#\" routerLink=\"/about\">\r\n        <i class=\"fas fa-fw fa-comment\"></i>\r\n        <span>Kritik & Saran</span></a>\r\n    </li> -->\r\n  </ul>\r\n  <!-- End of Sidebar -->\r\n\r\n  <!-- Content Wrapper -->\r\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\" style=\"min-height: 100vh;\">\r\n\r\n    <!-- Main Content -->\r\n    <div id=\"content\">\r\n\r\n      <!-- Begin Page Content -->\r\n      <div class=\"container-fluid mt-4\">\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n      </div>\r\n      <!-- /.container-fluid -->\r\n\r\n    </div>\r\n    <!-- End of Main Content -->\r\n\r\n    <!-- Footer -->\r\n    <footer class=\"sticky-footer bg-white py-3\">\r\n      <div class=\"container my-auto\">\r\n        <div class=\"copyright text-right my-auto\">\r\n          <span>SensasiApps | 2019</span>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n    <!-- End of Footer -->\r\n\r\n  </div>\r\n  <!-- End of Content Wrapper -->\r\n\r\n</div>\r\n<!-- End of Page Wrapper -->\r\n\r\n<!-- Scroll to Top Button-->\r\n<a class=\"scroll-to-top rounded\" href=\"#page-top\">\r\n  <i class=\"fas fa-angle-up\"></i>\r\n</a>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n  <h1 class=\"h3 mb-0 text-gray-800\">Sensasi Scheduler</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-lg-8 mb-4\">\r\n    <p>\r\n      Adalah aplikasi penjadwalan kegiatan belajar mengajar\r\n      perkuliahan dengan menggunakan algoritma genetika.\r\n      aplikasi ini menyimpan data secara lokal yang artinya\r\n      semua data yang dimasukkan ke dalam aplikasi ini tidak akan keluar\r\n      dari perangkat anda.\r\n    </p>\r\n  </div>\r\n\r\n  <!-- <div class=\"col-lg-4\">\r\n    <div class=\"card shadow mb-4\">\r\n      <div class=\"card-header py-3\">\r\n        Kritik & Saran\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p>kirimkan kritik dan saran anda untuk pengembangan aplikasi, jika tidak ada kirim terima kasih juga bisa.</p>\r\n        <form>\r\n          <div class=\"form-group\">\r\n              <input name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <input name=\"name\" class=\"form-control\" placeholder=\"Nama\" required>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <textarea name=\"massege\" class=\"form-control\" cols=\"30\" rows=\"10\" placeholder=\"Pesan\" required></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <button class=\"btn btn-secondary\" type=\"submit\">Kirim</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/class/class.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/class/class.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesClassClassComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n\r\n  <div [ngClass]=\"isShowSubjects ? 'col-lg-5' : 'col-lg-12'\">\r\n    <!-- Page Heading -->\r\n    <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n      <h1 class=\"h3 mb-0 text-gray-800\">Daftar Kelas</h1>\r\n    </div>\r\n\r\n    <!-- Basic Card Example -->\r\n    <div class=\"card shadow mb-4\">\r\n      <div class=\"card-header py-3\">\r\n\r\n        <!-- <label for=\"\">Data</label> -->\r\n        <button class=\"btn btn-success btn-circle btn-sm\" (click)=\"initCreate()\"\r\n          data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tambah kelas\">\r\n          <i class=\"fa fa-plus\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"text-center\" *ngIf=\"classes.length === 0\">Silahkan masukkan data kelas</p>\r\n        <table class=\"table table-default table-sm\" *ngIf=\"classes.length !== 0\">\r\n          <thead>\r\n            <tr style=\"border-top: hidden;\">\r\n              <th>Kode</th>\r\n              <th>Nama</th>\r\n              <th>Tingkat</th>\r\n              <th>Program Studi</th>\r\n              <th>Slot Waktu</th>\r\n              <th></th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let class of classes; let i = index\" >\r\n              <td>{{ class.id }}</td>\r\n              <td>{{ class.name }}</td>\r\n              <td>{{ class.grade }}</td>\r\n              <td>{{ class.studyProgram }}</td>\r\n              <td>{{ class.timeSlotId }}</td>\r\n              <td>\r\n                <div class=\"dropdown no-arrow\">\r\n                  <button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <button class=\"dropdown-item\" (click)=\"initUpdate(i)\">\r\n                      <div class=\"float-right\">\r\n                        <i class=\"fa fa-pen\"></i>\r\n                      </div> Ubah\r\n                    </button>\r\n                    <button class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"initDelete(i)\">\r\n                      <div class=\"float-right\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </div> Hapus\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <button class=\"btn btn-link\" (click)=\"viewSubjects(i)\">\r\n                  <i class=\"fa fa-book\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-lg-7\" [class.d-none]=\"!isShowSubjects\">\r\n    <!-- Page Heading -->\r\n    <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n      <h1 class=\"h3 mb-0 text-gray-800\">Mata Kuliah {{ model.id }}</h1>\r\n    </div>\r\n\r\n    <!-- Basic Card Example -->\r\n    <div class=\"card shadow mb-4\">\r\n      <div class=\"card-header py-3\">\r\n        <button class=\"btn btn-success btn-circle btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n          title=\"Tambah mata kuliah\" (click)=\"initCreateSubject()\">\r\n          <i class=\"fa fa-plus\"></i>\r\n        </button>\r\n        <button class=\"btn btn-primary btn-circle btn-sm ml-2\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n          title=\"Salin mata kuliah\" (click)=\"initCopySubjects()\">\r\n          <i class=\"fa fa-copy\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"text-center\" *ngIf=\"model.subjects && model.subjects.length === 0\">Silahkan masukkan data mata kuliah</p>\r\n        <table class=\"table table-default table-sm\" *ngIf=\"model.subjects && model.subjects.length !== 0\">\r\n          <thead>\r\n            <tr style=\"border-top: hidden;\">\r\n              <th>Nama</th>\r\n              <th>Jenis</th>\r\n              <th>Pengampu 1</th>\r\n              <th>Pengampu 2</th>\r\n              <th>Durasi</th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let subject of model.subjects; let i = index\">\r\n              <td>{{ subject.name }}</td>\r\n              <td>{{ subject.type }}</td>\r\n              <td>{{ subject.lecturer1Id }}</td>\r\n              <td>{{ subject.lecturer2Id }}</td>\r\n              <td>{{ subject.duration }}</td>\r\n\r\n              <td>\r\n                <div class=\"dropdown no-arrow\">\r\n                  <button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <button class=\"dropdown-item\" (click)=\"initUpdateSubject(i)\">\r\n                      <div class=\"float-right\">\r\n                        <i class=\"fa fa-pen\"></i>\r\n                      </div> Ubah\r\n                    </button>\r\n                    <button class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"initDeleteSubject(i)\">\r\n                      <div class=\"float-right\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </div> Hapus\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n\r\n          <tfoot>\r\n            <tr>\r\n              <th colspan=\"4\">Total</th>\r\n              <th>{{ model.getSumSubjectsDuration() }}</th>\r\n              <th></th>\r\n            </tr>\r\n          </tfoot>\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Class Form Modal-->\r\n<div class=\"modal fade\" id=\"classFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form #classForm=\"ngForm\" (ngSubmit)=\"classForm.form.valid && storeClass(classForm)\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"modalTitle\">\r\n            {{ storeMode == 'update' ? 'Ubah ' + classes[workingIndex].name : 'Tambah kelas' }}\r\n          </h5>\r\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <div class=\"form-group\">\r\n            <input name=\"id\" class=\"form-control\" placeholder=\"Kode kelas\" required #id=\"ngModel\" [(ngModel)]=\"model.id\"\r\n              [ngClass]=\"{ 'is-invalid': classForm.submitted && id.invalid }\" />\r\n\r\n            <div *ngIf=\"classForm.submitted && id.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"id.errors['required']\">\r\n                mohon masukkan kode kelas\r\n              </div>\r\n\r\n              <div *ngIf=\"id.errors['unique']\">\r\n                data <strong>{{ id.value }}</strong> sudah ada\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input name=\"name\" class=\"form-control\" placeholder=\"Nama kelas\" required #name=\"ngModel\"\r\n              [(ngModel)]=\"model.name\" [ngClass]=\"{ 'is-invalid': classForm.submitted && name.invalid }\" />\r\n\r\n            <div *ngIf=\"classForm.submitted && name.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"name.errors['required']\">\r\n                mohon masukkan nama kelas\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input name=\"grade\" class=\"form-control\" placeholder=\"Tingkat\" required #grade=\"ngModel\"\r\n              [(ngModel)]=\"model.grade\" [ngClass]=\"{ 'is-invalid': classForm.submitted && grade.invalid }\" />\r\n\r\n            <div *ngIf=\"classForm.submitted && grade.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"grade.errors['required']\">\r\n                mohon masukkan tingkat\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input name=\"studyProgram\" class=\"form-control\" placeholder=\"Program Studi\" required #studyProgram=\"ngModel\"\r\n              [(ngModel)]=\"model.studyProgram\" [ngClass]=\"{ 'is-invalid': classForm.submitted && studyProgram.invalid }\" />\r\n\r\n            <div *ngIf=\"classForm.submitted && studyProgram.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"studyProgram.errors['required']\">\r\n                mohon masukkan program studi\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <select name=\"timeSlotId\" class=\"form-control\" required\r\n            #timeSlotId=\"ngModel\" [(ngModel)]=\"model.timeSlotId\" [ngClass]=\"{ 'is-invalid': classForm.submitted && timeSlotId.invalid }\">\r\n              <option value=\"undefined\" hidden>Slot Waktu</option>\r\n              <option value=\"null\" hidden>Slot Waktu</option>\r\n              <option *ngFor=\"let timeSlot of timeSlots;\">{{ timeSlot.id }}</option>\r\n            </select>\r\n\r\n            <div *ngIf=\"classForm.submitted && timeSlotId.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"timeSlotId.errors['required']\">\r\n                mohon masukkan slot waktu kelas\r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n          <button class=\"btn btn-success btn-sm\" type=\"submit\">Simpan</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"classDeleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-body text-center\">\r\n        <small>Apa anda yakin ingin menghapus data</small>\r\n        <h4><strong>{{ model.id }}</strong></h4>\r\n        <small class=\"text-danger mt-4\">*data yang telah terhapus tidak dapat dikembalikan</small>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n        <button class=\"btn btn-danger btn-sm\" type=\"button\" (click)=\"deleteClass()\">Hapus</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- /Class Form Modal-->\r\n\r\n\r\n\r\n\r\n<!-- Subject Form Modal-->\r\n<div class=\"modal fade\" id=\"subjectFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form #subjectForm=\"ngForm\" (ngSubmit)=\"subjectForm.form.valid && storeSubject(subjectForm)\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"modalTitle\">\r\n            {{ storeMode == 'update' ? 'Ubah ' + subjectModel.name : 'Tambah mata kuliah' }}\r\n          </h5>\r\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <input name=\"name\" class=\"form-control\" placeholder=\"Nama\" required #name=\"ngModel\"\r\n              [(ngModel)]=\"subjectModel.name\" [ngClass]=\"{ 'is-invalid': subjectForm.submitted && name.invalid }\" />\r\n\r\n            <div *ngIf=\"subjectForm.submitted && name.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"name.errors['required']\">\r\n                mohon masukkan nama mata kuliah\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <select name=\"type\" class=\"form-control\" required\r\n            #type=\"ngModel\" [(ngModel)]=\"subjectModel.type\" [ngClass]=\"{ 'is-invalid': subjectForm.submitted && type.invalid }\">\r\n              <option value=\"undefined\" hidden disabled>Jenis</option>\r\n              <option>Teori</option>\r\n              <option>Praktik</option>\r\n            </select>\r\n\r\n            <div *ngIf=\"subjectForm.submitted && type.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"type.errors['required']\">\r\n                mohon masukkan jenis mata kuliah\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input name=\"duration\" type=\"number\" min=\"1\" class=\"form-control\" placeholder=\"Durasi\" required #duration=\"ngModel\"\r\n              [(ngModel)]=\"subjectModel.duration\" [ngClass]=\"{ 'is-invalid': subjectForm.submitted && duration.invalid }\" />\r\n\r\n            <div *ngIf=\"subjectForm.submitted && duration.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"duration.errors['required']\">\r\n                mohon masukkan durasi\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <ng-select2 name=\"lecturer1Id\" required\r\n              [options]=\"{theme: 'bootstrap4'}\"\r\n              [data]=\"select2LecturerOptions\"\r\n              [(ngModel)]=\"subjectModel.lecturer1Id\"\r\n              #lecturer1Id=\"ngModel\"\r\n              [placeholder]=\"'Pengampu 1'\"\r\n              [ngClass]=\"{ 'is-invalid': subjectForm.submitted && lecturer1Id.invalid }\">\r\n            </ng-select2>\r\n\r\n            <div *ngIf=\"subjectForm.submitted && lecturer1Id.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"lecturer1Id.errors['required']\">\r\n                mohon masukkan pengampu mata kuliah\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <ng-select2 name=\"lecturer2Id\"\r\n              [options]=\"{theme: 'bootstrap4'}\"\r\n              [allowClear]=\"true\"\r\n              [data]=\"select2LecturerOptions\"\r\n              [(ngModel)]=\"subjectModel.lecturer2Id\"\r\n              #lecturer2Id=\"ngModel\"\r\n              [placeholder]=\"'Pengampu 2'\"\r\n              [ngClass]=\"{ 'is-invalid': subjectForm.submitted && lecturer2Id.invalid }\">\r\n            </ng-select2>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n          <button class=\"btn btn-success btn-sm\" type=\"submit\">Simpan</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"subjectDeleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-body text-center\">\r\n        <small>Apa anda yakin ingin menghapus data</small>\r\n        <h4><strong>{{ subjectModel.name }}</strong></h4>\r\n        <small class=\"text-danger mt-4\">*data yang telah terhapus tidak dapat dikembalikan</small>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n        <button class=\"btn btn-danger btn-sm\" type=\"button\" (click)=\"deleteSubject()\">Hapus</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"subjectsCopyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-body text-center\">\r\n        <small>Salin mata kuliah & pengampu <strong>{{ model.id }}</strong> dari kelas:</small>\r\n        <div class=\"form-group\">\r\n          <ng-select2 required #classCopyIndex\r\n            [options]=\"{theme: 'bootstrap4'}\"\r\n            [data]=\"select2ClassOptions\"\r\n            [placeholder]=\"'Pilih kelas'\">\r\n          </ng-select2>\r\n        </div>\r\n\r\n        <!-- <h4><strong>{{ model.id }}</strong></h4> -->\r\n        <small class=\"text-danger mt-4\">*menyalin data akan menimpa data <strong>{{ model.id }}</strong> yang telah ada</small>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n        <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"copySubjects(classCopyIndex.element[0].value)\">Salin</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- /Subject Form Modal-->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/generator/generator.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/generator/generator.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGeneratorGeneratorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<div class=\"d-flex align-items-center bd-highlight mb-4\">\r\n  <div class=\"p-0 flex-grow-1 bd-highlight\">\r\n    <h1 class=\"h3 mb-0 text-gray-800\">Ringkasan</h1>\r\n  </div>\r\n  <div class=\"p-2 bd-highlight\" *ngIf=\"dataClass.isEmptyData()\">\r\n    <input id=\"jsonfile\" type=\"file\" accept=\".json\" (change)=\"onChangeFile($event)\" style=\"display: none;\">\r\n    <button class=\"d-none d-sm-inline-block btn btn-sm btn-success shadow-sm\" (click)=\"uploadBtnClick()\">\r\n      <i class=\"fas fa-upload fa-sm text-white-50\"></i> Unggah Data\r\n    </button>\r\n  </div>\r\n  <div class=\"p-2 bd-highlight\" *ngIf=\"!dataClass.isEmptyData()\">\r\n    <button (click)=\"downloadData()\" class=\"d-none d-sm-inline-block btn btn-sm btn-success shadow-sm\">\r\n      <i class=\"fas fa-download fa-sm text-white-50\"></i> Unduh Data\r\n    </button>\r\n  </div>\r\n  <div class=\"p-2 bd-highlight\" *ngIf=\"!dataClass.isEmptyData()\">\r\n    <button data-toggle=\"modal\" data-target=\"#wipeDataModal\"\r\n      class=\"d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm\">\r\n      <i class=\"fas fa-trash fa-sm text-white-50\"></i> Hapus Data\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-8\">\r\n    <div class=\"row\">\r\n      <!-- lecturers overview -->\r\n      <div class=\"col-xl-4 col-md-6 mb-4\">\r\n        <div class=\"card border-left-primary shadow h-100 py-2\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row no-gutters align-items-center\">\r\n              <div class=\"col mr-2\">\r\n                <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Dosen</div>\r\n                <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{ data.lecturers.length }}</div>\r\n              </div>\r\n              <div class=\"col-auto\">\r\n                <i class=\"fas fa-chalkboard-teacher fa-2x text-gray-300\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- classes overview -->\r\n      <div class=\"col-xl-4 col-md-6 mb-4\">\r\n        <div class=\"card border-left-primary shadow h-100 py-2\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row no-gutters align-items-center\">\r\n              <div class=\"col mr-2\">\r\n                <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Kelas</div>\r\n                <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{ data.classes.length }}</div>\r\n              </div>\r\n              <div class=\"col-auto\">\r\n                <i class=\"fas fa-chalkboard-teacher fa-2x text-gray-300\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- classroom overview -->\r\n      <div class=\"col-xl-4 col-md-6 mb-4\">\r\n        <div class=\"card border-left-primary shadow h-100 py-2\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row no-gutters align-items-center\">\r\n              <div class=\"col mr-2\">\r\n                <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Ruangan</div>\r\n                <div class=\"h5 mb-0 font-weight-bold text-gray-800\">{{ data.rooms.length }}</div>\r\n              </div>\r\n              <div class=\"col-auto\">\r\n                <i class=\"fas fa-building fa-2x text-gray-300\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"col-lg-4\">\r\n    <div class=\"card shadow mb-4\">\r\n      <div class=\"card-header py-3\">\r\n        <h6 class=\"m-0 font-weight-bold text-primary\">Analisa</h6>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <table class=\"table table-sm\">\r\n          <tr style=\"border-top: hidden;\">\r\n            <td>Kapasitas</td>\r\n            <td>389</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Beban</td>\r\n            <td>12397</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Kesalahan</td>\r\n            <td>\r\n              <ul>\r\n                <li>beban lebih besar dari kapasitas</li>\r\n                <li>beban dosen lebih besar dari jumlah slot</li>\r\n                <li>beban dosen lebih besar dari jumlah slot</li>\r\n              </ul>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n  <div class=\"col-lg-4\">\r\n    <div class=\"card shadow mb-4\">\r\n      <div class=\"card-header py-3\">\r\n        <h6 class=\"m-0 font-weight-bold text-primary\">Program</h6>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"mb-4\">\r\n          <!-- <div class=\"form-group\">\r\n            <label>Jumlah Individu</label>\r\n            <input type=\"number\" min=\"1\" class=\"form-control input-sm\" [disabled]=\"isRunning\"/>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Tingkat Mutasi</label>\r\n            <input type=\"number\" min=\"1\" class=\"form-control input-lg\" [disabled]=\"isRunning\"/>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Tingkat Persilangan</label>\r\n            <input type=\"number\" min=\"1\" class=\"form-control input-lg\" [disabled]=\"isRunning\"/>\r\n          </div> -->\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"timeSlotId\">Slot Waktu</label>\r\n            <select name=\"timeSlotId\" id=\"timeSlotId\" class=\"form-control\" [disabled]=\"isRunning\" [(ngModel)]=\"timeSlotIndex\">\r\n            <option *ngFor=\"let timeslot of data.timeSlots; let i = index\" value=\"{{i}}\">{{ timeslot.id }}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <!-- <div class=\"form-group\">\r\n            <button class=\"btn btn-sm btn-secondary\">Acak pengaturan</button>\r\n          </div> -->\r\n        </div>\r\n\r\n\r\n        <table class=\"table table-default table-sm\">\r\n          <tr style=\"border-top: hidden;\">\r\n            <td>Populasi ke</td>\r\n            <td>{{ nPopulation }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Generasi ke</td>\r\n            <td>{{ generation }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Stagnan</td>\r\n            <td>{{ stagnant }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Bentrok</td>\r\n            <td>{{ Individual == null ? '...' : Individual.getFitness() }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Waktu</td>\r\n            <!-- <td>{{ timerDisp }}</td> -->\r\n          </tr>\r\n          <tr>\r\n            <td>status</td>\r\n            <td *ngIf=\"isRunning\">\r\n              memproses <i class=\"fa fa-cog fa-spin\"></i>\r\n            </td>\r\n            <td *ngIf=\"!isRunning && !isCompleted\">\r\n              ...\r\n            </td>\r\n            <td *ngIf=\"!isRunning && isCompleted\">\r\n              selesai\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <div style=\"display: flex;\" class=\"align-items-center justify-content-between mb-4\">\r\n\r\n          <button class=\"d-sm-inline-block btn btn-sm btn-primary shadow-sm btn-icon-split\"\r\n            (click)=\"Individual == null ? start() : resume()\" *ngIf=\"!isRunning && !isCompleted\">\r\n            <span class=\"icon text-white-50\">\r\n              <i class=\"fas fa-play\"></i>\r\n            </span>\r\n            <span class=\"text\">{{ Individual == null ? 'Mulai Program' : 'Lanjutkan Proses' }}</span>\r\n          </button>\r\n\r\n          <button class=\"d-sm-inline-block btn btn-sm btn-warning shadow-sm btn-icon-split\" (click)=\"reset()\"\r\n            *ngIf=\"!isRunning && Individual != null\">\r\n            <span class=\"icon text-white-50\">\r\n              <i class=\"fas fa-undo\"></i>\r\n            </span>\r\n            <span class=\"text\">Mulai Ulang</span>\r\n          </button>\r\n\r\n          <button *ngIf=\"isRunning\" class=\"d-sm-inline-block btn btn-sm btn-secondary shadow-sm btn-icon-split\"\r\n            (click)=\"stop()\">\r\n            <span class=\"icon text-white-50\">\r\n              <i class=\"fas fa-pause\"></i>\r\n            </span>\r\n            <span class=\"text\">Berhenti</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"d-sm-flex align-items-center justify-content-between my-4\">\r\n  <h1 class=\"h3 mb-0 text-gray-800\">Generator</h1>\r\n</div>\r\n\r\n<!-- <div class=\"row\"> -->\r\n  <!-- <div class=\"col-lg-12\"> -->\r\n    <div class=\"card shadow mb-4\" *ngIf=\"!isRunning\">\r\n      <div class=\"card-header py-3\">\r\n        <h6 class=\"m-0 font-weight-bold text-primary\">Hasil</h6>\r\n      </div>\r\n      <div class=\"card-body\" style=\"overflow-x: scroll;\">\r\n        <p class=\"text-center\" *ngIf=\"Individual == null\">klik mulai program untuk melihat hasil</p>\r\n        <table class=\"table table-default table-bordered table-sm\" style=\"white-space: nowrap;\" *ngIf=\"Individual != null\">\r\n          <thead>\r\n            <tr>\r\n              <th rowspan=\"2\">Hari</th>\r\n              <th rowspan=\"2\">Jam</th>\r\n              <th colspan=\"3\" *ngFor=\"let classObj of data.timeSlots[timeSlotIndex].classes\">{{ classObj.id }}</th>\r\n\r\n\r\n            </tr>\r\n            <tr>\r\n              <ng-container *ngFor=\"let classObj of data.timeSlots[timeSlotIndex].classes\">\r\n              <th>Mata Kuliah</th>\r\n              <th>Ruangan</th>\r\n              <th>Dosen</th>\r\n            </ng-container>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let row of chromosomeToTable(); let i = index\">\r\n            <td [attr.rowspan]=\"data.timeSlots[timeSlotIndex].nSlotDay\" *ngIf=\"i % data.timeSlots[timeSlotIndex].nSlotDay == 0\">{{ data.timeSlots[timeSlotIndex].getDayName(i) }}</td>\r\n              <td>{{ data.timeSlots[timeSlotIndex].getTime(i) }}</td>\r\n              <ng-container *ngFor=\"let choromosome of row; let j = index\">\r\n                <td [attr.rowspan]=\"choromosome.durasi\" *ngIf=\"choromosome != undefined && choromosome != 'filled'\" [class.table-danger]=\"choromosome.error\">{{ choromosome.matkul }}</td>\r\n                <td [attr.rowspan]=\"choromosome.durasi\" *ngIf=\"choromosome != undefined && choromosome != 'filled'\" [class.table-danger]=\"choromosome.error\">{{ data.rooms[choromosome.ruang].name }}</td>\r\n                <td [attr.rowspan]=\"choromosome.durasi\" *ngIf=\"choromosome != undefined && choromosome != 'filled'\" [class.table-danger]=\"choromosome.error\">{{ choromosome.dosen1 }}{{ choromosome.dosen2 ? '/' + choromosome.dosen2 : null }}</td>\r\n                <td *ngIf=\"choromosome == undefined\" colspan=\"3\"></td>\r\n              </ng-container>\r\n            </tr>\r\n          </tbody>\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n  <!-- </div> -->\r\n<!-- </div> -->\r\n\r\n<div class=\"modal fade\" id=\"wipeDataModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"modalTitle\">Apa anda yakin ingin menghapus semua data?</h5>\r\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body text-center\">\r\n        <!-- <h4><strong>Apa anda yakin ingin menghapus semua data?</strong></h4> -->\r\n        <p>pastikan anda mengunduh data terlebih dahulu sebelum menghapusnya untuk digunakan dikemudian hari</p>\r\n        <p class=\"text-danger\">*data yang telah terhapus tidak dapat dikembalikan</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n\r\n        <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n        <button class=\"btn btn-danger btn-sm\" type=\"button\" (click)=\"wipeLocalData()\">Hapus</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"replaceDataConfirmationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"modalTitle\">Apa anda yakin ingin memuat data?</h5>\r\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body text-center\">\r\n        <p class=\"text-danger\">*data baru yang akan dimuat akan menggantikan data yang terdapat pada aplikasi sekarang\r\n        </p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n\r\n        <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n        <button class=\"btn btn-danger btn-sm\" type=\"button\" (click)=\"jsonProccess($event)\">Muat Saja</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lecturer/lecturer.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lecturer/lecturer.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLecturerLecturerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n  <h1 class=\"h3 mb-0 text-gray-800\">Daftar Dosen</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-lg-12\">\r\n    <!-- Basic Card Example -->\r\n    <div class=\"card shadow mb-4\">\r\n      <div class=\"card-header py-3\">\r\n\r\n        <!-- <label for=\"\">Data</label> -->\r\n        <button class=\"btn btn-success btn-circle btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n          title=\"Tambah dosen\" (click)=\"initCreate()\">\r\n          <i class=\"fa fa-plus\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"text-center\" *ngIf=\"lecturers.length === 0\">Silahkan masukkan data dosen</p>\r\n        <table class=\"table table-default table-sm\" *ngIf=\"lecturers.length !== 0\">\r\n          <thead>\r\n            <tr style=\"border-top: hidden;\">\r\n              <th>Kode</th>\r\n              <th>Nama</th>\r\n              <th>Total jam</th>\r\n              <th>Aksi</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let lecturer of lecturers; let i = index\">\r\n              <td>{{ lecturer.id }}</td>\r\n              <td>{{ lecturer.name }}</td>\r\n              <td>{{ lecturer.getSumDuration() }}</td>\r\n              <td>\r\n                <div class=\"dropdown no-arrow\">\r\n                  <button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <button class=\"dropdown-item\" (click)=\"initUpdate(i)\">\r\n                      <div class=\"float-right\">\r\n                        <i class=\"fa fa-pen\"></i>\r\n                      </div> Ubah\r\n                    </button>\r\n                    <button class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"initDelete(i)\">\r\n                      <div class=\"float-right\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </div> Hapus\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Lecturer Form Modal-->\r\n<div class=\"modal fade\" id=\"lecturerFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form #lecturerForm=\"ngForm\" (ngSubmit)=\"lecturerForm.form.valid && storeLecturer(lecturerForm)\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"modalTitle\">\r\n            {{ storeMode == 'update' ? 'Ubah ' + lecturers[workingIndex].name : 'Tambah dosen' }}\r\n          </h5>\r\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <div class=\"form-group\">\r\n            <input name=\"id\" class=\"form-control\" placeholder=\"Kode Dosen\" required #id=\"ngModel\" [(ngModel)]=\"model.id\"\r\n              [ngClass]=\"{ 'is-invalid': lecturerForm.submitted && id.invalid }\" />\r\n\r\n            <div *ngIf=\"lecturerForm.submitted && id.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"id.errors['required']\">\r\n                mohon masukkan kode dosen\r\n              </div>\r\n\r\n              <div *ngIf=\"id.errors['unique']\">\r\n                data <strong>{{ id.value }}</strong> sudah ada\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input name=\"name\" class=\"form-control\" placeholder=\"Nama\" required #name=\"ngModel\" [(ngModel)]=\"model.name\"\r\n              [ngClass]=\"{ 'is-invalid': lecturerForm.submitted && name.invalid }\" />\r\n\r\n            <div *ngIf=\"lecturerForm.submitted && name.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"name.errors['required']\">\r\n                mohon masukkan nama\r\n              </div>\r\n\r\n              <div *ngIf=\"name.errors['unique']\">\r\n                data <strong>{{ name.value }}</strong> sudah ada\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n          <button class=\"btn btn-success btn-sm\" type=\"submit\">Simpan</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"lecturerDeleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-body text-center\">\r\n        <small>Apa anda yakin ingin menghapus data</small>\r\n        <h4><strong>{{ model.id }}</strong></h4>\r\n        <small class=\"text-danger mt-4\">*data yang telah terhapus tidak dapat dikembalikan</small>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n        <button class=\"btn btn-danger btn-sm\" type=\"button\" (click)=\"deleteLecturer()\">Hapus</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/room/room.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/room/room.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRoomRoomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n  <h1 class=\"h3 mb-0 text-gray-800\">Daftar Ruangan</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col-lg-12\">\r\n    <!-- Basic Card Example -->\r\n    <div class=\"card shadow mb-4\">\r\n      <div class=\"card-header py-3\">\r\n\r\n        <!-- <label for=\"\">Data</label> -->\r\n        <button class=\"btn btn-success btn-circle btn-sm\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n          title=\"Tambah ruangan\" (click)=\"initCreate()\">\r\n          <i class=\"fa fa-plus\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"text-center\" *ngIf=\"rooms.length === 0\">Silahkan masukkan data dosen</p>\r\n        <table class=\"table table-default table-sm\" *ngIf=\"rooms.length !== 0\">\r\n          <thead>\r\n            <tr style=\"border-top: hidden;\">\r\n              <th>Kode</th>\r\n              <th>Nama</th>\r\n              <th>Jenis</th>\r\n              <th>Aksi</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let room of rooms; let i = index\">\r\n              <td>{{ room.id }}</td>\r\n              <td>{{ room.name }}</td>\r\n              <td>{{ room.type }}</td>\r\n              <td>\r\n                <div class=\"dropdown no-arrow\">\r\n                  <button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <button class=\"dropdown-item\" (click)=\"initUpdate(i)\">\r\n                      <div class=\"float-right\">\r\n                        <i class=\"fa fa-pen\"></i>\r\n                      </div> Ubah\r\n                    </button>\r\n                    <button class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"initDelete(i)\">\r\n                      <div class=\"float-right\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </div> Hapus\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Lecturer Form Modal-->\r\n<div class=\"modal fade\" id=\"roomFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form #roomForm=\"ngForm\" (ngSubmit)=\"roomForm.form.valid && storeRoom(roomForm)\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"modalTitle\">\r\n            {{ storeMode == 'update' ? 'Ubah ' + rooms[workingIndex].name : 'Tambah ruangan' }}\r\n          </h5>\r\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <div class=\"form-group\">\r\n            <input name=\"id\" class=\"form-control\" placeholder=\"Kode ruangan\" required #id=\"ngModel\" [(ngModel)]=\"model.id\"\r\n              [ngClass]=\"{ 'is-invalid': roomForm.submitted && id.invalid }\" />\r\n\r\n            <div *ngIf=\"roomForm.submitted && id.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"id.errors['required']\">\r\n                mohon masukkan kode ruangan\r\n              </div>\r\n\r\n              <div *ngIf=\"id.errors['unique']\">\r\n                data <strong>{{ id.value }}</strong> sudah ada\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input name=\"name\" class=\"form-control\" placeholder=\"Nama\" required #name=\"ngModel\" [(ngModel)]=\"model.name\"\r\n              [ngClass]=\"{ 'is-invalid': roomForm.submitted && name.invalid }\" />\r\n\r\n            <div *ngIf=\"roomForm.submitted && name.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"name.errors['required']\">\r\n                mohon masukkan nama\r\n              </div>\r\n\r\n              <div *ngIf=\"name.errors['unique']\">\r\n                data <strong>{{ name.value }}</strong> sudah ada\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <select name=\"_type\" class=\"form-control\" required\r\n              #_type=\"ngModel\" [(ngModel)]=\"model._type\" [ngClass]=\"{ 'is-invalid': roomForm.submitted && _type.invalid }\">\r\n            <option value=\"undefined\" hidden disabled>Jenis</option>\r\n            <option *ngFor=\"let type of RoomClass.types; let i = index\" value=\"{{ i }}\">{{ type }}</option>\r\n            </select>\r\n\r\n            <div *ngIf=\"roomForm.submitted && _type.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"_type.errors['required']\">\r\n                mohon masukkan jenis ruangan\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n          <button class=\"btn btn-success btn-sm\" type=\"submit\">Simpan</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"roomDeleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-body text-center\">\r\n        <small>Apa anda yakin ingin menghapus data</small>\r\n        <h4><strong>{{ model.id }}</strong></h4>\r\n        <small class=\"text-danger mt-4\">*data yang telah terhapus tidak dapat dikembalikan</small>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n        <button class=\"btn btn-danger btn-sm\" type=\"button\" (click)=\"deleteRoom()\">Hapus</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/time-slot/time-slot.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/time-slot/time-slot.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTimeSlotTimeSlotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Page Heading -->\r\n<div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n  <h1 class=\"h3 mb-0 text-gray-800\">Slot Waktu</h1>\r\n</div>\r\n\r\n<!-- <div class=\"row\"> -->\r\n\r\n  <!-- <div class=\"col-sm-12\"> -->\r\n    <!-- Basic Card Example -->\r\n    <div class=\"card shadow mb-4\" id=\"timeSlotCardList\">\r\n      <div class=\"card-header py-3\">\r\n\r\n        <!-- <label for=\"\">Data</label> -->\r\n        <button class=\"btn btn-success btn-circle btn-sm\" (click)=\"initCreate()\" data-toggle=\"tooltip\"\r\n          data-placement=\"top\" title=\"Tambah slot waktu\">\r\n          <i class=\"fa fa-plus\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"text-center\" *ngIf=\"timeSlots.length === 0\">Silahkan tambahkan data slot waktu</p>\r\n        <table class=\"table table-default table-sm\" *ngIf=\"timeSlots.length !== 0\">\r\n          <thead>\r\n            <tr style=\"border-top: hidden;\">\r\n              <th>Kode</th>\r\n              <th>Nama</th>\r\n              <th>Total Slot</th>\r\n              <th>Pukul mulai</th>\r\n              <th>Menit / Slot</th>\r\n              <th>Pukul Istirahat</th>\r\n              <th>Durasi Istirahat</th>\r\n              <th></th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let timeSlot of timeSlots; let i = index\">\r\n              <td>{{ timeSlot.id }}</td>\r\n              <td>{{ timeSlot.name }}</td>\r\n              <td>{{ timeSlot.getSumNSlot() }}</td>\r\n              <td>{{ timeSlot.startTime }}</td>\r\n              <td>{{ timeSlot.slotDuration }}</td>\r\n              <td>{{ timeSlot.breakTime }}</td>\r\n              <td>{{ timeSlot.breakDuration }}</td>\r\n              <td>\r\n                <div class=\"dropdown no-arrow\">\r\n                  <button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </button>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <button class=\"dropdown-item\" (click)=\"initUpdate(i)\">\r\n                      <div class=\"float-right\">\r\n                        <i class=\"fa fa-pen\"></i>\r\n                      </div> Ubah\r\n                    </button>\r\n                    <button class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"initDelete(i)\">\r\n                      <div class=\"float-right\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </div> Hapus\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <button class=\"btn btn-link\" (click)=\"viewDays(i)\">\r\n                  <i class=\"fa fa-cog\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n  <!-- </div> -->\r\n\r\n  <!-- <div class=\"col-lg-12\" style=\"transition-delay: 0.5s;\" [ngClass]=\"isShowDays ? null : 'fade'\"> -->\r\n    <!-- <div class=\"d-sm-flex align-items-center justify-content-between mb-4\"> -->\r\n      <!-- <h1 class=\"h3 mb-0 text-gray-800\">Pengaturan {{ model.id }}</h1> -->\r\n    <!-- </div> -->\r\n\r\n    <div class=\"card shadow mb-4 fade d-none\" id=\"timeSlotCardSetting\">\r\n      <div class=\"card-header py-3 d-sm-flex align-items-center justify-content-between\">\r\n        <h6 class=\"m-0 font-weight-bold text-primary\">Pengaturan {{ model.id }}</h6>\r\n        <button class=\"btn btn-link btn-sm py-0\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n          title=\"Tutup pengaturan\" (click)=\"hideDays()\">\r\n          <i class=\"fa fa-times\"></i>\r\n        </button>\r\n      </div>\r\n      <form #settingForm=\"ngForm\" (ngSubmit)=\"storeTimeSlotSetting(settingForm)\">\r\n      <div class=\"card-body\">\r\n\r\n          <div class=\"form-group row\">\r\n            <label for=\"nSlotDay\" class=\"col-sm-4 col-form-label\">Jumlah Slot/Hari: </label>\r\n            <div class=\"col-sm-8\">\r\n              <input name=\"nSlotDay\" id=\"nSlotDay\" type=\"number\" min=\"1\" class=\"form-control\"\r\n                placeholder=\"Jumlah slot per hari\" required #nSlotDay=\"ngModel\" [(ngModel)]=\"model.nSlotDay\"\r\n                [ngClass]=\"{ 'is-invalid': classForm.submitted && nSlotDay.invalid }\" />\r\n            </div>\r\n            <div *ngIf=\"classForm.submitted && nSlotDay.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"nSlotDay.errors['required']\">\r\n                mohon masukkan jumlah slot per hari\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label for=\"startTime\" class=\"col-sm-4 col-form-label\">Pukul mulai: </label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"time\" name=\"startTime\" id=\"startTime\" #startTime=\"ngModel\" class=\"form-control\" required\r\n                [(ngModel)]=\"model.startTime\" [ngClass]=\"{ 'is-invalid': settingForm.submitted && startTime.invalid }\">\r\n              <div *ngIf=\"settingForm.submitted && startTime.invalid\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"startTime.errors['required']\">\r\n                  mohon masukkan pukul mulai\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label for=\"slotDuration\" class=\"col-sm-4 col-form-label\">Durasi/Slot: </label>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"input-group\">\r\n                <input name=\"slotDuration\" id=\"slotDuration\" type=\"number\" min=\"1\" class=\"form-control\"\r\n                  placeholder=\"Durasi slot (dalam menit)\" required #slotDuration=\"ngModel\"\r\n                  [(ngModel)]=\"model.slotDuration\"\r\n                  [ngClass]=\"{ 'is-invalid': settingForm.submitted && slotDuration.invalid }\" />\r\n\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"input-group-text\" id=\"slotDurationSuffix\">Menit</span>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"settingForm.submitted && slotDuration.invalid\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"slotDuration.errors['required']\">\r\n                  mohon masukkan durasi per slot dalam menit\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <label for=\"breakAfter\" class=\"col-sm-4 col-form-label\">Pukul istirahat: </label>\r\n            <div class=\"col-sm-8\">\r\n              <select class=\"form-control\" name=\"_breakAt\" id=\"_breakAt\" #_breakAt=\"ngModel\"\r\n                [(ngModel)]=\"model._breakAt\" [ngClass]=\"{ 'is-invalid': settingForm.submitted && _breakAt.invalid }\">\r\n                <option></option>\r\n                <option *ngFor=\"let option of getBreakOptions()\" value=\"{{ timeSlotClass.timeToMin(option.text) }}\">{{ option.text }}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label for=\"breakDuration\" class=\"col-sm-4 col-form-label\">Durasi istirahat: </label>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"input-group\">\r\n                <input name=\"breakDuration\" id=\"breakDuration\" type=\"number\" min=\"1\" class=\"form-control\"\r\n                  placeholder=\"Durasi istirahat\" aria-label=\"Durasi istirahat\" aria-describedby=\"breakDurationSuffix\"\r\n                  #breakDuration=\"ngModel\" [(ngModel)]=\"model.breakDuration\"\r\n                  [ngClass]=\"{ 'is-invalid': settingForm.submitted && breakDuration.invalid }\" />\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"input-group-text\" id=\"breakDurationSuffix\">Menit</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <h6 class=\"mt-4 pt-4\">klik centang pada slot waktu yang aktif:</h6>\r\n          <table class=\"table table-default table-sm text-center\">\r\n            <thead>\r\n              <tr>\r\n                <th>Pukul</th>\r\n                <th *ngFor=\"let name of timeSlotClass.daysName\">{{ name }}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let row of getTimeSlotsInput(); let i = index\">\r\n                <ng-template *ngIf=\"row.length == 1; then break; else basic\"></ng-template>\r\n\r\n                <ng-template #break>\r\n                  <td>{{ row[0] }}</td>\r\n                  <td colspan=\"7\">Istirahat</td>\r\n                </ng-template>\r\n\r\n\r\n                <ng-template #basic>\r\n                  <!-- <td *ngFor=\"let col of row; let j = index\"> -->\r\n                    <!-- <input (change)=\"toggleActive(i, j)\" type=\"checkbox\"  [checked]=\"col\" *ngIf=\"j != 0; else time\"> -->\r\n                    <!-- <ng-template #time>{{ col }}</ng-template> -->\r\n                  <!-- </td> -->\r\n                  <td>{{ row[0] }}</td>\r\n                  <td>\r\n                    <input type=\"text\" (change)=\"toggleActive(i, 1)\" type=\"checkbox\" [checked]=\"row[1]\">\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" (change)=\"toggleActive(i, 2)\" type=\"checkbox\" [checked]=\"row[2]\">\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" (change)=\"toggleActive(i, 3)\" type=\"checkbox\" [checked]=\"row[3]\">\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" (change)=\"toggleActive(i, 4)\" type=\"checkbox\" [checked]=\"row[4]\">\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" (change)=\"toggleActive(i, 5)\" type=\"checkbox\" [checked]=\"row[5]\">\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" (change)=\"toggleActive(i, 6)\" type=\"checkbox\" [checked]=\"row[6]\">\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" (change)=\"toggleActive(i, 7)\" type=\"checkbox\" [checked]=\"row[7]\">\r\n                  </td>\r\n                </ng-template>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n      </div>\r\n\r\n      <div class=\"card-footer py-3 d-sm-flex align-items-center justify-content-between\">\r\n        <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\" (click)=\"hideDays()\">Batal</button>\r\n          <button class=\"btn btn-success btn-sm\" type=\"submit\">Simpan</button>\r\n      </div>\r\n    </form>\r\n    </div>\r\n\r\n  <!-- </div> -->\r\n<!-- </div> -->\r\n\r\n<!-- Class Form Modal-->\r\n<div class=\"modal fade\" id=\"timeSlotFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form #classForm=\"ngForm\" (ngSubmit)=\"classForm.form.valid && storeTimeSlot(classForm)\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"modalTitle\">\r\n            {{ storeMode == 'update' ? 'Ubah ' + timeSlots[workingIndex].name : 'Tambah kelas' }}\r\n          </h5>\r\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <div class=\"form-group\">\r\n            <input name=\"id\" class=\"form-control\" placeholder=\"Kode slot waktu\" required #id=\"ngModel\"\r\n              [(ngModel)]=\"model.id\" [ngClass]=\"{ 'is-invalid': classForm.submitted && id.invalid }\" />\r\n\r\n            <div *ngIf=\"classForm.submitted && id.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"id.errors['required']\">\r\n                mohon masukkan kode slot waktu\r\n              </div>\r\n\r\n              <div *ngIf=\"id.errors['unique']\">\r\n                data <strong>{{ id.value }}</strong> sudah ada\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input name=\"name\" class=\"form-control\" placeholder=\"Nama slot waktu\" required #name=\"ngModel\"\r\n              [(ngModel)]=\"model.name\" [ngClass]=\"{ 'is-invalid': classForm.submitted && name.invalid }\" />\r\n\r\n            <div *ngIf=\"classForm.submitted && name.invalid\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"name.errors['required']\">\r\n                mohon masukkan nama slot waktu\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n          <button class=\"btn btn-success btn-sm\" type=\"submit\">Simpan</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"timeSlotDeleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalTitle\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-body text-center\">\r\n        <small>Apa anda yakin ingin menghapus data</small>\r\n        <h4><strong>{{ model.id }}</strong></h4>\r\n        <small class=\"text-danger mt-4\">*data yang telah terhapus tidak dapat dikembalikan</small>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-secondary btn-sm\" type=\"button\" data-dismiss=\"modal\">Batal</button>\r\n        <button class=\"btn btn-danger btn-sm\" type=\"button\" (click)=\"deleteTimeSlot()\">Hapus</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- /Class Form Modal-->\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_lecturer_lecturer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/lecturer/lecturer.component */
    "./src/app/pages/lecturer/lecturer.component.ts");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _pages_generator_generator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/generator/generator.component */
    "./src/app/pages/generator/generator.component.ts");
    /* harmony import */


    var _pages_room_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/room/room.component */
    "./src/app/pages/room/room.component.ts");
    /* harmony import */


    var _pages_class_class_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/class/class.component */
    "./src/app/pages/class/class.component.ts");
    /* harmony import */


    var _pages_time_slot_time_slot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/time-slot/time-slot.component */
    "./src/app/pages/time-slot/time-slot.component.ts");

    var routes = [{
      path: '',
      component: _pages_generator_generator_component__WEBPACK_IMPORTED_MODULE_5__["GeneratorComponent"]
    }, {
      path: 'class',
      component: _pages_class_class_component__WEBPACK_IMPORTED_MODULE_7__["ClassComponent"]
    }, {
      path: 'room',
      component: _pages_room_room_component__WEBPACK_IMPORTED_MODULE_6__["RoomComponent"]
    }, {
      path: 'lecturer',
      component: _pages_lecturer_lecturer_component__WEBPACK_IMPORTED_MODULE_3__["LecturerComponent"]
    }, {
      path: 'about',
      component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: 'time-slot',
      component: _pages_time_slot_time_slot_component__WEBPACK_IMPORTED_MODULE_8__["TimeSlotComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'sensasi-scheduler';
    });

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_select2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-select2 */
    "./node_modules/ng-select2/fesm2015/ng-select2.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_lecturer_lecturer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/lecturer/lecturer.component */
    "./src/app/pages/lecturer/lecturer.component.ts");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _pages_generator_generator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/generator/generator.component */
    "./src/app/pages/generator/generator.component.ts");
    /* harmony import */


    var _pages_class_class_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/class/class.component */
    "./src/app/pages/class/class.component.ts");
    /* harmony import */


    var _pages_time_slot_time_slot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/time-slot/time-slot.component */
    "./src/app/pages/time-slot/time-slot.component.ts");
    /* harmony import */


    var _pages_room_room_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/room/room.component */
    "./src/app/pages/room/room.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pages_lecturer_lecturer_component__WEBPACK_IMPORTED_MODULE_7__["LecturerComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _pages_generator_generator_component__WEBPACK_IMPORTED_MODULE_9__["GeneratorComponent"], _pages_room_room_component__WEBPACK_IMPORTED_MODULE_12__["RoomComponent"], _pages_class_class_component__WEBPACK_IMPORTED_MODULE_10__["ClassComponent"], _pages_time_slot_time_slot_component__WEBPACK_IMPORTED_MODULE_11__["TimeSlotComponent"], _pages_room_room_component__WEBPACK_IMPORTED_MODULE_12__["RoomComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_select2__WEBPACK_IMPORTED_MODULE_4__["NgSelect2Module"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/classes/data.ts":
  /*!*********************************!*\
    !*** ./src/app/classes/data.ts ***!
    \*********************************/

  /*! exports provided: Data */

  /***/
  function srcAppClassesDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Data", function () {
      return Data;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_time_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/time-slot */
    "./src/app/models/time-slot.ts");
    /* harmony import */


    var _models_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/class */
    "./src/app/models/class.ts");
    /* harmony import */


    var _models_lecturer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/lecturer */
    "./src/app/models/lecturer.ts");
    /* harmony import */


    var _models_room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/room */
    "./src/app/models/room.ts");

    var Data = /*#__PURE__*/function () {
      function Data() {
        _classCallCheck(this, Data);
      }

      _createClass(Data, null, [{
        key: "init",
        value: function init() {
          var result = {
            lecturers: _models_lecturer__WEBPACK_IMPORTED_MODULE_4__["Lecturer"].data,
            rooms: _models_room__WEBPACK_IMPORTED_MODULE_5__["Room"].data,
            classes: _models_class__WEBPACK_IMPORTED_MODULE_3__["Class"].data,
            timeSlots: _models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].data
          };
          return result;
        }
      }, {
        key: "refreshData",
        value: function refreshData() {
          _models_class__WEBPACK_IMPORTED_MODULE_3__["Class"].refreshData();

          _models_room__WEBPACK_IMPORTED_MODULE_5__["Room"].refreshData();

          _models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].refreshData();

          _models_lecturer__WEBPACK_IMPORTED_MODULE_4__["Lecturer"].refreshData();
        }
      }, {
        key: "toLocalStorage",
        value: function toLocalStorage() {
          localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName, JSON.stringify(Data.master));
        }
      }, {
        key: "fromJsonFile",
        value: function fromJsonFile(file) {
          var reader = new FileReader();
          reader.readAsText(file, 'UTF-8');

          reader.onload = function () {
            localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName, reader.result);
            Data.refreshData();
            alert('Data berhasil dimuat');
            console.log('success import data from json file');
          };

          reader.onerror = function (error) {
            console.log('error import data from json file', error);
          };
        }
      }, {
        key: "toJsonFileUrl",
        value: function toJsonFileUrl() {
          var data = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName) == null ? JSON.stringify(Data.master) : localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName);
          var blob = new Blob([data], {
            type: "text/json;charset=utf-8;"
          });
          var link = document.createElement("a");

          if (link.download !== undefined) {
            var url = URL.createObjectURL(blob);
            var now = new Date();
            var nowDate = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + '.' + now.getMilliseconds();
            var filename = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName + ' ' + nowDate + '.json';
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        }
      }, {
        key: "wipeLocalData",
        value: function wipeLocalData() {
          localStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName);
          Data.refreshData();
          alert('Data berhasil dihapus');
        }
      }, {
        key: "isEmptyData",
        value: function isEmptyData() {
          var isNullProp1 = Data.master.lecturers.length === 0;
          var isNullProp2 = Data.master.rooms.length === 0;
          var isNullProp3 = Data.master.classes.length === 0;
          return isNullProp1 && isNullProp2 && isNullProp3;
        }
      }, {
        key: "getChromosomes",
        value: function getChromosomes(timeSlotIndex) {
          var result = [];
          var index = 0;

          _models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].data[timeSlotIndex].classes.forEach(function (classObj) {
            classObj.subjects.forEach(function (subject) {
              result[index++] = {
                dosen1: subject.lecturer1Id,
                dosen2: subject.lecturer2Id,
                durasi: subject.duration,
                kelas: classObj.id,
                matkul: subject.name,
                ruang: Data.getRandomRoom(),
                waktu: Data.getRandomTimeSlot(timeSlotIndex)
              };
            });
          });

          return result;
        }
      }, {
        key: "getRandomRoom",
        value: function getRandomRoom() {
          return Math.floor(Math.random() * Data.master.rooms.length);
        }
      }, {
        key: "getRandomTimeSlot",
        value: function getRandomTimeSlot(timeSlotIndex) {
          return Math.floor(Math.random() * _models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].data[timeSlotIndex].getSumNSlot());
        }
      }]);

      return Data;
    }();

    Data.master = Data.init();
    /***/
  },

  /***/
  "./src/app/classes/individual.ts":
  /*!***************************************!*\
    !*** ./src/app/classes/individual.ts ***!
    \***************************************/

  /*! exports provided: Individual */

  /***/
  function srcAppClassesIndividualTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Individual", function () {
      return Individual;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./data */
    "./src/app/classes/data.ts");

    var Individual = /*#__PURE__*/function () {
      function Individual() {
        _classCallCheck(this, Individual);

        //cache
        this.isCalcFitness = true;
        this.errors = [];
        this.Chromosomes = [];
      }

      _createClass(Individual, [{
        key: "generate",
        value: function generate(timeSlotIndex) {
          this.Chromosomes = _data__WEBPACK_IMPORTED_MODULE_1__["Data"].getChromosomes(timeSlotIndex);
        }
      }, {
        key: "getFitness",
        value: function getFitness() {
          if (this.isCalcFitness) {
            this.isCalcFitness = false;
            this.fitness = this.calcFitness();
          }

          return this.fitness;
        }
      }, {
        key: "calcFitness",
        value: function calcFitness() {
          var err_i = 0;
          var err_arr = [];

          for (var i = 0; i < this.Chromosomes.length; i++) {
            var Chromosome = this.Chromosomes[i];
            var waktu1_mulai = Chromosome.waktu;
            var waktu1_selesai = waktu1_mulai + Chromosome.durasi - 1; //error waktu jika melewati jumlah slot waktu

            if (waktu1_selesai > _data__WEBPACK_IMPORTED_MODULE_1__["Data"].master.timeSlots[0].getSumNSlot()) {
              err_arr[err_i++] = [i, null, 'Waktu Melebihi Slot'];
            } //ignored last chromosome
            //coz last can't comparing


            if (i === this.Chromosomes.length - 1) {
              break;
            }

            for (var j = i + 1; j < this.Chromosomes.length; j++) {
              var Kromosom_compare = this.Chromosomes[j];
              var waktu2_mulai = Kromosom_compare.waktu;
              var waktu2_selesai = waktu2_mulai + Kromosom_compare.durasi - 1;
              var sub1 = waktu2_mulai <= waktu1_selesai;
              var sub2 = waktu1_mulai <= waktu2_selesai; //waktu2 mulai diantara rentang waktu1

              var condA = waktu1_mulai <= waktu2_mulai && sub1; //waktu2 selesai diantara rentang waktu1

              var condB = sub2 && waktu2_selesai <= waktu1_selesai; //waktu1 mulai diantara rentang waktu2

              var condC = waktu2_mulai <= waktu1_mulai && sub2; //waktu1 selesai diantara rentang waktu2

              var condD = sub1 && waktu1_selesai <= waktu2_selesai; // if (cond1 && waktu1_selesai >= waktu2_mulai && waktu1_mulai <= waktu2_selesai && cond2) {

              if (condA || condB || condC || condD) {
                if (Chromosome.kelas === Kromosom_compare.kelas) {
                  err_arr[err_i++] = [i, j, 'kelas'];
                }

                if (Chromosome.ruang === Kromosom_compare.ruang) {
                  err_arr[err_i++] = [i, j, 'ruang'];
                }

                if (Chromosome.dosen1 === Kromosom_compare.dosen1 || Chromosome.dosen1 === Kromosom_compare.dosen2) {
                  err_arr[err_i++] = [i, j, 'dosen 1'];
                }

                if (Chromosome.dosen2 != null && (Chromosome.dosen2 === Kromosom_compare.dosen1 || Chromosome.dosen2 === Kromosom_compare.dosen2)) {
                  err_arr[err_i++] = [i, j, 'dosen 2'];
                }
              }
            }
          }

          ;
          this.errors = err_arr;
          return err_i;
        }
      }, {
        key: "mutasi",
        value: function mutasi(timeSlotIndex) {
          for (var i = 0; i < this.Chromosomes.length; i++) {
            if (Math.random() < Individual.tingkat_mutasi) {
              this.Chromosomes[i].ruang = _data__WEBPACK_IMPORTED_MODULE_1__["Data"].getRandomRoom();
              this.isCalcFitness = true;
            }

            if (Math.random() < Individual.tingkat_mutasi) {
              this.Chromosomes[i].waktu = _data__WEBPACK_IMPORTED_MODULE_1__["Data"].getRandomTimeSlot(timeSlotIndex);
              this.isCalcFitness = true;
            }
          }

          ;
        }
      }, {
        key: "crossOver",
        value: function crossOver(Partner) {
          for (var i = 0; i < this.Chromosomes.length; i++) {
            if (Math.random() < Individual.tingkat_crossover) {
              this.Chromosomes[i].ruang = Partner.Chromosomes[i].ruang;
              this.isCalcFitness = true;
            }

            if (Math.random() < Individual.tingkat_crossover) {
              this.Chromosomes[i].waktu = Partner.Chromosomes[i].waktu;
              this.isCalcFitness = true;
            }
          }
        }
      }, {
        key: "clone",
        value: function clone() {
          return Individual.fromJSON(JSON.stringify(this));
        }
      }], [{
        key: "fromJSON",
        value: function fromJSON(json) {
          if (json == null) {
            return null;
          } else {
            var result = new Individual();
            Object.assign(result, JSON.parse(json));
            return result;
          }
        }
      }]);

      return Individual;
    }(); //tingkat cross over adalah range(0 .. 1);


    Individual.tingkat_crossover = 0.5; //tingkat mutasi adalah range(0 .. 1);

    Individual.tingkat_mutasi = 0.5;
    /***/
  },

  /***/
  "./src/app/classes/population.ts":
  /*!***************************************!*\
    !*** ./src/app/classes/population.ts ***!
    \***************************************/

  /*! exports provided: GA, Population */

  /***/
  function srcAppClassesPopulationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GA", function () {
      return GA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Population", function () {
      return Population;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _individual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./individual */
    "./src/app/classes/individual.ts");

    var GA = /*#__PURE__*/_createClass(function GA() {
      _classCallCheck(this, GA);
    });

    GA.nIndividual = 500;
    GA.maxStagnant = 100;

    var Population = /*#__PURE__*/function () {
      function Population() {
        var isGenerate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var timeSlotIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, Population);

        this.Individuals = [];

        for (var i = 0; i < GA.nIndividual; i++) {
          this.Individuals[i] = new _individual__WEBPACK_IMPORTED_MODULE_1__["Individual"]();

          if (isGenerate) {
            this.Individuals[i].generate(timeSlotIndex);
          }
        }
      }

      _createClass(Population, [{
        key: "getIndividuTerbaik",
        value: function getIndividuTerbaik() {
          //sebagai pembanding pertama
          var temp_i = 0;
          var fitness_terbaik = this.Individuals[0].getFitness();

          for (var i = 1; i < this.Individuals.length; i++) {
            var fit_i = this.Individuals[i].getFitness();

            if (fitness_terbaik > fit_i) {
              fitness_terbaik = fit_i;
              temp_i = i;
            }
          }

          return this.Individuals[temp_i];
        }
      }, {
        key: "roulleteWheel",
        value: function roulleteWheel() {
          var arrBobotFitness = [];
          var sumBobot = 0;
          var pick = Math.random();
          var picked_i;
          var sumPicked = 0;

          for (var i = 0; i < this.Individuals.length; i++) {
            arrBobotFitness[i] = 1 / (1 + this.Individuals[i].getFitness());
            sumBobot += arrBobotFitness[i];
          }

          for (var _i = 0; _i < arrBobotFitness.length; _i++) {
            sumPicked += arrBobotFitness[_i] / sumBobot;

            if (pick <= sumPicked) {
              picked_i = _i;
              break;
            }
          }

          return this.Individuals[picked_i];
        }
      }, {
        key: "roulleteWheel2",
        value: function roulleteWheel2() {
          var arrRwIndex = [];
          var sumBobot = 0;

          for (var i = 0; i < this.Individuals.length; i++) {
            sumBobot += 1 / (1 + this.Individuals[i].getFitness());
            arrRwIndex[i] = sumBobot;
          }

          var pick = Math.random() * sumBobot;
          var picked_i = arrRwIndex.findIndex(function (test) {
            return test >= pick;
          });
          return this.Individuals[picked_i];
        } // inidividual 0 tidak di eksekusi

      }, {
        key: "evolusi",
        value: function evolusi(timeSlotIndex) {
          this.Individuals[0] = this.getIndividuTerbaik().clone();
          var individu1 = this.Individuals[0];

          for (var i = 1; i < this.Individuals.length; i++) {
            // this.Individuals[i].crossOver(this.roulleteWheel2());
            // let individu1 = this.roulleteWheel2();
            this.Individuals[i] = this.roulleteWheel2().clone();
            this.Individuals[i].crossOver(individu1);
          }

          this.Individuals[0] = this.getIndividuTerbaik().clone();

          for (var _i2 = 1; _i2 < this.Individuals.length; _i2++) {
            this.Individuals[_i2].mutasi(timeSlotIndex);
          }

          this.Individuals[0] = this.getIndividuTerbaik().clone();
        }
      }]);

      return Population;
    }();
    /***/

  },

  /***/
  "./src/app/models/class.ts":
  /*!*********************************!*\
    !*** ./src/app/models/class.ts ***!
    \*********************************/

  /*! exports provided: Subject, Class */

  /***/
  function srcAppModelsClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Subject", function () {
      return Subject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Class", function () {
      return Class;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts"); // import { TimeSlot } from './time-slot';


    var Subject = /*#__PURE__*/_createClass(function Subject() {
      _classCallCheck(this, Subject);
    });

    var Class = /*#__PURE__*/function () {
      function Class() {
        _classCallCheck(this, Class);
      }

      _createClass(Class, [{
        key: "getSumSubjectsDuration",
        value: function getSumSubjectsDuration() {
          return this.subjects.reduce(function (a, b) {
            return a + (b.duration || 0);
          }, 0);
        }
      }], [{
        key: "refreshData",
        value: function refreshData() {
          Class.data = Class.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var result = [];
          var local = JSON.parse(localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName));

          if (local && local['classes']) {
            local['classes'].forEach(function (element) {
              var temp = new Class();
              Object.assign(temp, element);

              if (!temp.subjects) {
                temp.subjects = [];
              }

              result.push(temp);
            });
          }

          return result;
        }
      }, {
        key: "toLocalStorage",
        value: function toLocalStorage() {
          var local = JSON.parse(localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName));
          local['classes'] = Class.data;
          localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName, JSON.stringify(local));
        }
      }]);

      return Class;
    }();

    Class.uniqueKeys = ['id'];

    Class.data = function () {
      return Class.getData();
    }();
    /***/

  },

  /***/
  "./src/app/models/lecturer.ts":
  /*!************************************!*\
    !*** ./src/app/models/lecturer.ts ***!
    \************************************/

  /*! exports provided: Lecturer */

  /***/
  function srcAppModelsLecturerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Lecturer", function () {
      return Lecturer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./class */
    "./src/app/models/class.ts");

    var Lecturer = /*#__PURE__*/function () {
      function Lecturer() {
        _classCallCheck(this, Lecturer);
      }

      _createClass(Lecturer, [{
        key: "getSumDuration",
        value: function getSumDuration() {
          var _this = this;

          var result = 0;

          _class__WEBPACK_IMPORTED_MODULE_2__["Class"].data.forEach(function (clasObj) {
            clasObj.subjects.forEach(function (subjectObj) {
              if (subjectObj.lecturer1Id == _this.id || subjectObj.lecturer2Id == _this.id) {
                result += subjectObj.duration;
              }
            });
          });

          return result;
        }
      }], [{
        key: "refreshData",
        value: function refreshData() {
          Lecturer.data = Lecturer.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var result = [];
          var local = JSON.parse(localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName));

          if (local && local['lecturers']) {
            local['lecturers'].forEach(function (element) {
              var temp = new Lecturer();
              Object.assign(temp, element);
              result.push(temp);
            });
          }

          return result;
        }
      }, {
        key: "toLocalStorage",
        value: function toLocalStorage() {
          var local = JSON.parse(localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName));
          local['lecturers'] = Lecturer.data;
          localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName, JSON.stringify(local));
        }
      }, {
        key: "toSelect2Options",
        value: function toSelect2Options() {
          var result = [];

          _toConsumableArray(Lecturer.data).forEach(function (el) {
            result.push({
              id: el.id,
              text: el.name
            });
          });

          result.sort(function (a, b) {
            return a.text.localeCompare(b.text);
          });
          return result;
        }
      }]);

      return Lecturer;
    }();

    Lecturer.uniqueKeys = ['id', 'name'];

    Lecturer.data = function () {
      return Lecturer.getData();
    }();
    /***/

  },

  /***/
  "./src/app/models/room.ts":
  /*!********************************!*\
    !*** ./src/app/models/room.ts ***!
    \********************************/

  /*! exports provided: Room */

  /***/
  function srcAppModelsRoomTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Room", function () {
      return Room;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var Room = /*#__PURE__*/function () {
      function Room() {
        _classCallCheck(this, Room);
      }

      _createClass(Room, [{
        key: "type",
        get: //GETTER
        function get() {
          return Room.types[this._type];
        }
      }], [{
        key: "refreshData",
        value: function refreshData() {
          Room.data = Room.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var result = [];
          var local = JSON.parse(localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName));

          if (local && local['rooms']) {
            local['rooms'].forEach(function (element) {
              var temp = new Room();
              Object.assign(temp, element);
              result.push(temp);
            });
          }

          return result;
        }
      }, {
        key: "toLocalStorage",
        value: function toLocalStorage() {
          var local = JSON.parse(localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName));
          local['rooms'] = Room.data;
          localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName, JSON.stringify(local));
        }
      }]);

      return Room;
    }();

    Room.types = ['Ruang Kelas', 'Lab'];
    Room.uniqueKeys = ['id', 'name'];

    Room.data = function () {
      return Room.getData();
    }();
    /***/

  },

  /***/
  "./src/app/models/time-slot.ts":
  /*!*************************************!*\
    !*** ./src/app/models/time-slot.ts ***!
    \*************************************/

  /*! exports provided: TimeSlot */

  /***/
  function srcAppModelsTimeSlotTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeSlot", function () {
      return TimeSlot;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./class */
    "./src/app/models/class.ts");

    var TimeSlot = /*#__PURE__*/function () {
      function TimeSlot() {
        _classCallCheck(this, TimeSlot);
      }

      _createClass(TimeSlot, [{
        key: "getSumNSlot",
        value: function getSumNSlot() {
          var temp = this.slots || [];
          return temp.filter(function (slot) {
            return slot == true;
          }).length;
        }
      }, {
        key: "slotsxxx",
        get: function get() {
          if (!this.slots) {
            this.slots = [].constructor((this.nSlotDay || 0) * 7);
          } else if (this.slots.length != (this.nSlotDay || 0) * 7) {
            this.slots.length = (this.nSlotDay || 0) * 7;
          }

          return this.slots;
        }
      }, {
        key: "getDayName",
        value: function getDayName(index) {
          return TimeSlot.daysName[Math.floor(index / this.nSlotDay)];
        }
      }, {
        key: "getTime",
        value: function getTime(index) {
          var timeIndex = index % this.nSlotDay;
          var breakIndex = (this._breakAt - this._startAt) / this.slotDuration - 1;

          if (timeIndex > breakIndex) {
            return TimeSlot.minToTime(timeIndex * this.slotDuration + this._startAt + this.breakDuration);
          } else {
            return TimeSlot.minToTime(timeIndex * this.slotDuration + this._startAt);
          }
        } //GETTER

      }, {
        key: "startTime",
        get: function get() {
          return TimeSlot.minToTime(this._startAt || 0);
        },
        set: //SETTER
        function set(strTime) {
          var temp = strTime || '00:00';
          this._startAt = TimeSlot.timeToMin(temp);
        }
      }, {
        key: "breakTime",
        get: function get() {
          if (this._breakAt) {
            return TimeSlot.minToTime(this._breakAt);
          } else {
            return null;
          }
        }
      }, {
        key: "classes",
        get: function get() {
          var _this2 = this;

          return _class__WEBPACK_IMPORTED_MODULE_2__["Class"].data.filter(function (classObj) {
            return classObj.timeSlotId == _this2.id;
          });
        }
      }], [{
        key: "refreshData",
        value: function refreshData() {
          TimeSlot.data = TimeSlot.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var result = [];
          var local = JSON.parse(localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName));

          if (local && local['timeSlots']) {
            local['timeSlots'].forEach(function (element) {
              var temp = new TimeSlot();
              Object.assign(temp, element);
              result.push(temp);
            });
          }

          return result;
        }
      }, {
        key: "toLocalStorage",
        value: function toLocalStorage() {
          var local = JSON.parse(localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName));
          local['timeSlots'] = TimeSlot.data;
          localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].localStorageItemName, JSON.stringify(local));
        }
      }, {
        key: "timeToMin",
        value: function timeToMin(strTime) {
          var temp = strTime.split(':');
          return parseInt(temp[0]) * 60 + parseInt(temp[1]);
        }
      }, {
        key: "minToTime",
        value: function minToTime(num) {
          var h = Math.floor(num / 60);
          var m = num % 60;

          if (h <= 9) {
            h = '0' + h;
          }

          if (m <= 9) {
            m = '0' + m;
          }

          return h + ':' + m;
        }
      }]);

      return TimeSlot;
    }();

    TimeSlot.daysName = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

    TimeSlot.data = function () {
      return TimeSlot.getData();
    }();

    TimeSlot.uniqueKeys = ['id'];
    /***/
  },

  /***/
  "./src/app/pages/about/about.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/about/about.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/about/about.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/about/about.component.ts ***!
    \************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/pages/about/about.component.css"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/pages/class/class.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/class/class.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesClassClassComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-lg-5, .col-lg-7, .col-lg-12 {\r\n  transition: all 500ms;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xhc3MvY2xhc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsYXNzL2NsYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLWxnLTUsIC5jb2wtbGctNywgLmNvbC1sZy0xMiB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/class/class.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/class/class.component.ts ***!
    \************************************************/

  /*! exports provided: ClassComponent */

  /***/
  function srcAppPagesClassClassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassComponent", function () {
      return ClassComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/class */
    "./src/app/models/class.ts");
    /* harmony import */


    var src_app_models_lecturer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/lecturer */
    "./src/app/models/lecturer.ts");
    /* harmony import */


    var src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/time-slot */
    "./src/app/models/time-slot.ts");

    var ClassComponent = /*#__PURE__*/function () {
      function ClassComponent() {
        _classCallCheck(this, ClassComponent);

        this.model = new src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Class"]();
        this.classes = src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Class"].data;
        this.timeSlots = src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_4__["TimeSlot"].data; // subject block
        // subjects = [];

        this.subjectModel = new src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isShowSubjects = false;
        this.select2LecturerOptions = src_app_models_lecturer__WEBPACK_IMPORTED_MODULE_3__["Lecturer"].toSelect2Options();
        this.select2ClassOptions = this.classes.map(function (obj, index) {
          return {
            id: index.toString(),
            text: obj.id
          };
        });
      }

      _createClass(ClassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $(function () {
            $('[data-toggle="tooltip"]').tooltip(); // $('.select2basic').css('width', '100%').select2();
          });
        }
      }, {
        key: "initCreate",
        value: function initCreate() {
          this.isShowSubjects = false;
          this.model = new src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Class"]();
          this.storeMode = 'create';
          $('#classFormModal').modal('show');
        }
      }, {
        key: "initDelete",
        value: function initDelete(index) {
          this.isShowSubjects = false;
          this.storeMode = 'delete';
          this.workingIndex = index;
          Object.assign(this.model, Object.assign({}, this.classes[index]));
          $('#classDeleteModal').modal('show');
        }
      }, {
        key: "initUpdate",
        value: function initUpdate(index) {
          this.isShowSubjects = false;
          this.storeMode = 'update';
          this.workingIndex = index;
          Object.assign(this.model, Object.assign({}, this.classes[index]));
          $('#classFormModal').modal('show');
        }
      }, {
        key: "storeClass",
        value: function storeClass(formData) {
          this.checkUnique(formData);

          if (formData.form.valid) {
            switch (this.storeMode) {
              case 'create':
                var newClass = new src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Class"]();
                Object.assign(newClass, Object.assign({}, this.model));
                this.classes.push(newClass);
                break;

              case 'update':
                Object.assign(this.classes[this.workingIndex], Object.assign({}, this.model));
                break;

              default:
                break;
            }

            $('#classFormModal').modal('hide');
            src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Class"].toLocalStorage();
            formData.resetForm();
          }
        }
      }, {
        key: "deleteClass",
        value: function deleteClass() {
          $('#classDeleteModal').modal('hide');
          this.classes.splice(this.workingIndex, 1);
          src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Class"].toLocalStorage();
        }
      }, {
        key: "checkUnique",
        value: function checkUnique(formData) {
          var _this3 = this;

          var _loop = function _loop(key) {
            _this3.classes.forEach(function (item, index) {
              if (src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Class"].uniqueKeys.indexOf(key) != -1) {
                if (item[key] == formData.form.controls[key].value) {
                  if (_this3.storeMode == 'create' || _this3.storeMode == 'update' && _this3.workingIndex != index) {
                    formData.form.controls[key].setErrors({
                      unique: true
                    });
                  }
                }
              }
            });
          };

          for (var key in formData.form.controls) {
            _loop(key);
          }
        }
      }, {
        key: "viewSubjects",
        value: function viewSubjects(index) {
          this.workingIndex = index;
          this.isShowSubjects = true;
          Object.assign(this.model, Object.assign({}, this.classes[index]));
        }
      }, {
        key: "initCreateSubject",
        value: function initCreateSubject() {
          this.subjectModel = new src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.storeMode = 'create';
          $('#subjectFormModal').modal('show');
        }
      }, {
        key: "initDeleteSubject",
        value: function initDeleteSubject(index) {
          this.storeMode = 'delete';
          this.subjectWorkingIndex = index;
          Object.assign(this.subjectModel, Object.assign({}, this.model.subjects[index]));
          $('#subjectDeleteModal').modal('show');
        }
      }, {
        key: "initUpdateSubject",
        value: function initUpdateSubject(index) {
          this.storeMode = 'update';
          this.subjectWorkingIndex = index;
          Object.assign(this.subjectModel, Object.assign({}, this.model.subjects[index]));
          $('#subjectFormModal').modal('show');
        }
      }, {
        key: "initCopySubjects",
        value: function initCopySubjects(index) {
          $('#subjectsCopyModal').modal('show');
        }
      }, {
        key: "copySubjects",
        value: function copySubjects(index) {
          var _this4 = this;

          $('#subjectsCopyModal').modal('hide');
          this.classes[this.workingIndex].subjects = [];
          this.classes[index].subjects.forEach(function (obj) {
            _this4.classes[_this4.workingIndex].subjects.push(Object.assign(new src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Subject"](), Object.assign({}, obj)));
          });
          src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Class"].toLocalStorage();
          Object.assign(this.model, Object.assign({}, this.classes[this.workingIndex]));
        }
      }, {
        key: "deleteSubject",
        value: function deleteSubject() {
          $('#subjectDeleteModal').modal('hide');
          this.classes[this.workingIndex].subjects.splice(this.subjectWorkingIndex, 1);
          src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Class"].toLocalStorage();
        }
      }, {
        key: "storeSubject",
        value: function storeSubject(formData) {
          // this.checkUnique(formData);
          if (formData.form.valid) {
            switch (this.storeMode) {
              case 'create':
                this.classes[this.workingIndex].subjects.push(Object.assign(new src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Subject"](), Object.assign({}, this.subjectModel)));
                break;

              case 'update':
                Object.assign(this.classes[this.workingIndex].subjects[this.subjectWorkingIndex], Object.assign({}, this.subjectModel));
                break;

              default:
                break;
            }

            $('#subjectFormModal').modal('hide');
            src_app_models_class__WEBPACK_IMPORTED_MODULE_2__["Class"].toLocalStorage();
            formData.resetForm();
          }
        }
      }]);

      return ClassComponent;
    }();

    ClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-class',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./class.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/class/class.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./class.component.css */
      "./src/app/pages/class/class.component.css"))["default"]]
    })], ClassComponent);
    /***/
  },

  /***/
  "./src/app/pages/generator/generator.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pages/generator/generator.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGeneratorGeneratorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlbmVyYXRvci9nZW5lcmF0b3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/generator/generator.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/generator/generator.component.ts ***!
    \********************************************************/

  /*! exports provided: GeneratorComponent */

  /***/
  function srcAppPagesGeneratorGeneratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneratorComponent", function () {
      return GeneratorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _classes_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../classes/data */
    "./src/app/classes/data.ts");
    /* harmony import */


    var src_app_classes_individual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/classes/individual */
    "./src/app/classes/individual.ts");
    /* harmony import */


    var src_app_classes_population__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/classes/population */
    "./src/app/classes/population.ts");

    var GeneratorComponent = /*#__PURE__*/function () {
      function GeneratorComponent() {
        _classCallCheck(this, GeneratorComponent);

        this.dataClass = _classes_data__WEBPACK_IMPORTED_MODULE_2__["Data"];
        this.data = _classes_data__WEBPACK_IMPORTED_MODULE_2__["Data"].master;
        this.timeSlotIndex = 0;
        this.isRunning = false;
        this.isCompleted = false;
        this.generation = 0;
        this.nPopulation = 0;
        this.stagnant = 0;
        this.populationStagnant = 0; // this.Individual = Individual.fromJSON(localStorage.getItem('Individual'));

        this.results = JSON.parse(localStorage.getItem('results'));

        if (!this.results) {
          this.results = [];
        }

        if (this.results[this.timeSlotIndex]) {
          this.Individual = Object.assign(new src_app_classes_individual__WEBPACK_IMPORTED_MODULE_3__["Individual"](), this.results[this.timeSlotIndex]);
        }

        if (this.Individual != null) {
          if (this.Individual.fitness == 0) {
            this.isCompleted = true;
          }
        }
      }

      _createClass(GeneratorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "uploadBtnClick",
        value: function uploadBtnClick() {
          $('#jsonfile').trigger('click');
        }
      }, {
        key: "onChangeFile",
        value: function onChangeFile(event) {
          this.uploadedFile = event.target.files[0];

          if (!_classes_data__WEBPACK_IMPORTED_MODULE_2__["Data"].isEmptyData()) {
            $('#replaceDataConfirmationModal').modal('show');
          } else {
            this.jsonProccess();
          }
        }
      }, {
        key: "jsonProccess",
        value: function jsonProccess() {
          var ext = this.uploadedFile.name.split(".").pop();

          if (ext.toLowerCase() == 'json') {
            _classes_data__WEBPACK_IMPORTED_MODULE_2__["Data"].fromJsonFile(this.uploadedFile);
          } else {
            alert('Ekstensi file tidak dikenali');
          }

          $('#replaceDataConfirmationModal').modal('hide');
        }
      }, {
        key: "downloadData",
        value: function downloadData() {
          _classes_data__WEBPACK_IMPORTED_MODULE_2__["Data"].toJsonFileUrl();
        }
      }, {
        key: "wipeLocalData",
        value: function wipeLocalData() {
          _classes_data__WEBPACK_IMPORTED_MODULE_2__["Data"].wipeLocalData();

          $('#wipeDataModal').modal('hide');
        } //generator functions

      }, {
        key: "start",
        value: function start() {
          this.Populasi = new src_app_classes_population__WEBPACK_IMPORTED_MODULE_4__["Population"](true, this.timeSlotIndex);
          this.Individual = this.Populasi.getIndividuTerbaik().clone();
          this.saveResult();
          this.lastBestFitness = this.Individual.getFitness();
          this.isRunning = true; //timer
          // this.resetTimer();
          // this.timer();

          this.run();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.isCompleted = false;
          this.Individual = null;
        }
      }, {
        key: "stop",
        value: function stop() {
          this.isRunning = false;
          clearTimeout(this.loop); // clearTimeout(this.timeLoop);
        }
      }, {
        key: "resume",
        value: function resume() {
          // let saved: Individual;
          this.isRunning = true; // if (this.Individual == null) {
          //   saved = Individual.fromJSON(localStorage.getItem('Individual'));
          // } else {
          //   saved = this.Individual;
          // }
          //timer
          // this.timer();

          this.lastBestFitness = this.Individual.getFitness();

          if (this.Populasi == null) {
            this.Populasi = new src_app_classes_population__WEBPACK_IMPORTED_MODULE_4__["Population"](true, this.timeSlotIndex);
          }

          this.Populasi.Individuals[0] = this.Individual.clone();
          this.run();
        } // add() {
        //   this.timerArr[2]++;
        //   if (this.timerArr[2] >= 60) {
        //     this.timerArr[2] = 0;
        //     this.timerArr[1]++;
        //     if (this.timerArr[1] >= 60) {
        //       this.timerArr[1] = 0;
        //       this.timerArr[0]++;
        //     }
        //   }
        //   localStorage.setItem('timerArr', JSON.stringify(this.timerArr));
        //   this.timerDisp = this.getTimerDisp();
        //   this.timer();
        // }
        // getTimerDisp() {
        //   const h = this.timerArr[0] > 9 ? this.timerArr[0] : '0' + this.timerArr[0].toString()
        //   const m = this.timerArr[1] > 9 ? this.timerArr[1] : '0' + this.timerArr[1].toString()
        //   const s = this.timerArr[2] > 9 ? this.timerArr[2] : '0' + this.timerArr[2].toString()
        //   return h + ':' + m + ':' + s;
        // }

      }, {
        key: "isErrorChromosome",
        value: function isErrorChromosome(index) {
          return this.Individual.errors.some(function (error) {
            return error.includes(index);
          });
        }
      }, {
        key: "chromosomeToTable",
        value: function chromosomeToTable() {
          var _this5 = this;

          var temp = [];
          var tempIndividu = this.results[this.timeSlotIndex];
          var tempChros = tempIndividu.Chromosomes;
          tempIndividu.errors.forEach(function (error) {
            tempChros[error[0]].error = true;
            tempChros[error[0]].errMess = error[2];

            if (error[1]) {
              tempChros[error[1]].error = true;
              tempChros[error[1]].errMess = error[2];
            }
          });
          this.data.timeSlots[this.timeSlotIndex].slots.forEach(function (slot, index) {
            var temp2 = [];

            _this5.data.classes.filter(function (classObj) {
              return classObj.timeSlotId == _this5.data.timeSlots[_this5.timeSlotIndex].id;
            }).forEach(function (classObj) {
              var temp3 = tempChros.find(function (chro) {
                return chro.kelas == classObj.id && chro.waktu == index;
              });

              if (!temp3) {
                temp3 = tempChros.find(function (chro) {
                  return chro.kelas == classObj.id && chro.waktu < index && chro.waktu + chro.durasi > index;
                });

                if (temp3) {
                  temp3 = 'filled';
                }
              }

              temp2.push(temp3);
            });

            temp.push(temp2);
          }); // console.log(temp);

          return temp;
        } // timer() {
        //   this.timeLoop = setTimeout(() => {this.add()}, 1000);
        // }
        // resetTimer() {
        //   this.timerArr = [0, 0, 0];
        //   localStorage.removeItem('timerArr');
        // }

      }, {
        key: "run",
        value: function run() {
          var _this6 = this;

          this.loop = setTimeout(function () {
            _this6.run2();
          }, 1);
        }
      }, {
        key: "run2",
        value: function run2() {
          var nowBestIndividual = this.Populasi.getIndividuTerbaik();
          var nowBestFitness = nowBestIndividual.getFitness();

          if (nowBestFitness < this.lastBestFitness) {
            this.stagnant = 0;
            this.populationStagnant = 0;
            this.Individual = nowBestIndividual.clone();
            this.lastBestFitness = nowBestFitness;
            this.saveResult();
          } else {
            this.stagnant++;
            this.populationStagnant++;

            if (this.populationStagnant >= src_app_classes_population__WEBPACK_IMPORTED_MODULE_4__["GA"].maxStagnant) {
              this.Populasi = new src_app_classes_population__WEBPACK_IMPORTED_MODULE_4__["Population"](true, this.timeSlotIndex);
              this.Populasi.Individuals[0] = this.Individual.clone();
              this.nPopulation++;
              this.populationStagnant = 0;
            }
          }

          if (nowBestFitness === 0) {
            this.isCompleted = true;
            this.stop();
          } else {
            this.run();
          }

          this.Populasi.evolusi(this.timeSlotIndex);
          this.generation++;
        }
      }, {
        key: "saveResult",
        value: function saveResult() {
          // localStorage.setItem('Individual', JSON.stringify(this.Individual));
          this.results[this.timeSlotIndex] = this.Individual;
          localStorage.setItem('results', JSON.stringify(this.results));
        }
      }]);

      return GeneratorComponent;
    }();

    GeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-generator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./generator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/generator/generator.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./generator.component.css */
      "./src/app/pages/generator/generator.component.css"))["default"]]
    })], GeneratorComponent);
    /***/
  },

  /***/
  "./src/app/pages/lecturer/lecturer.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pages/lecturer/lecturer.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLecturerLecturerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlY3R1cmVyL2xlY3R1cmVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/lecturer/lecturer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/lecturer/lecturer.component.ts ***!
    \******************************************************/

  /*! exports provided: LecturerComponent */

  /***/
  function srcAppPagesLecturerLecturerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturerComponent", function () {
      return LecturerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_lecturer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/lecturer */
    "./src/app/models/lecturer.ts");

    var LecturerComponent = /*#__PURE__*/function () {
      function LecturerComponent() {
        _classCallCheck(this, LecturerComponent);

        this.model = new src_app_models_lecturer__WEBPACK_IMPORTED_MODULE_2__["Lecturer"]();
        this.lecturers = src_app_models_lecturer__WEBPACK_IMPORTED_MODULE_2__["Lecturer"].data;
      }

      _createClass(LecturerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('[data-toggle="tooltip"]').tooltip();
        }
      }, {
        key: "initCreate",
        value: function initCreate() {
          this.model = new src_app_models_lecturer__WEBPACK_IMPORTED_MODULE_2__["Lecturer"]();
          this.storeMode = 'create';
          $('#lecturerFormModal').modal('show');
        }
      }, {
        key: "initDelete",
        value: function initDelete(index) {
          this.storeMode = 'delete';
          this.workingIndex = index;
          Object.assign(this.model, Object.assign({}, this.lecturers[index]));
          $('#lecturerDeleteModal').modal('show');
        }
      }, {
        key: "initUpdate",
        value: function initUpdate(index) {
          this.storeMode = 'update';
          this.workingIndex = index;
          Object.assign(this.model, Object.assign({}, this.lecturers[index]));
          $('#lecturerFormModal').modal('show');
        }
      }, {
        key: "storeLecturer",
        value: function storeLecturer(formData) {
          this.checkUnique(formData);

          if (formData.form.valid) {
            switch (this.storeMode) {
              case 'create':
                var newLecturer = new src_app_models_lecturer__WEBPACK_IMPORTED_MODULE_2__["Lecturer"]();
                Object.assign(newLecturer, Object.assign({}, this.model));
                this.lecturers.push(newLecturer);
                break;

              case 'update':
                Object.assign(this.lecturers[this.workingIndex], Object.assign({}, this.model));
                break;

              default:
                break;
            }

            $('#lecturerFormModal').modal('hide');
            formData.resetForm();
            src_app_models_lecturer__WEBPACK_IMPORTED_MODULE_2__["Lecturer"].toLocalStorage();
          }
        }
      }, {
        key: "deleteLecturer",
        value: function deleteLecturer() {
          $('#lecturerDeleteModal').modal('hide');
          this.lecturers.splice(this.workingIndex, 1);
          src_app_models_lecturer__WEBPACK_IMPORTED_MODULE_2__["Lecturer"].toLocalStorage();
        }
      }, {
        key: "checkUnique",
        value: function checkUnique(formData) {
          var _this7 = this;

          var _loop2 = function _loop2(key) {
            _this7.lecturers.forEach(function (lecturer, index) {
              if (src_app_models_lecturer__WEBPACK_IMPORTED_MODULE_2__["Lecturer"].uniqueKeys.indexOf(key) != -1) {
                if (lecturer[key] == formData.form.controls[key].value) {
                  if (_this7.storeMode == 'create' || _this7.storeMode == 'update' && _this7.workingIndex != index) {
                    formData.form.controls[key].setErrors({
                      unique: true
                    });
                  }
                }
              }
            });
          };

          for (var key in formData.form.controls) {
            _loop2(key);
          }
        }
      }]);

      return LecturerComponent;
    }();

    LecturerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lecturer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lecturer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lecturer/lecturer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lecturer.component.css */
      "./src/app/pages/lecturer/lecturer.component.css"))["default"]]
    })], LecturerComponent);
    /***/
  },

  /***/
  "./src/app/pages/room/room.component.css":
  /*!***********************************************!*\
    !*** ./src/app/pages/room/room.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRoomRoomComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jvb20vcm9vbS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/room/room.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/room/room.component.ts ***!
    \**********************************************/

  /*! exports provided: RoomComponent */

  /***/
  function srcAppPagesRoomRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomComponent", function () {
      return RoomComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/room */
    "./src/app/models/room.ts");

    var RoomComponent = /*#__PURE__*/function () {
      function RoomComponent() {
        _classCallCheck(this, RoomComponent);

        this.RoomClass = src_app_models_room__WEBPACK_IMPORTED_MODULE_2__["Room"];
        this.model = new src_app_models_room__WEBPACK_IMPORTED_MODULE_2__["Room"]();
        this.rooms = src_app_models_room__WEBPACK_IMPORTED_MODULE_2__["Room"].data;
      }

      _createClass(RoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('[data-toggle="tooltip"]').tooltip();
        }
      }, {
        key: "initCreate",
        value: function initCreate() {
          this.model = new src_app_models_room__WEBPACK_IMPORTED_MODULE_2__["Room"]();
          this.storeMode = 'create';
          $('#roomFormModal').modal('show');
        }
      }, {
        key: "initDelete",
        value: function initDelete(index) {
          this.storeMode = 'delete';
          this.workingIndex = index;
          Object.assign(this.model, Object.assign({}, this.rooms[index]));
          $('#roomDeleteModal').modal('show');
        }
      }, {
        key: "initUpdate",
        value: function initUpdate(index) {
          this.storeMode = 'update';
          this.workingIndex = index;
          Object.assign(this.model, Object.assign({}, this.rooms[index]));
          $('#roomFormModal').modal('show');
        }
      }, {
        key: "storeRoom",
        value: function storeRoom(formData) {
          this.checkUnique(formData);

          if (formData.form.valid) {
            switch (this.storeMode) {
              case 'create':
                var newRoom = new src_app_models_room__WEBPACK_IMPORTED_MODULE_2__["Room"]();
                Object.assign(newRoom, Object.assign({}, this.model));
                this.rooms.push(newRoom);
                break;

              case 'update':
                Object.assign(this.rooms[this.workingIndex], Object.assign({}, this.model));
                break;

              default:
                break;
            }

            $('#roomFormModal').modal('hide');
            formData.resetForm();
            src_app_models_room__WEBPACK_IMPORTED_MODULE_2__["Room"].toLocalStorage();
          }
        }
      }, {
        key: "deleteRoom",
        value: function deleteRoom() {
          $('#roomDeleteModal').modal('hide');
          this.rooms.splice(this.workingIndex, 1);
          src_app_models_room__WEBPACK_IMPORTED_MODULE_2__["Room"].toLocalStorage();
        }
      }, {
        key: "checkUnique",
        value: function checkUnique(formData) {
          var _this8 = this;

          var _loop3 = function _loop3(key) {
            _this8.rooms.forEach(function (room, index) {
              if (src_app_models_room__WEBPACK_IMPORTED_MODULE_2__["Room"].uniqueKeys.indexOf(key) != -1) {
                if (room[key] == formData.form.controls[key].value) {
                  if (_this8.storeMode == 'create' || _this8.storeMode == 'update' && _this8.workingIndex != index) {
                    formData.form.controls[key].setErrors({
                      unique: true
                    });
                  }
                }
              }
            });
          };

          for (var key in formData.form.controls) {
            _loop3(key);
          }
        }
      }]);

      return RoomComponent;
    }();

    RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-room',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./room.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/room/room.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./room.component.css */
      "./src/app/pages/room/room.component.css"))["default"]]
    })], RoomComponent);
    /***/
  },

  /***/
  "./src/app/pages/time-slot/time-slot.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pages/time-slot/time-slot.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTimeSlotTimeSlotComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-lg-5, .col-lg-6, .col-lg-12 {\r\n  transition: all 500ms;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGltZS1zbG90L3RpbWUtc2xvdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGltZS1zbG90L3RpbWUtc2xvdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctMTIge1xyXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/time-slot/time-slot.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/time-slot/time-slot.component.ts ***!
    \********************************************************/

  /*! exports provided: TimeSlotComponent */

  /***/
  function srcAppPagesTimeSlotTimeSlotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeSlotComponent", function () {
      return TimeSlotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/time-slot */
    "./src/app/models/time-slot.ts"); // import { Class, Subject } from 'src/app/models/class';
    // import { Lecturer } from 'src/app/models/lecturer';
    // import { Select2OptionData } from 'ng-select2';


    var TimeSlotComponent = /*#__PURE__*/function () {
      function TimeSlotComponent() {
        _classCallCheck(this, TimeSlotComponent);

        this.timeSlotClass = src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"];
        this.model = new src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"]();
        this.timeSlots = src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].data;
      }

      _createClass(TimeSlotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $(function () {
            $('[data-toggle="tooltip"]').tooltip();
          });
        }
      }, {
        key: "initCreate",
        value: function initCreate() {
          this.model = new src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"]();
          this.storeMode = 'create';
          $('#timeSlotFormModal').modal('show');
        }
      }, {
        key: "initUpdate",
        value: function initUpdate(index) {
          this.storeMode = 'update';
          this.workingIndex = index;
          Object.assign(this.model, Object.assign({}, this.timeSlots[index]));
          $('#timeSlotFormModal').modal('show');
        }
      }, {
        key: "storeTimeSlot",
        value: function storeTimeSlot(formData) {
          this.checkUnique(formData);

          if (formData.form.valid) {
            switch (this.storeMode) {
              case 'create':
                var newTimeSlot = new src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"]();
                Object.assign(newTimeSlot, Object.assign({}, this.model));
                this.timeSlots.push(newTimeSlot);
                break;

              case 'update':
                Object.assign(this.timeSlots[this.workingIndex], Object.assign({}, this.model));
                break;

              default:
                break;
            }

            $('#timeSlotFormModal').modal('hide');
            src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].toLocalStorage();
            formData.resetForm();
          }
        }
      }, {
        key: "initDelete",
        value: function initDelete(index) {
          this.storeMode = 'delete';
          this.workingIndex = index;
          Object.assign(this.model, Object.assign({}, this.timeSlots[index]));
          $('#timeSlotDeleteModal').modal('show');
        }
      }, {
        key: "deleteTimeSlot",
        value: function deleteTimeSlot() {
          $('#timeSlotDeleteModal').modal('hide');
          this.timeSlots.splice(this.workingIndex, 1);
          src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].toLocalStorage();
        }
      }, {
        key: "checkUnique",
        value: function checkUnique(formData) {
          var _this9 = this;

          var _loop4 = function _loop4(key) {
            _this9.timeSlots.forEach(function (item, index) {
              if (src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].uniqueKeys.indexOf(key) != -1) {
                if (item[key] == formData.form.controls[key].value) {
                  if (_this9.storeMode == 'create' || _this9.storeMode == 'update' && _this9.workingIndex != index) {
                    formData.form.controls[key].setErrors({
                      unique: true
                    });
                  }
                }
              }
            });
          };

          for (var key in formData.form.controls) {
            _loop4(key);
          }
        }
      }, {
        key: "viewDays",
        value: function viewDays(index) {
          this.workingIndex = index;
          Object.assign(this.model, Object.assign({}, this.timeSlots[index]));
          $('#timeSlotCardList').addClass('d-none');
          $('#timeSlotCardSetting').removeClass('d-none');
          setTimeout(function () {
            $('#timeSlotCardSetting').addClass('show');
          }, 300);
        }
      }, {
        key: "hideDays",
        value: function hideDays() {
          $('#timeSlotCardSetting').removeClass('show');
          setTimeout(function () {
            $('#timeSlotCardList').removeClass('d-none');
            $('#timeSlotCardSetting').addClass('d-none');
          }, 300);
        }
      }, {
        key: "storeTimeSlotSetting",
        value: function storeTimeSlotSetting(formData) {
          Object.assign(this.timeSlots[this.workingIndex], Object.assign({}, this.model));
          src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].toLocalStorage();
          alert('Perubahan telah tersimpan');
        }
      }, {
        key: "toggleActive",
        value: function toggleActive(i, j) {
          var index = i * src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].daysName.length + j - 1;
          var breakIndex = (this.model._breakAt - this.model._startAt) / this.model.slotDuration - 1;

          if (i > breakIndex) {
            index = index - src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].daysName.length;
          }

          this.model.slots[index] = !this.model.slots[index];
        }
      }, {
        key: "getTimeSlotsInput",
        value: function getTimeSlotsInput() {
          var _this10 = this;

          var temp = [];
          var timeTemp = this.model._startAt || 0;
          var slotTemp = this.model.slotsxxx;
          var slotIndex = 0;

          var _loop5 = function _loop5(i) {
            var row = [src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].minToTime(timeTemp) + '-' + src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].minToTime(timeTemp += _this10.model.slotDuration || 0)];
            src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].daysName.forEach(function (name) {
              row.push(slotTemp[slotIndex++] || false);
            });
            temp.push(row);

            if (_this10.model._breakAt && timeTemp == _this10.model._breakAt) {
              var _row = [src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].minToTime(timeTemp) + '-' + src_app_models_time_slot__WEBPACK_IMPORTED_MODULE_2__["TimeSlot"].minToTime(timeTemp += _this10.model.breakDuration || 0)];
              temp.push(_row);
            }
          };

          for (var i = 0; i < this.model.nSlotDay; i++) {
            _loop5(i);
          }

          return temp;
        }
      }, {
        key: "getBreakOptions",
        value: function getBreakOptions() {
          var result = [];
          var temp = this.model._startAt;

          for (var index = 0; index < this.model.nSlotDay; index++) {
            result.push({
              id: index,
              text: this.timeSlotClass.minToTime(temp += this.model.slotDuration)
            });
          }

          return result;
        }
      }]);

      return TimeSlotComponent;
    }();

    TimeSlotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-time-slot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./time-slot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/time-slot/time-slot.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./time-slot.component.css */
      "./src/app/pages/time-slot/time-slot.component.css"))["default"]]
    })], TimeSlotComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      localStorageItemName: 'sensasiSchedulerData'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\zain\Desktop\sensasi-scheduler\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map