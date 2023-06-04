import './Reservation.css'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Reservation = () => {
    const navigate = useNavigate()
    const { accessToken } = useSelector((state) => state.authToken)

    /*const saveBoard = async () => {
        await axios.post(`https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/board/write`, board,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }).then((res) => {
          alert('등록되었습니다.')
          navigate('/board/worry')
        })
      }*/

    return (
        <div className="reservation_content_wrap">
            <div className="reservation_doc">
                <div className="reservation_doc_header">
                    <div className="gender"></div>
                    <div className="age"></div>
                    <div className="date"></div>
                </div>
                <div className="reservation_doc_body">
                    <div className="category"></div>
                    <div className="symptom"></div>
                    <div className="expectation"></div>
                    <div className="conseling_history"></div>
                    <div className="conseling_content"></div>
                    <div className="growth_process"></div>
                    <div className="additional_content"></div>
                </div>
            </div>
        </div>
    )
}

export default Reservation