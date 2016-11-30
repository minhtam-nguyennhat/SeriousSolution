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
var tab_component_1 = require('./tab.component');
var TabPanelComponent = (function () {
    function TabPanelComponent() {
        //console.log('current lodash version in this solution is: ' + _.VERSION);
    }
    TabPanelComponent.prototype.ngAfterContentInit = function () {
        //console.log(this.tabs.toArray());
    };
    TabPanelComponent.prototype.handleClickEvent = function (tab) {
        // reset all tabs
        this.tabs.forEach(function (tab) { return tab.active = false; });
        // make this tab active
        tab.active = true;
    };
    __decorate([
        core_1.ContentChildren(tab_component_1.TabComponent), 
        __metadata('design:type', core_1.QueryList)
    ], TabPanelComponent.prototype, "tabs", void 0);
    TabPanelComponent = __decorate([
        core_1.Component({
            selector: 'tab-panel',
            templateUrl: './tab-panel.component.html',
            styles: [
                '#searchInput {margin-bottom: .5em;}'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TabPanelComponent);
    return TabPanelComponent;
}());
exports.TabPanelComponent = TabPanelComponent;
//# sourceMappingURL=tab-panel.component.js.map