import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-tab-item',
  templateUrl: './search-tab-item.component.html'
})

export class SearchTabItemComponent {
  @Input('tab-title') tabTitle;
};