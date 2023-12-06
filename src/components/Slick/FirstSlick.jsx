import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useNavigate } from "react-router-dom";

const FirstSlick = () => {
  const navigate = useNavigate();

  return (
    <div className="first-slide-wrap">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide className="swiper_slide">
          <div className="slide_image first">
            <div className="banner_text_box">
              <div className="banner_text">바른키움의원1</div>
              <div className="banner_text_sub">
                아이들의 바른 성장을 위한,
                <br /> 진정성을 담은 최선의 진료를 약속 드립니다.
              </div>
              <button onClick={() => navigate("/")} className="banner_detail">
                자세히 알아보기
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper_slide">
          <div className="slide_image second">
            {" "}
            <div className="banner_text_box">
              <div className="banner_text">바른키움의원2</div>
              <div className="banner_text_sub">
                아이들의 바른 성장을 위한,
                <br /> 진정성을 담은 최선의 진료를 약속 드립니다.
              </div>
              <button className="banner_detail">자세히 알아보기</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper_slide">
          <div className="slide_image third">
            {" "}
            <div className="banner_text_box">
              <div className="banner_text">바른키움의원3</div>
              <div className="banner_text_sub">
                아이들의 바른 성장을 위한,
                <br /> 진정성을 담은 최선의 진료를 약속 드립니다.
              </div>
              <button className="banner_detail">자세히 알아보기</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper_slide">
          <div className="slide_image fourth">
            {" "}
            <div className="banner_text_box">
              <div className="banner_text">바른키움의원4</div>
              <div className="banner_text_sub">
                아이들의 바른 성장을 위한,
                <br /> 진정성을 담은 최선의 진료를 약속 드립니다.
              </div>
              <button className="banner_detail">자세히 알아보기</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FirstSlick;
