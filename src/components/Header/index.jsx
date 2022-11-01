import { AuthContext } from "context/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import "./index.css";
import { Button } from "@material-ui/core";
import { toast } from "react-toastify";

function Header({ user1 }) {
  const user = user1 || {};
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const handleTransaction = () => {
    navigate("/booking/transaction");
  };
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
    toast("Bạn đã đăng xuất thành công");
  };
  return (
    <div
      className="navLayout"
      style={{ boxShadow: "0px 4px 5px rgb(3 18 26 / 13%)" }}
    >
      <div className="header1">
        <div className="header1-left">
          {/* <div id="icon-menu-header">
            <img
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8c5c07f3e6c8c7806ef853f5e943e27b.svg"
              alt="menu"
            />
          </div> */}
          <p style={{ fontSize: "30px", paddingTop: "15§px" }}>TOUR DU LỊCH</p>
          {/* <Link to="/activities">
            <img
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"
              alt="logo"
            />
          </Link> */}
        </div>
        <div className="header1-right">
          {/* <div className="header1-right-item1">
            <svg
              id="icon-right"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-id="IcMobilePhoneDownload"
            >
              <path
                d="M6 15H18M9 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H15M10 18H14"
                stroke="#687176"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2V11M12 11L10 9M12 11L14 9"
                stroke="#0194F3"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div id="font-header"> Tải ứng dụng</div>
            <img
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg"
              style={{ marginLeft: "4px" }}
              alt=""
            />
          </div> */}
          {/* <div className="header1-right-item2">
            <a href="/#">
              <div>
                <img
                  id="icon-right"
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bdab924c2bd3a5fb492022beb158a6ef.svg"
                  alt=""
                />
              </div>
              <div id="font-header">Hợp tác với chúng tôi</div>
            </a>
            <a href="/#">
              <div>
                <img
                  id="icon-right"
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c80a2b136969e32f4db682792d1110f6.svg"
                  alt=""
                />
              </div>
              <div id="font-header">Đã Lưu</div>
            </a>
            <a href="/#">
              <div>
                <img
                  id="icon-right"
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg"
                  alt=""
                />
              </div>
              <div id="font-header">Đặt chỗ của tôi</div>
            </a>
          </div> */}
          {/* <div className="header1-right-item3">
            <div>
              <img
                alt="a"
                importance="low"
                loading="lazy"
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f8c046147fb32a009ba122f35312aa.svg"
                decoding="async"
                width={23}
                height={23}
                style={{
                  border: "2px solid #0264C8",
                  borderTopLeftRadius: "9999px",
                  borderTopRightRadius: "9999px",
                  borderBottomRightRadius: "9999px",
                  borderBottomLeftRadius: "9999px",
                  objectFit: "none",
                  objectPosition: "50% 50%",
                  marginRight: "4px",
                }}
              />
              <div
                style={{
                  fontSize: "16px",
                  color: "rgb(0, 0, 0)",
                  fontWeight: 500,
                }}
              >
                VND
              </div>
              <img
                id="icon-right"
                style={{ marginLeft: "4px" }}
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg"
                alt=""
              />
            </div>
           
          </div> */}
          {Object.keys(user).length > 0 ? (
            <HeadlessTippy
              placement="bottom-end"
              onClickOutside={() => setVisible(true)}
              interactive={true}
              visible={visible}
              render={(attrs) => (
                <div
                  tabIndex="-1"
                  {...attrs}
                  className="css-1dbjc4n r-1euycsn r-105ug2t r-u8s1d r-zchlnj r-j76wpu"
                  style={{ "margin-top": "4px" }}
                >
                  <div
                    className="css-1dbjc4n r-14lw9ot r-kdyh1x r-b4qz5r r-1udh08x r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t r-13qz1uu"
                    style={{
                      "-webkit-transform": "scaleY(1)",
                      "-ms-transform": "scaleY(1)",
                      transform: "scaleY(1)",
                    }}
                  >
                    <div
                      className="css-1dbjc4n r-6dt33c r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t"
                      style={{
                        "-webkit-transform": "translateY(0px)",
                        "-ms-transform": "translateY(0px)",
                        transform: "translateY(0px)",
                      }}
                    >
                      <div
                        className="css-1dbjc4n r-1f1sjgu"
                        style={{ "min-width": "229px" }}
                      >
                        <h3
                          aria-level={3}
                          dir="auto"
                          role="heading"
                          className="css-4rbku5 css-901oao r-cwxd7f r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-5oul0u r-ymttw5 r-fdjqy7"
                        >
                          Tài khoản
                        </h3>

                        <Link
                          to="/booking/transaction"
                          className="css-4rbku5 r-1awozwy r-6koalj r-ymttw5 r-5njf8e"
                        >
                          <img
                            importance="low"
                            loading="lazy"
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/db4d9fb6f6a0aa3c5e8827a8b0f1e28e.svg"
                            decoding="async"
                            className="r-88pszg"
                            style={{
                              "object-fit": "fill",
                              "object-position": "50% 50%",
                            }}
                          />
                          <div
                            onClick={handleTransaction}
                            dir="auto"
                            className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                          >
                            Xem lịch sử đã đặt
                          </div>
                        </Link>
                        <a
                          href="#"
                          className="css-4rbku5 r-1awozwy r-6koalj r-ymttw5 r-5njf8e"
                        >
                          <img
                            importance="low"
                            loading="lazy"
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6464840154eb190d10525ea67e77648a.svg"
                            decoding="async"
                            className="r-88pszg"
                            style={{
                              "object-fit": "fill",
                              "object-position": "50% 50%",
                            }}
                          />
                          <div
                            onClick={handleLogout}
                            dir="auto"
                            className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                          >
                            Đăng xuất
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            >
              <div>
                {" "}
                <div
                  className="header1-right-item4"
                  onClick={visible ? hide : show}
                >
                  <div style={{ cursor: "pointer" }}>
                    <img
                      alt="a"
                      importance="low"
                      loading="lazy"
                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f2ccb8732da6068a2f24a40aea2bdcdd.svg"
                      decoding="async"
                      width={23}
                      height={23}
                      className="r-tuq35u"
                      style={{
                        backgroundColor: "rgba(205,208,209,1.00)",
                        borderTopLeftRadius: "9999px",
                        borderTopRightRadius: "9999px",
                        borderBottomRightRadius: "9999px",
                        borderBottomLeftRadius: "9999px",
                        objectFit: "fill",
                        objectPosition: "50% 50%",
                        marginRight: "4px",
                      }}
                    />
                    <div
                      style={{
                        fontSize: "16px",
                        color: "rgb(139, 137, 137)",
                        fontWeight: 500,
                      }}
                    >
                      <div>{user.Name}</div>
                    </div>
                    <img
                      id="icon-right"
                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/393c6a1dee81cd3dc84df59672d43edb.svg"
                      style={{ marginLeft: "4px" }}
                      alt=""
                    />
                  </div>
                  <div />
                </div>
              </div>
            </HeadlessTippy>
          ) : (
            <>
              {" "}
              <div className="header1-right-item4">
                <div>
                  <img
                    alt="a"
                    importance="low"
                    loading="lazy"
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f2ccb8732da6068a2f24a40aea2bdcdd.svg"
                    decoding="async"
                    width={23}
                    height={23}
                    className="r-tuq35u"
                    style={{
                      backgroundColor: "rgba(205,208,209,1.00)",
                      borderTopLeftRadius: "9999px",
                      borderTopRightRadius: "9999px",
                      borderBottomRightRadius: "9999px",
                      borderBottomLeftRadius: "9999px",
                      objectFit: "fill",
                      objectPosition: "50% 50%",
                      marginRight: "4px",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "16px",
                      color: "rgb(139, 137, 137)",
                      fontWeight: 500,
                    }}
                  >
                    <Link to="/login">Đăng nhập</Link>
                  </div>
                  <img
                    id="icon-right"
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/393c6a1dee81cd3dc84df59672d43edb.svg"
                    style={{ marginLeft: "4px" }}
                    alt=""
                  />
                </div>
                <div />
              </div>
              <div className="header1-right-item5">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    fontSize: "16px",
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  <Link style={{ color: "white" }} to="/login">
                    Đăng Ký
                  </Link>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {/* <div className="header2">
        <div className="header2-item1">
          <div>Vận chuyển</div>
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg"
            alt=""
          />
        </div>
        <div className="header2-item2">
          <div>Chỗ ở</div>
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg"
            alt=""
          />
        </div>
        <div className="header2-item3">
          <div>Hoạt động giải trí</div>
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg"
            alt=""
          />
        </div>
        <div className="header2-item4">
          <div>Sản phẩm bổ sung</div>
          <img
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg"
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
}
export default Header;
