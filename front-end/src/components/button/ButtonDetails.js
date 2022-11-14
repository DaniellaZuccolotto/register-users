import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { button } from '../../styles/detailsPageStyle';

function ButtonDetails({ user }) {
  const history = useNavigate();

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify(user));
    history(`/users/${user.id}`)
  };

  return (
    <button
      className={ button }
      type="button"
      onClick={ handleClick } 
    >
      Details
    </button>    
  );
}

ButtonDetails.propTypes = {
  user: PropTypes.object,
}.isRequired;

export default ButtonDetails;