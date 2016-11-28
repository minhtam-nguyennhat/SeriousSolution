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
var core_1 = require('@angular/core');
var SearchTabItemComponent = (function () {
    function SearchTabItemComponent() {
    }
    __decorate([
        core_1.Input('tab-title'), 
        __metadata('design:type', Object)
    ], SearchTabItemComponent.prototype, "tabTitle", void 0);
    SearchTabItemComponent = __decorate([
        core_1.Component({
            selector: 'search-tab-item',
            templateUrl: './search-tab-item.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchTabItemComponent);
    return SearchTabItemComponent;
}());
exports.SearchTabItemComponent = SearchTabItemComponent;
;
//# sourceMappingURL=search-tab-item.component.js.map