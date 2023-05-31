import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../BoardWrite/BoardWrite.css'

const BoardWrite = () => {
  const navigate = useNavigate()

  const [board, setBoard] = useState({
    title: '',
    writer: '',
    type: '',
    text: '',
  });
    content: '',
  })

  const { title, writer, type, text } = board; //비구조화 할당

  const onChange = (event) => {
    const { value, name } = event.target //event.target에서 name과 value만 가져오기
    setBoard({
      ...board,
      [name]: value,
    })
  }

  const saveBoard = async () => {
    await axios.post(`http://localhost:3001/board`, board).then((res) => {
      alert('등록되었습니다.')
      navigate('/board/worry')
    })
  }

  const backToList = () => {
    navigate('/board/worry')
  }

  return (
    <div>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <div>
        <span>작성자</span>
        <input
          type="text"
          name="writer"
          value={writer}
          onChange={onChange}
        />
      </div>
      <br />
      <div>
        <span>타입</span>
        <input
          type="text"
          name="type"
          value={type}
          onChange={onChange}
        />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea
          name="text"
          cols="30"
          rows="10"
          value={text}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <div>
        <button onClick={saveBoard}>저장</button>
        <button onClick={backToList}>취소</button>
          <button type="submit" className="submit">
            작성완료
          </button>
        </div>
      </div>
  )
}

export default BoardWrite
