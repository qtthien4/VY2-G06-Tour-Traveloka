import React from 'react'
import './css/info.css'

 function Info() {
  return (
    <div className='info'>
        <div>
          <div className="madatcho">MÃ ĐẶT CHỖ</div>
          <div className="iddatcho">
            787526489
          </div>
          <div>
            ---------------------
          </div>
        </div>
        <div>
          <div className="madatcho" style={{fontSize: '13px'}}>
            CHI TIẾT ĐẶT CHỖ
          </div>
          <h4 style={{margin: 0}} className="chia2">
            Dinner Cruise on Saigon River - Night Tour
          </h4>
          <div className="chia2">
            <div style={{float: 'left'}}>Ngày tham quan</div>
            <div style={{float: 'right'}}>T2, 21 Th03 2022</div>
          </div>
          <div className="chia2">
            <div style={{float: 'left'}}>
              Áp dụng cho
            </div>
            <div style={{float: 'right'}}>
              Người lớn: 2
            </div>
          </div>
          <div className="chia2">
            <div style={{float: 'left'}}>Khung thời gian</div>
            <div style={{float: 'right'}}>18:30</div>
          </div>
        </div>
      </div>
  )
}
export default Info