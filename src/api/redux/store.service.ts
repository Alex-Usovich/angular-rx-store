import { Injectable}          from '@angular/core';
import { Dispatcher, Store }  from './store';
import { rootReducer }        from './root.reducer';
import { StateHistory }       from '../state-history/state-history';

@Injectable()
export class StoreService {
  private __store:        Store;

  constructor(private __stateHistory: StateHistory) {
    const preMiddleware   = obs => obs.do(val => {
      console.log('ACTION', val);
    });

    const postMiddleware  = obs => obs.do(val => {
      this.__stateHistory.storeState(val);
      console.log('STATE', val) ;
    });

    this.__store = new Store(new Dispatcher(), rootReducer, preMiddleware, postMiddleware, { __appState: 'INITIATED' });
  }

  public get store() {
    return this.__store;
  }
}
