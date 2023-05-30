import React from 'react'
import '../Profile/Profile.css'

function Profile() {
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
          <span>이메일:</span>
          <span>이름:</span>
          <span>별명:</span>
          <span>성별:</span>
          <span>연락처:</span>
          <span>생년월일:</span>
          <button formAction="">비밀번호 수정</button>
        </div>
        <div className="profile__safespace">
          <h1>상담방 정보</h1>
          <ul>
            <li>상담방 링크1</li>
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
