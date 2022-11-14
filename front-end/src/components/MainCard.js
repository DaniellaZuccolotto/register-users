import PropTypes from 'prop-types';
import UserImage from '../components/image/UserImage';
import { main, h1, img, p } from '../styles/detailsPageStyle';

function MainCard({ user }) {

  return (
    <main className={ main }>
      <UserImage className={ img } />
      <h1 className={ h1 }>{ user.name }</h1>    
      <p className={ p }>{ `Age: ${user.age}` }</p>
      <p className={ p }>{ `Email: ${user.email}` }</p>
      <p className={ p }>{ `Adress: ${user.adress}, ${user.number}, ${user.city},` + 
      ` ${user.state}, ${user.country}` }</p>
      <p className={ p }>{ `Description: ${user.description}` }</p>
  </main>
  );
}

MainCard.propTypes = {
  user: PropTypes.string,
}.isRequired;

export default MainCard;