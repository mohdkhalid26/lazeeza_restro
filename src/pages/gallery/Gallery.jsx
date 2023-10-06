import React, { useState } from "react";
import "./Gallery.scss";

  


import nuggetsImg from "../images/nuggets.jpg";
import wingsImg from "../images/wings.jpg";
import pizzaImg from "../images/pizza2.jpg";
import burgerImg from "../images/burger.jpg";
import redPastaImg from "../images/redpasta.jpg";
import whitePastaImg from "../images/whitepasta.jpg";
import frenchFriesImg from "../images/frenchfries.jpg";
import mojitoImg from "../images/mojito3.jpg";

import vMenu1 from "../images/vertical img/1-min.jpg"
import vMenu2 from "../images/vertical img/2-min.jpg"
import vMenu3 from "../images/vertical img/3-min.jpg"
import vMenu4 from "../images/vertical img/4-min.jpg"
import vMenu5 from "../images/vertical img/5-min.jpg"
import vMenu6 from "../images/vertical img/6-min.jpg"
import vMenu7 from "../images/vertical img/7-min.jpg"
import vMenu8 from "../images/vertical img/8-min.jpg"
import vMenu9 from "../images/vertical img/9-min.jpg"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const handleWidth=(()=>{
  if (window.innerWidth < 481){
    
  } else if ( window.innerWidth >= 481  ){
  
  }
})

  window.addEventListener("resize", handleWidth)


function Gallery() {
  const [galData,setGalData] = useState([
    {
      img: pizzaImg,
    },
    {
      img: burgerImg,
    },
    {
      img: redPastaImg,
    },

    {
      img: frenchFriesImg,
    },
    {
      img: whitePastaImg,
    },
    {
      img: mojitoImg,
    },
    { img: nuggetsImg },
    { img: wingsImg },
  ]);
  const galDataLength = galData.length - 1;
  const [indexNo, setIndexNo] = useState(0);

  const nextImg = () => {
    if (indexNo !== galDataLength) {
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
      setGalData([{
        img:vMenu1},{img:vMenu2},{img:vMenu3},{img:vMenu4},{img:vMenu5},{img:vMenu6},{img:vMenu7},{img:vMenu8},{img:vMenu9}
      ])
    } else {
      setGalData([
        {
          img: pizzaImg,
        },
        {
          img: burgerImg,
        },
        {
          img: redPastaImg,
        },
    
        {
          img: frenchFriesImg,
        },
        {
          img: whitePastaImg,
        },
        {
          img: mojitoImg,
        },
        { img: nuggetsImg },
        { img: wingsImg },
      ])
    }
  })
  
    window.addEventListener("resize", handleWidth)
  

  return (
    <div id="gallery" className="gallery">
      <div className="img-div">
        <span
          onClick={() => {
            previousImg();
          }}
          className="previous"
          style={{ visibility: indexNo === 0 ? "hidden" : "visible" }}
        >
          <IoIosArrowBack />
        </span>
        {indexNo % 2 === 0 || indexNo === 0 ? (
          <>
            <img src={galData[indexNo].img} alt="" />
          </>
        ) : (
          <>
            <img src={galData[indexNo].img} alt="" />
          </>
        )}
        <span
          onClick={() => {
            nextImg();
          }}
          className="next"
          style={{
            visibility: indexNo === galDataLength ? "hidden" : "visible",
          }}
        >
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
}

export default Gallery;
