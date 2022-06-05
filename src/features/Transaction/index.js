import { Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import bookingApi from "api/ApiReal/bookingApi";
import refundApi from "api/ApiReal/refundApi";
import scheduleApi from "api/ApiReal/scheduleApi";
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
  const user = useContext(AuthContext);
  const [dataTransaction, setDataTransaction] = useState([initDataTransaction]);

  const [loadding, setLoadding] = useState(false);
  const [visiable, setVisiable] = useState(false);
  const [checkDay, setSetCheckday] = useState(false);

  const today = new Date();
  useEffect(() => {
    //call apiexport const today = new Date();

    (async function () {
      if (user) {
        const data = { user: user.email };
        //write your js code here
        // const data = await transactionApi.post(dataTransaction);
        // console.log(data);
        setLoadding(true);
        const res = await axios("http://95.111.203.185:3003/api/userbooking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        });
        //const res = VouchersApi.preOrder(dataVoucher);
        //let { orderId } = res.data.data.orderId;

        setLoadding(false);
        setDataTransaction(res.data);
      }
    })();

    //data trả về sẽ được set vào state mới
    //in all ra màn hình
  }, []);

  if (dataTransaction.length !== 0) {
    const dateBookingState = dataTransaction[0].handleStartTime
      .split("T")[0]
      .split("-");

    const totalYear = today.getFullYear() - Number(dateBookingState[0]);
    const totalMonth = today.getMonth() + 1 - Number(dateBookingState[1]);
    const totalDate = today.getDate() - Number(dateBookingState[2]);
    const checkDate = totalYear * 325 + totalMonth * 30 + totalDate;
  }

  const handleCancalBooking = async (idBooking) => {
    const dataBooking = await bookingApi.get(idBooking);

    try {
      let dataRefund = {
        idPayment: idBooking,
        status: "refund",
        idSchedule: dataBooking[0].IdSchedule,
      };

      await refundApi.post(dataRefund);
      toast.success("Bạn đã hủy tour thành công");
    } catch (error) {
      toast.error("Bạn đã hủy tour thất bại");
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
          <h1>Latest Transactions</h1>
          {}
          <h2>Today</h2>
          {dataTransaction.length === 0 && <>Chưa có dữ liệu</>}
          {user !== null && (
            <TransactionItem
              // checkDate={checkDate}
              dataTransaction={dataTransaction}
              handleCancalBooking={handleCancalBooking}
            />
          )}
        </section>
      )}
    </div>
  );
}
