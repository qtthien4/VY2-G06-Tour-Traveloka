const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "rgba(242,243,243,1.00)",
    padding: "1px",
  },
  headerSearch: {
    width: "70%",
    margin: "auto",
  },
  headerBoxSearch: {
    width: "100%",
    backgroundColor: "white",
  },
  root: {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gridTemplateColumns: "300px 1fr",
    gridTemplateAreas: `'header header' "sidebar main"`,
    width: "1180px",
    minHeight: "100vh",
    margin: "auto",
  },
  header: {
    width: "100%",
    gridArea: "header",
  },
  headerRoot: {
    width: "100%",
    gridArea: "header",
  },
  linkActivities: {
    textDecoration: "underline",
    color: "rgb(28, 41, 48)",
  },
  slash: {
    margin: "0px 10px 0px 10px",
  },
  headerExprience: {
    height: "0px",
    display: "flex",
    flexDirection: "row",
  },
  nameCity: {
    fontWeight: 700,
    fontSize: "32px",
    paddingTop: "30px",
    paddingBottom: "30px",
  },
  sidebar: {
    gridArea: "sidebar",
  },
  main: {
    grid: "main",
    marginLeft: "5%",
  },
  mainFilter: {
    boxShadow: "0px 8px 16px rgb(3 18 26 / 20%)",
    backgroundColor: "rgba(255,255,255,1.00)",
    marginBottom: "30px",
  },
  listTourOfCity: {},
  resetFilter: {
    fontWeight: 700,
    paddingBottom: "35px",
  },
}));
