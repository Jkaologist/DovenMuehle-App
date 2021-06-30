/**
 *
 * DisplayPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDisplayPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import String from './string';

export function DisplayPage() {
  useInjectReducer({ key: 'displayPage', reducer });
  useInjectSaga({ key: 'displayPage', saga });

  const stringsDisplay = [].map(str => <String str={str} />);

  return (
    <div>
      <Helmet>
        <title>String Display</title>
        <meta name="String Display" content="Check Out These Strings" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <ul>{stringsDisplay}</ul>
    </div>
  );
}

DisplayPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  displayPage: makeSelectDisplayPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DisplayPage);
