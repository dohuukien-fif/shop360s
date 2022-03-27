import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../component/form-control/InputFeid';
import { yupResolver } from '@hookform/resolvers/yup';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import { LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useUserContext } from './../../../component/contextApi/index';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import swal from 'sweetalert';

import './styles.scss';
ProfilesFeaures.propTypes = {};

function ProfilesFeaures(props) {
  const { user, forgotPassword } = useUserContext();

  const schema = yup.object().shape({
    email: yup.string().required('please enter your Email').email('please enter Email'),
  });
  const form = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (value) => {
    try {
      await forgotPassword(value.email);

      await swal({
        // title: 'Good job!',
        text: 'vui  lòng kiểm  tra email',
        icon: 'success',
      });
    } catch (error) {
      await swal({
        // title: 'Good job!',
        text: 'Vui lòng kiểm tra lại email',
        icon: 'warning',
      });
    }
  };
  return (
    <div className="profile">
      <div className="profile_swapper">
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField name="email" label="Email" form={form} />

          <button variant="contained" color="primary" type="submit" className="submits">
            {/* {isSubmitting && <AirlineSeatFlatAngled style={{ color: 'red', fontSize: '25px' }} />} */}
            sign in
          </button>

          <p> <Link to="/admin/login"></Link>Login</p>
        </form>
      </div>
    </div>
  );
}

export default ProfilesFeaures;
