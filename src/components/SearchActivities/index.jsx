import { Box, Button, Input } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';
import { SearchOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import RecentSearch from 'components/RecentSearch';
import ResultSearch from 'components/ResultSearch';
import React, { useRef, useState } from 'react';

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
    background: 'white',
    zIndex:5
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
  searchInputOverlay: {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 3,
    position: "fixed",
    display:"none",
    overflow:"hidden"
  },

}))

export default function SearchActivities({style,layoutRef,scroll}) {
  const classes = useStyles()
  const inputRef = useRef()
  const searchOverlay= useRef()
  const recentSearchesRef = useRef();
  const recentSearchesRef1 = useRef();


  const handleOpenModel = () => {
    window.scroll(0,scroll)  
    recentSearchesRef.current.style.display = 'block';
    searchOverlay.current.style.display = 'block';
    searchOverlay.current.style.backgroundColor = 'rgba(3, 18, 26, 0.8)';
    document.querySelector("body").style.overflow="hidden"   
}

  const handleCloseModel = () => {
    recentSearchesRef.current.style.display = 'none';
    searchOverlay.current.style.display = 'none';
    recentSearchesRef1.current.style.display = 'none';
    document.querySelector("body").style.overflowY="scroll"  
  }
  const [searchText, setSearchText] = useState('')

  const handleInputSearchChange = (e) => {
    const value = e.target.value
    if(value.length >= 1 || value !== ""){
      recentSearchesRef.current.style.display = 'none';
      recentSearchesRef1.current.style.display = 'block';
    }
    else{
      recentSearchesRef.current.style.display = 'block';
      recentSearchesRef1.current.style.display = 'none';
    }
    setSearchText(e.target.value)
  };

  //get full tour
  //iclu tour => key state => if tra true=> in ra
  
  console.log(searchText)

  return (
    <>
    <div  onClick={handleCloseModel} ref={searchOverlay}  className={classes.searchInputOverlay}></div>
      <Box className={classes.root}>
        <Box className={classes.contained}>
          <Box className={classes.inputBox}>
            <SearchOutlined className={classes.icon} />
            <Input onChange={(e)=>handleInputSearchChange(e)}  inputRef={inputRef}  onFocus={handleOpenModel}  className={classes.input} disableUnderline fullWidth placeholder='Mời nhập tìm kiếm'></Input>
          </Box>
          <Button className={classes.btn} size='large' variant="contained">
            Search
          </Button>
        </Box>
      </Box> 
      <Box mt={3} ref={recentSearchesRef} sx={style} style={{ display: "none" }}>

        <RecentSearch />
      </Box>

      <Box mt={3} ref={recentSearchesRef1} sx={style} style={{ display: "none" }}>
        <ResultSearch />
      </Box>
    </>

  );
}
