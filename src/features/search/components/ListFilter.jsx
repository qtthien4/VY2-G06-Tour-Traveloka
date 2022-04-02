import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        margin: "5px",
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
        marginBottom: "20px",
        fontWeight: 600,
        paddingTop: "15px",
    },

}
));

function ListFilter() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Xperience Exclusive</Typography>
            <List className={classes.rootList} disablePadding={false}>
                <ListItem className={classes.list}  >
                    <Button variant="outlined" color="primary" className={classes.button}>
                        <Typography variant="body1">Điểm Đến mới</Typography>
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
