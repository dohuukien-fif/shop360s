import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../../utils';

const CustomerHomeItem = ({item}) => {
   return (
      <div className="revanue_customers-bottom-item" >
      <div className="revanue_customers-bottom-user">
        <span>
          {item.user && `${item.user.charAt(0).toUpperCase()}${item.user.slice(1)}`}
        </span>
      </div>
      <div className="revanue_customers-bottom-totalOrder">
        <span>{item.order}</span>
      </div>
      <div className="revanue_customers-bottom-spending">
        <span>{formatPrice(item.spending)}</span>
      </div>
    </div>
   );
};

CustomerHomeItem.propTypes = {
   
};

export default CustomerHomeItem;