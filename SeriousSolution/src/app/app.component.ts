
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {

  dropdownData: any[] = [
    { id: '1', text: 'Tam' }
    , { id: '2', text: 'Tom' }
    , { id: '3', text: 'Tony' }
  ];

}