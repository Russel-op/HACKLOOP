import React from 'react'
import style from '../style'
import {footerLinks,socialMedia} from '../constants'
const Footer = () => {
  return (
    <section className={`${style.flexCenter} ${style.paddingY}
      flex-col
    `}>
      <div className={`${style.flexStart} md:flex-row
      flex-col mb-8 w-full`}>
          <div className='flex-1 flex flex-col justify-start
          mr-10'>
            <img src=" logo.png" alt="logo" 
            className='w-[266px] h-[72px] object-contain'/>
          <p className={`${style.paragraph} mt-4 max-w-[310px]`}>
          Enjoy the moments without worry. You focus on what matters, and we’ll handle the expenses. It's that simple! Spend freely,
          we’ve got the rest covered
          </p>
          
          </div>
          <div className='flex-[1.5] w-full flex flex-row
          justify-end flex-wrap md:mt-0  mt-10'>
            {footerLinks.map((footerLink)=>(
              <div key={footerLink.key} className='flex flex-col
              ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-poppins font-medium text-[18px]
                leading-[27px] text-white'>
                  {footerLink.title}
                </h4>
                <ul className='mr-10 list-none mt-4'>
                  {footerLink.links.map((link,index)=>(
                      <li key={link.name}
                      className={`font-poppins font-normal
                        text-[16px] leading-[24px] text-dimWhite
                        hover:text-secondary cursor-pointer
                        ${index!== footerLink.links.length-1?
                          'mb-4':'mb-0'}
                        }`}>
                          {link.name}
                        </li>
                 ) )}
                </ul>
                </div>
            ))}

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
    </section>
  )
}

export default Footer;