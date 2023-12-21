import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.wrap}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <div className={style.items}>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
