import React from 'react'
import './css/Banner.css'

function Banner() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <div style={{position: 'relative'}}>
          <div>
            <img className="backgourd-body" src="https://ik.imagekit.io/tvlk/image/imageResource/2019/11/26/1574782343873-4868281cc1be2523f5d5cc575a3c1daa.jpeg?tr=h-400,q-75,w-1030" alt="" />
          </div>
          <div className="input-search">
            <div style={{width: '800px', backgroundColor: 'white', borderRadius: '6px', padding: '20px 16px', display: 'flex'}}>
              <div style={{flexGrow: 1, padding: '8px', position: 'relative', display: 'flex'}}>
                <div style={{display: 'flex', flexGrow: 1, 'align-items': 'center', }}>
                  <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9ce2df7066af89022702b2b17058582c.svg" style={{'padding-right': '8px',width: 24, height: 24}} alt="" />
                  <input onClick={handleOpen} type="text" placeholder="Tìm hoạt động hoặc điểm đến" autoCorrect="off"  style={{fontSize: 16, width: '100%'}} />                                   
                </div>
                <div>
                  <button type="button" className="btn btn-primary" style={{marginLeft: '20px', padding: '7px 15px', fontSize: '16px', fontWeight: 500}}>SEARCH</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{position: 'absolute', height: '85px', top: '75%', left: '10%'}}>
              <div className="your-local">
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/dcc2471b7d7853ff3ec517510d3261db.svg" style={{marginRight: '16px'}} alt="" />
                <div style={{fontSize: 16, fontWeight: 500, paddingTop: '6px'}}>Vị trí hiện tại của bạn</div>
                <div className="change-local">
                  <div>Việt Nam</div>
                  <div>|</div>
                  <div style={{color: '#c04c36'}}>Thay đổi</div>
                </div>
              </div>
              <div className="activity-local">
                <h5>Xem các hoạt động ở vị trí của bạn</h5>
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a3f639b3774cf8826f12d0130bae7ee5.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Banner;