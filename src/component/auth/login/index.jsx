import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Inputfield from './../../form-control/InputFeid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, LockOutlinedIcon, Typography } from '@mui/material';
import { makeStyles, spacing } from '@mui/styles';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import PasswordField from './../../form-control/PasswordFiend';
import { useUserContext } from '../../contextApi/index';
import LoginForm from './../loginForm/index';
import './styles.scss';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
// import { LinearProgress } from '../../../../../node_modules/@mui/material/index';

Login.propTypes = {
  onSubmit: PropTypes.func,
};

function Login(props) {
  const { signInUser, error, user } = useUserContext();
  const history = useHistory();
  //   const [error, seterror] = useState();
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const email = values.email;
      const password = values.password;
      if (email && password) await signInUser(email, password);
    } catch (error) {
      // seterror('sai mk ');
    }
    //  console.log('kien', value);
    //  if (onSubmit) {
    //    await onSubmit(value);
    //  }
  };

  return (
    <div className="login">
      <LoginForm onSubmit={handleSubmit} error={error} />
    </div>
  );
}

export default Login;
