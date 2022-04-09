import { Box, Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ArrowRightAltOutlined, ArrowRightOutlined, PlaceOutlined } from '@material-ui/icons';
import Footer from 'components/Footer';
import Header from 'components/Header';
import RecentSearch from 'components/RecentSearch';
import Slide from 'components/Slide';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import "swiper/css/bundle";
import SearchActivities from '../../components/SearchActivities';
import ListTour from './components/ListTour';
import './index.css';
import { selectListCityTour, selectListCountryTour, selectListMalaysiaTour, selectListSingaporeTour, selectListThailandTour, tourActions } from './tourSlice';
import { useStyles } from './useStylesTour';

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
    // let {id} = useParams();
    // console.log("use param",id)
    //search?
    //st=GEO&eid=10009794&theme=DAY_TOUR&id=5428955&funnel_source=Merchandising.AA.Category-DAY_TOUR-web-VN-LandingPage&funnel_id=M_0_97edfa1060c0f7e392577c587e1ccd61ddb40eb7_0_967d51296ca772ce31c50e94de6e5d899cae6a51&internal_source=true
    //st=GEO&eid=107493&theme=DAY_TOUR&id=5428955&funnel_source=Merchandising.AA.Category-DAY_TOUR-web-VN-LandingPage&funnel_id=M_1_91923a026768297ff4af754a50d783c49eafe2c1_1_fb20b6b52cbf824f00dd0ec757cb22c4b2d284dd&internal_source=true
    //get /activities/search?country=vietnam&idTour=123456789
    const handleOnclickListTourVN = (idCity, idCountry)=>{
        navigation(`/activities/search/daytour?idCountry=${idCountry}&idCity=${idCity}`)
    }
    const handleOnclickListCountry = ( idTourVN, idCountry) =>{
        navigation(`/activities/search/daytour?idCountry=${idCountry}`)
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
      
    const imgBanner = useRef();
    const recentSearchesRef = useRef();
    const layoutRef = useRef(null);
      
    return (
        <div id="tour_root">
            <Header/>
            <div id="box_container_tour"  className="boxContainerTour" >
            <Grid  ref={layoutRef} style={{padding : 0}} className={classes.container} item xs={12}  >
           {/* {console.log(layoutRef)} */}
           <Grid className={classes.root}  >
               <div className={classes.backgoundark}>
               <NavLink to="/activities">Xperience</NavLink>/
               <NavLink to="/activities/category/daytour">tour</NavLink>
               <Typography variant='h3' className={classes.titleTour}>Tour</Typography>
               <Box className="header" >             
                    <img id="hidden" ref={imgBanner}  className={`${classes.heading_img}`} src="https://ik.imagekit.io/tvlk/image/imageResource/2019/12/04/1575430518767-1fc642d45c0ab4008c1eba72a17a2780.jpeg?tr=h-242,q-75"></img>
                   
                   <Box className={classes.boxSearchandRecentSearch} >
                       <Box className={`${classes.searchInput} searchInput`}>
                           <SearchActivities layoutRef={layoutRef} style={style} />                            
                       </Box>
                       <Box ref = {recentSearchesRef}  sx={style} className={`${classes.recentSearchBox} recentSearches`}>
                           <RecentSearch  /> 
                       </Box>                                         
                   </Box>
               
                   <Box id="hidden">
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

               <Box className={classes.content} id="hidden">
                   <Box className={classes.contentCity}>
                       <Typography className={classes.title} >Các điểm đến nổi bật của địa phương</Typography>
                       <Typography className={classes.titleDescription}>Những nơi đáng tham quan và khám phá trong nước</Typography>
                       <Box mt={4} className={classes.listTourCity}>
                   <Slide listCityVietNam = {listCityTourVietName} slideNumber = {slideNumber} handleOnclickListTour={handleOnclickListTourVN}/>
                       </Box>
                   </Box>

                   <Box className={classes.contentCity}>
                       <Typography className={classes.title} style={{marginTop : "100px"}} >Các điểm đến nổi bật của địa phương</Typography>
                       <Typography className={classes.titleDescription}>Những nơi đáng tham quan và khám phá trong nước</Typography>
                       <Box mt={4} className={classes.listTourCity}>                         
                           <Slide listCityVietNam = {ListCountry} slideNumber = {slideNumber} handleOnclickListTour={handleOnclickListCountry} />
                       </Box>
                   </Box>

                   {/* ListTour */}
                   <Box className={classes.contentCity}>
                       <Typography className={classes.title} style ={{marginTop: '100px'}}>Singapore đầy nắng</Typography>
                       <Typography className={classes.titleDescription} style ={{marginBottom: '-10px'}}>Khám phá các tour du lịch phổ biến nhất mà Thành phố Sư tử cung cấp</Typography>
                       <Box mt={4} className={classes.listTourCity}>
                           <ListTour  listTour = {ListSingaporeTour} slideNumber = {slideNumberCountry}/>
                       </Box>
                       <Box className={classes.boxlinkBottomToTour}>
                           <Typography className={classes.linkBottomToTour} color='primary' align="right">Xem tất cả các hoạt động  </Typography>
                           <ArrowRightOutlined />
                       </Box>
                   </Box>
                        
                   <Box className={classes.contentCity}>
                       <Typography className={classes.title} style ={{marginTop: '-10px'}}>Singapore đầy nắng</Typography>
                       <Typography className={classes.titleDescription} style ={{marginBottom: '-10px'}}>Khám phá các tour du lịch phổ biến nhất mà Thành phố Sư tử cung cấp</Typography>
                       <Box mt={4} className={classes.listTourCity}>
                           <ListTour  listTour = {ListThailandTour} slideNumber = {slideNumberCountry}/>
                           
                       </Box>
                       <Box className={classes.boxlinkBottomToTour}>
                           <Typography color='primary' align="right">Xem tất cả các hoạt động  </Typography>
                           <ArrowRightOutlined />
                       </Box>
                   </Box>

                   <Box className={classes.contentCity}>
                       <Typography className={classes.title} style ={{marginTop: '-10px'}} >Singapore đầy nắng</Typography>
                       <Typography className={classes.titleDescription} style ={{marginBottom: '-10px'}}>Khám phá các tour du lịch phổ biến nhất mà Thành phố Sư tử cung cấp</Typography>
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
       </Grid>
       <Footer/>
        </div>
      
        </div>
       
    );
}
