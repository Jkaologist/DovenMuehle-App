/**
 *
 * Asynchronously loads the component for DisplayPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
