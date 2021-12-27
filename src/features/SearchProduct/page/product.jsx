import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
NotFoundSearch.propTypes = {};

function NotFoundSearch(props) {
  const history = useHistory();
  useEffect(() => {
    history.push('/product');
  }, []);
  return (
    <div>
      <h1>...Loading</h1>
    </div>
  );
}

export default NotFoundSearch;
