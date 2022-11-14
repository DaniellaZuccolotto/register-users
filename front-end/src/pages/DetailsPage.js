import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { requestDeleteOne } from '../utils/api';
import { EditForm, MainCard } from '../components';
import UsersContext from '../provider/UsersContext';
import { ButtonRemove, ButtonNavigate, ButtonEdit, ButtonMenu } from '../components/button';
import { div, aside, nav } from '../styles/detailsPageStyle';


function DetailsPage() {
  const { edit, setEdit } = useContext(UsersContext);
  const [user, setUser] = useState({});
  const history = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, [setUser]);

  const removeUser = async () => {
    const id = pathname.split('/').pop();
    await requestDeleteOne(id);
    localStorage.removeItem('user');
    history('/users');
    alert('User removed');
  };

  const editUser = () => {
    setEdit(true);
  };

  return (
    <div className={ div }>
      <aside className={ aside }>
        <ButtonMenu />
        <nav className={ nav }>
          <ButtonNavigate navigate="/users" name="Users list" />
          <ButtonRemove removeUsers={ removeUser } />
          <ButtonEdit onClick={ editUser } name="Edit user" />
        </nav>
      </aside>
      { edit ? <EditForm /> : <MainCard user={ user } /> }
    </div>
  );
}

export default DetailsPage;