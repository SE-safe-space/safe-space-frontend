import React, {useEffect, useState} from "react";
import axios from "axios";
import '../BoardDetail/BoardDetail.css'

const Comments = ({boardId}) => {

  const [commentList, setCommentList] = useState([]);
  const [text, setText] = useState("");
  const accessToken = localStorage.getItem('accessToken');
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
    const resp = await (await axios.get(`https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/board/comment/${boardId}`
  )).data
    setCommentList(resp);
  };

  useEffect(() => {
    getCommentList();
  }, []);


  const submit = async () => {

    if(user.type == "MEMBER" || !user.type) {
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
    <div>
    {commentList.map((item, index) => (
      <div key={index}>
      <div class="comment__wrap">
      <div class="comment__header">
        <div class="comment__id">{item.name}</div>
      </div>
      <div class="comment__txt">{item.text}</div>
    </div>
    </div>
    ))}
    <div class="cmWrite__wrap">
      <textarea 
        onChange={(e) => {
        setText(e.target.value)
        }}placeholder="욕설금지"></textarea>
      <button onClick={submit}>제출</button>
      </div>
    </div>
  )
}
export default Comments;