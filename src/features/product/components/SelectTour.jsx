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
  selectListSchedule,
} from "features/schedule/ScheduleSlice";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productActions } from "../productSlice";
import SelectSchedule from "./SelectSchedule";
import "../assets/css/counter.css";
import { ArrowDropDown } from "@material-ui/icons";
import BookVisitCustomer from "./BookVisitCustomer";

const useStyles = makeStyles((theme) => ({
  root: {
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
  const [numberCus, setNumberCus] = useState(0);

  const [counter, setCounter] = useState(1);
  const [disableButton, setDisableButton] = useState(false);
  const [disableButtonIn, setDisableButtonIn] = useState(false);

  const filterScheduleTour = schedule.find(
    (schedule) => schedule.IdSchedule === selectedValue
  );

  const handleSubmit = () => {
    const initialValue = {
      idSchedule: selectedValue,
      idActivity: idTour,
      starttime: filterScheduleTour.StartTime || "",
      endTime: filterScheduleTour.EndTime || "",
      Amount: counter,
      Stt: "",
      Desr: "",
    };
    dispatch(productActions.setSchedule(initialValue));
    localStorage.setItem("schedule", JSON.stringify(initialValue));
    navigate(`/booking/v2/${String(selectedValue).trim()}`);
  };

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
    setNumberCus(filterScheduleTour.AmountBooking);
  };

  console.log(filterScheduleTour, numberCus);

  const handleChangeInput = (e) => {
    console.log(e.target.value);
    setNumberCus(e.target.value);
  };

  const countRef = useRef(null);
  const amountInvalid = useMemo(() => {
    return tour.Amount - numberCus;
  }, []);

  //increase counter
  const increase = () => {
    if (counter === 1) {
      setDisableButton(false);
    } else if (counter === amountInvalid - 1) {
      setDisableButtonIn(true);
    } else {
      setDisableButton(false);
    }
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter === 1) {
      setDisableButton(true);
    } else {
      setDisableButtonIn(false);
      setDisableButton(false);
      setCounter((count) => count - 1);
    }
  };
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const handleOnclickAmount = () => {};
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
              style={{ marginLeft: "65%", transform: "translateX(65px)" }}
              className="main-padding-4px main-text-color-orange"
              variant="h5"
            >
              600.000dd
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
            onChange={() => {
              setShow(!show);
            }}
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
                  {selectedValue ? (
                    <BookVisitCustomer visible={visible}>
                      <div
                        style={{ width: "95%", margin: "10px" }}
                        className="main-d-flex main-justify-content main-align-item-center"
                      >
                        <Box>
                          <Typography name="soluong">Người đặt:</Typography>
                          <Typography>650.000 VND</Typography>
                        </Box>

                        <div>
                          <div className="btn__container">
                            <button
                              disabled={disableButtonIn}
                              style={{ border: "none" }}
                              className="control__btn"
                              onClick={increase}
                            >
                              +
                            </button>
                            <input
                              onChange={(e) => handleChangeInput(e)}
                              ref={countRef}
                              className="counter__output"
                              value={counter}
                            />
                            <button
                              disabled={disableButton}
                              style={{ border: "none" }}
                              className="control__btn"
                              onClick={decrease}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          padding: "10px",
                          background: "rgb(247, 249, 250)",
                        }}
                        className="main-d-flex main-justify-content main-align-item-center"
                      >
                        <Box>
                          <Typography name="soluong">Người đặt:</Typography>
                          <Typography>650.000 VND</Typography>
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
                  onClick={handleSubmit}
                  style={{ padding: "5px 35px 5px 35px", fontSize: "20px" }}
                  variant="contained"
                  className={` main-bg-button-color-orange main-text-transform main-text-color-white main-font-weight`}
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
