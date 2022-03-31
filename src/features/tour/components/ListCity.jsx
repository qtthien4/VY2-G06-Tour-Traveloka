import { Box, makeStyles } from '@material-ui/core'
import React from 'react'


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
export default function ListCity(list) {
    const classes = useStyles()
  return (
    <Box className={classes.boxItem}>
                <Box className={classes.centerImage}>
                    <img className={classes.img} src={list.image} />
                </Box>
            </Box>
    )
}