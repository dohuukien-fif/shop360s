import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import SneakerApi from './../../../../api/ProductSneakerApi';
import { useHistory } from 'react-router';
ChosingDiffrentProduct.propTypes = {
  product: PropTypes.object,
};

function ChosingDiffrentProduct({ product }) {
  const [Imagess, setImages] = useState([]);
  const history = useHistory();
  const handleClick = (newId) => {
    history.push(`${newId}`);
  };
  useEffect(() => {
    const fetchApiRandom = async () => {
      try {
        const res = await SneakerApi.getAll();
        setImages(res);
        console.log(res);
      } catch (error) {}
    };
    fetchApiRandom();
  }, []);
  console.log(Imagess);
  const randomMovie = Math.floor(Math.random() * Imagess.length);
  return (
    <div className="choose_image">
      <h2>Lựa chon khác : </h2>
      {Imagess.slice(
        randomMovie < 6 ? 0 : randomMovie - 6,
        randomMovie < 6 ? Imagess.length : randomMovie
      ).map((item, index) => (
        <Fragment key={index}>
          <img onClick={() => handleClick(item.id)} src={item.Araray[0]} alt="" />
        </Fragment>
      ))}
    </div>
  );
}

export default ChosingDiffrentProduct;
