import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import SearchActivities from '../../components/SearchActivities';
import { searchActions, SelectListTourOfCity } from '../search/searchSlice';
import ListFilter from './components/ListFilter';
import ListFilterControl from './components/ListFilterControl';
import { SelectPriceAndCommon } from './components/SelectPriceAndCommon';
import TourOfCity from './components/TourOfCity';

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    backgroundColor: "rgba(242,243,243,1.00)"
  },
  headerSearch: {
    width: "70%",
    margin: "auto",
  },
  headerBoxSearch: {
    width: "100%",
    backgroundColor: "white",
  },
  root: {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gridTemplateColumns: '300px 1fr',
    gridTemplateAreas: `'header header' "sidebar main"`,
    width: '1180px',
    minHeight: '100vh',
    margin: "auto"
  },
  header: {
    width: "100%",
    gridArea: 'header',
  },
  headerRoot: {
    width: "100%",
    gridArea: 'header',

  },
  linkActivities: {
    textDecoration: "underline",
    color: "rgb(28, 41, 48)",

  },
  slash: {
    margin: "0px 10px 0px 10px"
  },
  headerExprience: {
    display: "flex",
    flexDirection: "row"
  },
  nameCity: {
    fontWeight: 700,
    fontSize: "32px",
    paddingTop: "30px",
    paddingBottom: "30px"
  },
  sidebar: {
    gridArea: 'sidebar'
  },
  main: {
    grid: 'main',
    marginLeft: "5%",

  },
  mainFilter: {
    boxShadow: "0px 8px 16px rgb(3 18 26 / 20%)",
    backgroundColor: "rgba(255,255,255,1.00)",
    marginBottom: "30px"
  },
  listTourOfCity: {

  },
  resetFilter: {
    fontWeight: 700,
    paddingBottom: "35px",
  },

}))

export default function Search() {
  const classes = useStyles()
  const listCityofTour = useSelector(SelectListTourOfCity);
  const dispatch = useDispatch();
  let location = useLocation();
  const idTour = Number(location.pathname.split("/")[3])
  useEffect(() => {
    dispatch(searchActions.fetchTourList(idTour));
    console.log("ok");
  }, [dispatch, idTour])

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Box className={classes.headerBoxSearch}>
          <Box className={classes.headerSearch}>
            <SearchActivities />
          </Box>
        </Box>
      </Box>
      <Box className={classes.root}>
        <Box className={classes.headerRoot}>
          <Box className={classes.headerExprience}>
            <NavLink className={classes.linkActivities} to="/activities">Xperience</NavLink>
            <span className={classes.slash}>/</span>
            <Typography color="primary" className={classes.resetFilter} >Thành phố Hồ Chí Minh</Typography>
          </Box>
          <Typography className={classes.nameCity} variant="h4">Tất cả kết quả cho Thành phố Hồ Chí Minh</Typography>

        </Box>

        <Box className={classes.sidebar}>
          <Typography className={classes.resetFilter} color="primary" >Đặt lại bộ lọc</Typography>
          <Box >

            <ListFilter />
          </Box>

          <Box>

            <ListFilterControl />
          </Box>

        </Box>
        <Box className={classes.main}>
          <Box className={classes.mainFilter}>
            <SelectPriceAndCommon />
          </Box>


          <Box className={classes.listTourOfCity}>
            <TourOfCity listCityofTour={listCityofTour} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
