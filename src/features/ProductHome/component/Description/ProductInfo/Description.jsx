import React from 'react';
import PropTypes from 'prop-types';

Description.propTypes = {};

function Description({ des, index }) {
  return <li key={index}>{des}</li>;
}

export default Description;
