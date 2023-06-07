import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import '../Profile/Profile.css'

const Profile = () => {
  const [user, setUser] = useState([])
  const navigate = useNavigate()
  const { accessToken } = useSelector((state) => state.authToken)
  
  /*const [picture, setPicture] = useState(null)

  const handlePictureChange = (e) => {
    const selectedPicture = e.target.files[0];
    setPicture(selectedPicture);
  };

  const handleSubmitPicture = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('picture', picture);

      const response = await axios.patch('https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/member/image', formData);
      console.log('Picture updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating picture:', error.response.data);
    }
  };*/
  
  /*const [password, setPassword] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/update-password', { password });
      console.log('Password updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating password:', error.response.data);
    }
  };*/


  useEffect(() => {
    const FetchUserInfo = async () => {
      if (!accessToken) {
        // Access token is null, display message box
        window.alert('로그인이 필요합니다.')
        navigate('/login') // Navigate to '/login'
        return
      }

      try {
        const response = await axios.get(
          'https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/member/me',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )

        setUser(response.data)
        console.log(user)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching user information:', error)
      }
    }

    FetchUserInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {/*사진 수정 처리 예
            <form onSubmit={handleSubmitPicture}>
            <label>
              New Picture:
              <input type="file" accept="image/*" onChange={handlePictureChange} />
            </label>
            <button type="submit">Change Picture</button>
          </form>
          */}
          {/* 프론트 로직 추가 필요 */}
          <span>이메일: {user.email}</span>
          <span>이름: {user.name}</span>
          {/* 별명 수정 기능? */}
          <span>별명:</span>
          <span>성별: {user.sex === 1 ? `남성` : `여성`}</span>
          <span>연락처: {user.phoneNumber}</span>
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
