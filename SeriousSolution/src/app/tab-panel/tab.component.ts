import { Component, Input } from '@angular/core';
import { Tab } from './tab.interface';

@Component({
	selector: 'tab',
	templateUrl: './tab.component.html'
})

export class TabComponent implements Tab {
	@Input('name') tabName: string;
	@Input('key') tabKey: string;
	@Input() active: boolean;

	constructor() {
		this.active = false;
	}
}