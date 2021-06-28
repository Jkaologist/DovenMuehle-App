import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the displayPage state domain
 */

const selectDisplayPageDomain = state => state.displayPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DisplayPage
 */

const makeSelectDisplayPage = () =>
  createSelector(
    selectDisplayPageDomain,
    substate => substate,
  );

export default makeSelectDisplayPage;
export { selectDisplayPageDomain };
