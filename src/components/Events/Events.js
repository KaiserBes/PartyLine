import React from "react";
import Header from "../Header/Header";
import s from "./Events.module.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Events = () => {
  return (
    <div className={s.main__wrap}>
      <div className={s.sidebar}>
        <Sidebar />
      </div>
      <div className={s.title__wrap}>
        <Header />

        <section className={s.events}>
          <div className="container">
            <h3>Past Events</h3>
            <Link className={`${s.events__link}`} to="/twitter"></Link>
            <div className={s.events__wrapper}>
              <div className={s.events__date}>
                <div className={s.events__box}>
                  <p>JUL</p>
                  <p>
                    <span className={s.events__num}>21</span>
                  </p>
                </div>
              </div>
              <div className={s.events__content}>
                <p className={s.events__content__first}>
                  BoysClub + Console // Boys Do Barbie
                </p>
                <p className={s.events__content__second}>
                  Nighthawk in Brooklyn · JUL 21, 2023 · 02:00 AM GMT+6
                </p>
              </div>
            </div>
            <Link className={`${s.events__link}`} to="/twitter"></Link>
            <div className={s.events__wrapper}>
              <div className={s.events__date}>
                <div className={s.events__box}>
                  <p>JUL</p>
                  <p>
                    <span className={s.events__num}>21</span>
                  </p>
                </div>
              </div>
              <div className={s.events__content}>
                <p className={s.events__content__first}>
                  🧡 Console Chats x Ordinals Games 💜{" "}
                </p>
                <p className={s.events__content__second}>
                  JUN 27, 2023 · 03:00 AM GMT+6{" "}
                </p>
              </div>
            </div>
            <Link className={`${s.events__link}`} to="/twitter"></Link>
            <div className={s.events__wrapper}>
              <div className={s.events__date}>
                <div className={s.events__box}>
                  <p>JUL</p>
                  <p>
                    <span className={s.events__num}>21</span>
                  </p>
                </div>
              </div>
              <div className={s.events__content}>
                <p className={s.events__content__first}>
                  BoysClub + Console // Boys Do Barbie
                </p>
                <p className={s.events__content__second}>
                  Nighthawk in Brooklyn · JUL 21, 2023 · 02:00 AM GMT+6
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
