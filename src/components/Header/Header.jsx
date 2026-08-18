import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0  z-200 w-full">
        <nav className="flex items-center justify-around w-full max-w-1125 h-18 ">
          <ul className="header-nav-txt flex justify-center gap-8 max-w-330 w-full rounded-[10px] mt-4 h-[62px]  bg-[#1F1D1B] items-center  ">
            <li>
              <img
                src="https://djphncgl0uau7.cloudfront.net/images/homepage_globalsettings_navbarlogo_1770037965346.webp"
                className="w-40"
                alt=""
              />
            </li>
            <li>about us</li>
            <Link to="/products">
              {" "}
              <li>modles</li>
            </Link>
            <li>test drive</li>
            <li>
              <div className=" flex items-center gap-1  w-full">
                <span>find a dealer</span>
                <svg
                  className="down-chevron"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="transparent"
                  stroke="#FFFFFF"
                  viewBox="0 0 24 24"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </li>
            <li>
              <div className=" flex items-center gap-2  w-full">
                <span>after sales</span>
                <svg
                  className="down-chevron"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="transparent"
                  stroke="#FFFFFF"
                  viewBox="0 0 24 24"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </li>
            <li>
              <div className=" flex items-center gap-2  w-full">
                <span>news & events </span>
                <svg
                  className="down-chevron"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="transparent"
                  stroke="#FFFFFF"
                  viewBox="0 0 24 24"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </li>

            <li>book now </li>
            <li>
              <div className=" flex items-center gap-2  w-full">
                <span>contact </span>
                <svg
                  className="down-chevron"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="transparent"
                  stroke="#FFFFFF"
                  viewBox="0 0 24 24"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </nav>
    </header>
  );
};
