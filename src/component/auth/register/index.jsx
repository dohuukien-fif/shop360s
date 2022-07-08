import { doc } from 'firebase/firestore';
import PropTypes from 'prop-types';
import React from 'react';
import { db } from '../../../firebase';
import { useUserContext } from '../../contextApi/index';
import RegisterForm from './../registerForm';
// import { register } from './../../userSlice/userSlice';
// import { unwrap } from '@reduxjs/toolkit';
// import { useSnackbar } from 'notistack';
import './styles.scss';
Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  //   const { enqueueSnackbar } = useSnackbar();

  const { registerUser, error } = useUserContext();

  const hanledoSubmit = async (values) => {
    console.log(values);
    try {
      const email = values.email;
      const name = values.fullName;
      const password = values.password;

      if (email && password && name) await registerUser(email, password, name);
      //close Dialog

      ////set data  user  up  database   firebase

      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      // enqueueSnackbar('Register success', { variant: 'success' });
    } catch (error) {
      // enqueueSnackbar(error.message, { variant: 'error' });
      console.log('esss', error);
    }
  };
  console.log(typeof registerUser);

  return (
    <div className="register">
      <RegisterForm onSubmit={hanledoSubmit} error={error} />
    </div>
  );
}

export default Register;
