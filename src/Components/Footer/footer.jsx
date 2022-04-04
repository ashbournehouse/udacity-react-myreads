/*************************************************
   This stateless functional component merely
   displays a 'branded' footer with a very small
   amount of useful information.
*************************************************/
import React from 'react';

import './footer.css';

function Footer(props) {
  const left = props.left ? props.left : "Andrew Biller";
  const centre = props.centre ? props.centre : "Ashbourne House Technology Ltd";
  const right = props.right ? props.right : "Date goes here";

  return (
    <div className="footer">
    	<h5 className="footerLeft">{left}</h5>
    	<h5 className="footerCentre">{centre}</h5>
    	<h5 className="footerRight">{right}</h5>
    </div>
  )
}

export default Footer
