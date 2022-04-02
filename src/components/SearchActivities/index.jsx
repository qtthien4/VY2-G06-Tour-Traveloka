import { Box, Button, Input } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
const useStyles = makeStyles(theme => ({
  contained: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: 'space-between',
    padding: "16px",
    margin: "16px",
    width: "93%"
  },
  root: {
    borderRadius: '8px',
    width: "100%",
    position: "relative",
    margin: 'auto',
    background: 'white'
  },
  inputBox: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    border: `1px solid #ccc`,
    width: "100%",
    marginRight: '3%',
    borderRadius: '8px'
  },
  input: {
    lineHeight: '24px'
  },
  icon: {
    margin: '1%'
  },
  btn:{
    backgroundColor:"rgb(1, 148, 243)",
    minWidth: "140px",
    '&hover':{
      backgroundColor: "red",
    }
  },

}))
export default function SearchActivities({handleOpen, inputRef, handleOnBlur}) {
  const classes = useStyles()
  return (
    <Box className={classes.root}> 
      <Box className={classes.contained}>
        <Box className={classes.inputBox}>
          <SearchOutlined className={classes.icon} />
          <Input inputRef={inputRef} onFocus={handleOpen} onBlur={handleOnBlur} className={classes.input}  disableUnderline fullWidth placeholder='Mời nhập tìm kiếm'></Input>
        </Box>
        <Button className={classes.btn} size='large' variant="contained">
          Search
        </Button>
      </Box>
    </Box>
  );
}
