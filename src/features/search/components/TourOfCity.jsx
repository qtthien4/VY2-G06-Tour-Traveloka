import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
    },
    wrapper: {
        maxWidth: 400,
    },
    paper: {
    },
    Image: {
        height: '200px',
        width: "300px"
    },
    img: {
        height: '200px',
        width: "300px"
    },
    boxItem: {
        display: 'flex',
        flexFlow: "row nowarp",
        backgroundColor: "rgba(255,255,255,1.00)",
        boxShadow: "0px 2px 5px rgb(3 18 26 / 15%)",
        // justifyContent: 'left',
    },
    content: {

        padding: "2%",
        textAlign: "left"
    },
    text: {
        fontSize: "12px",
        color: "rgba(104,113,118,1.00)"
    },
    textLineThought: {
        textDecoration: "line-through rgba(104,113,118,1.00) 1px",
        color: "rgba(104,113,118,1.00)"
    },
    price: {
        color: "rgb(255, 94, 31)",
        fontSize: "24px",
        fontWeight: 700
    },
    title: {
        paddingBottom: "5%"
    },
    boxPrice: {
        marginTop: "15px"
    },
}))



export default function TourOfCity({listCityofTour}) {
    const classes = useStyles();

    return (
        <>
            {
            listCityofTour.map( (a) => (
                
            <Box className={classes.boxItem} mb={3}>
                <Box className={classes.Image}>
                    <img className={classes.img} src={a.imageUrl} />
                </Box>
                <Box className={classes.content}>
                <Typography className={classes.title} variant="h6">{a.experienceName}</Typography>
                <Box>
                    <img height="12" width="12" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0629a9ae0d41e994ff5043f52cbb1b2e.svg" alt="" />
                    <span className={classes.text} color="primary">{a.shortGeoName}</span>
                </Box>
                <Box>
                    <img height="12" width="12" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/986bcf0f5b0c898a34fd75a917ceefad.svg" alt="" />
                    <span className={classes.text}>{a.score} /10</span>
                    <span className={classes.text}>(1 nhận xét)</span>
                </Box>
                <Box className={classes.boxPrice}>
                    <span className={classes.textLineThought}>{a.originalPrice}</span> <br />
                    <span className={classes.price}>{a.discountedPrice} VND</span>
                </Box>

            </Box>
     </Box>
                
                
                
    ))
                
            }

            
        </ >

    );
}
