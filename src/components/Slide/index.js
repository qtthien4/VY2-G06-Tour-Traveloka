import { Box, makeStyles } from "@material-ui/core";
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
    alignItems: "top" /* vertically center */,
    // height: '200px',
    height: "227px",
    width: "236px",
  },
  img: {
    height: "176px",
    width: "236px",
    borderRadius: "8px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  boxItem: {},
}));

function Slide({ listCityofCountry, slideNumber, handleOnclickListTour }) {
  const classes = useStyles();

  console.log("tesst123", listCityofCountry);
  return (
    <>
      <Swiper
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {listCityofCountry.map((list) => (
          <SwiperSlide key={list.IdCountry} style={{ background: "none" }}>
            <Box className={classes.boxItem}>
              <Box className={classes.centerImage}>
                <img
                  // style={{opacity : 0.3}}
                  onClick={() =>
                    handleOnclickListTour(list.experienceId, list.IdCountry)
                  }
                  className={classes.img}
                  src={
                    listCityofCountry.length < 7 ? list.image : list.imageUrl
                  }
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default memo(Slide);
