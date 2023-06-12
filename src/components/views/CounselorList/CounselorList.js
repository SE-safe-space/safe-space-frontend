import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CounselorList/CounselorList.css'
import { Link } from 'react-router-dom'

const CounselorList = () => {
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

  return (
    <div className="counselor_list_content_wrap">
      <div className="counselor_list_header">상담사 목록</div>
      
      <ul className="counselor_list">
        {counselors.map((counselor) => (
          <li className="counselor_profile" key={counselor.id}>
            <Link to={`/counselor/${counselor.id}`} />
              <div className="counselor_profile_img">
                <img src={counselor.profileImage} alt="profile" />
              </div>
              <div className="counselor_info">
                <div className="counselor_name">{counselor.name}</div>
                <div className="counseling_type">{counselor.counselingType}</div>
              </div>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default CounselorList;
