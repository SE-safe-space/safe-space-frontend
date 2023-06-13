import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import '../Profile/Profile.css'

const Profile = () => {
  const [user, setUser] = useState([])
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken')

  /*const [password, setPassword] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch('https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/member/password', { password });
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

  const [picture, setPicture] = useState(null)

  const handlePictureChange = (e) => {
    const selectedPicture = e.target.files[0]
    setPicture(selectedPicture)
  }

  const handleSubmitPicture = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append('id', user.id)
      formData.append('file', picture)

      const response = await axios.patch(
        'https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/member/image',
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      console.log('Picture updated successfully:', response.data)
      window.location.reload()
    } catch (error) {
      console.error('Error updating picture:', error.response.data)
    }
  }

  const [reservationList, setReservationList] = useState([])

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        let endpoint = ''

        const response = await axios.get(
          `https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/consult/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        setReservationList(response.data)
      } catch (error) {
        console.error('Error fetching reservations:', error)
      }
    }

    fetchReservations()
  }, [user])

  const handleAcceptReservation = async (memberId, counselorId) => {
    try {
      const response = await axios.post(
        'https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/consult/accept',
        { memberId, counselorId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      console.log(response.data)
      window.location.reload()
    } catch (error) {
      console.error('Error accepting reservation:', error)
    }
  }

  const handleOpenNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer, width=450, height=520')
  }

  return (
    <>
      <div className="content profile__header">
        <span>나의 공간</span>
      </div>
      <div className="profile">
        <div className="profile__privacy">
          <h1>프로필</h1>
          <img
            className="profile__img"
            alt="profile_img"
            src={user.profileImage}
          />
          <form onSubmit={handleSubmitPicture}>
            <label htmlFor="pictureInput">
              <input
                type="file"
                accept="image/*"
                id="pictureInput"
                onChange={handlePictureChange}
              />
            </label>
            <button type="submit">사진 수정</button>
          </form>
          <span>이메일: {user.email}</span>
          <span>이름: {user.name}</span>
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
          {reservationList.length > 0 ? (
            <ul>
              <li>
                <span>타입</span>
                <span>내용</span>
                <span>예약상황</span>
                <span></span>
              </li>
              {reservationList.map((reservation) => (
                <li key={reservation.id}>
                  <span>{reservation.type}</span>
                  <span>{reservation.text}</span>
                  <span>{reservation.accept}</span>
                  <span>{user.type === 'COUNSELOR' &&
                    reservation.accept === 'WAIT' && (
                      <button
                        onClick={() =>
                          handleAcceptReservation(
                            reservation.memberId,
                            reservation.counselorId,
                          )
                        }
                      >
                        수락
                      </button>
                    )}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>예약이 없습니다.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Profile
