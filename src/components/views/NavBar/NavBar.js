import React from 'react'
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { IoLogoGithub } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate()
  const IsLogin = () => {
    if (accessToken != null) {

      const handleClick = () => {
        navigate('/logout');
      };

      return (
        <div className="navbar__login">
          <button onClick={handleClick}>로그아웃</button>
        </div>
      )
    } else {
      return (
        <div className="navbar__login">
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <p>|</p>
          <li>
            <Link to="/signUp">회원가입</Link>
          </li>
        </div>
      )
    }
  }

  return (
    <>
      <div className="nav__wrap">
        <nav className="login">
          <IsLogin />
        </nav>

        <nav className="navbar">
          <div className="navbar__logo">
            <IoLogoGithub />
            <Link to="/">Safe Space</Link>
          </div>

          <div className="navbar__menu">
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/board/worry">커뮤니티</Link>
            </li>
            <li>
              <Link to="/counselor">상담사</Link>
            </li>
            <li>
              <Link to="/profile/id">
                <FiUser /> 프로필
              </Link>
            </li>
          </div>
          <div className="navbar__blank"></div>
          <a href="javascript:void(0);" className="navbar__toggleBtn">
            <i className="fa-solid fa-bars"></i>
          </a>
        </nav>
      </div>
    </>
  )
}

export default NavBar
