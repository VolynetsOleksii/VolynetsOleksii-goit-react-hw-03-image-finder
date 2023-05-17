import PropTypes from 'prop-types';
import { Button } from './Button.styled';

export const ButtonLoadMore = ({ onClick }) => {
  return (
    <Button type="submit" onClick={onClick}>
      <span>Load More</span>
    </Button>
  );
};

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};