import React from 'react'
import style  from './style';
import {Recnav} from './components';
import {RecentActivity} from './components';
const Resent = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
       < Recnav/>
      </div>
  </div>
  <div>
    <RecentActivity/>
  </div>
  
  </div>
  )
}

export default Resent