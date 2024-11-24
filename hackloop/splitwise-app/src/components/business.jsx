import React from 'react'

import { features } from '../constants'
import style,{layout} from '../style'
const FeatureCard =(
  {icon,title,content,index}
)=>(
  <div className={`flex flex-row p-6 rounded-[20px]
  ${index !== features.length-1 ?
    "mb-6":"mb-0"
  } feature-card`}>
    <div className='flex-1 flex flex-col ml-3'>
      <img src={icon} alt="icon"
      className='w-[20%] h-[20%] object-contain' />
      <h4 className='font-poppins font-semibold text-white
      text-[18px] leading-[23px] mb-1'>{title}</h4>
      <p className='font-poppins font-normal text-dimWhite
      text-[16px] leading-[23px] mb-1'>{content}</p>

    </div>
  </div>
)
const business = () => {
  return (
    <section id="features"
    className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>Enjoy the moments,<br className='sm:block hidden' /> we’ll handle the expenses</h2>
        <p className={`${style.paragraph}
        max-w-[470px] mt-5`}>Enjoy the moments without worry. You focus on what matters, and we’ll handle the expenses. It's that simple! Spend freely,
           we’ve got the rest covered</p>
      </div>

      <div className={`${layout.sectionImg}`}>

            {features.map((feature,index)=>(
              <FeatureCard key={feature.id} 
              {...feature}/>
            ))}
      </div>
    </section>
  )
}

export default business