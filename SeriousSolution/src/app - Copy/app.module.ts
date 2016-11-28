import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchTabComponent } from './search-tab/search-tab.component';
import { SearchTabItemComponent } from './search-tab/search-tab-item.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SearchTabComponent,
    SearchTabItemComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }