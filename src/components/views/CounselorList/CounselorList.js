import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Counselors List</h2>
      <ul>
        {counselors.map((counselor) => (
          <li key={counselor.id}>
            {counselor.name} - {counselor.counselingType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CounselorList;
