import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Board from '../Board/Board';
import Comments from "../Comments/Comments";

const BoardDetail = () => {
  const { id } = useParams(); 
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
          text={board.text}
          writer={board.writer}
        />
      )}
    <hr/>
    <div className="board-footer">
      <Comments 
        boardId={board.id}
      />
    </div>
    </div>
  );
};

export default BoardDetail;