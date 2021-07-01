/*
 *
 * StringForm reducer
 *
 */
import produce from 'immer';
import { GET_STRINGS, REMOVE_STRING, ADD_STRING, RESET } from './constants';

export const initialState = { strings: [], id: 0 };
const newStr = '';

/* eslint-disable default-case, no-param-reassign */
const stringFormReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_STRINGS:
        break;
      case REMOVE_STRING:
        draft.strings.filter(val => val.id !== action.id);
        break;
      case ADD_STRING:
        draft.strings.unshift(newStr);
        break;
      case RESET:
        draft.strings = [];
        break;
    }
  });

export default stringFormReducer;
