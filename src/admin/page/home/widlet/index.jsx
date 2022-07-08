import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../../utils';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const WiddletMain = ({ title, price, percent, name, checkPrice, classs }) => {
  return (
    <div className={`revanue__group ${classs}`}>
      <div className="revanue_title">{title}</div>
      <div className="revanue_total">
        <div className="revanue_total-top">
          <div className="revanue_price">
            <span>{!checkPrice ? formatPrice(price || 0) : price}</span>
          </div>

          {percent && (
            <div className="revanue_percent">
              <span style={{ color: percent > 0 ? 'green' : 'red' }}>
                {`${percent}%`}
                {percent > 0 ? (
                  <AiOutlineArrowUp />
                ) : (
                  <AiOutlineArrowDown style={{ color: 'red' }} />
                )}
              </span>
            </div>
          )}
        </div>

        <div className="revanue_month">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

WiddletMain.propTypes = {};

export default WiddletMain;
