import InputField from "components/FormFields/InputField";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

export default function FormPayment() {
  const location = useLocation();
  const idBooking = location.pathname.split("/")[3];

  const { control, handleSubmit } = useForm();
  const btnVoucher = useRef();
  const [voucher, setVoucher] = useState("");
  const [price, setPrice] = useState("");

  //setTImeOut 1p30s delete  booking theo activity

  //   useEffect(() => {
  //     let timeout;
  //     setTimeout(() => {
  //       //post delete booking
  //     }, 90000);
  //   }, []);

  //getAll Booking theo idBooking => idSchedule => idTour

  //get tour theo idbooking

  //handle submit
  // post len server thien vo sttbooking = true, discount: "", bookingTime, total moi nhat

  // post sttVoucher tour da su dung
  const onSubmit = (data) => console.log("ok", data);

  const handleChangInputVoucher = (e) => {
    setVoucher(e.target.value);
  };

  const handleOnclickVoucher = () => {
    console.log(voucher);
    //post api test xem co du kien hay khong. neu nhu du thi server se tra ve amount

    //lay gia goc tru di voucher
    setPrice("gia goc tru di voucher");
    setVoucher("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="pay">
        <div style={{ display: "flex", position: "relative" }}>
          <h4 className="title">Thẻ thanh toán</h4>
          <div style={{ position: "absolute", right: "24px" }}>
            <img
              style={{ height: "24px" }}
              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/17/1484655630637-0dcca3761eb5910f1835f438f153bfae.png?tr=q-75"
              alt=""
            />
            <img
              style={{ height: "24px" }}
              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/06/1483707776912-1abb188266f6d5b3f2e27f4733ca32e9.png?tr=q-75"
              alt=""
            />
            <img
              style={{ height: "24px" }}
              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/06/1483707787206-abc175b224ab92a6967e24bc17c30f45.png?tr=q-75"
              alt=""
            />
            <img
              style={{ height: "24px" }}
              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/07/10/1499673365437-1e1522e5cc323e7e8a7b57b90e81dbc9.png?tr=q-75"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <label>Số thẻ tín dụng </label>
          <InputField
            name="numberCredit"
            control={control}
            label="full"
            fullWidthCustom={true}
          />
          <br />
          <div className="main-d-flex">
            <div>
              <label>Hiệu lực đến </label>

              <InputField
                heightCustom="50px"
                widthCustom="120px"
                name="effectCredit"
                control={control}
                fullWidthCustom={false}
              />
            </div>
            <div>
              <label>CCV</label>

              <InputField
                widthCustom="120px"
                name="ccvCredit"
                control={control}
                fullWidthCustom={false}
              />
              <br />
            </div>
          </div>

          <label>Tên trên thẻ </label>
          <br />
          <InputField
            widthCustom="120px"
            name="nameCredit"
            control={control}
            fullWidthCustom={true}
          />
          <br />
          <label>Chưa trả góp </label>
          <a href="/#">Learn more</a>
        </div>
        <div
          className="form-check form-switch"
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Nhập mã giảm giá
          </label>
        </div>
        <div className="main-d-flex">
          <input
            value={voucher}
            onChange={(e) => handleChangInputVoucher(e)}
            type="text"
            placeholder="VD: CHEAP TRAVEL"
            style={{
              border: "1px solid #dadada",
              borderRadius: "5px",
              marginRight: "8px",
            }}
          />
          <div
            ref={btnVoucher}
            onClick={handleOnclickVoucher}
            style={{
              cursor: "pointer",
              alignItems: "center",
              border: "none",
              background: "#e7e7e7",

              width: "100px",
              textAlign: "center",
            }}
          >
            Áp dụng mã
          </div>
        </div>
        <div className="detail-price">
          <h4>Chi tiết giá</h4>
          <div style={{ overflow: "auto" }}>
            <div style={{ float: "left", width: "250px" }}>
              Saigon River Sightseeing - 1 Hour Người lớn x 1
            </div>
            <div style={{ float: "right" }}>499.900 VND</div>
          </div>
          <div style={{ overflow: "auto" }}>
            <div style={{ float: "left" }}>Phí tiện ích</div>
            <div style={{ float: "right" }}>11.000 VND</div>
          </div>
          <div>--------------------------------</div>
          <div style={{ overflow: "auto" }}>
            <div style={{ float: "left" }}>Tổng giá tiền</div>
            <div style={{ float: "right" }}>499.900 VND</div>
          </div>
        </div>
        <div className="accept-pay">
          <div>
            Bằng việc nhấn Thanh toán, bạn đồng ý Điều khoản &amp; Điều kiện và
            Chính sách quyền riêng tư.
          </div>
          <button type="submit">Thanh toán Chuyển khoản ngân hàng</button>
        </div>
      </div>
    </form>
  );
}
