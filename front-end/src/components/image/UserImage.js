import React from 'react';
import user2 from '../../images/user2.png';
import PropTypes from 'prop-types';

function UserImage({ className }) {
  return (
    <img
      className={ className }
      src={ user2 } 
      alt="logo"
    />
  );
}

UserImage.propTypes = {
  className: PropTypes.string,
}.isRequired;

export default UserImage;