import { combineReducers}   from './helpers';
import { combinedReducers } from './reducers/combined.reducer';

const reducersToCombine = { combinedReducers };

export const rootReducer = combineReducers(reducersToCombine);
