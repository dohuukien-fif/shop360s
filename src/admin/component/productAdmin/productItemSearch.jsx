import PropTypes from 'prop-types';
import React from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import HourGlassLoading from '../../../component/loading/hourglassLoadig';
import { formatPrice } from '../../../utils';
ProductItemSearch.propTypes = {
  items: PropTypes.object,
};

function ProductItemSearch({ items, handleDeleteData }) {
  const [Loading, setLoading] = React.useState(false);
  const history = useHistory();
  const handleClickId = (id) => {
    return new Promise((resole) => {
      setLoading(true);
      setTimeout(() => {
        history.push(`/admin/Search/${id}`);
        setLoading(false);
        resole(true);
      }, 2000);
    });
  };
  const handleIdDeleteApi = (id) => {
    if (handleDeleteData) {
      handleDeleteData(id);
    }
  };
  return (
    <>
      {Loading ? (
        <HourGlassLoading />
      ) : (
        <>
          {' '}
          <div className="products_item">
            <div className="products_left">
              <div className="products_id">{items.id}</div>
              <div className="products_adside">
                <img src={items?.Araray.length > 0 && items?.Araray[0]} alt="" />
              </div>
              <div className="products_name">{items.name}</div>
            </div>
            <div className="products_right">
              <div className="product_price">{formatPrice(items.price)}</div>
              <div className="product_group-btn">
                <button onClick={() => handleClickId(items.id)}>edit</button>
                <MdOutlineDeleteOutline onClick={() => handleIdDeleteApi(items.id)} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductItemSearch;
