import '../Main/Main.css'
import Slider from "react-slick";
import { Link, useNavigate } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from './main_slider_1.png'
import image2 from './main_slider_2.png'
import image3 from './main_slider_3.png'


const Main = () => {
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
                                <div className="item_title">
                                    최근글 제목1
                                </div>
                                <div className="item_content">
                                    최근글 내용
                                </div>
                            </li>
                            <li className="recent_item">
                                <div className="item_title">
                                </div>
                                <div className="item_content">
                                </div>
                            </li>
                            <li className="recent_item">
                                <div className="item_title">
                                </div>
                                <div className="item_content">
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;