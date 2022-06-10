import Switch from "@material-ui/core/Switch";
import VouchersApi from "api/ApiExternal/Vouchers/VouchersApi";
import bookingApi from "api/ApiReal/bookingApi";
import reBookingApi from "api/ApiReal/reBookingApi";
import axios from "axios";
import { AuthContext } from "context/AuthProvider";
import PayPal from "PayPal";
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import { formatter } from "../../../utils/formatter";
import CountDown from "./CountDown";

function FormPayment({ schedule, idBooking, tourCurrent }) {
  const user = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  //sô giây
  //Handle chay nguoc

  //setTImeOut 1p30s delete  booking theo activity
  const time = 3000;
  const timerTrans = useRef(null);
  const [amountVoucher, setAmountVoucher] = useState(0);
  const [codeVoucher, setCodeVoucher] = useState("");

  const totalInitTour = tourCurrent.Price * schedule.Amount;
  const [priceTotal, setPriceTotal] = useState(0);
  const [message, setMessager] = useState("");
  const [checkPaypal, setCheckPaypal] = useState("");
  const [checkGift, setCheckGift] = useState(false);
  const [checkVoucher, setCheckVoucher] = useState(false);

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
  const [listGift, setListGift] = useState([]);

  //handle voucher
  useEffect(() => {
    (async function () {
      const resVoucher = await VouchersApi.getAllListVoucher();
      const resGift = await VouchersApi.getAllListGift();

      setListVoucher(
        resVoucher.data.data.vouchers.map((item) => {
          return {
            value: item.voucherCode,
            label: item.title,
          };
        })
      );

      //gift
      setListGift(
        resGift.data.data.giftCards.map((item) => {
          return {
            value: item.giftCardCode,
            label: item.title,
          };
        })
      );
    })();
  }, []);

  //voucher
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  //handleChangeCheckBoxVoucher
  const handleChangeCheckBoxVoucher = useCallback(async (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      return;
    } else {
      setAmountVoucher(0);
      setCodeVoucher("");
      setCheckPaypal("");
      setCheckVoucher(false);
    }
  }, []);

  const [amountGift, setAmountGift] = useState(0);
  const [codeGift, setCodeGift] = useState("");

  //gift
  const [gift, setGift] = React.useState({
    checkedC: false,
    checkedD: false,
  });
  //handleChangeCheckBoxGift
  const handleChangeCheckBoxGift = useCallback(async (event) => {
    setGift({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      return;
    } else {
      setAmountGift(0);
      setCodeGift("");
      setCheckPaypal("");
      setCheckGift(false);
    }
  }, []);

  //voucher
  const handleChangeVoucher = async (e) => {
    const code = e.value;
    const paramsCheckConditionVoucher = {
      amount: totalInitTour,
      code,
      typeVoucher: "XPERIENCE",
    };
    //api check condition
    const res = await VouchersApi.checkConditionVoucher(
      paramsCheckConditionVoucher
    );
    if (res.status === 200) {
      toast.success(res.data.message);
      setCodeVoucher(code);
      setAmountVoucher(res.data.data.amount);
      setCheckVoucher(true);
      if (checkGift == true) {
        setCheckPaypal("all");
        console.log("all");
      }
    } else {
      toast.success(res.message);
    }
  };

  //gift
  const handleChangeGift = async (e) => {
    const code = e.value;
    const paramsCheckConditionVoucher = {
      amount: totalInitTour,
      code,
      typeVoucher: "XPERIENCE",
    };

    //api check condition
    const res = await VouchersApi.checkConditionGift(
      paramsCheckConditionVoucher
    );
    if (res.status === 200) {
      toast.success(res.data.message);
      setCodeGift(code);
      setAmountGift(res.data.data.amount);
      setCheckGift(true);
      if (setCheckVoucher == true) {
        setCheckPaypal("all");
      }
    } else {
      toast.success(res.message);
    }
  };

  useEffect(() => {
    setPriceTotal(totalInitTour - amountVoucher - amountGift);
  }, [amountVoucher, totalInitTour, amountGift]);

  //handle submit
  // post len server thien vo sttbooking = true, discount: "", bookingTime, total moi nhat

  var orderId = useRef("");
  var totalPrice = useRef();
  var voucherCode = useRef("");
  var giftCode = useRef("");
  var check = useRef("");

  var amountInitPrice = useRef();

  if (priceTotal === 0) {
  } else {
    totalPrice.current = priceTotal;
    voucherCode.current = codeVoucher;
    amountInitPrice.current = totalInitTour;
    giftCode.current = codeGift;
    check.current = checkPaypal;
  }

  const createOrder = (data, actions, err) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            value: String(Math.floor(totalPrice.current / 23000)),
            currency_code: "USD",
          },
        },
      ],
    });
  };

  //check preVoucher
  const checkPreVoucher = async () => {
    console.log(orderId);
    if (voucherCode.current !== "") {
      var dataVoucher = {
        code: voucherCode.current,
        typeVoucher: "XPERIENCE",
        transactionId: idBooking,
        amount: amountInitPrice.current,
      };

      let response = await fetch(
        "https://api.votuan.xyz/api/v1/user/voucher/pre-order",
        {
          method: "POST",
          headers: {
            user_id: "68100596-F731-4C31-8C1E-DC813C6CBAF7",
            partner_id: "ACA423B3-F1C8-4484-A8D1-8A73ED6DAB60",
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(dataVoucher),
        }
      );
      let result = await response.json();
      orderId = result.data.orderId;
    }
  };

  //check preGift
  const checkPreGift = async () => {
    console.log(orderId);
    // if (voucherCode.current !== "") {
    //   var dataVoucher = {
    //     code: voucherCode.current,
    //     typeVoucher: "XPERIENCE",
    //     transactionId: idBooking,
    //     amount: amountInitPrice.current,
    //   };

    //   let response = await fetch(
    //     "https://api.votuan.xyz/api/v1/user/voucher/pre-order",
    //     {
    //       method: "POST",
    //       headers: {
    //         user_id: "68100596-F731-4C31-8C1E-DC813C6CBAF7",
    //         partner_id: "ACA423B3-F1C8-4484-A8D1-8A73ED6DAB60",
    //         "Content-Type": "application/json;charset=utf-8",
    //       },
    //       body: JSON.stringify(dataVoucher),
    //     }
    //   );
    //   let result = await response.json();
    //   orderId = result.data.orderId;
    // }
  };

  var idCustomerFinal;
  const onApprove = async (data, actions) => {
    if (user != null) {
      idCustomerFinal = user.IdCustomer;
    } else {
      idCustomerFinal = "1";
    }

    //post api thanh toán sau khi đã chuyển tiền
    const today = new Date();
    let date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if (voucherCode.current !== "") {
      const order = await actions.order.capture();
      let id = order.purchase_units[0].payments.captures[0].id;
      const dataPayment = {
        idBooking: idBooking,
        bookingTime: `${time} ${date}`,
        sttBooking: "success",
        idVoucher: voucherCode.current,
        idGift: giftCode.current,
        reduce: totalPrice.current,
        idPayment: id,
        idSchedule: schedule.idSchedule,
        amountBooking: schedule.Amount,
        idCustomer: idCustomerFinal,
        score: 10,
      };

      await bookingApi.postBooking({ dataPayment });
    }

    //update status voucher
    if (voucherCode.current !== "") {
      await axios("https://api.votuan.xyz/api/v1/user/voucher/state", {
        method: "PUT",
        headers: {
          user_id: "68100596-F731-4C31-8C1E-DC813C6CBAF7",
          partner_id: "ACA423B3-F1C8-4484-A8D1-8A73ED6DAB60",
          "Content-Type": "application/json;charset=utf-8",
        },
        data: {
          typeVoucher: "XPERIENCE",
          orderId,
        },
      });
    }

    toast.success("Bạn đã thanh toán thành công !");
    clearTimeout(timerTrans.current);
    //navigate(`/activities`);
    //post áp dụng voucher
    //toast messenger success
  };
  console.log(checkPaypal);
  return (
    <>
      <form>
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
          {/* gift */}
          <div>
            <div>
              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <Switch
                  checked={gift.checkedD}
                  onChange={handleChangeCheckBoxGift}
                  color="primary"
                  name="checkedD"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Chọn mã giảm giá gift
                </label>
              </div>
            </div>
            <div>
              {" "}
              {gift.checkedD && (
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
                    options={listGift} // set list of the data
                    onChange={handleChangeGift} // assign onChange function
                  />
                </div>
              )}
            </div>
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
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
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
              <div style={{ float: "left" }}>Gift giảm tối đa</div>
              <div style={{ float: "right" }}>
                {formatter.format(amountGift)}
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
              <div style={{ float: "right" }}>
                {formatter.format(priceTotal)}
              </div>
            </div>
          </div>
          <div className="accept-pay">
            <div>
              Bằng việc nhấn Thanh toán, bạn đồng ý Điều khoản &amp; Điều kiện
              và Chính sách quyền riêng tư.
            </div>
            {/* <button type="submit">Thanh toán Chuyển khoản ngân hàng</button> */}
          </div>
        </div>
      </form>
      <PayPal
        checkGift={checkGift}
        checkVoucher={checkVoucher}
        check={check.current}
        onApprove={onApprove}
        createOrder={createOrder}
        checkPreVoucher={checkPreVoucher}
      />
    </>
  );
}

export default memo(FormPayment);
