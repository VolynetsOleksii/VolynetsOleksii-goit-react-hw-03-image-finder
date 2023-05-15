import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      <span>Load More</span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};