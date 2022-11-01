import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div style={{ display: "flex" }}>
          {/* <div style={{display: 'flex', flexDirection: 'column'}}>
          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/86afd0785f5505dd6d584971576dea27.svg" style={{width: '200px', height: '90px'}} alt="" />
          <div>
            <div className="certification">
              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150198216-822560165b4cfa5d5ac17a7987028b03.svg?tr=h-35,q-75" alt="" />
              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150313470-072f6bdc02c0b73fcf791aa2b2264fbd.svg?tr=h-35,q-75" alt="" />
              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75" alt="" />
              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=h-35,q-75" alt="" />
              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620639321776-9db1bf99b0d4ff46db160c7a02b0536f.png?tr=h-35,q-75" alt="" />
              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100" alt="" />
              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100" alt="" />
            </div>
            <div className="cooperate">
              <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9edc2cd0b5368b5196829820521b2d6b.svg" alt="" />
              <h3>
                Hợp tác với Traveloka
              </h3>
            </div>
            <div>
              <h3>Đối tác thanh toán</h3>
              <div className="icon-pay">
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339591544-eae8263f3d4021c8951e271bdddf60a0.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617778793443-2f6b7f7d0668a4a815962032dd8233a2.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339663962-2037bef017440339eda165360a5e239f.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781253184-2ef4eea06e759ab13bc30fac59e715ad.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781255909-7089100c4728a3cc8d3c1822b2bd2e8c.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781276401-2ee9043e84971e72e57a1b29db6f3062.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781279477-47b2a8f5bcf3cba19f9e518cf59627a7.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781283882-14484fab2f2d958a1b2917dd450d31ac.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781286986-ff7313b2a822727d5940a3ed2793bad5.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781292722-ef87e62f12612a44e0f1640d4b646033.png?tr=q-75,w-51" alt="" /></div>
                <div><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781296885-a206730836975c02b8ce75a732f00caf.png?tr=q-75,w-51" alt="" /></div>
              </div>
            </div>
          </div>
        </div> */}
          <div style={{ display: "flex", marginLeft: "170px" }}>
            <div style={{ marginRight: "70px" }}>
              <div>
                <h4>Về Traveloka</h4>
                <ul className="handleul">
                  <li>Cách đặt chỗ</li>
                  <li>Liên hệ chúng tôi</li>
                  <li>Trợ giúp</li>
                  <li>Tuyển dụng</li>
                  <li>Về chúng tôi</li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginTop: "50px" }}>Theo dõi chúng tôi trên </h4>
                <ul className="handleul">
                  <li>
                    <i className="bi bi-twitter" /> Twitter
                  </li>
                  <li>
                    <i className="bi bi-facebook"></i> Facebook
                  </li>
                  <li>
                    <i className="bi bi-instagram" />
                    Instagram
                  </li>
                  <li>
                    <i className="bi bi-youtube" />
                    Youtube
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ marginRight: "70px" }}>
              <h4>Sản Phẩm</h4>
              <ul className="handleul">
                <li>Vé máy bay</li>
                <li>Khách sạn</li>
                <li>JR Pass</li>
                <li>Combo tiết kiệm</li>
                <li>Xperience</li>
                <li>Car Rental</li>
                <li>Biệt thự</li>
                <li>Căn hộ</li>
                <li>Đưa đón sân bay</li>
              </ul>
            </div>
            <div>
              <div>
                <h4>Khác</h4>
                <ul className="handleul">
                  <li>Traveloka Affiliate</li>
                  <li>Traveloka Blog</li>
                  <li>Chính sách quyền riêng tư</li>
                  <li>Điều khoản &amp; Điều kiện</li>
                  <li>Quy chế hoạt động</li>
                  <li>Đăng ký nơi nghỉ của bạn</li>
                  <li>Đăng ký doanh nghiệp hoạt động du lịch của bạn</li>
                  <li>Khu vực báo chí</li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginTop: "50px" }}>Tải ứng dụng Traveloka</h4>
                <img
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c90225c14bd4b3b9dc24f1eef7ce6260.svg"
                  alt=""
                />
                <br />
                <img
                  style={{ marginTop: "20px" }}
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/710ae7ca20e600c9c96165ea400042c1.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
