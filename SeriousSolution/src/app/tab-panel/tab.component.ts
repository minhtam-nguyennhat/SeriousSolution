import { Component, Input } from '@angular/core';
import { Tab } from './tab.interface';

@Component({
  selector: 'tab',
  template: `
<div *ngIf="active">
<ng-content></ng-content>
</div>
`
})

export class TabComponent implements Tab {
  @Input('name') tabName: string;
  @Input('key') tabKey: string;
  @Input() active: boolean;
}