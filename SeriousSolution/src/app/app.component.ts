
import { Component } from '@angular/core';

import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {

  dropdownData: IMultiSelectOption[] = [
    { id: 1, name: 'Tam' }
    , { id: 2, name: 'Tom' }
    , { id: 3, name: 'Tony' }
  ];

  dropdownSettingsSingle: IMultiSelectSettings = {
    checkedStyle: 'checkboxes',
    buttonClasses: 'btn btn-outline',
    autoUnselect: true,
    selectionLimit: 1,
    closeOnSelect: true
  };

  dropdownSettingsMultiple: IMultiSelectSettings = {
    checkedStyle: 'checkboxes',
    buttonClasses: 'btn btn-outline',
  };

  dropdownText: IMultiSelectTexts = {
    defaultTitle: 'Please select a thing ...',
  };

}