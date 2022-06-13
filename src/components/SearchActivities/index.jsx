import { Box, Button, Input } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import NotFound from "components/NotFount";
import RecentSearch from "components/RecentSearch";
import ResultSearch from "components/ResultSearch";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  cityActions,
  countryActions,
  selectListCountry,
  selectListCountryFilter,
} from "features/Country/countrySlice";
import {
  listRemainingSelectorTourSearch,
  searchActivityActions,
} from "./searchActivitySlice";
import searchApi from "../../api/ApiReal/searchApi";
import {
  keysearchActions,
  selectListKeysearch,
} from "features/Keysearch/keysearchSlice";
import { AuthContext } from "context/AuthProvider";

const useStyles = makeStyles((theme) => ({
  contained: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    padding: "16px",
    margin: "16px",
    width: "97%",
  },
  root: {
    borderRadius: "8px",
    width: "100%",
    position: "relative",
    margin: "auto",
    background: "white",
    zIndex: 5,
  },
  inputBox: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    border: `1px solid #ccc`,
    width: "100%",
    marginRight: "3%",
    borderRadius: "8px",
  },
  input: {
    lineHeight: "24px",
  },
  icon: {
    margin: "1%",
  },
  btn: {
    color: "white",
    backgroundColor: "rgb(1, 148, 243)",
    minWidth: "140px",
    "&:hover": {
      backgroundColor: "rgb(1, 148, 243)",
    },
  },
  searchInputOverlay: {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 3,
    position: "fixed",
    display: "none",
    overflow: "hidden",
  },
}));

export default function SearchActivities({ style, layoutRef, scroll }) {
  const classes = useStyles();
  const user = useContext(AuthContext);
  console.log("user", user);
  const inputRef = useRef();
  const searchOverlay = useRef();
  const recentSearchesRef = useRef();
  const recentSearchesRef1 = useRef();
  const [searchText, setSearchText] = useState("");
  const listTour = useSelector(listRemainingSelectorTourSearch);

  const listKeySearch = useSelector(selectListKeysearch);

  const listCountry = useSelector(selectListCountry);
  const listCountryFilter = useSelector(selectListCountryFilter);

  const dispatch = useDispatch();

  const handleOpenModel = () => {
    window.scroll(0, scroll);
    recentSearchesRef.current.style.display = "block";
    searchOverlay.current.style.display = "block";
    searchOverlay.current.style.backgroundColor = "rgba(3, 18, 26, 0.8)";
    document.querySelector("body").style.overflow = "hidden";
  };

  const handleCloseModel = () => {
    recentSearchesRef.current.style.display = "none";
    searchOverlay.current.style.display = "none";
    recentSearchesRef1.current.style.display = "none";
    document.querySelector("body").style.overflowY = "scroll";
  };

  //handle search change
  useEffect(() => {
    dispatch(searchActivityActions.fetchSearchActivity(searchText));
    dispatch(searchActivityActions.setFilterSearchChangeInput(searchText));
    dispatch(keysearchActions.fetchApiKeysearch(user ? user.sub : "1"));
    dispatch(countryActions.fetchApiCountrySearch());
    dispatch(countryActions.fetchApiCountryFilter(searchText));
  }, [dispatch, searchText]);

  const handleInputSearchChange = (e) => {
    const value = e.target.value;

    if (value.length >= 1 || value !== "") {
      recentSearchesRef.current.style.display = "none";
      recentSearchesRef1.current.style.display = "block";
    } else {
      recentSearchesRef.current.style.display = "block";
      recentSearchesRef1.current.style.display = "none";
    }
    setSearchText(e.target.value);
  };

  const navigate = useNavigate();

  const handleOnButtonSearch = () => {
    const params = {
      idCustomer: user ? user.sub : "1",
      q: searchText,
    };
    searchApi.postTextSearch(params);
    setSearchText("");
  };
  const handleTourInSearch = (idActivity) => {
    navigate(`/activities/product/${idActivity}`);
    document.querySelector("body").style.overflowY = "scroll";
  };
  const handleOnclickCountries = (idCountry, nameType) => {
    navigate(`/activities/search/daytour?idCountry=${idCountry}`);
    document.querySelector("body").style.overflowY = "scroll";
    recentSearchesRef.current.style.display = "none";
    searchOverlay.current.style.display = "none";
    recentSearchesRef1.current.style.display = "none";
  };

  return (
    <>
      <div
        onClick={handleCloseModel}
        ref={searchOverlay}
        className={classes.searchInputOverlay}
      ></div>
      <Box className={classes.root}>
        <Box className={classes.contained}>
          {/* <SearchForm handleOpenModel={handleOpenModel} handleInputSearchChange={handleInputSearchChange} initialValue={initialValue} onSubmit = {handleSearchFormSubmit}/> */}
          <Box className={classes.inputBox}>
            <SearchOutlined className={classes.icon} />
            <Input
              name="nameTour"
              onChange={(e) => handleInputSearchChange(e)}
              inputRef={inputRef}
              onFocus={handleOpenModel}
              className={classes.input}
              disableUnderline
              fullWidth
              placeholder="Mời nhập tìm kiếm"
              value={searchText}
            ></Input>
          </Box>
          <Button
            onClick={handleOnButtonSearch}
            type="submit"
            className={classes.btn}
            size="large"
            variant="contained"
          >
            Search
          </Button>
        </Box>
      </Box>

      <Box
        mt={3}
        ref={recentSearchesRef}
        sx={style}
        style={{ display: "none" }}
      >
        {searchText === "" && (
          <RecentSearch
            handleOnclickCountries={handleOnclickCountries}
            listCountry={listCountry}
            listKeySearch={listKeySearch}
          />
        )}
      </Box>

      <Box
        mt={3}
        ref={recentSearchesRef1}
        sx={style}
        style={{ display: "none" }}
      >
        {listTour.length >= 1 || listCountryFilter.length >= 1 ? (
          <ResultSearch
            handleOnclickCountries={handleOnclickCountries}
            listCountryFilter={listCountryFilter}
            handleTourInSearch={handleTourInSearch}
            listTour={listTour}
          />
        ) : searchText == "" ? (
          <RecentSearch
            listCountry={listCountry}
            listKeySearch={listKeySearch}
          />
        ) : (
          <NotFound />
        )}
      </Box>
    </>
  );
}
