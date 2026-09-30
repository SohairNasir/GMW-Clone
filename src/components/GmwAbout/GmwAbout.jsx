import React, { memo, useEffect, useMemo } from "react";
import './GmwAbout.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import usethemeStyle  from "../../Hooks/themeStyle";


const GmwAbout = memo(({heading , parah , src , wrapperClass}) => {
  
  let { bodyBg , bodyTxt , btnBg , btnTxt} = usethemeStyle()
  
  return (
    
    <main className={`bg-${bodyBg} !pt-[60px] !pb-[60px] !pl-[99px] !pr-[99px]`}>
     
      <div className={`child-wrapper flex h-[80vh]  ${wrapperClass}`}>
         
         <div className={`!text-${bodyTxt} flex justify-between w-full ${wrapperClass && ' flex-row-reverse gap-[100px]'}`}>

        <section className={`w-[100%] max-w-[527px] !text-${bodyTxt}`}>
         


          <h1 className={`text-${bodyTxt} !mb-[65px]`}><strong className="brand-heading">{heading || 'gmw'}</strong></h1>
          
          <p className="{gmw-parah}">
            { parah ||  `At GWM, innovation, sustainability, and quality aren't just values —
            they're a belief shared by every employee, in every market, every
            day. It's what has driven us since 1990, constantly pushing the
            boundaries of what a car can be. That same conviction shapes how we
            build today: every GWM vehicle is engineered with purpose, designed
            around what our customers truly need, and built to inspire from the
            very first drive`} 
          </p>

          <button className={`!text-${btnTxt} bg-${btnBg}  button-and-arrow`}>Find out more < MdOutlineKeyboardArrowRight size={'25px'}/></button>
        </section>

        {/* left div */}
        <div className=" overflow-hidden relative w-full max-w-[524px] h-[70vh]">
        <div className="gwm-img-right absolute" style={{backgroundImage:`url(${src || 'https://djphncgl0uau7.cloudfront.net/aboutus_heroBackgroundImage_1786361389214.jpeg'})`, filter:`${src && 'brightness(1)'}`}}>
        </div>
        <div className=" absolute left-[30px]  w-full bottom-[44px]">
          <h6 className="szgr-img-sm-txt">Dedication</h6>
          <h1 className="szgr-img-lr-txt">Our Future is Sustaunbility</h1>
        </div>
        </div>
        
         </div>
      
      </div>
    </main>
  );
});

export default GmwAbout;
