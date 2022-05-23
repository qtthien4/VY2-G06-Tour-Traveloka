import { ArrowDropDown } from "@material-ui/icons";
import Tippy from "@tippyjs/react";
import React, { useRef, useState } from "react";

export default function BookVisitCustomer({ children, ...props }) {
  const { visible, setVisible, counter } = props;
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const refTippy = useRef();
  const refButton = useRef();

  return (
    <div>
      <div>
        <Tippy
          style={{ transform: "translate3d(455.5px, 2550px, 0px)" }}
          reference={refTippy}
          placement="bottom"
          content={
            <div
              style={{
                borderRadius: "5px",
                marginLeft: "70px",
                height: "133px",
                width: "450px",
                background: "white",
              }}
              className=""
            >
              {children}
            </div>
          }
          visible={visible}
          interactive={true}
          onClickOutside={hide}
        >
          <div ref={refButton} onClick={visible ? hide : show}>
            <div className="main-d-flex main-align-item-center">
              <img
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/accfeba7f43edb20e4858113abf756d2.svg"
                alt=""
              />
              <div style={{ margin: "5px 10px 0px 10px" }}>
                <h4 style={{ marginBottom: "10px" }}>Tổng số khách truy cập</h4>
                <p style={{ margin: 0 }}>{counter} người lớn</p>
              </div>
              <ArrowDropDown />
            </div>
          </div>
        </Tippy>
      </div>
    </div>
  );
}
