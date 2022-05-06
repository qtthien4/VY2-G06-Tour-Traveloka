import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import Banner from "./Banner";
import Navbar from "./NavBar";
import Slide from "./Slide";
import { listTour, listPromotion, listPlace } from "./Containers/ListHome.js";
import Footer from "components/Footer";

export default function Xperience() {
  //handleOnclickXperience
  const navigate = useNavigate();
  
  const handleOnclickXperience = (nameType) => {
    // console.log("id experience", nameType);

    navigate(`/activities/category/${nameType}`);
  };
  //display id tour theo idType

  //
  return (
    // <div>
    //   <Link to="/activities/category/daytour">daytour</Link> <br />
    //   <Link to="/activities/vietnam/product">Product</Link> <br />
    //   <Link to="/booking">Booking</Link>
    // </div>

    <div className="background_change">
      <Navbar />
      <Banner />

      <div style={{ marginLeft: "100px", marginTop: "50px" }}>
        <h3>Khám phá các danh mục Xperience</h3>
        <p>Xem thật kỹ các hoạt động và trải nghiệm độc đáo nhé</p>
      </div>
      <Slide handleOnclickXperience={handleOnclickXperience} list={listTour} />

      <div style={{ marginLeft: "100px", marginTop: "50px" }}>
        <h3>Khuyến mãi Xperience hiện hành</h3>
        <p>Tiết kiệm lớn với những ưu đãi đặc biệt giới hạn của chúng tôi</p>
      </div>
      <Slide list={listPromotion} />

      <div style={{ marginLeft: "100px", marginTop: "50px" }}>
        <h3>Bí kíp du lịch an toàn hậu Covid</h3>
      </div>
      <Slide list={listPlace} />

      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
}
