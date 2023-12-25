import React, { useState, useEffect } from "react";
import s from "./Main.module.css";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const Main = () => {
  return (
    <div className={s.wrapper}>
      <main className={s.main}>
        <div className="container">
          <div className="row">
            <div className={s.col - 6}>
              <div className={s.main__box__picture}>
                <img
                  alt="avatar"
                  src="https://images.console.xyz/cdn-cgi/image/width=252,height=252,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/AA731851-790F-4BD3-8EAB-D47B6D17613B.png"
                  draggable="false"
                ></img>
              </div>
            </div>
            <div className={s.col - 6}>
              <div className={s.main__box}>
                <h1>Party Line</h1>
                <p>
                  Our demo community. 💜 Ask questions, meet other community
                  leaders, and learn how to start your own Console community. ✨
                </p>
                <div className={s.main__grayline}></div>
                <nav className={s.main__nav}>
                  <button className={s.main__btn}>Joined</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className={s.aboutus}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={s.abotus__box__first}>
                <p>Founded</p>
                <h3>Feb 16, 2023</h3>
              </div>
            </div>
            <div className="col-6">
              <div className={s.abotus__box__second}>
                <p>Members</p>
                <h3>3146</h3>
              </div>
            </div>
          </div>
          <div className={s.aboutus__pages}>
            <h2>Pages</h2>
            <div className="row">
              <div className="col-3">
                <div className={s.aboutus__pages__photo}>
                  <img
                    src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                    alt="Welcome to Console.xyz cover"
                  ></img>
                </div>
                <div className={s.abotus__pages__text}>
                  <p>Welcome to Console.xyz</p>
                </div>
              </div>
              <div className="col-3">
                <div className={s.aboutus__pages__photo}>
                  <img
                    src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                    alt="Welcome to Console.xyz cover"
                  ></img>
                </div>
                <div className={s.abotus__pages__text}>
                  <p>Welcome to Console.xyz</p>
                </div>
              </div>
              <div className="col-3">
                <div className={s.aboutus__pages__photo}>
                  <img
                    src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                    alt="Welcome to Console.xyz cover"
                  ></img>
                </div>
                <div className={s.abotus__pages__text}>
                  <p>Welcome to Console.xyz</p>
                </div>
              </div>
              <div className="col-3">
                <div className={s.aboutus__pages__photo}>
                  <img
                    src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                    alt="Welcome to Console.xyz cover"
                  ></img>
                </div>
                <div className={s.abotus__pages__text}>
                  <p>Welcome to Console.xyz</p>
                </div>
              </div>
              <div className="col-3">
                <div className={s.aboutus__pages__photo}>
                  <img
                    src="https://images.console.xyz/cdn-cgi/image/width=206,height=206,fit=crop,quality=75,dpr=2/https://console-prod-static-back.s3.amazonaws.com/media/Web%201920%20%E2%80%93%207_.png"
                    alt="Welcome to Console.xyz cover"
                  ></img>
                </div>
                <div className={s.abotus__pages__text}>
                  <p>Welcome to Console.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
