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
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function Gallery() {
  const [galData] = useState([
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

  //   setInterval(() => {
  //     nextImg()
  //   }, 5000);

  return (
    <div className="gallery">
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
