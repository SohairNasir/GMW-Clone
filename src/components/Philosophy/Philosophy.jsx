import React from "react";
import "./Philosophy.css";
import { useSelector } from "react-redux";
import { memo } from "react";
import usethemeStyle from "../../Hooks/themeStyle";
const Philosophy = memo(() => {
  let Theme = useSelector((state) => state.Theme.value);
  let { bodyTxt } = usethemeStyle();

  return (


    <article
      className={`con-philosophy max-sm:!mb-[5rem] max-sm:!mt-[5rem] w-full !h-fit flex items-center justify-center`}
      >
      <div className=" w-full max-sm:!pr-[16px]   max-sm:!pl-[16px] max-w-[670px] flex flex-col items-center justify-center ">
        
        <strong className={`text-${bodyTxt} max-sm:!mb-[24px] max-sm:!text-2xl/8 philosophy-h`}>
          Our Philosophy
        </strong>
  
          <p className={`philosophy-parah  max-sm:!text-sm/5`}>
            There's a simple philosophy we live by here at GWM. It's what unites
            us as a company. It's also what separates us from the rest of the
            competition.
            <strong>''.'Improving little by little everyday'</strong>
          </p>
  
      </div>
    </article>
  );
});

export default Philosophy;
