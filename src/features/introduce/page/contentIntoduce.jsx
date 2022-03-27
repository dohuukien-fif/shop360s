import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
ContentIntroduceFeatures.propTypes = {};

function ContentIntroduceFeatures(props) {
  const [isaccotiton, setisaccotiton] = useState(false);
  const {
    params: { IntroductionId },
    url,
  } = useRouteMatch();
  const [DataDescription, setDataDescription] = React.useState({});
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
    <p><strong>360 – Be yourself</strong></p>
   `,
    },
    {
      id: 3,
      name: 'ĐÓN KHÔNG KHÍ LẠNH TĂNG CƯỜNG MIỀN BẮC TIẾP TỤC MƯA RÉT THỜI TIẾT HÀ NỘI GIÁ LẠNH VỚI NHIỆT ĐỘ 12 ĐỘ C',
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
    <p><strong>360 – Be yourself</strong></p>
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
   
    <p> sale Áo : <a href="/Ao">Tại đây</a></p>
    <p> sale Quần : <a href="/Quan">Tại đây</a></p>
    <p> sale Mũ : <a href="/Mu>Tại đây</a></p>

    <p> sale Sneaker : <a href="/Giay">Tại đây</a></p>
    <p>Chương trình áp dụng khi mua tại cửa hàng hoặc mua tại Website.</p>
   
    <p><strong>360 – Be yourself</strong></p>

    <p>Hotline: 1900 886 803 – 0973 285 886</p>
    <p>HỆ THỐNG CỬA HÀNG:</p>
    <p>▪️ Add 1: 346 Cầu Giấy, HN – Tel: 0388 315 738</p>
    <p>▪️ Add 2: 37 Trung Kính, Cầu Giấy, HN – Tel: 0866 604 738</p>
    <p>▪️ Add 3: 116 Hồ Tùng Mậu, Cầu Giấy, HN – Tel: 0976 214 038</p>
    <p>▪️ Add 5: 242 Thái Hà, Đống Đa, HN – Tel: 0989 765 738
    </p><p>▪️ Add 6: 27 Chùa Bộc, Đống Đa, HN – Tel: 0975 101 618

    </p>
    
    <p>▪️ Add 7: 63 Đại Cồ Việt, Hai Bà Trưng, HN – Tel: 024 6674 0077

    </p>
    
    <p>▪️ Add 8: 296 Nguyễn Trãi (cạnh đại học Hà Nội) – Tel: 0972 668 938

    </p>
    
    <p>▪️ Add 9 | 360 Shoes: 11 Dương Quảng Hàm, Cầu Giấy, HN – Tel: 096 1829 615

    </p>
    <p>Mọi ý kiến đóng góp, phản hồi về thái độ phục vụ và chất lượng sản phẩm xin liên hệ: 0868 966 889</p>

    
   `,
    },

    {
      id: 5,
      name: 'BÙNG NỔ LOẠT CHƯƠNG TRÌNH MỪNG 360 BOUTIQUE 7 TUỔI',
      time: '11/11/2021',
      image:
        'https://360boutique.vn/wp-content/themes/360boutique/thumb.php?src=https://360boutique.vn/wp-content/uploads/2021/11/BANNER-WEB-SN-7-TUOI.jpg&w=70&h=70&zc=1&q=90',
      description: ` <img src="https://360boutique.vn/wp-content/uploads/2021/11/BANNER-WEB-SN-7-TUOI.jpg" /> <p>
        Nhân dịp sinh nhật lên 7, 360 boutique GIẢM GIÁ LÊN ĐẾN 50% toàn bộ hoodie, khoác gió, quần jeans, quần âu, sweater, sơ mi và cả áo phông, kể cả HÀNG MỚI VỀ.
      </p>
     <p>Chương trình SALE lớn nhất năm bạn nhanh chân rinh thật nhiều quà nhé!</p>
      <p> sale Áo : <a href="/Ao">Tại đây</a></p>
      <p> sale Quần : <a href="/Quan">Tại đây</a></p>
      <p> sale Mũ : <a href="/Mu>Tại đây</a></p>
  
      <p> sale Sneaker : <a href="/Giay">Tại đây</a></p>

      <p>Chương trình áp dụng khi mua tại cửa hàng hoặc mua tại Website.</p>
     
      <p><strong>360 – Be yourself</strong></p>
  
      <p>Hotline: 1900 886 803 – 0973 285 886</p>
      <p>HỆ THỐNG CỬA HÀNG:</p>
      <p>• Add 1: 242 Thái Hà</p>
      <p>• Add 2: 27 Chùa Bộc

      </p>
      <p>• Add 3: 346 Cầu Giấy</p>
      <p>• Add 4: 37 Trung Kính
      </p><p>• Add 6: 116 Hồ Tùng Mậu
  
      </p>
      
      <p>• Add 7: 20 Dương Quảng Hàm
  
      </p>
      
      <p>• Add 8: 272 Tô Hiệu – Hải Phòng
  
      </p>
      
      <p>• Add 9 – 360 Shoes: 11 Dương Quảng Hàm
  
      </p>
      <p>• Add 10: 296 Nguyễn Trãi (cạnh đại học Hà Nội)</p>
  
      
     `,
    },
  ]);

  useEffect(() => {
    if (IntroductionId) {
      const newData = DataIntroduce.find((e) => e.id === Number(IntroductionId));
      setDataDescription(newData);
    }
  }, [DataIntroduce, IntroductionId]);

  console.log('DataDescription?.description ', DataDescription);

  return (
    <>
      <div className="content_introduce">
        <div className="content_introduce-title">
          <p>{DataDescription.name}</p>
        </div>

        <div className="content_introduce-time">
          <p>{DataDescription.time}</p>
        </div>
        <div
          className="content_introduce-body"
          dangerouslySetInnerHTML={{ __html: DataDescription?.description }}
        ></div>
      </div>
    </>
  );
}

export default ContentIntroduceFeatures;
