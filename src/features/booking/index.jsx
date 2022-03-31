import { Box, Button, FormControl, FormControlLabel, Input, InputLabel, List, ListItem, ListItemIcon, ListItemText, MenuItem, Radio, Select, TextField, Typography } from '@material-ui/core';
import { CalendarViewDayOutlined, Label, PaymentOutlined, PhoneAndroidOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "rgb(247, 249, 250)",
    },
    header: {
        width: "960px",
        margin: "auto",
        paddingTop: "30px",
        paddingBottom: "30px",

    },
    header_title: {
        fontWeight: 700,
        fontSize: "24px",
    },
    header_des: {
        fontSize: "16px",
        fontWeight: 500,
    },
    main: {
        width: "960px",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    left: {
        width: "632px",
    },
    loginOrRegister: {
        borderRadius: "6px",
        display: "flex",
        flexFlow: "row nowrap",
        backgroundColor: "white",
        boxShadow: "rgb(3 18 26 / 20%) 0px 1px 2px",
        padding: "16px",
    },
    right: {
        borderRadius: "6px",
        width: "304px",
        maxHeight: "700px",
        padding: "16px",
        backgroundColor: "white",
        boxShadow: "rgb(3 18 26 / 20%) 0px 1px 2px",
    },
    contactDetailBox: {
        borderRadius: "6px",
        backgroundColor: "white",
        boxShadow: "rgb(3 18 26 / 20%) 0px 1px 2px",
        paddingTop: "15px",
        paddingLeft: "15px",
        paddingRight: "15px",

    },
    textTitleBox: {
        fontSize: "16px",
        color: "black",
        fontWeight: 700,
    },
    contactDetailHeader: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    flex: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px"
    },
    rightTitle: {
        display: "flex",
        borderBottom: "1px solid #ccc",
        paddingBottom: "15px",
        marginBottom: "20px",
    },
    rightTitleText: {
        fontWeight: 700,
        marginLeft: "15px",
        color: "black",
    },
    rightImageBox: {
        display: "flex",
        flexFlow: "row nowrap",
    },
    rightTimeLine: {
        backgroundColor: "rgb(242, 243, 243)",
        marginRight: "-16px",
        marginLeft: "-16px",
        padding: "16px",

    },
    rightList: {
        marginLeft: "-16px",
        margiRight: "-16px",
        fontSize: "14px",
        textAlign: "left"
    },


    colorWhite: {
        backgroundColor: "white",
        padding: "15px",
        boxShadow: "rgb(3 18 26 / 20%) 0px 1px 2px",
    }

}))

