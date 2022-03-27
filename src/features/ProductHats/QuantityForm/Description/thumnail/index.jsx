import React, { useState } from 'react';
import SetImage from './setImage';
import './styles.scss';
ProductThumnail.propTypes = {
  //   product: PropTypes.array,
};

function ProductThumnail({ products }) {
  const [state, setstate] = useState([]);

  // console.log(products.Araray[0]);
  // const newArray = new Array(products.Araray);

  // console.log(newArray[2]);
  // if (!products) return;
  // const img = {
  //   imgs: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/092/products/adidas-superstar-shoes-white-fy6733-01-standard.jpg',
  //   imgs1:
  //     'https://bizweb.dktcdn.net/thumb/small/100/347/092/products/superstar-shoes-white-fy6733-02-standard.jpg?v=1633630554697',
  //   imgs2:
  //     'https://bizweb.dktcdn.net/thumb/small/100/347/092/ imgs:products/fy0362-s2.jpg?v=1631990666007',
  //   imgs3:
  //     'https://bizweb.dktcdn.net/thumb/small/100/347/092/products/fy0362-s2.jpg?v=1631990666007',
  //   imgs4:
  //     'https://bizweb.dktcdn.net/thumb/small/100/347/092/products/fy0362-s4.jpg?v=1631990666777',

  const { id, name, thumbnailUrl, Size, Araray, images, information } = products;
  // const Images = Araray.find((item) => <>{console.log(item)}</>);
  // console.log(Images);
  const [Index, setIndex] = useState();
  const handoChange = (newValue) => {
    setIndex(newValue);
  };
  return (
    <div className="thumnail" key={id}>
      <div className="thumnai-image">
        {/* <div>{Araray}</div> */}
        {/* <div>{Araray[0]}</div> */}
        {/* <img src={Araray[]} /> */}
        <img src={Index ?? thumbnailUrl} alt="" />

        {/* <img src={img} alt="" /> */}
        {/* <span>{information}</span> */}
        {/* <h1>{images[0]}</h1> */}
      </div>
      <div className="thumnai-images">
        <SetImage Imagess={products.Araray} onChange={handoChange} />
        {/* {new Array(Araray).map((item, index) => (
          <>
            
          </>
        ))} */}
      </div>
    </div>
  );
}

export default ProductThumnail;
