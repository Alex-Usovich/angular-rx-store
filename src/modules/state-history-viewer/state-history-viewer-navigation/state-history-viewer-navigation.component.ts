import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector:     'state-history-viewer-navigation',
  templateUrl:  './state-history-viewer-navigation.component.html',
  styleUrls:    [ './state-history-viewer-navigation.component.css' ]
})
export class StateHistoryViewerNavigationComponent {

  @Output() public handlePast$: EventEmitter<any> = new EventEmitter<any>();
  @Output() public handleFuture$: EventEmitter<any> = new EventEmitter<any>();

  public handlePast($event) {
    this.handlePast$.emit(true);
  }

  public handleFuture($event) {
    this.handleFuture$.emit(true);
  }
}
