/**
 *
 * DisplayPage
 *
 */

import React, { memo, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import List from 'components/List';
import ListItem from 'components/ListItem';
import { makeSelectDisplayPage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadStrings } from '../App/actions';
import { StringsContext } from '../App/StringsContext';

export function DisplayPage() {
  useInjectReducer({ key: 'displayPage', reducer });
  useInjectSaga({ key: 'displayPage', saga });

  const [items, setItems] = useState([]);
  const { val, setVal } = useContext(StringsContext);
  useEffect(() => {
    setItems([...val]);
  });

  return (
    <div>
      <Helmet>
        <title>String Display</title>
        <meta name="String Display" content="Check Out These Strings" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <p />
      <List component={ListItem} items={items} />
      <p />
      <p />
      <p />
      <p />
      <p />
      <div>
        <button type="button" onClick={() => setVal(val.splice(1))}>
          Remove
        </button>
      </div>
    </div>
  );
}

DisplayPage.propTypes = {
  getStringsList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  displayPage: makeSelectDisplayPage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getStringsList: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadStrings());
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
