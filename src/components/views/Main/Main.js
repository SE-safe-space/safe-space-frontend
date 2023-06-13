import '../Main/Main.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import { Link, useNavigate, useParams } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from './main_slider_1.png'
import image2 from './main_slider_2.png'
import image3 from './main_slider_3.png'
import { get } from 'react-hook-form';



const Main = () => {
    const [boardList, setBoardList] = useState([])

    const fetchBoardList = async () => {
        try {
            const response = await axios.get('https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/board/view');
            const { data } = response;
            // Save response data in boardList variable
            setBoardList(data);
            boardList.reverse();
            console.log(boardList);
        } catch (error) {
            console.error('Error fetching board data:', error);
        }
    };


    useEffect(() => {
        fetchBoardList();
    }, []);


    const [counselors, setCounselors] = useState([]);

    useEffect(() => {
        const fetchCounselors = async () => {
            try {
                const response = await axios.get('https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/consult/counselor');
                setCounselors(response.data);
            } catch (error) {
                console.error('Error fetching counselors:', error);
            }
        };

        fetchCounselors();
    }, []);


    const navigate = useNavigate()
    const moveToWrite = () => {
        navigate('/BoardWrite')
    }
    const moveToBoard = () => {
        navigate('/board/worry')
    }


    const SliderSettings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };


    return (
        <div className="page_wrapper">
            <div className="image_slider">
                <Slider {...SliderSettings}>
                    <img src={image1} alt="slider" />
                    <img src={image2} alt="slider" />
                    <img src={image3} alt="slider" />
                </Slider>
            </div>
            <div className="main_board">
                <div className="write_board">
                    <div className="write_board_title">
                        <h1>말 못할 고민이 있으신가요?</h1>
                        <span>쌓아두지 말고 가볍게 털어놓으세요</span>
                    </div>
                    <button className="write_board_clk_btn" onClick={moveToWrite}>
                        <span>고민 나누기</span>
                    </button>
                </div>
                <div className="recent_board_list">
                    <div className="recent_board_list_title">
                        다른 사람들의 고민을 확인해보세요
                        <button className="total_board_list" onClick={moveToBoard}>
                            전체보기
                        </button>
                    </div>
                    <div className="recent_board_list_content">
                        <ul>
                            <li className="recent_item">
                                <Link to={`/board/worry/id`} />
                                <div className="item_title">
                                    최근글 제목1
                                </div>
                                <div className="item_content">
                                    최근글 내용dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="counselor_board">
                    <div className="counselor_board_title">
                        전문 상담사와의 상담을 통해 고민을 해결해보세요
                    </div>
                    <div className="counselor_board_content">
                        <ul>
                            {counselors.slice(0, 5).map((counselor) => (
                                <li className="counselor_item" key={counselor.id}>
                                    <Link to={`/counselor/${counselor.id}`}>
                                        <div className="item_title">
                                            <img src={counselor.profileImage} alt="profile" />
                                        </div>
                                        <div className="item_content">
                                            <div className="counselor_name">{counselor.name}</div>
                                            <div className="counseling_type">{counselor.counselingType}</div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;