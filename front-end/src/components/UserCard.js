import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { InputSelectCheck } from './inputs';
import { ButtonDetails } from './button';
import UsersContext from '../provider/UsersContext';
import { td } from '../styles/usersPageStyle';

function UserCard({ user }) {
  const { setSelectedUser, selectedUser } = useContext(UsersContext);
  const { name, email, age, id } = user;

  const selectUser = () => {
    if (selectedUser.includes(id)) {
      setSelectedUser(selectedUser.filter((userId) => userId !== id));
      return null;
    }
    setSelectedUser((prevState) => {
      return [...prevState, id];
    });
  };

  return (
    <tbody
     className="text-center text-white p-10" 
    >
      { !user ? <h1>Loading...</h1>
        : (
          <tr>
            <td>
              <InputSelectCheck selectUser={ selectUser } name={ name } />
            </td>
            <td className={ td }>{ name }</td>
            <td className={ td }>{ age }</td>
            <td className={ td }>{ email }</td>
            <td className={ td }>
              <ButtonDetails user={ user } />
            </td>
          </tr>
        )}
    </tbody>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;