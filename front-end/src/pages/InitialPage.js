import React from 'react';
import { ButtonNavigate } from '../components/button';
import UserImage from '../components/image/UserImage';
import { div, aside, h1, div2, img, nav } from '../styles/initialPageStyle';

function FormPage() {

  return (
    <div className={ div }>
      <div className={ div2 }>
        <aside className={ aside }>
          <UserImage className={ img } />
          <h1 className={ h1 } >WELCOME</h1>
        </aside>
        <main>
          <nav className={ nav }>
            <ButtonNavigate navigate="/users" name="USERS LIST"/>
            <ButtonNavigate navigate="/register" name="REGISTER"/>
          </nav>
        </main>
      </div>
    </div>
  );
}

export default FormPage;