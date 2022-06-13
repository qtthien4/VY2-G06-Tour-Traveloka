import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  contained: {
    display: "flex",
    flexFlow: "row nowrap",
    width: "100%",
  },
  root: {
    borderRadius: "8px",
    width: "100%",
    position: "relative",
    margin: "auto",
    background: "white",
    zIndex: 5,
  },
  searchInputOverlay: {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 3,
    position: "fixed",
    display: "none",
    overflow: "hidden",
  },
}));
{
  /* <SearchForm handleOpenModel={handleOpenModel} handleInputSearchChange={handleInputSearchChange} initialValue={initialValue} onSubmit = {handleSearchFormSubmit}/> */
}
