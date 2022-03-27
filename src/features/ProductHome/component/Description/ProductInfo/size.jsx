import React, { useState, useRef, Fragment } from 'react';

import './styles.scss';
Sizes.propTypes = {};

function Sizes({ item, onChange, index }) {
  const [isActive, setActive] = useState({
    active: '',
  });
  const curentInput = useRef();
  const handleToggle = async (newIndex, newValue) => {
    console.log(newIndex);
    setActive((prev) => ({
      ...prev,
      active: item[newIndex],
    }));
    if (onChange) await onChange(newIndex ? item[newIndex] : '');
    console.log(newValue);
    console.log('sizwwwwwwwwwwww', item[newIndex]);
    // if (curentInput.current) {
    //   clearTimeout(curentInput.current);
    // }
    // curentInput.current = setTimeout(() => {
    //   if (onChange) {
    //     onChange(newValue);
    //   }
    //   console.log('kien', newValue);
    // }, 2000);
    // if (curentInput.current) {
    //   clearTimeout(curentInput.current);
    // }
    // curentInput.current = setTimeout(() => {
    //   if (onChange) {
    //     onChange(newValue);
    //   }
    //   console.log('kien', newValue);
    // }, 2000);
    // onChange(newValue);
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
  console.log(item);
  console.log(isActive);
  const getStyles = (index) => {
    if (item[index] === isActive.active) {
      return 'activess';
    } else {
      return 'actives';
    }
  };

  return (
    <>
      {item.map((items, index) => (
        <Fragment key={index}>
          <button key={index} className={getStyles(index)}>
            <span onClick={() => handleToggle(index, items)}>{items}</span>
            <span className="tooltiptext">{items}</span>
          </button>
        </Fragment>
      ))}
    </>
  );
}

export default Sizes;
