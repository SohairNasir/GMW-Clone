import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cardetails = () => {
  const [carData, setCarData] = useState({});
  const { id } = useParams();

  const dataFetch = async () => {
    try {
      const data = await axios.get('https://www.jsonkeeper.com/b/P2EGZ');
      const renderData = data.data.find((item) => item.id == Number(id));
      setCarData(renderData || {});
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, [id]);

  const specs = carData.specifications || carData.overview || {};
  const carDescription = typeof carData.overview === 'string' ? carData.overview : carData.description || carData.tagline || "";
  const carTitle = carData.name || `${carData.brand || ''} ${carData.model || ''}`;

  return (
    <main className="w-full bg-white text-gray-900 font-sans">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="text-red-600 font-semibold uppercase tracking-wider text-sm">
              {carData.brand} {carData.type}
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight">
              {carTitle}
            </h1>

            <p className="text-2xl font-bold text-gray-800 mt-2">
              {carData.price}
            </p>

            <p className="text-gray-600 mt-6 leading-8 max-w-xl text-base">
              {carDescription}
            </p>

            <div className="flex flex-wrap gap-8 mt-8 border-y border-gray-100 py-6">
              <div>
                <p className="text-gray-500 text-sm">Engine</p>
                <h3 className="font-semibold text-lg sm:text-xl mt-1">{specs.engine || 'N/A'}</h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Power</p>
                <h3 className="font-semibold text-lg sm:text-xl mt-1">{specs.power || 'N/A'}</h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Transmission</p>
                <h3 className="font-semibold text-lg sm:text-xl mt-1">{specs.transmission || specs.driveType || 'N/A'}</h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-black text-white px-8 py-3.5 rounded-md hover:bg-red-600 duration-300 font-medium text-sm">
                Book Test Drive
              </button>

              <button className="border border-black px-8 py-3.5 rounded-md hover:bg-black hover:text-white duration-300 font-medium text-sm">
                Download Brochure
              </button>
            </div>
          </div>

          <div>
            <img
              src={carData.heroImage || (carData.gallery && carData.gallery[0])}
              alt="Car"
              className="w-full rounded-2xl object-cover shadow-lg h-[350px] sm:h-[450px]"
            />
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">
            Vehicle Specifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-sm">Fuel Type</p>
              <h3 className="text-xl font-semibold mt-2">{specs.fuelType || carData.type || "N/A"}</h3>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-sm">Seats</p>
              <h3 className="text-xl font-semibold mt-2">{specs.seats || 5} Persons</h3>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-sm">Drive Type</p>
              <h3 className="text-xl font-semibold mt-2">{specs.driveType || "Standard"}</h3>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-sm">Top Speed</p>
              <h3 className="text-xl font-semibold mt-2">
                {specs.topSpeed || (carData.performance && carData.performance.topSpeed) || "N/A"}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(carData.features || []).map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-5 hover:border-black duration-300">
              <span className="w-2 h-2 rounded-full bg-red-600 inline-block mb-3"></span>
              <h3 className="font-medium text-gray-800">{feature}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Cardetails;