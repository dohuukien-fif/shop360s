import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useHistory } from 'react-router';
import { formatPrice } from './../../../utils/index';
CartTotal.propTypes = {
  onSubmits: PropTypes.func,
};

function CartTotal({ cartTotal, onSubmits }) {
  const [discount, setdiscount] = useState({});
  const [Loading, setLoading] = useState(false);
  const history = useHistory();
  const handletotal = (e) => {
    const { value } = e.target;
    setdiscount((prev) => ({
      ...prev,
      value,
    }));
    //  console.log(value);
  };
  const discou = cartTotal * (discount.value / 100);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmits) return;
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        // setLoading(true);
        const newvalueTotal = {
          Checout,
          discount,
        };
        onSubmits(newvalueTotal);
        // setTimeout(() => {
        //   setLoading(false);
        // }, 2000);

        setLoading(false);
        resolve(true);
      }, 2000);
    });
  };
  const Checout = cartTotal - [discou || 0];
  const baceHome = () => {
    history.push('/');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="cart_top">
        <div className="cart_top-discount">
          <select name="pets" id="select" onChange={handletotal}>
            <option value="0">Giảm giá</option>
            <option value="10">-10%</option>
            <option value="15">-15%</option>
          </select>
          <span>Khuyến mãi tuần</span>
        </div>
      </div>
      <div className="cart_content">
        <div className="cart_content-user">
          <span>Tổng tiền</span> <span>{formatPrice(cartTotal)}</span>
        </div>
        <div className="cart_content-user">
          <span>Tiền Giảm</span> <span>{` - ${formatPrice(discou || 0)}`}</span>
        </div>
      </div>
      <div className="cart_bottom">
        <div className="cart_bottom-total">
          <span>Tiền phải trả</span>
          <span style={{ color: 'red' }}>{formatPrice(Checout)}</span>
        </div>
        <button type="submit">
          <span style={{ display: 'flex', justifyContent: 'center', alignItem: 'center' }}>
            {Loading && (
              <CircularProgress
                // sx={{ fontSize: '10px' }}
                style={{ width: '18px', height: '18px', marginLeft: '10px' }}
                color="inherit"
              />
            )}
            Check out{' '}
            <AiOutlineCheckCircle style={{ color: 'green', fontSize: '20px', marginLeft: '5px' }} />
          </span>
        </button>
      </div>
      <div className="cart_mobile">
        <button onClick={baceHome}>Tiếp tục mua hang</button>
        <button type="submit">Mua ngay</button>
      </div>
    </form>
  );
}

export default CartTotal;
