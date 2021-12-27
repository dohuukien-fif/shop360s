import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Cartitem from './cartItem';
import AOS from 'aos';
import 'aos/dist/aos.css';
CartList.propTypes = {
  item: PropTypes.array,
  setQuantity: PropTypes.func,
  remove: PropTypes.func,
};

function CartList({ item, setQuantity, remove }) {
  const handleRemoveItem = (id) => {
    console.log(id);
    remove(id);
  };
  const handleQuantity = (newquantity) => {
    console.log(newquantity);
    setQuantity(newquantity);
  };
  // const history = useHistory();
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease in',
    });
  }, []);
  return (
    <ul className="cart_list">
      {item.map((items, index) => (
        <li key={index} data-aos="fade-left">
          <Cartitem items={items} removes={handleRemoveItem} onSubmit={handleQuantity} />
        </li>
      ))}
    </ul>
  );
}

export default CartList;
