import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import HatApi from './../../../../api/ProductHatApi';
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
        const res = await HatApi.getAll();
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
        <img onClick={() => handleClick(item.id)} src={item.Araray[0]} alt="" />
      ))}
    </div>
  );
}

export default ChosingDiffrentProduct;
