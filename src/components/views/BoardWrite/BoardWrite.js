import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../BoardWrite/BoardWrite.css'

const BoardWrite = () => {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken')
  const [user, setUser] = useState([])
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const FetchUserInfo = async () => {
      try {
        const response = await axios.get(
          'https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/member/me',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )

        setUser(response.data)
      } catch (error) {
        console.error('Error fetching user information:', error)
      }
    }
    FetchUserInfo()
  }, [])

  const board = {
    writer: user.name,
    title: title,
    hide: 0,
    text: text,
    type: type,
  }

  const saveBoard = async () => {
    if (hide == true) {
      board.writer = '익명'
    }
    await axios
      .post(
        `https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/board/write`,
        board,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then((res) => {
        console.log(board)
        alert('등록되었습니다.')
        navigate('/board/worry')
      })
  }

  const backToList = () => {
    navigate('/board/worry')
  }

  const categoryMoreRef = useRef(null)
  const writeCategoryRef = useRef(null)

  const [isActive, setIsActive] = useState(false)

  const categoryClickHandler = () => {
    setIsActive((current) => !current)
  }
  const handleItemClick = (text) => {
    const categoryMore = categoryMoreRef.current
    const writeCategory = writeCategoryRef.current
    categoryMore.classList.remove('active')
    writeCategory.textContent = text
    setType(text)
    setIsActive(false)
  }

  const handleHide = () => {
    setHide((current) => !current)
  }

  return (
    <>
      <div className="content">
        <div className="write__wrap">
          <button
            ref={writeCategoryRef}
            className="write__category"
            onClick={categoryClickHandler}
          >
            일반 고민
          </button>
          <div className="write__opt">
            <label htmlFor="opt_input1">
              <input
                type="checkbox"
                className="opt_input"
                name="opt_input"
                id="opt_input1"
                onClick={handleHide}
              />
              <span className="opt_txt">닉네임 비공개</span>
            </label>
          </div>

          <div
            ref={categoryMoreRef}
            className={`category_more  ${isActive ? 'active' : ''}`}
          >
            <h4 className="category_title">고민 사연</h4>
            <ul className="category_group">
              <li
                className="category__item"
                onClick={() => handleItemClick('일반 고민')}
              >
                일반 고민
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('취업/진로')}
              >
                취업/진로
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('직장')}
              >
                직장
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('연애')}
              >
                연애
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('성추행')}
              >
                성추행
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('결혼/육아')}
              >
                결혼/육아
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('대인관계')}
              >
                대인관계
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('외모')}
              >
                외모
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('가족')}
              >
                가족
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('학업/고시')}
              >
                학업/고시
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('금전/사업')}
              >
                금전/사업
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('성생활')}
              >
                성생활
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('이별/이혼')}
              >
                이별/이혼
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('중독/집착')}
              >
                중독/집착
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('투병/신체')}
              >
                투병/신체
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('정신건강')}
              >
                정신건강
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('LGBT')}
              >
                LGBT
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('자아/성격')}
              >
                자아/성격
              </li>
              <li
                className="category__item"
                onClick={() => handleItemClick('따돌림')}
              >
                따돌림
              </li>
            </ul>
            <h4 className="category_title">응원 사연</h4>
            <ul className="category_group">
              <li
                className="category__item"
                onClick={() => handleItemClick('응원')}
              >
                응원
              </li>
            </ul>
            <h4 className="category_title">자유 사연</h4>
            <ul className="category_group">
              <li
                className="category__item"
                onClick={() => handleItemClick('자유')}
              >
                자유
              </li>
            </ul>
          </div>

          <div className="write__desc">
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              placeholder="당신의 고민을 한줄로 요약해 주세요"
              required
            />
          </div>
          <textarea
            onChange={(e) => {
              setText(e.target.value)
            }}
            placeholder="전문가의 답변을 받기 위해 자세하게 작성해주세요"
            className="write__txt"
            required
          ></textarea>

          <button type="submit" className="submit" onClick={saveBoard}>
            작성완료
          </button>
        </div>
      </div>
    </>
  )
}

export default BoardWrite
