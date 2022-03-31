import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { PlaceOutlined } from "@material-ui/icons";
import React from "react";
import { useStyles } from "./useStyleRecentSearch";

export default function RecentSearch() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.boxRecentSearch}>
        <Typography variant="h4" className={classes.title}>
          Recent Searches
        </Typography>
        <Box className={classes.listRecentSearches}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={<IconButton></IconButton>}
              title="Da nang"
              subheader="Region * VietNam"
            />
          </Card>

          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={<IconButton></IconButton>}
              title="Da nang"
              subheader="Region * VietNam"
            />
          </Card>

          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={<IconButton></IconButton>}
              title="Da nang"
              subheader="Region * VietNam"
            />
          </Card>

          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={<IconButton></IconButton>}
              title="Da nang"
              subheader="Region * VietNam"
            />
          </Card>
        </Box>
      </Box>

      <Box className={classes.boxTrendingNow}>
        <Typography className={classes.title}>Treading Now</Typography>
        <Box className={classes.boxBtn}>
          <Button variant="default" size="small">
            Ho Chi Minh City
          </Button>
          <Button variant="default" size="small">
            Nha Trang
          </Button>
          <Button variant="default" size="small">
            Da nang
          </Button>
          <Button variant="default" size="small">
            Ha Noi
          </Button>
          <Button variant="default" size="small">
            Thai Lan
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
