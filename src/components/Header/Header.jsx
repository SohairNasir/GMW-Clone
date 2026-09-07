import { useContext } from "react";
import Menu from '../../assets/menu.svg?react'
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { setTheme } from "../../Redux/Slices/ThemeSlice";


export const Header = () => {

  let Theme = useSelector((state)=>state.Theme.value)
  let dispatch = useDispatch()

  return (
    
    <header className="sticky top-0 z-200 w-full">
        
        <nav className="nav-con flex items-center justify-around w-full max-w-1125 h-18 ">
          
          <ul style={{background : Theme , color :(Theme == 'white'? 'black' : 'white')}} className="header-nav-txt flex justify-center  gap-6 max-w-[1325px] w-full rounded-[10px] mt-4 h-[62px] items-center  ">

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
                  fill="none"
                  
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
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
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
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
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
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
                  viewBox="0 0 24 24"
                  >
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
              </div>
            </li >

            <li>
<label className="switch">
  <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
  <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
  <input type="checkbox" onClick={()=>{dispatch(setTheme(Theme == 'white' ? 'black': 'white'))}} className="input"/>
  <span className="slider"></span>
</label>
            </li>

          </ul>
        </nav>
    </header>
  );
};
