import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';
Newcontent.propTypes = {};

function Newcontent({ DataIntroduce }) {
  const history = useHistory();
  const handleIdItem = (id) => {
    history.push(`/tin-tuc/${id}`);
  };
  return (
    <div className="content_new">
      <div className="content_new-title">
        <p>Tất cả bài viết</p>
      </div>

      <div className={{} ? 'new_list activeAccotion' : 'new_list'}>
        {DataIntroduce.map((items, idex) => (
          <div className="new_item" onClick={() => handleIdItem(items.id)}>
            <div className="new_adside">
              <div className="new_image">
                <img src={items.image} alt="" />
              </div>
            </div>
            <div className="new_infor">
              <div className="new_name">
                <span>{items.name}</span>
              </div>
              <div className="new_time">
                <span>{items.time}</span>
              </div>
              <div
                className="new_description"
                dangerouslySetInnerHTML={{ __html: items.description }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newcontent;
