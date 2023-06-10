import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Board from '../Board/Board'
import Comments from '../Comments/Comments'
import '../BoardDetail/BoardDetail.css'

const BoardDetail = () => {
  const { id } = useParams()
  const [board, setBoard] = useState({})
  const getBoard = async () => {
    const resp = await (await axios.get(`https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/board/view/${id}`)).data
    setBoard(resp)
  }

  useEffect(() => {
    getBoard()
  }, [])

  return (
    <div>
      <section class="content contents__wrap">
        <div class="detail__wrap">
          <div class="detail__header">
            <div class="header__title">{board.title}</div>
            <div class="header__id">{board.writer}</div>
          </div>
          <div class="detail__txt">{board.text}</div>
        </div>
        <div >
        <Comments boardId={id} />
        </div>
      </section>
    </div>
  )
}

export default BoardDetail
