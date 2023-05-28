import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';

function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [Gender, setGender] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");


    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }
    const onBirthdayHandler = (event) => {
      setBirthday(event.currentTarget.value);
    }
    const onGenderHandler = (event) => {
      setGender(event.currentTarget.value);
    }
    const onPhoneNumberHandler = (event) => {
      setPhoneNumber(event.currentTarget.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
        }

        let body = {
            email: Email,
            name: Name,
            password: Password,
            confirmPassword: ConfirmPassword,
            Birthday: Birthday,
            Gender: Gender,
            PhoneNumber: PhoneNumber,
        }

        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success){
                props.history.push('/loginPage')
            } else {
                alert('Error')
            }
        })
    }


    return (
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>이메일</label>
                <input type='email' value={Email} onChange={onEmailHandler}/>
                <label>이름</label>
                <input type='text' value={Name} onChange={onNameHandler}/>
                <label>비밀번호</label>
                <input type='password' value={Password} onChange={onPasswordHandler}/>
                <label>비밀번호 확인</label>
                <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                <label>생년월일</label>
                <input type='text' value={Birthday} onChange={onBirthdayHandler}/>
                <label>성별</label>
                <select name="job">
                  <option value="">성별 선택</option>
                  <option value="남">남</option>
                  <option value="여">여</option>
                </select>
                <label>연락처</label>
                <input type='tel' value={PhoneNumber} onChange={onPhoneNumberHandler}/>
                <br />
                <button formAction=''>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default RegisterPage;