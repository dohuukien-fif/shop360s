import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';
NotFound.propTypes = {};

function NotFound(props) {
  const history = useHistory();
  useEffect(() => {
    const idItime = setTimeout(() => {
      history.push('/Trang-chu');
    }, 3000);
    return () => {
      clearTimeout(idItime);
    };
  }, []);

  return (
    <div className="not-found">
      <div className="not_image">
        <img
          src="https://media.istockphoto.com/photos/website-page-error-concept-of-problem-and-inconvenience-picture-id1286519258?b=1&k=20&m=1286519258&s=170667a&w=0&h=wml3_MxOmEHWDF3tJGGXK3c9Q0--j12eGyyCME2lFhg="
          alt=""
        />
      </div>
    </div>
  );
}

export default NotFound;
