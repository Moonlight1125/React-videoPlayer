import React from 'react'
import Styles from '../componets/Slect.module.css'
import Cow from '../video/Cow.mp4'
import City from '../video/City.mp4'

const Select = ({handleState,materials,inputValue}) => {
    const handleSend = (e)=>{
        handleState(e.target.value);
    }
  return (
    <div>
        <form className={Styles.container} onChange={handleSend} > 
            <label className={Styles.radioBtn} htmlFor="">
            <input type="radio" name='video' value={Cow} defaultChecked='checked'/>Cow
            </label>
            <label className={Styles.radioBtn} htmlFor="">
            <input type="radio" name='video' value={City}/>Night CIty
            </label>
        </form>
        {/* <form onChange={handleSend}>
        {inputValue.map((name,index)=>
        <div key={index}>
            <label className={Styles.radioBtn} htmlFor="">
            <input type="radio" name='video' value={materials.name} defaultChecked={index===0&&'checked'}/>{name}
            </label>
        </div>
      )}
      </form> */}
    </div>
  )
}

export default Select