import PropTypes from 'prop-types';
import { ButtonSubmit } from './Button.styled';

export default function Button({ onClick }) {
  return (
    <ButtonSubmit type="button" onClick={onClick}>
      Load more
    </ButtonSubmit>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};