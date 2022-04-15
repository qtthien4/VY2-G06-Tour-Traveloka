import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "1280px",
  },
  container: {
    marginTop: "120px",
    justifyContent: "center",
    zIndex: 1,
    width: "100%",
    display: "flex",
    margin: "auto",
    background: "rgba(255,255,255,1.00)",
  },
  header: {
    position: "relative",
    width: "100%",
    marginBottom: "80px",
  },
  heading_img: {
    objectFit: "cover",
    objectPosition: "center center",
    width: "100%",
    height: 242,
  },
  titleTour: {
    color: "black",
  },
  boxSearchandRecentSearch: {
    position: "relative",
    width: "930px",
    margin: "auto",
    zIndex: 100,
  },
  searchInput: {
    position: "absolutely",
    zIndex: 100,
    marginTop: "-60px",
    boxShadow: "0px 4px 18px rgb(3 18 26 / 13%)",
    width: "100%",
    margin: "auto",
    borderRadius: "8px",
    "& .MuiOutlinedInput-root": {
      "& recentSearches": {
        borderColor: "rgba(0, 0, 0, 0.23)", // default
      },
      "&.Mui-focused recentSearches": {
        border: "2px solid red", // focus
      },
    },
  },

  backgoundark: {
    height: "100%",
    width: "100%",
  },
  recentSearchBox: {
    display: "none",
  },
  recentSearchBox1: {
    display: "block",
  },
  filterWithPlace: {
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: "40%",
    alignItems: "center",
    marginBottom: "1%",
    marginTop: "35px",
  },
  iconPlaceAndText: {
    display: "flex",
  },
  btnPlace: {
    borderRadius: "15px 0px 0px 15px",
  },
  btnPlaceFilter: {
    borderRadius: "0px 15px 15px 0px",
  },
  btnDiscovery: {
    backgroundColor: "rgb(192, 76, 54)",
    color: "white",
    borderRadius: "20px",
    margin: "15px 0px 15px",
    textTransform: "none",
    "&:hover": {
      background: "rgb(192, 76, 54)",
    },
  },
  title: {
    fontSize: "24px",
    textAlign: "left",
    fontWeight: 700,
    color: "rgba(67,67,67,1.00)",
  },
  titleDescription: {
    fontSize: "16px",
    marginBottom: "75px",
    color: "rgb(143, 143, 143)",
  },
  content: {
    marginTop: "10px",
  },
  contentCity: {
    marginBottom: "50px",
  },
  listTourCity: {
    marginLeft: "-15px",
    marginRight: "-15px",
  },
  boxlinkBottomToTour: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    textAlign: "right",
  },
  linkBottomToTour: {
    fontWeight: 700,
  },
  fontWeight: {
    fontWeight: 700,
  },
  footer: {},

  swiper1: {
    width: "100% !important",
  },
  boxContainerTour: {
    height: "1000px",
    zIndex: 1,
  },
}));
