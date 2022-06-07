import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import bookingApi from "api/ApiReal/bookingApi";
import Moment from "react-moment";
import Footer from "components/Footer";
import { AuthContext } from "context/AuthProvider";
import { selectListCity } from "features/City/citySlice";
import { selectListCountry } from "features/Country/countrySlice";
import Navbar from "features/Payment/navbar";
import { selectTour } from "features/product/productSlice";
import { selectListSchedule } from "features/schedule/ScheduleSlice";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import shortid from "shortid";
import { bookingActions } from "./bookingSlice";
import BookingForm from "./components/BookingForm";
import { useStyles } from "./indexStyle";
import reBookingApi from "api/ApiReal/reBookingApi";
import { toast } from "react-toastify";

export default function Booking() {
  window.scroll(0, 0);
  Moment.globalFormat = "D MMM YYYY";
  const user = JSON.parse(localStorage.getItem("userInfo"));
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

  const idbooking = useRef(shortid.generate());
  const time = 300;
  const timerTrans = useRef(null);

  const [message, setMessager] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (idSchedule === undefined) {
      navigate("/activities");
    } else {
      dispatch(bookingActions.fetchTour(JSON.parse(idTourBooking)));
      const dataTimeoutPayment = {
        idBooking: "",
        idSchedule: scheduleTour.idSchedule,
        amountBooking: scheduleTour.Amount,
      };

      //post delete booking affter long time
      console.log(TourCurrent.IdActivity);
      timerTrans.current = setTimeout(async () => {
        await reBookingApi.post({ dataTimeoutPayment });
        toast.warning("Bạn đã quá thời gian đặt chỗ vui lòng chọn lại!");
        navigate(`/activities/vietnam/product/${TourCurrent.IdActivity}`);
      }, time * 1000);
    }
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
      selectGender,
    } = formValue;

    const booking = {
      idBooking: idbooking.current,
      idSchedule: scheduleTour.idSchedule.trim(),
      idCustomer: user.IdCustomer,
      idVoucher: "",
      idGift: "",
      paymentOption: radioVisitor,
      bookingTime: "",
      total: tour.Price * scheduleTour.Amount,
      reduce: "",
      sstBooking: "fail",
      amountPeople: scheduleTour.Amount,
      IdPayment: "",
    };
    const customerDetail = {
      idDetail: idbooking.current,
      idBooking: booking.idBooking.current,
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
    clearTimeout(timerTrans.current);
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
            user={user}
            schedule={scheduleTour}
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
                  alt=""
                  style={{
                    objectFit: "cover",
                    marginRight: "10px",
                    width: "200px",
                  }}
                  height="100"
                  src={TourCurrent.ImageUrl}
                ></img>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <span>
                    Mở chuyến tham quan cho Max. {TourCurrent.Amount} người tham
                    gia
                  </span>
                  <Button
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
                    <Moment format="DD/MM/YYYY" date={scheduleTour.starttime} />{" "}
                    đến{" "}
                    <Moment format="DD/MM/YYYY" date={scheduleTour.endTime} />
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
                    <Typography
                      style={{
                        fontSize: "14px",
                        marginLeft: "8px",
                        lineHeight: "20px",
                      }}
                    >
                      {" "}
                      Có hiệu lực vào ngày:{" "}
                    </Typography>
                    <Moment
                      format="DD/MM/YYYY"
                      date={scheduleTour.starttime}
                    />{" "}
                  </ListItem>
                  <ListItem>
                    <img
                      alt=""
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
