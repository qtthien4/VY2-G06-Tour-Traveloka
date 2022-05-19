import React from "react";
import PropTypes from "prop-types";
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

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import userApi from "api/ApiReal/userApi";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

async function loginUser(credentials) {
  return fetch("http://localhost:3005/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    console.log(data);

    const { email, password } = data;

    const token = await loginUser({
      appId: "tour-vy2",
      taikhoan: email,
      matkhau: password,
    });
    setToken(token);
    navigate("/activities");

    //post api login (app id)

    // userApi
    //   .login({
    //     appId: "tour-vy2",
    //     taikhoan: email,
    //     matkhau: password,
    //   })
    //   .then((res) => console.log(res));

    //nhan response server tra ve
    //check token
    // token ==> true => redirect /activities
    // token ==> false => thong bao cho nguoi dung la sai tai khoan or mat khau
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
            <span className="login100-form-title">Member Login</span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                {...register("email")}
                className="input100"
                type="text"
                placeholder="Email"
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <p>{errors.email?.message}</p>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                {...register("password")}
                className="input100"
                type="password"
                placeholder="Password"
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <p>{errors.password?.message}</p>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Login</button>
            </div>
            <div className="text-center p-t-12">
              <span className="txt1">Forgot</span>
              <a className="txt2" href="#">
                Username / Password?
              </a>
            </div>
            <div className="text-center p-t-136">
              <Link to="/register" className="txt2">
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};