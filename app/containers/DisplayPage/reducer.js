/*
 *
 * DisplayPage reducer
 *
 */
import produce from 'immer';
import { GET_STRINGS } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const displayPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case GET_STRINGS:
        break;
    }
  });

export default displayPageReducer;
