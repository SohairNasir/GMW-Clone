import React from 'react'
import './AboutImg.css'

const AboutImg = () => {
console.log('about page')
  return (


    <main className='w-full min-h-[100vh] h-full' >

        <div className='max-w-[100vw] h-[100vh]'>
            
            <div className='bg-img max-w-[100%] h-[100%]'></div>

            <div className='main-img-Text-con w-fit absolute bottom-[120px] left-[101px] '>
            
            <h1 className='big-font'>
             great wall motors
            </h1>

            <h1 className='small-font'>
                Discover the brand
            </h1>

            </div>

        </div>


    </main>

  )
}

export default AboutImg