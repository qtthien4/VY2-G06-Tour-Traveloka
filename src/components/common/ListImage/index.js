import React from "react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ListImage({ tour, listImage }) {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{ height: "100%", width: "100%" }} src={tour.ImageUrl} />
        </SwiperSlide>
        {listImage.map((list) => (
          <SwiperSlide>
            <img style={{ height: "100%", width: "100%" }} src={list.Link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
