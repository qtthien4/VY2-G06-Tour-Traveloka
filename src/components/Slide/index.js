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
  nameCountry: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function Slide({ listCityofCountry, slideNumber, handleOnclickListTour }) {
  const classes = useStyles();
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
      >
        {listCityofCountry.map((list) => (
          <SwiperSlide key={list.IdCountry} style={{ background: "none" }}>
            <Box
              className={classes.boxItem}
              onClick={() =>
                handleOnclickListTour(list.experienceId, list.IdCountry)
              }
            >
              <Typography
                className={classes.nameCountry}
                variant="h5"
                style={{
                  boxShadow: "0px 4px 18px rgb(3 18 26 / 13%)",
                  color: "white",
                  fontWeight: 590,
                  position: "absolute",
                  transform: "translate(66px, 75px)",
                  fontFamily: "Segoe UI",
                }}
              >
                {listCityofCountry.length < 7 ? "" : list.CountryName}
              </Typography>
              <Box className={classes.centerImage}>
                <img
                  // style={{opacity : 0.3}}

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
