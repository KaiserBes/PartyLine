import React, { useState } from "react";
import ChatSIdebar from "../ChatSidebar/ChatSidebar";
import ChatBar from "../ChatBar/ChatBar";
import style from "./General.module.css";
import Footer from "../Footer/Footer";

const General = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.main__wrap}>
      <div className={style.wrap}>
        <ChatSIdebar />
        <ChatBar />
        <div className={style.content__wrap}>
          <div className={style.general}>
            <div className={style.header}>
              <div className={`${style.general__burger} ${isMenuOpen ? style.open : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={`${style.menu} ${isMenuOpen ? style.open : ''}`} id={style.menu}>
                <h4>Channels</h4>
                <a className={style.update__link} href="/updates">@ Updates</a>
                <p>Community</p>
                <a href="/general">🏠 general</a>
                <a href="/announcements">😘 annoncements</a>
                <a href="/letsvote">🗳️ Let's Vote</a>
                <p>Private</p>
              </div>
              <div className={style.header__p}>
                <p>#general</p>
              </div>
              <div className={style.header__peopleCount}>
                <div className={style.peopleCount__wrap}>
                  <img
                    alt="avatar"
                    src="https://api.dicebear.com/5.x/lorelei/svg?seed=alightBlue100&amp;backgroundColor=3399FF&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                    draggable="false"
                  />
                  <img
                    alt="avatar"
                    src="https://api.dicebear.com/5.x/lorelei/svg?seed=alightTeal100&amp;backgroundColor=0CD7F2&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                    draggable="false"
                  ></img>
                  <img
                    alt="avatar"
                    src="https://api.dicebear.com/5.x/lorelei/svg?seed=aalightOrange100&amp;backgroundColor=FF9C40&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                    draggable="false"
                  />
                  <p>3156</p>
                </div>
              </div>
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
            <div className={style.chat__area}>
              <div className={style.chat__area__container}>
                <div className={style.chat__area__items}>
                  <div className={style.people__vote}>
                    <div className={style.people__voteDataLine}>
                      <div className={style.people__voteLine}></div>
                      <div className={style.people__data}>
                        SUNDAY, DECEMBER 24TH
                      </div>
                      <div className={style.people__voteLine}></div>
                    </div>
                    <div className={style.people__voteContentWrap}>
                      <div className={style.people__voteContent}>
                        <div className={style.people__avatar}>
                          <img
                            alt="avatar"
                            src="https://api.dicebear.com/5.x/lorelei/svg?seed=johndabtclightBlue100&amp;backgroundColor=3399FF&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                            draggable="false"
                            class="sc-hCPjZK fAZJgG"
                          />
                        </div>
                        <div className={style.people__comment}>
                          <div className={style.people__commentNameData}>
                            <div className={style.people__commentName}>
                              johnd.btc
                            </div>
                            <div className={style.people__commentData}>
                              5:18 PM
                            </div>
                          </div>
                          <div className={style.people__commentInfo}>
                            gm y'all been a while
                          </div>

                          <div className={style.people__commentReactions}>
                            <div className={style.reaction}>🙌 1</div>
                            <button className={style.emoji__choose}>
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
                  <div className={style.people__vote}>
                    <div className={style.people__voteDataLine}>
                      <div className={style.people__voteLine}></div>
                      <div className={style.people__data}>
                        SATURDAY, DECEMBER 23RD
                      </div>
                      <div className={style.people__voteLine}></div>
                    </div>
                    <div className={style.people__voteContentWrap}>
                      <div className={style.people__voteContent}>
                        <div className={style.people__avatar}>
                          <img
                            alt="avatar"
                            src="https://api.dicebear.com/5.x/lorelei/svg?seed=EphemeraQuantum284lightMagenta100&amp;backgroundColor=FF77B9&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
                            draggable="false"
                            class="sc-hCPjZK fAZJgG"
                          />
                        </div>
                        <div className={style.people__comment}>
                          <div className={style.people__commentNameData}>
                            <div className={style.people__commentName}>
                              EphemeraQuantum284
                            </div>
                            <div className={style.people__commentData}>
                              Edited 2 days ago
                            </div>
                          </div>
                          <div className={style.people__commentInfo}>
                            Hello there Community, Glad to be apart of this new
                            platform that’s making way for creativity with keen
                            focus on inclusive peer-peer perspectives curation.
                            The 🚀 Exciting News! 🚀 that led our community to
                            Console is that we've just submitted our
                            groundbreaking project, "URBAN-X Next Gen-Homes," to
                            the Artizen Fund for review. 🌍✨ 🏡 Our initiative
                            aims to revolutionize humanitarian housing with
                            ongoing development targeted to house over 26,000
                            people that have been affected by flood in Ghana.
                            Our mission is to build capacity in integration of
                            cutting-edge technologies like blockchain, AI,
                            AR/VR, and sustainable engineering of materials like
                            timber and bamboo. 👐 We believe in the power of
                            creativity to drive positive change, and the Artizen
                            Fund's commitment to creative engagement resonates
                            with our mission. We're eager to explore how our
                            project can make a meaningful impact with their
                            support and yours as well the whole console
                            ecosystem! 👉 Join us on this journey! Visit our
                            "Tri-Artifact"
                            https://vote.artizen.fund/index/monart-city-urban-next--1703312342303x950190292956872700
                            and engage with our innovative project. Your support
                            and feedback mean the world to us as we strive to
                            create resilient, affordable housing solutions for
                            marginalized communities. We also have an ongoing
                            open call at ; https://gofund.me/8956f589
                          </div>

                          <div className={style.people__commentReactions}>
                            <div className={style.reaction}>🥹 2</div>
                            <button className={style.emoji__choose}>
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
            </div>
            <div className={style.comments__making}>
              <div className={style.comments__wrap}>
                <div className={style.comments__input}>
                  <input className={style.comments__inputArea} type="text" />
                </div>
                <div className={style.comments__buttonWrap}>
                  <div className={style.button__box1}>
                    <button className={style.comments__button1}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="image"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3.25C7.16751 3.25 3.25 7.16751 3.25 12C3.25 16.8325 7.16751 20.75 12 20.75C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.16751 16.8325 3.25 12 3.25ZM12.7499 7.75732C12.7499 7.34311 12.4142 7.00732 11.9999 7.00732C11.5857 7.00732 11.2499 7.34311 11.2499 7.75732V11.25H7.75732C7.34311 11.25 7.00732 11.5858 7.00732 12C7.00732 12.4142 7.34311 12.75 7.75732 12.75H11.2499V16.2426C11.2499 16.6568 11.5857 16.9926 11.9999 16.9926C12.4142 16.9926 12.7499 16.6568 12.7499 16.2426V12.75H16.2426C16.6568 12.75 16.9926 12.4142 16.9926 12C16.9926 11.5858 16.6568 11.25 16.2426 11.25H12.7499V7.75732Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <input
                        type="file"
                        accept="image/jpg,image/jpeg,image/gif,image/png"
                        class="sc-jBqsNv lhDjSq"
                      ></input>
                    </button>
                    <button className={style.comments__button1}>
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="codeblock"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.37782 2.51263C7.43619 2.28257 9.56379 2.28257 11.6222 2.51263C12.8397 2.64871 13.823 3.60781 13.9662 4.83245C14.2124 6.93706 14.2124 9.06319 13.9662 11.1678C13.823 12.3924 12.8397 13.3515 11.6222 13.4876C9.56379 13.7177 7.43619 13.7177 5.37782 13.4876C4.16023 13.3515 3.17697 12.3924 3.03374 11.1678C2.78758 9.06319 2.78758 6.93706 3.03374 4.83245C3.17697 3.60781 4.16024 2.64871 5.37782 2.51263ZM7.62007 5.69515C7.81534 5.89041 7.81534 6.207 7.62007 6.40226L5.97363 8.04871L7.62007 9.69515C7.81534 9.89042 7.81534 10.207 7.62007 10.4023C7.42481 10.5975 7.10823 10.5975 6.91297 10.4023L4.91297 8.40226C4.7177 8.207 4.7177 7.89041 4.91297 7.69515L6.91297 5.69515C7.10823 5.49989 7.42481 5.49989 7.62007 5.69515ZM9.22482 5.69515C9.42008 5.49989 9.73666 5.49989 9.93192 5.69515L11.9319 7.69515C12.1272 7.89042 12.1272 8.207 11.9319 8.40226L9.93192 10.4023C9.73666 10.5975 9.42008 10.5975 9.22482 10.4023C9.02955 10.207 9.02955 9.89041 9.22482 9.69515L10.8713 8.04871L9.22482 6.40226C9.02955 6.207 9.02955 5.89041 9.22482 5.69515Z"
                          fill="currentColor"
                          fill-opacity="0.96"
                        ></path>
                      </svg>
                    </button>
                    <button className={style.comments__button1}>
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
                    <button className={style.comments__button1}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="emojis"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.0113 2.89055C13.6756 2.62958 10.3247 2.62958 6.98901 2.89055L4.7483 3.06585C3.50023 3.16349 2.47921 4.09889 2.2729 5.33366C1.75669 8.42316 1.75669 15.5769 2.2729 18.6664C2.47921 19.9012 3.50023 20.8366 4.7483 20.9342L6.989 21.1095C10.3247 21.3705 13.6756 21.3705 17.0113 21.1095L19.252 20.9342C20.5001 20.8366 21.5211 19.9012 21.7274 18.6664C22.2436 15.5769 22.2436 8.42316 21.7274 5.33366C21.5211 4.09889 20.5001 3.16349 19.252 3.06585L17.0113 2.89055ZM10.5078 11.075C10.3318 9.823 9.28494 9 7.86094 9C6.10734 9 5 10.2193 5 12.1609C5 14.1313 6.09866 15.3344 7.88906 15.3344C9.53386 15.3344 10.5609 14.3315 10.5609 12.7203V11.9516H8.03125V12.9H9.3375L9.33437 13.0078C9.30957 13.7342 8.73734 14.2234 7.91094 14.2234C6.91734 14.2234 6.29062 13.4388 6.29062 12.1484C6.29062 10.8836 6.88814 10.1109 7.86094 10.1109C8.56174 10.1109 9.06749 10.4654 9.25469 11.075H10.5078ZM13.0359 9.15469H11.775V15.1797H13.0359V9.15469ZM14.5 9.15469H18.3516V10.2328H15.7609V11.8016H18.2109V12.8328H15.7609V15.1797H14.5V9.15469Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <button className={style.comments__button1}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Add youtube video"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.98888 4.89055C10.3246 4.62958 13.6755 4.62958 17.0112 4.89055L19.2519 5.06585C20.5 5.16349 21.521 6.09889 21.7273 7.33366C22.2435 10.4232 22.2435 13.5769 21.7273 16.6664C21.521 17.9012 20.5 18.8366 19.2519 18.9342L17.0112 19.1095C13.6755 19.3705 10.3246 19.3705 6.98888 19.1095L4.74818 18.9342C3.50011 18.8366 2.47909 17.9012 2.27278 16.6664C1.75657 13.5769 1.75657 10.4232 2.27278 7.33366C2.47909 6.09889 3.50011 5.16349 4.74818 5.06585L6.98888 4.89055ZM10 14.4702V9.52989C10 9.2967 10.2544 9.15267 10.4543 9.27264L14.5713 11.7428C14.7655 11.8593 14.7655 12.1408 14.5713 12.2573L10.4543 14.7274C10.2544 14.8474 10 14.7034 10 14.4702Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className={style.button__box2}>
                    <button className={style.comments__button2}>
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Send"
                        class="sc-iVDsrp dyKbHW"
                      >
                        <path
                          d="M14.662 8.29147C14.7679 8.23268 14.8335 8.12114 14.8335 8.00008C14.8335 7.87903 14.7679 7.76749 14.662 7.7087L13.1405 6.86339C10.1428 5.19801 6.98277 3.84334 3.70964 2.82048L3.26625 2.68192C3.16504 2.6503 3.05482 2.66871 2.96938 2.73152C2.88395 2.79433 2.8335 2.89404 2.8335 3.00008V6.83342C2.8335 7.0107 2.97227 7.15697 3.14931 7.16629L3.8224 7.20171C5.46348 7.28809 7.09454 7.51067 8.69875 7.86716L8.85762 7.90247C8.89296 7.91032 8.90828 7.92477 8.9168 7.93624C8.92754 7.95072 8.93593 7.97301 8.93593 8.00008C8.93593 8.02716 8.92754 8.04945 8.9168 8.06392C8.90828 8.0754 8.89296 8.08985 8.85762 8.0977L8.69877 8.133C7.09454 8.4895 5.46347 8.71208 3.82239 8.79845L3.14931 8.83388C2.97227 8.84319 2.8335 8.98946 2.8335 9.16675V13.0001C2.8335 13.1061 2.88395 13.2058 2.96938 13.2686C3.05482 13.3315 3.16504 13.3499 3.26625 13.3182L3.70965 13.1797C6.98277 12.1568 10.1428 10.8022 13.1405 9.13678L14.662 8.29147Z"
                          fill="currentColor"
                          fill-opacity="0.96"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.chat__footer}></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default General;
