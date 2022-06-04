import React from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

function Navbar() {
  return (
    <div className="hearder-topbar">
      <div className="hearder-topbar-inline">
        <Link to="/activities">
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"
            alt=""
          />
        </Link>

        <div style={{ marginLeft: "230px" }}>
          <ul className="handleulpay">
            <li>
              <div>
                <svg
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M5.61 11.69a1 1 0 0 0 1.447 0l6.667-7a1 1 0 1 0-1.448-1.38L6.35 9.568 3.724 6.81a1 1 0 0 0-1.448 1.38l3.333 3.5z"
                    fill="#434343"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div>Đặt chỗ</div>
            </li>
            <li className="strikethrough">
              <div className="line">
                <i className="bi bi-dash-lg" />
              </div>
              <div>
                <svg
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M5.61 11.69a1 1 0 0 0 1.447 0l6.667-7a1 1 0 1 0-1.448-1.38L6.35 9.568 3.724 6.81a1 1 0 0 0-1.448 1.38l3.333 3.5z"
                    fill="#434343"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div>Xem lại</div>
            </li>
            <li className="strikethrough">
              <div className="line">
                <i className="bi bi-dash-lg" />
              </div>
              <div className="number_select">3</div>
              <div>Thanh toán</div>
            </li>
            <li className="strikethrough">
              <div className="line">
                <i className="bi bi-dash-lg" />
              </div>
              <div className="number">4</div>
              <div>Phát hành</div>
            </li>
            <li className="strikethrough">
              <div className="line">
                <i className="bi bi-dash-lg" />
              </div>
              <div className="number">5</div>
              <div>Xác nhận</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
