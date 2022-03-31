import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  boxRecentSearch: {},
  title: {},
  listRecentSearches: {},
  boxTrendingNow: {},
  boxBtn: {},
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
  },
}));
