import { Box, Button, Input } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import RecentSearch from 'components/RecentSearch';
import  React, { useRef } from 'react';
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
    color:"white",
    backgroundColor:"rgb(1, 148, 243)",
    minWidth: "140px",
    '&:hover':{
      backgroundColor: "rgb(1, 148, 243)",
    }
  },

}))
export const style = {
  marginTop:"10px",
  position: 'absolute',
  top: '100%',
  left: '0%',
  width:"100%",      
  bgcolor: 'background.paper',
  boxShadow: "0px 8px 18px rgb(3 18 26 / 13%)",
  zIndex:10,
  borderRadius:"5px"
};
 
export default function SearchActivities() {
  const classes = useStyles()
  const inputRef = useRef()
  const inputSearchRef = useRef();
  const recentSearchesRef = useRef();

  const handleOpenModel = () =>{  
    recentSearchesRef.current.style.display = 'block';
    // window.scroll(0,256)           
}
const handleCloseModel = () =>{
        recentSearchesRef.current.style.display = 'none' ;           
}
  return (
    <>
      <Box className={classes.root}> 
      <Box className={classes.contained}>
        <Box className={classes.inputBox}>
          <SearchOutlined className={classes.icon} />
          <Input inputRef={inputRef} onFocus={handleOpenModel} onBlur={handleCloseModel} className={classes.input}  disableUnderline fullWidth placeholder='Mời nhập tìm kiếm'></Input>
        </Box>
        <Button className={classes.btn} size='large' variant="contained">
          Search
        </Button>
      </Box>
      </Box>
            <Box mt={3} ref = {recentSearchesRef}  sx={style} style ={{display: "none"}}>
           <RecentSearch  /> 
            </Box>
    </>
   
  );
}
