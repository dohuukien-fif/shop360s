import React from 'react';
import PropTypes from 'prop-types';
import Inputfield from './../../form-control/InputFeid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, LockOutlinedIcon, Typography } from '@mui/material';
import { makeStyles, spacing } from '@mui/styles';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import PasswordField from './../../form-control/PasswordFiend';
import { Link } from 'react-router-dom';
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
  const handleSubmit = (value) => {
    if (onSubmit) {
      onSubmit(value);
    }
  };
  const { isSubmitting } = form.formState;

  return (
    <div className="register_container">
      {isSubmitting && <LinearProgress className={classes.progress} />}
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
