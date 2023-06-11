import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { HiLockClosed } from 'react-icons/hi'
import { ErrorMessage } from '@hookform/error-message'

import { loginUser } from '../../../api/Users'
import { setRefreshToken } from '../../../storage/Cookie'

import tw from 'twin.macro'
import '../Login/Login.css'

const Input = tw.input`
  appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
`

function Login() {
  const navigate = useNavigate()

  // useForm 사용을 위한 선언
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm()

  // submit 이후 동작할 코드
  // 백으로 유저 정보 전달
  const onValid = async ({ email, password }) => {
    const response = await loginUser({ email, password })

    if (response.status) {
      // 쿠키에 Refresh Token, store에 Access Token 저장
      setRefreshToken(response.json.refreshToken)
      localStorage.setItem('accessToken', response.json.accessToken);
      console.log(response.json)

      return navigate('/')
    } else {
      console.log(response.json)
    }
    // input 태그 값 비워주는 코드
    setValue('password', '')
  }

  return (
    <div className="content">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <form
            className="mt-8 space-y-6 login-form"
            onSubmit={handleSubmit(onValid)}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="Email" className="sr-only">
                  Email
                </label>
                <Input
                  {...register('email', {
                    required: 'Please Enter Your Email',
                  })}
                  type="text"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  errors={errors}
                  render={({ message }) => (
                    <p className="text-sm font-medium text-rose-500">
                      {message}
                    </p>
                  )}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Input
                  {...register('password', {
                    required: 'Please Enter Your Password',
                  })}
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  errors={errors}
                  render={({ message }) => (
                    <p className="text-sm font-medium text-rose-500">
                      {message}
                    </p>
                  )}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <HiLockClosed
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login