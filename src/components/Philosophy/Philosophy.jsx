import React from 'react'
import'./Philosophy.css'
const Philosophy = () => {
  return (
    <div className='con-philosophy w-full  flex items-center justify-center'>
        <div className='w-full max-w-[670px] flex flex-col gap-4 items-center justify-center '>
            
            <strong className='philosophy-h'>Our Philosophy</strong>

            <span className='w-full text-center'>
                <p className='philosophy-parah'>
                    There's a simple philosophy we live by here at GWM. It's what unites us as a company. It's also what separates us from the rest of the competition.
                <strong>''.'Improving little by little everyday'</strong>
                </p>
            </span>

        </div>
    </div>
  )
}

export default Philosophy