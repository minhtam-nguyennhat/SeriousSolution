import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Component({
	selector: 'observables-comp',
	template: `<div class="col-lg-12">This is observables component</div>`
})

export class ObservablesComponent implements OnInit {
	constructor(private _http: Http) { }

	ngOnInit() {
		this.getData();
	}

	getData() {
		this._http.get('src/app/observables-component/data.json')
			.map(resp => resp.json())
			.subscribe(result => {
				_.forEach(result.features, item => console.log(item.properties.centrename))
			});
	}
}