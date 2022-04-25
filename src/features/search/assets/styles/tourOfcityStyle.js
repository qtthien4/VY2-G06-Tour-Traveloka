import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {},
  img: {
    borderRadius: "10px 0px 0px 10px",
    minHeight: "100%",
    minWidth: "300px",
    maxWidth: "300px",
  },
  boxItem: {
    borderRadius: "10px 10px 10px 10px",
    position: "relative",
    zIndex: 1,
    display: "flex",
    backgroundColor: "rgba(255,255,255,1.00)",
    boxShadow: "0px 2px 5px rgb(3 18 26 / 15%)",
    height: "200px",
    width: "100%",

    "&:hover": {
      cursor: "pointer",
    },
  },
  content: {
    padding: "6% 2% 2% 2%",
    textAlign: "left",
    width: "100%",
  },
  text: {
    fontSize: "12px",
    color: "rgba(104,113,118,1.00)",
  },
  textLineThought: {
    textDecoration: "line-through rgba(104,113,118,1.00) 1px",
    color: "rgba(104,113,118,1.00)",
  },
  price: {
    color: "rgb(255, 94, 31)",
    fontSize: "24px",
    fontWeight: 700,
  },
  title: {
    fontSize: "16px",
    WebkitLineClamp: 2,
    color: "black",
  },
  boxPrice: {
    marginTop: "8px",
  },
}));
