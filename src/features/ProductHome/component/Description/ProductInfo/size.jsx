import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
Sizes.propTypes = {};

function Sizes({ item, onChange }) {
  const titleRef = useRef();

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  // useEffect(() => {
  // new Array(curentInput.current).forEach((item, index) => {
  //   item.addEventListener('click', function () {
  //     new Array(curentInput.current).forEach((items, index) => {
  //       items.classList.remove('actives');
  //     });

  //     item.classList.add('actives');
  //   });
  // });
  // console.log(new Array(curentInput.current));
  // curentInput.current.addEventListener('click', function () {
  //   curentInput.current.classList.remove('actives');
  //   this.classList.add('actives');
  // });

  // curentInput.current.classList.add = 'active';
  // }, [curentInput.current]);
  // const handeChaneg = (newvalue) => {
  //   if (curentInput.current) {
  //     clearTimeout(curentInput.current);
  //   }
  //  curentInput.current=setTimeout(() => {
  //     if (onChange) {
  //       onChange(newvalue);
  //     }
  //     console.log('kien', newvalue);
  //   }, 5000);
  // };
  const [state, setstate] = useState(false);
  return (
    <button className={isActive ? 'actives' : null}>
      <span onClick={handleToggle}>{item}</span>
    </button>
  );
}

export default Sizes;
