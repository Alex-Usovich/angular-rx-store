import { notes }            from './notes.reducer';
import { combineReducers }  from '../helpers';

const notesBasedReducers = { notes };

export const combinedReducers = combineReducers(notesBasedReducers);
