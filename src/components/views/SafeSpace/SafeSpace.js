import React, { useState, useRef, useEffect } from 'react'
import '../SafeSpace/SafeSpace.css'

const SafeSpace = () => {
  const [messages, setMessages] = useState([])

  const messageListRef = useRef(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight
  }

  const sendMessage = (message, itsMe) => {
    setMessages((prevMessages) => {
      const lastMessage = prevMessages[prevMessages.length - 1]

      if (lastMessage && lastMessage.itsMe === itsMe) {
        lastMessage.messages.push(message)
        return [...prevMessages]
      } else {
        return [
          ...prevMessages,
          {
            itsMe,
            messages: [message],
          },
        ]
      }
    })
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      sendMessage(event.target.value, true)
      event.target.value = ''
    }
  }

  const renderMessages = () => {
    return messages.map((messageGroup, index) => {
      const { itsMe, messages } = messageGroup
      const className = itsMe ? 'me' : 'not-me'
      // 시간 데이터도 불러와서 끝에 넣어주기
      // 이미지를 넣지 않더라도, 상담사의 이름만 들어가게 해도 괜찮을 것 같네요
      // 카톡 UI를 참고해서 본인 채팅은 그냥 보이고
      // 상담사만 보이도록 했습니다.
      return (
        <>
          <div key={index} className={className}>
            {messages.map((message, index) => (
              <span className="block" key={index}>
                {itsMe ? (
                  message
                ) : (
                  <>
                    <img
                      className=".chat-box__img"
                      src={message.image} // 경로 수정 필요, 백엔드에서 받아와야 함
                      alt="Message Image"
                    />
                    {message}
                  </>
                )}
              </span>
            ))}
          </div>
        </>
      )
    })
  }

  return (
    <section className="chat-body">
      <div className="chat-box">
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
