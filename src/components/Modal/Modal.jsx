import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalImg, Img } from './Modal.styled';

export default function Modal({ onClose, imageTags, imageUrl }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalImg>
        <Img src={imageUrl} alt={imageTags} />
      </ModalImg>
    </Overlay>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imageTags: PropTypes.string.isRequired,
};