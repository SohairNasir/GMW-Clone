import React from "react";
import "./DealerBtn.css";
const DealerBtn = () => {
  return (
    <nav className="w-full max-w-[fill] min-h-[45vh] h-fit flex justify-center items-center">
   

      <div className="w-full max-w-[600px] flex justify-center gap-10">
        <button className="flex items-center gap-3 w-full max-w-[195px] font-bold cursor-pointer pt-[12px] pb-[12px] pl-[30px] pr-[30px]  border-2 bg-black text-white border-black">
          <strong className="font-style">Find a Dealer</strong>
          <svg
                  className="down-chevro size-4 !stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
        </button>
        <div className="w-full max-w-[300px]">
          <button className="flex items-center gap-1 w-full max-w-[218px] cursor-pointer pt-[12px] pb-[12px] pl-[30px] pr-[30px]  border-1 text-blak border-black">
            <strong className="font-style  font-light">Book a Test Drive </strong>
               <svg
                  className="down-chevro size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
          </button>
        </div>
      </div>
   
    </nav>
  );
};

export default DealerBtn;
