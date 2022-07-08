import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../../utils';

const OrderHomeItem = ({ item }) => {
  return (
    <div className="revanue_latestOrder-bottom-item">
      <div className="revanue_latestOrder-bottom-orderId">
        <span>{`# ${item.code}`}</span>
      </div>
      <div className="revanue_latestOrder-bottom-user">
        <span>{item.user.name}</span>
      </div>
      <div className="revanue_latestOrder-bottom-totalOrder">
        <span>{formatPrice(item.total)}</span>
      </div>
      <div className="revanue_latestOrder-bottom-day">
        <span>{item.day}</span>
      </div>

      {item.status === 'Pending' && (
        <div className="revanue_latestOrder-bottom-spending ">
          <span className="active__pending">{item.status}</span>
        </div>
      )}

      {item.status === 'Refund' && (
        <div className="revanue_latestOrder-bottom-spending ">
          <span className="active__reject">{item.status}</span>
        </div>
      )}

      {item.status === 'Success' && (
        <div className="revanue_latestOrder-bottom-spending ">
          <span className="active__success">{item.status}</span>
        </div>
      )}

      {item.status === 'Shipping' && (
        <div className="revanue_latestOrder-bottom-spending ">
          <span className="active__delivered">{item.status}</span>
        </div>
      )}
    </div>
  );
};

OrderHomeItem.propTypes = {};

export default OrderHomeItem;
