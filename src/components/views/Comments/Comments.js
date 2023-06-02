import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector } from 'react-redux'

const Comments = ({boardId}) => {

  const [commentList, setCommentList] = useState([]);
  const [text, setText] = useState("");
  const { accessToken } = useSelector((state) => state.authToken)
  const [user, setUser] = useState([])

  useEffect(() => {
    const FetchUserInfo = async () => {

      try {
        const response = await axios.get(
          'https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/member/me',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )

        setUser(response.data)
      } catch (error) {
        console.error('Error fetching user information:', error)
      }
    }
    FetchUserInfo()
  }, [])

  const getCommentList = async () => {
    const resp = await (await axios.get(`https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/board/comment/${boardId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )).data
    setCommentList(resp);
  };

  useEffect(() => {
    getCommentList();
  }, []);


  const submit = async () => {

    if(user.type == "MEMBER") {
      window.alert('상담사만 댓글을 작성할 수 있습니다.')
      return
    }

    const comment = {
      boardId: boardId,
      userId: user.id,
      name: user.name,
      profileImage: user.profileImage,
      text: text
    }

    console.log(comment)

    await axios.post(`https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/board/comment`,comment,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => {
    alert("댓글 등록 완료")
    window.location.reload()
    })
  }
  
  

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