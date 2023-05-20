import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem';
import PropTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ allItems }) => {
  return (
    <ImageList>
      {allItems.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  allItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
