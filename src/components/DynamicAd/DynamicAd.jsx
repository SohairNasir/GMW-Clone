import React, { memo, useEffect, useRef, useState } from "react";
import "./DynamicAd.css";
import axios from "axios";
import { IoChevronForward } from "react-icons/io5";
import usethemeStyle from'../../Hooks/themeStyle'
import { useDispatch, useSelector } from "react-redux";
import { carAds } from "../../Redux/Slices/CarAds";

function DynamicAd() {

  let [index, setIndex] = useState(0);
  let dispatch = useDispatch()
  let {btnBg , btnTxt} = usethemeStyle()
  let {data:dynamicAds ,  loading} = useSelector((state) => state.carModels)
  let [nextIndex , setNextIndex] = useState(0)
  let [prevIndex , setPrevIndex] = useState(0)
  let [integater , setInegater] = useState(true)
  let ImgRef = useRef(null)

  function imgSrc(nextIndex) {
      let updatedImage = new Image()
      updatedImage.src= dynamicAds[nextIndex]?.img
      ImgRef.current.src = updatedImage.src
  }
  
  useEffect(()=>{

      if (dynamicAds) {
        integater ? (imgSrc(nextIndex),setNextIndex(index >= 8 ? 0 : index + 1))
        : ( imgSrc(index ))
      }
      
  },[dynamicAds , index])
    
  // useEffect(()=>{
  //   if (dynamicAds) {
  //     preLoad(index + 1)
  //   }
  // },[prevIndex , dynamicAds])

  // const getData = async () => {

    //   setLoading(true);
    
    //   try {
      //     const carData = await axios.get("https://www.jsonkeeper.com/b/DBHUU");
      //     setDynamicAds(carData.data);
      //     setLoading(false);
      //   } catch (error) {
        //     setLoading(false);
        //     console.error(new Error(error));
  //   }
  // };
 
  useEffect(() =>{
    if (!dynamicAds || dynamicAds.length === 0) { 
      dispatch(carAds())    
    }
  },[dispatch])

  return loading ? (

    <div className="flex h-[50vh] items-center justify-center">
      <span className="loader"></span>
    </div>
  ) : (
    // <div></div>
    <section className="w-full">    
      <div className="section">  
        <div className=" con-ads-img">
          <img ref={ImgRef} className="ads-img" loading="eager"
          decoding="async"
          alt="image not find" />
        </div>
        {/* image upper layer this layer in btn carName type etc */}
        <div className="w-full secPadding relative bottom-[267px]">          
          
          <div className="flex justify-center absolute bottom-53 w-full max-w-[99%]">  
            <span className="flex justify-between w-full max-w-[96%] text-amber-50 ">
              <button
                onClick={() => (setIndex(Math.max(0, index - 1)) , setInegater(false)) }
                className="left-right-ad-btn flex justify-center items-center"
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>{/*Left Button  */}
              <button
                onClick={() =>      
                  (setIndex( index < dynamicAds.length-1  ? index + 1  : 0) , setInegater(true)) 
                }
                className="left-right-ad-btn  flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>{/* Right Button */}
            </span>
          </div> {/* Image Changer Buttons */} 
          
          <div className="w-full flex h-fit ">

            <div className="w-full max-w-[100vw]  flex flex-col gap-[30px] ">
              <div className=" w-full max-w[1188px] flex flex-col gap-[20px] ">    
                
                <div>
                  <img
                    className=" object-contain "
                    src={dynamicAds[index]?.nameimg}
                    alt="Car Name"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <div>
                  <p className="Dy-car-highLight mt-3">
                    {dynamicAds[index]?.type}
                  </p>
                </div>

              </div>

                <div className={`flex justify-center gap-2 items-center w-full max-w-[297px] h-[48px] mt-[32px] border-2.5 border-${btnBg} bg-${btnBg}`}>
                  <p className={`booking-btn text-${btnTxt}`}>
                    Book your <span className="uppercase">{dynamicAds[index]?.name}</span>
                  </p>
                  <span>
                    <IoChevronForward color={btnTxt} size={21} />
                  </span>
                </div>

            </div>
          </div>
          
          <div className="dots-con">
            <ul className="w-full max-w-[200px] flex gap-3">
              <li className={`${index == 0 && '!bg-blue-800 scale-150'}`}></li>
              <li className={`${index == 1 && '!bg-blue-800 scale-150'}`}></li>
              <li className={`${index == 2 && '!bg-blue-800 scale-150'}`}></li>
              <li className={`${index == 3 && '!bg-blue-800 scale-150'}`}></li>
              <li className={`${index == 4 && '!bg-blue-800 scale-150'}`}></li>
              <li className={`${index == 5 && '!bg-blue-800 scale-150'}`}></li>
              <li className={`${index == 6 && '!bg-blue-800 scale-150'}`}></li>
              <li className={`${index == 7 && '!bg-blue-800 scale-150'}`}></li>
              <li className={`${index == 8 && '!bg-blue-800 scale-150'}`}></li>
              
            </ul>
          </div> {/*Ads Dots*/}

        </div>
      </div>
    </section>
  );
}

export default memo (DynamicAd);
