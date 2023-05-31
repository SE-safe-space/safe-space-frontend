import React from 'react'
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { IoLogoGithub } from 'react-icons/io'
function NavBar() {
  return (
    <>
      <div className="nav__wrap">
        <nav className="login">
          <div className="navbar__login">
      <div className="nav__wrap">
        <nav className="login">
          <div className="navbar__login">
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <p>|</p>
            <li>
              <Link to="/signUp">회원가입</Link>
            </li>
          </div>
        </nav>

        <nav className="navbar">
          <div className="navbar__logo">
            <i className="fa-solid fa-person-breastfeeding"></i>
            <Link to="/">Safe Space</Link>
          </div>

          <div className="navbar__menu">
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/board/worry">커뮤니티</Link>
            </li>
            {/* <li>
              <Link to="/">챌린지</Link>
            </li> */}
            <li>
              <Link to="/counselor">상담사</Link>
            </li>
            {/* <li>
              <Link to="/">기타</Link>
            </li> */}
            <li>
              <Link to="/profile/id">
                <FiUser /> 프로필
              </Link>
            </li>
          </div>
          <div className="navbar__blank"></div>

          <Link to="javascript:void(0);" className="navbar__toggleBtn">
            <i className="fa-solid fa-bars"></i>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default NavBar
