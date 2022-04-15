import {
  Box,
  Button, Typography
} from "@material-ui/core";

import React from "react";
import { useStyles } from "./styles";

  export default function ResultSearch({listTour}) {
    const classes = useStyles();
    return (
      <Box className={classes.root}>
        <Box className={classes.boxRecentSearch}>
            <Box className={classes.boxTrendingNow}  mb={3}>
            <Typography className={classes.title}> Recommended Keywords for</Typography>
            <Box className={classes.boxBtn} mt={3} >
                <Button variant="outlined" size="small" className={classes.trenddingBtn}>
                Ho Chi Minh City
                </Button>
                <Button variant="outlined" size="small" className={classes.trenddingBtn}>
                Đà nẵng 
                </Button><Button variant="outlined" size="small" className={classes.trenddingBtn}>
                Nha Trang
                </Button>
                <Button variant="outlined" size="small" className={classes.trenddingBtn}>
                Điểm đến mới
                </Button>
                <Button variant="outlined" size="small" className={classes.trenddingBtn}>
                Điểm đến mới
                </Button> <Button variant="outlined" size="small" className={classes.trenddingBtn}>
                Điểm đến mới
                </Button> <Button variant="outlined" size="small" className={classes.trenddingBtn}>
                Điểm đến mới
                </Button> <Button variant="outlined" size="small" className={classes.trenddingBtn}>
                Điểm đến mới
                </Button> <Button variant="outlined" size="small" className={classes.trenddingBtn}>
                Điểm đến mới
                </Button> <Button variant="outlined" size="small" className={classes.trenddingBtn}>
                Điểm đến mới
                </Button>
            </Box>
            </Box>

            <Typography variant="h4" className={classes.title}>
            Recommended Areas to Explore
            </Typography>


            <Box mt={3} className={classes.boxTourSearch}>
                 {
                   listTour.map((list)=>(
                    <Box key={list.IdActivity} className={`${classes.tourSearch}`}>
                    <Box style={{boxShadow:"rgb(0 0 0 / 22%) 0px 1px 2.22px",  borderRadius: "8px"}}>
                     <img className={classes.imgTourSearch}  height="105" width="140" src="https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1549877585400-1400x1050-FIT_AND_TRIM-6f7e3c846bbb95230486922cd0f2878a.jpeg?_src=imagekit&tr=c-at_max,h-105,q-40,w-140"></img>
                    </Box>
                    
                    <Box ml={2}>
                      <div   className={classes.nameSearchResult} style={{fontWeight: 600,paddingRight:"10px",WebkitLineClamp:2, height:"50px", textAlign:"left"}}>
                      {list.ActivityName}
                      </div>
                      
                      <Box className="d-flex main-align-item-center">
                        <img  height="12" width="12" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0629a9ae0d41e994ff5043f52cbb1b2e.svg"/>
                        <Typography className="main-padding-4px">{list.Location}</Typography>
                      </Box>
                    </Box>
                  </Box>
                   ))
                 }

                 
            </Box>

          {/* <Box >
          <List className={classes.rootList} disablePadding={false}>
                  <ListItem className={classes.list}  >
                      <Button variant="outlined" color="primary" className= {`${classes.button} ${classes.btnItemFirst}`}>
                        <Box textAlign="left" className ="boxNameRecentSearch">
                          <span className="nameRecentSearch">Quận 1</span> <br/>                        
                        </Box>
                      </Button>
                      <Button variant="outlined" color="primary" className={classes.button}>
                        <Box textAlign="left" className ="boxNameRecentSearch">
                          <span className="nameRecentSearch">Nhật bản</span> <br/>
                          
                        </Box>
                      </Button>
                      <Button variant="outlined" color="primary" className={classes.button}>
                        <Box textAlign="left" className ="boxNameRecentSearch">
                          <span className="nameRecentSearch">Đà nẵng</span> <br/>
                                              </Box>
                      </Button>
                      <Button variant="outlined" color="primary" className={classes.button}>
                        <Box textAlign="left" className ="boxNameRecentSearch">
                          <span className="nameRecentSearch">Kiểm tra covid 19</span> <br/>
                                                  </Box>
                      </Button>
     
                  </ListItem>

                  
              </List>
           
            
          
              
          </Box> */}
        </Box>
  
       
      </Box>
    );
  }
  