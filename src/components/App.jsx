import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './/Modal';
import fetchImages from './Api';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setIsLoading(true);
      try {
        const fetchedImages = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...fetchedImages]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearchSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const loadMoreImages = () => setPage(prevPage => prevPage + 1);

  const openModal = image => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={loadMoreImages} />}
      {showModal && <Modal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
