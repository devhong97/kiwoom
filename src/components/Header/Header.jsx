import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const movePage = (path) => {
    navigate(path);
    //window.location.reload();
  };

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-logo"></div>
        <div className="header-menu">
          <ul>
            <li>
              <div onClick={() => movePage("/about")}>키움성장소개</div>
            </li>
            <li>
              <div onClick={() => movePage("/row")}>성장클리닉</div>
            </li>
            <li>
              <div onClick={() => movePage("/row")}>성조숙증</div>
            </li>
            <li>
              <div onClick={() => movePage("/row")}>커뮤니티</div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
