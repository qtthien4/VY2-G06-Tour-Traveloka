import { Box, Button, ListItem, Typography } from "@material-ui/core";
import React from "react";
import { List } from "reactstrap";
import "./index.css";
import { useStyles } from "./useStyleRecentSearch";
export default function RecentSearch({ listKeySearch }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.boxRecentSearch}>
        <Typography variant="h4" className={classes.title}>
          Recent Searches
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
                    <Typography variant="caption">Recent * Seach</Typography>
                  </Box>
                </Button>
              ))}
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box className={classes.boxTrendingNow}>
        <Typography className={classes.title}>Treading Now</Typography>
        <Box className={classes.boxBtn} mt={2}>
          <Button
            variant="outlined"
            size="small"
            className={classes.trenddingBtn}
          >
            Ho Chi Minh City
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.trenddingBtn}
          >
            Đà nẵng
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.trenddingBtn}
          >
            Nha Trang
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.trenddingBtn}
          >
            Điểm đến mới
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
