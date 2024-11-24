import React from 'react'
import { Dashnav } from './components'
import style from './style'
import {Dash} from './components'
const dashboard = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
       < Dashnav/>
      </div>
  </div>
  <div className={`bg-primary ${style.flexStart} `}>
      <div className={`${style.boxWidth}`}>
        <Dash/>
      </div>
    </div>
  </div>

  )
}

export default dashboard