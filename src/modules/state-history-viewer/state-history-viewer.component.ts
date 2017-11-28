import { Component,
  OnDestroy, OnInit }   from '@angular/core';
import { StateHistory } from '../../api/state-history/state-history';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector:     'demo-state-history-viewer',
  templateUrl:  './state-history-viewer.component.html',
  styleUrls:    [ './state-history-viewer.component.css' ]
})
export class StateHistoryViewerComponent implements OnInit, OnDestroy {

  public presentState$: any = [];
  public presentStateSubscription: Subscription;

  constructor(
    private stateHistory: StateHistory
  ) {}

  public ngOnInit() {
    this.presentStateSubscription = this.stateHistory.present$.subscribe((state) => {
      if (state && state['combinedReducers']) {
        this.presentState$ = state['combinedReducers']['notes'];
      }
    });
  }

  public ngOnDestroy() {
    if (this.presentStateSubscription) {
      this.presentStateSubscription.unsubscribe();
    }
  }

  public handlePast($event) {
    this.stateHistory.undo();
  }

  public handleFuture($event) {
    this.stateHistory.redo();
  }
}
