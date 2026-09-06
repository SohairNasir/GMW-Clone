import React from 'react'
import'./TestDrive.css'
import DownSvg from'../../assets/chevronDown.svg?react'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { textFieldClasses } from '@mui/material/TextField';



const TestDrive = () => {

    let current = new Date()
    console.log(current.toLocaleDateString())
 
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

                <div className='flex flex-wrap gap-[8px]  w-full max-w-[500px]'>
 
                    <div className="info-inpt-con">
 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth={2}strokeLinecap="round"strokeLinejoin="round"className="w-[19px] text-gray-400 ">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} />
                        </svg>
                    </span>

                    <input className='inpt' type="text" placeholder='First Name*' />
                </div>

                <div className="info-inpt-con">
                    
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[19px] text-gray-400">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                    </span>

                    <input className='inpt' type="text" placeholder='Last Name*' />
                </div>
                
                    <div className="info-inpt-con"><span><BsTelephone className='text-gray-400' /></span><input className='text-[15px] font-thin placeholder-[#0F0F0F]' type="text" placeholder='Phone Number*' /></div>
                    <div className="info-inpt-con"><span><MdOutlineMailOutline className='text-gray-400'/></span><input className='inpt' type="text" placeholder='Email Address*' /></div>

                </div>

            </div>

            
            <div className='flex justify-center !mb-[8px] !mt-[25px]'>
                <p className='border-line'></p>
            </div>


            <div className='flex gap-5px w-full justify-between'>
                <span className='inpt-title'>Your Preferences</span>

            <div className='flex flex-col justify-between gap-[8px]  w-full max-w-[500px]'>
                
                <div className='flex justify-between w-full max-w-[100%] bg-amber-500'>
                    <input type="text" />
                    <span>svg</span>
                </div>

                <div className='flex justify-between w-full max-w-[100%] bg-amber-500'>
                    <input type="text" />
                    <span>svg</span>
                </div>
                
                <div className='flex justify-between w-full max-w-[100%] bg-amber-500'>
                    <input type="text" />
                    <span>svg</span>
                </div>
                

        <DemoItem  label="Responsive variant">
            <DatePicker slotProps={{textField:{ size: 'small'}}} disablePast defaultValue={dayjs(current)} />
        </DemoItem>
            

            </div>

        </div>

        </div>
    </main>
  )
}

export default TestDrive