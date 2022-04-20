import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../assets/styles/tourOfcityStyle";

export default function TourOfCity({
  listCityofTour,
  handleOnclickTourSearch,
}) {
  const classes = useStyles();
  return (
    <>
      {listCityofTour.map((a, index) => (
        <Box
          className={classes.boxItem}
          key={index}
          mb={3}
          onClick={() => handleOnclickTourSearch(a.IdActivity)}
        >
          <img
            height={200}
            width={300}
            className={classes.img}
            src={a.ImageUrl}
          />
          <Box className={classes.content}>
            <Typography className={classes.title} variant="h6">
              {a.ActivityName}
            </Typography>
            <Box>
              <img
                height="12"
                width="12"
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0629a9ae0d41e994ff5043f52cbb1b2e.svg"
                alt=""
              />
              <span className={classes.text} color="primary">
                {a.Location}
              </span>
            </Box>
            <Box>
              <img
                height="12"
                width="12"
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/986bcf0f5b0c898a34fd75a917ceefad.svg"
                alt=""
              />
              <span className={classes.text}>{a.score} /10</span>
              <span className={classes.text}>(1 nhận xét)</span>
            </Box>
            <Box className={classes.boxPrice}>
              <span className={classes.textLineThought}>
                {a.originalPrice} VND
              </span>{" "}
              <br />
              <span className={classes.price}>{a.Price} VND</span>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}
