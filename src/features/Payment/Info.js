import React from "react";
import "./css/info.css";

function Info({ idBooking, tourCurrent, schedule }) {
  return (
    <div className="info">
      <div>
        <div className="madatcho">MÃ ĐẶT CHỖ</div>
        <div className="iddatcho">{idBooking}</div>
        <div>---------------------</div>
      </div>
      <div>
        <div className="madatcho" style={{ fontSize: "13px" }}>
          CHI TIẾT ĐẶT CHỖ
        </div>
        <h4 style={{ margin: 0 }} className="chia2">
          {tourCurrent.ActivityName}
        </h4>
        <div className="chia2">
          <div style={{ float: "left" }}>Ngày tham quan:</div> <br />
          <div style={{ float: "left" }}>
            {" "}
            Từ ngày {schedule.starttime} đến {schedule.endTime}
          </div>
        </div>
        <div className="chia2">
          <div style={{ float: "left" }}>Áp dụng cho:</div>
          <div style={{ float: "right" }}>{schedule.Amount} người</div>
        </div>
        {/* <div className="chia2">
          <div style={{ float: "left" }}>Khung thời gian</div>
          <div style={{ float: "right" }}>18:30</div>
        </div> */}
      </div>
    </div>
  );
}
export default Info;
