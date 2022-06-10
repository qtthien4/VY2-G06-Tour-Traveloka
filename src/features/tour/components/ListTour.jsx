import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { memo, useRef, useState } from "react";
import SwiperCore, {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Virtual,
} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatter } from "utils/formatter";
import "../assets/css/index.css";

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {},
  centerImage: {
    height: "200px",
    width: "300px",
  },
  img: {
    height: "90%",
    width: "90%",

    objectPosition: "center center",
    objectFit: "cover",
    maxWidth: "100%",
    borderRadius: "8px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  boxItem: {},
  nameTour: {
    overflow: "hidden",
    display: "block",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    flexShrink: 1,
    WebkitFlexShrink: 1,
    color: "rgba(67,67,67,1.00)",
    fontWeight: 700,
    fontSize: "20px",
  },
  price: {
    color: "rgba(249,109,1,1.00)",
    WebkitLineClamp: 1,
    fontSize: "16px",
    fontWeight: 500,
    marginTop: "5px",
  },
}));

function ListTour({ listTour, slideNumber, handleOnclickTourForeign }) {
  const classes = useStyles();
  return (
    <>
      <Swiper
        className="swiper2"
        style={{
          background: "none",
          marginTop: "",
          marginBottom: "",
          height: "350px",
          width: "100%",
        }}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={slideNumber}
        navigation
        pagination={{ clickable: true }}
      >
        {listTour.map((list, index) => (
          <SwiperSlide
            onClick={() =>
              handleOnclickTourForeign(list.experienceId || list.IdActivity)
            }
            key={index}
            style={{
              background: "none",
              display: "flex",
              flexDirection: "column",
              height: "330px",
              justifyContent: "flex-start",
              textAlign: "left",
            }}
          >
            <Box className={classes.boxItem}>
              <Box className={classes.centerImage}>
                <img
                  style={{ width: "100%" }}
                  className={classes.img}
                  src={list.imageUrl || list.ImageUrl}
                />
              </Box>
            </Box>
            <Box className={classes.img} mt={1} alignItems="flex-start">
              <Typography variant="h6" className={classes.nameTour}>
                {list.experienceName || list.ActivityName}
              </Typography>
              <Typography color="secondary" className={classes.price}>
                {formatter.format(list.Price)}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default memo(ListTour);
