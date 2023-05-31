import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Board = ({ id, title, text, writer }) => {
  const navigate = useNavigate()

  const moveToUpdate = () => {
    navigate('/update/' + id)
  }

  const deleteBoard = async () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      await axios.delete(`http://localhost:3001/board/${id}`).then((res) => {
        alert('삭제되었습니다.')
        navigate('/board/worry')
      })
    }
  }

  const moveToList = () => {
    navigate('/board/worry')
  }

  return (
    <div className="content">
      <div>
        <h2>{title}</h2>
        <h5>{writer}</h5>
        <hr />
        <p>{text}</p>
      </div>
      <div>
        <button onClick={moveToUpdate}>수정</button>
        <button onClick={deleteBoard}>삭제</button>
        <button onClick={moveToList}>목록</button>
      </div>
    </div>
  )
}

export default Board
