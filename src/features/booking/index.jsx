import { Box, Button, InputLabel, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import bookingApi from 'api/ApiReal/bookingApi';
import Footer from 'components/Footer';
import RadioGroupField from 'components/FormFields/RadioGroupField';
import SelectFiled from 'components/FormFields/SelectFiled';
import { AuthContext } from 'context/AuthProvider';
import Navbar from 'features/Payment/navbar';
import { selectTour } from 'features/product/productSlice';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import InputField from '../../components/FormFields/InputField';
import { bookingActions } from './bookingSlice';
import { useStyles } from './indexStyle';

export default function Booking() {
    const user = useContext(AuthContext);
    const tour = useSelector(selectTour);
    
    //const tour = useSelector(selectTour);
    
    const [idTourBooking, setTourBooking] = useState(localStorage.getItem("idTour"))
    const [scheduleTour, SetScheduleTour] = useState(JSON.parse(localStorage.getItem("schedule")))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(bookingActions.fetchTour(JSON.parse(idTourBooking)))

    }, [dispatch, idTourBooking])

    console.log(idTourBooking, scheduleTour)
    const { control, handleSubmit } = useForm();

    const initCustomer = {
        idCustomer: "1",
        name: user.name,
        phone: "",
        email: user.email,
        address: "",
        point: "",
        gender: "",
    }
    const initCustomerDetail = {
        idDetail: shortid.generate(),
        idBooking: "",
        customerName: "",
        cusPhoneNum: "",
        emailCus: "",
        gender: ""
    }
    const initBooking = {
        idBooking: shortid.generate(),
        idSchedule: scheduleTour.idSchedule,
        idCustomer: "1",
        idVoucher: shortid.generate(),
        paymentOption: "",
        bookingTime: "",
        total: tour.Price,
        sstBooking: false,
        amountPeople: scheduleTour.Amount,
        
    }

    const [customer, setCustomer] = useState(initCustomer)
    const [booking, setBooking] = useState(initBooking)
    const [customerDetail, setCustomerDetail] = useState(initCustomerDetail);

    const onSubmit = async (data) => {
        console.log("data form", data)

        const { nameVisitor, phoneBooking, requireCustomer, emailBooking, nameBooking, selectGender, phoneVisitor, emailVisitor, radioVisitor } = data;

        if (String(radioVisitor) === "1") {
            setCustomer((customerVisitor) => ({
                ...customerVisitor,
                phone: phoneVisitor,
                email: emailVisitor,
                name: nameVisitor,
            }))
            setBooking((booking) => ({
                ...booking,
                paymentOption: String(radioVisitor),
                reservationist: requireCustomer,
                disCount: "",
                idCustomer: customer.idCustomer,
            }))
            setCustomerDetail((customerDetail) => ({
                ...customerDetail,
                idBooking: booking.idBooking,
                cusPhoneNum: phoneBooking,
                emailCus: emailBooking,
                customerName: nameBooking,
                gender: selectGender,
            }))
            
            return bookingApi.post([
                { "customerDetail": customerDetail },
                { "booking": booking }
            ]);
        }
        else if (String(radioVisitor) === "2") {
            setCustomer((customerVisitor) => ({
                ...customerVisitor,
                phone: phoneVisitor,
                email: emailVisitor,
                name: nameVisitor,
            }))
            setBooking((booking) => ({
                ...booking,
                paymentOption: String(radioVisitor),
                reservationist: requireCustomer,
                disCount: "",
                idCustomer: customer.idCustomer,
            }))
            setCustomerDetail((customerDetail) => ({
                ...customerDetail,
                idBooking: booking.idBooking,
                cusPhoneNum: phoneBooking,
                emailCus: emailBooking,
                customerName: nameBooking,
                gender: selectGender,
            }))
            return bookingApi.post([
                { "customerDetail": customerDetail },
                { "booking": booking }
            ]);
        }
        else {
            console.log("ban chua chon radio button")
        }
    };
    const fullWidth = true;
    const classes = useStyles();
    return (
        <Box >
            <Navbar />
            <Box className={classes.root}>
                <Box className={classes.header}  >
                    <Typography variant="h4" className={classes.header_title}>Đặt phòng của bạn</Typography>
                    <Typography variant="body1" className={classes.header_des}>Điền thông tin chi tiết của bạn và xem xét đặt phòng của bạn.</Typography>
                </Box>
                <Box className={classes.main} >


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box className={classes.left} >
                            <Box className={classes.loginOrRegister}>
                                <img height="100" width="100" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6019da794c10a8a7b0357f9ed46f1d6f.png" alt="" />
                                <Box ml={2}>
                                    <Typography className={classes.textTitleBox} variant="body1" color="inherit">Đăng nhập hoặc đăng ký để tận hưởng lợi ích chỉ dành cho thành viên này</Typography>
                                    <Box mt={1} mb={1}>
                                        <img height="24" width="24" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/33fcc4e9daaeafc158c1a2542399ac66.svg"></img>
                                        <span className={`main-padding-4px`}>Đặt chỗ nhanh hơn và dễ dàng hơn với Chọn Nhanh Hành Khách</span>
                                    </Box>
                                    <Button className={`main-text-transform main-font-weight main-text-color-primary main-font-size-title`} color="primary" size='small'>Đăng nhập hay đăng kí</Button>
                                </Box>
                            </Box>

                            <Box mt={3} className="Chi tiet lien he">
                                <Typography variant="h4" className={classes.header_title}>Chi tiết liên hệ</Typography>

                                <Box mt={2} className={classes.contactDetailBox}>
                                    <Box className={classes.contactDetailHeader}>
                                        <Typography className={classes.textTitleBox} variant="body1" >Chi tiết liên hệ (đối với Voucher)</Typography>
                                        <Button color="primary" size='small' className={`main-text-transform main-text-color-primary main-font-weight`} >Tiết kiệm</Button>
                                    </Box>
                                    <Box>
                                        <Typography color="inherit" variant="subtitle2" className={`main-text-color-black main-font-weight`}>Họ và tên</Typography>
                                        <InputField name="nameVisitor" control={control} label="full" fullWidthCustom={fullWidth} />
                                        <Typography variant="caption">Như trên CMND / hộ chiếu / giấy phép lái xe (không bằng cấp hoặc các ký tự đặc biệt)</Typography>
                                    </Box>

                                    <Box mt={3}>
                                        <Box>

                                            <Box className={classes.flex}>
                                                <Box width={400}>
                                                    <InputLabel htmlFor="name-readonly" className={`main-text-color-black main-font-weight`}>Số điện thoại</InputLabel>
                                                    <Box className="d-flex" height={56}>
                                                        <SelectFiled name="selectVisitor" control={control} label="phone" options={[
                                                            { label: "+84", value: "+84" },

                                                        ]} />
                                                        <Box >
                                                            <InputField widthCustom="10px" name="phoneVisitor" control={control} label="full" fullWidthCustom={!fullWidth} />
                                                        </Box>
                                                    </Box>
                                                    <Typography variant="caption">ví dụ: +62812345678, cho Mã quốc gia (+62) và Số điện thoại di động 0812345678</Typography>
                                                </Box>

                                                <Box ml={2}>
                                                    <InputLabel htmlFor="name-readonly" className={`main-text-color-black main-font-weight`}>Email</InputLabel>
                                                    <InputField name="emailVisitor" control={control} label="full" fullWidthCustom={fullWidth} />
                                                    <Typography variant="caption">ví dụ: email@example.com</Typography>
                                                </Box>
                                            </Box>


                                        </Box>
                                        <Box className={`${classes.flex} ${classes.rightTimeLine}`} mt={3}>
                                            <RadioGroupField name="radioVisitor" control={control} options={[
                                                { label: "Tôi là khách truy cập", value: "1" },
                                                { label: "Tôi đang đặt chỗ cho người khác", value: "2" },
                                            ]} />

                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            <Box mt={3} className="Chi tiet khach truy cap">
                                <Typography variant="h4" className={classes.header_title}>Chi tiết về khách truy cập</Typography>

                                <Box mt={2} className={classes.contactDetailBox}>
                                    <Box className={classes.contactDetailHeader}>
                                        <Typography className={classes.textTitleBox} variant="body1" >Người lớn 1</Typography>
                                        <Button color="primary" size='small' className={`main-text-transform main-text-color-primary main-font-weight`} >Tiết kiệm</Button>
                                    </Box>
                                    <Box>
                                        <SelectFiled name="selectGender" control={control} label="phone" options={[
                                            { label: "Ông", value: "1" },
                                            { label: "Bà", value: "0" }
                                        ]} />
                                    </Box>

                                    <Box>
                                        <Typography className={`main-text-color-black main-font-weight`} color="inherit" variant="subtitle2">Họ và tên</Typography>
                                        <InputField name="nameBooking" control={control} label="full" fullWidthCustom={fullWidth} /> <br />
                                        <Typography variant="caption">(không có tiêu đề và dấu chấm câu)</Typography>
                                    </Box>
                                    <Box mt={3}>
                                        <Box>

                                            <Box className={classes.flex}>
                                                <Box width={300}>
                                                    <InputLabel className={`main-text-color-black main-font-weight`} htmlFor="name-readonly">Số điện thoại</InputLabel>
                                                    <Box>
                                                        <SelectFiled name="selectBooking" control={control} label="phone" options={[
                                                            { label: "+84", value: "1" },
                                                        ]} />

                                                        <InputField name="phoneBooking" control={control} label="full" fullWidthCustom={!fullWidth} /> <br />
                                                    </Box>
                                                    <Typography variant="caption">ví dụ: +62812345678, cho Mã quốc gia (+62) và Số điện thoại di động 0812345678</Typography>
                                                </Box>

                                                <Box >
                                                    <InputLabel className={`main-text-color-black main-font-weight`} htmlFor="name-readonly">Email</InputLabel>
                                                    <InputField name="emailBooking" control={control} label="full" fullWidthCustom={fullWidth} /> <br />
                                                    <Typography variant="caption">ví dụ: email@example.com</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                        {/* <Box className={`${classes.flex} ${classes.rightTimeLine}`} mt={3}>
                                    <RadioGroupField name="radioForm2" control={control}  options={[
                                            {label:"Tôi là khách truy cập", value:'male'},
                                            {label:"Tôi đang đặt chỗ cho người khác", value:'female'},
                                        ]}/>
                                    </Box> */}
                                    </Box>
                                </Box>
                            </Box>
                            <Box mt={3} className={classes.colorWhite}>
                                <Typography className={classes.textTitleBox} variant="body1" >Yêu cầu đặc biệt (Tùy chọn)</Typography>
                                <InputField name="requireCustomer" control={control} label="full" fullWidthCustom={fullWidth} /> <br /> <br />
                                <Typography variant="caption">Định dạng: bằng tiếng Anh hoặc ngôn ngữ địa phương. Các yêu cầu tùy thuộc vào tính khả dụng của nhà điều hành.</Typography>
                            </Box>

                            <Box mt={3} mb={2}>
                                <Typography className={classes.textTitleBox} variant="body1" >Chi tiết giá cả</Typography>
                            </Box>
                            <Box className={`main-d-flex main-text-color-black ${classes.payBox}`}>
                                <Typography className={``}>Giá bạn phải trả</Typography>
                                <Typography style={{ fontSize: "20px", lineHeight: "28px" }} className={`maim-font-weight main-text-color-orange`}>{tour.Price} VND</Typography>
                            </Box>
                            <Box align="right" mt={5}>
                                <Button type="submit" style={{ padding: "5px 35px 5px 35px", fontSize: "20px" }} variant='contained' className={` main-bg-button-color-orange main-text-transform main-text-color-white main-font-weight`}>Tiếp tục thanh toán</Button>
                            </Box>
                        </Box >
                    </form>

                    <Box className={classes.right} >
                        <Box>
                            <Box className={classes.rightTitle}>
                                <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/56ad06f2128fa715be3108b2b90e927c.svg'></img>
                                <Typography className={classes.rightTitleText} variant="subtitle1">Tóm tắt đặt chỗ</Typography>
                            </Box>

                            <Typography className={classes.textTitleBox} >{tour.ActivityName}</Typography>
                            <Box className={classes.rightImageBox} mt={2} mb={2}>

                                <img style={{ objectFit: "cover", marginRight: "10px" }} height="100" width="100" src='https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-429b876c-9a30-466a-8482-13b6ba51a57d.jpeg?_src=imagekit&tr=c-at_max,h-100,q-60,w-100'></img>
                                <Box style={{ display: "flex", flexDirection: "column" }}>
                                    <span>Mở chuyến tham quan cho Max. 12 người tham gia</span>
                                    <Button style={{ left: "75px", width: "100px" }} className={`main-text-transform main-text-color-primary main-font-weight`} align="right" size='small' >Xem Chi Tiết</Button>
                                </Box>
                            </Box>
                            <Box className={classes.rightTimeLine}>
                                <Box mt={1} className={classes.flex}>
                                    <Typography>Ngày viếng thăm:</Typography>
                                    <span className="main-text-color-black main-font-weight-500">
                                        {scheduleTour.starttime}
                                    </span>
                                </Box>
                                <Box mt={1} className={classes.flex} >
                                    <Typography>Ca thời gian:</Typography>
                                    <span className="main-text-color-black main-font-weight-500">
                                        18:30
                                    </span>
                                </Box>
                                <Box mt={1} className={classes.flex}>
                                    <Typography>Tổng số khách truy cập:</Typography>
                                    <span className="main-text-color-black main-font-weight-500">
                                        {scheduleTour.Amount}
                                    </span>
                                </Box>
                            </Box>

                            <Box className={classes.rightList}>
                                <List >
                                    <ListItem >
                                        <img height="16" width="16" src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455491487-083f2aa1250ed2145b0b41c4e1dba240.png" />
                                        <ListItemText style={{ fontSize: "12px", marginLeft: "8px", lineHeight: "20px" }} primary={scheduleTour.starttime} />
                                    </ListItem>
                                    <ListItem>
                                        <img height="16" width="16" src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455486715-9f445c68bf929b8ace8e744c568484f9.png" />
                                        <ListItemText style={{ fontSize: "12px", marginLeft: "8px", lineHeight: "20px" }} primary="Không cần đặt chỗ trước" />
                                    </ListItem>
                                    <ListItem >
                                        <img height="16" width="16" src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455479726-cb00253dc0267a8fc369760e81dc577c.png" />
                                        <ListItemText style={{ fontSize: "12px", marginLeft: "8px", lineHeight: "20px" }} primary={scheduleTour.endtime} />
                                    </ListItem>
                                </List>

                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Footer />
            </Box >
        </Box>

    );
}
