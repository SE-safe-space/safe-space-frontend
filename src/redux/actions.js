// 로그인 액션 타입
export const LOGIN = 'LOGIN';

// 로그인 액션 생성자
export const loginAction = (user) => ({
  type: LOGIN,
  payload: { user }
});