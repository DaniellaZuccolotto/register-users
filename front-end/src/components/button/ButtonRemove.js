import React from 'react';
import PropTypes from 'prop-types';
import { inputSubmit } from '../../styles/usersPageStyle';

function ButtonRemove({ removeUsers }) {
  return (
    <button
      className={ inputSubmit }
      type="button"
      onClick={ removeUsers } 
    >
      Excluir
    </button>
  );
}

ButtonRemove.propTypes = {
  removeUsers: PropTypes.func,
}.isRequired;

export default ButtonRemove;