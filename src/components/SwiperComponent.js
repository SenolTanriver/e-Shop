import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import uc from "../images/3.png"
import yedi from "../images/7.png"
import sekiz from "../images/8.png"
import dokuz from "../images/9.png"
import on from "../images/10.png"
import dort from "../images/4.png"
import bes from "../images/5.png"
import alti from "../images/6.png"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination, Navigation, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide><img src={uc} alt="resim-1" /></SwiperSlide>
        <SwiperSlide><img src={yedi} alt="resim-2" /></SwiperSlide>
        <SwiperSlide><img src={sekiz} alt="resim-3" /></SwiperSlide>
        <SwiperSlide><img src={dokuz} alt="resim-4" /></SwiperSlide>
        <SwiperSlide><img src={on} alt="resim-5" /></SwiperSlide>
        <SwiperSlide><img src={dort} alt="resim-6" /></SwiperSlide>
        <SwiperSlide><img src={bes} alt="resim-7" /></SwiperSlide>
        <SwiperSlide><img src={alti} alt="resim-8" /></SwiperSlide>
      </Swiper>
    </>
  );
}
