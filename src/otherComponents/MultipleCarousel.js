import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
//import img from '../assets/img/fashion/carousel-1.png';
//import img2 from '../assets/img/fashion/carousel-2.png'
import PropTypes from 'prop-types';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
  
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Simple = ({ deviceType ,posts }) => {
    return (
        <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
      {posts && posts.map(e => {
        return(
          <div key={e.id} className="card  mx-3">
             <img className="img-fluid" height="200" src={e.img} alt="product"></img>
          </div>
        )
      })
    }
      
    </Carousel>
    );
  };
  

 Simple.propTypes = {
    posts: PropTypes.array.isRequired
  };
  export default Simple;
  