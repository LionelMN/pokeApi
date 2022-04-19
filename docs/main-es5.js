(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Lionel\proyectos\pokeApi\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1ujl":
    /*!*************************************************************!*\
      !*** ./src/app/components/searchbar/searchbar.component.ts ***!
      \*************************************************************/

    /*! exports provided: SearchbarComponent */

    /***/
    function ujl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function () {
        return SearchbarComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/pokedex/pokedex.service */
      "XlhV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function SearchbarComponent_div_3_div_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchbarComponent_div_3_div_1_span_1_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var pokemon_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r4.selectSuggestion(pokemon_r3.name);
          })("click", function SearchbarComponent_div_3_div_1_span_1_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r6.reloadPage(ctx_r6.search);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pokemon_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pokemon_r3.name, " ");
        }
      }

      function SearchbarComponent_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchbarComponent_div_3_div_1_span_1_Template, 2, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.filteredPokemons);
        }
      }

      function SearchbarComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchbarComponent_div_3_div_1_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.searchCategory === "pokemon");
        }
      }

      var SearchbarComponent = /*#__PURE__*/function () {
        function SearchbarComponent(pokedexService, document) {
          _classCallCheck(this, SearchbarComponent);

          this.pokedexService = pokedexService;
          this.document = document;
          this.search = "";
          this.isSearchActive = false;
          this.searchCategory = 'pokemon';
          this.allPokemons = [];
          this.filteredPokemons = [];
        }

        _createClass(SearchbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPokedex();
          }
        }, {
          key: "getPokedex",
          value: function getPokedex() {
            var _this = this;

            this.pokedexService.getAllPokemon().subscribe(function (pokemon) {
              _this.allPokemons = pokemon.results;
            });
          }
        }, {
          key: "onActivateSearch",
          value: function onActivateSearch() {
            this.isSearchActive = true;
          }
        }, {
          key: "onDeactivateSearch",
          value: function onDeactivateSearch() {
            var _this2 = this;

            setTimeout(function () {
              _this2.isSearchActive = false;
            }, 500);
          }
        }, {
          key: "filterItems",
          value: function filterItems(string) {
            string = string.toLowerCase();

            if (this.searchCategory === "pokemon") {
              this.filteredPokemons = this.allPokemons;
              this.filteredPokemons = this.allPokemons.filter(function (pokemons) {
                return pokemons.name.includes(string);
              });
            }
          }
        }, {
          key: "selectSuggestion",
          value: function selectSuggestion(suggestedOption) {
            this.search = suggestedOption;
          }
        }, {
          key: "reloadPage",
          value: function reloadPage(input) {
            input = input.toLowerCase();
            this.search = "";
            this.document.location.replace("pokemon/".concat(input));
          }
        }]);

        return SearchbarComponent;
      }();

      SearchbarComponent.ɵfac = function SearchbarComponent_Factory(t) {
        return new (t || SearchbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_2__["PokedexService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      SearchbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SearchbarComponent,
        selectors: [["app-searchbar"]],
        decls: 4,
        vars: 2,
        consts: [[1, "searchbar"], ["action", "", 3, "submit"], ["type", "text", "name", "search", "placeholder", "Search a Pok\xE9mon", "autocomplete", "off", 3, "ngModel", "ngModelChange", "focus", "focusout"], ["class", "predictiveSearch", 4, "ngIf"], [1, "predictiveSearch"], ["class", "predictive-options", 4, "ngIf"], [1, "predictive-options"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]],
        template: function SearchbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SearchbarComponent_Template_form_submit_1_listener() {
              return ctx.reloadPage(ctx.search);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchbarComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.search = $event;
            })("focus", function SearchbarComponent_Template_input_focus_2_listener() {
              return ctx.onActivateSearch();
            })("focusout", function SearchbarComponent_Template_input_focusout_2_listener() {
              return ctx.onDeactivateSearch();
            })("ngModelChange", function SearchbarComponent_Template_input_ngModelChange_2_listener() {
              return ctx.filterItems(ctx.search);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchbarComponent_div_3_Template, 2, 1, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSearchActive);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]],
        styles: [".searchbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 1rem;\n  border-radius: 100%;\n  outline: none;\n  border: none;\n  padding: 0.2rem 0.3rem 0.2rem 0.3rem;\n  transition: 1s;\n  margin-top: 1.5rem;\n}\n.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 5px 2px white;\n  width: 10rem;\n  border-radius: 5px;\n}\n.predictiveSearch[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  max-height: 500px;\n  width: 10rem;\n  overflow: auto;\n  margin: 0 auto;\n}\n.predictiveSearch[_ngcontent-%COMP%]   .predictive-options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  display: block;\n  cursor: pointer;\n  margin: 0.1rem 0.5rem 0.1rem 0;\n  transition: 0.5s;\n  width: 120px;\n  outline: none;\n}\n.predictiveSearch[_ngcontent-%COMP%]   .predictive-options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) translateX(15px);\n}\n@media only screen and (max-width: 480px) {\n  .searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 10rem;\n    border-radius: 5px;\n  }\n\n  .predictiveSearch[_ngcontent-%COMP%] {\n    max-height: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFHTjtBQUVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDRjtBQUNJO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNOO0FBQU07RUFDRSxzQ0FBQTtBQUVSO0FBSUE7RUFFSTtJQUNFLFlBQUE7SUFDQSxrQkFBQTtFQUZKOztFQU1BO0lBQ0UsaUJBQUE7RUFIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaGJhcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGlucHV0e1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjNyZW0gMC4ycmVtIDAuM3JlbTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCB3aGl0ZTtcclxuICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJlZGljdGl2ZVNlYXJjaHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC5wcmVkaWN0aXZlLW9wdGlvbnN7XHJcbiAgICBzcGFue1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luOiAwLjFyZW0gMC41cmVtIDAuMXJlbSAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlWCgxNXB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgLnNlYXJjaGJhcntcclxuICAgIGlucHV0e1xyXG4gICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcmVkaWN0aXZlU2VhcmNoe1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-searchbar',
            templateUrl: './searchbar.component.html',
            styleUrls: ['./searchbar.component.scss']
          }]
        }], function () {
          return [{
            type: _services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_2__["PokedexService"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "I22L":
    /*!********************************************************!*\
      !*** ./src/app/views/item-list/item-list.component.ts ***!
      \********************************************************/

    /*! exports provided: ItemListComponent */

    /***/
    function I22L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemListComponent", function () {
        return ItemListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_items_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/items/items.service */
      "vRtT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/spinner/spinner.component */
      "e5sC");

      function ItemListComponent_app_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
        }
      }

      function ItemListComponent_div_2_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pokeball_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/item/", pokeball_r5.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pokeball_r5.sprites, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", pokeball_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokeball_r5.name);
        }
      }

      function ItemListComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemListComponent_div_2_div_1_div_1_Template, 4, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.pokeballs);
        }
      }

      function ItemListComponent_div_2_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var medicine_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/item/", medicine_r7.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", medicine_r7.sprites, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", medicine_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](medicine_r7.name);
        }
      }

      function ItemListComponent_div_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemListComponent_div_2_div_2_div_1_Template, 4, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.medicines);
        }
      }

      function ItemListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemListComponent_div_2_div_1_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemListComponent_div_2_div_2_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.category === "pokeballs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.category === "medicines");
        }
      }

      var ItemListComponent = /*#__PURE__*/function () {
        function ItemListComponent(itemsService, route) {
          _classCallCheck(this, ItemListComponent);

          this.itemsService = itemsService;
          this.route = route;
          this.isContenLoaded = false;
          this.items = [];
          this.pokeballs = [];
          this.medicines = [];
        }

        _createClass(ItemListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.category = this.route.snapshot.queryParamMap.get('category');
            this.getAllItems();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.category !== this.route.snapshot.queryParamMap.get('category')) {
              this.category = this.route.snapshot.queryParamMap.get('category');
            }
          }
        }, {
          key: "getAllItems",
          value: function getAllItems() {
            var _this3 = this;

            this.itemsService.getAllItems().subscribe(function (items) {
              _this3.items = items.results;

              var _loop = function _loop(i) {
                _this3.itemsService.getItem(_this3.items[i].url).subscribe(function (item) {
                  _this3.items[i].id = item.id;
                  _this3.items[i].sprites = item.sprites["default"];
                  _this3.items[i].category = item.category;

                  _this3.fillterItems(_this3.items[i]);
                });
              };

              for (var i = 0; i < _this3.items.length; i++) {
                _loop(i);
              }

              setTimeout(function () {
                _this3.isContenLoaded = true;
              }, 1000);
            });
          }
        }, {
          key: "fillterItems",
          value: function fillterItems(itemRecived) {
            if (itemRecived.category.name === 'status-cures' || itemRecived.category.name === 'healing' || itemRecived.category.name === 'revival' || itemRecived.category.name === 'pp-recovery') {
              this.medicines.push(itemRecived);
            }

            if (itemRecived.category.name === 'standard-balls' || itemRecived.category.name === 'special-balls' || itemRecived.category.name === 'apricorn-balls') {
              this.pokeballs.push(itemRecived);
            }
          }
        }]);

        return ItemListComponent;
      }();

      ItemListComponent.ɵfac = function ItemListComponent_Factory(t) {
        return new (t || ItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_items_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      ItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ItemListComponent,
        selectors: [["app-item-list"]],
        decls: 3,
        vars: 2,
        consts: [[1, "view-container"], [4, "ngIf"], ["class", "itemList", 4, "ngIf"], [1, "itemList"], ["class", "item-container", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "item-container", 3, "routerLink"], [3, "src", "alt"]],
        template: function ItemListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemListComponent_app_spinner_1_Template, 1, 0, "app-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemListComponent_div_2_Template, 3, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isContenLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isContenLoaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".view-container[_ngcontent-%COMP%] {\n  font-family: \"Spectral\", sans-serif;\n  color: var(--terciary-bgColor);\n  background: black;\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  width: 15%;\n  margin: 1rem 1.5rem;\n  transition: 2s ease-in-out;\n  border: 1px solid var(--forth-bgColor);\n  background: var(--terciary-bgColor);\n  z-index: 1;\n  overflow: hidden;\n  cursor: pointer;\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]::before, .view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 25%;\n  width: 50%;\n  background: var(--primary-bgColor);\n  z-index: -1;\n  transition: 2s ease-in-out;\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]::before {\n  transform: skew(255deg);\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]::after {\n  transform: skew(105deg);\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  margin-bottom: -10px;\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 1.5rem;\n  background: rgba(0, 0, 0, 0.1);\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  background: var(--secondary-bgColor);\n  box-shadow: 0px 0px 10px 1px var(--primary-bgColor), 0px 0px 15px 1px var(--secondary-bgColor), 0px 0px 20px 1px var(--primary-bgColor), 0px 0px 25px 1px var(--secondary-bgColor);\n  z-index: 100;\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover::before, .view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n  left: 0%;\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover::before {\n  transform: rotate(45deg) skew(5deg);\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover::after {\n  transform: rotate(315deg);\n}\n.view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  background: none;\n}\n@media only screen and (max-width: 480px) {\n  .view-container[_ngcontent-%COMP%]   .itemList[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%] {\n    margin: 1rem 0.5rem;\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQUU7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBRU47QUFETTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHUjtBQUZRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBSVY7QUFGUTtFQUNFLHVCQUFBO0FBSVY7QUFGUTtFQUNFLHVCQUFBO0FBSVY7QUFGUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFJWjtBQUZRO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBSVY7QUFETTtFQUNJLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrTEFDRTtFQUlGLFlBQUE7QUFEVjtBQUVVO0VBQ0UsV0FBQTtFQUNBLFFBQUE7QUFBWjtBQUVVO0VBQ0UsbUNBQUE7QUFBWjtBQUVVO0VBQ0UseUJBQUE7QUFBWjtBQUVVO0VBQ0UsZ0JBQUE7QUFBWjtBQU1BO0VBR007SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUFMTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3LWNvbnRhaW5lcntcclxuICBmb250LWZhbWlseTogJ1NwZWN0cmFsJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogdmFyKC0tdGVyY2lhcnktYmdDb2xvcik7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgLml0ZW1MaXN0e1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC5pdGVtLWNvbnRhaW5lcntcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDEuNXJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3J0aC1iZ0NvbG9yKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXJjaWFyeS1iZ0NvbG9yKTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6OmJlZm9yZSwmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWJnQ29sb3IpO1xyXG4gICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBza2V3KDI1NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBza2V3KDEwNWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtLWNvbnRhaW5lcjpob3ZlcntcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1iZ0NvbG9yKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgICAgIDBweCAwcHggMTBweCAxcHggdmFyKC0tcHJpbWFyeS1iZ0NvbG9yKSxcclxuICAgICAgICAgICAgMHB4IDBweCAxNXB4IDFweCB2YXIoLS1zZWNvbmRhcnktYmdDb2xvciksXHJcbiAgICAgICAgICAgIDBweCAwcHggMjBweCAxcHggdmFyKC0tcHJpbWFyeS1iZ0NvbG9yKSxcclxuICAgICAgICAgICAgMHB4IDBweCAyNXB4IDFweCB2YXIoLS1zZWNvbmRhcnktYmdDb2xvcik7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAmOjpiZWZvcmUsICY6OmFmdGVye1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBza2V3KDVkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuICAudmlldy1jb250YWluZXJ7XHJcbiAgICAuaXRlbUxpc3R7XHJcbiAgICAgIC5pdGVtLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-item-list',
            templateUrl: './item-list.component.html',
            styleUrls: ['./item-list.component.scss']
          }]
        }], function () {
          return [{
            type: _services_items_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "M523":
    /*!********************************************************!*\
      !*** ./src/app/views/item-view/item-view.component.ts ***!
      \********************************************************/

    /*! exports provided: ItemViewComponent */

    /***/
    function M523(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemViewComponent", function () {
        return ItemViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_items_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/items/items.service */
      "vRtT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/spinner/spinner.component */
      "e5sC");

      function ItemViewComponent_app_spinner_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
        }
      }

      function ItemViewComponent_div_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemViewComponent_div_1_span_2_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.getItem(ctx_r5.item.id - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/item/", ctx_r2.item.id - 1, "");
        }
      }

      function ItemViewComponent_div_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemViewComponent_div_1_span_5_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.getItem(ctx_r7.item.id + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/item/", ctx_r3.item.id + 1, "");
        }
      }

      function ItemViewComponent_div_1_tr_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var attribute_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attribute_r9.name);
        }
      }

      function ItemViewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemViewComponent_div_1_span_2_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ItemViewComponent_div_1_span_5_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Effect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Game Entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Attributes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ItemViewComponent_div_1_tr_32_Template, 3, 1, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.id > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.id < 954);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.item.sprites["default"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.item.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.category.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.effect_entries[0].effect);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.flavor_text_entries[0].text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowSpan", ctx_r1.item.attributes.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.item.attributes);
        }
      }

      var ItemViewComponent = /*#__PURE__*/function () {
        function ItemViewComponent(itemsService, route) {
          _classCallCheck(this, ItemViewComponent);

          this.itemsService = itemsService;
          this.route = route;
          this.isContentLoaded = false;
        }

        _createClass(ItemViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.urlId = this.route.snapshot.paramMap.get('id');
            this.getItem(this.urlId);
          }
        }, {
          key: "getItem",
          value: function getItem(id) {
            var _this4 = this;

            this.itemsService.getItem("https://pokeapi.co/api/v2/item/".concat(id)).subscribe(function (item) {
              _this4.item = item;
              _this4.isContentLoaded = true;
            });
          }
        }]);

        return ItemViewComponent;
      }();

      ItemViewComponent.ɵfac = function ItemViewComponent_Factory(t) {
        return new (t || ItemViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_items_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      ItemViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ItemViewComponent,
        selectors: [["app-item-view"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "nameBar"], ["class", "navigation", 3, "routerLink", "click", 4, "ngIf"], [1, "itemName"], [1, "itemData"], [3, "src", "alt"], [1, "data"], ["colspan", "2"], [3, "rowSpan"], [4, "ngFor", "ngForOf"], [1, "navigation", 3, "routerLink", "click"]],
        template: function ItemViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItemViewComponent_app_spinner_0_Template, 1, 0, "app-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemViewComponent_div_1_Template, 33, 10, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isContentLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isContentLoaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.container[_ngcontent-%COMP%]   .nameBar[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-family: \"Karla\";\n  border: 1px solid white;\n  border-radius: 50px;\n  margin: 0.5rem 1rem;\n  padding: 0.5rem;\n}\n.container[_ngcontent-%COMP%]   .nameBar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  outline: none;\n}\n.container[_ngcontent-%COMP%]   .nameBar[_ngcontent-%COMP%]   span.navigation[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--terciary-bgColor);\n}\n.container[_ngcontent-%COMP%]   .nameBar[_ngcontent-%COMP%]   span.itemName[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  letter-spacing: 0.5rem;\n  font-weight: 600;\n}\n.container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 32% 68%;\n  margin-top: 1rem;\n  padding: 1rem 0.5rem;\n  color: #ffffff;\n  z-index: 1;\n  background: var(--forth-bgColor);\n}\n.container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: -3px;\n  bottom: -3px;\n  left: -45px;\n  width: 35rem;\n  background: var(--secondary-bgColor);\n  z-index: -1;\n  transform: skew(350deg);\n  box-shadow: 6px 0 10px 1px #000000;\n}\n.container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15rem;\n  background: #ffffff;\n  border-radius: 50%;\n  box-shadow: 0 6px 10px 1px #000000;\n}\n.container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  color: black;\n  border: 1px solid var(--terciary-bgColor);\n  border-radius: 5px;\n  text-transform: capitalize;\n  vertical-align: middle;\n  margin: 0.5rem;\n  background: rgba(255, 255, 255, 0.4);\n  grid-row: 2/3;\n  box-shadow: 0 1px 10px 1px #000000;\n}\n.container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: \"Karla\";\n  padding: 0.2rem;\n  border-bottom: 1px solid var(--terciary-bgColor);\n  font-weight: 900;\n}\n.container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Spectral\";\n  text-align: center;\n  margin: 0;\n  padding: 0.2rem;\n  border-bottom: 2px solid var(--terciary-bgColor);\n}\n.container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  border-right: 2px solid var(--terciary-bgColor);\n}\n.container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 55rem;\n  border: none;\n}\n.container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n@media only screen and (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .container[_ngcontent-%COMP%]   .nameBar[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]::before {\n    transform: skew(0deg);\n    height: 12rem;\n    width: 100%;\n    left: 0;\n    box-shadow: 0px 0 10px 1px #000000;\n  }\n  .container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10rem;\n    margin: 0 25vw;\n  }\n  .container[_ngcontent-%COMP%]   .itemData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaXRlbS12aWV3L2l0ZW0tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRUo7QUFESTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtBQUdOO0FBRk07RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUFJUjtBQUZNO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBSVI7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFFSjtBQURJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7QUFHTjtBQURJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQUdOO0FBREk7RUFDRSxjQUFBO0FBR047QUFGTTtFQUNFLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQUlSO0FBRlU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtFQUNBLGdCQUFBO0FBSVo7QUFGVTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdEQUFBO0FBSVo7QUFIWTtFQUNFLCtDQUFBO0FBS2Q7QUFGYztFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSWhCO0FBQ1k7RUFDRSxtQkFBQTtBQUNkO0FBVUE7RUFDRTtJQUNFLFVBQUE7RUFQRjtFQVFFO0lBQ0Usa0JBQUE7RUFOSjtFQVNFO0lBQ0UsY0FBQTtFQVBKO0VBUUk7SUFDRSxxQkFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsT0FBQTtJQUNBLGtDQUFBO0VBTk47RUFRSTtJQUNFLFlBQUE7SUFDQSxjQUFBO0VBTk47RUFRSTtJQUNFLGdCQUFBO0VBTk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2l0ZW0tdmlldy9pdGVtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgLm5hbWVCYXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYXJsYSc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgc3BhbntcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICYubmF2aWdhdGlvbntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgICB9XHJcbiAgICAgICYuaXRlbU5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLml0ZW1EYXRhe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIlIDY4JTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcnRoLWJnQ29sb3IpO1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHRvcDogLTNweDtcclxuICAgICAgYm90dG9tOiAtM3B4O1xyXG4gICAgICBsZWZ0OiAtNDVweDtcclxuICAgICAgd2lkdGg6IDM1cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmdDb2xvcik7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoMzUwZGVnKTtcclxuICAgICAgYm94LXNoYWRvdzogNnB4IDAgMTBweCAxcHggIzAwMDAwMDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IDFweCAjMDAwMDAwO1xyXG4gICAgfVxyXG4gICAgLmRhdGF7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB0YWJsZXtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGVyY2lhcnktYmdDb2xvcik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IDFweCAjMDAwMDAwO1xyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLYXJsYSc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1NwZWN0cmFsJztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS10ZXJjaWFyeS1iZ0NvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cntcclxuICAgICAgICAgICAgICB0ZHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1NXJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgdGR7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC5uYW1lQmFye1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW1EYXRhe1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tldygwZGVnKTtcclxuICAgICAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDAgMTBweCAxcHggIzAwMDAwMDtcclxuICAgICAgfVxyXG4gICAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMCAyNXZ3O1xyXG4gICAgICB9XHJcbiAgICAgIC5kYXRhe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-item-view',
            templateUrl: './item-view.component.html',
            styleUrls: ['./item-view.component.scss']
          }]
        }], function () {
          return [{
            type: _services_items_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QDfg":
    /*!**************************************************************!*\
      !*** ./src/app/views/pokemon-view/pokemon-view.component.ts ***!
      \**************************************************************/

    /*! exports provided: PokemonViewComponent */

    /***/
    function QDfg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PokemonViewComponent", function () {
        return PokemonViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/pokedex/pokedex.service */
      "XlhV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/spinner/spinner.component */
      "e5sC");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");

      function PokemonViewComponent_app_spinner_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
        }
      }

      function PokemonViewComponent_div_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonViewComponent_div_1_span_2_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.getPokemon(ctx_r20.pokemon.id - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", ctx_r2.pokemon.id - 1, "");
        }
      }

      function PokemonViewComponent_div_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonViewComponent_div_1_span_5_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.getPokemon(ctx_r22.pokemon.id + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", ctx_r3.pokemon.id + 1, "");
        }
      }

      function PokemonViewComponent_div_1_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("type ", type_r24.type.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r24.type.name);
        }
      }

      function PokemonViewComponent_div_1_tr_29_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ability_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ability number ", ability_r25.slot, "");
        }
      }

      function PokemonViewComponent_div_1_tr_29_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hidden ability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokemonViewComponent_div_1_tr_29_td_3_Template, 2, 1, "td", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PokemonViewComponent_div_1_tr_29_ng_template_4_Template, 2, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ability_r25 = ctx.$implicit;

          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ability_r25.ability.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ability_r25.is_hidden)("ngIfElse", _r27);
        }
      }

      function PokemonViewComponent_div_1_tr_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var stats_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stats_r30.stat.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stats_r30.base_stat);
        }
      }

      function PokemonViewComponent_div_1_div_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonViewComponent_div_1_div_35_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.getPokemon(ctx_r31.pokemon.evolution_chain.chain.stage1Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", ctx_r7.pokemon.evolution_chain.chain.stage1Id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/", ctx_r7.pokemon.evolution_chain.chain.stage1Id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.pokemon.evolution_chain.chain.species.name);
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", version_r38.min_level, "");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Happiness ", version_r38.min_happiness, "");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Time of day ", version_r38.time_of_day, "");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Use ", version_r38.item.name, "");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_5_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_5_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_5_span_1_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_5_span_2_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r38.gender == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r38.gender == 2);
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("level up in ", version_r38.location.name, "");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Knows ", version_r38.known_move.name, "");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Knows a ", version_r38.known_move_type.name, " type move");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_1_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_2_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_3_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_4_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_5_Template, 3, 2, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_6_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_7_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_span_8_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r38.min_level);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r38.min_happiness);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r38.time_of_day);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r38.item);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r38.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r38.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r38.known_move);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r38.known_move_type);
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", version_r60.min_level, "");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Happiness ", version_r60.min_happiness, "");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Use ", version_r60.item.name, "");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_4_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_4_span_1_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_4_span_2_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r60.gender == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r60.gender == 2);
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Knows ", version_r60.known_move.name, "");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Knows a ", version_r60.known_move_type.name, " type move");
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_1_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_2_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_3_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_4_Template, 3, 2, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_5_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_span_6_Template, 2, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r60 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r60.min_level);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r60.min_happiness);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r60.item);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r60.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r60.known_move);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", version_r60.known_move_type);
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var stage3_r58 = ctx.$implicit;

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

            return ctx_r75.getPokemon(stage3_r58.stage3Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_div_6_Template, 7, 6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var stage3_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", stage3_r58.stage3Id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/", stage3_r58.stage3Id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stage3_r58.species.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", stage3_r58.evolution_details);
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_div_1_Template, 7, 4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var stage2_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", stage2_r35.evolves_to);
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonViewComponent_div_1_div_36_div_5_div_1_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

            var stage2_r35 = ctx.$implicit;

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r78.getPokemon(stage2_r35.stage2Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PokemonViewComponent_div_1_div_36_div_5_div_1_div_6_Template, 9, 8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PokemonViewComponent_div_1_div_36_div_5_div_1_div_7_Template, 2, 1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var stage2_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", stage2_r35.stage2Id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/", stage2_r35.stage2Id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", stage2_r35.species.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", stage2_r35.evolution_details);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", stage2_r35.evolves_to.length !== 0);
        }
      }

      function PokemonViewComponent_div_1_div_36_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonViewComponent_div_1_div_36_div_5_div_1_Template, 8, 5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.pokemon.evolution_chain.chain.evolves_to);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "twoStages": a0,
          "threeStages": a1
        };
      };

      function PokemonViewComponent_div_1_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonViewComponent_div_1_div_36_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r80.getPokemon(ctx_r80.pokemon.evolution_chain.chain.stage1Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemonViewComponent_div_1_div_36_div_5_Template, 2, 1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r8.pokemon.evolution_chain.chain.evolves_to.length > 0, ctx_r8.pokemon.evolution_chain.chain.evolves_to[0].evolves_to.length > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", ctx_r8.pokemon.evolution_chain.chain.stage1Id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/", ctx_r8.pokemon.evolution_chain.chain.stage1Id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.pokemon.evolution_chain.chain.species.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.pokemon.evolution_chain.chain.evolves_to.length !== 0);
        }
      }

      function PokemonViewComponent_div_1_span_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show Move Table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_span_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hide Move Table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_44_div_10_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var version_r85 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](version_r85.version_group.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](version_r85.move_learn_method.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](version_r85.level_learned_at);
        }
      }

      function PokemonViewComponent_div_1_div_44_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PokemonViewComponent_div_1_div_44_div_10_div_4_Template, 7, 3, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var move_r83 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](move_r83.move.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", move_r83.version_group_details);
        }
      }

      function PokemonViewComponent_div_1_div_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Move");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Method");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PokemonViewComponent_div_1_div_44_div_10_Template, 5, 2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pagination-controls", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PokemonViewComponent_div_1_div_44_Template_pagination_controls_pageChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r86.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 1, ctx_r11.moves, ctx_r11.config));
        }
      }

      function PokemonViewComponent_div_1_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gen one");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Red and Blue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Front gray");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Back gray ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Yellow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Front gray");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Back gray ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.pokemon.sprites.versions["generation-i"]["red-blue"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.pokemon.sprites.versions["generation-i"]["red-blue"].back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.pokemon.sprites.versions["generation-i"]["red-blue"].front_gray, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.pokemon.sprites.versions["generation-i"]["red-blue"].back_gray, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.pokemon.sprites.versions["generation-i"]["yellow"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.pokemon.sprites.versions["generation-i"]["yellow"].back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.pokemon.sprites.versions["generation-i"]["yellow"].front_gray, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.pokemon.sprites.versions["generation-i"]["yellow"].back_gray, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gen two");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Gold");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Back shiny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Silver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Back shiny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Crystal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Back shiny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["gold"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["gold"].back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["gold"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["gold"].back_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["silver"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["silver"].back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["silver"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["silver"].back_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["crystal"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["crystal"].back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["crystal"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.pokemon.sprites.versions["generation-ii"]["crystal"].back_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_52_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fire Red and Leaf Green");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Back shiny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r88.pokemon.sprites.versions["generation-iii"]["firered-leafgreen"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r88.pokemon.sprites.versions["generation-iii"]["firered-leafgreen"].back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r88.pokemon.sprites.versions["generation-iii"]["firered-leafgreen"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r88.pokemon.sprites.versions["generation-iii"]["firered-leafgreen"].back_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gen three");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ruby and Sapphire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Back shiny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PokemonViewComponent_div_1_div_52_div_28_Template, 23, 4, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Emerald");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.pokemon.sprites.versions["generation-iii"]["ruby-sapphire"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.pokemon.sprites.versions["generation-iii"]["ruby-sapphire"].back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.pokemon.sprites.versions["generation-iii"]["ruby-sapphire"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.pokemon.sprites.versions["generation-iii"]["ruby-sapphire"].back_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.pokemon.sprites.versions["generation-iii"]["firered-leafgreen"].front_default);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.pokemon.sprites.versions["generation-iii"]["emerald"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.pokemon.sprites.versions["generation-iii"]["emerald"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r89.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r90.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].back_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r91.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r92.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].back_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_td_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_td_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_td_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r97.pokemon.sprites.versions["generation-iv"]["platinum"].front_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r98.pokemon.sprites.versions["generation-iv"]["platinum"].back_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r99.pokemon.sprites.versions["generation-iv"]["platinum"].front_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r100.pokemon.sprites.versions["generation-iv"]["platinum"].back_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_td_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_td_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_td_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_td_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r105.pokemon.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r106.pokemon.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r107.pokemon.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r108.pokemon.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_53_td_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_td_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_td_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_td_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gen four");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Diamond and Pearl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PokemonViewComponent_div_1_div_53_td_19_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PokemonViewComponent_div_1_div_53_td_20_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PokemonViewComponent_div_1_div_53_td_21_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PokemonViewComponent_div_1_div_53_td_22_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Back shiny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PokemonViewComponent_div_1_div_53_td_32_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PokemonViewComponent_div_1_div_53_td_33_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PokemonViewComponent_div_1_div_53_td_34_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PokemonViewComponent_div_1_div_53_td_35_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Platinum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, PokemonViewComponent_div_1_div_53_td_50_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, PokemonViewComponent_div_1_div_53_td_51_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PokemonViewComponent_div_1_div_53_td_52_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, PokemonViewComponent_div_1_div_53_td_53_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Back shiny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, PokemonViewComponent_div_1_div_53_td_63_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, PokemonViewComponent_div_1_div_53_td_64_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, PokemonViewComponent_div_1_div_53_td_65_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PokemonViewComponent_div_1_div_53_td_66_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "HeartGold and SoulSilver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, PokemonViewComponent_div_1_div_53_td_81_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, PokemonViewComponent_div_1_div_53_td_82_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, PokemonViewComponent_div_1_div_53_td_83_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, PokemonViewComponent_div_1_div_53_td_84_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Back shiny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, PokemonViewComponent_div_1_div_53_td_94_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, PokemonViewComponent_div_1_div_53_td_95_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, PokemonViewComponent_div_1_div_53_td_96_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, PokemonViewComponent_div_1_div_53_td_97_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].back_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["platinum"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["platinum"].back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["platinum"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["platinum"].back_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r15.pokemon.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_female);
        }
      }

      function PokemonViewComponent_div_1_div_54_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r113.pokemon.sprites.versions["generation-v"]["black-white"].front_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_54_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r114.pokemon.sprites.versions["generation-v"]["black-white"].back_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_54_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r115.pokemon.sprites.versions["generation-v"]["black-white"].front_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_54_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r116.pokemon.sprites.versions["generation-v"]["black-white"].back_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_54_td_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_54_td_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_54_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_54_td_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_54_td_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r121.pokemon.sprites.versions["generation-v"]["black-white"].animated.front_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_54_td_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r122.pokemon.sprites.versions["generation-v"]["black-white"].animated.back_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_54_td_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r123.pokemon.sprites.versions["generation-v"]["black-white"].animated.front_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_54_td_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r124.pokemon.sprites.versions["generation-v"]["black-white"].animated.back_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_54_td_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_54_td_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_54_td_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_54_td_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gen five");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Black and White and Black and White 2 (static)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PokemonViewComponent_div_1_div_54_td_19_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PokemonViewComponent_div_1_div_54_td_20_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PokemonViewComponent_div_1_div_54_td_21_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PokemonViewComponent_div_1_div_54_td_22_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Back shiny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PokemonViewComponent_div_1_div_54_td_32_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PokemonViewComponent_div_1_div_54_td_33_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PokemonViewComponent_div_1_div_54_td_34_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PokemonViewComponent_div_1_div_54_td_35_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Black and White and Black and White 2 (animated)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, PokemonViewComponent_div_1_div_54_td_50_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, PokemonViewComponent_div_1_div_54_td_51_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PokemonViewComponent_div_1_div_54_td_52_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, PokemonViewComponent_div_1_div_54_td_53_Template, 2, 1, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Back default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Back shiny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, PokemonViewComponent_div_1_div_54_td_63_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, PokemonViewComponent_div_1_div_54_td_64_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, PokemonViewComponent_div_1_div_54_td_65_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PokemonViewComponent_div_1_div_54_td_66_Template, 2, 0, "td", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].back_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].animated.front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].animated.back_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pokemon.sprites.versions["generation-v"]["black-white"].front_female);
        }
      }

      function PokemonViewComponent_div_1_div_55_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r129.pokemon.sprites.versions["generation-vi"]["x-y"].front_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_55_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r130.pokemon.sprites.versions["generation-vi"]["x-y"].front_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_55_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_55_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_55_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r133.pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_55_td_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r134.pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_55_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_55_td_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gen six");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "X and Y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PokemonViewComponent_div_1_div_55_td_15_Template, 2, 1, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PokemonViewComponent_div_1_div_55_td_16_Template, 2, 1, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PokemonViewComponent_div_1_div_55_td_22_Template, 2, 0, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PokemonViewComponent_div_1_div_55_td_23_Template, 2, 0, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Omega Ruby and Alpha Sapphire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PokemonViewComponent_div_1_div_55_td_34_Template, 2, 1, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PokemonViewComponent_div_1_div_55_td_35_Template, 2, 1, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PokemonViewComponent_div_1_div_55_td_41_Template, 2, 0, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PokemonViewComponent_div_1_div_55_td_42_Template, 2, 0, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r17.pokemon.sprites.versions["generation-vi"]["x-y"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r17.pokemon.sprites.versions["generation-vi"]["x-y"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pokemon.sprites.versions["generation-vi"]["x-y"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pokemon.sprites.versions["generation-vi"]["x-y"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pokemon.sprites.versions["generation-vi"]["x-y"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pokemon.sprites.versions["generation-vi"]["x-y"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r17.pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r17.pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pokemon.sprites.versions["generation-vi"]["x-y"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pokemon.sprites.versions["generation-vi"]["x-y"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pokemon.sprites.versions["generation-vi"]["x-y"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pokemon.sprites.versions["generation-vi"]["x-y"].front_female);
        }
      }

      function PokemonViewComponent_div_1_div_56_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r137.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_56_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r138.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_56_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_56_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gen seven");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sun and Moon and Ultra sun and Ultra moon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PokemonViewComponent_div_1_div_56_td_15_Template, 2, 1, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PokemonViewComponent_div_1_div_56_td_16_Template, 2, 1, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PokemonViewComponent_div_1_div_56_td_22_Template, 2, 0, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PokemonViewComponent_div_1_div_56_td_23_Template, 2, 0, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r18.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r18.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_female);
        }
      }

      function PokemonViewComponent_div_1_div_57_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r141.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_57_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r142.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_shiny_female, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PokemonViewComponent_div_1_div_57_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_57_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Front shiny female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PokemonViewComponent_div_1_div_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gen eight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sword and Shield");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PokemonViewComponent_div_1_div_57_td_15_Template, 2, 1, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PokemonViewComponent_div_1_div_57_td_16_Template, 2, 1, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Front default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Front shiny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PokemonViewComponent_div_1_div_57_td_22_Template, 2, 0, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PokemonViewComponent_div_1_div_57_td_23_Template, 2, 0, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r19.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r19.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_shiny, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_female);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_female);
        }
      }

      function PokemonViewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonViewComponent_div_1_span_2_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PokemonViewComponent_div_1_span_5_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PokemonViewComponent_div_1_div_10_Template, 2, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Other Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Height");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Abilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PokemonViewComponent_div_1_tr_29_Template, 6, 3, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Base stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PokemonViewComponent_div_1_tr_34_Template, 5, 2, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PokemonViewComponent_div_1_div_35_Template, 5, 3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PokemonViewComponent_div_1_div_36_Template, 6, 8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonViewComponent_div_1_Template_div_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146);

            var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r145.isMovesTableHide = !ctx_r145.isMovesTableHide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PokemonViewComponent_div_1_span_38_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, PokemonViewComponent_div_1_span_39_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Moves");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PokemonViewComponent_div_1_div_44_Template, 14, 4, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Sprites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, PokemonViewComponent_div_1_div_50_Template, 51, 8, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, PokemonViewComponent_div_1_div_51_Template, 74, 12, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PokemonViewComponent_div_1_div_52_Template, 44, 7, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, PokemonViewComponent_div_1_div_53_Template, 98, 36, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, PokemonViewComponent_div_1_div_54_Template, 67, 24, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, PokemonViewComponent_div_1_div_55_Template, 43, 12, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, PokemonViewComponent_div_1_div_56_Template, 24, 6, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, PokemonViewComponent_div_1_div_57_Template, 24, 6, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.id > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("#", ctx_r1.pokemon.id, " ", ctx_r1.pokemon.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.id < 898);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.pokemon.sprites.other["official-artwork"].front_default, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pokemon.types);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.pokemon.height / 10, "m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.pokemon.weight / 10, "kg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pokemon.abilities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pokemon.stats);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.evolution_chain.chain.evolves_to.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.evolution_chain.chain.evolves_to.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isMovesTableHide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isMovesTableHide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isMovesTableHide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.sprites.versions["generation-i"]["red-blue"].front_default);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.sprites.versions["generation-ii"]["gold"].front_default);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.sprites.versions["generation-iii"]["ruby-sapphire"].front_default);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_default);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.sprites.versions["generation-v"]["black-white"].front_default);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.sprites.versions["generation-vi"]["x-y"].front_default);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default);
        }
      }

      var PokemonViewComponent = /*#__PURE__*/function () {
        function PokemonViewComponent(pokedexService, route) {
          _classCallCheck(this, PokemonViewComponent);

          this.pokedexService = pokedexService;
          this.route = route;
          this.isContentLoaded = false;
          this.versions = [];
          this.isMovesTableHide = false;
        }

        _createClass(PokemonViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.urlId = this.route.snapshot.paramMap.get('id');
            this.getPokemon(this.urlId);
            this.getVersions();
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            this.config.currentPage = event;
          }
        }, {
          key: "getPokemon",
          value: function getPokemon(id) {
            var _this5 = this;

            this.isContentLoaded = false;
            this.pokedexService.getSinglePokemonById(id).subscribe(function (pokemon) {
              _this5.pokemon = pokemon;
              _this5.moves = pokemon.moves;
              _this5.config = {
                itemsPerPage: 10,
                currentPage: 1,
                totalItems: _this5.moves.length
              };

              _this5.getSpecies(id);
            });
          }
        }, {
          key: "getVersions",
          value: function getVersions() {
            var _this6 = this;

            this.pokedexService.getVersions().subscribe(function (versions) {
              _this6.versions = versions.results;
            });
          }
        }, {
          key: "getSpecies",
          value: function getSpecies(id) {
            var _this7 = this;

            this.pokedexService.getSpecies(id).subscribe(function (specie) {
              _this7.pokemon.species = specie;

              _this7.getEvolutionChain(specie.evolution_chain.url);
            });
          }
        }, {
          key: "getEvolutionChain",
          value: function getEvolutionChain(url) {
            var _this8 = this;

            this.pokedexService.getEvolutionChain(url).subscribe(function (chain) {
              _this8.pokemon.evolution_chain = chain;
              var reg = chain.chain.species.url;
              var regex = /\d+/g;
              var matches = reg.match(regex); // creates array from matches

              _this8.pokemon.evolution_chain.chain.stage1Id = matches[1];

              for (var i = 0; i < _this8.pokemon.evolution_chain.chain.evolves_to.length; i++) {
                var _reg = _this8.pokemon.evolution_chain.chain.evolves_to[i].species.url;
                var regex = /\d+/g;

                var matches = _reg.match(regex); // creates array from matches


                _this8.pokemon.evolution_chain.chain.evolves_to[i].stage2Id = matches[1];

                if (_this8.pokemon.evolution_chain.chain.evolves_to[i].evolves_to.length !== 0) {
                  for (var j = 0; j < _this8.pokemon.evolution_chain.chain.evolves_to[i].evolves_to.length; j++) {
                    var _reg2 = _this8.pokemon.evolution_chain.chain.evolves_to[i].evolves_to[j].species.url;
                    var regex = /\d+/g;

                    var matches = _reg2.match(regex); // creates array from matches


                    _this8.pokemon.evolution_chain.chain.evolves_to[i].evolves_to[j].stage3Id = matches[1];
                  }
                }
              }

              _this8.isContentLoaded = true;
            });
          }
        }]);

        return PokemonViewComponent;
      }();

      PokemonViewComponent.ɵfac = function PokemonViewComponent_Factory(t) {
        return new (t || PokemonViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_1__["PokedexService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      PokemonViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PokemonViewComponent,
        selectors: [["app-pokemon-view"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["class", "pokemon-container", 4, "ngIf"], [1, "pokemon-container"], [1, "nameBar"], ["class", "navigation", 3, "routerLink", "click", 4, "ngIf"], [1, "pokemonName"], [1, "pokemonData"], ["alt", "", 3, "src"], [1, "data"], [1, "types"], [3, "class", 4, "ngFor", "ngForOf"], [1, "otherData"], ["colspan", "2"], [1, "abilities"], [4, "ngFor", "ngForOf"], [1, "stats"], ["class", "evolutionChain oneStage", 4, "ngIf"], ["class", "evolutionChain", 3, "ngClass", 4, "ngIf"], [1, "movesTableController", 3, "click"], [1, "moveList"], [1, "moveList__title"], ["class", "moveList", 4, "ngIf"], [1, "sprites"], ["colspan", "8"], ["class", "genOne", 4, "ngIf"], ["class", "genTwo", 4, "ngIf"], ["class", "genThree", 4, "ngIf"], ["class", "genFour", 4, "ngIf"], ["class", "genFive", 4, "ngIf"], ["class", "genSix", 4, "ngIf"], ["class", "genSeven", 4, "ngIf"], ["class", "genEight", 4, "ngIf"], [1, "navigation", 3, "routerLink", "click"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "evolutionChain", "oneStage"], [1, "stagePictureContainer", 3, "routerLink", "click"], ["alt", "", 1, "evolutionIMG", 3, "src"], [1, "evolutionChain", 3, "ngClass"], ["class", "secondStages", 4, "ngIf"], [1, "secondStages"], ["id", "st", 4, "ngFor", "ngForOf"], ["id", "st"], [1, "stage"], [1, "evolutionConditions"], ["class", "thirdStages", 4, "ngIf"], [1, "thirdStages"], [1, "moveList__header"], ["class", "moveList__body", 4, "ngFor", "ngForOf"], [1, "paginationControls"], [3, "pageChange"], [1, "moveList__body"], [1, "move_name"], ["class", "version_details", 4, "ngFor", "ngForOf"], [1, "version_details"], [1, "genOne"], [1, "redBlue"], [1, "yellow"], [1, "genTwo"], [1, "gold"], [1, "silver"], [1, "crystal"], [1, "genThree"], [1, "rubySapphire"], ["class", "fireRedLeafGreen", 4, "ngIf"], [1, "emerald"], ["colspan", "4"], [1, "fireRedLeafGreen"], [1, "genFour"], [1, "diamondPearl"], [1, "platinum"], [1, "heartgoldSoulsilver"], [1, "genFive"], [1, "bwStatic"], [1, "bwanimated"], [1, "genSix"], [1, "xy"], ["colspan", "2", 4, "ngIf"], [1, "omegaAlpha"], [1, "genSeven"], [1, "sunMoon"], [1, "genEight"]],
        template: function PokemonViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PokemonViewComponent_app_spinner_0_Template, 1, 0, "app-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokemonViewComponent_div_1_Template, 58, 23, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isContentLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isContentLoaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]],
        pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]],
        styles: [".nameBar[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-family: \"Karla\";\n  border: 1px solid white;\n  border-radius: 50px;\n  margin: 0.5rem 1rem;\n  padding: 0.5rem;\n}\n.nameBar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  outline: none;\n}\n.nameBar[_ngcontent-%COMP%]   span.navigation[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--terciary-bgColor);\n}\n.nameBar[_ngcontent-%COMP%]   span.pokemonName[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  letter-spacing: 0.5rem;\n  font-weight: 600;\n}\n.pokemonData[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 32% 68%;\n  margin-top: 1rem;\n  padding: 1rem 0.5rem;\n  color: #ffffff;\n  z-index: 1;\n  background: var(--forth-bgColor);\n}\n.pokemonData[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: -3px;\n  bottom: -3px;\n  left: -45px;\n  width: 35rem;\n  background: var(--secondary-bgColor);\n  z-index: -1;\n  transform: skew(350deg);\n  box-shadow: 6px 0 10px 1px #000000;\n}\n.pokemonData[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 50%;\n  box-shadow: 0 6px 10px 1px #000000;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1rem;\n  align-self: center;\n  grid-column: 1/3;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  font-family: \"Spectral\";\n  font-weight: 900;\n  letter-spacing: 0.05rem;\n  position: relative;\n  width: 60px;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  text-align: center;\n  text-transform: capitalize;\n  padding: 0.3rem;\n  margin: 0 0.5rem;\n  z-index: 1;\n  box-shadow: 0 1px 10px 1px #000000;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  height: 35%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: -1;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .grass[_ngcontent-%COMP%] {\n  background-color: #008000;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .fire[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%] {\n  background-color: #0000ff;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .poison[_ngcontent-%COMP%] {\n  background-color: #800080;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .flying[_ngcontent-%COMP%] {\n  background-color: #87cefa;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .bug[_ngcontent-%COMP%] {\n  background-color: #9acd32;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .normal[_ngcontent-%COMP%] {\n  background-color: #a9a9a9;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .electric[_ngcontent-%COMP%] {\n  background-color: #e2e232;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .ground[_ngcontent-%COMP%] {\n  background-color: #daa520;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .fairy[_ngcontent-%COMP%] {\n  background-color: #ffc0cb;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .fighting[_ngcontent-%COMP%] {\n  background-color: #8b0000;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .psychic[_ngcontent-%COMP%] {\n  background-color: #ff00ff;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .rock[_ngcontent-%COMP%] {\n  background-color: #808080;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .steel[_ngcontent-%COMP%] {\n  background-color: #d3d3d3;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .ice[_ngcontent-%COMP%] {\n  background-color: #20b2aa;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .ghost[_ngcontent-%COMP%] {\n  background-color: #4b0082;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .dragon[_ngcontent-%COMP%] {\n  background-color: #00008b;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .dark[_ngcontent-%COMP%] {\n  background-color: #423942;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .otherData[_ngcontent-%COMP%] {\n  color: black;\n  width: 20rem;\n  border: 1px solid var(--terciary-bgColor);\n  border-radius: 5px;\n  text-transform: capitalize;\n  vertical-align: middle;\n  margin: 0.5rem;\n  background: rgba(255, 255, 255, 0.4);\n  grid-row: 2/3;\n  box-shadow: 0 1px 10px 1px #000000;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .otherData[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: \"Karla\";\n  padding: 0.2rem;\n  border-bottom: 1px solid var(--terciary-bgColor);\n  font-weight: 900;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .otherData[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Spectral\";\n  text-align: center;\n  margin: 0;\n  padding: 0.2rem;\n  border-bottom: 2px solid var(--terciary-bgColor);\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .otherData[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  border-right: 2px solid var(--terciary-bgColor);\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .otherData[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .abilities[_ngcontent-%COMP%] {\n  color: black;\n  width: 20rem;\n  border: 1px solid var(--terciary-bgColor);\n  border-radius: 5px;\n  text-transform: capitalize;\n  vertical-align: middle;\n  margin: 0.5rem;\n  background: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 1px 10px 1px #000000;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .abilities[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: \"Karla\";\n  padding: 0.2rem;\n  border-bottom: 1px solid var(--terciary-bgColor);\n  font-weight: 900;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .abilities[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Spectral\";\n  text-align: center;\n  margin: 0;\n  padding: 0.2rem;\n  border-bottom: 2px solid var(--terciary-bgColor);\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .abilities[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  border-right: 2px solid var(--terciary-bgColor);\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .abilities[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  color: black;\n  width: 20rem;\n  border: 1px solid var(--terciary-bgColor);\n  border-radius: 5px;\n  text-transform: capitalize;\n  vertical-align: middle;\n  margin: 0.5rem;\n  background: rgba(255, 255, 255, 0.4);\n  box-shadow: 0 1px 10px 1px #000000;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-family: \"Karla\";\n  padding: 0.2rem;\n  border-bottom: 1px solid var(--terciary-bgColor);\n  font-weight: 900;\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"Spectral\";\n  text-align: center;\n  margin: 0;\n  padding: 0.2rem;\n  border-bottom: 2px solid var(--terciary-bgColor);\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  border-right: 2px solid var(--terciary-bgColor);\n}\n.pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.evolutionChain[_ngcontent-%COMP%] {\n  font-family: \"Karla\";\n  font-weight: 600;\n  border: 1px solid var(--terciary-bgColor);\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.4);\n  margin: 1rem 0.5rem;\n  padding: 0.5rem;\n  display: grid;\n  align-items: center;\n  text-align: center;\n  text-transform: capitalize;\n}\n.evolutionChain[_ngcontent-%COMP%]   div#st[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.evolutionChain[_ngcontent-%COMP%]   .stage[_ngcontent-%COMP%] {\n  margin: 0.25rem;\n}\n.evolutionChain[_ngcontent-%COMP%]   .stagePictureContainer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.evolutionChain[_ngcontent-%COMP%]   img.evolutionIMG[_ngcontent-%COMP%] {\n  width: 200px;\n  display: block;\n  margin: auto;\n}\n.evolutionChain.oneStage[_ngcontent-%COMP%] {\n  display: block;\n}\n.evolutionChain.twoStages[_ngcontent-%COMP%] {\n  grid-template-columns: 50% 50%;\n}\n.evolutionChain.threeStages[_ngcontent-%COMP%] {\n  grid-template-columns: 30% 70%;\n}\n.movesTableController[_ngcontent-%COMP%] {\n  font-family: \"Karla\";\n  font-weight: 600;\n  text-transform: capitalize;\n  margin: 1rem 1rem -1rem;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n  border: 1px solid var(--terciary-bgColor);\n  width: 10%;\n  cursor: pointer;\n}\n.moveList[_ngcontent-%COMP%] {\n  font-family: \"Karla\";\n  text-transform: capitalize;\n  margin: 1rem 0.5rem;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n  border: 1px solid var(--terciary-bgColor);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.moveList__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 25%);\n  padding: 1rem 0;\n  font-weight: 600;\n}\n.moveList__body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25% 75%;\n  border-top: 1px solid var(--forth-bgColor);\n}\n.moveList__body[_ngcontent-%COMP%]   .move_name[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.moveList__body[_ngcontent-%COMP%]   .version_details[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--fith-bgColor);\n  border-bottom: 1px solid var(--fith-bgColor);\n  padding: 0.5rem;\n  display: grid;\n  grid-template-columns: repeat(3, 33.3%);\n}\n.moveList__body[_ngcontent-%COMP%]   .version_details[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.moveList[_ngcontent-%COMP%]   .paginationControls[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--terciary-bgColor);\n  padding: 1rem 0 0 0;\n}\ntable.sprites[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: middle;\n  margin: 0.5rem;\n  padding: 0.5rem 0.1rem;\n  border-radius: 10px;\n}\ntable.sprites[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.4);\n}\ntable.sprites[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 120rem;\n  border: 1px solid var(--terciary-bgColor);\n  border-radius: 5px;\n  font-weight: 900;\n  font-family: \"Karla\";\n}\ntable.sprites[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100rem;\n  border: 1px solid var(--terciary-bgColor);\n  margin: 0;\n  padding: 0.5rem;\n  font-family: \"Spectral\";\n}\ntable.sprites[_ngcontent-%COMP%]   .genOne[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genOne[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 0px;\n  bottom: 2px;\n  width: 50%;\n  background: #ff0000;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genOne[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 0px;\n  bottom: 2px;\n  width: 50%;\n  background: #0000ff;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genOne[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genOne[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 100%;\n  background: #ffff00;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genTwo[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genTwo[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #ffd900;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genTwo[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #c0c0c0;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genTwo[_ngcontent-%COMP%]   .gold[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genTwo[_ngcontent-%COMP%]   .gold[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #ffd900;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genTwo[_ngcontent-%COMP%]   .silver[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genTwo[_ngcontent-%COMP%]   .silver[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #c0c0c0;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genTwo[_ngcontent-%COMP%]   .crystal[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genTwo[_ngcontent-%COMP%]   .crystal[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 100%;\n  background: #add8e6;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genThree[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genThree[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #dc143c;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genThree[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #0000ff;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genThree[_ngcontent-%COMP%]   .fireRedLeafGreen[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genThree[_ngcontent-%COMP%]   .fireRedLeafGreen[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 0px;\n  bottom: 2px;\n  width: 50%;\n  background: #ff0000;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genThree[_ngcontent-%COMP%]   .fireRedLeafGreen[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 0px;\n  bottom: 2px;\n  width: 50%;\n  background: #00b600;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genThree[_ngcontent-%COMP%]   .emerald[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genThree[_ngcontent-%COMP%]   .emerald[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 0px;\n  bottom: 2px;\n  width: 100%;\n  background: #008000;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #add8e6;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #ffc0cb;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%]   .platinum[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%]   .platinum[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 100%;\n  background: #eee8aa;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%]   .heartgoldSoulsilver[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%]   .heartgoldSoulsilver[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #ffd900;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%]   .heartgoldSoulsilver[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #c0c0c0;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genFive[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genFive[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #000000;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genFive[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #ffffff;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genSix[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genSix[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #00008b;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genSix[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #8b0000;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genSix[_ngcontent-%COMP%]   .omegaAlpha[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genSix[_ngcontent-%COMP%]   .omegaAlpha[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #ff0000;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genSix[_ngcontent-%COMP%]   .omegaAlpha[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #0000ff;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genSeven[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genSeven[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #ffa600;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genSeven[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #00008b;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genEight[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genEight[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #dc143c;\n  z-index: -1;\n}\ntable.sprites[_ngcontent-%COMP%]   .genEight[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  bottom: 2px;\n  width: 50%;\n  background: #6494ed;\n  z-index: -1;\n}\n@media only screen and (max-width: 480px) {\n  .nameBar[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .pokemonData[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .pokemonData[_ngcontent-%COMP%]::before {\n    transform: skew(0deg);\n    height: 47%;\n    width: 100%;\n    left: 0;\n    box-shadow: 0px 0 10px 1px #000000;\n  }\n  .pokemonData[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  .pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .otherData[_ngcontent-%COMP%], .pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .abilities[_ngcontent-%COMP%], .pokemonData[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .evolutionChain[_ngcontent-%COMP%]   img.evolutionIMG[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n\n  table.sprites[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0.5rem 0;\n  }\n  table.sprites[_ngcontent-%COMP%]   .genOne[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genTwo[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genThree[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genFive[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genSix[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genSeven[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genEight[_ngcontent-%COMP%] {\n    overflow: auto !important;\n    margin: 0 auto;\n    width: 99vw;\n  }\n  table.sprites[_ngcontent-%COMP%]   .genOne[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genTwo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genThree[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genFive[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genSix[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genSeven[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], table.sprites[_ngcontent-%COMP%]   .genEight[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    overflow: auto !important;\n  }\n  table.sprites[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 65px;\n  }\n  table.sprites[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, table.sprites[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::after {\n    transform: skew(0deg) !important;\n  }\n  table.sprites[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before {\n    left: 0;\n  }\n  table.sprites[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n    right: 0;\n  }\n  table.sprites[_ngcontent-%COMP%]   .genThree[_ngcontent-%COMP%]   .emerald[_ngcontent-%COMP%]::before {\n    left: 0;\n  }\n  table.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%]   .platinum[_ngcontent-%COMP%]::before {\n    width: 194%;\n  }\n  table.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%]   .heartgoldSoulsilver[_ngcontent-%COMP%]::before {\n    width: 98%;\n  }\n  table.sprites[_ngcontent-%COMP%]   .genFour[_ngcontent-%COMP%]   .heartgoldSoulsilver[_ngcontent-%COMP%]::after {\n    width: 97%;\n    right: -95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcG9rZW1vbi12aWV3L3Bva2Vtb24tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQUU7RUFDRSwwQkFBQTtFQUNBLGFBQUE7QUFFSjtBQURJO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FBR047QUFESTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdOO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0FBRUo7QUFBRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQUVKO0FBQUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdOO0FBRk07RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQUlSO0FBSFE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FBS1Y7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFESTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFHTjtBQURRO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtBQUdWO0FBRFE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtBQUdWO0FBRlU7RUFDRSwrQ0FBQTtBQUlaO0FBQVU7RUFDRSxtQkFBQTtBQUVaO0FBR0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7QUFETjtBQUdRO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtBQURWO0FBR1E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtBQURWO0FBRVU7RUFDRSwrQ0FBQTtBQUFaO0FBSVU7RUFDRSxtQkFBQTtBQUZaO0FBT0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7QUFMTjtBQU9RO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtBQUxWO0FBT1E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtBQUxWO0FBTVU7RUFDRSwrQ0FBQTtBQUpaO0FBUVU7RUFDRSxtQkFBQTtBQU5aO0FBY0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQVhGO0FBWUU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQVZKO0FBWUU7RUFDRSxlQUFBO0FBVko7QUFZRTtFQUNFLGVBQUE7QUFWSjtBQVlFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBVko7QUFjQTtFQUNFLGNBQUE7QUFYRjtBQWNBO0VBQ0UsOEJBQUE7QUFYRjtBQWNBO0VBQ0UsOEJBQUE7QUFYRjtBQWNBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQVhGO0FBY0E7RUFDRSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBWEY7QUFZRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVZKO0FBWUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBQVZKO0FBV0k7RUFDRSxrQkFBQTtBQVROO0FBV0k7RUFDRSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtBQVROO0FBV0k7RUFDRSxtQkFBQTtBQVROO0FBWUU7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0FBVko7QUFjQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVhGO0FBWUU7RUFDRSxvQ0FBQTtBQVZKO0FBV0k7RUFDRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFUTjtBQVdJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBVE47QUFZRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBVko7QUFXSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFWTjtBQVlJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQVhOO0FBYUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQVhOO0FBWU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQVhSO0FBZUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQWJKO0FBY0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FBYk47QUFlSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFkTjtBQWdCSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBZE47QUFlTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFkUjtBQWlCSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBZk47QUFnQk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FBZlI7QUFrQkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQWhCTjtBQWlCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FBaEJSO0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFsQko7QUFtQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FBbEJOO0FBb0JJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQW5CTjtBQXFCSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBbkJOO0FBb0JNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQW5CUjtBQXFCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFwQlI7QUF1Qkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQXJCTjtBQXNCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFyQlI7QUF5QkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQXZCSjtBQXdCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUF2Qk47QUF5Qkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FBeEJOO0FBMEJJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUF4Qk47QUF5Qk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQXhCUjtBQTJCSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBekJOO0FBMEJNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQXpCUjtBQTJCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUExQlI7QUE4QkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQTVCSjtBQTZCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUE1Qk47QUE4Qkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FBN0JOO0FBZ0NFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUE5Qko7QUErQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FBOUJOO0FBZ0NJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQS9CTjtBQWlDSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBL0JOO0FBZ0NNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQS9CUjtBQWlDTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFoQ1I7QUFvQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQWxDSjtBQW1DSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFsQ047QUFvQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FBbkNOO0FBc0NFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFwQ0o7QUFxQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FBcENOO0FBc0NJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQXJDTjtBQTBDQTtFQUNFO0lBQ0Usa0JBQUE7RUF2Q0Y7O0VBMENBO0lBQ0UsY0FBQTtFQXZDRjtFQXdDRTtJQUNFLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxPQUFBO0lBQ0Esa0NBQUE7RUF0Q0o7RUF3Q0U7SUFDRSxXQUFBO0VBdENKO0VBd0NFO0lBQ0UsZ0JBQUE7RUF0Q0o7RUF1Q0k7SUFDRSxpQkFBQTtFQXJDTjtFQXVDSTtJQUNFLFdBQUE7RUFyQ047O0VBMkNFO0lBQ0UsV0FBQTtFQXhDSjs7RUE0Q0E7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUF6Q0Y7RUEwQ0U7SUFJRSx5QkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0VBM0NKO0VBc0NJO0lBQ0UseUJBQUE7RUFwQ047RUEyQ0U7SUFDRSxXQUFBO0VBekNKO0VBNENFO0lBQ0UsZ0NBQUE7RUExQ0o7RUE0Q0U7SUFDRSxPQUFBO0VBMUNKO0VBNENFO0lBQ0UsUUFBQTtFQTFDSjtFQThDSTtJQUNFLE9BQUE7RUE1Q047RUFpREk7SUFDRSxXQUFBO0VBL0NOO0VBa0RNO0lBQ0UsVUFBQTtFQWhEUjtFQWtETTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBaERSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wb2tlbW9uLXZpZXcvcG9rZW1vbi12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWVCYXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0thcmxhJztcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbjogMC41cmVtIDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHNwYW57XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAmLm5hdmlnYXRpb257XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6IHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgJi5wb2tlbW9uTmFtZXtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAuNXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wb2tlbW9uRGF0YXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyJSA2OCU7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvcnRoLWJnQ29sb3IpO1xyXG4gICY6OmJlZm9yZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICBib3R0b206IC0zcHg7XHJcbiAgICBsZWZ0OiAtNDVweDtcclxuICAgIHdpZHRoOiAzNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1iZ0NvbG9yKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDM1MGRlZyk7XHJcbiAgICBib3gtc2hhZG93OiA2cHggMCAxMHB4IDFweCAjMDAwMDAwO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMXB4ICMwMDAwMDA7XHJcbiAgfVxyXG4gIC5kYXRhe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIC50eXBlc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDM7XHJcbiAgICAgIC50eXBle1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU3BlY3RyYWwnO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBwYWRkaW5nOiAuM3JlbTtcclxuICAgICAgICBtYXJnaW46IDAgLjVyZW07XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IDFweCAjMDAwMDAwO1xyXG4gICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM1JTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZ3Jhc3N7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcclxuICAgICAgfVxyXG4gICAgICAuZmlyZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xyXG4gICAgICB9XHJcbiAgICAgIC53YXRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMGZmO1xyXG4gICAgICB9XHJcbiAgICAgIC5wb2lzb257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDA4MDtcclxuICAgICAgfVxyXG4gICAgICAuZmx5aW5ne1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4N2NlZmE7XHJcbiAgICAgIH1cclxuICAgICAgLmJ1Z3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFjZDMyO1xyXG4gICAgICB9XHJcbiAgICAgIC5ub3JtYWx7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxuICAgICAgfVxyXG4gICAgICAuZWxlY3RyaWN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTIzMjtcclxuICAgICAgfVxyXG4gICAgICAuZ3JvdW5ke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWE1MjA7XHJcbiAgICAgIH1cclxuICAgICAgLmZhaXJ5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMwY2I7XHJcbiAgICAgIH1cclxuICAgICAgLmZpZ2h0aW5ne1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XHJcbiAgICAgIH1cclxuICAgICAgLnBzeWNoaWN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDBmZjtcclxuICAgICAgfVxyXG4gICAgICAucm9ja3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xyXG4gICAgICB9XHJcbiAgICAgIC5zdGVlbHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xyXG4gICAgICB9XHJcbiAgICAgIC5pY2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwYjJhYTtcclxuICAgICAgfVxyXG4gICAgICAuZ2hvc3R7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRiMDA4MjtcclxuICAgICAgfVxyXG4gICAgICAuZHJhZ29ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwOGI7XHJcbiAgICAgIH1cclxuICAgICAgLmRhcmt7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyMzk0MjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm90aGVyRGF0YXtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICBncmlkLXJvdzogMiAvIDM7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMXB4ICMwMDAwMDA7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0thcmxhJztcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXJjaWFyeS1iZ0NvbG9yKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3BlY3RyYWwnO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICB0ZHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hYmlsaXRpZXN7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXJjaWFyeS1iZ0NvbG9yKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggMTBweCAxcHggIzAwMDAwMDtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnS2FybGEnO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTcGVjdHJhbCc7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGVyY2lhcnktYmdDb2xvcik7XHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tdGVyY2lhcnktYmdDb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgIHRke1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN0YXRze1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGVyY2lhcnktYmdDb2xvcik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMXB4ICMwMDAwMDA7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0thcmxhJztcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXJjaWFyeS1iZ0NvbG9yKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3BlY3RyYWwnO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICB0ZHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ldm9sdXRpb25DaGFpbntcclxuICBmb250LWZhbWlseTogXCJLYXJsYVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGVyY2lhcnktYmdDb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBkaXYjc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3RhZ2V7XHJcbiAgICBtYXJnaW46IC4yNXJlbTtcclxuICB9XHJcbiAgLnN0YWdlUGljdHVyZUNvbnRhaW5lcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgaW1nLmV2b2x1dGlvbklNRyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5ldm9sdXRpb25DaGFpbi5vbmVTdGFnZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmV2b2x1dGlvbkNoYWluLnR3b1N0YWdlc3tcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbn1cclxuXHJcbi5ldm9sdXRpb25DaGFpbi50aHJlZVN0YWdlc3tcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA3MCU7XHJcbn1cclxuXHJcbi5tb3Zlc1RhYmxlQ29udHJvbGxlcntcclxuICBmb250LWZhbWlseTogXCJLYXJsYVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbWFyZ2luOiAxcmVtIDFyZW0gLTFyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXJjaWFyeS1iZ0NvbG9yKTtcclxuICB3aWR0aDogMTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1vdmVMaXN0e1xyXG4gIGZvbnQtZmFtaWx5OiBcIkthcmxhXCI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmX19oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjUlKTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gICZfX2JvZHl7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcnRoLWJnQ29sb3IpO1xyXG4gICAgLm1vdmVfbmFtZXtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnZlcnNpb25fZGV0YWlsc3tcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1maXRoLWJnQ29sb3IpO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZml0aC1iZ0NvbG9yKTtcclxuICAgICAgcGFkZGluZzogLjVyZW07XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMzLjMlKTtcclxuICAgIH1cclxuICAgIC52ZXJzaW9uX2RldGFpbHM6bGFzdC1jaGlsZHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnBhZ2luYXRpb25Db250cm9sc3tcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS10ZXJjaWFyeS1iZ0NvbG9yKTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMCAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG50YWJsZS5zcHJpdGVze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbjogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB0cntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAgIHRoIHtcclxuICAgICAgd2lkdGg6IDEyMHJlbTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGVyY2lhcnktYmdDb2xvcik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdLYXJsYSc7XHJcbiAgICB9XHJcbiAgICB0ZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMHJlbTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGVyY2lhcnktYmdDb2xvcik7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBmb250LWZhbWlseTogJ1NwZWN0cmFsJztcclxuICAgIH1cclxuICB9XHJcbiAgLmdlbk9uZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICBib3R0b206IDJweDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcclxuXHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMnB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICBib3R0b206IDJweDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDBmZjtcclxuXHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gICAgLnllbGxvd3tcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAmOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcclxuXHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmdlblR3b3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgbGVmdDogMnB4O1xyXG4gICAgICBib3R0b206IDJweDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZDkwMDtcclxuXHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMnB4O1xyXG4gICAgICByaWdodDogMnB4O1xyXG4gICAgICBib3R0b206IDJweDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2MwYzBjMDtcclxuXHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gICAgLmdvbGR7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZkOTAwO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNpbHZlcntcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAmOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2MwYzBjMDtcclxuXHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jcnlzdGFse1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICY6OmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYWRkOGU2O1xyXG5cclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuZ2VuVGhyZWV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAycHg7XHJcbiAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkYzE0M2M7XHJcblxyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgICY6OmFmdGVye1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDAwZmY7XHJcblxyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgIC5maXJlUmVkTGVhZkdyZWVue1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcclxuXHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIH1cclxuICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiNjAwO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmVtZXJhbGR7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwODAwMDtcclxuXHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmdlbkZvdXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAycHg7XHJcbiAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNhZGQ4ZTY7XHJcblxyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgICY6OmFmdGVye1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmMwY2I7XHJcblxyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgIC5wbGF0aW51bXtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgICByaWdodDogMnB4O1xyXG4gICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU4YWE7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhcnRnb2xkU291bHNpbHZlcntcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmQ5MDA7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB9XHJcbiAgICAgICY6OmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICByaWdodDogMnB4O1xyXG4gICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2MwYzBjMDtcclxuXHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmdlbkZpdmV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAycHg7XHJcbiAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcblxyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgICY6OmFmdGVye1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblxyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcbiAgLmdlblNpeHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgbGVmdDogMnB4O1xyXG4gICAgICBib3R0b206IDJweDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDA4YjtcclxuXHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMnB4O1xyXG4gICAgICByaWdodDogMnB4O1xyXG4gICAgICBib3R0b206IDJweDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogIzhiMDAwMDtcclxuXHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gICAgLm9tZWdhQWxwaGF7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgfVxyXG4gICAgICAmOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwZmY7XHJcblxyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5nZW5TZXZlbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgbGVmdDogMnB4O1xyXG4gICAgICBib3R0b206IDJweDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmYTYwMDtcclxuXHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMnB4O1xyXG4gICAgICByaWdodDogMnB4O1xyXG4gICAgICBib3R0b206IDJweDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDA4YjtcclxuXHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZ2VuRWlnaHR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAycHg7XHJcbiAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkYzE0M2M7XHJcblxyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgICY6OmFmdGVye1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2NDk0ZWQ7XHJcblxyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubmFtZUJhcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wb2tlbW9uRGF0YXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoMGRlZyk7XHJcbiAgICAgIGhlaWdodDogNDclO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDAgMTBweCAxcHggIzAwMDAwMDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGF0YXtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgLnR5cGVze1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5vdGhlckRhdGEsLmFiaWxpdGllcywuc3RhdHN7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ldm9sdXRpb25DaGFpbntcclxuICAgIGltZy5ldm9sdXRpb25JTUd7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGFibGUuc3ByaXRlc3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgLmdlbk9uZSwuZ2VuVHdvLC5nZW5UaHJlZSwuZ2VuRm91ciwuZ2VuRml2ZSwuZ2VuU2l4LC5nZW5TZXZlbiwuZ2VuRWlnaHR7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB3aWR0aDogOTl2dztcclxuICAgIH1cclxuXHJcbiAgICBpbWd7XHJcbiAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgfVxyXG5cclxuICAgICo6OmJlZm9yZSw6OmFmdGVye1xyXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoMGRlZykgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICo6OmJlZm9yZXtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgICo6OmFmdGVye1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2VuVGhyZWV7XHJcbiAgICAgIC5lbWVyYWxkOjpiZWZvcmV7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5nZW5Gb3Vye1xyXG4gICAgICAucGxhdGludW06OmJlZm9yZXtcclxuICAgICAgICB3aWR0aDogMTk0JTtcclxuICAgICAgfVxyXG4gICAgICAuaGVhcnRnb2xkU291bHNpbHZlcntcclxuICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgICByaWdodDogLTk1JTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pokemon-view',
            templateUrl: './pokemon-view.component.html',
            styleUrls: ['./pokemon-view.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_1__["PokedexService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'pokeapi';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [[1, "app-container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".app-container[_ngcontent-%COMP%] {\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "XlhV":
    /*!*****************************************************!*\
      !*** ./src/app/services/pokedex/pokedex.service.ts ***!
      \*****************************************************/

    /*! exports provided: PokedexService */

    /***/
    function XlhV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PokedexService", function () {
        return PokedexService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var PokedexService = /*#__PURE__*/function () {
        function PokedexService(http) {
          _classCallCheck(this, PokedexService);

          this.http = http;
          this.url = "https://pokeapi.co/api/v2/pokemon";
          this.selectedGeneration = "?offset=0&limit=151";
          this.speciesUrl = "https://pokeapi.co/api/v2/pokemon-species";
        }

        _createClass(PokedexService, [{
          key: "getAllPokemonOfGen",
          value: function getAllPokemonOfGen() {
            return this.http.get("".concat(this.url).concat(this.selectedGeneration));
          }
        }, {
          key: "getAllPokemon",
          value: function getAllPokemon() {
            return this.http.get("".concat(this.url, "?offset=0&limit=898"));
          }
        }, {
          key: "getSinglePokemon",
          value: function getSinglePokemon(singlePokemonUrl) {
            return this.http.get("".concat(singlePokemonUrl));
          }
        }, {
          key: "getSinglePokemonById",
          value: function getSinglePokemonById(id) {
            return this.http.get("".concat(this.url, "/").concat(id));
          }
        }, {
          key: "getVersions",
          value: function getVersions() {
            return this.http.get('https://pokeapi.co/api/v2/version-group/');
          }
        }, {
          key: "getEvolutionChain",
          value: function getEvolutionChain(url) {
            return this.http.get(url);
          }
        }, {
          key: "getSpecies",
          value: function getSpecies(id) {
            return this.http.get("".concat(this.speciesUrl, "/").concat(id));
          }
        }]);

        return PokedexService;
      }();

      PokedexService.ɵfac = function PokedexService_Factory(t) {
        return new (t || PokedexService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      PokedexService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PokedexService,
        factory: PokedexService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokedexService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _views_views_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/views.module */
      "xzpJ");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/components.module */
      "j1ZV");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _views_views_module__WEBPACK_IMPORTED_MODULE_4__["ViewsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _views_views_module__WEBPACK_IMPORTED_MODULE_4__["ViewsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _views_views_module__WEBPACK_IMPORTED_MODULE_4__["ViewsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bT56":
    /*!**************************************************************!*\
      !*** ./src/app/views/pokedex-list/pokedex-list.component.ts ***!
      \**************************************************************/

    /*! exports provided: PokedexListComponent */

    /***/
    function bT56(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PokedexListComponent", function () {
        return PokedexListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/pokedex/pokedex.service */
      "XlhV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/spinner/spinner.component */
      "e5sC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function PokedexListComponent_app_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
        }
      }

      function PokedexListComponent_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pokemon_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokemon/", pokemon_r3.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pokemon_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", pokemon_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r3.name);
        }
      }

      function PokedexListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokedexListComponent_div_2_div_1_Template, 4, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.currentPokedex);
        }
      }

      var PokedexListComponent = /*#__PURE__*/function () {
        function PokedexListComponent(pokedexService) {
          _classCallCheck(this, PokedexListComponent);

          this.pokedexService = pokedexService;
          this.isPokedexLoaded = false;
        }

        _createClass(PokedexListComponent, [{
          key: "getPokedexByGen",
          value: function getPokedexByGen() {
            var _this9 = this;

            this.pokedexService.getAllPokemonOfGen().subscribe(function (pokedex) {
              _this9.currentPokedex = pokedex.results;

              var _loop2 = function _loop2(i) {
                _this9.pokedexService.getSinglePokemon(pokedex.results[i].url).subscribe(function (pokemon) {
                  _this9.currentPokedex[i].id = pokemon.id;
                  _this9.currentPokedex[i].img = pokemon.sprites.other['official-artwork'].front_default;
                });
              };

              for (var i = 0; i < _this9.currentPokedex.length; i++) {
                _loop2(i);
              }

              _this9.isPokedexLoaded = true;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPokedexByGen();
            this.currentGenerationUrl = this.pokedexService.selectedGeneration;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.pokedexService.selectedGeneration !== this.currentGenerationUrl) {
              this.getPokedexByGen();
              this.currentGenerationUrl = this.pokedexService.selectedGeneration;
              this.isPokedexLoaded = false;
            }
          }
        }]);

        return PokedexListComponent;
      }();

      PokedexListComponent.ɵfac = function PokedexListComponent_Factory(t) {
        return new (t || PokedexListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_1__["PokedexService"]));
      };

      PokedexListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PokedexListComponent,
        selectors: [["app-pokedex-list"]],
        decls: 3,
        vars: 2,
        consts: [[1, "view-container"], [4, "ngIf"], ["class", "pokedexList", 4, "ngIf"], [1, "pokedexList"], ["class", "pokemon-container", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "pokemon-container", 3, "routerLink"], [3, "src", "alt"]],
        template: function PokedexListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PokedexListComponent_app_spinner_1_Template, 1, 0, "app-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokedexListComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPokedexLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPokedexLoaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: [".view-container[_ngcontent-%COMP%] {\n  font-family: \"Spectral\", sans-serif;\n  color: var(--terciary-bgColor);\n  background: black;\n}\n.view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  text-align: center;\n}\n.view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%]   .pokemon-container[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  width: 13%;\n  margin: 0.5rem 1.5rem;\n  transition: 2s ease-in-out;\n  border: 1px solid var(--forth-bgColor);\n  background: var(--terciary-bgColor);\n  z-index: 1;\n  overflow: hidden;\n  cursor: pointer;\n}\n.view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%]   .pokemon-container[_ngcontent-%COMP%]::before, .view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%]   .pokemon-container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  background: var(--forth-bgColor);\n  z-index: -1;\n  transition: 2s ease-in-out;\n}\n.view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%]   .pokemon-container[_ngcontent-%COMP%]::before {\n  transform: skew(255deg);\n}\n.view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%]   .pokemon-container[_ngcontent-%COMP%]::after {\n  transform: skew(105deg);\n}\n.view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%]   .pokemon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n.view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%]   .pokemon-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 1.5rem;\n}\n.view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%]   .pokemon-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  background: var(--secondary-bgColor);\n  box-shadow: 0px 0px 10px 1px var(--forth-bgColor), 0px 0px 15px 1px var(--secondary-bgColor), 0px 0px 20px 1px var(--forth-bgColor), 0px 0px 25px 1px var(--secondary-bgColor);\n  z-index: 100;\n}\n.view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%]   .pokemon-container[_ngcontent-%COMP%]:hover::before {\n  transform: rotate(45deg) skew(5deg);\n}\n.view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%]   .pokemon-container[_ngcontent-%COMP%]:hover::after {\n  transform: rotate(315deg);\n}\n@media only screen and (max-width: 480px) {\n  .view-container[_ngcontent-%COMP%]   .pokedexList[_ngcontent-%COMP%]   .pokemon-container[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcG9rZWRleC1saXN0L3Bva2VkZXgtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFEUTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHVjtBQUZVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBSVo7QUFGVTtFQUNFLHVCQUFBO0FBSVo7QUFGVTtFQUNFLHVCQUFBO0FBSVo7QUFGVTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBSWQ7QUFGVTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFJWjtBQURRO0VBQ0kscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhLQUNFO0VBSUYsWUFBQTtBQURaO0FBRVk7RUFDRSxtQ0FBQTtBQUFkO0FBRVk7RUFDRSx5QkFBQTtBQUFkO0FBTUE7RUFHTTtJQUNFLFVBQUE7RUFMTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcG9rZWRleC1saXN0L3Bva2VkZXgtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3LWNvbnRhaW5lcntcclxuICAgIGZvbnQtZmFtaWx5OiAnU3BlY3RyYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHZhcigtLXRlcmNpYXJ5LWJnQ29sb3IpO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAucG9rZWRleExpc3R7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLnBva2Vtb24tY29udGFpbmVye1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDEzJTtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDEuNXJlbTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ydGgtYmdDb2xvcik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXJjaWFyeS1iZ0NvbG9yKTtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgJjo6YmVmb3JlLCY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcnRoLWJnQ29sb3IpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygyNTVkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygxMDVkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb2tlbW9uLWNvbnRhaW5lcjpob3ZlcntcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmdDb2xvcik7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgICAgICAgMHB4IDBweCAxMHB4IDFweCB2YXIoLS1mb3J0aC1iZ0NvbG9yKSxcclxuICAgICAgICAgICAgICAwcHggMHB4IDE1cHggMXB4IHZhcigtLXNlY29uZGFyeS1iZ0NvbG9yKSxcclxuICAgICAgICAgICAgICAwcHggMHB4IDIwcHggMXB4IHZhcigtLWZvcnRoLWJnQ29sb3IpLFxyXG4gICAgICAgICAgICAgIDBweCAwcHggMjVweCAxcHggdmFyKC0tc2Vjb25kYXJ5LWJnQ29sb3IpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2tldyg1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuICAudmlldy1jb250YWluZXJ7XHJcbiAgICAucG9rZWRleExpc3R7XHJcbiAgICAgIC5wb2tlbW9uLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokedexListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pokedex-list',
            templateUrl: './pokedex-list.component.html',
            styleUrls: ['./pokedex-list.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_1__["PokedexService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "e5sC":
    /*!*********************************************************!*\
      !*** ./src/app/components/spinner/spinner.component.ts ***!
      \*********************************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function e5sC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent() {
          _classCallCheck(this, SpinnerComponent);
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)();
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["app-spinner"]],
        decls: 4,
        vars: 0,
        consts: [[1, "spinner-container"], [1, "shape"], [1, "line"], [1, "innerCircle"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".spinner-container[_ngcontent-%COMP%]   div.shape[_ngcontent-%COMP%] {\n  transform: scale(5);\n  position: relative;\n  border: 2px solid white;\n  height: 50px;\n  width: 50px;\n  border-radius: 100px;\n  margin: 40vh auto;\n  overflow: hidden;\n  animation: rotationSpin linear infinite 3s;\n}\n.spinner-container[_ngcontent-%COMP%]   div.shape[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  height: 50%;\n  left: 0;\n  right: 0;\n  background: var(--fith-bgColor);\n  z-index: 0;\n  animation: fillShape 3s linear infinite;\n}\n.spinner-container[_ngcontent-%COMP%]   div.shape[_ngcontent-%COMP%]   div.line[_ngcontent-%COMP%] {\n  position: relative;\n  top: 47%;\n  left: -1px;\n  width: 100%;\n  height: 0;\n  border: 0.1px solid white;\n  z-index: 1;\n}\n.spinner-container[_ngcontent-%COMP%]   div.shape[_ngcontent-%COMP%]   div.line[_ngcontent-%COMP%]   div.innerCircle[_ngcontent-%COMP%] {\n  position: relative;\n  content: \"\";\n  top: -14px;\n  left: 11px;\n  width: 25px;\n  height: 25px;\n  border: 1px solid white;\n  border-radius: 100px;\n  background: black;\n}\n@keyframes rotationSpin {\n  0% {\n    transform: scale(5) rotate(0deg);\n  }\n  100% {\n    transform: scale(5) rotate(360deg);\n  }\n}\n@keyframes fillShape {\n  0% {\n    height: 0%;\n  }\n  50% {\n    height: 50%;\n  }\n  100% {\n    height: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0FBQUo7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtBQUNOO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFDTjtBQUFNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBSUE7RUFDRTtJQUNFLGdDQUFBO0VBREY7RUFHQTtJQUNFLGtDQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0U7SUFDRSxVQUFBO0VBRkY7RUFJQTtJQUNFLFdBQUE7RUFGRjtFQUlBO0lBQ0UsVUFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyLWNvbnRhaW5lcntcclxuICBkaXYuc2hhcGV7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiA0MHZoIGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGlvblNwaW4gbGluZWFyIGluZmluaXRlIDNzO1xyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1maXRoLWJnQ29sb3IpO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gICAgICBhbmltYXRpb246IGZpbGxTaGFwZSAzcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBkaXYubGluZXtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IDQ3JTtcclxuICAgICAgbGVmdDogLTFweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgYm9yZGVyOiAuMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBkaXYuaW5uZXJDaXJjbGV7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHRvcDogLTE0cHg7XHJcbiAgICAgICAgbGVmdDogMTFweDtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRpb25TcGluIHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoNSkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg1KSByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmlsbFNoYXBlIHtcclxuICAwJXtcclxuICAgIGhlaWdodDogMDAlO1xyXG4gIH1cclxuICA1MCV7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIGhlaWdodDogMCU7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-spinner',
            templateUrl: './spinner.component.html',
            styleUrls: ['./spinner.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "hrlM":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function hrlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/pokedex/pokedex.service */
      "XlhV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../searchbar/searchbar.component */
      "1ujl");

      var _c0 = function _c0(a0) {
        return {
          displayedList: a0
        };
      };

      var _c1 = function _c1() {
        return {
          category: "pokeballs"
        };
      };

      var _c2 = function _c2() {
        return {
          category: "medicines"
        };
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(pokedexService) {
          _classCallCheck(this, NavbarComponent);

          this.pokedexService = pokedexService;
          this.isHovered = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onHover",
          value: function onHover() {
            this.isHovered = !this.isHovered;
          }
        }, {
          key: "sendGeneration",
          value: function sendGeneration(generation) {
            this.pokedexService.selectedGeneration = generation;
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_1__["PokedexService"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 32,
        vars: 7,
        consts: [[1, "navbar-container", 3, "ngClass"], ["routerLink", "/", 1, "logo-container"], [1, "list", "filterByGeneration"], [1, "hidden"], ["routerLink", "/pokemon", 1, "list_item", "generation", 3, "click"], [1, "list", "filterByItemClass"], ["routerLink", "/items", 1, "list_item", "itemClass", 3, "queryParams"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pokemon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_7_listener() {
              return ctx.sendGeneration("?offset=0&limit=151");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First generation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_9_listener() {
              return ctx.sendGeneration("?offset=151&limit=100");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Second generation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_11_listener() {
              return ctx.sendGeneration("?offset=251&limit=135");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Third generation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_13_listener() {
              return ctx.sendGeneration("?offset=386&limit=107");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Forth generation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_15_listener() {
              return ctx.sendGeneration("?offset=493&limit=156");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fith generation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_17_listener() {
              return ctx.sendGeneration("?offset=649&limit=72");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sixth generation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_19_listener() {
              return ctx.sendGeneration("?offset=721&limit=88");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Seventh generation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_21_listener() {
              return ctx.sendGeneration("?offset=809&limit=89");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Eigth generation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Items");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Pokebals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Medicines");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-searchbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isHovered));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_4__["SearchbarComponent"]],
        styles: [".navbar-container[_ngcontent-%COMP%] {\n  font-family: \"Karla\", sans-serif;\n  background: var(--primary-bgColor);\n  display: flex;\n  justify-content: flex-start;\n  gap: 0.5%;\n  padding: 1rem;\n  color: white;\n  height: 4rem;\n}\n.navbar-container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  outline: none;\n}\n.navbar-container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  border: 5px solid;\n  animation: rotation linear infinite 3s;\n  cursor: pointer;\n}\n.navbar-container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::after, .navbar-container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n}\n.navbar-container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::before {\n  top: 20%;\n  left: 20%;\n  height: 25px;\n  width: 25px;\n  border: 2px solid;\n  border-radius: 100%;\n  background: var(--primary-bgColor);\n  z-index: 1;\n}\n.navbar-container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::after {\n  top: 45%;\n  left: 0;\n  height: 2px;\n  width: 100%;\n  background: white;\n}\n.navbar-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  transition: 1s;\n  text-align: center;\n  margin: 0 auto;\n}\n.navbar-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1rem;\n}\n.navbar-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list_item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 0.5rem;\n  outline: none;\n}\n.navbar-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list_item[_ngcontent-%COMP%]:hover {\n  font-weight: 600;\n}\n.navbar-container[_ngcontent-%COMP%]   app-searchbar[_ngcontent-%COMP%] {\n  z-index: 50;\n  width: 200px;\n  margin: 0 auto;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media only screen and (max-width: 480px) {\n  .navbar-container[_ngcontent-%COMP%] {\n    height: auto;\n    display: block;\n  }\n  .navbar-container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n    margin: 0.1rem auto 1rem;\n    width: 17%;\n  }\n  .navbar-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    opacity: 0;\n    transition: 1s;\n    overflow: hidden;\n  }\n  .navbar-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtBQUVOO0FBRE07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtBQUdSO0FBRlE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFJVjtBQUZRO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7QUFJVjtBQUZRO0VBQ0UsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSVY7QUFBSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFUjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBR1o7QUFEUTtFQUNJLGdCQUFBO0FBR1o7QUFBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUVOO0FBRUE7RUFDRTtJQUNFLHVCQUFBO0VBQ0Y7RUFDQTtJQUNFLHlCQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsY0FBQTtFQUFGO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUFDSjtFQUdJO0lBQ0UsVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQUROO0VBSU07SUFDRSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxVQUFBO0VBRlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWJnQ29sb3IpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGdhcDogMC41JTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAubG9nby1jb250YWluZXJ7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQ7XHJcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiBsaW5lYXIgaW5maW5pdGUgM3M7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6OmFmdGVyLCY6OmJlZm9yZXtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktYmdDb2xvcik7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICB0b3A6IDQ1JTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3RfaXRlbXtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3RfaXRlbTpob3ZlcntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHAtc2VhcmNoYmFye1xyXG4gICAgICB6LWluZGV4OiA1MDtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuICAubmF2YmFyLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLmxvZ28tY29udGFpbmVye1xyXG4gICAgICBtYXJnaW46IC4xcmVtIGF1dG8gMXJlbTtcclxuICAgICAgd2lkdGg6IDE3JTtcclxuICAgIH1cclxuICAgIC5saXN0e1xyXG5cclxuICAgICAgdWx7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_pokedex_pokedex_service__WEBPACK_IMPORTED_MODULE_1__["PokedexService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./spinner/spinner.component */
      "e5sC");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./searchbar/searchbar.component */
      "1ujl");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ComponentsModule_Factory(t) {
          return new (t || ComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
          declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
          exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchbarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vRtT":
    /*!*************************************************!*\
      !*** ./src/app/services/items/items.service.ts ***!
      \*************************************************/

    /*! exports provided: ItemsService */

    /***/
    function vRtT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsService", function () {
        return ItemsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ItemsService = /*#__PURE__*/function () {
        function ItemsService(http) {
          _classCallCheck(this, ItemsService);

          this.http = http;
          this.url = "https://pokeapi.co/api/v2/item";
        }

        _createClass(ItemsService, [{
          key: "getAllItems",
          value: function getAllItems() {
            return this.http.get("".concat(this.url, "?offset=0&limit=954"));
          }
        }, {
          key: "getItem",
          value: function getItem(id) {
            return this.http.get("".concat(id));
          }
        }]);

        return ItemsService;
      }();

      ItemsService.ɵfac = function ItemsService_Factory(t) {
        return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ItemsService,
        factory: ItemsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _views_pokedex_list_pokedex_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./views/pokedex-list/pokedex-list.component */
      "bT56");
      /* harmony import */


      var _views_pokemon_view_pokemon_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./views/pokemon-view/pokemon-view.component */
      "QDfg");
      /* harmony import */


      var _views_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/item-list/item-list.component */
      "I22L");
      /* harmony import */


      var _views_item_view_item_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/item-view/item-view.component */
      "M523");

      var routes = [{
        path: "",
        pathMatch: "full",
        redirectTo: 'pokemon'
      }, {
        path: 'pokemon',
        component: _views_pokedex_list_pokedex_list_component__WEBPACK_IMPORTED_MODULE_2__["PokedexListComponent"]
      }, {
        path: 'pokemon/:id',
        component: _views_pokemon_view_pokemon_view_component__WEBPACK_IMPORTED_MODULE_3__["PokemonViewComponent"]
      }, {
        path: 'items',
        component: _views_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_4__["ItemListComponent"]
      }, {
        path: 'item/:id',
        component: _views_item_view_item_view_component__WEBPACK_IMPORTED_MODULE_5__["ItemViewComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xzpJ":
    /*!***************************************!*\
      !*** ./src/app/views/views.module.ts ***!
      \***************************************/

    /*! exports provided: ViewsModule */

    /***/
    function xzpJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewsModule", function () {
        return ViewsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pokedex_list_pokedex_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pokedex-list/pokedex-list.component */
      "bT56");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");
      /* harmony import */


      var _pokemon_view_pokemon_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pokemon-view/pokemon-view.component */
      "QDfg");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../app-routing.module */
      "vY5A");
      /* harmony import */


      var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./item-list/item-list.component */
      "I22L");
      /* harmony import */


      var _item_view_item_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./item-view/item-view.component */
      "M523");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");

      var ViewsModule = function ViewsModule() {
        _classCallCheck(this, ViewsModule);
      };

      ViewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ViewsModule
      });
      ViewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ViewsModule_Factory(t) {
          return new (t || ViewsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewsModule, {
          declarations: [_pokedex_list_pokedex_list_component__WEBPACK_IMPORTED_MODULE_2__["PokedexListComponent"], _pokemon_view_pokemon_view_component__WEBPACK_IMPORTED_MODULE_5__["PokemonViewComponent"], _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_7__["ItemListComponent"], _item_view_item_view_component__WEBPACK_IMPORTED_MODULE_8__["ItemViewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]],
          exports: [_pokedex_list_pokedex_list_component__WEBPACK_IMPORTED_MODULE_2__["PokedexListComponent"], _pokemon_view_pokemon_view_component__WEBPACK_IMPORTED_MODULE_5__["PokemonViewComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_pokedex_list_pokedex_list_component__WEBPACK_IMPORTED_MODULE_2__["PokedexListComponent"], _pokemon_view_pokemon_view_component__WEBPACK_IMPORTED_MODULE_5__["PokemonViewComponent"], _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_7__["ItemListComponent"], _item_view_item_view_component__WEBPACK_IMPORTED_MODULE_8__["ItemViewComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]],
            exports: [_pokedex_list_pokedex_list_component__WEBPACK_IMPORTED_MODULE_2__["PokedexListComponent"], _pokemon_view_pokemon_view_component__WEBPACK_IMPORTED_MODULE_5__["PokemonViewComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map