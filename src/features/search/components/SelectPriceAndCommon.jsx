import { Box, FormControl, InputLabel, makeStyles, Select, Typography } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: "space-between",
        padding: "8px",
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
        paddingTop: "10px",
        borderRadius: "10px",
    }
}))

export function SelectPriceAndCommon() {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.root}>
                <FormControl className={classes.formControl}>
                    <Select
                        className={classes.select}
                        native
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>

                <Box className={classes.filterLeft}>
                    <Typography>Sắp xếp theo: </Typography>
                    <FormControl className={classes.formControl}>
                        <Select
                            className={classes.select}
                            native
                            inputProps={{
                                name: 'age',
                                id: 'age-native-simple',
                            }}
                        >

                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Box>

            </Box>
        </div >
    );
}
