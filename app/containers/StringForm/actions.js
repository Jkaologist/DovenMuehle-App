/*
 *
 * StringForm actions
 *
 */

import { GET_STRINGS, REMOVE_STRING, ADD_STRING, RESET } from './constants';

export function getStrings() {
  return {
    type: GET_STRINGS,
  };
}

export function addString(str) {
  return {
    type: ADD_STRING,
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
