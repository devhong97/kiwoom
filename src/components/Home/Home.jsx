import FirstSlick from "../Slick/FirstSlick";
import Header from "./../Header/Header";
import Aside from "./Aside";
import SecondSlick from "../Slick/SecondSlick";
import ThirdSlick from "./../Slick/ThirdSlick";

const Home = () => {
  return (
    <div className="wrap">
      <Aside />
      <Header />
      <FirstSlick />
      <div className="section">
        <div className="section-inner">
          <p>INTRODUCTION</p>
        </div>
        <div className="section-sub">
          <p>키움성장 소개</p>
        </div>
        <SecondSlick />
        <div className="section-txt">
          <p>
            * 바른키움은 명확한 성장판 나이 판독을 통해, 차별화된 최적의
            솔루션을 제공합니다.
          </p>
        </div>
        <div className="section-txt2">
          <p>진료분야</p>
        </div>
      </div>

      <section className="section-2">
        <div className="section2-left">
          <div className="section2-left-img"></div>
          <div className="section2-txt">
            <p>성장판 판독 솔루션</p>
            <p>
              아이들의 성장/성조숙증/비만을 진료하는데 있어, 다년간의 수많은
              환자 사례를 통해, 정확하게 성장판 나이를 판독하는 것이 진단 및
              치료에 있어 가장 중요합니다.
            </p>
            <p>
              바른키움은 명확한 성장판 나이 판독을 통해 차별화된 최적의 솔루션을
              제공합니다.
            </p>
          </div>
        </div>
        <div className="section2-right">
          <div className="section2-right-img"></div>
          <div className="section2-txt">
            <p>키성장클리닉</p>
            <p>
              골연령 및 키성장예측
              <br /> 성장인자혈액정밀검사
              <br /> 성장호르몬 주사 치료
            </p>
            <p>
              바른키움은 명확한 성장판 나이 판독을 통해 차별화된 최적의 솔루션을
              제공합니다.
            </p>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="section3-left">
          <p>
            <ul>
              <li>[ 약력 ]</li>
              <li>의학박사</li>
              <li>
                소아내분비세부전문의 인제대학교백병원, 고려대학교병원 외래교수,
                임상강사 UCLA소아내분비연수 소아청소년과의사회 학술이사
              </li>
              <li>소아초음파연구회 회장</li>
              <li>소아내분비학회 정회원</li>
              <li>식약처 중앙약사심의위원회 위원</li>
            </ul>
          </p>
        </div>
        <div className="section3-right">
          <ul>
            <li>[ 강의 및 방송 ]</li>
            <li>미국ENDO학회 성조숙증 연구 발표</li>
            <li>성조숙증 키성장 연구 다수 발표 강의</li>
            <li>대한소아청소년과학술대회 키성장 강의</li>
            <li>소아청소년과전문의 초음파 교육 및 강의</li>
            <li>소아청소년과 전문의 ‘심층교육’ 성장교육</li>
            <li>KBS ‘행복한교실’ 소아비만</li>
            <li>KBS ‘생생정보통’ 성조숙증</li>
            <li>MBC ‘생방송오늘아침’ 성조숙증 방송</li>
          </ul>
        </div>
        <div className="section3-txt">
          <p>
            대학병원부터 서울 첫 성장클리닉 개인 의원으로 시작하여 많은 의사
            선생님들과 부모님들이 자녀를 맡겨 주시는 성장 진료로 20여년의 역사가
            되어가고 있습니다. 소중한 임상 경험 및 전문 지식을 바탕으로 한명
            한명 소중히 더 정성스런 진료를 위해 노력하도록 하겠습니다.
          </p>
        </div>
      </section>

      <div className="section">
        <div className="section-inner">
          <p>SOLUTIONS</p>
        </div>
      </div>
      <section className="section-4">
        <div className="section4-left">
          <div className="solutions-img"></div>
        </div>
        <div className="section4-right">
          <h3>성장판 판독 솔루션</h3>
          <p>
            아이들의 성장/성조숙증/비만을 진료하는데 있어, 다년간의 수많은 환자
            사례를 통해, 정확하게 성장판 나이를 판독하는 것이 진단 및 치료에
            있어 가장 중요합니다.
          </p>
          <p>
            바른키움은 명확한 성장판 나이 판독을 통해, 차별화된 최적의 솔루션을
            제공합니다.
          </p>
        </div>
      </section>

      <section className="section-5">
        <ThirdSlick />
      </section>

      <section className="section">
        <div className="section-inner">
          <p>REVIEW</p>
        </div>
        <div className="section-txt">
          <p>
            * 바른키움은 명확한 성장판 나이 판독을 통해, 차별화된 최적의
            솔루션을 제공합니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p>INFORMATION</p>
        </div>
        <div className="section-txt">
          <p>
            * 바른키움은 명확한 성장판 나이 판독을 통해, 차별화된 최적의
            솔루션을 제공합니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
