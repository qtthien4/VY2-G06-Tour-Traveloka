import { Box, Button, Input } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import RecentSearch from 'components/RecentSearch';
import React, { useRef } from 'react';
const useStyles = makeStyles(theme => ({
  contained: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: 'space-between',
    padding: "16px",
    margin: "16px",
    width: "97%"
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
  btn: {
    color: "white",
    backgroundColor: "rgb(1, 148, 243)",
    minWidth: "140px",
    '&:hover': {
      backgroundColor: "rgb(1, 148, 243)",
    }
  },

}))


export default function SearchActivities({style,layoutRef}) {
  const classes = useStyles()
  const inputRef = useRef()
  const recentSearchesRef = useRef();


  const handleOpenModel = () => {
    recentSearchesRef.current.style.display = 'block';
    window.scroll(0,256)    
   
    if(layoutRef === undefined){
      document.querySelector(".background_change").style.background = "#333"
      for(var i= 0; i<=document.querySelectorAll("img").length;i++){        
       document.querySelectorAll("img")[i].style.opacity = "0.05"
    }  
    }else{
      layoutRef.current.style.background = "#333"    
      for(var i= 0; i<=document.querySelectorAll("img").length;i++){
        document.querySelectorAll("img")[i].style.opacity = "0.05"
      }  
    }    
}
  const handleCloseModel = () => {
    recentSearchesRef.current.style.display = 'none';
    
    if(layoutRef === undefined){
      document.querySelector(".background_change").style.background = "#fff"
      for(var i= 0; i<=document.querySelectorAll("img").length;i++){
        document.querySelectorAll("img")[i].style.opacity = "1"
    }  
    }else{
      layoutRef.current.style.background = "#FFF"  
      for(var i= 0; i<=document.querySelectorAll("img").length;i++){
        document.querySelectorAll("img")[i].style.opacity = "1"
      }  
    }    
  }
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.contained}>
          <Box className={classes.inputBox}>
            <SearchOutlined className={classes.icon} />
            <Input  inputRef={inputRef}  onFocus={handleOpenModel} onBlur={handleCloseModel} className={classes.input} disableUnderline fullWidth placeholder='Mời nhập tìm kiếm'></Input>
          </Box>
          <Button className={classes.btn} size='large' variant="contained">
            Search
          </Button>
        </Box>
      </Box> 
      <Box mt={3} ref={recentSearchesRef} sx={style} style={{ display: "none" }}>
        <RecentSearch />
      </Box>
    </>

  );
}
