import './Reservation.css'
import React, { useRef, useState, useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Reservation = () => {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem('accessToken');
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  const { id } = useParams();

  const [user, setUser] = useState([])
  const [text, setText] = useState('')
  const [type, setType] = useState('')

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

  const reservationForm = {
    memberId: user.id,
    counselorId: id,
    type: type,
    text: text
  }

  const checkForm = async () => {
    const resp = await axios.post(`https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/consult/reserve`, reservationForm,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
      alert('신청되었습니다.')
      navigate(`/counselor`)
    })
  }

  return (
    <div className="reservation_page">
      <div className="reservation_content_wrap">
        <div className="reservation_doc">
          <div className="reservation_doc_header">
            <div className="doc_header_cap"></div>
            <div className="doc_header_title">예약하기</div>
            <div className="divide_line"></div>
            <div className="doc_header_subtitle">
              <div>상담사와의 상담을 위해 아래의 내용을 작성해주세요.</div>
              <div>해당 내용은 상담사에게만 전달되며, 상담사는 해당 내용을 바탕으로 상담을 진행합니다.</div>
            </div>
          </div>
          <div className="reservation_doc_body">
            <div className="reservation_listitem gender">
              <div className="reservation_question gender">1. 성별</div>
              <div className="divide_line"></div>
              <ul className="reservation_answer gender">
                <li><label htmlFor="gender_1"><input type="radio" className="radio_element" name="gender" id="gender_1" value="1" />
                  <span>남</span>
                </label></li>
                <li><label htmlFor="gender_2"><input type="radio" className="radio_element" name="gender" id="gender_2" value="2" />
                  <span>여</span>
                </label></li>
              </ul>
            </div>
            <div className="reservation_listitem age">
              <div className="reservation_question age">2. 나이</div>
              <div className="divide_line"></div>
              <div className="reservation_answer age">
                <input type="text" className="inputText_element age" pattern="[0-9]+" name="age" maxLength="3" />
              </div>
            </div>
            <div className="reservation_listitem category">
              <div className="reservation_question category">3. 구체적인 상담 분야를 선택해주세요</div>
              <div className="divide_line"></div>
              <div className="reservation_answer category">
                <label htmlFor="counseling_type_1">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_1" value="가족" />
                  <span>가족</span>
                </label>
                <label htmlFor="counseling_type_2">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_2" value="연애" />
                  <span>연애</span>
                </label>
                <label htmlFor="counseling_type_3">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_3" value="대인관계" />
                  <span>대인관계</span>
                </label>
                <label htmlFor="counseling_type_4">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_4" value="취업/진로" />
                  <span>취업/진로</span>
                </label>
                <label htmlFor="counseling_type_5">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_5" value="학업" />
                  <span>학업</span>
                </label>
                <label htmlFor="counseling_type_6">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_6" value="직장" />
                  <span>직장</span>
                </label>
                <label htmlFor="counseling_type_7">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_7" value="외모" />
                  <span>외모</span>
                </label>
                <label htmlFor="counseling_type_8">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_8" value="육아" />
                  <span>육아</span>
                </label>
                <label htmlFor="counseling_type_9">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_9" value="건강" />
                  <span>건강</span>
                </label>
                <label htmlFor="counseling_type_10">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_10" value="정신건강" />
                  <span>정신건강</span>
                </label>
                <label htmlFor="counseling_type_11">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_11" value="사업/금전" />
                  <span>사업/금전</span>
                </label>
                <label htmlFor="counseling_type_12">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_12" value="중독" />
                  <span>중독</span>
                </label>
                <label htmlFor="counseling_type_13">
                  <input type="checkbox" className="checkBox_element" name="counseling_type" id="counseling_type_13" value="자아/성격" />
                  <span>자아/성격</span>
                </label>
              </div>
            </div>
            <div className="reservation_listitem symptom">
              <div className="reservation_question symptom">4. 현재 증상을 선택해주세요</div>
              <div className="divide_line"></div>
              <div className="reservation_answer symptom">
                <label htmlFor="symptom_1">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="symptom_1" value="스트레스" />
                  <span>스트레스</span>
                </label>
                <label htmlFor="symptom_2">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="symptom_2" value="불안" />
                  <span>불안</span>
                </label>
                <label htmlFor="symptom_3">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="symptom_3" value="강박" />
                  <span>강박</span>
                </label>
                <label htmlFor="symptom_4">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="symptom_4" value="우울" />
                  <span>우울</span>
                </label>
                <label htmlFor="symptom_5">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="symptom_5" value="자존감" />
                  <span>자존감</span>
                </label>
                <label htmlFor="symptom_6">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="symptom_6" value="자살충동" />
                  <span>자살충동</span>
                </label>
                <label htmlFor="symptom_7">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="symptom_7" value="콤플렉스" />
                  <span>콤플렉스</span>
                </label>
                <label htmlFor="symptom_8">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="symptom_8" value="트라우마" />
                  <span>트라우마</span>
                </label>
                <label htmlFor="symptom_9">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="symptom_9" value="공황" />
                  <span>공황</span>
                </label>
                <label htmlFor="symptom_10">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="symptom_10" value="조울증" />
                  <span>조울증</span>
                </label>
                <label htmlFor="symptom_11">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="symptom_11" value="분노/폭력" />
                  <span>분노/폭력</span>
                </label>
              </div>
            </div>
            <div className="reservation_listitem expectation">
              <div className="reservation_question expectation">5. 상담에서 기대하는 사항을 선택해주세요</div>
              <div className="divide_line"></div>
              <div className="reservation_answer expectation">
                <label htmlFor="expectation_1">
                  <input type="checkbox" className="checkBox_element" name="expectation" id="expectation_1" value="문제 해결을 위한 조언을 받고 싶어요" />
                  <span>문제 해결을 위한 조언을 받고 싶어요</span>
                </label>
                <label htmlFor="expectation_2">
                  <input type="checkbox" className="checkBox_element" name="expectation" id="expectation_2" value="공감, 응원을 받고 싶어요" />
                  <span>공감, 응원을 받고 싶어요</span>
                </label>
                <label htmlFor="expectation_3">
                  <input type="checkbox" className="checkBox_element" name="expectation" id="expectation_3" value="자신, 타인의 심리를 이해하고 싶어요" />
                  <span>자신, 타인의 심리를 이해하고 싶어요</span>
                </label>
                <label htmlFor="expectation_4">
                  <input type="checkbox" className="checkBox_element" name="expectation" id="expectation_4" value="정신적 불안을 감소시키고 싶어요" />
                  <span>정신적 불안을 감소시키고 싶어요</span>
                </label>
              </div>
            </div>
            <div className="reservation_listitem counseling_history">
              <div className="reservation_question counseling_history">6. 상담 경험이 있으신가요?</div>
              <div className="divide_line"></div>
              <div className="reservation_answer counseling_history">
                <label htmlFor="counseling_history1">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="counseling_history1" value="상담" />
                  <span>상담</span>
                </label>
                <label htmlFor="counseling_history2">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="counseling_history2" value="약물치료" />
                  <span>약물치료</span>
                </label>
                <label htmlFor="counseling_history3">
                  <input type="checkbox" className="checkBox_element" name="symptom" id="counseling_history3" value="정신과 내원 경험" />
                  <span>정신과 내원 경험</span>
                </label>
              </div>
            </div>
            <div className="reservation_listitem counseling_content">
              <div className="reservation_question counseling_content">
                <div>7. 상담받고 싶은 내용과 배경을 적어주세요</div>
                <div>(원인, 시작, 경과 / 자신의 생각, 정서 / 현재까지의 대처 / 결과)</div>
              </div>
              <div className="divide_line"></div>
              <div className="reservation_answer counseling_content">
                <textarea name="counseling_content" id="counseling_content" rows="1"
                  onChange={(e) => {
                    setType(e.target.value)
                  }}
                  className="textarea_element"
                  ref={textRef}
                  placeholder="내용을 입력해주세요"
                  onInput={handleResizeHeight}
                   />
              </div>
            </div>
            <div className="reservation_listitem growth_process">
              <div className="reservation_question growth_process">8. 성장 과정을 적어주세요</div>
              <div className="divide_line"></div>
              <div className="reservation_answer growth_process">
                <textarea name="growth_process" id="growth_process" rows="1"
                  className="textarea_element"
                  ref={textRef}
                  placeholder="내용을 입력해주세요"
                  onInput={handleResizeHeight} 
                  />
              </div>
            </div>
            <div className="reservation_listitem additional_content">
              <div className="reservation_question additional_content">9. 추가로 상담사에게 전달하고 싶은 내용이 있으신가요?</div>
              <div className="divide_line"></div>
              <div className="reservation_answer additional_content">
                <textarea name="additional_content" id="additional_content" rows="1"
                  onChange={(e) => {
                    setText(e.target.value)
                  }}
                  className="textarea_element"
                  ref={textRef}
                  placeholder="내용을 입력해주세요"
                  onInput={handleResizeHeight} 
                  />
                  </div>
            </div>
            <div className="commit_button">
              <div className="commit_button_wrapper">
                <button type="submit" className="commit_button_element" onClick={checkForm}>제출</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservation