import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import './sidebage.scss';
SidePage.propTypes = {};

function SidePage({ DataIntroduce, onSubmits }) {
  const history = useHistory();
  const handleIdItem = (id) => {
    history.push(`/gioi-thieu/${id}`);
  };
  const [isaccotiton, setisaccotiton] = React.useState(false);
  const handleClickIsaccotion = () => {
    setisaccotiton((x) => !x);
  };
  return (
    <div className="side">
      <div className="side_title" onClick={handleClickIsaccotion}>
        <p>
          BÀI VIẾT MỚI NHẤT <AiOutlineDown />
        </p>
      </div>
      <div className={isaccotiton ? 'side_list activeAccotion' : 'side_list'}>
        {DataIntroduce.map((items, idex) => (
          <div className="side_item" onClick={() => handleIdItem(items.id)} key={items.id}>
            <div className="side_adside">
              <div className="side_image">
                <img src={items.image} alt="" />
              </div>
            </div>
            <div className="side_infor">
              <div className="side_name">
                <span>{items.name}</span>
              </div>
              <div className="side_time">
                <span>{items.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidePage;
