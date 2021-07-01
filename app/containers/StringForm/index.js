/**
 *
 * StringForm
 *
 */

import React, { memo, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { addString } from 'containers/App/actions';
import { makeSelectStringForm } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { StringsContext } from '../App/StringsContext';

export function StringForm() {
  useInjectReducer({ key: 'stringForm', reducer });
  useInjectSaga({ key: 'stringForm', saga });

  const [str, setStr] = useState('');
  const { val, setVal } = useContext(StringsContext);
  // eslint-disable-next-line no-console

  function handleSubmit(e) {
    e.preventDefault();
    setVal([...val, str]);
  }

  function handleChange(e) {
    setStr(e.target.value);
  }

  return (
    <div>
      <Helmet>
        <title>String Form</title>
        <meta name="description" content="Description of StringForm" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <p />
      <form onSubmit={handleSubmit}>
        <label htmlFor="str">Enter a string: </label>
        <input type="text" name="str" id="str" onChange={handleChange} />
        <button type="submit">Add string!</button>
      </form>
      <p>Take a look at the current string: {str}</p>
      <p />
    </div>
  );
}

StringForm.propTypes = {
  dispatch: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  stringForm: makeSelectStringForm(),
});

function mapDispatchToProps(newStr) {
  return {
    dispatch: addString(newStr),
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
