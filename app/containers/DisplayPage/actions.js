/*
 *
 * DisplayPage actions
 *
 */

import { GET_STRINGS, REMOVE_STRING, RESET } from './constants';

export function getStrings(str) {
  return {
    type: GET_STRINGS,
    str,
  };
}

export function removeString(id) {
  return {
    type: REMOVE_STRING,
    id,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
