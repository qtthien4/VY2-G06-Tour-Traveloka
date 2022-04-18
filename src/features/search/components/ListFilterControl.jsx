import { Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';


const useStyles = makeStyles(theme => ({
    root: {
        padding:"10px",
        marginTop: "30px",
        width: '100%',
        maxWidth: 360,
        backgroundColor: "white"
    },
    list:{
        margin:"-15px"
    },
    title:{
        marginBottom: "10px",
        fontWeight: 570,
        paddingTop: "5px",
        color:"black",
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
     const arr = [
         {
             id:0,
             nameCheckFilter: "Khuyễn mãi đặc biệt",
         },
         {
            id:1,
            nameCheckFilter: "Dễ dàng truy cập",
        },
        {
            id:2,
            nameCheckFilter: "ok",
        }
     ]
    return (

        <div className={classes.root}>
            <Typography className= {classes.title} >Bộ lọc khác</Typography>
            
            <List className ={classes.list}>
                {arr.map(value => (
                    <ListItem className={classes.listItem}
                        key={value.id}
                        role={undefined}
                        dense
                        button
                        onChange={handleToggle}
                    >
                        <Checkbox
                        
                            checked={state.indexOf(value.id) !== -1}
                            tabIndex={-1}
                            disableRipple
                        />
                        <ListItemText primary={value.nameCheckFilter} />

                    </ListItem>
                ))}
            </List>
        </div >
    );
}
