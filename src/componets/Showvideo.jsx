import React, { useState } from 'react'
import Styles from '../componets/Showvideo.module.css'
import Select from './Select'
import Video from './Video'
import Cow from '../video/Cow.mp4'
import City from '../video/City.mp4'

export const Showvideo = () => {

  const [state,setState] = useState(Cow);

  const handleState = (radioBtn)=>{
    setState(radioBtn);
  }

  const materials = {
    Cow:Cow,
    City:City
  }
  const inputValue = Object.keys(materials);

  return (
    <div className={Styles.container}>
        <Select handleState={handleState} materials={materials} inputValue={inputValue}/>
        <div>
            <Video sendVideo={state}/>
        </div>
    </div>
  )
}
