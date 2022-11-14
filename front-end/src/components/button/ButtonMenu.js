import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../images/back.png';
import { img } from '../../styles/formPageStyle';

function ButtonMenu() {
  const history = useNavigate();

  return (
    <img
    className={ img }
    src={ back } 
    alt="logo"
    onClick={ () => history('/') }
  /> 
  );
}

export default ButtonMenu;