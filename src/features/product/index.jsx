import { Box, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Pagination } from '@material-ui/lab';
import Header from 'components/Header';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ExperianceCustomer from './components/ExperianceCustomer';
import SelectTour from './components/SelectTour';
import TourDesDetail from './components/TourDesDetail';
import { useStyles } from './productStyles';

function Product() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.navProduct}>
        <Header/> 
      </Box>
     
       <Box className={classes.rootBoxBig}>
      
      <Box className={classes.rootBox} >

        <Box className={classes.header}>
          <Box>
            <NavLink to="/activities">Xperience</NavLink>/
            <NavLink to="/activities/category/daytour">tour</NavLink> /
          </Box>
          <Box>
            <Button variant="contained" color="primary">Thay đổi tìm kiếm</Button>
          </Box>

        </Box>
        <Paper className={classes.root}>
          <Grid container className={classes.container}>
            <Box>
              <Typography variant="h5" className={classes.tilteProduct}>Ăn tối trên Sông Sài Gòn - Tour Đêm</Typography>
              <Typography variant="body2">Chuyến tham quan</Typography>
              <Box>
                <img height="12" width="12" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0629a9ae0d41e994ff5043f52cbb1b2e.svg" alt="" />
                <Typography variant="body2">Quận 1</Typography>
              </Box>
            </Box>

            <Grid item className={classes.imageBox}>
              <Box className={classes.imageLeft}>
                <img className={classes.imageItem} height="512" width="768" src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-429b876c-9a30-466a-8482-13b6ba51a57d.jpeg?_src=imagekit&tr=c-at_max,h-512,q-60,w-720" />
              </Box>
              <Box className={classes.imageRight}>
                <Box >
                  <img className={classes.imageItem} height="122" width="148" src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-159a44da-8d6a-4194-8520-e6a77c8e2fbc.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-1280,q-60,w-720" />
                </Box>
                <Box>
                  <img className={classes.imageItem} height="122" width="148" src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-7ced567f-685d-40c5-b557-b17102d0f88c.jpeg?_src=imagekit&tr=c-at_max,h-1280,q-60,w-720" />

                </Box>
                <Box>
                  <img className={classes.imageItem} height="122" width="148" src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-072463a9-db44-402f-a947-ea7fddb89801.jpeg?_src=imagekit&tr=c-at_max,h-1280,q-60,w-720" />

                </Box>
                <Box className={classes.seeAllBox}>
                  <div className={classes.seeAll}>
                    <Typography variant="body2">Nhìn thấy tất cả</Typography>
                  </div>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm container className={classes.descriptionTour}>
              <Box >
                <Typography variant="h6">
                  Traveloka
                </Typography>
                <Box>
                  <img height="30" width="30" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/986bcf0f5b0c898a34fd75a917ceefad.svg" alt="" />
                  <span color="primary">8.0 Good</span>
                </Box>
                <Typography>
                  Từ 33 nhận xét
                </Typography>
              </Box>
              <Box className={classes.findSlects}>
                <Typography>Bắt đầu từ</Typography>
                <Typography variant='h5'>500.000 VND</Typography>
                <Button fullWidth variant="contained" color="secondary">TÌm các tùy chọn</Button>
              </Box>
            </Grid>
          </Grid>

        </Paper>

        <Box mt={4}>
          <Box >
            <Typography variant='h5'>Thông tin chi tiết sản phẩm</Typography>
            <Box mt={3}>
              <TourDesDetail />
            </Box>
          </Box>

          <Box mt={4}>
            <Typography>Có sẵn vào các ngày khác</Typography>
            <SelectTour />
            <br />
            <SelectTour />
          </Box>
        </Box>
      </Box>



      {/* <Box mt={4}>
        <ExperianceCustomer />
        <ExperianceCustomer />
        <ExperianceCustomer />
        <ExperianceCustomer />
        <Pagination color="primary" count={9} page={1} />
      </Box> */}

    </Box>
    </Box>
   


  );
}

export default Product;
