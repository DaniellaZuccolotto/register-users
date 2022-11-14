import React from 'react';
import PropTypes from 'prop-types';
import { input, label } from '../../styles/formPageStyle';

function StateInput({ register }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <label
      htmlFor="state"
      className={ label }
    >
      <input
        id="state"
        type="text"
        className={ input }
        placeholder="User State"
        defaultValue={ user ? user.state : '' }
        { ...register('state', {
          required: true
        }) }
      />
    </label>
  );
}

StateInput.propTypes = {
  register: PropTypes.func,
}.isRequired;

export default StateInput;