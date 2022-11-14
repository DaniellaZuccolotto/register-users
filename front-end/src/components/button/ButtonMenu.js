import React from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '../../images/menu.png';
import { img } from '../../styles/formPageStyle';

function ButtonMenu() {
  const history = useNavigate();

  return (
    <img
    className={ img }
    src={ menu } 
    alt="logo"
    onClick={ () => history('/') }
  /> 
  );
}

export default ButtonMenu;