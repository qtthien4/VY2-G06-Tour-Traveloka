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
import { setUserId } from "firebase/analytics";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

async function getUser(user) {
  return fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((data) => data.json());
}

export default function Login({ setToken, setUser }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const { email, password } = data;
    const user = await getUser({
      user: email,
      matkhau: password,
    });

    if (user.data == "user khong ton tai") {
      toast.warning("Tài khoản hoặc mật khẩu bị sai vui lòng nhập lại");
    } else {
      localStorage.setItem("userInfo", JSON.stringify(user));
      navigate("/activities");
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
            <span className="login100-form-title">Member Login</span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                {...register("email")}
                className="input100 input1"
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
                className="input100 input1"
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
              <button className="login100-form-btn button1">Login</button>
            </div>
            <div className="text-center p-t-12">
              <span className="txt1">Forgot</span>
              <a className="txt2" href="#">
                Username / Password?
              </a>
            </div>
            <div className="text-center p-t-136">
              <Link to="/register" className="txt2">
                Bạn chưa có tài khoản?
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
