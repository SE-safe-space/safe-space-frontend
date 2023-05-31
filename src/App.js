import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import BoardList from './components/views/BoardList/BoardList'
import BoardWrite from './components/views/BoardWrite/BoardWrite'
import BoardDetail from './components/views/BoardDetail/BoardDetail'
import Logout from './components/views/Logout/Logout'

import MainPage from './page/MainPage'
import LoginPage from './page/LoginPage'
import SignUpPage from './page/SignUpPage'
// import BoardPage from './page/BoardPage'
import CounselorPage from './page/CounselorPage'
import ProfilePage from './page/ProfilePage'
import BoardWritePage from './page/BoardWritePage'
import GlobalStyle from './page/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/counselor" element={<CounselorPage />} />
          <Route path="/board/worry" element={<BoardList />} />
          <Route path="/board/worry/:id" element={<BoardDetail />} />
          <Route path="/boardwrite" element={<BoardWritePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
