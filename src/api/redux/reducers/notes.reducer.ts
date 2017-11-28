/**
 * Sample Reducer: NOTES
 */
import { ACTIONS } from '../actions/actions';

export const notes = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTE:
      return [
        ...state,
        Object.assign({},
          {
            id            : action.payload.id,
            text          : action.payload.text,
            date          : action.payload.date,
            isPinned      : action.payload.isPinned,
            isBeingEdited : false
          })
      ];
    case ACTIONS.REMOVE_NOTE:
      return state.filter(note => note.id !== action.payload.id);
    case ACTIONS.CHANGE_NOTE:
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return Object.assign(note, {
            text:           action.payload.text,
            date:           action.payload.date,
            isPinned:       action.payload.isPinned,
            isBeingEdited:  false
          });
        }

        return note;
      });
    case ACTIONS.TOGGLE_EDIT_NOTE:
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return {
            ...note,
            isBeingEdited: action.payload.isBeingEdited
          }
        }

        return note;
      });
    default:
      return state;
  }
};
