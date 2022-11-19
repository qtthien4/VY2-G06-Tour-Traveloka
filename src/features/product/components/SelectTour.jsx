import {
  Box,
  Button,
  FormControl,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import InputField from "components/FormFields/InputField";
import {
  scheduleActions,
  selectScheduleAmount,
} from "features/schedule/ScheduleSlice";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productActions } from "../productSlice";
import SelectSchedule from "./SelectSchedule";
import "../assets/css/counter.css";
import { ArrowDropDown } from "@material-ui/icons";
import BookVisitCustomer from "./BookVisitCustomer";
import { formatter } from "utils/formatter";
import { toast } from "react-toastify";
import axios from "axios";
import reservationApi from "api/ApiReal/reservationApi";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "10px",
    background: "white",
    boxShadow: "0px 1px 2px rgb(3 18 26 / 20%)",
    padding: "15px",
  },
  btnBoxSeeDetailAndSelect: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
  },
  titleSelectTour: {
    margin: "15px",
  },
  List: {},
  ListItem: {
    paddingLeft: "-16px",
  },
  btn: {
    borderRadius: "50px",
    width: "240px",
    color: "white",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginBottom: "25px",
  },
}));

export default function SelectTour({ schedule, tour, idTour }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");
  const [numberCus, setNumberCus] = useState();
  const amountSchedule = useSelector(selectScheduleAmount);

  const [counter, setCounter] = useState(1);
  const [disableButton, setDisableButton] = useState(true);
  const [disableButtonIn, setDisableButtonIn] = useState(false);
  const [priceTotal, setPriceTotal] = useState(tour.Price);
  const [listSchedule, setListSchedule] = useState({
    Amount: 0,
    AmountBooking: 0,
    EndTime: "",
    IdActivity: "",
    IdSchedule: "",
    StartTime: "",
    Status: true,
  });

  useEffect(() => {
    if (selectedValue === "") {
      return;
    } else {
      const list = schedule.find((schedule) => {
        return schedule.IdSchedule === selectedValue;
      });
      setListSchedule(list);
      setCounter(1);
      setPriceTotal(tour.Price);
      setColorDisable("main-text-color-disable");
      setDisabled(true);
      setDisableButton(true);
    }
  }, [selectedValue]);

  const handleSubmit = async () => {
    const initialValue = {
      idSchedule: selectedValue,
      idActivity: idTour,
      starttime: listSchedule.StartTime || "",
      endTime: listSchedule.EndTime || "",
      Amount: counter,
      Stt: "",
      Desr: "",
    };

    var amountCheckTourNow, amountTour, arr;

    //call api schedule

    await axios(`${process.env.REACT_APP_API_URL}/schedule/${idTour}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (Array.prototype.keys(res.data) === 0) {
        toast.warning(
          `Số lượng tour không đủ ${counter} chỉ còn ${amountCheckTourNow} chỗ trống, vui lòng chọn lại !!!`
        );
      }
      arr = res.data.filter(
        (list) => list.IdSchedule.trim() === selectedValue.trim()
      );
      amountCheckTourNow = arr[0].AmountBooking;
      amountTour = arr[0].Amount;
    });
    //post reservattion

    //check số lượng
    if (arr.length == 0) {
      toast.warning(`Số lượng đặt đã hết, vui lòng chọn thời gian khác !!!`);
    } else if (counter + amountCheckTourNow <= amountTour) {
      await reservationApi.post({
        IdSchedule: selectedValue.trim(),
        amount: counter,
      });
      dispatch(productActions.setSchedule(initialValue));
      localStorage.setItem("schedule", JSON.stringify(initialValue));
      navigate(`/booking/v2/${String(selectedValue).trim()}`);
    } else {
      toast.warning(
        `Số lượng tour chỉ còn ${
          amountTour - amountCheckTourNow
        } chỗ trống, vui lòng chọn lại !!!`
      );
    }
    //ok
    //no ok
  };

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
    setNumberCus();
  };

  const handleChangeInput = (e) => {
    setNumberCus(e.target.value);
  };

  const countRef = useRef(null);

  var amountMax = tour.Amount - listSchedule.AmountBooking;
  //increase counter
  useEffect(() => {
    if (amountMax === 1) {
      setDisableButtonIn(true);
      setDisableButton(true);
    } else {
      setDisableButtonIn(false);
    }
  }, [amountMax]);
  console.log(amountMax);
  const increase = () => {
    if (amountMax > 0) {
      if (counter === amountMax - 1) {
        setDisableButtonIn(true);
        setDisableButton(false);
      }
      if (counter < amountMax - 1 && counter > 0) {
        setDisableButtonIn(false);
        setDisableButton(false);
      }
      setCounter((count) => count + 1);
      setPriceTotal((counter + 1) * tour.Price);
    } else {
      console.log("loi");
    }
  };

  //decrease counter
  const decrease = () => {
    if (counter === 2) {
      setDisableButtonIn(false);
      setDisableButton(true);
    }
    if (counter < amountMax + 1 && counter > 2) {
      setDisableButtonIn(false);
      setDisableButton(false);
    }
    setCounter((count) => count - 1);
    setPriceTotal((counter - 1) * tour.Price);
  };

  const btnRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [colorDisable, setColorDisable] = useState("main-text-color-disable");

  const [show, setShow] = useState(false);
  const [showAmount, setShowAmount] = useState(false);

  const handleOnclickAmount = () => {
    setVisible(false);
    setDisabled(false);
    setColorDisable("main-bg-button-color-orange");
  };
  const handleChangeToggle = () => {
    setShow(!show);
    setShowAmount(!showAmount);
    setSelectedValue("");
    setCounter(1);
    setPriceTotal(tour.Price);
    setColorDisable("main-text-color-disable");
    setDisabled(true);
  };
  return (
    <div>
      <Box mb={10} className={classes.root}>
        <div
          className={`main-bg-button-color-primary main-text-transform ${classes.btn}`}
          size="small"
          color="primary"
        >
          <img
            height="14"
            width="14"
            src="https://ik.imagekit.io/tvlk/image/imageResource/2021/10/18/1634547598779-2f64dfbfe811c44c89eeed87ede0acdd.png"
          />
          <span className="main-padding-4px">
            Lựa chọn đối tác của chúng tôi
          </span>
        </div>

        <Typography
          className={`main-font-size-text main-text-color-black main-font-weight`}
        >
          Mở chuyến tham quan cho Max. {tour.Amount} người tham gia
        </Typography>

        <List className={classes.List}>
          <ListItem className={classes.ListItem}>
            <img
              height="16"
              width="16"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455491487-083f2aa1250ed2145b0b41c4e1dba240.png"
            ></img>
            <Typography className="main-padding-4px" variant="body1">
              Sử dụng vào ngày thăm đã chọn
            </Typography>
          </ListItem>
          <ListItem>
            <img
              height="16"
              width="16"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455486715-9f445c68bf929b8ace8e744c568484f9.png"
            ></img>
            <Typography className="main-padding-4px" variant="body1">
              Không cần đặt chỗ trước
            </Typography>
          </ListItem>
          <ListItem className="">
            <img
              height="16"
              width="16"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455479726-cb00253dc0267a8fc369760e81dc577c.png"
            ></img>
            <Typography className="main-padding-4px" variant="body1">
              Hoàn tiền dễ dàng
            </Typography>
            <Typography
              style={{ transform: "translateX(630px)" }}
              className="main-padding-4px main-text-color-orange"
              variant="h5"
            >
              {formatter.format(tour.Price)}
            </Typography>
          </ListItem>
        </List>

        <Box mb={3} className={classes.btnBoxSeeDetailAndSelect}>
          <Button variant="outlined">Xem chi tiết</Button>
          <ToggleButton
            style={{ width: "100px", color: "white" }}
            color="secondary"
            variant="contained"
            className={`main-bg-button-color-orange main-text-transform main-text-color-white main-font-weight`}
            value="check"
            onChange={handleChangeToggle}
          >
            {!show ? (
              <div style={{ width: "100px", color: "white" }}>Lựa chọn</div>
            ) : (
              <div
                style={{
                  width: "100px",
                  color: "white",
                }}
              >
                Hủy
              </div>
            )}
          </ToggleButton>
        </Box>

        {show ? (
          <>
            <hr />
            <Box style={{ transition: "height 2s" }}>
              <div className="main-d-flex">
                <div style={{ width: "300px", height: "120px" }}>
                  <h4>Chọn ngày đi và ngày kết thúc</h4>
                  <SelectSchedule
                    selectedValue={selectedValue}
                    handleChange={handleChange}
                    schedule={schedule}
                  />
                </div>
                <div>
                  {selectedValue.length > 1 && showAmount === true ? (
                    <BookVisitCustomer
                      counter={counter}
                      visible={visible}
                      setVisible={setVisible}
                    >
                      <div
                        style={{ width: "95%", margin: "10px" }}
                        className="main-d-flex main-justify-content main-align-item-center"
                      >
                        <Box>
                          <Typography name="soluong">Người đặt:</Typography>
                          <Typography>{counter}</Typography>
                        </Box>

                        <div className="">
                          <div className="btn__container">
                            <button
                              disabled={disableButton}
                              style={{ border: "none" }}
                              className="control__btn"
                              onClick={decrease}
                            >
                              -
                            </button>
                            <input
                              onChange={(e) => handleChangeInput(e)}
                              ref={countRef}
                              className="counter__output"
                              value={counter}
                            />

                            <button
                              disabled={disableButtonIn}
                              style={{ border: "none" }}
                              className="control__btn"
                              onClick={increase}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          padding: "10px",
                          background: "rgb(247, 249, 250)",
                        }}
                        className="main-d-flex main-justify-content main-align-item-center"
                      >
                        <Box>
                          <Typography name="soluong">Tổng giá:</Typography>
                          <Typography>
                            {priceTotal === 0
                              ? formatter.format(tour.Price)
                              : formatter.format(priceTotal)}
                          </Typography>
                        </Box>
                        <Button
                          onClick={handleOnclickAmount}
                          className="main-bg-button-color-orange main-text-transform main-text-color-white main-font-weight"
                        >
                          Xong
                        </Button>
                      </div>
                    </BookVisitCustomer>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <Box className="d-flex main-justify-content">
                <div></div>
                <Button
                  ref={btnRef}
                  disabled={disabled}
                  onClick={handleSubmit}
                  style={{ padding: "5px 35px 5px 35px", fontSize: "20px" }}
                  variant="contained"
                  className={`${colorDisable} main-text-transform main-text-color-white main-font-weight`}
                >
                  Đặt bây giờ
                </Button>
              </Box>
            </Box>
          </>
        ) : null}
      </Box>
    </div>
  );
}
