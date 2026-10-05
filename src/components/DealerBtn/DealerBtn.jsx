import React, { memo } from "react";
import "./DealerBtn.css";
import usethemeStyle from '../../Hooks/themeStyle'

const DealerBtn = memo( () => {

  let {bodyBg , btnBg , btnTxt} = usethemeStyle()

  return (
   
   <nav className={`bg-${bodyBg} w-full max-w-[fill] min-h-[45vh] h-fit flex justify-center items-center`}>
   
      <div className="w-full max-w-[600px] flex justify-center gap-10">
        
        <button className={`flex items-center gap-3 w-full max-w-[195px] font-bold cursor-pointer
        !pt-[12px] !pb-[12px] !pl-[30px] !pr-[30px]  border-2 bg-${btnBg} text-${btnTxt} border-black`}>
          <strong className="font-style">Find a Dealer</strong>
          <svg
                  className={`down-chevro size-4 !stroke-${btnTxt}`}
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
          <button className={`flex items-center gap-1 w-full max-w-[218px] cursor-pointer !pt-[12px] !pb-[12px]
             !pl-[30px] !pr-[30px]  border-1 text-blak border-${btnBg}`}>
            <strong className={`font-style text-${btnBg} font-light`}>Book a Test Drive </strong>
               <svg
                  className={`down-chevro size-4 !stroke-${btnBg}`}
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
});

export default DealerBtn;
