import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
// import { useNavigate } from "react-router-dom";

const SecondSlick = () => {
  //const navigate = useNavigate();

  /* 반응형 슬라이드 이미지 갯수*/
  const breakpoints = {
    281: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  };
  return (
    <div className="second-slide-wrap">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={breakpoints}
      >
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <SwiperSlide className="swiper_slide">
          <div className="slide_image first">
            <div className="banner_text_box"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper_slide">
          <div className="slide_image second">
            {" "}
            <div className="banner_text_box"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper_slide">
          <div className="slide_image third">
            {" "}
            <div className="banner_text_box"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper_slide">
          <div className="slide_image fourth">
            {" "}
            <div className="banner_text_box"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper_slide">
          <div className="slide_image fiveth">
            {" "}
            <div className="banner_text_box"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SecondSlick;
