import Switch from "@material-ui/core/Switch";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import VouchersApi from "api/ApiExternal/Vouchers/VouchersApi";
import bookingApi from "api/ApiReal/bookingApi";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import * as yup from "yup";
import { formatter } from "../../../utils/formatter";
import CountDown from "./CountDown";
import reBookingApi from "api/ApiReal/reBookingApi";
const schema = yup
  .object({
    cardElement: yup
      .number()
      .positive()
      .integer("Vui lòng nhập số")
      .required("Vui lòng nhập số tài khoản thanh toán"),
    age: yup.number().positive().integer().required(),
  })
  .required();

export default function FormPayment({ schedule, idBooking, tourCurrent }) {
  const stripe = useStripe();
  const elements = useElements();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  //sô giây

  //Handle chay nguoc

  //setTImeOut 1p30s delete  booking theo activity
  const time = 10;
  const timerTrans = useRef(null);

  useEffect(() => {
    const dataTimeoutPayment = {
      idBooking: idBooking,
      idSchedule: schedule.idSchedule,
      amountBooking: schedule.Amount,
    };

    //post delete booking affter long time

    timerTrans.current = setTimeout(async () => {
      await reBookingApi.post({ dataTimeoutPayment });
      toast.warning("Bạn đã qúa thời gian cho phép thanh toán !");
      navigate("/activities");
    }, time * 1000);

    return () => clearTimeout(timerTrans.current);
  }, []);

  //getAll Booking theo idBooking => idSchedule => idTour

  //get tour theo idbooking

  //handle voucher
  const [listVoucher, setListVoucher] = useState([]);

  useEffect(() => {
    VouchersApi.getAllList()
      .then((response) => response.data)
      .then((json) => {
        setListVoucher(
          json.data.vouchers.map((item) => {
            return {
              value: item.voucherCode,
              label: `Voucher giảm ${item.Condition.discount} %`,
            };
          })
        );
      })
      .catch(function (error) {
        console.log(error.config);
      });
  }, []);

  const [priceTotal, setPriceTotal] = useState(0);

  //handle voucher
  const [checkCondition, setCheckCondition] = useState(false);

  const [amountVoucher, setAmountVoucher] = useState(0);
  const [codeVoucher, setCodeVoucher] = useState("");
  const totalInitTour = tourCurrent.Price * schedule.Amount;
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChangeCheckBoxVoucher = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      return;
    } else {
      setAmountVoucher(0);
      setCodeVoucher("");
    }
  };
  const handleChangeVoucher = async (e) => {
    const code = e.value;
    const paramsCheckConditionVoucher = {
      amount: totalInitTour,
      code,
      typeVoucher: "tour",
    };

    //api check condition
    await VouchersApi.checkCondition(paramsCheckConditionVoucher)
      .then((res) => {
        const { message, data } = res.data;
        toast.success(message);

        setCodeVoucher(code);
        setAmountVoucher(data.amount);
      })
      .catch((err) => {
        console.error(err.response.data.message);
        setAmountVoucher(0);
        setCodeVoucher("");
        toast.error(err.response.data.message);
      });

    //lay gia goc tru di voucher
  };

  useEffect(() => {
    setPriceTotal(totalInitTour - amountVoucher);
  }, [amountVoucher]);

  //handle submit
  // post len server thien vo sttbooking = true, discount: "", bookingTime, total moi nhat

  var orderId = useRef();
  const onSubmit = async (data) => {
    const dataVoucher = {
      code: codeVoucher,
      typeVoucher: "tour",
      transactionId: idBooking,
      amount: totalInitTour,
    };

    try {
      // post total ở đây (post lan 1)
      const response = await axios("http://95.111.203.185:3003/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { total: priceTotal },
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
      } else alert("payment successful!");
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
        bookingTime: `${date} ${time}`,
        sttBooking: "success",
        idVoucher: codeVoucher,
        idGift: "",
        reduce: priceTotal,
        idPayment: paymentIntent.id,
        idSchedule: schedule.idSchedule,
        amountBooking: schedule.Amount,
        idCustomer: "1",
        score: 10,
      };

      await bookingApi.post({ dataPayment });

      //post áp dụng voucher
      if (codeVoucher !== "") {
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
        //const res = VouchersApi.preOrder(dataVoucher);
        //let { orderId } = res.data.data.orderId;
        orderId = res.data.data.orderId;
      }

      //update status voucher
      if (codeVoucher !== "") {
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
      }

      toast.success("Bạn đã thanh toán thành công !");
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
        <CountDown time={time} />

        <br />
        <div style={{ display: "flex", position: "relative" }}>
          <h4 className="title">Thẻ tín dụng</h4>
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
          <label>Mời bạn nhập số thẻ tín dụng: </label> <br />
          <CardElement name="cardElement" />
          {/* {errors.cardElement?.message} */}
        </div>
        <br />
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <Switch
            checked={state.checkedB}
            onChange={handleChangeCheckBoxVoucher}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Chọn mã giảm giá
          </label>
        </div>
        {state.checkedB && (
          <div className="main-d-flex">
            <Select
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#ccc",
                  primary: "black",
                },
              })}
              placeholder="Chọn mã"
              options={listVoucher} // set list of the data
              onChange={handleChangeVoucher} // assign onChange function
            />
          </div>
        )}

        <div className="detail-price">
          <h4>Chi tiết giá</h4>

          <div style={{ overflow: "auto", alignItems: "center" }}>
            <div style={{ float: "left", width: "250px" }}>
              Số lượng: Người lớn x {schedule.Amount}
            </div>

            <div style={{ float: "right" }}>
              {formatter.format(totalInitTour)}
            </div>
          </div>
          <div style={{ overflow: "auto" }}>
            <div style={{ float: "left" }}>Voucher giảm tối đa</div>
            <div style={{ float: "right" }}>
              {formatter.format(amountVoucher)}
            </div>
          </div>
          <div>
            --------------------------------------------------------------------------
          </div>
          <div style={{ overflow: "auto" }}>
            <div style={{ float: "left" }}>Tổng giá tiền</div>
            <div style={{ float: "right" }}>{formatter.format(priceTotal)}</div>
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
