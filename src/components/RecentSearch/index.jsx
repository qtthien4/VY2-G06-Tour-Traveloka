import { Box, Button, ListItem, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { List } from "reactstrap";
import "./index.css";
import { useStyles } from "./useStyleRecentSearch";
export default function RecentSearch({
  listKeySearch,
  listCountry,
  handleOnclickCountries,
}) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.boxRecentSearch}>
        <Typography variant="h4" className={classes.title}>
          Tìm kiếm gần đây
        </Typography>
        <Box>
          <List className={classes.rootList} disablePadding={false}>
            <ListItem className={classes.list}>
              {listKeySearch.map((list) => (
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  <Box textAlign="left" className="boxNameRecentSearch">
                    <span className="nameRecentSearch">{list.keyword}</span>{" "}
                    <br />
                    <Typography variant="caption">Tìm kiếm gần đây</Typography>
                  </Box>
                </Button>
              ))}
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box className={classes.boxTrendingNow}>
        <Typography className={classes.title}>Đang là xu hướng</Typography>
        <Box className={classes.boxBtn} mt={2} mb={2}>
          {listCountry.map((list) => (
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
    </Box>
  );
}
