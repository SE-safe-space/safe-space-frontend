import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import BoardList from './components/views/BoardList/BoardList'
import BoardWrite from './components/views/BoardWrite/BoardWrite'
import BoardDetail from './components/views/BoardDetail/BoardDetail'
import Logout from './components/views/Logout/Logout'
import { createGlobalStyle } from 'styled-components'

import MainPage from './page/MainPage'
import LoginPage from './page/LoginPage'
import SignUpPage from './page/SignUpPage'
import CounselorPage from './page/CounselorPage'

const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  font-family: "NotoSansKR-Medium";
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

input {
  border: none;
}

input:focus {
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
}  
.content{
    padding: 90px 10px 0;
  }
  /* other styles */
`
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/counselor" element={<CounselorPage />} />
          <Route path="/board/worry" element={<BoardList />} />
          <Route path="/board/worry/:id" element={<BoardDetail />} />
          <Route path="/BoardWrite" element={<BoardWrite />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
