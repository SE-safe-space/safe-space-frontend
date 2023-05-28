import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Board from '../Board/Board';

const BoardDetail = () => {
  const { id } = useParams(); // /board/:seq와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});
  const getBoard = async () => {
    const resp = await (await axios.get(`http://localhost:3001/board/${id}`)).data;
    setBoard(resp);
    setLoading(false);
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Board
          id={board.id}
          title={board.title}
          content={board.content}
          writer={board.writer}
        />
      )}
    </div>
  );
};

export default BoardDetail;