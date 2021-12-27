import React, { useState, useEffect } from 'react';
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
  return (
    <div className="choose_image">
      <h2>Lựa chon khác : </h2>
      {Imagess.slice(0, 6).map((item, index) => (
        <img onClick={() => handleClick(item.id)} src={item.Araray[0]} alt="" />
      ))}
    </div>
  );
}

export default ChosingDiffrentProduct;
