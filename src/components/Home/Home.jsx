import FirstSlick from "../Slick/FirstSlick";
import Header from "./../Header/Header";
import Aside from "./Aside";
import SecondSlick from "../Slick/SecondSlick";
import ThirdSlick from "./../Slick/ThirdSlick";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="wrap main_wrap">
      {/* <Aside /> */}
      <Header />
      <FirstSlick />
      <div className="section second_section">
        <div className="section-inner">
          <p>INTRODUCTION</p>
        </div>
        <SecondSlick />
        <div className="section-txt">
          <p>
            * 바른키움은 명확한 성장판 나이 판독을 통해, 차별화된 최적의
            솔루션을 제공합니다.
          </p>
        </div>
        <div className="second_middle_box">
          <div className="middle_text">
            대학병원부터 서울 첫 성장클리닉 개인 의원으로 시작하여 많은 의사
            선생님들과 부모님들이 자녀를 맡겨 주시는 성장 진료로 20여년의 역사가
            되어가고 있습니다. 소중한 임상 경험 및 전문 지식을 바탕으로 한명
            한명 소중히 더 정성스런 진료를 위해 노력하도록 하겠습니다.
          </div>
        </div>
      </div>

      <div className="section third_section">
        <div className="section-inner">
          <p>MEDICAL FIELD</p>
        </div>
      </div>
      <div className="third_back">
        <div className="third_container">
          <div className="third_contents_box left">
            <div className="third_img"></div>
            <div className="third_text_box">
              <div className="contents_title">성장판 판독 솔루션</div>
              <div className="contents_text">
                아이들의 성장/성조숙증/비만을 진료하는데 있어, 다년간의 수많은
                환자 사례를 통해, 정확하게 성장판 나이를 판독하는 것이 진단 및
                치료에 있어 가장 중요합니다.
              </div>
              <div className="contents_text sub">
                바른키움은 명확한 성장판 나이 판독을 통해, 차별화된 최적의
                솔루션을 제공합니다.
              </div>
            </div>
          </div>
          <div className="third_contents_box right">
            <div className="third_img"></div>
            <div className="third_text_box">
              <div className="contents_title">성장판 판독 솔루션</div>
              <div className="contents_text">
                골연령 및 키성장예측 성장인자혈액정밀검사 성장호르몬 주사 치료
              </div>
              <div className="contents_text sub">
                바른키움은 명확한 성장판 나이 판독을 통해, 차별화된 최적의
                솔루션을 제공합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section fourth_section">
        <div className="section-inner">
          <p>MEDIA</p>
        </div>
      </div>
      <div className="fourth_back">
        <div className="fourth_slick_box">
          <ThirdSlick></ThirdSlick>
        </div>
        <div className="fourth_middle_box">
          <div className="middle_text_box">
            대학병원부터 서울 첫 성장클리닉 개인 의원으로 시작하여 많은 의사
            선생님들과 부모님들이 자녀를 맡겨 주시는 성장 진료로 20여년의 역사가
            되어가고 있습니다. 소중한 임상 경험 및 전문 지식을 바탕으로 한명
            한명 소중히 더 정성스런 진료를 위해 노력하도록 하겠습니다.
          </div>
          <div className="middle_btn_box">
            <div className="middle_btn">구독하기</div>
          </div>
        </div>
      </div>
      <div className="middle_banner_box">
        <div className="middle_banner"></div>
      </div>
      <div className="section fifth_section">
        <div className="section-inner">
          <p>REVEIW</p>
        </div>
      </div>
      <div className="fifth_back">
        <div className="fifth_container">
          <div className="fifth_row">
            <div className="fifth_main_box">
              <div className="main_icon"></div>
              <div className="main_text">키움 고객님이 남겨주신 리뷰</div>
              <div className="more_btn_box">
                <div className="more_btn">모두 보기 > </div>
              </div>
            </div>
            <div className="review_box">
              <div className="review_img"></div>
              <div className="review_text_box">
                <div className="review_title">
                  친절한 진찰과 전문적인 어쩌고 저쩌고
                </div>
                <div className="review_text">
                  gula eget dolor. Aenean massa. Cum sociis toque penatibus et
                  magnis dis parturient montes, netur ridiculus mus. Donec quam
                  felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section sixth_section">
        <div className="section-inner">
          <p>INFORMATION</p>
        </div>
      </div>
      <div className="sixth_back">
        <div className="sixth_container">
          <div className="map_box">
            <Map></Map>
          </div>
          <div className="sixth_contents_box">
            <div className="contents_title sub">키움성장의원</div>
            <div className="contents_title">
              서울특별시 서초구 반포동 18-3
              <br /> 래미안퍼스티지 중심상가 3층
            </div>
            <div className="time_text_box">
              <div className="time_text">월 – 목 : AM 10 : 00 ~ PM 19 : 00</div>
              <div className="time_text">금요일 : AM 10 : 00 ~ PM 20 : 00</div>
              <div className="time_text blue">
                토요일 : AM 10 : 00 ~ PM 16 : 00
              </div>
            </div>
            <div className="tel_text">02-532-8575</div>
            <div className="sub_text">
              건물 3층에 위치 고속터미널역 출입구 6번 출구에서274m 지하상가출구
              1번출구(래미안퍼스티지아파트)에서 에스컬레이터로 연결됩니다.
            </div>
            <div className="sub_text sub">지하 2,3층 주차장, 2시간무료</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
