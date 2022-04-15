import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    height: "500px",
    overflow: "hidden",
    overflowY: "scroll",
  },
  cardHeader: {
    backgroundColor: "red",
  },
  boxRecentSearch: {},
  title: {
    fontSize: "22px",
    fontWeight: 700,
    color: "black",
  },
  listRecentSearches: {
    display: "inline-flex",
    width: "100%",
  },

  RecentSearchItem: {
    padding: "5px",
    paddingRight: "5px",
    marginRight: "15px",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgb(247, 249, 250)",
  },
  boxTrendingNow: {},
  boxBtn: {},

  trenddingBtn: {
    marginBottom: "10px",
    marginRight: "10px",
    textTransform: "none",
    fontWeight: 700,
    border: "1px solid black",
  },
  card: {},
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
  },

  button: {
    textTransform: "none",
    margin: "5px",
    border: "none",
    backgroundColor: "rgb(247, 249, 250)",
    borderRadius: "9999px",
    "&:hover": {
      border: "none",
    },
  },
  rootList: {
    width: "100%",
    marginLeft: "-40px",
  },
  btnItemFirst: {
    marginLeft: "-10px",
  },

  list: {
    width: "100%",
  },
  boxTourSearch: {
    display: "inline-flex",

    flexWrap: "wrap",
  },
  tourSearch: {
    marginRight: "10px",
    alignItems: "center",
    height: "100%",
    display: "flex",
    width: "48%",
    marginBottom: "20px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  imgTourSearch: {
    borderRadius: "8px",
    objectFit: "cover",
  },
  nameSearchResult: {
    overflow: "hidden",
    color: "black",
    fontSize: "18px",
  },
}));
