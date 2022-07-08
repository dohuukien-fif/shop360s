import React from 'react';

Description.propTypes = {};

function Description({ des, index }) {
  return <li key={index}>{des}</li>;
}

export default Description;
