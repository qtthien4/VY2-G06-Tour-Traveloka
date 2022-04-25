import { Box, Button, List, ListItem, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import { useStyles } from "../assets/styles/TourDesDetailStyle";
import VerticalSkedule from "./VerticalSkedule";

var x;
var y;
export default function TourDesDetail({ tour, listImage }) {
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
          {/* <Typography
            className={`main-text-color-black main-font-size-title main-font-weight`}
          >
            Điểm nổi bật
          </Typography>
          <ul className={`${classes.list} main-text-color-black`}>
            <li>
              Sắp xếp buổi chụp ảnh của riêng bạn ở Tokyo với một nhiếp ảnh gia
              chuyên nghiệp địa phương
            </li>
            <li>
              Ghi lại những khoảnh khắc đẹp nhất trong chuyến đi của bạn tại địa
              điểm ưa thích của bạn
            </li>
            <li>
              Hãy sẵn sàng để thể hiện những tư thế đẹp nhất của bạn và làm cho
              Instagram của bạn tỏa sáng
            </li>
          </ul>

          <Box
            mb={1}
            className={`main-text-color-black main-d-flex main-align-item-center`}
          >
            <img
              height="20"
              width="20"
              src="https://ik.imagekit.io/tvlk/image/imageResource/2020/02/24/1582533078216-28e45a291d35a380e73193eff26b4938.png"
            />
            <Typography className={`main-padding-4px`}>
              Tốt cho: Tham quan
            </Typography>
          </Box> */}

          {/* <Box mt={3}>
            <Typography
              className={`main-text-color-black main-font-size-title main-font-weight`}
            >
              Lịch trình tour du lịch
            </Typography>
            <Button
              className={`main-text-color-white main-bg-button-color-primary `}
              variant="contained"
            >
              1 Day
            </Button>
            <br />
            <VerticalSkedule />
          </Box> */}

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
            {/* Du lịch như một người nổi tiếng và sắp xếp buổi chụp ảnh của riêng
            bạn ở Tokyo với một nhiếp ảnh gia chuyên nghiệp địa phương. Có quyền
            tự do chọn vị trí ưa thích của bạn, tạo dáng trong bối cảnh đô thị
            sôi động, biểu tượng văn hóa hoặc khung cảnh đường phố sôi động. Bạn
            sẽ nhận được tất cả ảnh đã chỉnh sửa có độ phân giải cao trong vòng
            một ngày sau khi chụp. Hãy sẵn sàng để thể hiện những tư thế đẹp
            nhất của bạn và làm cho Instagram của bạn tỏa sáng! Lưu ý: Một lượt
            đặt chỗ 'người lớn' tương đương với một buổi chụp ảnh cho tối đa sáu
            người. */}
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

        {/* <Box className={`${classes.leftMap} `}>
          <AppBar position="static">
            <Tabs value={state} onChange={handleChange}>
              <Tab className={`main-text-color-white`} label="Item One" />
              <Tab className={`main-text-color-white`} label="Item Two" />
            </Tabs>
          </AppBar>
          {state === 0 && <PlaceMap />}
          {state === 1 && <InformationMore />}
        </Box> */}
      </Box>
      <Box ref={leftRightBox} className={classes.right}>
        <Box className={classes.rightTop}>
          <Typography
            className={`${classes.title} main-font-weight main-font-size-title main-text-color-black`}
            variant="h5"
          >
            Chụp ảnh chuyên nghiệp ở Tokyo
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

              <Typography variant="body2">
                Thứ sáu, ngày 18 tháng 3 năm 2022
              </Typography>
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
                  Thời lượng:
                </Typography>
              </Box>

              <Typography variant="body2">3 gio</Typography>
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
                  Ngày có sẵn tiếp theo:
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
                  Thời lượng:
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
                  Dịch vụ có sẵn bằng:{" "}
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
