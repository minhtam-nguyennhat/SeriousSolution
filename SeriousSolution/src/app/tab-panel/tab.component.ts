import { Component, Input } from '@angular/core';
import { Tab } from './tab.interface';

@Component({
  selector: 'tab',
  template:`<ng-content></ng-content>`
})

export class TabComponent implements Tab {
  @Input('name') tabName: string;
  @Input('key') tabKey: string;
  @Input() isActive: boolean;
}