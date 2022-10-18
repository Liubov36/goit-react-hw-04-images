import PropTypes from 'prop-types';
import { GalleryImage } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, openModal }) {
  return (
    <>
      <GalleryImage>
        {images.map((image, idx) => (
          <ImageGalleryItem key={idx} image={image} openModal={openModal} />
        ))}
      </GalleryImage>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};