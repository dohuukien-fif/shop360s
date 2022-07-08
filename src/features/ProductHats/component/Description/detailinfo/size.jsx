import React, { useRef, useState } from 'react';

Sizes.propTypes = {};

function Sizes({ item, onChange }) {
  const curentInput = useRef(null);
  const handeChaneg = (newvalue) => {
    if (curentInput.current) {
      clearTimeout(curentInput.current);
    }
    curentInput.current = setTimeout(() => {
      if (onChange) {
        onChange(newvalue);
      }
      console.log('kien', newvalue);
    }, 5000);
  };
  const [state, setstate] = useState(false);
  return (
    <button className={state ? 'active' : ''} onClick={() => setstate((x) => !x)}>
      <span onClick={() => handeChaneg(item)}>{item}</span>
      <span class="tooltiptext">{item}</span>
    </button>
  );
}

export default Sizes;
