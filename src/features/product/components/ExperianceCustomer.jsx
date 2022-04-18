import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: "100%",
        background: "white"
    },
    card: {
        maxWidth: "960px",
        margin: "auto",
        boxShadow: "0px  0px  0px #ccc",
        border: "1px solid #ccc"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },

    avatar: {
        backgroundColor: "red",
    },
}))
export default function ExperianceCustomer() {
    const classes = useStyles()
    return (
        <Box className={classes.root} >
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    title="Brigitta M"
                    subheader="Rất nhiều người chờ đợi và lái xe xung quanh trước khi đến chiếc thuyền chỉ bắt đầu ra khơi một giờ sau đó. Thức ăn ở mức trung bình, đồ uống đắt hơn. Các nhân viên trên tàu rất tốt mặc dù."
                />
            </Card>
        </Box>

    );
}
