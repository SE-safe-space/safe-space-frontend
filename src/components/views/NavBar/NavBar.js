import React from 'react'

function NavBar() {
  return (
    <>
      <div class="nav__wrap">
        <nav class="login">
          <div class="navbar__login">
            <li>
              <a href="./login.html">로그인</a>
            </li>
            <p>|</p>
            <li>
              <a href="./signup.html">회원가입</a>
            </li>
          </div>
        </nav>

        <nav class="navbar">
          <div class="navbar__logo">
            <i class="fa-solid fa-person-breastfeeding"></i>
            <a href="index.html">Safe Space</a>
          </div>

          <div class="navbar__menu">
            <li>
              <a href="index.html">홈</a>
            </li>
            <li>
              <a href="commu.html">커뮤니티</a>
            </li>
            <li>
              <a href="chal.html">챌린지</a>
            </li>
            <li>
              <a href="couns.html">상담사</a>
            </li>
            <li>
              <a href="">기타</a>
            </li>
          </div>
          <div class="navbar__blank"></div>

          <a href="javascript:void(0);" class="navbar__toggleBtn">
            <i class="fa-solid fa-bars"></i>
          </a>
        </nav>
      </div>
    </>
  )
}

export default NavBar
