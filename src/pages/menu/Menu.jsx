import React, { useState } from 'react'
import "./Menu.scss"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import menu1 from "../images/1.jpg"
import menu2 from "../images/2.jpg"
import menu3 from "../images/3.jpg"
import menu4 from "../images/4.jpg"
import menu5 from "../images/5.jpg"
import menu6 from "../images/6.jpg"
function Menu() {

const [menuImg, setMenuImg] = useState([{img:menu1},{img:menu2},{img:menu3},{img:menu4},{img:menu5},{img:menu6},]);

const menuImgLength = menuImg.length - 1;
  const [indexNo, setIndexNo] = useState(0);

  const nextImg = () => {
    if (indexNo !== menuImgLength) {
      setIndexNo(indexNo + 1);
    } else {
      setIndexNo(0);
    }
  };
  const previousImg = () => {
    if (indexNo !== 0) {
      setIndexNo(indexNo - 1);
    }
  };


  return (
    <div className='menu'>
<div className="img-div">

<span  style={{ visibility: indexNo === 0 ? "hidden" : "visible" }}
         onClick={() => {
            previousImg();
          }} className='previous'><IoIosArrowBack/></span>
<img src={menuImg[indexNo].img} alt="" />
<span 
style={{
    visibility: indexNo === menuImgLength ? "hidden" : "visible",
  }}
          onClick={() => {
            nextImg();
          }} className='next'><IoIosArrowForward  /></span>
</div>

    </div>
  )
}

export default Menu