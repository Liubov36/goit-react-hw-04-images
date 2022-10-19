import { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';

export default function ImageGalleryItem({ image }) {
  const [modal, setModal] = useState(false);
  const { webformatURL, largeImageURL, tags } = image;
  return (
    <GalleryItem>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => setModal(true)}
      />
      {modal && (
        <Modal
          imageUrl={largeImageURL}
          imageTags={tags}
          onClose={() => setModal(false)}
        />
      )}
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};