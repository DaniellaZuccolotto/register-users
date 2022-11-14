import React from 'react';
import PropTypes from 'prop-types';
import { input, label } from '../../styles/formPageStyle';

function NameInput({ register }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <label
      htmlFor="name"
      className={ label }
    >
      <input
        id="name"
        className={ input }
        type="name"
        defaultValue={ user ? user.name : '' }
        placeholder="User Name"
        { ...register('name', {
          required: true
        }) }
      />

    </label>
  );
}

NameInput.propTypes = {
  register: PropTypes.func,
}.isRequired;

export default NameInput;