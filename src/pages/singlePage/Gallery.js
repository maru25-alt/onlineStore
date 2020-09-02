import React, { Component } from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';


export class Gallery extends Component {

    render() {
        return (
            <div>
                 {this.props.images &&  <ImageGallery items={this.props.images} />}
            </div>
        )
    }
}

Gallery.propTypes = {
  images: PropTypes.array
 };



export default Gallery
