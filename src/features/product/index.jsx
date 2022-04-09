import { Box, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Footer from 'components/Footer';
import Header from 'components/Header';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import TourDesDetail from './components/DesTourDetail';
import SelectTour from './components/SelectTour';
import { useStyles } from './indexStyles';
import { productActions, selectTour } from './productSlice';

function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tour = useSelector(selectTour)
  const location = useLocation()
  const idTour = location.pathname.split("/")[4]
 
  useEffect(()=>{
    dispatch(productActions.fetchProduct(idTour))
  },[dispatch,idTour])

  console.log(idTour)
  
  console.log(tour)
  return (
    <Box>
      <Box className={classes.navProduct}>
        <Header/> 
      </Box>
     
       <Box className={classes.rootBoxBig}>
      
      <Box className={classes.rootBox} >

        <Box className={classes.header}>
          <Box>
            <NavLink to="/activities" className={`main-text-link`}>Xperience</NavLink>/
            <NavLink className={`main-text-link`} to="/activities/category/daytour">tour</NavLink> /
          </Box>
          <Box>
            <Button className={`main-bg-button-color-primary main-text-transform`} size="small" variant="contained" color="primary">Thay đổi tìm kiếm</Button>
          </Box>

        </Box>
        <Paper className={classes.root}>
          <Grid container className={classes.container}>
            <Box>
              <Typography variant="h5" className={classes.tilteProduct}>{tour.experienceName}</Typography>
              <Button variant="outlined" disableTouchRipple className={ `${classes.btnDisable} main-text-transform`}>Chuyến tham quan</Button>
              <Box className={`main-d-flex main-align-item-center `}>
                <img height="12" width="12" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0629a9ae0d41e994ff5043f52cbb1b2e.svg" alt="" />
                <Typography variant="body2" className={`main-padding-4px`}>{tour.shortGeoName}</Typography>
              </Box>
            </Box>

            <Grid item className={classes.imageBox}>
              <Box className={classes.imageLeft}>
                <img className={classes.imageItem} height="512" width="768" src={tour.imageUrl}/>
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
                <Typography className={`main-text-color-black `} variant="h6">
                  Traveloka
                </Typography>
                <Box className={`main-d-flex`} >
                  <img height="30" width="30" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/986bcf0f5b0c898a34fd75a917ceefad.svg" alt="" />
                  <Typography className={`main-padding-4px`} color="primary">{tour.score} Good</Typography>
                </Box>
                <Typography className={`main-text-color-black  `} >
                  Từ {tour.totalReview} nhận xét
                </Typography>
              </Box>
              <Box className={classes.findSlects}>
                <Typography className={`main-font-size-text main-text-color-black`}>Bắt đầu từ</Typography>
                <Typography className={`main-text-color-orange main-font-weight`} variant='h5'>{tour.discountedPrice} VND</Typography>
                <Button fullWidth variant="contained" className={`main-bg-button-color-orange main-text-transform main-text-color-white main-font-weight`} >Tìm các tùy chọn</Button>
              </Box>
            </Grid>
          </Grid>

        </Paper>

        <Box mt={4}>
          <Box >
            <Typography  className={`main-font-weight main-font-size-title main-text-color-black`} variant='h5'>Thông tin chi tiết sản phẩm</Typography>
            <Box mt={3}>
              <TourDesDetail />
            </Box>
          </Box>

          <Box mt={4}>
            <Typography variant="h5" className={`main-font-weight main-font-size-title main-text-color-black`}>Có sẵn vào các ngày khác</Typography>
            <Box mt={4}>
              <SelectTour  />
            </Box>
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
    <Footer/>
    </Box>
    </Box>
   


  );
}

export default Product;
