import DealerBtn from "../DealerBtn/DealerBtn";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./CarModels.css";
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";

const CarModels = () => {
  
  
  const [data, setData] = useState([]);
  const navigate = useNavigate()
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
      <main className=" w-full p-[16px]">
        <div className="">
          <div className="flex flex-col gap-1">
            <p className="top-txt">We've got you covered</p>
            <h1 className="top-heading">Discover GWM's Fleet</h1>
          </div>

          <nav className="mt-[30px flex items-center flex-wrap w-full gap-8 ">
            {data.map((doc) => {
              {
                console.log(doc);
              }
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

                  <section className="absolute flex flex-col gap-9 text-white items-center w-full top-[10px] p-[24px]">
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
                      <p className="hover-cc-parha w-full max-w-[37.5ch]">
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
      <Footer />
    </>
  ) : (
    <h1>show 404 page</h1>
  );
};

export default CarModels;
