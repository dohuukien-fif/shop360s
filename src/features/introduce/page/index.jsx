import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Description from './contentIntoduce';
import SideBage from './SidePage';
import './styles.scss';

function IntroduceFeartures(props) {
  const [DataIntroduce, setDataIntroduce] = React.useState([
    {
      id: 2,
      name: 'Dự báo thời tiết miền Bắc đón tết Nhâm Dần 2022 sẽ rét đậm và mưa phùn',
      time: '21/01/2022',
      image:
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/01/thoi-tiet-mien-bac.png&w=70&h=70&zc=1&q=90',
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
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2022/01/thoi-tiet.png&w=70&h=70&zc=1&q=90',
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
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/11/40cfed33ec5e27007e4f-scaled.jpg&w=70&h=70&zc=1&q=90',
      description: ` <img src="https://360boutique.vn/wp-content/uploads/2021/11/40cfed33ec5e27007e4f-2048x1372.jpg" /> <p>
      Cơ hội mua sắm không cần nhìn giá có 1-0-2 đã chính thức bắt đầu. Hàng ngàn sản phẩm với mức giá ưu đãi lên đến 70% đã lên kệ. Nếu đã trót yêu siêu phẩm nào nhà 360 mà còn băn khoăn về giá thì đây là cơ hội vàng để chàng rinh ngay về đó nha.
    </p>
   
    <p> sale áo : <Link>Tại đây</Link></p>
    <p>Chuyên gia nhận định vào trước dịp Tết Nhâm Dần 2022, miền Bắc liên tục đón các đợt không khí lạnh gây rét và mưa phùn. Trong nửa cuối tháng 1, nhiệt độ trung bình tại Bắc Bộ cao hơn cùng kỳ nhiều năm 0,5-1 độ C, các đợt lạnh xuất hiện nhiều nhưng ngắn ngày.</p>
    <p>Ở Bắc Bộ trời rét đậm với nhiệt độ thấp nhất phổ biến 11-14 độ C, vùng núi 8-11 độ C, vùng núi cao có nơi dưới 5 độ C và có khả năng xảy ra băng giá; Bắc Trung Bộ trời rét với nhiệt độ thấp nhất phổ biến 14-17 độ C.</p>
    <p>360 – Be yourself</p>
   `,
    },
    {
      id: 5,
      name: 'BÙNG NỔ LOẠT CHƯƠNG TRÌNH MỪNG 360 BOUTIQUE 7 TUỔI',
      time: '11/11/2021',
      image:
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/11/BANNER-WEB-SN-7-TUOI.jpg&w=70&h=70&zc=1&q=90',
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
