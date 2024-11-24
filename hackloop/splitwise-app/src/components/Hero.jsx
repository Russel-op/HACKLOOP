import React from 'react';
import hero from '../assets/hero.jpeg';
import style from '../style';
import Circle from './Circle.jsx';
const Hero = () => {
  return (
    <section id="home" className={`flex 
      md:flex-row flex-col ${style.paddingY}
    `}>
      <div className={`flex-1 ${style.flexStart}
      flex-col x1:px-0 sm:px-16 px-6`} >
        <div className='flex flex-row
        justify-between item-center w-full'>
          <h1 className='flex-1 font-poppins
          font-semibold ss:text-[72px] text-[52px]
          text-white ss:leading-[100px]
          leading-[75px]'
          >
            Your <br />
            Personal <br className='sm:block
            hidden'/> {" "}
                   <span className="inline-flex items-center">
             
            <span
            className='text-gradient'>Finance </span>
            <div className='ml-20 relative bottom-[115px] '>
              <Circle /></div>
            </span><br />
           <span
            className='text-gradient'>Buddy </span>
             
         </h1>
        
         
        </div>
        <h1 className='flex-1 font-poppins
          font-semibold ss:text-[60px] text-[52px]
          text-white ss:leading-[100px]
          leading-[75px] '
          >WHY IS THIS APP?</h1>
          <p className={`${style.paragraph}
          max-w-[600px] mt-3`}>Managing shared expenses can be complicated,
           but our app simplifies it by automatically logging, splitting, and tracking group costs with transparency. With intuitive features like personalized 
           budgeting tips and visual spending insights, it helps
            users make better financial decisions. Save time, avoid disputes, and stay on top of your finances—all in one place!</p>
      </div>
      <div className={`flex-1 flex
        ${style.flexCenter} md:my-0
        my-10 
        relative
        `}>
        <img src={hero} alt="img"
        className='w-[500px] h-[500px] relative
        z-[5]' />
        <div className="absolute
        z-[0] w-[40%]
        h-[35%] top-0 pink__gradient" ></div>
         <div className="absolute
        z-[1] w-[40%]
        h-[35%] rounded-full bottom-40 white__gradient" ></div>
        <div className="absolute
        z-[0] w-[50%]
        h-[35%] right-20 bottom-20 blue__gradient" ></div>
      </div>
    </section>
  )
}

export default Hero;