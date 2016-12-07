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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var _ = require('lodash');
var ObservablesComponent = (function () {
    function ObservablesComponent(_http) {
        this._http = _http;
    }
    ObservablesComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ObservablesComponent.prototype.getData = function () {
        this._http.get('src/app/observables-component/data.json')
            .map(function (resp) { return resp.json(); })
            .subscribe(function (result) {
            _.forEach(result.features, function (item) { return console.log(item.properties.centrename); });
        });
    };
    ObservablesComponent = __decorate([
        core_1.Component({
            selector: 'observables-comp',
            template: "<div class=\"col-lg-12\">This is observables component</div>"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ObservablesComponent);
    return ObservablesComponent;
}());
exports.ObservablesComponent = ObservablesComponent;
//# sourceMappingURL=observables.component.js.map