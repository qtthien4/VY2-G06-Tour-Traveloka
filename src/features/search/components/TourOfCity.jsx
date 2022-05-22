import { Box, Typography } from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";
import favauriteApi from "api/ApiReal/favauriteApi";
import React, { useMemo, useState } from "react";
import shortid from "shortid";
import { formatter } from "utils/formatter";
import { useStyles } from "../assets/styles/tourOfcityStyle";

export default function TourOfCity({
  handleIsFavaurite,
  tours,
  handleOnclickTourSearch,
  handleNoFavaurite,
  arr1,
}) {
  const classes = useStyles();
  return (
    <div>
      {tours.map((a, index) => (
        <div key={index}>
          <ToggleButton
            style={{
              zIndex: 15,
              position: "absolute",
              marginLeft: "780px",
              border: "none",
              color: "white",
            }}
            value="check"
          >
            {a.isFavaurite == true ? (
              <img
                onClick={() => handleIsFavaurite(a.IdActivity, index)}
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0de1c7d93fd2bfa0d2a087067ea0ff25.svg"
              />
            ) : (
              <img
                onClick={() => handleNoFavaurite(a.IdActivity, index)}
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/42e4a7e6ed00f63a69daf8b5a980d0d6.svg"
              />
            )}
          </ToggleButton>
          <Box
            className={classes.boxItem}
            key={index}
            mb={3}
            onClick={() => handleOnclickTourSearch(a.IdActivity)}
          >
            <img className={classes.img} src={a.ImageUrl} />
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
              <Box></Box>
              <Box className={classes.boxPrice}>
                <span className={classes.price}>
                  {formatter.format(a.Price)}
                </span>
              </Box>
            </Box>
          </Box>
        </div>
      ))}
    </div>
  );
}
