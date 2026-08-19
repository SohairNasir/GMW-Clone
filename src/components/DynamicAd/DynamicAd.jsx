import React, { useEffect, useState } from "react";
import "./DynamicAd.css";
import axios from "axios";

function DynamicAd() {
  let [dynamicAds, setDynamicAds] = useState([]);
  let [index, setIndex] = useState(0);
  let [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);

    try {
      const carData = await axios.get("https://www.jsonkeeper.com/b/DBHUU");
      setDynamicAds(carData.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(new Error(error));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <div className="flex h-[50vh] items-center justify-center">
      <span class="loader"></span>
    </div>
  ) : (
    <section className="w-full">
      <div className="section">
        <div className="con-ads-img ">
          <img className="ads-img" src={dynamicAds[index]?.img} alt="" />
        </div>

        <div className="w-full secPadding absolute bottom-[210px]">
          <div className="flex justify-center ">
            <span className="flex gap-2 justify-between w-full max-w-[93%] text-amber-50 ">
              <button
                onClick={() => setIndex(Math.max(0, index - 1))}
                className="left-right-ad-btn flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setIndex( index < dynamicAds.length-1  ? ++index : 0)
                }
                className="left-right-ad-btn  flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </span>
          </div>

          <div className="w-full h-[43px] ">
            <div className="w-full max-w-[100vw]   h-auto flex flex-col items-center ">
              <div className=" w-full max-w[1188px] flex flex-col ">  
                <div className="max-w-[923px] h-[48px] ">
                  <img
                    className="h-full w-auto max-w-[710px] object-contain "
                    src={dynamicAds[index]?.nameimg}
                    alt=""
                  />
                  
                </div>

                <div className="">
                  <p className="Dy-car-highLight mt-3">
                    {dynamicAds[index]?.type}
                  </p>
                </div>

                <div className=" flex justify-center items-center w-full max-w-[297px] h-[48px] mt-[32px] border-2.5 border-black bg-black">
                  <p className=" booking-btn text-white">
                    Booking your {dynamicAds[index]?.name}
                  </p>
                </div>
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
              <li className={`${index == 8 && '!bg-blue-800 scale-150'   }`}></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DynamicAd;
