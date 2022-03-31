import { AppBar, Box, Button, List, ListItem, Tab, Tabs, Typography } from '@material-ui/core';
import { FlagOutlined, SmsOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import InformationMore from './InformationMore';
import PlaceMap from './PlaceMap';

const useStyles = makeStyles(theme => ({
  root: {

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  left: {

    width: "644px",
  },
  right: {
    padding: "15px",
    boxShadow: "0px 1px 2px rgb(3 18 26 / 20%)",
    background: "white",
    width: "300px",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rightTop: {
    height: "300px"
  },
  title: {
    marginBottom: "20px",
    marginTop: "10px",
    fontWeight: 700,
    fontSize: "20px",

  },
  titleRightListTop: {
    display: "inline-block",
  },
  leftDes: {
    boxShadow: "0px 1px 2px rgb(3 18 26 / 20%)",
    background: "white",
    padding: "10px"
  },
  leftMap: {
    boxShadow: "0px 1px 2px rgb(3 18 26 / 20%)",

    background: "white",
    marginTop: "30px"
  },


}))
export default function TourDesDetail() {
  const classes = useStyles();
  const [state, setState] = React.useState(0);
  const handleChange = (e, value) => {
    setState(value);
  }
  return (
    <Box className={classes.root}>
      <Box className={classes.left}>
        <Box className={classes.leftDes}>
          <Typography>Điểm nổi bật</Typography>
          <List>
            <ListItem>Sắp xếp buổi chụp ảnh của riêng bạn ở Tokyo với một nhiếp ảnh gia chuyên nghiệp địa phương</ListItem>
            <ListItem>Ghi lại những khoảnh khắc đẹp nhất trong chuyến đi của bạn tại địa điểm ưa thích của bạn</ListItem>
            <ListItem>Hãy sẵn sàng để thể hiện những tư thế đẹp nhất của bạn và làm cho Instagram của bạn tỏa sáng</ListItem>
          </List>
          <Box>
            <SmsOutlined />
            <Typography>Tốt cho:  Tham quan</Typography>
          </Box>
          <Typography>Những gì bạn sẽ trải nghiệm</Typography>
          <Typography variant="body2">Du lịch như một người nổi tiếng và sắp xếp buổi chụp ảnh của riêng bạn ở Tokyo với một nhiếp ảnh gia chuyên nghiệp địa phương. Có quyền tự do chọn vị trí ưa thích của bạn, tạo dáng trong bối cảnh đô thị sôi động, biểu tượng văn hóa hoặc khung cảnh đường phố sôi động. Bạn sẽ nhận được tất cả ảnh đã chỉnh sửa có độ phân giải cao trong vòng một ngày sau khi chụp. Hãy sẵn sàng để thể hiện những tư thế đẹp nhất của bạn và làm cho Instagram của bạn tỏa sáng! Lưu ý: Một lượt đặt chỗ 'người lớn' tương đương với một buổi chụp ảnh cho tối đa sáu người.</Typography>
        </Box>
        <Box className={classes.leftMap}>
          <AppBar position="static">
            <Tabs value={state} onChange={handleChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
            </Tabs>
          </AppBar>
          {state === 0 && <PlaceMap />}
          {state === 1 && <InformationMore />}
        </Box>
      </Box>
      <Box className={classes.right}>
        <Box className={classes.rightTop} >
          <Typography className={classes.title} variant="h5">Chụp ảnh chuyên nghiệp ở Tokyo</Typography>
          <Button variant="contained" fullWidth color="primary">Tìm các tùy chọn</Button>
          <List>
            <ListItem className={classes.titleRightListTop}>
              <Box >
                <FlagOutlined />
                <span>Ngày có sẵn tiếp theo:</span>
              </Box>

              <Typography variant="subtitle1">Thứ sáu, ngày 18 tháng 3 năm 2022</Typography>
            </ListItem>
            <ListItem>
              <FlagOutlined />
              <Typography>Thời lượng: </Typography>
              <Typography>2 giờ</Typography>
            </ListItem>
            <ListItem className={classes.titleRightListTop}>
              <Box>
                <FlagOutlined />
                <span >Dịch vụ có sẵn trong:</span>
              </Box>

              <Typography variant="subtitle1">dịch vụ_language_indonesian service_language_thai
                Dịch vụ tiếng Việt Hàn Quốc tiếng Mã Lai_language_chinese_simplified</Typography>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography>Đặc trưng</Typography>
          <Typography>Hủy miễn phí</Typography>
          <Typography>Chứng nhận tức thì</Typography>
        </Box>
      </Box>

    </Box>
  );
}
