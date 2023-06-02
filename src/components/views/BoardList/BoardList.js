import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../BoardList/BoardList.css'

const BoardList = () => {
  const [boardList, setBoardList] = useState([])
  const navigate = useNavigate()
  const { accessToken } = useSelector((state) => state.authToken)

  const getBoardList = async () => {

    if (!accessToken) {
      // Access token is null, display message box
      window.alert('로그인이 필요합니다.')
      navigate('/login') // Navigate to '/login'
      return
    }

    const resp = await axios.get(
      'https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/board/view',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
    // 2) 게시글 목록 데이터에 할당
    setBoardList(resp.data) // 3) boardList 변수에 할당
    console.log(resp.data)

    const pngn = resp.pagination
    console.log(pngn)
  }

  const moveToWrite = () => {
    navigate('/BoardWrite')
  }

  useEffect(() => {
    getBoardList() // 1) 게시글 목록 조회 함수 호출
  }, [])

  return (
    <div className="content">
      <div className="post__button">
        <button onClick={moveToWrite}>글쓰기</button>
      </div>
      <ul className="post__wrap">
        {boardList &&
          boardList.map((board) => (
            // 4) map 함수로 데이터 출력
            <li key={board.id}>
              <Link to={`/board/worry/${board.id}`}>{board.title}</Link>
            </li>
          ))}
        <li className="post">
          <Link to={`/board/worry/id`}>
            <h4 className="post__category">category</h4>
            <h5 className="post__title">제목</h5>
            <p className="post__txt">글 내용</p>
          </Link>
        </li>
        <li className="post">
          <Link to={`/board/worry/id`}>
            <h4 className="post__category">category</h4>
            <h5 className="post__title">제목</h5>
            <p className="post__txt">글 내용</p>
          </Link>
        </li>
        <li className="post">
          <Link to={`/board/worry/id`}>
            <h4 className="post__category">category</h4>
            <h5 className="post__title">제목</h5>
            <p className="post__txt">글 내용</p>
          </Link>
        </li>
        <li className="post">
          <Link to={`/board/worry/id`}>
            <h4 className="post__category">category</h4>
            <h5 className="post__title">제목</h5>
            <p className="post__txt">글 내용</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BoardList
