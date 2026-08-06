import React from 'react'
import'./Ytube.css'
const Ytube = () => {
  return (

    <section className='w-full h-autopl-[16px] pr-[16px]'>
        <div className='w-full aspect-[16/9] object-cover'>
            <iframe className='w-full h-full'  src="https://www.youtube.com/embed/nuELEbLb83E?si=4v2RDI2M18kjrNON" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    </section>

  )
}

export default Ytube