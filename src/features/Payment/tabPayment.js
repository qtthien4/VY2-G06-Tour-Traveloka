import * as React from "react";
import PropTypes from "prop-types";
import "./css/GlobalCssSlider.css";
import "./css/pay.css";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 843,
        width: 670,
        marginRight: "60px",
      }}
    >
      <Tabs
        TabIndicatorProps={{ style: { backgroundColor: "white" } }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        style={{ backgroundColor: "#073e68", width: "188px" }}
      >
        <div style={{ padding: "15px 32px 10px", display: "flex" }}>
          <img
            style={{ width: "110px", height: "20px", justifyContent: "center" }}
            src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/16/1531738663636-5a904b0e24addce76efebf72eb8e5cb0.png?tr=q-75"
            alt=""
          />
        </div>
        <Tab label="Thẻ thanh toán" {...a11yProps(0)} />
        <Tab label="Chuyển khoản ngân hàng" {...a11yProps(1)} />
        <Tab label="Tại cửa hàng" {...a11yProps(2)} />
        <Tab label="Thẻ ATM nội địa" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={2}>
        <div className="pay">
          <h4 className="title">Chuyển khoản ngân hàng</h4>
          <p>
            Bạn có thể chuyển tiền mặt tại quầy giao dịch hoặc chuyển khoản qua
            Internet Banking và trạm ATM.
          </p>
          <h5>Lưu ý trước khi thanh toán</h5>
          <ul className="ulhandle">
            <li>
              Hiện tại, chúng tôi không chấp nhận chuyển khoản liên ngân hàng
              qua ATM hoặc Internet Banking.
            </li>
            <li>Phí chuyển khoản sẽ do người chuyển trả.</li>
          </ul>
          <h5>Chọn ngân hàng</h5>
          <div className="inputhandle">
            <div style={{ marginBottom: "3px" }}>
              <input
                type="radio"
                name="TRANSFER_scopes"
                defaultValue="vietcom_VND"
                defaultChecked
              />
              <div>VietComBank</div>
            </div>
            <div>
              <input
                type="radio"
                name="TRANSFER_scopes"
                defaultValue="techcom_VND"
              />
              <div>TechComBank</div>
            </div>
          </div>
          <div
            className="form-check form-switch"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Nhập mã giảm giá
            </label>
          </div>
          <div className="detail-price">
            <h4>Chi tiết giá</h4>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left", width: "250px" }}>
                Saigon River Sightseeing - 1 Hour Người lớn x 1
              </div>
              <div style={{ float: "right" }}>499.900 VND</div>
            </div>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left" }}>Mã khớp giao dịch</div>
              <div style={{ float: "right" }}>16 VND</div>
            </div>
            <div>--------------------------------</div>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left" }}>Tổng giá tiền</div>
              <div style={{ float: "right" }}>499.916 VND</div>
            </div>
          </div>
          <div className="accept-pay">
            <div>
              Bằng việc nhấn Thanh toán, bạn đồng ý Điều khoản &amp; Điều kiện
              và Chính sách quyền riêng tư.
            </div>
            <button>Thanh toán Chuyển khoản ngân hàng</button>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="pay">
          <h4 className="title">Tại cửa hàng</h4>
          <h5>Lưu ý trước khi thanh toán</h5>
          <ul className="ulhandle">
            <li>
              Thanh toán phải được thực hiện theo thời hạn quy định và trong
              khung giờ kinh doanh của cửa hàng.
            </li>
            <li>Để tìm cửa hàng gần bạn nhất, vui lòng xem tại đây.</li>
            <li>
              Bạn có thể tiến hành thanh toán tại một trong các cửa hàng sau:
            </li>
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2018/08/15/1534319429277-7db9dcfaae850bda5d0630499079c303.png?tr=q-75"
              alt=""
            />
          </ul>
          <div
            className="form-check form-switch"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Nhập mã giảm giá
            </label>
          </div>
          <div className="detail-price">
            <h4>Chi tiết giá</h4>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left", width: "250px" }}>
                Saigon River Sightseeing - 1 Hour Người lớn x 1
              </div>
              <div style={{ float: "right" }}>499.900 VND</div>
            </div>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left" }}>Phí tiện ích</div>
              <div style={{ float: "right" }}>16.500 VND</div>
            </div>
            <div>--------------------------------</div>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left" }}>Tổng giá tiền</div>
              <div style={{ float: "right" }}>526.400 VND</div>
            </div>
          </div>
          <div className="accept-pay">
            <div>
              Bằng việc nhấn Thanh toán, bạn đồng ý Điều khoản &amp; Điều kiện
              và Chính sách quyền riêng tư.
            </div>
            <button>Thanh toán Chuyển khoản ngân hàng</button>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="pay">
          <div style={{ display: "flex", position: "relative" }}>
            <h4 className="title">Thẻ ATM nội địa</h4>
            <img
              style={{ height: "24px", position: "absolute", right: "24px" }}
              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/03/20/1489981839102-323bf608171cfdf6e5ab2b6c9f1ecb78.png?tr=q-75"
              alt=""
            />
          </div>
          <h5>Lưu ý trước khi thanh toán</h5>
          <ul className="ulhandle">
            <li>
              Thẻ thanh toán phải do ngân hàng nội địa phát hành và đã được kích
              hoạt chức năng thanh toán trực tuyến.
            </li>
            <li>
              Vui lòng xem hướng dẫn chi tiết <a href="/#">tại đây</a>{" "}
            </li>
          </ul>
          <div
            className="form-check form-switch"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Nhập mã giảm giá
            </label>
          </div>
          <div className="detail-price">
            <h4>Chi tiết giá</h4>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left", width: "250px" }}>
                Saigon River Sightseeing - 1 Hour Người lớn x 1
              </div>
              <div style={{ float: "right" }}>499.900 VND</div>
            </div>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left" }}>Phí tiện ích</div>
              <div style={{ float: "right" }}>11.000 VND</div>
            </div>
            <div>--------------------------------</div>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left" }}>Tổng giá tiền</div>
              <div style={{ float: "right" }}>499.900 VND</div>
            </div>
          </div>
          <div className="accept-pay">
            <div>
              Bằng việc nhấn Thanh toán, bạn đồng ý Điều khoản &amp; Điều kiện
              và Chính sách quyền riêng tư.
            </div>
            <button>Thanh toán Chuyển khoản ngân hàng</button>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="pay">
          <div style={{ display: "flex", position: "relative" }}>
            <h4 className="title">Thẻ thanh toán</h4>
            <div style={{ position: "absolute", right: "24px" }}>
              <img
                style={{ height: "24px" }}
                src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/17/1484655630637-0dcca3761eb5910f1835f438f153bfae.png?tr=q-75"
                alt=""
              />
              <img
                style={{ height: "24px" }}
                src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/06/1483707776912-1abb188266f6d5b3f2e27f4733ca32e9.png?tr=q-75"
                alt=""
              />
              <img
                style={{ height: "24px" }}
                src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/06/1483707787206-abc175b224ab92a6967e24bc17c30f45.png?tr=q-75"
                alt=""
              />
              <img
                style={{ height: "24px" }}
                src="https://ik.imagekit.io/tvlk/image/imageResource/2017/07/10/1499673365437-1e1522e5cc323e7e8a7b57b90e81dbc9.png?tr=q-75"
                alt=""
              />
            </div>
          </div>
          <div className="inputhandle">
            <label>Số thẻ tín dụng </label>
            <input
              type="text"
              placeholder="16 chữ số trên mặt thẻ"
              style={{
                width: "390px",
                border: "1px solid #dadada",
                borderRadius: "5px",
              }}
            />
            <br />
            <label>Hiệu lực đến </label>
            <input
              type="text"
              placeholder="MM/YY"
              style={{
                width: "125px",
                marginRight: "30px",
                border: "1px solid #dadada",
                borderRadius: "5px",
              }}
            />
            <label>CCV</label>
            <input
              type="text"
              placeholder="3 số CCV"
              style={{
                width: "120px",
                border: "1px solid #dadada",
                borderRadius: "5px",
              }}
            />
            <br />
            <label>Tên trên thẻ </label>
            <input
              type="text"
              placeholder="Tên trên thẻ"
              style={{ border: "1px solid #dadada", borderRadius: "5px" }}
            />
            <br />
            <label>Chưa trả góp </label>
            <a href="/#">Learn more</a>
          </div>
          <div
            className="form-check form-switch"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Nhập mã giảm giá
            </label>
          </div>
          <div>
            <input
              type="text"
              placeholder="VD: CHEAP TRAVEL"
              style={{
                border: "1px solid #dadada",
                borderRadius: "5px",
                marginRight: "8px",
              }}
            />
            <button style={{ border: "none" }}>Áp dụng mã</button>
          </div>
          <div className="detail-price">
            <h4>Chi tiết giá</h4>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left", width: "250px" }}>
                Saigon River Sightseeing - 1 Hour Người lớn x 1
              </div>
              <div style={{ float: "right" }}>499.900 VND</div>
            </div>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left" }}>Phí tiện ích</div>
              <div style={{ float: "right" }}>11.000 VND</div>
            </div>
            <div>--------------------------------</div>
            <div style={{ overflow: "auto" }}>
              <div style={{ float: "left" }}>Tổng giá tiền</div>
              <div style={{ float: "right" }}>499.900 VND</div>
            </div>
          </div>
          <div className="accept-pay">
            <div>
              Bằng việc nhấn Thanh toán, bạn đồng ý Điều khoản &amp; Điều kiện
              và Chính sách quyền riêng tư.
            </div>
            <button>Thanh toán Chuyển khoản ngân hàng</button>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
export default VerticalTabs;