import { Box, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { formatter } from "utils/formatter";
import { useStyles } from "../indexStyles";
const shortid = require("shortid");

export default function ImageList({
  schedule,
  tour,
  listImage,
  firstImage,
  handleClickImageActivity,
}) {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
        <Box>
          <Typography variant="h5" className={classes.tilteProduct}>
            {tour.ActivityName}
          </Typography>
          <Button
            variant="outlined"
            disableTouchRipple
            className={`${classes.btnDisable} main-text-transform`}
          >
            Chuyến tham quan
          </Button>
          <Box className={`main-d-flex main-align-item-center `}>
            <img
              height="12"
              width="12"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0629a9ae0d41e994ff5043f52cbb1b2e.svg"
              alt=""
            />
            <Typography variant="body2" className={`main-padding-4px`}>
              {tour.Location}
            </Typography>
          </Box>
        </Box>

        <Grid
          item
          className={classes.imageBox}
          onClick={handleClickImageActivity}
        >
          <Box className={classes.imageLeft}>
            <img
              className={classes.imageItem}
              height="512"
              width="768"
              // src={listImage[0].Link}
              src={tour.ImageUrl}
            />
          </Box>
          <Box className={classes.imageRight}>
            <Box>
              {listImage.map((list, index) => (
                <Box mb={1} key={index}>
                  <img
                    className={classes.imageItem}
                    height="122"
                    width="148"
                    src={list.Link}
                  />
                </Box>
              ))}
            </Box>

            <Box>
              <img className={classes.imageItem} height="122" width="148" />
            </Box>
            <Box>
              <img className={classes.imageItem} height="122" width="148" />
            </Box>
            <Box className={classes.seeAllBox}>
              <div className={classes.seeAll}>
                <Typography variant="body2">Nhìn thấy tất cả</Typography>
              </div>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm container className={classes.descriptionTour}>
          <Box>
            <Typography className={`main-text-color-black `} variant="h6">
              Traveloka
            </Typography>
            <Box className={`main-d-flex`}>
              <img
                height="30"
                width="30"
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/986bcf0f5b0c898a34fd75a917ceefad.svg"
                alt=""
              />
              <Typography className={`main-padding-4px`} color="primary">
                {tour.score} Good
              </Typography>
            </Box>
            <Typography className={`main-text-color-black  `}>
              Từ {tour.totalReview} nhận xét
            </Typography>
          </Box>
          <Box className={classes.findSlects}>
            <Typography className={`main-font-size-text main-text-color-black`}>
              Bắt đầu từ
            </Typography>
            <Typography
              className={`main-text-color-orange main-font-weight`}
              variant="h5"
            >
              {formatter.format(tour.Price)}
            </Typography>
            <Button
              fullWidth
              variant="contained"
              className={`main-bg-button-color-orange main-text-transform main-text-color-white main-font-weight`}
            >
              Tìm các tùy chọn
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
