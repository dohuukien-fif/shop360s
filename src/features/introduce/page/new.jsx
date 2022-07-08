import React, { useEffect } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NewApi from '../../../api/NewApi';
import Newcontent from '../component/new';
import Description from './contentIntoduce';
import SideBage from './SidePageNew';
import './styles.scss';
function NewFeatures(props) {
  const [DataIntroduce, setDataIntroduce] = React.useState([]);
  const [DataDescriptionn, setDataDescriptionn] = React.useState({});
  const [isAccotiton, setisAccotiton] = React.useState(false);
  console.log('DataIntroduce', DataIntroduce);
  const match = useRouteMatch();

  console.log(match);
  const handelIdIntroduce = (id) => {
    setDataDescriptionn();
    console.log('id', id);
  };
  const handleClickIsaccotion = () => {
    setisAccotiton((x) => !x);
  };
  useEffect(() => {
    (async () => {
      const res = await NewApi.getAll();
      setDataIntroduce(res);
    })();
  }, []);

  return (
    <div className="introduce">
      <div className="introduce_navbar"></div>
      <div className="introduce_swapper">
        <div className="introduce_left">
          <div className="introduce_left-swapper">
            <SideBage DataIntroduce={DataIntroduce} onSubmits={handelIdIntroduce} />
            <div className="introduce_left-bottom">
              <div className="introduce_left-menu">
                <div className="introduce_left-menu-title" onClick={handleClickIsaccotion}>
                  <p>
                    DANH MỤC SẢN PHẨM <AiOutlineDown />
                  </p>
                </div>
                <div
                  className={
                    isAccotiton
                      ? 'introduce_left-menu-product activeAccotion'
                      : 'introduce_left-menu-product'
                  }
                >
                  <p>Các mẫu áo sơ mi họa tiết đẹp</p>
                  <p>Các mẫu quần họa tiết đẹp</p>
                  <p>Khuyến mãi</p>
                  <p>Sản phẩm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="introduce_right">
          <Switch>
            <Route path={`${match.url}`} exact>
              <Newcontent DataIntroduce={DataIntroduce} />
            </Route>
            <Route path={`${match.url}/:IntroductionId`}>
              <Description onSubmits={handelIdIntroduce} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default NewFeatures;
