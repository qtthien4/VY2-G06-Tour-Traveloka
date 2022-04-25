import { Box, Typography } from "@material-ui/core";
import favauriteApi from "api/ApiReal/favauriteApi";
import Footer from "components/Footer";
import Header from "components/Header";
import { cityActions, selectListCity } from "features/City/citySlice";
import {
  countryActions,
  selectListCountry,
} from "features/Country/countrySlice";
import { favauriteActions } from "features/Favaurite/favauriteSlice";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import shortid from "shortid";
import SearchActivities from "../../components/SearchActivities";
import { searchActions, SelectListTourOfCity } from "../search/searchSlice";
import ListFilter from "./components/ListFilter";
import ListFilterControl from "./components/ListFilterControl";
import { SelectPriceAndCommon } from "./components/SelectPriceAndCommon";
import TourOfCity from "./components/TourOfCity";
import { useStyles } from "./styleSearch";

const style = {
  marginLeft: "0px",
  marginTop: "0px",
  position: "absolute",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: "0px 8px 18px rgb(3 18 26 / 13%)",
  zIndex: 10,
  borderRadius: "5px",
};

export default function Search() {
  const scroll = 0;
  const navigate = useNavigate();
  const classes = useStyles();
  const listCityofTour = useSelector(SelectListTourOfCity);
  const listCity = useSelector(selectListCity);
  const listCountry = useSelector(selectListCountry);
  const listFavaurite = JSON.parse(localStorage.getItem("favaurite"));
  const listTour = JSON.parse(localStorage.getItem("listTour"));
  const dispatch = useDispatch();
  let location = useLocation();

  var nameCity = "";
  var nameCountry = "";

  const [namCity, setNameCity] = useState("");
  const [namCountry, setNameCountry] = useState("");

  useEffect(() => {
    if (location.search.split("&").length > 1) {
      let id = Number(location.search.split("&")[1].split("=")[1]);

      nameCity = JSON.parse(localStorage.getItem("city")).filter(
        (city) => city.experienceId === String(id)
      )[0].name;
      setNameCity(nameCity);
      dispatch(searchActions.fetchTourList(id));
      dispatch(cityActions.fetchApiCity());
      dispatch(favauriteActions.fetchApiFavaurite());
    } else {
      let id = Number(location.search.split("=")[1]);
      nameCountry = JSON.parse(localStorage.getItem("country")).filter(
        (country) => country.IdCountry.trim() === String(id)
      )[0].CountryName;
      setNameCountry(nameCountry);
      //dispatch(imageActions.fetchApiImage(listCityofTour.IdActivity));
      dispatch(searchActions.fetchTourCountryList(id));
      dispatch(countryActions.fetchApiCountry());
      dispatch(favauriteActions.fetchApiFavaurite());
    }
  }, [dispatch, location, listCity, listCountry]);

  //onclick navigation product
  const handleOnclickTourSearch = (idTour) => {
    navigate(`/activities/vietnam/product/${idTour}`);
  };
  //handle filter header
  const handleChangeFilterHeader = (e) => {
    let idFilter = e.target.value;
    dispatch(searchActions.setFiterHeader(idFilter));
  };

  //handle favaurite
  const tours = [];
  // const [tours, setTour] = useState([]);

  const [show, setShow] = useState(true);
  console.log(listFavaurite.length, listTour);
  useMemo(() => {
    for (let i = 0; i < listTour.length; i++) {
      const tour = { ...listTour[i], isFavaurite: false };
      for (let j = 0; j < listFavaurite.length; j++) {
        if (listFavaurite[j].IdActivity == listTour[i].IdActivity) {
          tour.isFavaurite = true;
        }
      }
      tours.push(tour);
    }
  }, [listFavaurite]);

  // handle
  console.log("tours", tours);
  // const [tourMain, setTourMain] = useState(tours);
  // console.log("tourMain", tourMain);
  //handle post favaurite

  // useEffect(() => {
  //   if (listFavaurite.idFavaurite) setShow(true);
  //   setShow(false);
  // }, [listFavaurite.idFavaurite]);

  //post api favaurite
  // const handleClickFavaurite = async (id) => {
  //   console.log(id);
  //   const favaurite = {
  //     idFavaurite: shortid.generate(),
  //     idCustomer: "1997",
  //     IdActivity: id,
  //   };
  //   await favauriteApi.post(favaurite);
  // };

  //handle delete favourite
  const handleIsFavaurite = async (idActivity) => {
    console.log("isFavaurite", idActivity);
    await favauriteApi.delete(idActivity);
  };

  //handle post favourite
  const [tourFinal, setTourFinal] = useState(tours);
  const handleNoFavaurite = async (idActivity, flag) => {
    console.log("flag", flag, idActivity);
    const arr = tourFinal.find((arr) => arr.IdActivity === idActivity);
    const arr1 = tourFinal.filter((arr) => arr.IdActivity !== idActivity);

    const arr2 = { ...arr, isFavaurite: true };

    arr1.push(arr2);
    setTourFinal(arr1);
    console.log("NoFavaurite", idActivity, arr1);
    const favaurite = {
      idFavaurite: shortid.generate(),
      idCustomer: "1997",
      IdActivity: idActivity,
    };
    await favauriteApi.post(favaurite);
  };

  return (
    <>
      <Header />
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Box className={classes.headerBoxSearch} mb={3}>
            <Box className={classes.headerSearch}>
              <Box className={classes.searchInput}>
                <SearchActivities style={style} scroll={scroll} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.root}>
          <Box className={classes.headerRoot}>
            <Box className={classes.headerExprience}>
              <NavLink className={classes.linkActivities} to="/activities">
                Xperience
              </NavLink>
              <span className={classes.slash}>/</span>
              <Typography className={classes.linkCity}></Typography>
            </Box>
            <Typography
              className={classes.nameCity}
              variant="h4"
            >{`Tất cả kết quả cho  ${namCity} ${namCountry}
            `}</Typography>
          </Box>
          <Box className={classes.sidebar}>
            <Typography className={classes.resetFilter} color="primary">
              Đặt lại bộ lọc
            </Typography>
            <ListFilter />
            <ListFilterControl />
          </Box>
          <Box className={classes.main}>
            <Box className={classes.mainFilter}>
              <SelectPriceAndCommon
                handleChangeFilterHeader={handleChangeFilterHeader}
              />
            </Box>
            <Box className={classes.listTourOfCity}>
              <TourOfCity
                handleNoFavaurite={handleNoFavaurite}
                handleIsFavaurite={handleIsFavaurite}
                // tours={tourFinal}
                tours={listCityofTour}
                handleOnclickTourSearch={handleOnclickTourSearch}
              />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
