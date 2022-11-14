import React from 'react';
import PropTypes from 'prop-types';
import { input, label } from '../../styles/formPageStyle';

function AgeInput({ register }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <label
      htmlFor="Age"
      className={ label }
    >
      <input
        id="Age"
        type="number"
        className={ input }
        placeholder="User Age"
        defaultValue={ user ? user.age : '' }
        { ...register('age', {
          required: true,
        }) }
      />

    </label>
  );
}

AgeInput.propTypes = {
  register: PropTypes.func,
}.isRequired;

export default AgeInput;