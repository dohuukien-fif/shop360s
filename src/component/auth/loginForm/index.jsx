import { yupResolver } from '@hookform/resolvers/yup';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import { LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import Inputfield from './../../form-control/InputFeid/index';
import Passwordfield from './../../form-control/PasswordFiend';
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
});

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();
  const { onSubmit, error } = props;
  const schema = yup.object().shape({
    email: yup.string().required('please enter your Email').email('please enter Email'),
    password: yup.string().required('please enter your Password'),
  });
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
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
    <div className="login_container">
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <div className="login_avatar">
        <NoAccountsIcon />
      </div>
      <div className="login_container-title">Sign in</div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Inputfield name="email" label="Email" form={form} />
        <Passwordfield name="password" label="Password" form={form} />
        <div className="login_error">{error}</div>
        <button
          variant="contained"
          color="primary"
          type="submit"
          className="submits"
          disabled={isSubmitting}
        >
          {/* {isSubmitting && <AirlineSeatFlatAngled style={{ color: 'red', fontSize: '25px' }} />} */}
          sign in
        </button>
      </form>
      <span className="login_btn" color="primary">
        Already have an account .{' '}
        <Link to="register" style={{ color: '#5cd6ff' }}>
          Register here
        </Link>
      </span>
    </div>
  );
}

export default LoginForm;
