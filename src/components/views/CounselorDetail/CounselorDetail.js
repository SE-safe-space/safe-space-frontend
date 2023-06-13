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
                    <div className="carrer_header">전문 상담 분야</div>
                    <div className="carrer_content">{counselor.counselingType}</div>
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
            </div>

            <div className="counselor_profile_footer">
                <button type="button" className="counselor_reservation_btn" onClick={() => moveToReservation(counselor.id)}>예약하기</button>
            </div>
        </div>
    )
}

export default CounselorDetail
