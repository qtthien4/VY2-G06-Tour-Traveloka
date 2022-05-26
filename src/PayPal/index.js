import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { paypalActions } from "./paypalSlice";

export default function PayPal({ onApprove, createOrder }) {
  const paypalRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    window.paypal
      .Buttons({
        // Sets up the transaction when a payment button is clicked
        createOrder: (data, actions, err) => createOrder(data, actions, err),
        // Finalize the transaction after payer approval
        onApprove: (data, actions) => onApprove(data, actions),
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
