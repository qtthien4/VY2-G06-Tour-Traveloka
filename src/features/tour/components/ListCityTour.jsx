import { Box, makeStyles } from '@material-ui/core';
import React, { memo, useRef, useState } from 'react';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/css/index.css';




// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);
const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
    },
    wrapper: {
        maxWidth: 400,
    },
    paper: {
    },
    centerImage: {
        display: 'flex',
        justifyContent: 'center', /* horizontally center */
        alignItems: 'center',    /* vertically center */
        // height: '200px',
        width: '100%',
        
    },
    img: {
        maxWidth: "90%",
        maxHeight: "90%",
        borderRadius: "8px"
    },
    boxItem: {

    },
   

}))



function ListCityTour({listCityVietNam, slideNumber,handleOnclickListTourVN}) {
  const classes = useStyles()
  return (
    <>
      <Swiper 
      style={{background:"none",marginTop:"-50px",marginBottom:"-50px"}}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={slideNumber}
      navigation
      pagination={{ clickable: true }}     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        listCityVietNam.map((list)=>(       
          <SwiperSlide key={list.id} style={{background:"none"}} onClick={()=>handleOnclickListTourVN(list.id)}>
            <Box className={classes.boxItem}>
                <Box className={classes.centerImage}>
                    <img className={classes.img} src={list.image} />
                </Box>
            </Box>
        </SwiperSlide>
        ))
      } 
    </Swiper>
    
    </>
  );
}

export default  memo(ListCityTour)
