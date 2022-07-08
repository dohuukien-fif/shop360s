import React, { useState } from 'react';
import { BsCamera } from 'react-icons/bs';
import { useUserContext } from './../../../contextApi/index';
import './styles.scss';
Account.propTypes = {};

function Account(props) {
  const { user, PhotoUser, data } = useUserContext();
  const [files, setfiles] = useState('');

  const handleChangeFiles = (e) => {
    const file = e.target.files[0];
    if (file) {
      PhotoUser(file);
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setfiles(e.target.result);
    };
  };

  console.log(user?.uid);
  console.log(user?.photoURL);
  console.log(data);

  return (
    <>
      <div className="accounts">
        <div className="accounts_image">
          <img
            src={
              files || user?.photoURL || 'https://knowledge.vn/public/uploads/default-avatar.png'
            }
            alt=""
          />
          <div className="accounts_icon">
            <input type="file" id="file" accept="image/*" onChange={handleChangeFiles} />
            <label htmlFor="file">
              <BsCamera type="file" style={{ fontSize: '20px' }} />
            </label>
          </div>
        </div>
        <div className="accounts_users">
          <div className="accounts_name">
            <span>{user?.displayName}</span>
          </div>
          <div className="accounts_email">
            <span>{user?.email}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
