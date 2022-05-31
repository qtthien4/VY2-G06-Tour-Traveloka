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
    display: "flex",
    justifyContent: "center" /* horizontally center */,
    alignItems: "center" /* vertically center */,
    // height: '200px',
    width: "100%",
  },
  img: {
    width: "100% !important",
    borderRadius: "8px",
  },
  boxItem: {},
}));

function ListCityTour({
  listCityVietNam,
  slideNumber,
  handleOnclickListTourVN,
}) {
  const classes = useStyles();
  return (
    <>
      <Swiper
        className="swiper2"
        style={{
          background: "none",
          marginTop: "-50px",
          marginBottom: "-50px",
        }}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={slideNumber}
        navigation
        pagination={{ clickable: true }}
      >
        {listCityVietNam.map((list) => (
          <SwiperSlide
            className=".swiper-slide1"
            key={list.id}
            style={{ background: "none" }}
            onClick={() => handleOnclickListTourVN(list.id)}
          >
            <Box className={classes.boxItem}>
              <Box className={classes.centerImage}>
                <img
                  style={{ width: "100%" }}
                  className={classes.img}
                  src={list.image}
                />
                <Typography></Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default memo(ListCityTour);
