import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './cartItem';
cartLisst.propTypes = {
  item: PropTypes.array,
};

function cartLisst({ item }) {
  return (
    <div className="line_list">
      {item.length === 0 ? (
        <h2>hiện chưa có sản phẩm </h2>
      ) : (
        <>
          {item.map((items, index) => (
            <CartItem key={items.id} items={items} />
          ))}
        </>
      )}
    </div>
  );
}

export default cartLisst;
