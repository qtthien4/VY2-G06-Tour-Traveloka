import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { paypalActions } from "./paypalSlice";

export default function PayPal({
  onApprove,
  createOrder,
  checkPreVoucher,
  checkPreGift,
  check,
  checkVoucher,
  checkGift,
}) {
  const paypalRef = useRef();
  const dispatch = useDispatch();

  const checkOption = useRef();

  if (check !== "") {
    checkOption.current = check;
  }
  useEffect(() => {
    window.paypal
      .Buttons({
        // Sets up the transaction when a payment button is clicked
        createOrder: async (data, actions, err) => {
          if (checkOption.current == "all") {
            console.log("check all ok");
            await checkPreGift(checkOption.current);
            await checkPreVoucher(checkOption.current);
            return createOrder(data, actions, err);
          } else if (checkOption.current == "gift") {
            console.log("checkOption.current == gift");
            await checkPreGift();
            return createOrder(data, actions, err);
          } else if (checkOption.current == "voucher") {
            console.log("checkOption.current == voucher");
            await checkPreVoucher();
            return createOrder(data, actions, err);
          } else {
            console.log("check-no-option");
            return createOrder(data, actions, err);
          }
        },
        // Finalize the transaction after payer approval
        onApprove: (data, actions) => {
          console.log("ok");
          return onApprove(data, actions);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  return (
    <div>
      <div ref={paypalRef}></div>
    </div>
  );
}
