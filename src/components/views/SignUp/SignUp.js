import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../SignUp/SignUp.css'

function SignUp() {

  const navigate = useNavigate()

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Name, setName] = useState('')
  const [Sex, setSex] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onSexHandler = (event) => {
    setSex(parseInt(event.currentTarget.value))
  }
  const onPhoneNumberHandler = (event) => {
    setPhoneNumber(event.currentTarget.value)
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault()

    let body = {
      email: Email,
      type: 'MEMBER',
      password: Password,
      name: Name,
      sex: Sex,
      phoneNumber: PhoneNumber,
    }
    console.log(body)

    await axios.post(`https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/auth/signup`, body).then((res) => {
        alert('등록되었습니다.');
        navigate('/login');
      });

  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
      className="content"
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
        className="signup-form"
      >
        <label>이메일</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>비밀번호</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <label>이름</label>
        <input type="text" value={Name} onChange={onNameHandler} />
        <label>성별</label>
        <select name="job" onChange={onSexHandler}>
          <option value="">성별 선택</option>
          <option value="1">남</option>
          <option value="2">여</option>
        </select>
        <label>연락처</label>
        <input type="tel" value={PhoneNumber} onChange={onPhoneNumberHandler} />
        <br />
        <button formAction="">회원가입</button>
      </form>
    </div>
  )
}

export default SignUp
