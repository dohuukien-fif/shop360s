import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import HourGlassLoading from '../../../component/loading/hourglassLoadig';
import { formatPrice } from '../../../utils';
ProductItem.propTypes = {
  items: PropTypes.object,
};

function ProductItem({ items, handleDeleteData }) {
  const [Loading, setLoading] = React.useState(false);
  const history = useHistory();
  const handleClickId = (id) => {
    return new Promise((resole) => {
      setLoading(true);
      setTimeout(() => {
        history.push(`/admin/Order/${id}`);
        setLoading(false);
        resole(true);
      }, 2000);
    });
  };
  const handleIdDeleteApi = (item) => {
    if (handleDeleteData) {
      handleDeleteData(item);
    }
  };

  console.log('items', items);
  return (
    <>
      {Loading ? (
        <HourGlassLoading />
      ) : (
        <>
          {' '}
          <div className="products_item-order">
            <div className="products_left-order">
              <div className="products_code">{`# ${items.code}`}</div>
              {/* <div className="products_adside">
                <img src={items?.Araray.length > 0 && items?.Araray[0]} alt="" />
              </div> */}
              <div className="products_name">
                <img
                  src={
                    items?.user?.image ||
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsIVGXUz77jSd-Zgau2ZqRpL_STVm4gbxWQ&usqp=CAU'
                  }
                  alt=""
                />
                <span>{items.user.name}</span>
              </div>
              <div className="product_email">
                <span>{items.infor.address}</span>
              </div>
              <div className="product_day">
                <p>{items.day}</p>
                <p>{items.time}</p>
              </div>
            </div>
            <div className="products_right-order">
              <div className="product_total">
                {items.cartTotalss.map((itemss, index) => (
                  <Fragment key={index}>
                    {formatPrice(
                      itemss.sexx.reduce(
                        (total, item) => total + item.product.price * item.quantity,
                        0
                      )
                    )}
                  </Fragment>
                ))}{' '}
              </div>

              <div className="product_status">
                {items.status === 'Pending' && (
                  <button className="order_handling active__pending">
                    <RiCheckboxBlankCircleFill />
                    {items.status}
                  </button>
                )}
                {items.status === 'Refund' && (
                  <button className="order_handling active__reject">
                    <RiCheckboxBlankCircleFill />
                    {items.status}
                  </button>
                )}
                {items.status === 'Shipping' && (
                  <button className="order_handling active__delivered">
                    <RiCheckboxBlankCircleFill />
                    {items.status}
                  </button>
                )}
                {items.status === 'Success' && (
                  <button className="order_handling active__success">
                    <RiCheckboxBlankCircleFill />
                    {items.status}
                  </button>
                )}
              </div>

              <div className="product_group-btn">
                <button onClick={() => handleClickId(items.id)}>edit</button>
                <MdOutlineDeleteOutline onClick={() => handleIdDeleteApi(items)} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductItem;
