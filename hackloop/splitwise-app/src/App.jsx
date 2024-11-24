import React from 'react';
import style  from './style';
import {  Business } from './components';
import {Hero} from './components';
import {Note} from './components'
import {Footer} from './components';
import  {Navabar} from './components';


const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
         < Navabar/>
        </div>
    </div>



    <div className={`bg-primary ${style.flexStart} `}>
      <div className={`${style.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${style.paddingX} ${style.flexStart} `}>
      <div className={`${style.boxWidth}`}>
        
        <Business/>
        <Note/>
        <Footer/>
      
   

      </div>
    </div>
   </div>
  )
}

export default App