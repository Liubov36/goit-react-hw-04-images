import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalImg, Img } from './Modal.styled';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    imgUrl: PropTypes.string.isRequired,
    imageTags: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalImg>
          <Img src={this.props.imageUrl} alt={this.props.imageTags} />
        </ModalImg>
      </Overlay>
    );
  }
}

export default Modal;