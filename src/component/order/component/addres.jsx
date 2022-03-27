import React, { useState } from 'react';
import FormAddress from './formAddress/index';
import './styles.scss';
Address.propTypes = {};

function Address(props) {
  const [Datacoutry, setDatacoutry] = useState([]);
  const [isopen, setisopen] = useState(false);
  const handleOpen = () => {
    setisopen((x) => !x);
  };
  //   const [FilterData, setFilterData] = useState({
  //     depth: 1,
  //     codename: 'tinh_ha_giang',
  //   });
  //   useEffect(() => {
  //     const params = queryString.stringify(FilterData);
  //     fetch(` https://provinces.open-api.vn/api/?${params}`)
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   }, [FilterData]);
  const handleSubmit = (newvalue) => {
    const newOb = {
      id: Date.now(),
      newvalue,
    };
    const sexxx = [...Datacoutry, newOb];
    localStorage.setItem('Asss', JSON.stringify(sexxx));
    setDatacoutry(sexxx);
    setisopen(false);
  };

  const handleClikc = (newvalues) => {
    const addresLisst = JSON.parse(localStorage.getItem('A'));
    const deletes = addresLisst.filter((x) => x.id !== newvalues.id);
    setDatacoutry(deletes);
    localStorage.setItem('Asss', JSON.stringify(deletes));

    // console.log(addresLisst);
  };
  // console.log(Datacoutry);
  const addresLissts = JSON.parse(localStorage.getItem('Asss'));
  console.log(Datacoutry);
  //   const deletes = addresLissts.filter((x) => x.id !== newvalues.id);
  //   console.log(Datacoutry);
  return (
    <div className="address">
      <div className="address_title">
        <h4>Địa chỉ giao hàng</h4>
        <p onClick={handleOpen}> + {isopen ? 'Close' : 'Thêm'}</p>
      </div>
      <div className="address_list">
        {addresLissts?.map((items, index) => (
          <div key={index} className="address_item">
            <div className="address_name">
              <span>Tên : </span> <span>{items.newvalue.fullName}</span>
            </div>
            <div className="address_phone">
              <span>Điện thoại : </span>
              <span>{items.newvalue.phone}</span>
            </div>
            <div className="address_email">
              <span>Email : </span>
              <span>{items.newvalue.email}</span>
            </div>
            <div className="address_add">
              <span>Địa chỉ : </span>
              <span>{items.newvalue.address}</span>
            </div>
            <div className="address_city">
              <span>Thành phố : </span>
              <span>{items.newvalue.city}</span>
            </div>
            <button onClick={() => handleClikc(items)}>
              <p>Xóa</p>
            </button>
          </div>
        ))}
        {/* {addresLisst > 0 &&(
              <>
              
              </>
           )} */}
      </div>

      {isopen && <FormAddress onSubmits={handleSubmit} />}
    </div>
  );
}

export default Address;
