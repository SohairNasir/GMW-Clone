import React from "react";
import "./DealerBtn.css";
const DealerBtn = () => {
  return (
    <nav className="w-full max-w-[fill] min-h-[45vh] h-fit flex justify-center items-center">
   

      <div className="w-full max-w-[600px] flex justify-center gap-10">
        <button className="w-full max-w-[195px] cursor-pointer pt-[12px] pb-[12px] pl-[30px] pr-[30px]  border-2 bg-black text-white border-black">
          <strong>Find a Dealer</strong>
        </button>

        <div className="w-full max-w-[300px]">
          <button className="w-full max-w-[253px] cursor-pointer pt-[12px] pb-[12px] pl-[30px] pr-[30px]  border-2 text-blak border-black">
            <strong>Book a Test Drive </strong>
          </button>
        </div>
      </div>
   
    </nav>
  );
};

export default DealerBtn;
