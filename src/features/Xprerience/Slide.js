import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/Slide.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function Slide({ list, handleOnclickXperience }) {
  return (
    <Swiper
      slidesPerView={list[0].slideWiew}
      spaceBetween={list[0].spaceView}
      loop={false}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      style={{ width: `${list[0].width}` }}
    >
      {list.map((item) =>
        item.src.map((src, index) => (
          <SwiperSlide>
            <div
              onClick={() => handleOnclickXperience(src.id)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={src.link}>
                <img
                  src={src.img}
                  alt=""
                  style={{ width: `${list[0].width}` }}
                />
              </Link>
              {/* <a style={{ marginTop: "15px" }}>{src.name}</a> */}
            </div>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}

export default Slide;
