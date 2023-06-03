import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CounselorList/CounselorList.css'
import { Link } from 'react-router-dom'


const CounselorList = () => {
  const [counselors, setCounselors] = useState([]);

  useEffect(() => {
    const fetchCounselors = async () => {
      try {
        const response = await axios.get('http://localhost:3001/counselor'); // Replace with your API endpoint URL
        setCounselors(response.data);
      } catch (error) {
        console.error('Error fetching counselors:', error);
      }
    };

    fetchCounselors();
  }, []);

  return (
      <div className="content_wrap">
        <div className="counselor_list_header">
          <span>상담사 목록</span>
        </div>
        <ul className="counselor_list">
          {counselors.map((counselor) => (
            <li className="counselor_profile" key={counselor.id}>
              <Link to={`/counselor/id`}>
                <div className="profile_img">
                  <img src={counselor.profileImage} alt="profile" />
                </div>
                <div className="counselor_info">
                  <div className="counselor_name">{counselor.name}</div>
                  <div className="counseling_type">{counselor.counselingType}</div>
                </div>
              </Link>
            </li>
          ))}
          <li className="counselor_profile">
            <Link to={`/counselor/id`}>
              <div className="profile_img">
                <img src="profile_img.png" alt="profile" />
              </div>
              <div className="counselor_info">
                <div className="counselor_name">상담사 이름</div>
                <div className="counseling_type">abcdefgdasdfasdfasdfsadfdsfdfdsafsdfsadf</div>
              </div>
            </Link>
          </li>
          <li className="counselor_profile">
            <Link to={`/counselor/id`}>
              <div className="profile_img">
                <img src="profile_img.png" alt="profile" />
              </div>
              <div className="counselor_info">
                <div className="counselor_name">상담사 이름</div>
                <div className="counseling_type">abcdefgdasdfasdfasdfsadfdsfdfdsafsdfsadf</div>
              </div>
            </Link>
          </li>
          <li className="counselor_profile">
            <Link to={`/counselor/id`}>
              <div className="profile_img">
                <img src="profile_img.png" alt="profile" />
              </div>
              <div className="counselor_info">
                <div className="counselor_name">상담사 이름</div>
                <div className="counseling_type">abcdefgdasdfasdfasdfsadfdsfdfdsafsdfsadf</div>
              </div>
            </Link>
          </li>
          <li className="counselor_profile">
            <Link to={`/counselor/id`}>
              <div className="profile_img">
                <img src="profile_img.png" alt="profile" />
              </div>
              <div className="counselor_info">
                <div className="counselor_name">상담사 이름</div>
                <div className="counseling_type">abcdefgdasdfasdfasdfsadfdsfdfdsafsdfsadf</div>
              </div>
            </Link>
          </li>
          <li className="counselor_profile">
            <Link to={`/counselor/id`}>
              <div className="profile_img">
                <img src="profile_img.png" alt="profile" />
              </div>
              <div className="counselor_info">
                <div className="counselor_name">상담사 이름</div>
                <div className="counseling_type">abcdefgdasdfasdfasdfsadfdsfdfdsafsdfsadf</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default CounselorList;
