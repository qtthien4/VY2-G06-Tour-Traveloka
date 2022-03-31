import { Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';
import { makeStyles } from '@material-ui/styles';
import React, { MouseEventHandler, useState } from 'react';


const useStyles = makeStyles(theme => ({
    root: {

        marginTop: "30px",
        width: '100%',
        maxWidth: 360,
        backgroundColor: "white"
    },
}))

export default function ListFilterControl() {
    const classes = useStyles();
    const [state, setState] = useState([0])

    const handleToggle = (value) => {

        const currentIndex = state.indexOf(value);
        const newChecked = [...state];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setState(newChecked)
    }
    return (

        <div className={classes.root}>
            <Typography>Xperience Exclusive</Typography>
            <List>
                {[0, 1, 2, 3].map(value => (
                    <ListItem
                        key={value}
                        role={undefined}
                        dense
                        button
                    >
                        <Checkbox
                            checked={state.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                        />
                        <ListItemText primary={`Line item ${value + 1}`} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Comments">
                                <CommentIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div >
    );
}
