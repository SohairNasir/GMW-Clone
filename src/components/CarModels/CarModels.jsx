import DealerBtn from "../DealerBtn/DealerBtn";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./CarModels.css";
import { useNavigate } from 'react-router-dom'
import React, { memo, useEffect, useState } from "react";
import usethemeStyle from "../../Hooks/themeStyle";

const CarModels = memo( () => {
  
  
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  let {bodyBg , bodyTxt , btnBg , btnTxt} = usethemeStyle()
  const getCarData = async () => {
    try {
      const carData = await axios.get("https://www.jsonkeeper.com/b/ZK3BM");
      setData(carData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCarData();
  }, []);

  return data ? (
    <>
      <main className={`bg-${bodyBg} w-full !p-[16px]`}>
        <div>
          
          <div className="flex flex-col  !h-[7rem] gap-1">
            <p className={`${bodyBg == 'black' && '!text-white'} top-txt`}>We've got you covered</p>
            <h1 className={`text-${bodyTxt} top-heading`}>Discover GWM's Fleet</h1>
          </div>

          <nav className="mt-[30px flex items-center flex-wrap w-full gap-8 ">
            {data.map((doc) => {
              return (
                <div
                onClick={()=>navigate(`/products/${doc.id}`)}
                  key={doc.id}
                  className="w-full  card-con relative max-w-[418px] h-[313px]"
                >
                  <img
                    className="w-full max-w-[full] main-car-img rounded-[9px] h-full object-cover"
                    src={doc.fallbackImage}
                    alt=""
                  />

                  <section className="absolute gap-9 flex flex-col text-white items-center w-full top-[0px] !p-[20px]">
                    <div className="w-full">
                      <div className="flex items-center justify-between w-full">
                        <p className="card-card-type-txt w-full max-w-[218px]">
                        {doc.type}
                        </p>
                        <img
                          src="https://1000logos.net/wp-content/uploads/2020/10/Haval-Logo.png"
                          className="max-w-[66px]"
                        />
                      </div>

                      <span className="mt-[10px] w-full max-w-[218px]">
                        <p>{doc.name}</p>
                      </span>
                    </div>

                    <div className="hover-con-show w-full flex flex-col gap-10">
                      <p className="hover-cc-parha w-full max-w-[35.5ch]">
                        {doc.description}
                      </p>

                      <button className="w-full max-w-[118px] h-[38px] text-black bg-white border-2 border-black">
                        expoler
                      </button>
                    </div>
                  </section>
                </div>
              );
            })}
          </nav>
        </div>
      </main>

      <DealerBtn />
    </>
  ) : (
    <h1>show 404 page</h1>
  );
});

export default CarModels;
