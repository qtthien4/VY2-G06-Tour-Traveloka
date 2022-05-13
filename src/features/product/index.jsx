import { Box, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Footer from "components/Footer";
import Header from "components/Header";
import { imageActions, selectListImage } from "features/Images/imageSlice";
import { scheduleActions } from "features/schedule/ScheduleSlice";
import ListTour from "features/tour/components/ListTour";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import TourDesDetail from "./components/DesTourDetail";
import ImageList from "./components/ImageList";
import ModalImage from "./components/ModalImage";
import SelectTour from "./components/SelectTour";
import { useStyles } from "./indexStyles";
import { productActions, selectScheduleTour, selectTour } from "./productSlice";
const shortid = require("shortid");

function Product() {
  // window.scroll(0, 0);
  const classes = useStyles();
  const dispatch = useDispatch();

  const tour = useSelector(selectTour);
  const schedule = useSelector(selectScheduleTour);

  const listImage = useSelector(selectListImage);

  const location = useLocation();
  const idTour = location.pathname.split("/")[4];
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(productActions.fetchProduct(idTour));
    dispatch(imageActions.fetchApiImage(idTour));
  }, [dispatch, idTour]);

  //handle model image
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    return setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box className={classes.navProduct}>
        <Header />
      </Box>

      <Box className={classes.rootBoxBig}>
        <Box className={classes.rootBox}>
          <Box className={classes.header}>
            <Box>
              <NavLink to="/activities" className={`main-text-link`}>
                Xperience
              </NavLink>
              /
              <NavLink
                className={`main-text-link`}
                to="/activities/category/daytour"
              >
                tour
              </NavLink>{" "}
              /
            </Box>
            <Box>
              <Button
                className={`main-bg-button-color-primary main-text-transform`}
                size="small"
                variant="contained"
                color="primary"
              >
                Thay đổi tìm kiếm
              </Button>
            </Box>
          </Box>

          {/* <div
            
            ref={searchOverlay}
            style={{
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              zIndex: 3,
              position: "fixed",
              display: "none",
              overflow: "hidden",
            }}
          >
            <ListTour />
          </div> */}
          <ModalImage
            tour={tour}
            listImage={listImage}
            open={open}
            handleClose={handleClose}
          />
          <Paper className={classes.root}>
            <ImageList
              handleClickImageActivity={handleOpen}
              tour={tour}
              listImage={listImage}
            />
          </Paper>

          <Box mt={4}>
            <Box>
              <Typography
                className={`main-font-weight main-font-size-title main-text-color-black`}
                variant="h5"
              >
                Thông tin chi tiết sản phẩm
              </Typography>
              <Box mt={3}>
                <TourDesDetail listImage={listImage} tour={tour} />
              </Box>
            </Box>

            <Box mt={4}>
              <Typography
                variant="h5"
                className={`main-font-weight main-font-size-title main-text-color-black`}
              >
                Có sẵn vào các ngày khác
              </Typography>
              <Box mt={4}>
                <SelectTour
                  idTour={idTour}
                  schedule={schedule}
                  // handleClickBuy={handleClickBuy}
                  tour={tour}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Product;