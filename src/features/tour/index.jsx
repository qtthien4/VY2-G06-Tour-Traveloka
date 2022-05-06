import { Box, Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {
  ArrowRightAltOutlined,
  ArrowRightOutlined,
  PlaceOutlined,
} from "@material-ui/icons";
import { FAKE_API_TYPE_EXPERENCE } from "api/Data/fakeTypeApi";
import Footer from "components/Footer";
import Header from "components/Header";
import Slide from "components/Slide";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "swiper/css/bundle";
import SearchActivities from "../../components/SearchActivities";
import ListTour from "./components/ListTour";
import "./index.css";
import {
  selectListCityTour,
  selectListCountryTour,
  selectListMalaysiaTour,
  selectListSingaporeTour,
  selectListThailandTour,
  selectListType,
  tourActions,
} from "./tourSlice";
import { useStyles } from "./useStylesTour";

export default function Tours() {
  const slideNumber = 5;
  const slideNumberCountry = 4;
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const listCityTourVietName = useSelector(selectListCityTour);
  const ListCountry = useSelector(selectListCountryTour);
  const ListMalaysiaTour = useSelector(selectListMalaysiaTour);
  const ListSingaporeTour = useSelector(selectListSingaporeTour);
  const ListThailandTour = useSelector(selectListThailandTour);

  const listType = useSelector(selectListType);

  //const [listType, setListType] = useState(() => FAKE_API_TYPE_EXPERENCE);
  // useEffect(async () => {
  //   const listType = await fakeTypeApi.getAll();
  //   setListType(listType);
  // }, []);
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

  // useMemo(() => {
  //   if (listType.length === undefined) {
  //     list.current = FAKE_API_TYPE_EXPERENCE.filter(
  //       (arr) => arr.link === nameType
  //     );
  //   } else {
  //     list.current = listType;
  //   }
  // }, [nameType, dispatch]);

  console.log("list 123", state[0]);

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
    navigation(`/activities/search/daytour?idCountry=${idCountry}`);
  };

  function handleOnclickTourForeign(idTour) {
    navigation(`/activities/vietnam/product/${idTour}`);
  }

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

  const imgBanner = useRef();
  const layoutRef = useRef(null);
  const scroll = 256;

  return (
    <div id="tour_root">
      <Header />
      <div id="box_container_tour" className="boxContainerTour">
        <Grid
          ref={layoutRef}
          style={{ padding: 0 }}
          className={classes.container}
          item
          xs={12}
        >
          {/* {console.log(layoutRef)} */}
          <Grid className={classes.root}>
            <div className={classes.backgoundark}>
              <NavLink to="/activities">Xperience</NavLink>/
              <NavLink to="/activities/category/daytour">
                {state[0].nameType}
              </NavLink>
              <Typography variant="h3" className={classes.titleTour}>
                {state[0].nameType}
              </Typography>
              <Box className="header">
                <img
                  id="hidden"
                  ref={imgBanner}
                  className={`${classes.heading_img}`}
                  src={listType.imageType}
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
                {nameType === "transport" ? (
                  <Box mt={-12}></Box>
                ) : (
                  <Box className={classes.contentCity}>
                    <Typography className={classes.title}>
                      {listType.length === undefined
                        ? list.current[0].listCityType.title
                        : listType.listCityType.title}
                    </Typography>
                    <Typography className={classes.titleDescription}>
                      {listType.length === undefined
                        ? list.current[0].listCityType.des
                        : listType.listCityType.des}
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
                    {nameType === "daytour" && state[0].listCountryType.title}
                  </Typography>
                  <Typography className={classes.titleDescription}>
                    {/* {listType.length === undefined
                      ? list.current[0].listCountryType.des
                      : listType.listCountryType.des} */}
                    {nameType === "daytour" && state[0].listCountryType.des}
                  </Typography>
                  <Box mt={4} className={classes.listTourCity}>
                    <Slide
                      listCityofCountry={
                        // listType.length === undefined
                        //   ? list.current[0].listCountryType.listCountry
                        //   : listType.listCountryType.listCountry
                        (nameType === "daytour" &&
                          state[0].listCountryType.listCountry) ||
                        (nameType === "transport" &&
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
                      state[0].listSingaporeType.title) ||
                      (nameType === "transport" &&
                        state[0].listSaigonType.title)}
                  </Typography>
                  <Typography
                    className={classes.titleDescription}
                    style={{ marginBottom: "-10px" }}
                  >
                    {(nameType === "daytour" &&
                      state[0].listSingaporeType.des) ||
                      (nameType === "transport" && state[0].listSaigonType.des)}
                  </Typography>
                  <Box mt={4} className={classes.listTourCity}>
                    <ListTour
                      listTour={
                        (nameType === "daytour" &&
                          state[0].listSingaporeType.listSingapore) ||
                        (nameType === "transport" &&
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
                      state[0].listThailandType.title) ||
                      (nameType === "transport" &&
                        state[0].listNhaTrangType.title)}
                  </Typography>
                  <Typography
                    className={classes.titleDescription}
                    style={{ marginBottom: "-10px" }}
                  >
                    {(nameType === "daytour" &&
                      state[0].listThailandType.des) ||
                      (nameType === "transport" &&
                        state[0].listNhaTrangType.des)}
                  </Typography>
                  <Box mt={4} className={classes.listTourCity}>
                    <ListTour
                      listTour={
                        (nameType === "daytour" &&
                          state[0].listThailandType.listThailand) ||
                        (nameType === "transport" &&
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
                    {(nameType === "daytour" &&
                      state[0].listMalaysiaType.title) ||
                      (nameType === "transport" &&
                        state[0].listHaNoiType.title)}
                  </Typography>
                  <Typography
                    className={classes.titleDescription}
                    style={{ marginBottom: "-10px" }}
                  >
                    {(nameType === "daytour" &&
                      state[0].listMalaysiaType.des) ||
                      (nameType === "transport" && state[0].listHaNoiType.des)}
                  </Typography>
                  <Box mt={4} className={classes.listTourCity}>
                    <ListTour
                      listTour={
                        (nameType === "daytour" &&
                          state[0].listMalaysiaType.listMalaysia) ||
                        (nameType === "transport" &&
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
