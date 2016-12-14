/// <reference path="../../typings/globals/selectize/index.d.ts" />

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {

  dropdownData: any[] = [
    { value: 1, label: 'Tam' }
    , { value: 2, label: 'Tom' }
    , { value: 3, label: 'Tony' }
  ];

  multiSelectDynamicAddConfig: Selectize.IOptions<any, any> = <Selectize.IOptions<any, any>>{
    persist: true,
    labelField: 'label',
    valueField: 'value',
    plugins: ['remove_button']
  };

  multiSelectDynamicAddPlaceholder: string = "Placeholder...";

}