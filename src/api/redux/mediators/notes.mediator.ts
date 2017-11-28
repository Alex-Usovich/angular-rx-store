import { Injectable }   from '@angular/core';
import { StoreService } from '../store.service';
import { ACTIONS }      from '../actions/actions';

@Injectable()
export class NotesMediator {
  constructor(private __storeService: StoreService) {}

  public getNotes() {
    return this.__storeService.store.selectByCombined('combinedReducers', 'notes');
  }

  public addNote(payload) {
    this.__storeService.store.dispatch({
      type    : ACTIONS.ADD_NOTE,
      payload :  {
        id    : Math.random()*1000,
        text  : payload
      }
    });
  }

  public toggleEditingNote(payload) {
    this.__storeService.store
      .dispatch({
        type    : ACTIONS.TOGGLE_EDIT_NOTE,
        payload
      });
  }

  public removeNote(payload) {
    this.__storeService.store
      .dispatch({
        type    : ACTIONS.REMOVE_NOTE,
        payload
      });
  }
}
