import React from 'react'
import'./Feature.css'

function Feature () {
  
 const carData = [
  {
    id: 1,
    name: "H6 PHEV",
    priceLabel: "Ex-Factory Price",
    priceValue: "Contact for Price",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&h=338&q=80"
  },
  {
    id: 2,
    name: "H6 (1.5/2.0)",
    priceLabel: "Ex-Factory Price",
    priceValue: "Contact for Price",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&h=338&q=80"
  },
  {
    id: 3,
    name: "H6 HEV",
    priceLabel: "Ex-Factory Price",
    priceValue: "Contact for Price",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&h=338&q=80"
  },
  {
    id: 4,
    name: "Jolion",
    priceLabel: "Ex-Factory Price",
    priceValue: "Contact for Price",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&h=338&q=80"
  },
  {
    id: 5,
    name: "Jolion HEV",
    priceLabel: "Ex-Factory Price",
    priceValue: "Contact for Price",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&h=338&q=80"
  },
  {
    id: 6,
    name: "Ora 03",
    priceLabel: "Ex-Factory Price",
    priceValue: "Contact for Price",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&h=338&q=80"
  },
  {
    id: 7,
    name: "Ora 07",
    priceLabel: "Ex-Factory Price",
    priceValue: "Contact for Price",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&h=338&q=80"
  },
  {
    id: 8,
    name: "Tank 500",
    priceLabel: "Ex-Factory Price",
    priceValue: "Contact for Price",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&h=338&q=80"
  }
];
  return (
<>
    <main className=' bg-white w-full max-w-full' >

      <div className='max-w-[1200px] h-fit mb-4'>
        <div className='w-full pl-[16px] pr-[16px]'>
          <h1 className='w-full max-w-[1188px] mb-[16px] main-P-heading w-full max-w-[400px]'>Discover GWM: Innovation, Sustainability, and Quality at the Core</h1>
          <p className='main-Parah w-full max-w-[768px]'>
              This is a belief shared by every employee and department at GWM, both locally and globally. It's a mindset that has propelled the company since its founding in 1990, pushing the limits of what a car can achieve. It's this same unwavering belief that has led GWM to specialize in crafting vehicles designed with purpose—each model meticulously engineered to meet our customers' needs in the most inspiring and innovative way.
              </p>
        </div>
      </div>  


      <div className='w-full pl-[16px] pr-[16px] h-fit'>

        <div className='w-full max-w-[1188px]'>
          <h1 className='Dic-range-h w-[full] max-w-[20ch]'>Discover the Range</h1>
          <h1 className='gmw-offer-h w-[full] max-w-[20ch]' >The GWM Offerings</h1>
        </div>

      </div>




      <div >

        <nav className='flex flex-wrap items-center pl-[16px] pr-[16px] justify-center gap-[30px] w-full mt-[20px]'>


          {
            carData.map((car)=>{

              {console.log(car)}
return(
              <>

              <div className='animated-car-card w-full max-w-[303.5px] relative'>

      <div className='w-full transparent-sheet flex justify-center flex-col relative items-center'>
         <div className='z-40 landingP-card-txt-con absolute top-[43px] w-full'> 
            <div className=' w-full max-w-[300px] card-car-hover-text  flex flex-col items-center '>
              <p className='h-fit w-fit'>Ex-Factory Price</p>
              <p className='h-fit  w-fit'>Contact for Price</p>
            </div>
          </div>

            <img className='w-full object-cover rounded-[7px] h-[128px] ' src={car.image}  alt="" />

</div>
            <strong className=' absolute text-amber-50 bottom-[15px] left-1.5'>{car.name}</strong>
          </div>
              </>
)

            })
          }
                  
        </nav>
      </div>


    </main> 
  
</>
  )
}

export default Feature