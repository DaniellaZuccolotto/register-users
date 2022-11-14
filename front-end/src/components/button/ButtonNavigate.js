import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { inputSubmit } from '../../styles/formPageStyle';

function ButtonNavigate({ navigate, name }) {
  const history = useNavigate();

  const handleClick = () => {
    history(navigate);
  };

  const handleClickLocal = () => {
    localStorage.clear();
    history(navigate);
  };

  return (
    <button
    className={ inputSubmit }
    type="button"
    onClick={() => { name === 'REGISTER' ? handleClickLocal() : handleClick() }}
    >
      { name }
    </button>    
  );
}

ButtonNavigate.propTypes = {
  navigate: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default ButtonNavigate;