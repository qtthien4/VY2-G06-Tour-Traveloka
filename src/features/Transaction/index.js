import { Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import bookingApi from "api/ApiReal/bookingApi";
import refundApi from "api/ApiReal/refundApi";
import scheduleApi from "api/ApiReal/scheduleApi";
import transactionApi from "api/ApiReal/transactionApi";
import axios from "axios";
import { AuthContext } from "context/AuthProvider";
import Navbar from "features/Payment/navbar";
import React, { useContext, useEffect, useMemo, useState } from "react";
import Moment from "react-moment";
import { toast } from "react-toastify";
import { formatter } from "utils/formatter";
import "./index.scss";
import TransactionItem from "./TransactionItem";

export const initDataTransaction = {
  ActivityName: "",
  ImageUrl: "",
  Price: 0,
  amountPeople: 0,
  bookingTime: "",
  gift: "",
  handleEndTime: "",
  handleStartTime: "",
  idBooking: "",
  reduce: "",
  voucher: "",
};
export default function Transaction() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [dataTransaction, setDataTransaction] = useState([initDataTransaction]);

  const [loadding, setLoadding] = useState(false);
  const [visiable, setVisiable] = useState(false);
  const [checkDay, setSetCheckday] = useState(false);

  const today = new Date();

  useEffect(() => {
    //call apiexport const today = new Date();

    (async function () {
      console.log("user", user);
      if (user) {
        const data = { user: user.email };
        setLoadding(true);
        const res = await transactionApi.post(data);

        setLoadding(false);
        setDataTransaction(res);
      }
    })();

    //data trả về sẽ được set vào state mới
    //in all ra màn hình
  }, []);

  var totalYear, totalMonth, totalDate, checkDate;
  if (dataTransaction.length !== 0) {
    const dateBookingState = dataTransaction[0].handleStartTime
      .split("T")[0]
      .split("-");

    totalYear = today.getFullYear() - Number(dateBookingState[0]);
    totalMonth = today.getMonth() + 1 - Number(dateBookingState[1]);
    totalDate = today.getDate() - Number(dateBookingState[2]);
    checkDate = totalYear * 325 + totalMonth * 30 + totalDate;
  }

  const handleCancalBooking = async (props) => {
    const { IdSchedule, idBooking } = props;

    try {
      let dataRefund = {
        idPayment: idBooking,
        status: "refund",
        idSchedule: IdSchedule,
      };

      const res = await refundApi.post(dataRefund);

      if (res.code == 400) {
        toast.warning(res.messenger);
      }
      if (res.code == 200) {
        toast.success(res.messenger);
      }
      if (res.code == 401) {
        toast.warning(res.messenger);
      }
    } catch (error) {
      toast.error("Bạn đã hủy tour thất bại vì ngày hủy quá ngày bắt đầu !!!");
    }
  };

  return (
    <div>
      <Navbar />
      {loadding === true ? (
        <section>
          <h1>Latest Transactions</h1>
          <Skeleton variant="text" />
          <Skeleton variant="rect" width={800} height={118} /> <br></br>
          <Skeleton
            animation="wave"
            variant="rect"
            width={800}
            height={118}
          />{" "}
          <br></br>
          <Skeleton variant="rect" width={800} height={118} /> <br></br>
          <Skeleton
            animation="wave"
            variant="rect"
            width={800}
            height={118}
          />{" "}
          <br></br>
        </section>
      ) : (
        <section>
          <h1>Lịch sử giao dịch</h1>
          {}
          {dataTransaction.length == 0 && <>Chưa có dữ liệu</>}
          {user !== null && (
            <TransactionItem
              checkDate={checkDate}
              dataTransaction={dataTransaction}
              handleCancalBooking={handleCancalBooking}
            />
          )}
        </section>
      )}
    </div>
  );
}
