import React from 'react'
import'./DynamicAd.css'
function DynamicAd () {
  return (

<section >
        <div className='section'>

            <div className='con-ads-img '>
                <img className='ads-img' src="https://djphncgl0uau7.cloudfront.net/homepage_heroSection_imageHD_1781853565519.jpg" alt="" />
            </div>

            
            <div className='w-full secPadding absolute bottom-[210px]'>

            <div className='flex justify-center'>
              <span className='flex gap-2 justify-between w-full max-w-[93%] text-amber-50 '>
                <button className='left-right-ad-btn'>left</button>
                <button  className='left-right-ad-btn'>right</button>
               </span>
            </div>


             <div className='w-[923px] h-[48px] mt-5'>
             
               <span>
               <img className='w-full h-full' src="https://storage.googleapis.com/havalimages/images/GWMNEWBANNERS19-06-2026/GWMLOGO19-06-2026/01-04.png" alt="" />
               </span>
               
               <span className='w-full'>
                <p className='Dy-car-highLight mt-3'>Dominate Every Terrain</p>
               </span>

               <span className=' flex justify-center items-center w-full max-w-[297px] h-[48px] mt-[32px] border-2.5 border-black bg-black'>
                <p className=' text-white'>
                  booking your 
                </p>
               </span>
             </div>

<div className='dots-con'>
              <ul className='w-full max-w-[200px] flex gap-3'>
                <li  className="w-full max-w-[15px] h-[12px] rounded-[50px]  bg-white"></li>
                <li  className="w-full max-w-[15px] h-[12px] rounded-[50px] bg-white"></li>
                <li  className="w-full max-w-[15px] h-[12px] rounded-[50px] bg-white"></li>
                <li  className="w-full max-w-[15px] h-[12px] rounded-[50px] bg-white"></li>
                <li  className="w-full max-w-[15px] h-[12px] rounded-[50px] bg-white"></li>
                <li  className="w-full max-w-[15px] h-[12px] rounded-[50px] bg-white"></li>
                <li  className="w-full max-w-[15px] h-[12px] rounded-[50px] bg-white"></li>
                <li  className="w-full max-w-[15px] h-[12px] rounded-[50px] bg-white"></li>
                <li  className="w-full max-w-[15px] h-[12px] rounded-[50px] bg-white"></li>
              </ul>
             </div>


            </div>
        
        </div>
    </section>
  )
}

export default DynamicAd