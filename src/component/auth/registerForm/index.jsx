import { yupResolver } from '@hookform/resolvers/yup';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import { LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsCamera } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useUserContext } from '../../contextApi';
import Inputfield from './../../form-control/InputFeid';
import PasswordField from './../../form-control/PasswordFiend';
// import { LinearProgress } from '../../../../../node_modules/@mui/material/index';

const useStyles = makeStyles({
  root: {
    paddingTop: '20px',
    position: 'relative',
  },
  avatar: {
    margin: '0 auto',
    background: 'green',
  },
  title: {
    padding: '20px',
    textAlign: 'center',
  },
  submit: {
    padding: '30px',
  },
  progress: {
    position: 'absolute',
    marginTop: '-10px',
    left: '0',
    right: '0',
  },
  buttons: {
    padding: '20px',
    background: 'red',
  },
});

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const { loading } = useUserContext();
  const classes = useStyles();
  const { onSubmit, error } = props;
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('please enter your full Name')
      .test('should has leasst two word', 'please enter at least two word', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('please enter your Email').email('please enter Email'),
    password: yup
      .string()
      .required('please enter your Password')
      .min(6, 'please enter at least 6 '),
    retypePassword: yup
      .string()
      .required('please enter retyPassword')
      .oneOf([yup.ref('password')], 'please does not match'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (value) => {
    if (onSubmit) {
      await onSubmit(value);
    }
  };
  const { isSubmitting } = form.formState;

  return (
    <div className="register_container">
      {loading && <LinearProgress className={classes.progress} />}
      <div className="register_avatar">
        <NoAccountsIcon />
      </div>

      <div className="register_container-title"> Sign Up</div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Inputfield name="fullName" label="Full Name" form={form} />
        <Inputfield name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />
        <div className="register_error">{error}</div>
        <button
          variant="contained"
          color="primary"
          type="submit"
          className="submits"
          disabled={isSubmitting}
        >
          Sign Up
        </button>
      </form>
      <span className="login_btn" color="primary">
        Already have an account .
        <Link to="/login" style={{ color: '#5cd6ff' }}>
          {' '}
          Login here
        </Link>
      </span>
    </div>
  );
}

export default RegisterForm;
