import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CounselorList/CounselorList.css'
import { Link } from 'react-router-dom'
//import { useSelector } from 'react-redux'

const CounselorList = () => {
  const [counselors, setCounselors] = useState([]);
  //const { accessToken } = useSelector((state) => state.authToken)

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

  /*useEffect(() => {
    const fetchCounselors = async () => {
      try {
        const response = await axios.get('https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/consult/counselor',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
        setCounselors(response.data);
      } catch (error) {
        console.error('Error fetching counselors:', error);
      }
    };

    fetchCounselors();
  }, []);*/

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
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
        <li className="counselor_profile">
          <Link to={`/counselor/id`} />
          <div className="counselor_profile_img">
            <img src="https://cse.knu.ac.kr/data/file/sub2_1/thumb-6db859d91a4e6fcd421a1f27612bb49b_NQljiSPI_a79a90400f5e10dfc2acd50fcae0be9ab459e8c1_396x226.jpg" alt="profile" />
          </div>
          <div className="counselor_info">
            <div className="counselor_name">상담사 이름</div>
            <div className="counseling_type">상담 분야</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CounselorList;
