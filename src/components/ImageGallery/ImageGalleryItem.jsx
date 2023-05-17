import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Image, ImageItem } from './ImageGalleryItem.styled';
import { ModalImage } from 'components/Modal/Modal.styled';

export class ImageGalleryItem extends Component {
  state = {
    selectedImg: null,
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  setSelectedImg = () => {
    this.setState({ selectedImg: this.props.largeImageURL });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <ImageItem onClick={() => this.toggleModal(largeImageURL)}>
          <Image src={webformatURL} alt={tags} />
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <ModalImage src={largeImageURL} alt={tags} />
            </Modal>
          )}
        </ImageItem>
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
