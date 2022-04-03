import React from "react";
import VerticalTabs from "./tabPayment";
import Navbar from "./navbar";
import Info from "./Info";
import "./css/container.css";
import { Typography } from "@material-ui/core";

export default function Paymemt() {
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
          <VerticalTabs />
          <Info />
        </div>
      </div>
    </div>
  );
}
