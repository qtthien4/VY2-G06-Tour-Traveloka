import { Box, Button, List, ListItem, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import { useStyles } from "../assets/styles/TourDesDetailStyle";
import VerticalSkedule from "./VerticalSkedule";

var x;
var y;
export default function TourDesDetail({ schedule, tour, listImage }) {
  const classes = useStyles();
  const [state, setState] = React.useState(0);
  const handleChange = (e, value) => {
    setState(value);
  };
  const leftRightBox = useRef();

  return (
    <Box className={classes.root}>
      <Box className={classes.left}>
        <Box className={classes.leftDes}>
          <Typography
            variant="h6"
            className={`main-text-color-black main-font-weight`}
          >
            Những gì bạn sẽ trải nghiệm
          </Typography>
          <Typography
            className={`${classes.descriptionCaption} main-text-color-black`}
            variant="body2"
          >
            {tour.Desr}
          </Typography>

          <Box mt={3}>
            <img
              style={{ marginTop: "10px" }}
              height="418"
              width="612"
              src={tour.ImageUrl}
            />

            {listImage.map((list) => (
              <img
                style={{ marginTop: "10px" }}
                height="418"
                width="612"
                src={list.Link}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box ref={leftRightBox} className={classes.right}>
        <Box className={classes.rightTop}>
          <Typography
            className={`${classes.title} main-font-weight main-font-size-title main-text-color-black`}
            variant="h5"
          >
            {tour.ActivityName}
          </Typography>
          <Button
            variant="contained"
            fullWidth
            className={`main-bg-button-color-orange main-text-transform main-text-color-white main-font-weight`}
          >
            Tìm các tùy chọn
          </Button>
          <List>
            <ListItem className={classes.titleRightListTop}>
              <Box className={`d-flex main-align-item-center`}>
                <img
                  height="14"
                  width="14"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582532977248-c01603da7f91217b28788f2c9642158f.png?tr=h-16,w-16"
                />
                <Typography
                  style={{ fontWeight: 600 }}
                  className={`main-font-size-text main-padding-4px main-text-color-black `}
                >
                  Ngày có sẵn tiếp theo:
                </Typography>
              </Box>

              <Typography variant="body2"></Typography>
            </ListItem>
            <ListItem className={classes.titleRightListTop}>
              <Box className={`d-flex main-align-item-center`}>
                <img
                  height="14"
                  width="14"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582533047443-34d220e4b4d814bd55e67b2677144ca4.png?tr=h-16,w-16"
                />
                <Typography
                  style={{ fontWeight: 600 }}
                  className={`main-font-size-text main-padding-4px main-text-color-black `}
                >
                  Thời lượng: 3 giờ
                </Typography>
              </Box>
            </ListItem>
            <ListItem className={classes.titleRightListTop}>
              <Box className={`d-flex main-align-item-center`}>
                <img
                  height="14"
                  width="14"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2022/02/03/1643855378712-192ebd4f94c6d83b56af8b9aac33b964.png?tr=h-16,w-16"
                />
                <Typography
                  style={{ fontWeight: 600 }}
                  className={`main-font-size-text main-padding-4px main-text-color-black `}
                >
                  Dịch vụ có sẵn bằng:{" "}
                </Typography>
              </Box>
              <Typography variant="body2">Tiếng Việt , Tiếng Anh</Typography>
            </ListItem>
            <hr />
          </List>
        </Box>

        <Box mt={4}>
          <Typography
            className={`main-font-size-text main-font-weight main-text-color-black `}
          >
            Đặc trưng
          </Typography>
          <List>
            <ListItem>
              <Box className={`d-flex main-align-item-center`}>
                <img
                  height="14"
                  width="14"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2021/03/22/1616400208843-5663daf4fb49618b48d0b3994b2eb396.png"
                />
                <Typography
                  style={{ fontWeight: 530 }}
                  className={`main-font-size-text main-padding-4px main-text-color-black `}
                >
                  Hủy miễn phí
                </Typography>
              </Box>
            </ListItem>
            <ListItem className={classes.titleRightListTop}>
              <Box className={`d-flex main-align-item-center`}>
                <img
                  height="14"
                  width="14"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582533156947-8b600d26b18117730c2ce64fbb2bc3a0.png"
                />
                <Typography
                  style={{ fontWeight: 530 }}
                  className={`main-font-size-text main-padding-4px main-text-color-black `}
                >
                  Giá đặc biệt
                </Typography>
              </Box>
            </ListItem>
            <ListItem className={classes.titleRightListTop}>
              <Box className={`d-flex main-align-item-center`}>
                <img
                  height="14"
                  width="14"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582540787301-acbdf7cfb83202c8f12f58580001f5fe.png"
                />
                <Typography
                  style={{ fontWeight: 530 }}
                  className={`main-font-size-text main-padding-4px main-text-color-black `}
                >
                  Chứng nhận tức thì
                </Typography>
              </Box>
              <hr />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
}
