import { Box, Button, Typography } from "@material-ui/core";

import React from "react";
import { useStyles } from "./styles";

export default function NotFound() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.boxRecentSearch}>
        <Box className={classes.boxTrendingNow} mb={6} textAlign="center">
          <Box mt={4}>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/11/22/1574401902388-0a17b33280199cdda4402a2bc088ec0c.svg?tr=q-75,w-150" />
          </Box>
          <Box>
            <Typography>
              Rất tiếc, chúng tôi không thể tìm thấy bất kỳ hoạt động nào
            </Typography>{" "}
            <Typography>
              Xin lỗi! Chúng tôi đã xem xét khắp nơi, nhưng không có hoạt động
              nào được tìm thấy ở điểm đến bạn đã chọn. Tại sao không tìm kiếm
              các địa điểm hoặc thành phố khác và xem liệu bạn có thể tìm thấy
              một địa điểm yêu thích mới không?
            </Typography>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
}
