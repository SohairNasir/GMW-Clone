import React from "react";
import "./header.css";
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <header className="sticky top-0 h-[75px] z-200 w-full">
        <div>
          <nav className="flex items-center justify-around  max-w-1125 w-full h-18 ">
            <ul className="header-nav-txt flex justify-center gap-2.5 bg-amber-900 max-w-330 w-full rounded-sm h-[52px] items-center  ">
              <li>
                <img
                  src="https://djphncgl0uau7.cloudfront.net/images/homepage_globalsettings_navbarlogo_1770037965346.webp"
                  className="w-40"
                  alt=""
                />
              </li>
              <li>about us</li>
              <Link to='/products'> <li>modles</li></Link>
              <li>test drive </li>
              <li>find a dealer </li>
              <li>after sales </li>
              <li>news & events</li>
              <li>book now </li>
              <li>contact</li>
            </ul>
          </nav>
        </div>
\    </header>
  );
};
