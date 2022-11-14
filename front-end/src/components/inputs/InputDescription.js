import React from 'react';
import PropTypes from 'prop-types';
import { input, label } from '../../styles/formPageStyle';

function DescriptionInput({ register }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <label
      htmlFor="description"
      className={ label }
    >
      <input
        id="description"
        type="textbox"
        className={ input }
        placeholder="User Description (optional)"
        defaultValue={ user ? user.description : '' }
        { ...register('description') }
      />
    </label>
  );
}

DescriptionInput.propTypes = {
  register: PropTypes.func,
}.isRequired;

export default DescriptionInput;