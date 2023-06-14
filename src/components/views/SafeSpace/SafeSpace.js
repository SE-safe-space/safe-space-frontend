import React, { useState, useRef, useEffect } from 'react'
import '../SafeSpace/SafeSpace.css'
import axios from 'axios'
import { current } from '@reduxjs/toolkit'

const SafeSpace = () => {
  const [messages, setMessages] = useState([])
  const [notify, setNotify] = useState(0)

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
        setMessages(response.data)
      } catch (error) {
        console.error('Error accepting chatRoom:', error)
      }
    }
    getChatData()
  }, [messages])

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
    setNotify(notify + 1)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      sendMessage(event.target.value)
      event.target.value = ''
    }
  }

  const renderMessages = () => {
    return messages.map((msg, idx) => {
      const className = msg.senderId == userID ? 'me' : 'not-me'
      return (
        <>
          <div key={idx} className={className}>
            <span className="block" key={idx}>
              {msg.text}
            </span>
          </div>
        </>
      )
    })
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
