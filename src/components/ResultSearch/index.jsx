import { Box, Button, Typography } from "@material-ui/core";

import React from "react";
import { useStyles } from "./styles";

export default function ResultSearch({
  listCountryFilter,
  listTour,
  handleTourInSearch,
  handleOnclickCountries,
}) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.boxRecentSearch}>
        <Box className={classes.boxTrendingNow} mb={3}>
          <Typography className={classes.title}>
            {" "}
            Recommended Keywords for
          </Typography>
          <Box className={classes.boxBtn} mt={3}>
            {listCountryFilter.map((list) => (
              <Button
                onClick={() => handleOnclickCountries(list.IdCountry)}
                variant="outlined"
                size="small"
                className={classes.trenddingBtn}
              >
                {list.CountryName}
              </Button>
            ))}
          </Box>
        </Box>

        <Typography variant="h4" className={classes.title}>
          Recommended Areas to Explore
        </Typography>

        <Box mt={3} className={classes.boxTourSearch}>
          {listTour.map((list) => (
            <Box
              key={list.IdActivity}
              onClick={() => handleTourInSearch(list.IdActivity)}
              className={`${classes.tourSearch}`}
            >
              <Box
                style={{
                  boxShadow: "rgb(0 0 0 / 22%) 0px 1px 2.22px",
                  borderRadius: "8px",
                }}
              >
                <img
                  className={classes.imgTourSearch}
                  height="105"
                  width="140"
                  src={list.ImageUrl}
                ></img>
              </Box>

              <Box ml={2}>
                <div
                  className={classes.nameSearchResult}
                  style={{
                    fontWeight: 600,
                    paddingRight: "10px",
                    WebkitLineClamp: 2,
                    height: "50px",
                    textAlign: "left",
                  }}
                >
                  {list.ActivityName}
                </div>

                <Box className="d-flex main-align-item-center">
                  <img
                    height="12"
                    width="12"
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0629a9ae0d41e994ff5043f52cbb1b2e.svg"
                  />
                  <Typography className="main-padding-4px">
                    {list.Location}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
