import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { Component } from 'react';

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
            <li onClick={() => this.toggleModal(largeImageURL)}>
              <img src={webformatURL} alt={tags} />
              {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
            </li>
            
            </>
          );
      }
    
  
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
