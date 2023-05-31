import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";

const Comments = ({boardId, name}) => {

  const [commentList, setCommentList] = useState([]);
  const [text, setText] = useState("");

  const getCommentList = async () => {
    const resp = await (await axios.get(`http://localhost:3001/comment?boardId=${boardId}`)).data;
    setCommentList(resp);
  };

  useEffect(() => {
    getCommentList();
  }, []);


  const submit = useCallback(async () => {
    const comment = {
      boardIid: boardId,
      name: name,
      text: text
    }
    await axios.post('http://localhost:3001/comment', comment);
    alert("댓글 등록 완료");
    window.location.reload();
  }, [text]);
  console.log(commentList)

  return (
    <div >
      <div >
        <input type="text"
          className="comments-header-textarea"
          onChange={(e) => {
            setText(e.target.value)
          }}
          placeholder="댓글을 입력해주세요✏️"
        />
        {text !== "" ? (
          <button variant="outlined" onClick={submit}>등록하기</button>
        ) : (
          <button variant="outlined" disabled={true}>
            등록하기
          </button>
        )}
      </div>
      <div>
        {commentList.map((item, index) => (
          <div key={index}>
            <div>{item.text}</div>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Comments;