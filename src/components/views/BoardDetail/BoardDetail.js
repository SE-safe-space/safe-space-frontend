import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Board from '../Board/Board'
import Comments from '../Comments/Comments'
import '../BoardDetail/BoardDetail.css'
const BoardDetail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [board, setBoard] = useState({})
  const { accessToken } = useSelector((state) => state.authToken)
  const getBoard = async () => {
    const resp = await (await axios.get(`https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/board/view/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )).data
    setBoard(resp)
    setLoading(false)
  }

  useEffect(() => {
    getBoard()
  }, [])

  return (
    <div>
      {/* {loading ? (
        <h2>loading...</h2>
      ) : (
        <Board
          id={board.id}
          title={board.title}
          text={board.text}
          writer={board.writer}
        />
      )}
      <hr />
      <div className="board-footer">
        <Comments boardId={id} />
      </div> */}
      <section class="content contents__wrap">
        <div class="detail__wrap">
          <div class="detail__header">
            <div class="header__title">제목</div>
            <div class="header__id">id입니당</div>
          </div>
          <div class="detail__txt">텍스트를 넣어주세요</div>
        </div>

        <div class="comment__wrap">
          <div class="comment__header">
            <div class="comment__id">id입니당</div>
          </div>
          <div class="comment__txt">커맨트 내용을 넣어주세요</div>
        </div>
        <div class="cmWrite__wrap">
          <textarea placeholder="욕설금지"></textarea>
          <button>제출</button>
        </div>
      </section>
    </div>
  )
}

export default BoardDetail
