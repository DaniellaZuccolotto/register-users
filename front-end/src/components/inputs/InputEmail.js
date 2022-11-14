import React from 'react';
import PropTypes from 'prop-types';
import { input, label } from '../../styles/formPageStyle';

function EmailInput({ register }) {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <label
      htmlFor="email"
      className={ label }
    >
      <input
        id="email"
        type="text"
        className={ input }
        placeholder="User Email"
        defaultValue={ user ? user.email : '' }
        { ...register(
          'email',
          { pattern: /[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, required: true },
        ) }
      />

    </label>
  );
}

EmailInput.propTypes = {
  register: PropTypes.func,
}.isRequired;

export default EmailInput;