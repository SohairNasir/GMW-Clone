import React from 'react'
import'./DynamicAd.css'
function DynamicAd () {
  return (
    <section>
        <div>

            <div className='con-ads-img '>
                <img className='ads-img' src="https://djphncgl0uau7.cloudfront.net/homepage_heroSection_imageHD_1781853565519.jpg" alt="" />
            </div>

            <div className='w-full absolute bottom-[305px] bg-amber-950'>
            
            <div className='flex justify-center w-full'>
              <span className='flex gap-2 justify-between w-full max-w-[90%] text-amber-50 '>
                <button>left</button>
                <button>right</button>
               </span>
             </div>


             <div>
              <h1>tank</h1>
             </div>



            </div>
        
        </div>
    </section>
  )
}

export default DynamicAd