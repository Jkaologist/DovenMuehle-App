/**
 *
 * DisplayPage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { LOAD_STRINGS } from 'containers/App/constants';
import makeSelectDisplayPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import String from './string';

export function DisplayPage() {
  useInjectReducer({ key: 'displayPage', reducer });
  useInjectSaga({ key: 'displayPage', saga });

  const [strings] = useState(['turtles', 'pumpkins']);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You updated ${strings}!`;
  });

  const stringsDisplay = strings.map((str, idx) => (
    // eslint-disable-next-line react/no-array-index-key
    <String str={str} key={idx} />
  ));

  return (
    <div>
      <Helmet>
        <title>String Display</title>
        <meta name="String Display" content="Check Out These Strings" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <p />
      <p />
      <ul>{stringsDisplay}</ul>
    </div>
  );
}

DisplayPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  string: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  displayPage: makeSelectDisplayPage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(LOAD_STRINGS());
    },
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
