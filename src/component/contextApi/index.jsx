import { createContext, useContext, useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from './../../firebase';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
        console.log('res', res);
        // if (res?.accessToken !== undefined) {
        //   <Redirect from="/login" to="/Trang-chu" />;
        // }
        localStorage.setItem('accessToken', JSON.stringify(res.accessToken));
      } else {
        setUser(null);
      }
      setError('');
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name,
        })
      )
      .then((res) => console.log(res))
      .catch((err) => setError('email đã được sử dụng'))
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError('sai mật khẩu hoặc email'))
      .finally(() => setLoading(false));
    // history?.push('/Trang-chu');
  };

  const logoutUser = () => {
    signOut(auth);
    localStorage.removeItem('accessToken', JSON.stringify(user.accessToken));
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
  };
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
