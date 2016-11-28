﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabComponent } from './tab-panel/tab.component';


@NgModule({
  imports: [
    BrowserModule
    ,FormsModule
  ],
  declarations: [
    AppComponent
    , TabPanelComponent
    , TabComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }