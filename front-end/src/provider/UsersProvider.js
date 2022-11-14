import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UsersContext from './UsersContext';

function UsersProvider({ children }) {
  const [selectedUser, setSelectedUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);

  const contextValue = useMemo(() => ({
    selectedUser,
    setSelectedUser,
    users,
    setUsers,
    edit,
    setEdit,
  }), [selectedUser, users, edit]);

  return (
    <UsersContext.Provider value={ contextValue }>
      { children }
    </UsersContext.Provider>
  );
}

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersProvider;