import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import BoardList from './components/views/BoardList/BoardList'
import BoardWrite from './components/views/BoardWrite/BoardWrite'
import Board from './components/views/Board/Board'
import BoardDetailPage from './page/BoardDetailPage'
import Logout from './components/views/Logout/Logout'

import MainPage from './page/MainPage'
import LoginPage from './page/LoginPage'
import SignUpPage from './page/SignUpPage'
// import BoardPage from './page/BoardPage'
import CounselorPage from './page/CounselorPage'
import ProfilePage from './page/ProfilePage'
import BoardWritePage from './page/BoardWritePage'
import GlobalStyle from './page/GlobalStyle'
import SafeSpace from './components/views/SafeSpace/SafeSpace'
import BoardPage from './page/BoardPage'
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
