import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import '../Profile/Profile.css'

const Profile = () => {

  const [user, setUser] = useState(null)
  const { accessToken } = useSelector((state) => state.authToken)

  useEffect(() => {
    const FetchUserInfo = async () => {
      try {
        const response = await axios.get(
          'https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/member/me',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            },
          },
        )

        setUser(response.data)
      } catch (error) {
        console.error('Error fetching user information:', error)
      }
    }

    FetchUserInfo()
  }, [])

  const handleOpenNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer, width=400, height=500')
  }

  return (
    <>
      <div className="content profile__header">
        <span>나의 공간</span>
        <button>로그아웃</button>
      </div>
      <div className="profile">
        <div className="profile__privacy">
          <h1>프로필</h1>
          <img className="profile__img" alt="profile_img" src="" />
          <button formAction="">사진 수정</button>
          {/* 프론트 로직 추가 필요 */}
          <span>이메일:{user.email}</span>
          <span>이름:</span>
          <span>별명:</span>
          <span>성별:</span>
          <span>연락처:</span>
          <button formAction="">비밀번호 수정</button>
        </div>
        <div className="profile__safespace">
          <h1>상담방 정보</h1>
          <ul>
            <li>
              <button onClick={() => handleOpenNewTab('/safespace')}>
                상담방 링크
              </button>
            </li>
            <li>상담방 링크2</li>
          </ul>
        </div>
        <div className="profile__reservation">
          <h1>예약 정보</h1>
          <ul>
            <li>예약 리스트</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Profile
