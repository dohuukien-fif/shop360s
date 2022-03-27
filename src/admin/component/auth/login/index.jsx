import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from './../../../../component/contextApi/index';
import LoginForm from './formLogin';
import './styles.scss';
// import { Redirect } from 'react-router-dom';
// import { LinearProgress } from '../../../../../node_modules/@mui/material/index';

LoginFeatures.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginFeatures(props) {
  const { signInUser, error } = useUserContext();
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
    <div className="admin__login ">
      <LoginForm onSubmit={handleSubmit} error={error} />
    </div>
  );
}

export default LoginFeatures;
