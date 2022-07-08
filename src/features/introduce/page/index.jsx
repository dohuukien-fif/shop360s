import React, { useEffect } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NewApi from '../../../api/NewApi';
import Description from './contentIntoduce';
import SideBage from './SidePage';
import './styles.scss';

function IntroduceFeartures(props) {
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
              <div className="content_introduce">
                <div className="content_introduce-title">
                  <p>Về thương hiệu thời trang nam 360</p>
                </div>
                <p>
                  <strong>13/10/2021</strong>
                </p>
                <p>
                  Ra đời từ 2014, thương hiệu thời trang nam 360 xác định sứ mệnh giúp các chàng
                  trai trở nên đẹp hơn với phiên bản của chính mình. Ngày nay nam giới trẻ đang đứng
                  những cơ hội tuyệt vời của xã hội hiện đại, công nghệ thông tin phát triển, cuộc
                  cách mạng của các trang mạng xã hội để khẳng định bản thân. Bên cạnh đó, 360 hiểu
                  rằng người trẻ cũng đang phải đối diện với những áp lực, thử thách thôi thúc bản
                  thân phải thể hiên mình so với những người khác.
                </p>
                <p>
                  Với mong muốn được đồng hành, truyền cảm hứng và khuyến khích các bạn nam giới trẻ
                  dám bước ra khỏi vùng an toàn để tự do, tự tin thể hiện chính mình theo phong cách
                  phù hợp với bản thân. Thương hiệu thời trang 360 đầu tư tâm huyết nghiên cứu thiết
                  kế chi tiết từng sản phẩm để có thể mang lại những trải nghiệm mới cho khách hàng,
                  cũng là thông điệp muốn nhắn nhủ đến các bạn trẻ hãy cho bản thân trải nghiệm, dám
                  thay đổi, bứt phá để vươn lên. Chúng ta chỉ thực sự thay đổi khi chúng ta hành
                  động. 360 tin rằng dù có thể thành công hay thất bại, nhưng chắc chắn chỉ có những
                  trải nghiệm mới giúp bạn trưởng thành. Trưởng thành là một hành trình với những
                  dấu mốc thanh xuân, để khi nhìn lại tôi và bạn có thể tự tin không phải nuối tiếc
                  “giá như…”
                </p>

                <p>Mỗi bạn trẻ là một phiên bản độc đáo và duy nhất.</p>
                <p>
                  <strong>360 – Be yourself</strong>
                </p>
              </div>
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

export default IntroduceFeartures;
