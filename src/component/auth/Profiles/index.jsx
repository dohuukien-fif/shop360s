import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import * as yup from 'yup';
import InputField from '../../../component/form-control/InputFeid';
import { useUserContext } from './../../../component/contextApi/index';
import './styles.scss';

ProfilesFeaures.propTypes = {};

function ProfilesFeaures(props) {
  const { forgotPassword } = useUserContext();
  const history = useHistory();
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

  const handleBack = () => {
    history.goBack();
  };
  return (
    <div className="profiles">
      <div className="profile_swapper">
        <div className="profiles__title">
          <p>Nhập email của bạn</p>
        </div>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField name="email" label="Email" form={form} />

          <button variant="contained" color="primary" type="submit" className="submits">
            {/* {isSubmitting && <AirlineSeatFlatAngled style={{ color: 'red', fontSize: '25px' }} />} */}
            sign in
          </button>
        </form>
        <div className="profile__btn">
          <button onClick={handleBack}>
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilesFeaures;
