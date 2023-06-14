import React, { useState, useRef, useEffect } from 'react'
import '../SafeSpace/SafeSpace.css'
import axios from 'axios'
import { current } from '@reduxjs/toolkit'

const SafeSpace = () => {
  const [messages, setMessages] = useState([])
  const [notify, setNotify] = useState(false)

  const messageListRef = useRef(null)
  const chatRoomID = new URLSearchParams(window.location.search).get('data')
  const userID = new URLSearchParams(window.location.search).get('b')

  // const userId = new URLSearchParams(window.location.search).get('userId')

  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    const getChatData = async () => {
      try {
        const response = await axios.get(
          `https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/chat/rooms/${chatRoomID}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        console.log(response.data)
        setMessages(response.data)
      } catch (error) {
        console.error('Error accepting chatRoom:', error)
      }
    }
    getChatData()
  }, [notify])

  // useEffect(() => {
  //   scrollToBottom()
  // }, [messages])

  const scrollToBottom = () => {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight
  }

  const sendMessage = (msgData) => {
    const message = {
      chatRoomId: chatRoomID,
      senderId: userID,
      text: msgData,
    }

    const fetchMessage = async () => {
      await axios
        .post(
          `https://port-0-safe-space-backend-otjl2cli2ssvyo.sel4.cloudtype.app/safe/chat/send`,
          message,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        .then((res) => {
          console.log(message)
        })
    }

    fetchMessage()
    setNotify((current) => !current)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      sendMessage(event.target.value)
      event.target.value = ''
    }
  }

  const renderMessages = () => {
    // return messages.map((messageGroup, index) => {
    //   const { itsMe, messages } = messageGroup
    //   const className = itsMe ? 'me' : 'not-me'
    //   // 시간 데이터도 불러와서 끝에 넣어주기
    //   // 이미지를 넣지 않더라도, 상담사의 이름만 들어가게 해도 괜찮을 것 같네요
    //   // 카톡 UI를 참고해서 본인 채팅은 그냥 보이고
    //   // 상담사만 보이도록 했습니다.
    //   return (
    //     <>
    //       <div key={index} className={className}>
    //         {messages.map((message, index) => (
    //           <span className="block" key={index}>
    //             {itsMe ? (
    //               message
    //             ) : (
    //               <>
    //                 <img
    //                   className=".chat-box__img"
    //                   src={message.image} // 경로 수정 필요, 백엔드에서 받아와야 함
    //                   alt="Message Image"
    //                 />
    //                 {message}
    //               </>
    //             )}
    //           </span>
    //         ))}
    //       </div>
    //     </>
    //   )
    // })
  }

  return (
    <section className="chat-body">
      <div className="chat-box">
        <span className="chatID"></span>
        <header>
          <h1>상담방</h1>
        </header>
        <section ref={messageListRef}>{renderMessages()}</section>
        <footer>
          <input
            type="text"
            id="message-input"
            placeholder="Type a message..."
            onKeyPress={handleKeyPress}
          />
        </footer>
      </div>
    </section>
  )
}

export default SafeSpace
