import React from 'react'
import "../styles/Items.css";
import img from "../Images/react.png";
import img1 from "../Images/reactIcons.png";
import img2 from "../Images/youtube.png";
import img3 from "../Images/facebook.png";
import img4 from "../Images/wiki.png";
import img5 from "../Images/reddit.png";
import img6 from "../Images/twitter.jpg";

const Items = () => {
  return (
    <div>
        <div className='Main__items'>
            <div className='inside__items'>
                <div className='items__div'>
                    <img src={img} className="image" alt='' />
                </div>
                <p className='paragh'>Localhost</p>
            </div>

            <div className='inside__items'>
                <div className='items__div'>
                    <img src={img1} className="image" alt='' />
                </div>
                <p className='paragh'>react-icons</p>
            </div>

            <div className='inside__items'>
                <div className='items__div'>
                    <img src={img2} className="image" alt='' />
                </div>
                <p className='paragh'>Youtube</p>
            </div>

            <div className='inside__items'>
                <div className='items__div'>
                    <img src={img3} className="image" alt='' />
                </div>
                <p className='paragh'>Facebook</p>
            </div>

            <div className='inside__items'>
                <div className='items__div'>
                    <img src={img4} className="image" alt='' />
                </div>
                <p className='paragh'>Wikipedia</p>
            </div>

            <div className='inside__items'>
                <div className='items__div'>
                    <img src={img5} className="image" alt='' />
                </div>
                <p className='paragh'>Reddit</p>
            </div>

            <div className='inside__items'>
                <div className='items__div'>
                    <img src={img6} className="image" alt='' />
                </div>
                <p className='paragh'>Twitter</p>
            </div>
        </div>
    </div>
  )
}

export default Items