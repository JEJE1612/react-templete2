import React, { Component } from 'react'
import { Zoom } from "react-slideshow-image";
import image1 from "./photo/photo-1584819299780-0cb713a9ba58.jpg";
import image2 from "./photo/istockphoto-479726050-170667a.jpg";
import image3 from"./photo/istockphoto-1293174967-170667a (1).jpg";
import image4 from "./photo/istockphoto-1286796686-170667a.jpg";
import "react-slideshow-image/dist/styles.css";
import "./style.css";

const images = [image1, image2, image3, image4];
const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    scale: 0.4,
    arrows: true
  };
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img key={index} style={{ width: "100%" ,height:"800px"}} src={each} />
          ))}
        </Zoom>
      </div>
    );
  };
    

export class restaurant extends Component {
    render() {
        return (
            <div>
                 <Slideshow className="each-fade"/>


            </div>
        )
    }
}

export default restaurant;
