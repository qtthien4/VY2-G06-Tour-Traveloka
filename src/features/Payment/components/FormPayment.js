import InputField from "components/FormFields/InputField";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import bookingApi from "api/ApiReal/bookingApi";
import paymentApi from "api/ApiReal/paymentApi";
import { toast } from "react-toastify";
import Select from "react-select";
import { removeListener } from "@reduxjs/toolkit";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { display } from "@mui/system";
import ListVoucherApi from "api/ApiExternal/ListVoucherApi";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export default function FormPayment({ idBooking, tourCurrent }) {
  const stripe = useStripe();
  const elements = useElements();
  const { control, handleSubmit } = useForm();
  const btnVoucher = useRef();
  const navigate = useNavigate();
  //Handle chay nguoc\
  const [countdown, setCountdown] = useState(180);
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCountdown((prev) => prev - 1);
  //   }, 1000);

  //   return () => clearInterval(timerId);
  // }, []);
  //setTImeOut 1p30s delete  booking theo activity
  const timer = useRef(null);
  const timerTrans = useRef(null);

  // useEffect(() => {
  //   const dataTimeoutPayment = {
  //     idBooking: idBooking,
  //     sstBooking: false,
  //   };

  //   //post delete booking affter long time
  //   timer.current = setTimeout(async () => {
  //     await bookingApi.post({ dataTimeoutPayment });
  //     console.log("settimeout");
  //   }, 1000000);

  //   timerTrans.current = setTimeout(async () => {
  //     navigate("/booking");
  //     toast.warning("Bạn đã qúa thời gian cho phép thanh toán !");
  //     console.log("settimeout");
  //   }, 1000000);

  //   return () => clearTimeout(timerTrans.current);
  // }, []);

  //getAll Booking theo idBooking => idSchedule => idTour

  //get tour theo idbooking

  //handle voucher
  const [listVoucher, setListVoucher] = useState([]);

  useEffect(() => {
    fetch(
      "http://128.199.241.206:8080/api/v1/user/voucher/eligible?typeVoucher=tour",
      {
        method: "GET",
        headers: {
          user_id: "12333333",
          partner_id: "a67f1f4e-946a-483b-9993-ca5c344da8f5",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setListVoucher(
          json.data.vouchers.map((item) => {
            return {
              value: item.voucherCode,
              label: `Voucher giảm ${item.Condition.discount} %`,
            };
          })
        );
      });
  }, []);

  const priceTotal = useRef(null);

  //handle voucher
  const [checkCondition, setCheckCondition] = useState(false);
  const [amountVoucher, setAmountVoucher] = useState(0);
  const [codeVoucher, setCodeVoucher] = useState("");

  const handleChangeVoucher = (e) => {
    const code = e.value;
    axios(`http://128.199.241.206:8080/api/v1/user/voucher/check-condition`, {
      method: "GET",
      headers: {
        user_id: "12333333",
        partner_id: "a67f1f4e-946a-483b-9993-ca5c344da8f5",
        "Content-Type": "application/json",
      },
      params: {
        amount: tourCurrent.Price,
        code,
        typeVoucher: "tour",
      },
    })
      .then((res) => {
        const { message, data } = res.data;
        toast.success(message);
        console.log(data);

        setCodeVoucher(code);
        setAmountVoucher(data.amount);
        priceTotal.current = tourCurrent.Price - amountVoucher;
        console.log(tourCurrent.Price, priceTotal.current, amountVoucher);
      })
      .catch((err) => {
        console.error(err.response.data.message);
        toast.error(err.response.data.message);
      });

    //   console.log(schedule1[0].IdSchedule);

    //lay gia goc tru di voucher
  };
  //handle submit
  // post len server thien vo sttbooking = true, discount: "", bookingTime, total moi nhat
  const [orderIdVoucher, setOrderIdVoucher] = useState("");

  const onSubmit = async (data) => {
    const dataVoucher = {
      code: codeVoucher,
      typeVoucher: "tour",
      transactionId: idBooking,
      amount: tourCurrent.Price,
    };

    //post áp dụng voucher

    try {
      const res = await axios(
        "http://128.199.241.206:8080/api/v1/user/voucher/pre-order",
        {
          method: "POST",
          headers: {
            user_id: "12333333",
            partner_id: "a67f1f4e-946a-483b-9993-ca5c344da8f5",
            "Content-Type": "application/json",
          },
          data: dataVoucher,
        }
      );

      let { orderId } = res.data.data;

      const response = await axios("http://95.111.203.185:3003/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { ten: "thien" },
      });

      const data = response.data;
      const cardElement = elements.getElement(CardElement);
      const confirmPayment = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: { card: cardElement },
        }
      );
      const { paymentIntent } = confirmPayment;

      if (paymentIntent.status !== "succeeded") {
        toast.error("Thanh toan that bai !");

        return;
      }
      alert("payment successful!");
      //post api thanh toán sau khi đã chuyển tiền
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

        l: priceTotal.current || tourCurrent.Price,
      };

      await bookingApi.post({ dataPayment });

      //update status voucher
      await axios("http://128.199.241.206:8080/api/v1/user/voucher/state", {
        method: "PUT",
        headers: {
          user_id: "12333333",
          partner_id: "a67f1f4e-946a-483b-9993-ca5c344da8f5",
          "Content-Type": "application/json",
        },
        data: {
          typeVoucher: "tour",
          orderId,
        },
      });

      toast.success("Bạn đã thanh toán thành công !");
      clearTimeout(timer.current);
      clearTimeout(timerTrans.current);
      navigate("/activities");
      //post áp dụng voucher
      //toast messenger success
    } catch (error) {
      console.error(error);
      alert("payment failed!");
    }
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
          <CardElement />
          {/* <InputField
            name="numberCredit"
            control={control}
            label="full"
            fullWidthCustom={true}
          />
          <br /> */}
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
            Chọn mã giảm giá
          </label>
        </div>
        <div className="main-d-flex">
          <Select
            placeholder="Select Option"
            options={listVoucher} // set list of the data
            onChange={handleChangeVoucher} // assign onChange function
          />
          {/* <input
            value={voucher}
            onChange={(e) => handleChangInputVoucher(e)}
            type="text"
            placeholder="VD: CHEAP TRAVEL"
            style={{
              border: "1px solid #dadada",
              borderRadius: "5px",
              marginRight: "8px",
            }}
          /> */}
          {/* <div
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
          </div> */}
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
