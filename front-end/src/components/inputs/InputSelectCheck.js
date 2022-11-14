import React from 'react';
import PropTypes from 'prop-types';

function InputSelectCheck({ selectUser, name }) {
  return (
    <label
      htmlFor={ name }
    >
      <input
        id={ name }
        type="checkbox"
        name={ name }
        onClick={ selectUser }
      />
    </label>
  );
}

InputSelectCheck.propTypes = {
  selectUser: PropTypes.func,
  name: PropTypes.string,
}.isRequired;

export default InputSelectCheck;