import React from 'react';

const String = ({ str }) => <li>{str}</li>;

String.propTypes = {
  str: String.propTypes.string,
};

export default String;
