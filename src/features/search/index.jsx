import { Box, Typography } from '@material-ui/core';
import Footer from 'components/Footer';
import Header from 'components/Header';
import RecentSearch from 'components/RecentSearch';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import SearchActivities from '../../components/SearchActivities';
import { searchActions, SelectListTourOfCity } from '../search/searchSlice';
import ListFilter from './components/ListFilter';
import ListFilterControl from './components/ListFilterControl';
import { SelectPriceAndCommon } from './components/SelectPriceAndCommon';
import TourOfCity from './components/TourOfCity';
import { useStyles } from './styleSearch';
const style = {
  marginLeft:"30px",
  marginTop: "-20px",
  position: 'absolute',
  width: "66%",
  bgcolor: 'background.paper',
  boxShadow: "0px 8px 18px rgb(3 18 26 / 13%)",
  zIndex: 10,
  borderRadius: "5px"
};

export default function Search() {
  const navigate = useNavigate()
  const classes = useStyles()
  const listCityofTour = useSelector(SelectListTourOfCity);
  const dispatch = useDispatch();
  let location = useLocation();
  const idTour = Number(location.search.split("&")[3].split("=")[1]) ;

  const handleOnclickTourSearch = (idTour) =>{
    console.log(location)
    navigate(`/activities/vietnam/product/${idTour}`)
  }
  useEffect(() => {
    dispatch(searchActions.fetchTourList(idTour));
  }, [dispatch,idTour])
  

  return (
    <>
      <Header />
      <Box className={classes.container} >
        <Box className={classes.header}>
          <Box className={classes.headerBoxSearch} mb={3}>
            <Box className={classes.headerSearch}>
              <Box className={classes.searchInput}>
                <SearchActivities style={style}/>
              </Box>
            </Box>

          </Box>
        </Box>
        <Box className={classes.root}>
          <Box className={classes.headerRoot}>
            <Box className={classes.headerExprience}>

              <NavLink className={classes.linkActivities} to="/activities">Xperience</NavLink>
              <span className={classes.slash}>/</span>
              <Typography className={classes.linkCity} >Thành phố Hồ Chí Minh</Typography>
            </Box>
            <Typography className={classes.nameCity} variant="h4">Tất cả kết quả cho Thành phố Hồ Chí Minh</Typography>
          </Box>
          <Box className={classes.sidebar}>
            <Typography className={classes.resetFilter} color="primary" >Đặt lại bộ lọc</Typography>
            <ListFilter />
            <ListFilterControl />
          </Box>
          <Box className={classes.main}>
            <Box className={classes.mainFilter}>
              <SelectPriceAndCommon />
            </Box>
            <Box className={classes.listTourOfCity}>
              <TourOfCity listCityofTour={listCityofTour}  handleOnclickTourSearch={handleOnclickTourSearch}/>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>

  );
}
