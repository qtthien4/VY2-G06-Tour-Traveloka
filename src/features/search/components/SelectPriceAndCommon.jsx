import { Box, FormControl, makeStyles, Select, Typography } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius:"10px",
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: "space-between",
        padding: "5px",
        backgroundColor: "white",
        alignItems: "center"
    },
    formControl: {
        minWidth: 120,
    },
    filterLeft: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "row"
    },
    selectEmpty: {

    },
    select: {
        border: "1px solid #ccc",   
        borderRadius: "10px",
        margin:"5px",
        padding:"5px",
        minWidth: "150px",
        "&:not(.Mui-disabled):before":{
            border:"none"
        },
        "&:hover:not(.Mui-disabled):before":{
            border:"none"
        },
        "&:forcus:not(.Mui-disabled):before":{
            border:"none"
        }

    }
}))

export function SelectPriceAndCommon({handleChangeFilterHeader}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          
                <FormControl className={classes.formControl}>
                    {/* <Select
                        className={classes.select}
                        native
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    >
                        <option value="">VND 0 - VND 4,000,000+</option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select> */}
                </FormControl>

                <Box className={classes.filterLeft}>
                    <Typography>Sắp xếp theo: </Typography>
                    <FormControl className={classes.formControl}>
                        <Select
                            onChange={(e)=>handleChangeFilterHeader(e)}
                            className={classes.select}
                            native
                            inputProps={{
                                name: 'age',
                                id: 'age-native-simple',
                            }}
                        >
                            <option>Lọc</option>
                            <option value={1}>Giá cao nhất</option>
                            <option value={2}>Giá thấp nhất</option>                       
                        </Select>
                    </FormControl>
                </Box>

       
        </div >
    );
}
