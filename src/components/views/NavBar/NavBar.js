import React from 'react'
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <>
      <div class="nav__wrap">
        <nav class="login">
          <div class="navbar__login">
            <li>
              <Link to="/loginPage">로그인</Link>
            </li>
            <p>|</p>
            <li>
              <Link to="/signUpPage">회원가입</Link>
            </li>
          </div>
        </nav>

        <nav class="navbar">
          <div class="navbar__logo">
            <i class="fa-solid fa-person-breastfeeding"></i>
            <Link to="/">Safe Space</Link>
          </div>

          <div class="navbar__menu">
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/">커뮤니티</Link>
            </li>
            <li>
              <Link to="/">챌린지</Link>
            </li>
            <li>
              <Link to="/">상담사</Link>
            </li>
            <li>
              <Link to="/">기타</Link>
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
