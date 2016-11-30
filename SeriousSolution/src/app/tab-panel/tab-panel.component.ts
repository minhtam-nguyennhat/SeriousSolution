import {
  Component, QueryList,
  ContentChildren,
  AfterContentInit
} from '@angular/core';

import { TabComponent } from './tab.component';
import { Tab } from './tab.interface';

import * as _ from 'lodash';

@Component({
	selector: 'tab-panel',
  templateUrl: './tab-panel.component.html',
  styles: [
    '#searchInput {margin-bottom: .5em;}'
  ]
})


export class TabPanelComponent implements AfterContentInit {
	@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

	ngAfterContentInit() {
		//console.log(this.tabs.toArray());
  }

	constructor() {
		//console.log('current lodash version in this solution is: ' + _.VERSION);
	}

	handleClickEvent(tab: Tab) {
		// reset all tabs
		this.tabs.forEach((tab) => tab.active = false);
		// make this tab active
    tab.active = true;
  }
}