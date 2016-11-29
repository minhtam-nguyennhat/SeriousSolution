import { Component, QueryList, ContentChildren, AfterContentInit } from '@angular/core';

import { TabComponent } from './tab.component';
import { Tab } from './tab.interface';

import * as _ from 'lodash';

@Component({
	selector: 'tab-panel',
	templateUrl: './tab-panel.component.html'
})


export class TabPanelComponent implements AfterContentInit {
	@ContentChildren(TabComponent) tabs: QueryList<Tab>;

	ngAfterContentInit() {
		console.log(this.tabs.toArray());
	}

	constructor() {
		console.log(_.VERSION);
	}
}