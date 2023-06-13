import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import '../BoardList/BoardList.css'

const BoardList = () => {
  const [boardList, setBoardList] = useState([])
  const navigate = useNavigate()
  const [noticeBoard, setNoticeBoard] = useState([])
  const [check, setCheck] = useState(0)
  const getBoardList = async () => {
    const resp = await axios.get(
      'https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/board/view',
    )

    // 2) 게시글 목록 데이터에 할당
    setBoardList(resp.data) // 3) boardList 변수에 할당
    // console.log(resp.data)

    const pngn = resp.pagination
    // console.log(pngn)

    showBoard()
  }

  function showBoard() {
    const totalPage = boardList.length
    // let page_num = 20
    // const block = 1
    const wrClass = ['wr__num', 'wr__title', 'wr__user', 'wr__type', 'wr__date']

    console.log(boardList)
    // const start = totalPage - page_num * (block - 1)
    const posts = []
    for (let i = 0; i < totalPage; i++) {
      const postData = [
        boardList[i].id,
        boardList[i].title,
        boardList[i].writer,
        boardList[i].type,
        boardList[i].createdAt,
        boardList[i].hide,
      ]
      console.log(postData)
      const post = (
        <Link
          to={`/board/worry/${postData[0]}`}
          key={i}
          className="board_row data_row"
        >
          {wrClass.map((className, j) => (
            <div key={j} className={className}>
              {postData[j]}
            </div>
          ))}
        </Link>
      )

      posts.push(post)
    }

    setNoticeBoard(posts)
  }

  const moveToWrite = () => {
    navigate('/BoardWrite')
  }

  useEffect(() => {
    getBoardList() // 1) 게시글 목록 조회 함수 호출
    if (boardList.length == 0) {
      setCheck(check + 1)
    }
  }, [check])

  return (
    <div className="content">
      <div className="post__button">
        <button onClick={moveToWrite}>글쓰기</button>
      </div>

      <div className="container">
        <div className="notice_board">
          <ul className="board_row">
            <li className="wr__num">번호</li>
            <li className="wr__title">제목</li>
            <li className="wr__user">작성자</li>
            <li className="wr__type">고민유형</li>
            <li className="wr__date">작성일</li>
          </ul>
          {noticeBoard}
        </div>

        <div className="pagination">
          <button className="before_move">이전</button>
          <div className="block"></div>
          <button className="next_move">다음</button>
        </div>
      </div>
    </div>
  )
}

export default BoardList
