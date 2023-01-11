import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./carousel.css";
import { Pagination, Autoplay, Navigation, EffectCreative } from "swiper";
import { useEffect, useRef, useState } from "react";

const Carousel = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {props?.children}
      </Swiper>
    </>
  );
};

export default Carousel;
