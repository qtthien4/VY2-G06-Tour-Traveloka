import React from 'react';
import './css/Navbar.css'


function NavBar() {
  return (
    <div>
        <div className="header1">
          <div className="header1-left">
            <div id="icon-menu-header">
              <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8c5c07f3e6c8c7806ef853f5e943e27b.svg" alt="menu" />
            </div>
            <a href="https://www.traveloka.com/vi-vn/activities">
              <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg" alt="logo" />
            </a>
          </div>
          <div className="header1-right">
            <div className="header1-right-item1">
              <svg id="icon-right" width={16} height={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcMobilePhoneDownload"><path d="M6 15H18M9 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H15M10 18H14" stroke="#687176" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M12 2V11M12 11L10 9M12 11L14 9" stroke="#0194F3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div id="font-header"> Tải ứng dụng</div>
              <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg" style={{marginLeft: '4px'}} alt="" />
            </div>
            <div className="header1-right-item2">
              <a href="/#">
                <div>
                  <img id="icon-right" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bdab924c2bd3a5fb492022beb158a6ef.svg" alt="" />
                </div>
                <div id="font-header">
                  Hợp tác với chúng tôi
                </div>
              </a>
              <a href="/#">
                <div>
                  <img id="icon-right" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c80a2b136969e32f4db682792d1110f6.svg" alt="" />
                </div>
                <div id="font-header">
                  Đã Lưu
                </div>
              </a>
              <a href="/#">
                <div>
                  <img id="icon-right" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg" alt="" />
                </div>
                <div id="font-header">
                  Đặt chỗ của tôi
                </div>
              </a>
            </div>
            <div className="header1-right-item3">
              <div>
                <img alt='a' importance="low" loading="lazy" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f8c046147fb32a009ba122f35312aa.svg" decoding="async" width={23} height={23} style={{border: '2px solid #0264C8', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', borderBottomRightRadius: '9999px', borderBottomLeftRadius: '9999px', objectFit: 'none', objectPosition: '50% 50%', marginRight: '4px'}} />
                <div style={{fontSize: '16px', color: 'rgb(0, 0, 0)', fontWeight: 500}}>VND</div>
                <img id="icon-right" style={{marginLeft: '4px'}} src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg" alt="" />
              </div>
              <div />
            </div>
            <div className="header1-right-item4">
              <div>
                <img alt='a' importance="low" loading="lazy" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f2ccb8732da6068a2f24a40aea2bdcdd.svg" decoding="async" width={23} height={23} className="r-tuq35u" style={{backgroundColor: 'rgba(205,208,209,1.00)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', borderBottomRightRadius: '9999px', borderBottomLeftRadius: '9999px', objectFit: 'fill', objectPosition: '50% 50%', marginRight: '4px'}} />
                <div style={{fontSize: '16px', color: 'rgb(139, 137, 137)', fontWeight: 500}}>Đăng nhập</div>
                <img id="icon-right" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/393c6a1dee81cd3dc84df59672d43edb.svg" style={{marginLeft: '4px'}} alt="" />
              </div>
              <div />
            </div>
            <div className="header1-right-item5">
              <button type="button" className="btn btn-primary" style={{fontSize: '16px', color: 'rgb(255, 255, 255)', fontWeight: 500}}>Đăng ký</button>
            </div>
          </div>
        </div>
        <div className="header2">
          <div className="header2-item1">
            <div>Vận chuyển</div>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg" alt="" />
          </div>
          <div className="header2-item2">
            <div>Chỗ ở</div>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg" alt="" />
          </div>
          <div className="header2-item3">
            <div>Hoạt động giải trí</div>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg" alt="" />
          </div>
          <div className="header2-item4">
            <div>Sản phẩm bổ sung</div>
            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg" alt="" />
          </div>
        </div>        
      </div>
      
  )
}
export default NavBar;
