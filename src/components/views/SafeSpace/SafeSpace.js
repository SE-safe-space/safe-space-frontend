import React from 'react'
import '../SafeSpace/SafeSpace.css'

function SafeSpace() {
  return (
    <>
      <section class="chatbox">
        <section class="chat-window">
          <article class="msg-container msg-remote" id="msg-0">
            <div class="msg-box">
              <img class="user-img" id="user-0" alt="user-img" />
              <div class="flr">
                <div class="messages">
                  <p class="msg" id="msg-0">
                    메세지 내용
                  </p>
                </div>
                <span class="timestamp">
                  <span class="username">사용자 이름</span>&bull;
                  <span class="posttime">등록 시간</span>
                </span>
              </div>
            </div>
          </article>
        </section>
        <form class="chat-input" onsubmit="return false;">
          <input type="text" autocomplete="on" placeholder="Type a message" />
          <button>보내기</button>
        </form>
      </section>
    </>
  )
}

export default SafeSpace
