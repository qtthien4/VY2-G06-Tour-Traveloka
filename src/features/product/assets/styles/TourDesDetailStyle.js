import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    width: "644px",
  },
  right: {
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0px 1px 2px rgb(3 18 26 / 20%)",
    background: "white",
    width: "300px",
    maxHeight: "530px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "sticky",
    top: 120,
  },
  //   #stickydDiv{
  //     position : "sticky",
  //   top : 0,
  //    font-size: "30px",
  //    color: "white",
  //    background-color:  "#3991bd",
  //    width: 150px,
  //    height: 150px,
  //  }
  rightTop: {
    height: "300px",
  },
  title: {
    marginBottom: "20px",
    marginTop: "10px",
    fontWeight: 700,
    fontSize: "20px",
  },
  titleRightListTop: {
    display: "inline-block",
    color: "black",
  },
  leftDes: {
    borderRadius: "10px",
    boxShadow: "0px 1px 2px rgb(3 18 26 / 20%)",
    background: "white",
    padding: "15px",
  },
  leftMap: {
    boxShadow: "0px 1px 2px rgb(3 18 26 / 20%)",
    background: "white",
    marginTop: "30px",
  },
  list: {
    fontSize: "16px",
    fontWeight: 600,
  },
  descriptionCaption: {
    marginTop: "10px",
    fontSize: "16px",
    lineHeight: "24px",
  },
}));
