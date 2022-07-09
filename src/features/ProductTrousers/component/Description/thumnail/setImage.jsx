import React from 'react';
import './styles.scss';
setImage.propTypes = {};

function setImage({ Imagess, onChange, ids, Index }) {
  // console.log(typeof Imagess);

  const handeleChan = (newvlue) => {
    if (onChange) {
      onChange(newvlue);
    }
  };
  return (
    <div className="selce-img" key={ids}>
      {Imagess.map((element, index) => (
        <>
          {element === ' ' ? (
            'kien'
          ) : (
            <>
              <div key={element.id}>
                <img
                  src={element}
                  className={Index === index ? 'acive__setImage' : ''}
                  onClick={() => handeleChan(index)}
                />
              </div>
              {/* <div>
                {' '}
                <img src={element[1]} onClick={() => handeleChan(element[1])} />
              </div>
              <div>
                <img src={element[2]} onClick={() => handeleChan(element[2])} />
              </div>
              <div>
                <img src={element[3]} onClick={() => handeleChan(element[3])} />
              </div>
              <div>
                <img src={element[4]} onClick={() => handeleChan(element[4])} />
              </div>
              <div>
                <img src={element[5]} onClick={() => handeleChan(element[5])} />
              </div> */}
            </>
          )}
        </>
      ))}
    </div>
  );
}

export default setImage;
