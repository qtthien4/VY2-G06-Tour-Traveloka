import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import "./css/GlobalCssSlider.css";
import "./css/pay.css";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import FormPayment from "./components/FormPayment";
import { useForm } from "react-hook-form";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { display } from "@mui/system";
import PayPal from "PayPal";
import { Link, useNavigate } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs({ idBooking, tourCurrent, schedule }) {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //handle form payment
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  var nameOnCard;

  const [checkout, setCheckout] = useState();
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 843,

        width: 670,
        marginRight: "60px",
      }}
    >
      <Tabs
        TabIndicatorProps={{ style: { backgroundColor: "white" } }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        style={{ backgroundColor: "#073e68", width: "188px" }}
      >
        <div style={{ padding: "15px 32px 10px", display: "flex" }}>
          <img
            style={{ width: "110px", height: "20px", justifyContent: "center" }}
            src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/16/1531738663636-5a904b0e24addce76efebf72eb8e5cb0.png?tr=q-75"
            alt=""
          />
        </div>
        <Tab label="Thẻ thanh toán" {...a11yProps(0)} />
      </Tabs>
      <TabPanel value={value} index={1}>
        <FormPayment
          idBooking={idBooking}
          schedule={schedule}
          tourCurrent={tourCurrent}
        />
      </TabPanel>
    </Box>
  );
}
export default memo(VerticalTabs);
