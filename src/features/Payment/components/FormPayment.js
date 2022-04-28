import InputField from "components/FormFields/InputField";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import bookingApi from "api/ApiReal/bookingApi";
import paymentApi from "api/ApiReal/paymentApi";
import { toast } from "react-toastify";
import { removeListener } from "@reduxjs/toolkit";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// const schema = yup.object({
//   firstName: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// }).required();

export default function FormPayment({ idBooking, tourCurrent }) {
  const { control, handleSubmit } = useForm();
  const btnVoucher = useRef();
  const navigate = useNavigate();
  //Handle chay nguoc\
  const [countdown, setCountdown] = useState(180);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  //setTImeOut 1p30s delete  booking theo activity
  const timer = useRef(null);
  const timerTrans = useRef(null);

  useEffect(() => {
    const dataTimeoutPayment = {
      idBooking: idBooking,
      sstBooking: false,
    };

    //post delete booking affter long time
    timer.current = setTimeout(async () => {
      await bookingApi.post({ dataTimeoutPayment });
      console.log("settimeout");
    }, 10000);

    timerTrans.current = setTimeout(async () => {
      navigate("/booking");
      toast.warning("Bạn đã qúa thời gian cho phép thanh toán !");
      console.log("settimeout");
    }, 10000);

    return () => clearTimeout(timerTrans.current);
  }, []);

  //getAll Booking theo idBooking => idSchedule => idTour

  //get tour theo idbooking

  const [voucher, setVoucher] = useState("");

  // post sttVoucher tour da su dung
  const handleChangInputVoucher = (e) => {
    setVoucher(e.target.value);
  };

  //handle voucher

  const priceTotal = useRef(null);

  const handleOnclickVoucher = () => {
    //post api test xem co du kien hay khong. neu nhu du thi server se tra ve amount
    const voucherFake = {
      Amount: 25000,
    };
    //lay gia goc tru di voucher

    priceTotal.current = tourCurrent.Price - voucherFake.Amount;

    setVoucher("");
    toast.success("Bạn đã áp dụng voucher thành công !");
  };
  //handle submit
  // post len server thien vo sttbooking = true, discount: "", bookingTime, total moi nhat

  const onSubmit = async (data) => {
    const today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dataPayment = {
      idBooking: idBooking,
      bookingTime: `${time} ${date}`,
      sttBooking: true,
      total: priceTotal.current || tourCurrent.Price,
    };
    const {} = data;
    console.log("ok", dataPayment);
    await bookingApi.post({ dataPayment });

    //
    //toast messenger success
    toast.success("Bạn đã thanh toán thành công !");

    console.log(timer);
    clearTimeout(timer.current);
    clearTimeout(timerTrans.current);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="pay">
        <div>Hoàn tất thanh toán trong {countdown}</div>
        <br />
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
