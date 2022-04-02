/*************************************************
   This stateless functional component merely
   displays a 'branded' banner with a very small
   amount of useful information and the option
   to display some debugging text.
*************************************************/
import React from 'react';

import {randomMuppet} from './random-muppet.mjs';
import bannerimage from './banner-image-ajb.jpg';
import './banner.css';

function Banner(props) {
  const mainHeading = props.main ? props.main : "Main Heading";
  const subHeading = props.sub ? props.sub : "Sub Heading";
  const debugText = props.debugtext ? props.debugtext : false;

  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-image">
          <img src={bannerimage} alt="Not Found" />
        </div>
        <div className="banner-text">
          <div className="banner-main-heading">
            <h2>{mainHeading}</h2>
          </div>
          <div className="banner-sub-heading">
            <h4>{subHeading}</h4>
          </div>
          {debugText ? (
            <div className="debug-strip">
              <p>{debugText}</p>
            </div>
          ) : (
            <div className="debug-strip no-debug">
              <p> </p>
            </div>
          )}
        </div>
      </div>
   </div>
  )
}

export default Banner;
