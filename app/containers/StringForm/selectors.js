import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stringForm state domain
 */

const selectStringFormDomain = state => state.stringForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StringForm
 */

const makeSelectStringForm = () =>
  createSelector(
    selectStringFormDomain,
    substate => substate.strings,
  );

export { selectStringFormDomain, makeSelectStringForm };
