import React from 'react'
import Carousel from './MultipleCarousel';
import UAParser from "ua-parser-js";


 function Display({posts}) {
   let userAgent = window.navigator.userAgent;
    const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
    return (
        <div>
           
            <Carousel deviceType={deviceType} posts={posts}/>
        </div>
    )
}


export default (Display)
