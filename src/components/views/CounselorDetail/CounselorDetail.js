import './CounselorDetail.css'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CounselorDetail = () => {
    const navigate = useNavigate()

    const { id } = useParams()
    const [counselor, setCounselor] = useState({})
    const getCounselor = async () => {
      const resp = await (await axios.get(`https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/consult/counselor/${id}`)).data
      setCounselor(resp)
    }

    useEffect(() => {
      getCounselor()
    }, [])

    const moveToReservation = (counselorId) => {
        navigate(`/reservation/${counselorId}`)
      }

    return (
        <div className='counselor_profile_content_wrap'>
            <div className="counselor_profile_header">
                <div className="counselor_profile_title">
                    <div className="counselor_name">{counselor.name}</div>
                    <div className="profile_img">
                        <img src={counselor.profileImage} alt="profile" />
                    </div>
                </div>
                <div className="counselor_carrer">
                    <div className="carrer_header">경력</div>
                    <div className="carrer_content">경력 내용</div>
                </div>
            </div>
            <div className="counselor_profile_content">
                <div className="counselor_introduce">
                    <div className="counselor_introduce_header">
                        상담사 소개
                    </div>
                    <div className="counselor_introduce_content">
                        {counselor.introduction}
                    </div>
                </div>
                <div className="counselor_method">
                    <div className="counselor_method_header">
                        상담 방식
                    </div>
                    <div className="counselor_method_content">
                        내담자님의 살아온 이야기를 어떠한 평가 없이, 온전히 수용하고 공감하며 따뜻하고 진정성 있는 마음으로 연결되므로 내담자님의 삶의 가치, 의미를 깨닫도록 돕고, 일상에서 현실감을 가지고 성장, 치유, 변화와 학습이 장이 되도록 돕겠습니다.

                        #자아/성격 #가족 #대인관계 #직장 #결혼/육아 #이별/이혼
                        #스트레스 #우울 #자존감 #불안 #공황 #트라우마
                    </div>
                </div>
                <div className="counselor_advice">
                    <div className="counselor_advice_header">
                        내담자들에게 해주고 싶은말
                    </div>
                    <div className="counselor_advice_content">
                        안녕하세요^^ 제가 상담과 첫 인연이 되었을 때 "내 마음 속에 울고 있는 내가 있어요" 라는 문장이 지금까지 저를 치유의 길로 인도하였습니다. 상담전문가가 되기 위해 전문성과 진정성을 바탕으로 상담이론과 현장의 실무를 겸비하였다고 말씀드릴 수 있을 것 같습니다. 기독교상담, 일반상담을 석, 박과정으로 공부하였으며, 현재는 교육학박사(세부전공:교육상담)로 약13년간 수많은 내담자들을 상담현장에서 만나왔습니다. 대학교 학생상담센터 전임상담사, EAP기업상담전문가, 로컬전문상담사로 조직생활 경험을 했습니다. 따라서 청소년, 성인, 부부, 나아가 가족, 회사 임직원분들을 대상으로 전문상담을 진행하고 있으며, 내담자들의 다양한 호소문제에 공감대와 문제해결력을 위해 전문적이고 진정성있는 상담을 진행합니다. 뿐만 아니라 현재 대학에서 교육학, 상담관련 전문과목을 강의할 기업체 특강을 꾸준히 하고 있습니다. 저의 이러한 전문성과 진정성, 따뜻함이 여러분과 연결되길 원하며, 자신의 속사람이 치유받는 시간이 되었으면 합니다. 우리는 행복할 권리가 있습니다. 여러분을 응원합니다^^
                    </div>
                </div>
            </div>
            <div className="counselor_profile_footer">
                <button type="button" className="counselor_reservation_btn" onClick={() => moveToReservation(counselor.id)}>예약하기</button>
            </div>
        </div>
    )
}

export default CounselorDetail
