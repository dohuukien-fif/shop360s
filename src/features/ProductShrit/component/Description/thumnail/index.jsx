import React, { useState } from 'react';
import SetImage from './setImage';
import './styles.scss';
ProductImage.propTypes = {
  //   product: PropTypes.array,
};

function ProductImage({ products }) {
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

  const { id, thumbnailUrl, Araray } = products;
  // const Images = Araray.find((item) => <>{console.log(item)}</>);
  // console.log(Images);
  const [Index, setIndex] = useState(0);
  const handoChange = (newValue) => {
    setIndex(newValue);
  };
  return (
    <div className="thumnail" key={id}>
      <div className="thumnai-image">
        {/* <div>{Araray}</div> */}
        {/* <div>{Araray[0]}</div> */}
        {/* <img src={Araray[]} /> */}
        <img src={Araray[Index] ?? thumbnailUrl} alt="" />

        {/* <img src={img} alt="" /> */}
        {/* <span>{information}</span> */}
        {/* <h1>{images[0]}</h1> */}
      </div>
      <div className="thumnai-images">
        <SetImage ids={id} Imagess={Araray} onChange={handoChange} Index={Index} />
        {/* {new Array(Araray).map((item, index) => (
          <>
            
          </>
        ))} */}
      </div>
    </div>
  );
}

export default ProductImage;
