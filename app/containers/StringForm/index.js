/**
 *
 * StringForm
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
import makeSelectStringForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function StringForm() {
  useInjectReducer({ key: 'stringForm', reducer });
  useInjectSaga({ key: 'stringForm', saga });

  return (
    <div>
      <Helmet>
        <title>StringForm</title>
        <meta name="description" content="Description of StringForm" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

StringForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stringForm: makeSelectStringForm(),
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
)(StringForm);
