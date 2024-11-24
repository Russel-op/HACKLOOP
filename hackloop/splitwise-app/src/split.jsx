import React from 'react'
import style from './style'
import { Splitnav } from './components'
import {DynamicTable} from './components'
const split = () => {
  
  return (
    <div className='bg-primary w-full overflow-hidden'>
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
       < Splitnav/>
      </div>
  </div>
  <div className={`bg-primary ${style.flexStart} `}>
      <div className={`${style.boxWidth}`}>
        <DynamicTable/>
      </div>
    </div></div>
  )
}

export default split