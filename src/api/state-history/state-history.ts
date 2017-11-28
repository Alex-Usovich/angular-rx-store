import { Injectable }       from '@angular/core';
import { BehaviorSubject }  from 'rxjs/BehaviorSubject';
@Injectable()
export class StateHistory {

  public past:      any[] = [];
  public past$:     BehaviorSubject<any> = new BehaviorSubject<any>(this.past);

  public present;
  public present$:  BehaviorSubject<any> = new BehaviorSubject<any>(this.present);

  public future:    any[] = [];
  public future$:   BehaviorSubject<any> = new BehaviorSubject<any>(this.future);

  constructor() {}

  public thereIsAPresent() {
    return this.present !== undefined;
  }

  public thereIsAPast() {
    return this.past.length > 0;
  }

  public thereIsAFuture() {
    return this.future.length > 0;
  }

  public setPresent(state: any) {
    this.present = state;
    this.present$.next(this.present);
  }

  public movePresentToPast() {
    this.past.push(this.present);
    this.past$.next(this.past);
  }

  public movePresentToFuture() {
    this.future.push(this.present);
    this.future$.next(this.future);
  }

  public movePastToPresent() {
    this.setPresent(this.past.pop());
    this.present$.next(this.present);
  }

  public moveFutureToPresent() {
    this.setPresent(this.future.pop());
    this.present$.next(this.present);
  }

  public push(currentState: any) {
    if (this.thereIsAPresent()) {
      this.movePresentToPast();
    }

    this.setPresent(currentState);
  }

  public storeState(state: any) {
    if (this.thereIsAFuture()) {
      this.future.unshift(state);
      this.future$.next(this.future);
    } else {
      this.push(state);
    }
  }

  public undo() {
    if (this.thereIsAPresent()) {
      this.movePresentToFuture();
      this.movePastToPresent();
    }
  }

  public redo () {
    if (!this.thereIsAFuture()) {
      return;
    }

    if (this.thereIsAPresent()) {
      this.movePresentToPast();
    }

    this.moveFutureToPresent();
  }

  public gotoState(i : any) {
    const index     = Number(i);
    const allstates = [...this.past, this.present, this.future];

    this.present  = allstates[index];
    this.past     = allstates.slice(0, index);
    this.future   = allstates.slice(index + 1, allstates.length);

    this.past$.next(this.past);
    this.present$.next(this.present);
    this.future$.next(this.future);
  }
}
