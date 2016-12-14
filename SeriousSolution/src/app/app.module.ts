import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabComponent } from './tab-panel/tab.component';

import { ObservablesComponent } from './observables-component/observables.component';

import { Ng2SelectizeModule } from "ng2-selectize";


@NgModule({
	imports: [
		BrowserModule
		, FormsModule
    , HttpModule
    , Ng2SelectizeModule
	],
	declarations: [
		AppComponent
		, TabPanelComponent
		, TabComponent
		, ObservablesComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule { }