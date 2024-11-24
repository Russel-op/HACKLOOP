import React from 'react'
import style from '../style';
const Circle = () => {
  return (
    <div className=
    {`${style.flexCenter}
    w-[140px] h-[140px] rounded-full
    bg-blue-gradient p-[2] cursor-pointer`}>
        <div className={`${style.flexCenter}
        flex-col bg-primary w-[100%] h-[100%]
        rounded-full`}>
            <div className={`${style.flexStart}
            flex-row`}>
                <p className='font-poppins
                font-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'>Gw</span>
                </p>
            </div>
            <p className='font-poppins
                font-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'>SAMPLE</span>
                </p>
        </div>
    </div>
  )
}

export default Circle