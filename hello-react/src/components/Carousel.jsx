import React from "react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "./../assets/css/carousel-style.css";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
function img_url() {
  return (
    "https://loremflickr.com/2000/600/pet?random=" +
    Math.floor(Math.random() * 100000)
  );
}

export default function Carousel() {
  var rows = [];
  for (var i = 0; i < 10; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(
      <SwiperSlide>
        <img src={img_url()} className="h-auto rounded-3xl" />
      </SwiperSlide>
    );
  }
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper h-full"
      >
        {rows}
      </Swiper>
    </>
  );
}
