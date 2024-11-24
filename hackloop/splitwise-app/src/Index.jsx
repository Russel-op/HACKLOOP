import React from 'react'
import style  from './style';
import  {ProfileNavbar} from './components';
import {ZigZagLayout} from './components';
import {socialMedia} from './constants'
const Index = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
         < ProfileNavbar/>
        </div>
    </div>
    <div className={`bg-primary ${style.flexStart} `}>
      <div className={`${style.boxWidth}`}>
        <ZigZagLayout/>
      </div>
    </div>
    <div className='w-full flex justify-between items-center
      md:flex-row flex-col pt-6 border-t-[1px]
      border-t-[#3f3r45]'>
        <p className='font-poppins font-normal text-[18px]
                leading-[27px] text-center text-white'>
          2024 Name.All Rights reserved
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
            {socialMedia.map((social,index)=>
            (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px]
                  object-contain
                  ${index !==socialMedia.length-1?"mr-6":"mr-0"}
                  `} />
                  
            ))}
            </div>
        </div>
    </div>
  )
}

export default Index