import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  navProduct: {},
  rootBoxBig: {
    paddingTop: "100px",
    backgroundColor: "rgba(242,243,243,1.00)",
  },
  rootBox: {
    width: "960px",
    maxWidth: 960,
    margin: "auto",
  },
  root: {},
  container: {
    padding: "15px",
  },
  header: {
    maxWidth: 960,
    margin: "auto",
    width: "960px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "20px",
    paddingTop: "20px",
  },
  btnDisable: {
    fontWeight: 400,
    marginTop: "5px",
    fontSize: "12px",
    marginBottom: "5px",
    borderRadius: "14px",
    color: "var(--main-color-text-secondary) !important",
    border: "none !important",
    backgroundColor: "var(--main-bg-color-blue)",
    "&:hover": {
      cursor: "text",
      backgroundColor: "var(--main-bg-color-blue)",
    },
  },
  image: {
    width: 128,
    height: 128,
  },
  tilteProduct: {
    fontWeight: 700,
    color: "var(--main-color-black)",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  imageBox: {
    width: "100%",
    paddingTop: "15px",
    display: "flex",
    flexFlow: "row nowrap",
    borderTop: "1px solid #ccc",
  },
  imageLeft: {
    width: "768px",
  },
  imageRight: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
    justifyContent: "space-between",
    height: "512px",
    overflow: "hidden",
  },
  imageItem: {
    borderRadius: "8px",
  },

  seeAllBox: {
    borderRadius: " 8px",
    height: "122px",
    width: "148px",
    backgroundImage: `url("https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-0f4ce63d-fb5c-49b5-aa9a-4f2c11829355.jpeg?_src=imagekit&tr=c-at_max,h-122,q-60,w-148")`,
  },
  seeAll: {
    textAlign: "center",
    fontWeight: 700,
    marginTop: "35%",
    color: "white",
  },
  descriptionTour: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  findSlects: {
    width: "264px",
    height: "108px",
  },
}));
