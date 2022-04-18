import { Button, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        padding:"10px",
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        fontWeight:600,
        textTransform:"none",
        margin: "10px",
        boxShadow: "rgb(3 18 26 / 15%) 0px 4px 10px",
        border: "none",
        backgroundColor: "rgb(247, 249, 250)",
        borderRadius: "9999px",
        "&:hover": {
            border: "none",
            boxShadow: "rgb(3 18 26 / 15%) 0px 7px 5px"
        }
    },
    rootList: {
        width: "100%",
    },

    list: {
        display: "inline",
        width: "100%",
    },
    title: {
        marginBottom: "10px",
        fontWeight: 570,
        paddingTop: "5px",
        color:"black",
    },

}
));

function ListFilter() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Xperience Exclusive</Typography>
            <List className={classes.rootList} disablePadding={false}>
                <ListItem className={classes.list} style={{margin:"-15px"}} >
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Điểm Đến mới
                    </Button>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Kiểm tra Covid-19
                    </Button>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Hoàn tiền
                    </Button>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Lên lịch lại
                    </Button><Button variant="outlined" color="primary" className={classes.button}>
                        Mới
                    </Button>
                </ListItem>
            </List>
        </div>
    );
}

export default ListFilter
