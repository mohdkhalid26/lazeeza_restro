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
import vMenu1 from "../images/vertical menu/1-min.jpg"
import vMenu2 from "../images/vertical menu/2-min.jpg"
import vMenu3 from "../images/vertical menu/3-min.jpg"
import vMenu4 from "../images/vertical menu/4-min.jpg"
import vMenu5 from "../images/vertical menu/5-min.jpg"
import vMenu6 from "../images/vertical menu/6-min.jpg"
function Menu() {
const [menuImg, setMenuImg] = useState([{img:menu1},{img:menu2},{img:menu3},{img:menu4},{img:menu5},{img:menu6}]);

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

const handleWidth=(()=>{
  if (window.innerWidth <= 480){
    setMenuImg([{
      img:vMenu1},{img:vMenu2},{img:vMenu3},{img:vMenu4},{img:vMenu5},{img:vMenu6}
    ])
  } else {
    setMenuImg([{img:menu1},{img:menu2},{img:menu3},{img:menu4},{img:menu5},{img:menu6}]);

  }
})

  window.addEventListener("resize", handleWidth)

  return (
    <div id='menu' className='menu'>
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