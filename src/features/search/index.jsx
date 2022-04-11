import { Box, Typography } from '@material-ui/core';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { cityActions, selectListCity, selectListCityLoadding } from 'features/City/citySlice';
import { countryActions, selectListCountry } from 'features/Country/countrySlice';
import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate,useParams } from 'react-router-dom';
import { getIdCity } from 'utils/getIdCity';
import { InsertionSort, selectionSort, sortMax } from 'utils/InsertionSort';
import SearchActivities from '../../components/SearchActivities';
import { searchActions, SelectFilterPrice, SelectListTourOfCity } from '../search/searchSlice';
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
  const listCity = useSelector(selectListCity);
  const listCountry = useSelector(selectListCountry);
  const filterPrice = useSelector(SelectFilterPrice);
  // console.log(selectionSort([2,3,7,5,4,1]));
 
  const items = [...listCityofTour];
  console.log(  items.sort(function(a, b){return Number(a.totalReview )- Number(b.totalReview)}))
    


  const dispatch = useDispatch();
  let location = useLocation();
  
  const [nameCity, setNameCity] = useState('');
  const [nameCountry, setNameCountry] = useState('')

  //handle link export list tour


  // const name = listCity.find((list)=> String(list.experienceId) === String(idCity))
  // console.log(name.name);
  useEffect(()=>{
    if(location.search.split("&").length > 1){
      let id = Number(location.search.split("&")[1].split("=")[1])
      
      dispatch(searchActions.fetchTourList(id));
      dispatch(cityActions.fetchApiCity())
      // const name = listCity.find((list)=> String(list.experienceId) === String(id))
      // setNameCity(name.name)
    }
    else{
      let id = Number(location.search.split("=")[1])
      dispatch(searchActions.fetchTourCountryList(id));
      dispatch(countryActions.fetchApiCountry())
      // const name = listCountry.find((list)=> String(list.idCountry) === String(id))
      // setNameCountry(name.name)
    }
  },[dispatch,location,nameCity,nameCountry,listCity,listCountry])

  //onclick navigation product
  const handleOnclickTourSearch = (idTour) => {  
    navigate(`/activities/vietnam/product/${idTour}`)
  }

  //handle filter header
  const handleChangeFilterHeader = (e) =>{
    console.log(e.target.value)
    let idFilter =  e.target.value
    dispatch(searchActions.setFiterHeader(idFilter))
  }
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
              <Typography className={classes.linkCity} >{`${nameCity} ${nameCountry} `}</Typography>
            </Box>
            <Typography className={classes.nameCity} variant="h4">{`Tất cả kết quả cho ${nameCity} ${nameCountry} 
            `}</Typography>
          </Box>
          <Box className={classes.sidebar}>
            <Typography className={classes.resetFilter} color="primary" >Đặt lại bộ lọc</Typography>
            <ListFilter />
            <ListFilterControl />
          </Box>
          <Box className={classes.main}>
            <Box className={classes.mainFilter}>
              <SelectPriceAndCommon handleChangeFilterHeader={handleChangeFilterHeader} />
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
