import { Typography } from "@material-ui/core";
import refundApi from "api/ApiReal/refundApi";
import Info from "features/Payment/Info";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Payment/navbar";
import "./index.css";
import { paymentPaypal, refundAction } from "./RefundSlice";

export default function Refund() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Payment1 = useSelector(paymentPaypal);

  const idPayment = location.pathname.split("/")[3];
  const tourCurrent = JSON.parse(localStorage.getItem("TourCurrent"));
  const schedule = JSON.parse(localStorage.getItem("schedule"));

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

      <div style={{ "background-color": "#f2f3f3", paddingTop: "80px" }}>
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
              </div>
              <div className="product-price-btn">
                <p>
                  <span>78</span>$
                </p>
                <button type="button" onClick={handleRefund}>
                  Hủy
                </button>
                <p></p>
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
