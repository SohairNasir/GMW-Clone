import React from 'react'
import'./TestDrive.css'
import DownSvg from'../../assets/chevronDown.svg?react'
const TestDrive = () => {
  return (

    <main className='flex items-center justify-center'>
        <div className='w-full  max-w-[800px]'>

            <div className='flex items-center flex-col gap-4'>
                <h1 className='test-driv-heading'>Book a Test Drive</h1>
                <h6 className='text-[16px] leading-[24.3px] text-[#0F0F0F]'>Experience the thrill of driving a Haval vehicle</h6>
                <p className='border-line'></p>
            </div>

            <div className='flex gap-5 w-full justify-between'>
                
                <span className='inpt-title'>
                    Select a Vehicle
                </span>

                <div className='vehicle-select-con !p-[12px] flex justify-between'>
                    
                    <div className='flex gap-[15px] items-center'>
                    
                       <div className='image-con grid text-gray-500 place-items-center'>
                        {/* <img src="" alt="" /> */}
                        Select Vehicle
                       </div>
                     <h6>Select Vehicle</h6>
                    
                    </div>

                    {/* down chevron */}

                    <DownSvg className='w-[20px]'/>
                </div>
                
            </div>

            <div className='flex justify-center !mb-[8px] !mt-[25px]'>
                <p className='border-line'></p>
            </div>


            <div className='flex gap-5px w-full justify-between'>
                <span className='inpt-title'>
                    Your Details
                </span>

                <div className='flex flex-wrap gap-[8px] w-full max-w-[500px]'>
                    <div className="info-inpt-con"><span>svg</span><input type="text" /></div>
                    <div className="info-inpt-con"><span>svg</span><input type="text" /></div>
                    <div className="info-inpt-con"><span>svg</span><input type="text" /></div>
                    <div className="info-inpt-con"><span>svg</span><input type="text" /></div>
                </div>


            </div>


        </div>
    </main>
  )
}

export default TestDrive