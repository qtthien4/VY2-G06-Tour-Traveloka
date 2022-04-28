import React from "react";
import VerticalTabs from "./tabPayment";
import Navbar from "./navbar";
import Info from "./Info";
import "./css/container.css";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";

export default function Paymemt() {
  const location = useLocation();
  const idBooking = location.pathname.split("/")[3];
  const tourCurrent = JSON.parse(localStorage.getItem("TourCurrent"));
  const schedule = JSON.parse(localStorage.getItem("schedule"));

  console.log(tourCurrent, schedule);
  //setTImeOut 1p30s delete  booking theo activity

  //   useEffect(() => {
  //     let timeout;
  //     setTimeout(() => {
  //       //post delete booking
  //     }, 90000);
  //   }, []);

  //getAll Booking theo idBooking => idSchedule => idTour

  //get tour theo idbooking

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
        >
          Payment
        </Typography>
        <div className="container">
          <VerticalTabs
            tourCurrent={tourCurrent}
            schedule={schedule}
            idBooking={idBooking}
          />
          <Info
            tourCurrent={tourCurrent}
            idBooking={idBooking}
            schedule={schedule}
          />
        </div>
      </div>
    </div>
  );
}
