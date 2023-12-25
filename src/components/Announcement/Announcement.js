import React from "react";
import s from "./Announcement.module.css";
import ChatSidebar from "../ChatSidebar/ChatSidebar";
import ChatBar from "../ChatBar/ChatBar";

const Announcement = () => {
  return (
    <div className={s.main__wrap}>
      <ChatSidebar />
      <ChatBar />
      <div className={s.header}>
        <div className="container">
          <div className={s.header__nav}>
            <div className={s.header__text}>
              <h3>#announcement</h3>
            </div>
            <div className={s.header__profile}>
              <div className={s.header__count}>
                <div className={s.header__items}>
                  <img
                    alt="avatar"
                    src="https://api.dicebear.com/5.x/lorelei/svg?seed=alightBlue100&amp;backgroundColor=3399FF&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                    draggable="false"
                  ></img>
                </div>
                <div className={s.header__items}>
                  <img
                    alt="avatar"
                    src="https://api.dicebear.com/5.x/lorelei/svg?seed=alightBlue100&amp;backgroundColor=3399FF&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                    draggable="false"
                  ></img>
                </div>
                <div className={s.header__items}>
                  <img
                    alt="avatar"
                    src="https://api.dicebear.com/5.x/lorelei/svg?seed=alightBlue100&amp;backgroundColor=3399FF&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                    draggable="false"
                  ></img>
                </div>
                <div className={s.header__items}>
                  <p>3174</p>
                </div>
              </div>
              <div className={s.header__profile}>
                <div className={s.header__second__profile}>
                  <img
                    alt="avatar"
                    src="https://api.dicebear.com/5.x/lorelei/svg?seed=InfiniteWayfarer592lightBlue100&amp;backgroundColor=3399FF&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                    draggable="false"
                  ></img>
                  <p>someoneprofile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.people__vote}>
          <div className={s.people__voteDataLine}>
            <div className={s.people__voteLine}></div>
            <div className={s.people__data}>SUNDAY, DECEMBER 24TH</div>
            <div className={s.people__voteLine}></div>
          </div>
          <div className={s.people__voteContentWrap}>
            <div className={s.people__voteContent}>
              <div className={s.people__avatar}>
                <img
                  alt="avatar"
                  src="https://api.dicebear.com/5.x/lorelei/svg?seed=johndabtclightBlue100&amp;backgroundColor=3399FF&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                  draggable="false"
                  class="sc-hCPjZK fAZJgG"
                />
              </div>
              <div className={s.people__comment}>
                <div className={s.people__commentNameData}>
                  <div className={s.people__commentName}>johnd.btc</div>
                  <div className={s.people__commentData}>5:18 PM</div>
                </div>
                <div className={s.people__commentInfo}>
                  gm y'all been a while
                </div>

                <div className={s.people__commentReactions}>
                  <div className={s.reaction}>🙌 1</div>
                  <button className={s.emoji__choose}>
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="emojis"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.1001 7.99985C2.1001 4.47155 4.97179 1.59985 8.5001 1.59985C12.0284 1.59985 14.9001 4.47155 14.9001 7.99985C14.9001 11.5282 12.0284 14.3999 8.5001 14.3999C4.97179 14.3999 2.1001 11.5282 2.1001 7.99985ZM5.53444 7.1675C5.68447 7.01747 5.88796 6.93319 6.10013 6.93319C6.3123 6.93319 6.51579 7.01747 6.66582 7.1675C6.81585 7.31753 6.90013 7.52101 6.90013 7.73319C6.90013 7.94536 6.81585 8.14884 6.66582 8.29887C6.51579 8.4489 6.3123 8.53319 6.10013 8.53319C5.88796 8.53319 5.68447 8.4489 5.53444 8.29887C5.38442 8.14884 5.30013 7.94536 5.30013 7.73319C5.30013 7.52101 5.38442 7.31753 5.53444 7.1675ZM10.3344 7.1675C10.4845 7.01747 10.688 6.93319 10.9001 6.93319C11.1123 6.93319 11.3158 7.01747 11.4658 7.1675C11.6158 7.31753 11.7001 7.52101 11.7001 7.73319C11.7001 7.94536 11.6158 8.14884 11.4658 8.29887C11.3158 8.4489 11.1123 8.53319 10.9001 8.53319C10.688 8.53319 10.4845 8.4489 10.3344 8.29887C10.1844 8.14884 10.1001 7.94536 10.1001 7.73319C10.1001 7.52101 10.1844 7.31753 10.3344 7.1675ZM6.89701 10.129C6.78641 10.1352 6.68048 10.1757 6.59394 10.2449C6.5074 10.314 6.44453 10.4084 6.41407 10.5149C6.38361 10.6214 6.38706 10.7347 6.42395 10.8392C6.46084 10.9436 6.52933 11.034 6.61992 11.0978C7.04889 11.4095 7.69124 11.7332 8.50013 11.7332C9.30902 11.7332 9.95162 11.4098 10.3803 11.0978C10.437 11.0565 10.485 11.0045 10.5215 10.9448C10.5581 10.885 10.5825 10.8186 10.5934 10.7494C10.6043 10.6801 10.6015 10.6095 10.585 10.5413C10.5686 10.4732 10.5389 10.409 10.4977 10.3524C10.4564 10.2957 10.4044 10.2478 10.3446 10.2112C10.2848 10.1747 10.2184 10.1503 10.1492 10.1394C10.08 10.1285 10.0093 10.1314 9.94116 10.1478C9.87305 10.1643 9.80884 10.194 9.75221 10.2353C9.44813 10.4566 9.02457 10.6665 8.50013 10.6665C7.97569 10.6665 7.55191 10.4569 7.24701 10.2353C7.16102 10.1707 7.05754 10.1337 6.95013 10.129C6.93243 10.1281 6.9147 10.1281 6.89701 10.129Z"
                        fill="currentColor"
                        fill-opacity="0.96"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
