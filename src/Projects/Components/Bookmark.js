import React from 'react'
import "../styles/Bookmark.css";
import img from "../Images/firefox.png";
import {FaRegSun, FaFileImport} from "react-icons/fa";

const Bookmark = () => {
  return (
    <div>
        <div className='bookmark'>
        <FaFileImport className='file'/>
        {/* <p className='book__start1'>Importing Bookmark..</p> */}
            <img src={img} className="book__image" alt='' />
            <p className='book__start'>Getting Started</p>
        </div>
        <FaRegSun className='icons'/>
    </div>
  )
}

export default Bookmark