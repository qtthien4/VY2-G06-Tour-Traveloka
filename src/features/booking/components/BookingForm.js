import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, InputLabel, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import red from "@material-ui/core/colors/red";
import InputField from "components/FormFields/InputField";
import RadioGroupField from "components/FormFields/RadioGroupField";
import SelectFiled from "components/FormFields/SelectFiled";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { formatter } from "utils/formatter";
import * as yup from "yup";
import { useStyles } from "../indexStyle";

const schema = yup
  .object({
    nameBooking: yup.string().required("Vui lòng nhập tên của người đặt"),
    emailBooking: yup
      .string()
      .email("Bạn chưa nhập đúng định dạng email")
      .required("Vui lòng nhập email của người đặt"),
    phoneBooking: yup
      .number()
      .positive()
      .integer("Vui lòng nhập số")
      .required("Vui lòng nhập số điện thoại của người đặt"),
    // requireCustomer: yup.string().required("Vui lòng nhập yêu câif của người đặt"),
    selectGender: yup
      .string()
      .required("Vui lòng chọn giới tính của người đặt"),
    radioVisitor: yup.string().required("Vui lòng chọn người đặt"),
  })
  .required();

export default function BookingForm({
  schedule,
  onSubmit,
  fullWidth,
  tour,
  user,
}) {
  //const user = null;
  //console.log(user);
  const classes = useStyles();
  //const priceTotal = schedule.Amount * tour.Price;
  const priceTotal = useMemo(() => {
    return schedule.Amount * tour.Price;
  }, []);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className={classes.left}>
        {user != null ? (
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={`Đăng nhập là ${user.Name}`}
              subheader={user.Name}
            />
          </Card>
        ) : (
          <Box className={classes.loginOrRegister}>
            <img
              height="100"
              width="100"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6019da794c10a8a7b0357f9ed46f1d6f.png"
              alt=""
            />

            <Box ml={2}>
              <Typography
                className={classes.textTitleBox}
                variant="body1"
                color="inherit"
              >
                Đăng nhập hoặc đăng ký để tận hưởng lợi ích chỉ dành cho thành
                viên này
              </Typography>
              <Box mt={1} mb={1}>
                <img
                  height="24"
                  width="24"
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/33fcc4e9daaeafc158c1a2542399ac66.svg"
                ></img>
                <span className={`main-padding-4px`}>
                  Đặt chỗ nhanh hơn và dễ dàng hơn với Chọn Nhanh Hành Khách
                </span>
              </Box>
              <Button
                className={`main-text-transform main-font-weight main-text-color-primary main-font-size-title`}
                color="primary"
                size="small"
              >
                Đăng nhập hay đăng kí
              </Button>
            </Box>
          </Box>
        )}

        <Box mt={3} className="Chi tiet lien he">
          <Typography variant="h4" className={classes.header_title}>
            Chi tiết liên hệ
          </Typography>

          <Box mt={2} className={classes.contactDetailBox}>
            <Box className={classes.contactDetailHeader}>
              <Typography className={classes.textTitleBox} variant="body1">
                Chi tiết liên hệ (đối với Voucher)
              </Typography>
              <Button
                color="primary"
                size="small"
                className={`main-text-transform main-text-color-primary main-font-weight`}
              >
                Tiết kiệm
              </Button>
            </Box>
            <Box>
              <Typography
                color="inherit"
                variant="subtitle1"
                className={`main-text-color-black main-font-weight`}
              >
                Họ và tên
              </Typography>
              <InputField
                defaultValue={user != null ? user.name : ""}
                name="nameVisitor"
                control={control}
                label="full"
                fullWidthCustom={fullWidth}
              />
              {errors.nameVisitor?.message ? (
                <p></p>
              ) : (
                <Typography variant="caption">
                  (không có tiêu đề và dấu chấm câu)
                </Typography>
              )}
            </Box>

            <Box mt={3}>
              <Box>
                <Box className={classes.flex}>
                  <Box width={400}>
                    <InputLabel
                      htmlFor="name-readonly"
                      className={`main-text-color-black main-font-weight`}
                    >
                      Số điện thoại
                    </InputLabel>
                    <Box className="d-flex" height={56}>
                      {/* <SelectFiled
                        name="selectVisitor"
                        control={control}
                        label="phone"
                        options={[{ label: "+84", value: "+84" }]}
                      /> */}
                      <Box>
                        <InputField
                          defaultValue={user != null ? user.Phone : ""}
                          widthCustom="10px"
                          name="phoneVisitor"
                          control={control}
                          label="full"
                          fullWidthCustom={!fullWidth}
                        />
                      </Box>
                    </Box>
                    {errors.phoneVisitor?.message ? (
                      <p></p>
                    ) : (
                      <Typography variant="caption">
                        ví dụ: +62812345678, cho Mã quốc gia (+62) và Số điện
                        thoại di động 0812345678
                      </Typography>
                    )}
                  </Box>

                  <Box ml={2}>
                    <InputLabel
                      htmlFor="name-readonly"
                      className={`main-text-color-black main-font-weight`}
                    >
                      Email
                    </InputLabel>
                    <InputField
                      defaultValue={user != null ? user.email : ""}
                      name="emailVisitor"
                      control={control}
                      label="full"
                      fullWidthCustom={fullWidth}
                    />
                    {errors.phoneVisitor?.message ? (
                      <p></p>
                    ) : (
                      <Typography variant="caption">
                        ví dụ: email@example.com
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
              <Box
                className={`${classes.flex} ${classes.rightTimeLine}`}
                mt={3}
              >
                <RadioGroupField
                  name="radioVisitor"
                  control={control}
                  options={[
                    { label: "Tôi là khách truy cập", value: "1" },
                    { label: "Tôi đang đặt chỗ cho người khác", value: "2" },
                  ]}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mt={3} className="Chi tiet khach truy cap">
          <Typography variant="h4" className={classes.header_title}>
            Chi tiết về khách truy cập
          </Typography>

          <Box mt={2} className={classes.contactDetailBox}>
            <Box className={classes.contactDetailHeader}>
              <Typography className={classes.textTitleBox} variant="body1">
                Người lớn
              </Typography>
              <Button
                color="primary"
                size="small"
                className={`main-text-transform main-text-color-primary main-font-weight`}
              >
                Tiết kiệm
              </Button>
            </Box>
            <Box>
              <SelectFiled
                name="selectGender"
                control={control}
                label="phone"
                options={[
                  { label: "Ông", value: "1" },
                  { label: "Bà", value: "0" },
                ]}
              />
            </Box>
            {/* {errors.selectGender?.message} */}
            <Box>
              <Typography
                className={`main-text-color-black main-font-weight`}
                color="inherit"
                variant="subtitle2"
              >
                Họ và tên
              </Typography>
              <InputField
                name="nameBooking"
                control={control}
                label="full"
                fullWidthCustom={fullWidth}
              />{" "}
              <br />
              {errors.phoneVisitor?.message ? (
                <p></p>
              ) : (
                <Typography variant="caption">
                  (không có tiêu đề và dấu chấm câu)
                </Typography>
              )}
            </Box>
            <Box mt={3}>
              <Box>
                <Box className={classes.flex}>
                  <Box width={300}>
                    <InputLabel
                      className={`main-text-color-black main-font-weight`}
                      htmlFor="name-readonly"
                    >
                      Số điện thoại
                    </InputLabel>
                    <Box>
                      {/* <SelectFiled
                        name="selectBooking"
                        control={control}
                        label="phone"
                        options={[{ label: "+84", value: "1" }]}
                      /> */}
                      <InputField
                        name="phoneBooking"
                        control={control}
                        label="full"
                        fullWidthCustom={!fullWidth}
                      />{" "}
                      <br />
                    </Box>
                    {errors.phoneBooking?.message ? (
                      <p></p>
                    ) : (
                      <Typography variant="caption">
                        ví dụ: +62812345678, cho Mã quốc gia (+62) và Số điện
                        thoại di động 0812345678
                      </Typography>
                    )}
                  </Box>

                  <Box>
                    <InputLabel
                      className={`main-text-color-black main-font-weight`}
                      htmlFor="name-readonly"
                    >
                      Email
                    </InputLabel>
                    <InputField
                      name="emailBooking"
                      control={control}
                      label="full"
                      fullWidthCustom={fullWidth}
                    />{" "}
                    <br />
                    {errors.phoneBooking?.message ? (
                      <p></p>
                    ) : (
                      <Typography variant="caption">
                        ví dụ: email@example.com
                      </Typography>
                    )}
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
          <Typography className={classes.textTitleBox} variant="body1">
            Yêu cầu đặc biệt (Tùy chọn)
          </Typography>
          <InputField
            name="requireCustomer"
            control={control}
            label="full"
            fullWidthCustom={fullWidth}
          />{" "}
          <br /> <br />
          {errors.requireCustomer?.message ? (
            <p></p>
          ) : (
            <Typography variant="caption">
              Định dạng: bằng tiếng Anh hoặc ngôn ngữ địa phương. Các yêu cầu
              tùy thuộc vào tính khả dụng của nhà điều hành.
            </Typography>
          )}
        </Box>

        <Box mt={3} mb={2}>
          <Typography className={classes.textTitleBox} variant="body1">
            Chi tiết giá cả
          </Typography>
        </Box>
        <Box className={`main-d-flex main-text-color-black ${classes.payBox}`}>
          <Typography className={``}>Giá bạn phải trả</Typography>
          <Typography
            style={{ fontSize: "20px", lineHeight: "28px" }}
            className={`maim-font-weight main-text-color-orange`}
          >
            {formatter.format(tour.Price * schedule.Amount)}
          </Typography>
        </Box>
        <Box align="right" mt={5}>
          <Button
            type="submit"
            style={{ padding: "5px 35px 5px 35px", fontSize: "20px" }}
            variant="contained"
            className={` main-bg-button-color-orange main-text-transform main-text-color-white main-font-weight`}
          >
            Tiếp tục thanh toán
          </Button>
        </Box>
      </Box>
    </form>
  );
}
