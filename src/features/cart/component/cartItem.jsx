import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFillTrashFill } from 'react-icons/bs';
import * as yup from 'yup';
import QuantityField from './../../../component/form-control/QuantitiFiend/index';
import { formatPrice } from './../../../utils/index';

CartItem.propTypes = {};

function CartItem({ items, onSubmit, removes }) {
  const { id, product, quantity, size, newSize } = items;
  const [Sizessss, setSizessss] = useState('');
  console.log(items);
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Please enter quantity!')
      .min(1, 'Please enter smallest equal 1!')
      .typeError('Please enter a number!'),
  });
  const form = useForm({
    defaultValues: {
      quantity: quantity,
    },
    resolver: yupResolver(schema),
  });
  // const thumbnailUrl = product.thumbnail
  //     ? STATIC_HOST + product.thumbnail?.url
  //     : THUMBNAIL_PLACEHOLDER;

  const handleSubmit = (quantity, sizes) => {
    if (!onSubmit) return;
    const values = {
      id,
      quantity,
    };
    onSubmit(values);
  };

  const handleChange = (quantity) => {
    handleSubmit(quantity);
  };

  const handleRemoveItem = () => {
    if (!removes) return;
    removes(id);
  };
  // const handleClick = (sizes) => {
  //   handleSubmit(sizes);
  //   console.log(sizes);
  // };

  console.log('newSize', newSize);
  return (
    <div className="cart_item">
      <div className="cart_name--mobile">
        <span>
          {' '}
          <CloseIcon onClick={handleRemoveItem} />
        </span>
        <h3>{product.name}</h3>
      </div>
      <div className="cart_body">
        <header className="cart_header">
          <div className="cart_figure">
            <img src={product.Araray[0]} />
          </div>
          <div className="cart_name">
            <h3>{product.name}</h3>

            {newSize.length > 1 && (
              <div className="size_List">
                {newSize.map((item, idx) => (
                  <div className="size_item" key={idx}>
                    <span>Size:</span>
                    <span>{`${item.size} X  ${item.quantity}`}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </header>

        <footer className="cart_footer">
          <div className="cart_form">
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <QuantityField form={form} name="quantity" onChangeRHF={handleChange} />
            </form>
          </div>

          <div className="cart_price">
            <span>
              {formatPrice(product.price)} {` x ${quantity}`}
            </span>

            <span>{formatPrice(product.price * quantity)}</span>

            <span>
              <BsFillTrashFill onClick={handleRemoveItem} style={{ cursor: 'pointer' }} />
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CartItem;
