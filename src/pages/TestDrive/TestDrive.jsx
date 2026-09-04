import React from 'react'
import'./TestDrive.css'
const TestDrive = () => {
  return (
    <main className='flex items-center justify-center'>
        <div className='w-full  max-w-[800px]'>

            <div className='flex items-center flex-col gap-4'>
                <h1 className='test-driv-heading'>Book a Test Drive</h1>
                <h6 className='text-[16px] leading-[24.3px] text-[#0F0F0F]'>Experience the thrill of driving a Haval vehicle</h6>
                <p className='border-line'></p>
            </div>

            <div className='flex gap-5 '>
                <h6>
                    Select a Vehicle
                </h6>

                <div className='vehicle-select-con'>
                    <select name="" id="">
                        <option value="">hey    </option>
                    </select>
                </div>
                
            </div>

        </div>
    </main>
  )
}

export default TestDrive