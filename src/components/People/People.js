import React, { useState } from "react";
import style from "./People.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const People = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Состояние для отслеживания запроса

  // // Ваши данные (замените их на реальные данные)
  // const peopleData = [
  //   { id: 1, name: "John" },
  //   { id: 2, name: "Jane" },
  //   { id: 3, name: "Doe" },
  //   // ... другие данные
  // ];

  // Функция для обновления состояния поискового запроса
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Фильтрация данных на основе поискового запроса
  // const filteredPeople = peopleData.filter((person) =>
  //   person.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div className={style.main__wrap}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <div className={style.mainHeader}>
        <Header />
      </div>
      <div className={style.title__wrap}>
        <div className={style.header}>
          <div className={style.header__wrap}>
            <div className={style.search}>
              <div className={style.search__icon}>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.98783 10.8715C7.77927 12.6403 4.54641 12.5011 2.49909 10.4538C0.302388 8.25709 0.302388 4.69554 2.49909 2.49884C4.69579 0.302143 8.25734 0.302144 10.454 2.49884C12.5014 4.54616 12.6406 7.77902 10.8717 9.98757L15.1681 14.2839C15.4121 14.528 15.4121 14.9237 15.1681 15.1678C14.924 15.4119 14.5283 15.4119 14.2842 15.1678L9.98783 10.8715ZM3.38297 9.56991C1.67443 7.86137 1.67443 5.09127 3.38297 3.38273C5.09151 1.67418 7.86161 1.67418 9.57016 3.38273C11.2774 5.09002 11.2787 7.8573 9.57392 9.56615C9.57265 9.56739 9.5714 9.56863 9.57014 9.56989C9.56889 9.57114 9.56764 9.5724 9.5664 9.57366C7.85755 11.2785 5.09026 11.2772 3.38297 9.56991Z"
                    fill="currentColor"
                    fill-opacity="0.96"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className={style.header__filter}>
              <div className={style.filter__wrap}>
                <div className={style.filterIcon}>
                  <svg
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.25198 2.83337H0.666626C0.390484 2.83337 0.166626 2.60952 0.166626 2.33337C0.166626 2.05723 0.390484 1.83337 0.666626 1.83337H7.25198C7.4579 1.25078 8.01352 0.833374 8.66663 0.833374C9.31973 0.833374 9.87535 1.25078 10.0813 1.83337H11.3333C11.6094 1.83337 11.8333 2.05723 11.8333 2.33337C11.8333 2.60952 11.6094 2.83337 11.3333 2.83337H10.0813C9.87535 3.41597 9.31973 3.83337 8.66663 3.83337C8.01352 3.83337 7.4579 3.41597 7.25198 2.83337Z"
                      fill="currentColor"
                      fill-opacity="0.96"
                    ></path>
                    <path
                      d="M11.3333 8.16671C11.6094 8.16671 11.8333 7.94285 11.8333 7.66671C11.8333 7.39057 11.6094 7.16671 11.3333 7.16671H4.74794C4.54202 6.58411 3.9864 6.16671 3.33329 6.16671C2.68018 6.16671 2.12456 6.58411 1.91865 7.16671H0.666626C0.390484 7.16671 0.166626 7.39057 0.166626 7.66671C0.166626 7.94285 0.390484 8.16671 0.666626 8.16671H1.91865C2.12456 8.7493 2.68018 9.16671 3.33329 9.16671C3.9864 9.16671 4.54202 8.7493 4.74794 8.16671H11.3333Z"
                      fill="currentColor"
                      fill-opacity="0.96"
                    ></path>
                  </svg>
                </div>
                <div className={style.filter}>filter</div>
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
        </div>
        <div className={style.output}>
          <div className={style.output__container}>
            <div className={style.row}>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              <div className={style.output__items}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=160,height=160,fit=crop,quality=75,dpr=1/https://images.gamma.io/ipfs/Qmdv4Eeb8JZuG1HN77XkRvSmQeHDzrqeqyhPtGyfVMugSr/images/773.gif"
                  draggable="false"
                  class="sc-koXPp caCvie"
                />
                <p>BMO with BANANA</p>
              </div>
              {/* Отобразите отфильтрованные данные */}
              {/* <ul>
              {filteredPeople.map((person) => (
                <li key={person.id}>{person.name}</li>
              ))}
            </ul> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default People;
