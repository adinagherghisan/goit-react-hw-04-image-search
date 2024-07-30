import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImage, largeImage, onClick }) => (
  <li className="ImageGalleryItem" onClick={() => onClick(largeImage)}>
    <img src={smallImage} alt="" className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
