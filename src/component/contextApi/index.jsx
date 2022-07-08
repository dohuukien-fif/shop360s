import { async } from '@firebase/util';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db, storage } from './../../firebase';

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dataImage, setdata] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  console.log('auth', auth);
  const history = useHistory();
  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        const { displayName, email, photoURL, accessToken, uid } = res;
        console.log('[displayName,email,photoURL]', displayName, email, photoURL, accessToken);

        setUser(res);
        ///set    data up  database fireStore
        (async () => {
          const docRef = doc(db, 'user', uid);

          await setDoc(docRef, { displayName, email, photoURL, accessToken });
        })();

        res && localStorage.setItem('accessToken', JSON.stringify(res.accessToken));
        return;
      } else {
        setUser(null);
      }
      setError('');
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const PhotoUser = (file) => {
    try {
      const name = new Date().getTime() + file.name;
      console.log(name);
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateProfile(auth.currentUser, {
              photoURL: downloadURL,
            });
            //set   up databse fireStore
            const docRef = doc(db, 'user', user.uid);

            setDoc(docRef, { photoURL: downloadURL });
            setdata((prev) => ({ ...prev, downloadURL }));
          });
        }
      );
    } catch (error) {}

    // const uploadTask = ref(storage, `image/${image.name}`).put(image);

    // uploadTask.on(
    //   'state_changed',
    //   (snapshop) => {},
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     ref('image')
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then((url) => {
    //         console.log(url);
    //       });
    //   }
    // );
    // const fileRef = ref(storage, user.uid + 'png');

    // const snaphot = await uploadBytes(fileRef, file);

    // const photoURL = await getDownloadURL(fileRef);

    // console.log('photoURL', photoURL);
    // updateProfile(user, {
    //   photoURL: photoURL,
    // })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {});
    // console.log('succer  file ', snaphot);
  };

  const registerUser = async (email, password, name) => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name,
        })
      )

      .then((res) => console.log('regisđấter', res))
      .catch((err) => setError('email đã được sử dụng'))
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log('loginn', res))
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

  console.log('dataRegister', dataImage);
  const contextValue = {
    PhotoUser,
    dataImage,
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
