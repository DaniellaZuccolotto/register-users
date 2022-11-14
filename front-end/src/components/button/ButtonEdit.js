import PropTypes from 'prop-types';
import { buttonDetails, buttonDetails2 } from '../../styles/detailsPageStyle';

function ButtonEdit({ onClick, name }) {

  return (
    <button
      className={ name === 'X'?  buttonDetails2 : buttonDetails }
      type="button"
      onClick={ onClick }
    >
      { name }
    </button>
  );
}

ButtonEdit.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
}.isRequired;

export default ButtonEdit;