import React from 'react';
import { tr } from '../styles/usersPageStyle';

function Thead() {
  const tHead = ['', 'User', 'Age', 'Email'];

  return (
    <thead>
      <tr className={ tr }>
        {tHead.map((coluns, i) => <th key={ i }>{coluns}</th>)}
      </tr>
    </thead>
  );
}

export default Thead;