import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import bookingApi from "api/ApiReal/bookingApi";
import Footer from "components/Footer";
import { AuthContext } from "context/AuthProvider";
import Navbar from "features/Payment/navbar";
import { selectTour } from "features/product/productSlice";
import { selectListSchedule } from "features/schedule/ScheduleSlice";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import shortid from "shortid";
import { bookingActions } from "./bookingSlice";
import BookingForm from "./components/BookingForm";
import { useStyles } from "./indexStyle";

export default function Booking() {
  window.scroll(0, 0);
  const user = useContext(AuthContext);
  const tour = useSelector(selectTour);

  const [idTourBooking, setTourBooking] = useState(
    localStorage.getItem("idTour")
  );
  const [scheduleTour, SetScheduleTour] = useState(
    JSON.parse(localStorage.getItem("schedule"))
  );
  const [listTour, setListTour] = useState(
    JSON.parse(localStorage.getItem("listTour"))
  );
  const location = useLocation();

  let idSchedule = String(location.pathname.split("/")[3]);

  const TourCurrent = listTour.filter(
    (tour) => tour.IdActivity.trim() === scheduleTour.idActivity
  )[0];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bookingActions.fetchTour(JSON.parse(idTourBooking)));
  }, [dispatch]);

  const fullWidth = true;
  const classes = useStyles();
  const navigate = useNavigate();
  // handle form
  const handleBookingFormSubmit = async (formValue) => {
    const {
      emailBooking,
      nameBooking,
      phoneBooking,
      radioVisitor,
      requireCustomer,
      selectGender,
    } = formValue;

    const booking = {
      idBooking: shortid.generate(),
      idSchedule: scheduleTour.idSchedule.trim(),
      idCustomer: "1",
      idVoucher: "",
      idGift: "",
      paymentOption: radioVisitor,
      bookingTime: "",
      total: tour.Price,
      reduce: "",
      sstBooking: "fail",
      amountPeople: scheduleTour.Amount,
      IdPayment: "",
    };
    const customerDetail = {
      idDetail: shortid.generate(),
      idBooking: booking.idBooking,
      customerName: nameBooking,
      cusPhoneNum: String(phoneBooking),
      emailCus: emailBooking,
      gender: selectGender,
    };

    localStorage.setItem("TourCurrent", JSON.stringify(TourCurrent));
    console.log("formValue123", [
      { customerDetail: customerDetail },
      { booking: booking },
    ]);

    await bookingApi.post([
      { customerDetail: customerDetail },
      { booking: booking },
    ]);

    navigate(`/booking/payment/${booking.idBooking}`);
  };
  return (
    <Box>
      <Navbar />
      <Box className={classes.root}>
        <Box className={classes.header}>
          <Typography variant="h4" className={classes.header_title}>
            Đặt phòng của bạn
          </Typography>
          <Typography variant="body1" className={classes.header_des}>
            Điền thông tin chi tiết của bạn và xem xét đặt phòng của bạn.
          </Typography>
        </Box>
        <Box className={classes.main}>
          <BookingForm
            onSubmit={handleBookingFormSubmit}
            fullWidth={fullWidth}
            tour={TourCurrent}
          />

          <Box className={classes.right}>
            <Box>
              <Box className={classes.rightTitle}>
                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/56ad06f2128fa715be3108b2b90e927c.svg"></img>
                <Typography
                  className={classes.rightTitleText}
                  variant="subtitle1"
                >
                  Tóm tắt đặt chỗ
                </Typography>
              </Box>

              <Typography className={classes.textTitleBox}>
                {TourCurrent.ActivityName}
              </Typography>
              <Box className={classes.rightImageBox} mt={2} mb={2}>
                <img
                  style={{ objectFit: "cover", marginRight: "10px" }}
                  height="100"
                  width="100"
                  src={TourCurrent.ImageUrl}
                ></img>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <span>Mở chuyến tham quan cho Max. 12 người tham gia</span>
                  <Button
                    style={{ left: "75px", width: "100px" }}
                    className={`main-text-transform main-text-color-primary main-font-weight`}
                    align="right"
                    size="small"
                  >
                    Xem Chi Tiết
                  </Button>
                </Box>
              </Box>
              <Box className={classes.rightTimeLine}>
                <Box mt={1} className={classes.flex}>
                  <Typography>Ngày tham quan:</Typography>
                  <span className="main-text-color-black main-font-weight-500">
                    {scheduleTour.starttime}
                  </span>
                </Box>
                <Box mt={1} className={classes.flex}>
                  <Typography>Thời gian:</Typography>
                  <span className="main-text-color-black main-font-weight-500">
                    18:30
                  </span>
                </Box>
                <Box mt={1} className={classes.flex}>
                  <Typography>Tổng số khách:</Typography>
                  <span className="main-text-color-black main-font-weight-500">
                    {scheduleTour.Amount}
                  </span>
                </Box>
              </Box>

              <Box className={classes.rightList}>
                <List>
                  <ListItem>
                    <img
                      height="16"
                      width="16"
                      src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455491487-083f2aa1250ed2145b0b41c4e1dba240.png"
                    />
                    <ListItemText
                      style={{
                        fontSize: "12px",
                        marginLeft: "8px",
                        lineHeight: "20px",
                      }}
                      primary={scheduleTour.starttime}
                    />
                  </ListItem>
                  <ListItem>
                    <img
                      height="16"
                      width="16"
                      src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455486715-9f445c68bf929b8ace8e744c568484f9.png"
                    />
                    <ListItemText
                      style={{
                        fontSize: "12px",
                        marginLeft: "8px",
                        lineHeight: "20px",
                      }}
                      primary="Không cần đặt chỗ trước"
                    />
                  </ListItem>
                  <ListItem>
                    <img
                      height="16"
                      width="16"
                      src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455479726-cb00253dc0267a8fc369760e81dc577c.png"
                    />
                    <ListItemText
                      style={{
                        fontSize: "12px",
                        marginLeft: "8px",
                        lineHeight: "20px",
                      }}
                      primary={scheduleTour.endtime}
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt={5}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
