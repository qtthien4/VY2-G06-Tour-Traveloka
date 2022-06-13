import { Box, Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {
  ArrowRightAltOutlined,
  ArrowRightOutlined,
  PlaceOutlined,
} from "@material-ui/icons";
import { FAKE_API_TYPE_EXPERENCE } from "api/Data/fakeDataTypeApi";
import Footer from "components/Footer";
import Slide from "components/Slide";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "swiper/css/bundle";
import SearchActivities from "../../components/SearchActivities";
import ListTour from "./components/ListTour";
import "./index.css";
import { selectListType, tourActions } from "./tourSlice";
import { useStyles } from "./useStylesTour";
const style = {
  marginTop: "10px",
  position: "absolute",
  top: "100%",
  left: "0%",
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: "0px 8px 18px rgb(3 18 26 / 13%)",
  zIndex: 10,
  borderRadius: "5px",
};

export default function Tours() {
  const imgBanner = useRef();
  const layoutRef = useRef(null);
  const scroll = 256;

  const slideNumber = 5;
  const slideNumberCountry = 4;
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const listType = useSelector(selectListType);
  const location = useLocation();
  const nameType = location.pathname.split("/")[3];
  const list = useRef();

  const [state, setState] = useState(() => {
    if (listType.length === undefined) {
      list.current = FAKE_API_TYPE_EXPERENCE.filter(
        (arr) => arr.link === nameType
      );
    } else {
      list.current = listType;
    }
    return list.current;
  });

  useEffect(() => {
    dispatch(tourActions.fetchApiTour(String(nameType)));
    //dispatch(xprerienceActions.fetchApiXprerience(nameType));
  }, [dispatch, nameType]);

  const handleOnclickListTourVN = (idCity, idCountry) => {
    navigation(
      `/activities/search/daytour?idCountry=${idCountry}&idCity=${idCity}`
    );
  };
  const handleOnclickListCountry = (idTourVN, idCountry) => {
    const idCountry1 = idCountry.trim();
    navigation(`/activities/search/${nameType}?idCountry=${idCountry1}`);
  };

  function handleOnclickTourForeign(idTour) {
    navigation(`/activities/product/${idTour}`);
  }

  return (
    <div id="tour_root">
      {/* <Header user1={user} /> */}
      <div id="box_container_tour" className="boxContainerTour">
        <Grid
          ref={layoutRef}
          style={{ padding: 0 }}
          className={classes.container}
          item
          xs={12}
        >
          <Grid className={classes.root}>
            <div className={classes.backgoundark}>
              <NavLink to="/activities">Xperience</NavLink>/
              {/* <NavLink to={`/activities/category/${nameType}`}>
                {state[0].nameType}
              </NavLink> */}
              <Typography variant="h3" className={classes.titleTour}>
                {state[0].nameType}
              </Typography>
              <Box className="header">
                <img
                  alt="img1"
                  id="hidden"
                  ref={imgBanner}
                  className={`${classes.heading_img}`}
                  src={state[0].imageType}
                ></img>

                <Box className={classes.boxSearchandRecentSearch}>
                  <Box className={`${classes.searchInput} searchInput`}>
                    <SearchActivities
                      layoutRef={layoutRef}
                      style={style}
                      scroll={scroll}
                    />
                  </Box>

                  {/* <Box ref = {recentSearchesRef}  sx={style} className={`${classes.recentSearchBox} recentSearches`}>
                           <RecentSearch  /> 
                       </Box>                                          */}
                </Box>

                <Box id="hidden">
                  <Box className={classes.filterWithPlace}>
                    <Box className={classes.iconPlaceAndText} mr={4}>
                      <PlaceOutlined className={classes.fontWeight} />
                      <Typography
                        variant="subtitle1"
                        className={classes.fontWeight}
                      >
                        Vị trí hiện tại của bạn
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        size="small"
                        className={classes.btnPlace}
                        variant="outlined"
                      >
                        <Typography
                          variant="subtitle2"
                          className={classes.fontWeight}
                        >
                          Việt Nam
                        </Typography>
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        className={classes.btnPlaceFilter}
                      >
                        <Typography variant="subtitle2">Thay đổi</Typography>
                      </Button>
                    </Box>
                  </Box>
                  <Button
                    className={classes.btnDiscovery}
                    size="small"
                    variant="contained"
                  >
                    <Typography
                      variant="caption"
                      className={classes.fontWeight}
                    >
                      Khám phá các hoạt động ở vị trí của bạn
                    </Typography>
                    <ArrowRightAltOutlined />
                  </Button>
                </Box>
              </Box>
              <Box className={classes.content} id="hidden">
                {nameType === "transport" ||
                nameType === "attraction" ||
                nameType === "playground" ||
                nameType === "sport" ? (
                  <Box mt={-12}></Box>
                ) : (
                  <Box className={classes.contentCity}>
                    <Typography className={classes.title}>
                      {state[0].length === undefined
                        ? list.current[0].listCityType.title
                        : state[0].listCityType.title}
                    </Typography>
                    <Typography className={classes.titleDescription}>
                      {state[0].length === undefined
                        ? list.current[0].listCityType.des
                        : state[0].listCityType.des}
                    </Typography>
                    <Box mt={4} className={classes.listTourCity}>
                      <Slide
                        listCityofCountry={state[0].listCityType.listCity}
                        slideNumber={slideNumber}
                        handleOnclickListTour={handleOnclickListTourVN}
                      />
                    </Box>
                  </Box>
                )}

                <Box className={classes.contentCity}>
                  <Typography
                    className={classes.title}
                    style={{ marginTop: "100px" }}
                  >
                    {(nameType === "daytour" &&
                      state[0].listCountryType.title) ||
                      (nameType === "attraction" &&
                        state[0].listCountryType.title) ||
                      (nameType === "playground" &&
                        state[0].listCountryType.title) ||
                      (nameType === "sport" && state[0].listCountryType.title)}
                  </Typography>
                  <Typography className={classes.titleDescription}>
                    {/* {state[0].length === undefined
                      ? list.current[0].listCountryType.des
                      : listType.listCountryType.des} */}
                    {(nameType === "daytour" && state[0].listCountryType.des) ||
                      (nameType === "attraction" &&
                        state[0].listCountryType.des) ||
                      (nameType === "playground" &&
                        state[0].listCountryType.des) ||
                      (nameType === "sport" && state[0].listCountryType.des)}
                  </Typography>
                  <Box mt={4} className={classes.listTourCity}>
                    <Slide
                      listCityofCountry={
                        (nameType === "daytour" &&
                          state[0].listCountryType.listCountry) ||
                        (nameType === "transport" &&
                          state[0].listCountryType.listCountry) ||
                        (nameType === "attraction" &&
                          state[0].listCountryType.listCountry) ||
                        (nameType === "playground" &&
                          state[0].listCountryType.listCountry) ||
                        (nameType === "sport" &&
                          state[0].listCountryType.listCountry)
                      }
                      slideNumber={slideNumber}
                      handleOnclickListTour={handleOnclickListCountry}
                    />
                  </Box>
                </Box>

                {/* ListTour */}
                <Box className={classes.contentCity}>
                  <Typography
                    className={classes.title}
                    style={{ marginTop: "100px" }}
                  >
                    {(nameType === "daytour" &&
                      state[0].listSaigonType.title) ||
                      (nameType === "transport" &&
                        state[0].listSaigonType.title) ||
                      (nameType === "attraction" &&
                        state[0].listSaigonType.title) ||
                      (nameType === "playground" &&
                        state[0].listSaigonType.title) ||
                      (nameType === "sport" && state[0].listSaigonType.title)}
                  </Typography>
                  <Typography
                    className={classes.titleDescription}
                    style={{ marginBottom: "-10px" }}
                  >
                    {(nameType === "daytour" && state[0].listSaigonType.des) ||
                      (nameType === "transport" &&
                        state[0].listSaigonType.des) ||
                      (nameType === "attraction" &&
                        state[0].listSaigonType.des) ||
                      (nameType === "playground" &&
                        state[0].listSaigonType.des) ||
                      (nameType === "sport" && state[0].listSaigonType.des)}
                  </Typography>
                  <Box mt={4} className={classes.listTourCity}>
                    <ListTour
                      listTour={
                        (nameType === "daytour" &&
                          state[0].listSaigonType.listSaigon) ||
                        (nameType === "transport" &&
                          state[0].listSaigonType.listSaigon) ||
                        (nameType === "attraction" &&
                          state[0].listSaigonType.listSaigon) ||
                        (nameType === "playground" &&
                          state[0].listSaigonType.listSaigon) ||
                        (nameType === "sport" &&
                          state[0].listSaigonType.listSaigon)
                      }
                      slideNumber={slideNumberCountry}
                      handleOnclickTourForeign={handleOnclickTourForeign}
                    />
                  </Box>
                  <Box className={classes.boxlinkBottomToTour}>
                    <Typography
                      className={classes.linkBottomToTour}
                      color="primary"
                      align="right"
                    >
                      Xem tất cả các hoạt động{" "}
                    </Typography>
                    <ArrowRightOutlined />
                  </Box>
                </Box>

                <Box className={classes.contentCity}>
                  <Typography
                    className={classes.title}
                    style={{ marginTop: "-10px" }}
                  >
                    {(nameType === "daytour" &&
                      state[0].listNhaTrangType.title) ||
                      (nameType === "transport" &&
                        state[0].listNhaTrangType.title) ||
                      (nameType === "attraction" &&
                        state[0].listNhaTrangType.title) ||
                      (nameType === "playground" &&
                        state[0].listNhaTrangType.title) ||
                      (nameType === "sport" && state[0].listNhaTrangType.title)}
                  </Typography>
                  <Typography
                    className={classes.titleDescription}
                    style={{ marginBottom: "-10px" }}
                  >
                    {(nameType === "daytour" &&
                      state[0].listNhaTrangType.des) ||
                      (nameType === "transport" &&
                        state[0].listNhaTrangType.des) ||
                      (nameType === "attraction" &&
                        state[0].listNhaTrangType.des) ||
                      (nameType === "playground" &&
                        state[0].listNhaTrangType.des) ||
                      (nameType === "sport" && state[0].listNhaTrangType.des)}
                  </Typography>
                  <Box mt={4} className={classes.listTourCity}>
                    <ListTour
                      listTour={
                        (nameType === "daytour" &&
                          state[0].listNhaTrangType.listNhaTrang) ||
                        (nameType === "transport" &&
                          state[0].listNhaTrangType.listNhaTrang) ||
                        (nameType === "attraction" &&
                          state[0].listNhaTrangType.listNhaTrang) ||
                        (nameType === "playground" &&
                          state[0].listNhaTrangType.listNhaTrang) ||
                        (nameType === "sport" &&
                          state[0].listNhaTrangType.listNhaTrang)
                      }
                      slideNumber={slideNumberCountry}
                      handleOnclickTourForeign={handleOnclickTourForeign}
                    />
                  </Box>
                  <Box className={classes.boxlinkBottomToTour}>
                    <Typography color="primary" align="right">
                      Xem tất cả các hoạt động{" "}
                    </Typography>
                    <ArrowRightOutlined />
                  </Box>
                </Box>

                <Box className={classes.contentCity}>
                  <Typography
                    className={classes.title}
                    style={{ marginTop: "-10px" }}
                  >
                    {(nameType === "daytour" && state[0].listHaNoiType.title) ||
                      (nameType === "transport" &&
                        state[0].listHaNoiType.title) ||
                      (nameType === "attraction" &&
                        state[0].listHaNoiType.title) ||
                      (nameType === "playground" &&
                        state[0].listHaNoiType.title) ||
                      (nameType === "sport" && state[0].listHaNoiType.title)}
                  </Typography>
                  <Typography
                    className={classes.titleDescription}
                    style={{ marginBottom: "-10px" }}
                  >
                    {(nameType === "daytour" && state[0].listHaNoiType.des) ||
                      (nameType === "transport" &&
                        state[0].listHaNoiType.des) ||
                      (nameType === "attraction" &&
                        state[0].listHaNoiType.des) ||
                      (nameType === "playground" &&
                        state[0].listHaNoiType.des) ||
                      (nameType === "sport" && state[0].listHaNoiType.des)}
                  </Typography>
                  <Box mt={4} className={classes.listTourCity}>
                    <ListTour
                      listTour={
                        (nameType === "daytour" &&
                          state[0].listHaNoiType.listHaNoi) ||
                        (nameType === "transport" &&
                          state[0].listHaNoiType.listHaNoi) ||
                        (nameType === "attraction" &&
                          state[0].listHaNoiType.listHaNoi) ||
                        (nameType === "playground" &&
                          state[0].listHaNoiType.listHaNoi) ||
                        (nameType === "sport" &&
                          state[0].listHaNoiType.listHaNoi)
                      }
                      slideNumber={slideNumberCountry}
                      handleOnclickTourForeign={handleOnclickTourForeign}
                    />
                  </Box>
                  <Box className={classes.boxlinkBottomToTour}>
                    <Typography color="primary" align="right">
                      Xem tất cả các hoạt động{" "}
                    </Typography>
                    <ArrowRightOutlined />
                  </Box>
                </Box>
              </Box>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}
