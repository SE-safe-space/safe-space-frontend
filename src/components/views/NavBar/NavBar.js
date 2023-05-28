import React from 'react'
import '../NavBar/NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
function NavBar() {
  return (
    <div class="nav__wrap">
      <nav class="login">
        <div class="navbar__login">
          <li>
            <Link to="/Login">로그인</Link>
          </li>
          <p>|</p>
          <li>
            <Link to="/SignUpPage">회원가입</Link>
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
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/">커뮤니티</Link>
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
  )
}

export default NavBar
