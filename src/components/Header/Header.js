import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={s.header__nav}>
          <ul>
            <li>
              <NavLink className={s.navlink} to="/home">
                Activity
              </NavLink>
            </li>
            <li>
              <NavLink className={s.navlink} to="/events">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink className={s.navlink} to="/pages">
                Pages
              </NavLink>
            </li>
            <li className={s.header__people}>
              <NavLink
                className={`${s.navlink} ${s.navlink__people}`}
                to="/people"
              >
                People
              </NavLink>
            </li>
          </ul>

          <div className={s.avatar}>
            <img
              src="https://api.dicebear.com/5.x/lorelei/svg?seed=InfiniteWayfarer592lightBlue100&amp;backgroundColor=3399FF&amp;mouth=happy01,happy02,happy03,happy04,happy05,happy12,happy17,sad02"
              alt="avatar"
              draggable="false"
              className={s.header__avatar}
            />
            <p className={s.name__profile}>someoneprofile</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