export default function Booking() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.header} >
                <Typography variant="h4" className={classes.header_title}>Đặt phòng của bạn</Typography>
                <Typography variant="body1" className={classes.header_des}>Điền thông tin chi tiết của bạn và xem xét đặt phòng của bạn.</Typography>
            </Box>
            <Box className={classes.main} >

                <Box className={classes.left} >
                    <Box className={classes.loginOrRegister}>
                        <img height="100" width="100" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6019da794c10a8a7b0357f9ed46f1d6f.png" alt="" />
                        <Box ml={2}>
                            <Typography className={classes.textTitleBox} variant="body1" color="inherit">Đăng nhập hoặc đăng ký để tận hưởng lợi ích chỉ dành cho thành viên này</Typography>
                            <Box mt={1} mb={1}>
                                <img height="24" width="24" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/33fcc4e9daaeafc158c1a2542399ac66.svg"></img>
                                <span>Đặt chỗ nhanh hơn và dễ dàng hơn với Chọn Nhanh Hành Khách</span>
                            </Box>
                            <Button color="primary" size='small'>Đăng nhập hay đăng kí</Button>
                        </Box>
                    </Box>


                    <Box mt={3} className="Chi tiet lien he">
                        <Typography variant="h4" className={classes.header_title}>Chi tiết liên hệ</Typography>

                        <Box mt={2} className={classes.contactDetailBox}>
                            <Box className={classes.contactDetailHeader}>
                                <Typography className={classes.textTitleBox} variant="body1" >Chi tiết liên hệ (đối với Voucher)</Typography>
                                <Button color="primary" size='small' >Tiết kiệm</Button>
                            </Box>
                            <Box>
                                <Typography color="inherit" variant="subtitle2">Họ và tên</Typography>
                                <TextField
                                    margin='normal'
                                    variant="outlined"
                                    size='small'
                                    fullWidth></TextField>
                                <Typography variant="caption">Như trên CMND / hộ chiếu / giấy phép lái xe (không bằng cấp hoặc các ký tự đặc biệt)</Typography>
                            </Box>

                            <Box mt={3}>
                                <Box>

                                    <Box className={classes.flex}>
                                        <Box width={300}>
                                            <InputLabel htmlFor="name-readonly">Số điện thoại</InputLabel>
                                            <Box>
                                                <FormControl >
                                                    <select>
                                                        <option value="female">female</option>
                                                        <option value="male">male</option>
                                                        <option value="other">other</option>
                                                    </select>
                                                </FormControl>
                                                <TextField
                                                    margin='normal'
                                                    variant="outlined"
                                                    size='small'
                                                >

                                                </TextField>
                                            </Box>
                                            <Typography variant="caption">ví dụ: +62812345678, cho Mã quốc gia (+62) và Số điện thoại di động 0812345678</Typography>
                                        </Box>

                                        <Box >
                                            <InputLabel htmlFor="name-readonly">Email</InputLabel>
                                            <TextField
                                                margin='normal'
                                                variant="outlined"
                                                size='small'
                                            ></TextField> <br />
                                            <Typography variant="caption">ví dụ: email@example.com</Typography>
                                        </Box>
                                    </Box>


                                </Box>

                                <Box className={`${classes.flex} ${classes.rightTimeLine}`} mt={3}>
                                    <FormControlLabel
                                        value="Tôi là khách truy cập"
                                        control={<Radio color="primary" />}
                                        label="Tôi là khách truy cập"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="Tôi đang đặt chỗ cho người khác"
                                        control={<Radio color="primary" />}
                                        label="Tôi đang đặt chỗ cho người khác"
                                        labelPlacement="start"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box mt={3} className="Chi tiet khach truy cap">
                        <Typography variant="h4" className={classes.header_title}>Chi tiết về khách truy cập</Typography>

                        <Box mt={2} className={classes.contactDetailBox}>
                            <Box className={classes.contactDetailHeader}>
                                <Typography className={classes.textTitleBox} variant="body1" >Người lớn 1</Typography>
                                <Button color="primary" size='small' >Tiết kiệm</Button>
                            </Box>
                            <Box>
                                <FormControl >
                                    <select>
                                        <option value="female">Ông</option>
                                        <option value="male">Bà</option>
                                        <option value="other">Khác</option>
                                    </select>
                                </FormControl>
                            </Box>

                            <Box>
                                <Typography color="inherit" variant="subtitle2">Họ và tên</Typography>
                                <TextField
                                    margin='normal'
                                    variant="outlined"
                                    size='small'
                                    fullWidth
                                ></TextField> <br />
                                <Typography variant="caption">(không có tiêu đề và dấu chấm câu)</Typography>
                            </Box>

                            <Box mt={3}>
                                <Box>

                                    <Box className={classes.flex}>
                                        <Box width={300}>
                                            <InputLabel htmlFor="name-readonly">Số điện thoại</InputLabel>
                                            <Box>
                                                <FormControl >
                                                    <select>
                                                        <option value="female">female</option>
                                                        <option value="male">male</option>
                                                        <option value="other">other</option>
                                                    </select>
                                                </FormControl>
                                                <TextField
                                                    margin='normal'
                                                    variant="outlined"
                                                    size='small'
                                                >

                                                </TextField>
                                            </Box>
                                            <Typography variant="caption">ví dụ: +62812345678, cho Mã quốc gia (+62) và Số điện thoại di động 0812345678</Typography>
                                        </Box>

                                        <Box >
                                            <InputLabel htmlFor="name-readonly">Email</InputLabel>
                                            <TextField
                                                margin='normal'
                                                variant="outlined"
                                                size='small'
                                            ></TextField> <br />
                                            <Typography variant="caption">ví dụ: email@example.com</Typography>
                                        </Box>
                                    </Box>


                                </Box>

                                <Box className={`${classes.flex} ${classes.rightTimeLine}`} mt={3}>
                                    <FormControlLabel
                                        value="Tôi là khách truy cập"
                                        control={<Radio color="primary" />}
                                        label="Tôi là khách truy cập"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="Tôi đang đặt chỗ cho người khác"
                                        control={<Radio color="primary" />}
                                        label="Tôi đang đặt chỗ cho người khác"
                                        labelPlacement="start"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>


                    <Box mt={3} className={classes.colorWhite}>
                        <Typography className={classes.textTitleBox} variant="body1" >Yêu cầu đặc biệt (Tùy chọn)</Typography>
                        <TextField
                            placeholder='Yêu cầu đặc biệt'
                            margin='normal'
                            variant="outlined"
                            size='small'
                            fullWidth
                        ></TextField> <br />
                        <Typography variant="caption">Định dạng: bằng tiếng Anh hoặc ngôn ngữ địa phương. Các yêu cầu tùy thuộc vào tính khả dụng của nhà điều hành.</Typography>
                    </Box>

                    <Box mt={3}>
                        <Typography className={classes.textTitleBox} variant="body1" >Chi tiết giá cả</Typography>
                    </Box>

                </Box >
                <Box className={classes.right} >
                    <Box>
                        <Box className={classes.rightTitle}>
                            <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/56ad06f2128fa715be3108b2b90e927c.svg'></img>
                            <Typography className={classes.rightTitleText} variant="subtitle1">Tóm tắt đặt chỗ</Typography>
                        </Box>

                        <Typography className={classes.textTitleBox} >Ăn tối trên Sông Sài Gòn - Tour Đêm</Typography>
                        <Box className={classes.rightImageBox} mt={2} mb={2}>

                            <img src='https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-429b876c-9a30-466a-8482-13b6ba51a57d.jpeg?_src=imagekit&tr=c-at_max,h-100,q-60,w-100'></img>
                            <Box>
                                <span>Mở chuyến tham quan cho Max. 12 người tham gia</span>
                                <Button size='small' color="primary" >Xem Chi Tiết</Button>
                            </Box>
                        </Box>
                        <Box className={classes.rightTimeLine}>
                            <Box mt={1} className={classes.flex}>
                                <Typography>Ngày viếng thăm</Typography>
                                <span>
                                    CN, ngày 27 tháng 3 năm 2022
                                </span>
                            </Box>
                            <Box mt={1} className={classes.flex} >
                                <Typography>Ca thời gian</Typography>
                                <span>
                                    18:30
                                </span>
                            </Box>
                            <Box mt={1} className={classes.flex}>
                                <Typography>Tổng số khách truy cập</Typography>
                                <span>
                                    Người lớn: 2 Trẻ em: 1
                                </span>
                            </Box>
                        </Box>

                        <Box className={classes.rightList}>
                            <List >
                                <ListItem >
                                    <ListItemIcon>
                                        <CalendarViewDayOutlined fontSize='small' />
                                    </ListItemIcon >
                                    <ListItemText primary="Có hiệu lực vào ngày 27 tháng 3 năm 2022" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon >
                                        <PhoneAndroidOutlined fontSize='small' />
                                    </ListItemIcon>
                                    <ListItemText primary="Không cần đặt chỗ trước" />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon>
                                        <PaymentOutlined fontSize='small' />
                                    </ListItemIcon>
                                    <ListItemText primary="Có thể hoàn lại cho đến ngày 24 tháng 3 năm 2022" />
                                </ListItem>
                            </List>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}
