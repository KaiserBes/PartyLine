import { React } from "react";
import style from "./ChatBar.module.css";
import { Link } from "react-router-dom";

const ChatBar = () => {
  return (
    <div className={style.main__wrap}>
      <div className={style.content__wrap}>
        <div className={style.chat__wrap}>
          <div className={style.chat__wrapHeader}>
            <p>Chat</p>
          </div>
          <Link className={style.link} to="/updates">
            <p>@ Updates</p>
          </Link>
          <div className={style.community}>Community</div>
          <Link className={style.link} to="/general">
            <p>🏠</p>
            <p>general</p>
          </Link>
          <Link className={style.link} to="/announcements">
            <p>😘</p>
            <p>announcements</p>
          </Link>
          <Link className={style.link} to="/letsvote">
            <p>🗳️</p>
            <p>let's vote</p>
          </Link>
          <div className={style.chat__wrapFooter}>
            <p>Private</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
