import React from 'react';
import PropTypes from 'prop-types';
import { input, label } from '../../styles/formPageStyle';

function NumberInput({ register }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <label
      htmlFor="number"
      className={ label }
    >
      <input
        id="number"
        type="number"
        className={ input }
        placeholder="User Number"
        defaultValue={ user ? user.number : '' }
        { ...register('number') }
      />

    </label>
  );
}

NumberInput.propTypes = {
  register: PropTypes.func,
}.isRequired;

export default NumberInput;