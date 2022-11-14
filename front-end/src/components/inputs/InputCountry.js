import React from 'react';
import PropTypes from 'prop-types';
import { input, label } from '../../styles/formPageStyle';

function CountryInput({ register }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <label
      htmlFor="country"
      className={ label }
    >
      <input
        id="country"
        type="text"
        className={ input }
        placeholder="User Country"
        defaultValue={ user ? user.country : '' }
        { ...register('country', {
          required: true
        }) }
      />
    </label>
  );
}

CountryInput.propTypes = {
  register: PropTypes.func,
}.isRequired;

export default CountryInput;