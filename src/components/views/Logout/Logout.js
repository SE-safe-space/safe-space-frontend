import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCookieToken, removeCookieToken } from '../../../storage/Cookie'
import { DELETE_TOKEN } from '../../../storage/Auth'
import { logoutUser } from '../../../api/Users'

function Logout() {

  const navigate = useNavigate()
  
  useEffect(() => {
    localStorage.removeItem('accessToken');
    navigate('/');
  }, []);

  return (
    <>
      <Link to="/" />
    </>
  )
}

export default Logout
