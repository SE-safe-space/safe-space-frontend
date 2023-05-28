import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Reset } from 'styled-reset'
import LandingPage from './components/views/LandingPage/LandingPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import BoardList from './components/views/BoardList/BoardList'
import BoardWrite from './components/views/BoardWrite/BoardWrite'
import BoardDetail from './components/views/BoardDetail/BoardDetail'
import Login from './components/views/Login/Login'
import Logout from './components/views/Logout/Logout'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/board/worry" element={<BoardList />} />
          <Route path="/board/worry/:id" element={<BoardDetail />} />
          <Route path="/BoardWrite" element={<BoardWrite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
