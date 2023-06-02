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

      return (
        <div key={index} className={className}>
          {messages.map((message, index) => (
            <span className="block" key={index}>
              {message}
            </span>
          ))}
        </div>
      )
    })
  }

  return (
    <div className="chat-box">
      <header>
        <h1>Chat</h1>
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
  )
}

export default SafeSpace
