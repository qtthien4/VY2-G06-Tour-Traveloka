import React, { useEffect, useState } from "react";

export default function CountDown({ time }) {
  const [countdown, setCountdown] = useState(time);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return <div>Hoàn tất thanh toán trong {countdown}</div>;
}
