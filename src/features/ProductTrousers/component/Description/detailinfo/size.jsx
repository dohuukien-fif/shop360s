import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

Sizes.propTypes = {};

function Sizes({ item, onChange }) {
  const curentInput = useRef(null);
  const handeChaneg = (newvalue) => {};
  const [state, setstate] = useState(false);
  return (
    <button ref={curentInput}>
      <span onClick={() => handeChaneg(item)}>{item}</span>
    </button>
  );
}

export default Sizes;
