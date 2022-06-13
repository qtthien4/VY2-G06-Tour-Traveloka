import { Box, Typography } from "@material-ui/core";
import Footer from "components/Footer";
import Header from "components/Header";
import { AuthContext } from "context/AuthProvider";
import { cityActions, selectNameCity } from "features/City/citySlice";
import {
  countryActions,
  selectCountryName,
} from "features/Country/countrySlice";
import { favauriteActions } from "features/Favaurite/favauriteSlice";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchActivities from "../../components/SearchActivities";
import {
  searchActions,
  SelectFilterPrice,
  SelectListTourOfCity,
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
  const user = useContext(AuthContext);
  let location = useLocation();
  const classes = useStyles();
  let Type = location.pathname.split("/")[3];
  const listCityofTour = useSelector(SelectListTourOfCity);

  const nameCityOK = useSelector(selectNameCity);
  const CountryCityOK = useSelector(selectCountryName);

  const renderName = useCallback(() => {
    if (location.search.split("&").length > 1) {
      return <>{nameCityOK}</>;
    } else {
      return <>{CountryCityOK}</>;
    }
  }, [nameCityOK, CountryCityOK]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.search.split("&").length > 1) {
      let id = Number(location.search.split("&")[1].split("=")[1]);
      let nameType = location.pathname.split("/")[3];
      dispatch(searchActions.fetchTourList({ id, nameType }));
      dispatch(cityActions.fetchApiCity(id));
      dispatch(favauriteActions.fetchApiFavaurite());
    } else {
      let id = Number(location.search.split("=")[1]);
      let nameType = location.pathname.split("/")[3];
      dispatch(searchActions.fetchTourCountryList({ id, nameType }));
      dispatch(countryActions.fetchApiCountry(id));
      dispatch(favauriteActions.fetchApiFavaurite());
    }
  }, [dispatch, location, Type]);

  //onclick navigation product
  const handleOnclickTourSearch = (idTour) => {
    navigate(`/activities/product/${idTour}`);
  };
  //handle filter header
  const handleChangeFilterHeader = (e) => {
    let idFilter = e.target.value;
    dispatch(searchActions.setFiterHeader(idFilter));
  };
  // const [show, setShow] = useState(true);

  // const activity = useRef();

  // const [toursFinal, setToursFinal] = useState(listTour);
  // useMemo(() => {
  //   const tours = [];
  //   //handle favaurite

  //   // const [tours, setTour] = useState([]);
  //   if (listTour.length > 0) {
  //     for (let i = 0; i < listTour.length; i++) {
  //       const tour = { ...listTour[i], isFavaurite: false };
  //       for (let j = 0; j < listFavaurite.length; j++) {
  //         if (listFavaurite[j].IdActivity == listTour[i].IdActivity) {
  //           tour.isFavaurite = true;
  //         }
  //       }
  //       tours.push(tour);
  //     }
  //   } else {
  //     console.log("ok");
  //   }

  //   activity.current = SortTour(tours, SelectPriceSort);
  //   setToursFinal(activity.current);
  // }, [SelectPriceSort]);

  // const [id, setId] = useState();
  // const [index1, setIndex] = useState();

  // //handle delete favourite
  // const handleIsFavaurite = useCallback(
  //   async (idActivity, index) => {
  //     activity.current[index].isFavaurite = false;
  //     setId(idActivity);
  //     setIndex(index);
  //     const arr = activity.current;

  //     setToursFinal(arr);

  //     await favauriteApi.delete(idActivity);
  //   },
  //   [toursFinal, id, activity.current[index1]]
  // );

  // //handle post favourite
  // const handleNoFavaurite = useCallback(
  //   async (idActivity, index) => {
  //     activity.current[index].isFavaurite = true;
  //     setId(idActivity);
  //     const arr = activity.current;
  //     console.log("ok em", index, idActivity, arr);
  //     setToursFinal(arr);

  //     const favaurite = {
  //       idFavaurite: shortid.generate(),
  //       idCustomer: "1997",
  //       IdActivity: idActivity,
  //     };
  //     await favauriteApi.post(favaurite);
  //   },
  //   [activity.current[index1], toursFinal, id]
  // );

  return (
    <>
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
              <NavLink
                className={classes.linkActivities}
                to={`/activities/category/${Type}`}
                //className={classes.linkCity}
              >
                {Type}
              </NavLink>
            </Box>
            <Typography className={classes.nameCity} variant="h4">
              {`Tất cả kết quả cho`} {renderName()}
            </Typography>
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
                // handleNoFavaurite={handleNoFavaurite}
                // handleIsFavaurite={handleIsFavaurite}
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
