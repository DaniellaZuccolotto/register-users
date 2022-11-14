import React from 'react';
import PropTypes from 'prop-types';
import { input, label } from '../../styles/formPageStyle';

function AdressInput({ register }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <label
      htmlFor="adress"
      className={ label }
    >
      <input
        id="adress"
        type="text"
        className={ input }
        placeholder="User Adress"
        defaultValue={ user ? user.adress : '' }
        { ...register('adress', {
          required: true
        }) }
      />
    </label>
  );
}

AdressInput.propTypes = {
  register: PropTypes.func,
}.isRequired;

export default AdressInput;