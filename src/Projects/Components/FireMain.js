import React from 'react'
import "../styles/FireMain.css";
import img from "../Images/firefox.png";
import {FaGoogle} from "react-icons/fa"

const FireMain = () => {
  return (
    <div>
        <div className='firefox'>
            <img src={img} className='fire__image' alt='' />
            <h2>Firefox</h2>
        </div>
        <div className='main__input'>
            <FaGoogle className='google__image'/>
            <input type="text" className='input' placeholder='Search with Google or enter address'/>
        </div>
    </div>
  )
}

export default FireMain