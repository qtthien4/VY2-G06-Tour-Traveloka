import { Typography } from "@material-ui/core";
import bookingApi from "api/ApiReal/bookingApi";
import refundApi from "api/ApiReal/refundApi";
import scheduleApi from "api/ApiReal/scheduleApi";
import Info from "features/Payment/Info";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { formatter } from "utils/formatter";
import Navbar from "../Payment/navbar";
import "./index.css";
import { paymentPaypal } from "./RefundSlice";

export default function Refund() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Payment1 = useSelector(paymentPaypal);

  const idPayment = location.pathname.split("/")[3];
  const tourCurrent = JSON.parse(localStorage.getItem("TourCurrent"));
  const schedule = JSON.parse(localStorage.getItem("schedule"));
  const [reduce, setReduce] = useState(0);

  useEffect(() => {
    (async function () {
      const resBooking = await bookingApi.get(idPayment);
      //const resTour = await scheduleApi.getId(resBooking[0].IdSchedule.trim());
      setReduce(resBooking[0].reduce);
      //console.log(resBooking[0], resTour);
    })();
  }, []);
  const handleRefund = async () => {
    try {
      let dataRefund = {
        idPayment: idPayment,
        status: "refund",
      };
      await refundApi.post(dataRefund);
      toast.success("Bạn đã hủy tour thành công");
    } catch (error) {
      toast.error("Bạn đã hủy tour thất bại");
    }
  };
  const handleBackToHome = () => {
    navigate("/activities");
  };

  return (
    <div>
      <Navbar />

      <div
        style={{
          "background-color": "#f2f3f3",
          paddingTop: "80px",
          height: "740px",
          overflow: "hidden",
        }}
      >
        <Typography
          style={{
            fontSize: "24px",
            width: "960px",
            margin: "auto",
            paddingBottom: "20px",
          }}
          className="main-text-color-black"
        ></Typography>
        <div className="container">
          <div className="wrapper">
            <div className="product-img">
              <img alt="" src={tourCurrent.ImageUrl} height={420} width={327} />
            </div>
            <div className="product-info">
              <div className="product-text">
                <h1> {tourCurrent.ActivityName}</h1>

                <p>Địa điểm: {tourCurrent.Desr}</p>
                <p>Tổng giá: {formatter.format(reduce)}</p>
              </div>
              <div className="product-price-btn">
                <button
                  style={{ marginBottom: "10px" }}
                  type="button"
                  onClick={handleRefund}
                >
                  Hủy
                </button>
                <br />
                <button type="button" onClick={handleBackToHome}>
                  Trang chủ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
