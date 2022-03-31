import { Box, Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ArrowRightAltOutlined, ArrowRightOutlined, PlaceOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import Slide from 'components/Slide';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import "swiper/css/bundle";
import SearchActivities from '../../components/SearchActivities';
import ListCityTour from './components/ListCityTour';
import ListTour from './components/ListTour';
import { selectListCityTour, selectListCountryTour, selectListMalaysiaTour, selectListSingaporeTour, selectListThailandTour, tourActions } from './tourSlice';
const useStyles = makeStyles(theme => ({
    root: {
        width: '1280px',      
    },
    container: {
        justifyContent: 'center',
        zIndex: 1,
        width: '100%',
        display: 'flex',
        margin: 'auto',
        background:"rgba(255,255,255,1.00)",
    },
    header: {
        position: 'relative',
        width: "100%",
        marginBottom: "80px"
    },
    heading_img: {
        objectFit: "cover",
        objectPosition: "center center",
        width: "100%",
        height: 242,
    },
    searchInput: {
        marginTop: '-60px',
        boxShadow: '0px 8px 18px rgb(3 18 26 / 13%)',
        width: "70%",
        margin: "auto",
        borderRadius:"8px"
    },
    filterWithPlace: {
        display: 'flex',
        justifyContent: 'flex-start',
        maxWidth: '40%',
        alignItems: 'center',
        marginBottom: '1%',
        marginTop: '35px'
    },
    iconPlaceAndText: {
        display: 'flex',
        
    },
    btnPlace: {
        borderRadius: "15px 0px 0px 15px",

    },
    btnPlaceFilter: {
        borderRadius: "0px 15px 15px 0px"
    },
    btnDiscovery: {
        backgroundColor: "rgb(192, 76, 54)",
        color: "white",
        borderRadius: "20px",
        margin: '15px 0px 15px',
        textTransform: 'capitalize'
    },
    title: {
        fontSize: '24px',
        textAlign: 'left',
        fontWeight: 700,
        color: 'rgba(67,67,67,1.00)',
    },
    titleDescription: {
        fontSize: '16px',
        color: 'rgb(143, 143, 143)',
    },
    content: {
        marginTop: "10px"
    },
    contentCity: {
        marginBottom: '50px',

    },
    listTourCity: {
        marginLeft: '-15px',
        marginRight: '-15px',

    },
    boxlinkBottomToTour: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        textAlign: 'right'
    },
    linkBottomToTour:{
        fontWeight:700,
    },
    fontWeight:{
        fontWeight: 700,
    },
    footer: {}
})
)


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
    return (
        <Grid className={classes.container} item xs={12} >
            <Grid className={classes.root}>
                <NavLink to="/activities">Xperience</NavLink>/
                <NavLink to="/activities/category/daytour">tour</NavLink>
                <Typography variant='h3'>Tour</Typography>
                <Box className="header">
                    <Box>
                        <img className={classes.heading_img} src="https://ik.imagekit.io/tvlk/image/imageResource/2019/12/04/1575430518767-1fc642d45c0ab4008c1eba72a17a2780.jpeg?tr=h-242,q-75"></img>
                    </Box>
                    <Box className={classes.searchInput}>
                        <SearchActivities />
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

            </Grid>
        </Grid >
    );
}
