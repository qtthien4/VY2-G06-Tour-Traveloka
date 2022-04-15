
import { Box, Button, Input, makeStyles } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import InputField from "components/FormFields/InputField";
import React from "react";
import { useForm } from "react-hook-form";
const useStyles = makeStyles((theme) => ({
    contained: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        margin: "16px",
        width: "100%",
      },
    inputBox: {
        display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    border: `1px solid #ccc`,
    width: "100%",
    marginRight: "3%",
    borderRadius: "8px",
    },
  
    btn: {
      color: "white",
      backgroundColor: "rgb(1, 148, 243)",
      minWidth: "140px",
      "&:hover": {
        backgroundColor: "rgb(1, 148, 243)",
      },
    },
    icon:{
        marginLeft:"4px",
        marginRight:"4px",
    }
  
  }));
  
export default function SearchForm({ initialValue, onSubmit, handleInputSearchChange, handleOpenModel }) {
    const classes = useStyles()
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });

  const handleFormSubmit = (formValue) => {
    console.log("form value", formValue);
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={`${classes.contained}`} >
        <Box className={`d-flex ${classes.inputBox}`}>
        <SearchOutlined className={classes.icon} />
        <Input id="idInput"  onFocus={e=>handleOpenModel(e)} onChange={(e)=>handleInputSearchChange(e)}  name="name"  className={classes.input} control={control} disableUnderline fullWidth placeholder='Mời nhập tìm kiếm'></Input>
        </Box>
        
        <Button className={classes.btn} type="submit"  size='large' variant="contained" color="primary">
            Search
        </Button>
    </form>
  );
}
