import { useContext } from "react";
import Menu from '../../assets/menu.svg?react'
import "./Header.css";
import { Link } from "react-router-dom";


export const Header = () => {
return (
    
    <header className="fixed top-0 z-200 w-full">
        <nav className="nav-con flex items-center justify-around w-full max-w-1125 h-18 ">
          
          <ul className="header-nav-txt flex justify-center  gap-6 max-w-[1325px] w-full rounded-[10px] mt-4 h-[62px] items-center  ">

            <div className="tabHeader">
              <li>
                <span>
                      <Menu className='menu-svg' />
                </span>
              </li>
              <li>
                <img
                   src="https://djphncgl0uau7.cloudfront.net/images/homepage_globalsettings_navbarlogo_1770037965346.webp"
                   className="w-35"
                   alt=""/> 
              </li>
            </div>


          <Link to={'/'}>
              <li className="header-links cursor-pointer">
                <img
                   src="https://djphncgl0uau7.cloudfront.net/images/homepage_globalsettings_navbarlogo_1770037965346.webp"
                   className="w-40"
                   alt=""/> 
              </li>
          </Link>

              <li className="header-links"  >about us</li>
            <Link to="/products">
              <li className="header-links"  >modles</li >
            </Link>
          
            <li className="header-links"  >test drive</li>
          
            <li className="header-links"  >
              <div className=" flex items-center gap-1  w-full">
                <span>find a dealer</span>
                <svg
                  className="down-chevron size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="transparent"
                  stroke="#FFFFFF"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </li>
          
            <li className="header-links"  >
              <div className=" flex items-center gap-2  w-full">
                <span>after sales</span>
                <svg
                  className="down-chevron size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="transparent"
                  stroke="#FFFFFF"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </li>
          
            <li className="header-links"  >
              <div className=" flex items-center gap-2  w-full">
                <span>news & events </span>
                <svg
                  className="down-chevron size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="transparent"
                  stroke="#FFFFFF"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </li  >

            <li className="header-links"  >book now </li >
            <li className="header-links"   >
              <div className=" flex items-center gap-2  w-full">
                <Link to={'/contact'}>
                <span>contact </span>
                </Link>
                <svg
                  className="down-chevron size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="transparent"
                  stroke="#FFFFFF"
                  viewBox="0 0 24 24"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
              </div>
            </li >
          </ul>
        </nav>
    </header>
  );
};
