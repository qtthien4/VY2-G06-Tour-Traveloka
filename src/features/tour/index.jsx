import { Box, Button, Grid, Modal } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ArrowRightAltOutlined, ArrowRightOutlined, PlaceOutlined } from '@material-ui/icons';
import ModelRecentSearches from 'components/ModelRecentSearches';
import RecentSearch from 'components/RecentSearch';
import Slide from 'components/Slide';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import "swiper/css/bundle";
import SearchActivities from '../../components/SearchActivities';
import ListTour from './components/ListTour';
import { selectListCityTour, selectListCountryTour, selectListMalaysiaTour, selectListSingaporeTour, selectListThailandTour, tourActions } from './tourSlice';
import { useStyles } from './useStylesTour';
import './index.css';

export default function Tours() {
    const slideNumber = 5;
    const slideNumberCountry = 4;
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const listCityTourVietName = useSelector(selectListCityTour);
    const ListCountry = useSelector(selectListCountryTour);
    const ListMalaysiaTour = useSelector(selectListMalaysiaTour);
    const ListSingaporeTour = useSelector(selectListSingaporeTour);
    const ListThailandTour = useSelector(selectListThailandTour);
    useEffect(()=>{
        dispatch(tourActions.fetchApiTour())
    },[dispatch])
    
    const handleOnclickListTourVN = (idTourVN)=>{
        navigation(`/activities/search/${idTourVN}`)
    }
    const handleOnclickListCountry = (id) =>{
        console.log("ok", id)
    }
    const style = {
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
    const inputRef = useRef();
    const recentSearchesRef = useRef();
    const layoutRef = useRef();

      
    const handleOpenModel = () =>{
        
        //inputRef.current.focus();

        recentSearchesRef.current.style.display = 'block';
        console.log("ok1",recentSearchesRef.current);
    }
    const handleCloseModel = () =>{
        
        //inputRef.current.blur();
         recentSearchesRef.current.style.display = 'none';
        console.log("ok2",recentSearchesRef.current);
    }
    return (
        <Grid ref={layoutRef} className={classes.container} item xs={12} >
            <Grid className={classes.root} onFocus={handleCloseModel} >
                <div className={classes.backgoundark}>
                <NavLink to="/activities">Xperience</NavLink>/
                <NavLink to="/activities/category/daytour">tour</NavLink>
                <Typography variant='h3'>Tour</Typography>
                <Box className="header">
                    <Box>
                        <img className={classes.heading_img} src="https://ik.imagekit.io/tvlk/image/imageResource/2019/12/04/1575430518767-1fc642d45c0ab4008c1eba72a17a2780.jpeg?tr=h-242,q-75"></img>
                    </Box>
                    <Box className={classes.boxSearchandRecentSearch}>
                        <Box className={`${classes.searchInput} searchInput`}>
                            <SearchActivities handleOpen={handleOpenModel} inputRef={inputRef}/>                            
                        </Box>
                        <Box ref = {recentSearchesRef}  sx={style} className={`${classes.recentSearchBox} recentSearches`}>
                            <RecentSearch  /> 
                        </Box>
                        
                        {/* <ModelRecentSearches/>   */}
                        {/* <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                                
                                <Box className={classes.recentSearches} mt={4} sx={style}>
                                    <RecentSearch/> 
                                </Box>                              
                        </Modal> */}
                        
                          
                                                                 
                    </Box>
                
                    <Box>
                        <Box className={classes.filterWithPlace} >
                            <Box className={classes.iconPlaceAndText} mr={4}>
                                <PlaceOutlined className={classes.fontWeight}/>
                                <Typography variant='subtitle1' className={classes.fontWeight}>Vị trí hiện tại của bạn</Typography>
                            </Box>
                            <Box >
                                <Button size="small" className={classes.btnPlace} variant='outlined'>
                                    <Typography variant='subtitle2' className={classes.fontWeight} >Việt Nam</Typography>
                                </Button>
                                <Button size="small" variant='outlined' className={classes.btnPlaceFilter}>
                                    <Typography variant='subtitle2'>Thay đổi</Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Button className={classes.btnDiscovery} size="small" variant='contained' >
                            <Typography variant="caption" className={classes.fontWeight}>
                                Khám phá các hoạt động ở vị trí của bạn
                            </Typography>
                            <ArrowRightAltOutlined />
                        </Button>
                    </Box>

                </Box>

                <Box className={classes.content}>

                    {/* ListCityTOur */}
                    <Box className={classes.contentCity}>
                        <Typography className={classes.title} >Các điểm đến nổi bật của địa phương</Typography>
                        <Typography className={classes.titleDescription}>Những nơi đáng tham quan và khám phá trong nước</Typography>
                        <Box mt={4} className={classes.listTourCity}>
                    <Slide listCityVietNam = {listCityTourVietName} slideNumber = {slideNumber} handleOnclickListTourVN={handleOnclickListTourVN}/>
                        </Box>
                    </Box>

                    <Box className={classes.contentCity}>
                        <Typography className={classes.title} >Các điểm đến nổi bật của địa phương</Typography>
                        <Typography className={classes.titleDescription}>Những nơi đáng tham quan và khám phá trong nước</Typography>
                        <Box mt={4} className={classes.listTourCity}>
                            {/* <Slide listCityVietNam = {ListCountry} slideNumber = {slideNumber} handleOnclickListTourVN={handleOnclickListTourVN}/>
                            <Slide listCityVietNam = {listCityTourVietName} slideNumber = {slideNumber} handleOnclickListTourVN={handleOnclickListTourVN}/> */}
                            
                            <Slide listCityVietNam = {ListCountry} slideNumber = {slideNumber} handleOnclickListTourVN={handleOnclickListCountry} />
                            {/* <ListCityTour  listCityVietNam = {ListCountry} slideNumber = {slideNumber}/> */}
                        </Box>
                    </Box>

                    {/* ListTour */}
                    <Box className={classes.contentCity}>
                        <Typography className={classes.title} >Singapore đầy nắng</Typography>
                        <Typography className={classes.titleDescription}>Khám phá các tour du lịch phổ biến nhất mà Thành phố Sư tử cung cấp</Typography>
                        <Box mt={4} className={classes.listTourCity}>
                            <ListTour  listTour = {ListSingaporeTour} slideNumber = {slideNumberCountry}/>
                        </Box>
                        <Box className={classes.boxlinkBottomToTour}>
                            <Typography className={classes.linkBottomToTour} color='primary' align="right">Xem tất cả các hoạt động  </Typography>
                            <ArrowRightOutlined />
                        </Box>
                    </Box>

                    <Box className={classes.contentCity}>
                        <Typography className={classes.title} >Singapore đầy nắng</Typography>
                        <Typography className={classes.titleDescription}>Khám phá các tour du lịch phổ biến nhất mà Thành phố Sư tử cung cấp</Typography>
                        <Box mt={4} className={classes.listTourCity}>
                            <ListTour  listTour = {ListThailandTour} slideNumber = {slideNumberCountry}/>
                        </Box>
                        <Box className={classes.boxlinkBottomToTour}>
                            <Typography color='primary' align="right">Xem tất cả các hoạt động  </Typography>
                            <ArrowRightOutlined />
                        </Box>
                    </Box>

                    <Box className={classes.contentCity}>
                        <Typography className={classes.title} >Singapore đầy nắng</Typography>
                        <Typography className={classes.titleDescription}>Khám phá các tour du lịch phổ biến nhất mà Thành phố Sư tử cung cấp</Typography>
                        <Box mt={4} className={classes.listTourCity}>
                            <ListTour  listTour = {ListMalaysiaTour} slideNumber = {slideNumberCountry}/>
                        </Box>
                        <Box className={classes.boxlinkBottomToTour}>
                            <Typography color='primary' align="right">Xem tất cả các hoạt động  </Typography>
                            <ArrowRightOutlined />
                        </Box>
                    </Box>
                </Box>
                </div>
            </Grid>
        </Grid >
    );
}