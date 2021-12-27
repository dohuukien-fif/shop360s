import React from 'react';
import PropTypes from 'prop-types';
import Textfield from './../../form-control/textFeild/index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress, LockOutlinedIcon, Typography } from '@mui/material';
import { makeStyles, spacing } from '@mui/styles';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

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
});

Evaluate.propTypes = {
  //   onSubmit: PropTypes.func,
};

function Evaluate(props) {
  const classes = useStyles();
  const { onSubmits, error } = props;
  const schema = yup.object().shape({
    evaluate: yup.string().required('viết đánh giá của bạn'),
  });
  const form = useForm({
    defaultValues: {
      evaluate: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    if (onSubmits) {
      onSubmits(value);
    }
    console.log(value);
  };
  const { isSubmitting } = form.formState;

  return (
    <>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <div className="login_container-title">Đánh giá của bạn</div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Textfield name="evaluate" label="Đánh giá" form={form} />

        <div className="login_error">{error}</div>
        <button
          variant="contained"
          color="primary"
          type="submit"
          className="submits"
          disabled={isSubmitting}
        >
          Đánh giá
        </button>
      </form>
    </>
  );
}

export default Evaluate;
