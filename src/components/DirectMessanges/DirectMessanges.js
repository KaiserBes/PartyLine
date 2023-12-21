import React from "react";
import ChatSidebar from "../ChatSidebar/ChatSidebar";
import style from "./DirectMessanges.module.css";

const DirectMessages = () => {
  return (
    <div className={style.main__wrap}>
      <ChatSidebar />
      <div className={style.content__wrap}>
        <div className={style.chat}>
          <h2>Direct messages</h2>
          <button>+</button>
        </div>
        <div className={style.general}>
          <ul className={style.message__wrapper}>
            <li className={style.message__content}>
              <div className={style.message__image}>
                <img
                  alt="avatar"
                  src="https://images.gamma.io/ipfs/bafybeidegzeydnwsu652maky3ohoub7fx3l22u4mpw76cvlflb65c2flzy/3839.png"
                  draggable="false"
                ></img>
              </div>
              <div className={style.message__wrapper__text}>
                <div className={style.message__text}>
                  <p>sam-tlt.btc</p>
                  <p>2:52pm</p>
                </div>
                <div className={style.message__text__second}>
                  <p>This message has been deleted</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div classname={style.messages__grayline}></div>
      </div>

      <div className={style.conversation}></div>
    </div>
  );
};

export default DirectMessages;
