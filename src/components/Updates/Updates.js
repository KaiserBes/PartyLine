import React, { useState } from "react";
import style from "./Updates.module.css";
import ChatSidebar from "../ChatSidebar/ChatSidebar";
import ChatBar from "../ChatBar/ChatBar";
import Footer from "../Footer/Footer";

const Updates = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className={style.main__wrap}>
      <div className={style.sidebar}>
        <ChatSidebar />
        <ChatBar />
      </div>
      <div className={style.update__wrap}>
        <div className={style.header__wrap}>
          <div
            className={`${style.general__burger} ${
              isMenuOpen ? style.open : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={`${style.menu} ${isMenuOpen ? style.open : ""}`}
            id={style.menu}
          >
            <h4>Channels</h4>
            <a className={style.update__link} href="/updates">
              @ Updates
            </a>
            <p>Community</p>
            <a href="/general">🏠 general</a>
            <a href="/announcements">😘 annoncements</a>
            <a href="/letsvote">🗳️ Let's Vote</a>
            <p>Private</p>
          </div>
          <div className={style.header__p}>Updates</div>
          <div className={style.header}>
            <div className={style.avatar}>
              <img
                src="https://api.dicebear.com/5.x/lorelei/svg?seed=InfiniteWayfarer592lightBlue100&amp;backgroundColor=3399FF&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                alt="avatar"
                draggable="false"
                className={style.header__avatar}
              />
              <p className={style.name__profile}>someoneprofile</p>
            </div>
          </div>
        </div>
        <div className={style.update__content}>
          <div className={style.update__info}>
            <div className={style.update__infoImg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 200 200"
                // xml:space="preserve"
                class="sc-dyfiKA lgLiXa"
              >
                <path
                  d="M186.1,34.5c-7.5-9.6-18.5-16.3-30.9-19c-22.4-5.1-44.9,3.3-55.7,20.4c-10.7-17-32.9-25.4-55.2-20.5  C21.9,20.3-1,39.6,1.8,79.4c4,39.8,39.8,80.6,95.6,108.9c0.2,0.1,0.4,0.2,0.7,0.2h2.3c0.2,0,0.5-0.1,0.7-0.2  C157.8,159.7,194,119,198,79.4C199.3,61.5,195.2,45.9,186.1,34.5z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className={style.update__infoP}>
              YOU DON'T HAVE ANY UPDATES
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Updates;
