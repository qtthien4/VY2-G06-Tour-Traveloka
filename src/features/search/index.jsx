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
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import shortid from "shortid";
import { SortTour } from "utils/sort";
import SearchActivities from "../../components/SearchActivities";
import {
  searchActions,
  SelectListTourOfCity,
  SelectFilterPrice,
  selectTour,
} from "../search/searchSlice";
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
  const SelectPriceSort = useSelector(SelectFilterPrice);

  const listCity = useSelector(selectListCity);

  const selectTour1 = useSelector(selectTour);

  const [listTour, setListTour] = useState(selectTour1);
  const listCountry = useSelector(selectListCountry);
  const listFavaurite = JSON.parse(localStorage.getItem("favaurite"));

  //const listTour = JSON.parse(localStorage.getItem("listTour"));
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
  }, [dispatch, location]);

  //onclick navigation product
  const handleOnclickTourSearch = (idTour) => {
    navigate(`/activities/vietnam/product/${idTour}`);
  };
  //handle filter header
  const handleChangeFilterHeader = (e) => {
    let idFilter = e.target.value;
    dispatch(searchActions.setFiterHeader(idFilter));
  };
  const [show, setShow] = useState(true);

  const activity = useRef();

  const [toursFinal, setToursFinal] = useState(listTour);
  useMemo(() => {
    const tours = [];
    //handle favaurite

    // const [tours, setTour] = useState([]);
    if (listTour.length === null) {
      return;
    } else {
      for (let i = 0; i < listTour.length; i++) {
        const tour = { ...listTour[i], isFavaurite: false };
        for (let j = 0; j < listFavaurite.length; j++) {
          if (listFavaurite[j].IdActivity == listTour[i].IdActivity) {
            tour.isFavaurite = true;
          }
        }
        tours.push(tour);
      }
    }

    activity.current = SortTour(tours, SelectPriceSort);
    setToursFinal(activity.current);
  }, [SelectPriceSort]);

  const [id, setId] = useState();
  const [index1, setIndex] = useState();

  //handle delete favourite
  const handleIsFavaurite = useCallback(
    async (idActivity, index) => {
      activity.current[index].isFavaurite = false;
      setId(idActivity);
      setIndex(index);
      const arr = activity.current;
      console.log("ok", index, idActivity, arr);
      setToursFinal(arr);

      await favauriteApi.delete(idActivity);
    },
    [toursFinal, id, activity.current[index1]]
  );

  //handle post favourite
  const handleNoFavaurite = useCallback(
    async (idActivity, index) => {
      activity.current[index].isFavaurite = true;
      setId(idActivity);
      const arr = activity.current;
      console.log("ok em", index, idActivity, arr);
      setToursFinal(arr);

      const favaurite = {
        idFavaurite: shortid.generate(),
        idCustomer: "1997",
        IdActivity: idActivity,
      };
      await favauriteApi.post(favaurite);
    },
    [activity.current[index1], toursFinal, id]
  );

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
                //tours={toursFinal}
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
