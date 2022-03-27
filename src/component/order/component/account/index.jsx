import React, { useState } from 'react';
import { BsCamera } from 'react-icons/bs';
import { useUserContext } from './../../../contextApi/index';
import './styles.scss';
Account.propTypes = {};

function Account(props) {
  const { user } = useUserContext();
  const [files, setfiles] = useState('');
  const hadleChange = (e) => {
    const fff = e.target.files;
    //  setfiles(fff.File);
    for (const file of files) {
      const { name, type, size, lastModified } = file;
    }
    // console.log(fff.name);
    // console.log(fff.File);
  };
  return (
    <>
      <div className="accounts">
        <div className="accounts_image">
          <img src="https://knowledge.vn/public/uploads/default-avatar.png" alt="" />
          <div className="accounts_icon">
            <BsCamera type="file" style={{ fontSize: '20px' }} />
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
