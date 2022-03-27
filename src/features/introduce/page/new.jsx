import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import Newcontent from '../component/new';
import Description from './contentIntoduce';
import SideBage from './SidePageNew';
import './styles.scss';
function NewFeatures(props) {
  const history = useHistory();

  const [DataIntroduce, setDataIntroduce] = React.useState([
    {
      id: 2,
      name: 'Dự báo thời tiết miền Bắc đón tết Nhâm Dần 2022 sẽ rét đậm và mưa phùn',
      time: '21/01/2022',
      image:
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/01/thoi-tiet-mien-bac.png&w=400&h=250&zc=1&q=90',
      description: `<p>
      Ông Hoàng Phúc Lâm, Phó Giám Đốc Trung tâm Dự báo Khí tượng Thủy văn cho biết, Trong khoảng thời gian từ 29 tháng Chạp đến mùng 7 Tết, các tỉnh miền Bắc trời nhiều mây có mưa nhỏ, mưa phùn.
    </p>
    <p>Do tác động của không khí lạnh liên tiếp, dự báo thời tiết các tỉnh miền Bắc trong dịp Tết Nguyên đán Nhâm Dần 2022 sẽ có mưa rét. Vào đêm giao thừa trời rét đậm, mưa phùn.

    </p>
    <img src="https://360boutique.vn/wp-content/uploads/2022/01/thoi-tiet-mien-bac.png" />
    <p>Tuy nhiên, tác động của không khí lạnh đến các khu vực ở miền Bắc khác nhau. Giáp Tết, Bắc Bộ chịu ảnh hưởng của đợt gió mùa Đông Bắc cường độ mạnh gây mưa rét. Ngày 31/1 (29 tháng Chạp), không khí lạnh được bổ sung khiến thời tiết miền Bắc chìm trong giá rét, mưa phùn.</p>
    <p>Đông Bắc Bộ và các tỉnh đồng bằng Bắc Bộ (gồm Thủ đô Hà Nội) chịu ảnh hưởng mạnh nhất nên trời rét sâu, có mưa nhỏ, mưa phùn trong suốt dịp nghỉ Tết. Nhiệt độ dao động 13-18 độ C, độ ẩm cao.</p>
    <p>“Miền Bắc có thể đón Tết trong mưa phùn và rét đậm khi nhiệt độ trung bình ngày tại đồng bằng không quá 15 độ C. Vùng núi 8-13 độ C, khu vực núi cao có thể xuất hiện băng giá, sương muối”, ông Lâm nhận định.</p>
    <p>360 – Be yourself</p>
   `,
    },
    {
      id: 3,
      name: 'ĐÓN KHÔNG KHÍ LẠNH TĂNG CƯỜNG, MIỀN BẮC TIẾP TỤC MƯA RÉT, THỜI TIẾT HÀ NỘI GIÁ LẠNH VỚI NHIỆT ĐỘ 12 ĐỘ C',
      time: '17/01/2022',
      image:
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/01/thoi-tiet.png&w=400&h=250&zc=1&q=90',
      description: `<p>
      Không khí lạnh tăng cường khiến trạng thái mưa rét ở các tỉnh miền Bắc và Bắc Trung Bộ kéo dài, nhiệt độ hạ rất thấp, vùng núi vùng núi khả năng có băng giá. Thời tiết Hà Nội duy trì thời tiết  giá lạnh, âm u với nhiệt độ thấp nhất 13-15 độ C.
    </p>
    <img  src="https://360boutique.vn/wp-content/uploads/2022/01/thoi-tiet.png" //>
    <p>Sáng sớm nay, thời tiết Hà Nội tiếp tục giảm sâu do không khí lạnh cường độ mạnh tăng cường. Ngày 17-19/1, các tỉnh, thành phố Đồng bằng Bắc Bộ có thể xuất hiện rét đậm về đêm và sáng sớm với mức nhiệt thấp 12-15 độ C. Ban ngày, nhiệt độ cao nhất không quá 18 độ C  </p>
    <p>Chuyên gia nhận định vào trước dịp Tết Nhâm Dần 2022, miền Bắc liên tục đón các đợt không khí lạnh gây rét và mưa phùn. Trong nửa cuối tháng 1, nhiệt độ trung bình tại Bắc Bộ cao hơn cùng kỳ nhiều năm 0,5-1 độ C, các đợt lạnh xuất hiện nhiều nhưng ngắn ngày.</p>
    <p>Ở Bắc Bộ trời rét đậm với nhiệt độ thấp nhất phổ biến 11-14 độ C, vùng núi 8-11 độ C, vùng núi cao có nơi dưới 5 độ C và có khả năng xảy ra băng giá; Bắc Trung Bộ trời rét với nhiệt độ thấp nhất phổ biến 14-17 độ C.</p>
    <p>360 – Be yourself</p>
   `,
    },
    {
      id: 4,
      name: 'BLACK FRIDAY – SALE SẬP SÀN HÀNG NGÀN ƯU ĐÃI LÊN ĐẾN 70%',
      time: '17/01/2022',
      image:
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/11/40cfed33ec5e27007e4f-scaled.jpg&w=400&h=250&zc=1&q=90',
      description: `  Cơ hội mua sắm không cần nhìn giá có 1-0-2 đã chính thức bắt đầu. Hàng ngàn sản phẩm với mức giá ưu đãi lên đến 70% đã lên kệ. Nếu đã trót yêu siêu phẩm nào nhà 360 mà còn băn khoăn về giá thì đây là cơ hội vàng để chàng rinh ngay về đó nha.
   `,
    },
    {
      id: 5,
      name: 'BÙNG NỔ LOẠT CHƯƠNG TRÌNH MỪNG 360 BOUTIQUE 7 TUỔI',
      time: '11/11/2021',
      image:
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/11/BANNER-WEB-SN-7-TUOI.jpg&w=400&h=250&zc=1&q=90',
      description:
        ' Nhân dịp sinh nhật lên 7, 360 boutique GIẢM GIÁ LÊN ĐẾN 50% toàn bộ hoodie, khoác gió, quần jeans, quần âu, sweater, sơ mi và cả áo phông, kể cả HÀNG MỚI VỀ.',
    },
  ]);
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
