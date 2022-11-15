import React, { useContext, useEffect } from 'react';
import { UserCard, Thead } from '../components';
import UsersContext from '../provider/UsersContext';
import { requestGet, requestDeleteOne } from '../utils/api';
import { ButtonMenu, ButtonRemove } from '../components/button';
import { div, aside, h1, table, div2, img } from '../styles/usersPageStyle';
import UserImage from '../components/image/UserImage';

function ListPage() {
  const { selectedUser, users, setUsers } = useContext(UsersContext);
  
  useEffect(() => {
    const getUsers = async () => {
      const response = await requestGet();
      setUsers(response);
    }
    getUsers();
  }, [setUsers]);


  const removeUsers = async () => {
    selectedUser.map(async (id) => {
      await requestDeleteOne(id);
    });
    window.location.reload();
    alert('User removed');
  }

  return (
    <div className={ div }>
      <ButtonMenu />
      <div className={ div2 }>
        <aside className={ aside }>
          <UserImage className={ img } />
          <h1 className={ h1 } >USERS LIST</h1>
          {
            selectedUser.length > 0 && (
              <ButtonRemove removeUsers={ removeUsers } />
            )
          }
        </aside>
        <main>
          <table className={ table }>
            <Thead />
            { users? users.map((user) => <UserCard key={ user.id } user={ user } />) : <p>Loading...</p> }
          </table>
        </main>
      </div>
    </div>
  );
}

export default ListPage;