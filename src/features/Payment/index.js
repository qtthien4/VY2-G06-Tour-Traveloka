import React, { useContext, useEffect, useState } from "react";
import VerticalTabs from "./tabPayment";
import Navbar from "./navbar";
import Info from "./Info";
import "./css/container.css";
import { Typography } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { AuthContext } from "context/AuthProvider";
import tourApi from "api/ApiReal/tourApi";

const stripePromis = loadStripe(
  "pk_test_51KZccWHODmKkGzOlDYysHC38rGYXN1ELtnVickHvvus4n2CodkqZlX5urfvL5tSg6E8vBLyR2dgCoWR3nkRBstff006zPAY3Yd"
);

export default function Paymemt() {
  const location = useLocation();
  const idBooking = location.pathname.split("/")[3];
  const [tourCurrent, setTourCurrent] = useState({});
  //const tourCurrent = JSON.parse(localStorage.getItem("TourCurrent"));
  const schedule = JSON.parse(localStorage.getItem("schedule"));

  var idTourok = JSON.parse(localStorage.getItem("schedule")).idActivity;

  useEffect(() => {
    (async function () {
      let res = await tourApi.getId(idTourok);
      setTourCurrent(res[0]);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  return (
    <Elements stripe={stripePromis}>
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
    </Elements>
  );
}
