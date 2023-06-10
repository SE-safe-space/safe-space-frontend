import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import BoardList from './components/views/BoardList/BoardList'
import BoardWrite from './components/views/BoardWrite/BoardWrite'
import Board from './components/views/Board/Board'
import BoardDetailPage from './page/BoardDetailPage'
import Logout from './components/views/Logout/Logout'
import { checkAuth } from './api/Users'
import { loginAction } from './redux/actions'


import MainPage from './page/MainPage'
import LoginPage from './page/LoginPage'
import SignUpPage from './page/SignUpPage'
// import BoardPage from './page/BoardPage'
import CounselorPage from './page/CounselorPage'
import CounselorDetailPage from './page/CounselorDetailPage'
import ReservationPage from './page/ReservationPage'
import ProfilePage from './page/ProfilePage'
import BoardWritePage from './page/BoardWritePage'
import GlobalStyle from './page/GlobalStyle'
import SafeSpace from './components/views/SafeSpace/SafeSpace'
import BoardPage from './page/BoardPage'

const App = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.authToken)

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // access token을 사용하여 인증 확인
        const response = await checkAuth(accessToken);
        
        if (response.authenticated) {
          // 인증 성공시 리덕스 스토어에 로그인 액션 디스패치
          dispatch(loginAction(response.user));
        } else {
          // 인증 실패시 로그인 페이지로 이동
          window.location.href = '/login';
        }
      } catch (error) {
        console.error('인증 확인 중 오류 발생:', error);
        // 오류 처리 로직 작성
      }
    };

    checkAuthentication();
  }, [accessToken, dispatch]);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/counselor" element={<CounselorPage />} />
          <Route path="/counselor/:id" element={<CounselorDetailPage />} />
          <Route path="/reservation/:id" element={<ReservationPage />} />
          <Route path="/board/worry" element={<BoardPage />} />
          <Route path="/board/worry/:id" element={<BoardDetailPage />} />
          <Route path="/boardwrite" element={<BoardWritePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/safespace" element={<SafeSpace />} />
          <Route path="/Board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
