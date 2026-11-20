import React, { memo } from 'react'
import'./FeatureSec.css'
import { useSelector } from 'react-redux';
import usethemeStyle from '../../Hooks/themeStyle';

let  FeatureSec = memo (() => {
  
  let Theme = useSelector((state)=>state.Theme.value)
  let {bodyTxt} = usethemeStyle()

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
  <main className={`w-full max-w-full !pl-[16px] !pr-[16px] max-sm:!mt-[80px] max-sm:!mb-[40px] box-border h-auto`} >
        
    
      
        
          
          <div className='smd-txt-con'>
          <h2 className={`text-${bodyTxt} main-P-heading`}>
              Discover GWM:
          </h2>
          <p className={`text-${bodyTxt} w-full main-p-parah`}>
             Innovation, Sustainability,and Quality at the Core
          </p>
          </div>

          <p className={`main-Parah`}>
              This is a belief shared by every employee and department at GWM, both locally and globally. It's a mindset that has propelled the company since its founding in 1990, pushing the limits of what a car can achieve. It's this same unwavering belief that has led GWM to specialize in crafting vehicles designed with purpose—each model meticulously engineered to meet our customers' needs in the most inspiring and innovative way.
          </p>
        


      <div className='w-full h-fit'>

        <div className='w-full max-w-[1188px]'>
          <h1 className={`Dic-range-h max-w-[20ch] `}>Discover the Range</h1>
          <h1 className={`text-${bodyTxt}  gmw-offer-h w-full max-w-[20ch]`} >The GWM Offerings</h1>
        </div>

      </div>




      <div>

        <nav className='flex flex-wrap items-center max-sm:gap-[20px] gap-[20px] !pr-[16px] !pl-[16px] '>


          {
            carData.map((car)=>{

return(

    <div  key={car?.id}
     className='animated-car-card relative'>

      <div className='flex justify-center flex-col relative w-fit items-center'>
         
         <div className='z-40 landingP-card-txt-con absolute top-[43px] w-full'> 
            <div className=' w-full max-w-[300px] card-car-hover-text  flex flex-col items-center '>
              <p className='h-fit w-fit'>Ex-Factory Price</p>
              <p className='h-fit w-fit'>Contact for Price</p>
            </div>
          </div>

            <img className='home-page-cards w-full object-cover rounded-[7px] h-[128px]' src={car.image}  alt="" />
      </div>
      
            <strong className='car-name-card absolute text-amber-50 max-sm:bottom-[5px] bottom-[15px] left-1.5'>{car.name}</strong>
      
          </div>
)

            })
          }
                  
        </nav>
      </div>

    </main> 
  
</>
  )
})

export default FeatureSec