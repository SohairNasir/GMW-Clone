import React from "react";
import './GmwAbout.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const GmwAbout = () => {
  return (
    <main className="!pt-[60px]  !pb-[60px] !pl-[99px] !pr-[99px]">
     
      <div className="child-wrapper flex  justify-between">
         
        <section className="w-[100%] max-w-[527px]">
         
          <h1 className="!mb-[65px]"><strong className="brand-heading">gwm</strong></h1>
          
          <p className="gmw-parah">
            At GWM, innovation, sustainability, and quality aren't just values —
            they're a belief shared by every employee, in every market, every
            day. It's what has driven us since 1990, constantly pushing the
            boundaries of what a car can be. That same conviction shapes how we
            build today: every GWM vehicle is engineered with purpose, designed
            around what our customers truly need, and built to inspire from the
            very first drive
          </p>

          <button className="button-and-arrow">Find out more < MdOutlineKeyboardArrowRight size={'25px'}/></button>

        </section>

        {/* left div */}

        <div className="gwm-img-right">
        </div>
      
      </div>
    </main>
  );
};

export default GmwAbout;
