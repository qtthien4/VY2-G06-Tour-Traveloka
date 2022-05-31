import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../assets/Login_v1/images/icons/favicon.ico";
import "../../assets/Login_v1/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/Login_v1/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../../assets/Login_v1/vendor/animate/animate.css";
import "../../assets/Login_v1/vendor/css-hamburgers/hamburgers.min.css";
import "../../assets/Login_v1/vendor/select2/select2.min.css";
import "../../assets/Login_v1/css/main.css";
import "../../assets/Login_v1/css/util.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import userApi from "api/ApiReal/userApi";
import { toast } from "react-toastify";
const shortid = require("shortid");

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
    rePassword: yup.string().required(),
  })
  .required();

export default function Register() {
  const [checkpass, setCheckpass] = useState(true);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password, rePassword } = data;
    if (password === rePassword) {
      //login tiep tuc
      setCheckpass(true);
      //post api register in profile
      const a = await userApi.register({
        IdCustomer: shortid.generate(),
        Name: "",
        email: email,
        password: password,
        Phone: "",
        gender: "",
        point: "",
      });
      console.log(a);
      toast.success("Bạn đã đăng kí tài khoản thành công");
      navigate("/login");
    } else {
      //validation
      setCheckpass(false);
    }
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img
              src={require("../../assets/Image/background_login.png")}
              alt="IMG"
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="login100-form validate-form"
          >
            <span className="login100-form-title">Member Register</span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                {...register("Name")}
                className="input100"
                type="text"
                placeholder="Tên người dùng"
              />
              <p>{errors.email?.message}</p>
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                {...register("Phone")}
                className="input100"
                type="text"
                placeholder="Số điện thoại"
              />
              <p>{errors.email?.message}</p>
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                {...register("email")}
                className="input100"
                type="text"
                placeholder="Tài khoản"
              />
              <p>{errors.email?.message}</p>
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                {...register("gender")}
                className="input100"
                type="text"
                placeholder="Nhập giới tính nam/ nữ"
              />
              <p>{errors.email?.message}</p>
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                {...register("password")}
                className="input100"
                type="password"
                placeholder="Mật khẩu"
              />

              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <p>{errors.password?.message}</p>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                {...register("rePassword")}
                className="input100"
                type="password"
                placeholder="Nhập lại mật khẩu"
              />
              <p>{errors.rePassword?.message}</p>
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>

            {checkpass === false && <p>Mật khẩu không khớp</p>}

            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">
                Register
              </button>
            </div>
            <div className="text-center p-t-136">
              <Link to="/login" className="txt2">
                Bạn đã có tài khoản?
                <i
                  className="fa fa-long-arrow-right m-l-5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
