import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
// import PropTypes from 'prop-types';
// import CartTotal from './../component/CartTotal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Inputfield from './../../../form-control/InputFeid/index';
import './styles.scss';
// import Textfield from './../../../component/form-control/InputFeid/index';

FormInformation.propTypes = {};

function FormInformation({ cartTotal, onSubmits = null }) {
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const cartItem = useSelector(cartItemSelector);

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('please enter your full Name')
      .test('should has leasst two word', 'please enter at least two word', (value) => {
        return value.split(' ').length >= 2;
      }),
    address: yup.string().required('please enter your full Name'),
    city: yup.string().required('please enter your City'),
    email: yup.string().required('please enter your Email').email('please enter Email'),
    phone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    //
    if (onSubmits) onSubmits(value);
    //  form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="fullName_phone">
        <div className="fullName_phone-left">
          <span>Họ và tên người nhận</span>
          <Inputfield className="sex" name="fullName" label="Full Name" form={form} />
        </div>
        <div className="fullName_phone-right">
          <span>Điện thoại người nhận</span>
          <Inputfield name="phone" label="Phone" form={form} />
        </div>
      </div>
      <div className="email">
        <span>Email</span>
        <Inputfield name="email" label="Email" form={form} />
      </div>
      <div className="address_note">
        <div className="address_note-left">
          <span>Địa chỉ</span>
          <Inputfield name="address" label="Adress" form={form} />
        </div>
        <div className="address_note-right">
          <span>Tỉnh / Thành phố</span>
          <Inputfield name="city" label="Tỉnh / Thành phố" form={form} />
        </div>
      </div>

      {/* <div className="cart_total">
        <CartTotal cartTotal={cartTotal} />
        <button type="submit">
          <span>Add to cart</span>
        </button>
      </div> */}
      <button className="btn_address" type="submit">
        <span> Lưu địa chỉ</span>
      </button>
    </form>
  );
}

export default FormInformation;
