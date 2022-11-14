import React from 'react';
import PropTypes from 'prop-types';
import { input, label } from '../../styles/formPageStyle';

function CityInput({ register }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <label
      htmlFor="city"
      className={ label }
    >
      <input
        id="city"
        type="text"
        className={ input }
        placeholder="User City"
        defaultValue={ user ? user.city : '' }
        { ...register('city', {
          required: true
        }) }
      />
    </label>
  );
}

CityInput.propTypes = {
  register: PropTypes.func,
}.isRequired;

export default CityInput;