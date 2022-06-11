const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "50px",
    backgroundColor: "rgb(247, 249, 250)",
  },
  header: {
    width: "960px",
    margin: "auto",
    paddingTop: "30px",
    paddingBottom: "30px",
  },
  header_title: {
    fontWeight: 700,
    fontSize: "24px",
  },
  header_des: {
    fontSize: "16px",
    fontWeight: 500,
  },
  main: {
    width: "960px",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    width: "632px",
  },
  loginOrRegister: {
    borderRadius: "6px",
    display: "flex",
    flexFlow: "row nowrap",
    backgroundColor: "white",
    boxShadow: "rgb(3 18 26 / 20%) 0px 1px 2px",
    padding: "16px",
  },
  right: {
    borderRadius: "6px",
    width: "304px",
    maxHeight: "660px",
    padding: "16px",
    backgroundColor: "white",
    boxShadow: "rgb(3 18 26 / 20%) 0px 1px 2px",
    // position: "sticky",
    // top: 100,
  },
  contactDetailBox: {
    borderRadius: "6px",
    backgroundColor: "white",
    boxShadow: "rgb(3 18 26 / 20%) 0px 1px 2px",
    paddingTop: "15px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  textTitleBox: {
    fontSize: "16px",
    color: "black",
    fontWeight: 700,
    fontStyle: "bold",
  },
  contactDetailHeader: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
  },
  rightTitle: {
    display: "flex",
    borderBottom: "1px solid #ccc",
    paddingBottom: "15px",
    marginBottom: "20px",
  },
  rightTitleText: {
    fontWeight: 700,
    marginLeft: "15px",
    color: "black",
  },
  rightImageBox: {
    display: "flex",
    flexFlow: "row nowrap",
  },
  rightTimeLine: {
    backgroundColor: "rgb(242, 243, 243)",
    marginRight: "-16px",
    marginLeft: "-16px",
    padding: "16px",
  },
  rightList: {
    marginLeft: "-16px",
    margiRight: "-16px",
    fontSize: "14px",
    textAlign: "left",
  },

  colorWhite: {
    backgroundColor: "white",
    padding: "15px",
    boxShadow: "rgb(3 18 26 / 20%) 0px 1px 2px",
  },
  areaPhoneNumber: {
    fontSize: "16px",
    marginTop: "11px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px 0px 0px 5px",
  },
  inputPhoneNumber: {
    width: "190px",
  },
  payBox: {
    padding: "15px",
    boxShadow: "rgb(3 18 26 / 20%) 0px 1px 2px",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
}));
